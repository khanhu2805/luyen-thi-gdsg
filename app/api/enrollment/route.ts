import { NextRequest, NextResponse } from "next/server";
import {
  courses,
  getCourseById,
  getTeacherById,
} from "@/app/data/enrollment";
import { createRegistration } from "@/app/lib/google-sheet";
import {
  createVnpayPaymentUrl,
  extractClientIp,
  makeOrderId,
} from "@/app/lib/vnpay";

export const runtime = "nodejs";

type EnrollmentSelectionPayload = {
  courseId?: string;
  teacherId?: string;
  scheduleId?: string;
};

type EnrollmentPayload = {
  mode?: "consultation" | "registration";
  studentName?: string;
  studentEmail?: string;
  grade?: string;
  school?: string;
  parentName?: string;
  parentEmail?: string;
  parentPhone?: string;
  selections?: EnrollmentSelectionPayload[];
  // Giữ tương thích với payload cũ trong thời gian chuyển đổi.
  courseId?: string;
  scheduleId?: string;
  desiredSchedule?: string;
  note?: string;
  website?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^0\d{9}$/;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function asciiSubject(subject: string) {
  return subject
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}

function toMinutes(value: string) {
  const [hour, minute] = value.split(":").map(Number);
  return hour * 60 + minute;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as EnrollmentPayload;

    // Honeypot chống bot đơn giản.
    if (clean(body.website)) {
      return NextResponse.json({ ok: true });
    }

    const mode = body.mode === "registration" ? "registration" : "consultation";
    const studentName = clean(body.studentName);
    const grade = clean(body.grade);
    const school = clean(body.school);
    const parentName = clean(body.parentName);
    const parentEmail = clean(body.parentEmail).toLowerCase();
    const parentPhone = clean(body.parentPhone).replace(/\s/g, "");
    const desiredSchedule = clean(body.desiredSchedule);
    const studentEmail = clean(body.studentEmail);
    const note = clean(body.note);

    if (
      !studentName ||
      !studentEmail ||
      !grade ||
      !school ||
      !parentName ||
      !parentEmail ||
      !parentPhone
    ) {
      return NextResponse.json(
        {
          ok: false,
          message: "Vui lòng điền đầy đủ thông tin học sinh và phụ huynh.",
        },
        { status: 400 },
      );
    }

    if (!emailRegex.test(studentEmail)) {
      return NextResponse.json(
        { ok: false, message: "Email học sinh không hợp lệ." },
        { status: 400 },
      );
    }

    if (!emailRegex.test(parentEmail)) {
      return NextResponse.json(
        { ok: false, message: "Email phụ huynh không hợp lệ." },
        { status: 400 },
      );
    }

    if (!phoneRegex.test(parentPhone)) {
      return NextResponse.json(
        {
          ok: false,
          message: "Số điện thoại phụ huynh phải gồm 10 số và bắt đầu bằng 0.",
        },
        { status: 400 },
      );
    }

    const rawSelections: EnrollmentSelectionPayload[] = Array.isArray(body.selections)
      ? body.selections
      : [];

    // Tương thích payload cũ: một courseId + một scheduleId.
    if (rawSelections.length === 0) {
      const legacyCourseId = clean(body.courseId);

      if (legacyCourseId && legacyCourseId !== "0") {
        const legacyCourse = getCourseById(legacyCourseId);
        const onlyTeacher =
          legacyCourse?.teachers.length === 1
            ? legacyCourse.teachers[0]
            : undefined;

        rawSelections.push({
          courseId: legacyCourseId,
          teacherId: onlyTeacher?.teacherId || "",
          scheduleId: clean(body.scheduleId),
        });
      }
    }

    const selections = rawSelections.map((selection) => ({
      courseId: clean(selection?.courseId),
      teacherId: clean(selection?.teacherId),
      scheduleId: clean(selection?.scheduleId),
    }));

    const seenCourseIds = new Set<string>();

    for (const selection of selections) {
      if (!selection.courseId) {
        return NextResponse.json(
          { ok: false, message: "Môn học được chọn không hợp lệ." },
          { status: 400 },
        );
      }

      if (seenCourseIds.has(selection.courseId)) {
        return NextResponse.json(
          { ok: false, message: "Mỗi môn học chỉ được chọn một lần." },
          { status: 400 },
        );
      }

      seenCourseIds.add(selection.courseId);
    }

    const resolvedSelections = [];

    for (const selection of selections) {
      const course = getCourseById(selection.courseId);

      if (!course) {
        return NextResponse.json(
          { ok: false, message: "Khóa học không tồn tại." },
          { status: 400 },
        );
      }

      const teacherOption = selection.teacherId
        ? course.teachers.find((item) => item.teacherId === selection.teacherId)
        : undefined;

      if (selection.teacherId && !teacherOption) {
        return NextResponse.json(
          {
            ok: false,
            message: `Giáo viên đã chọn không thuộc môn ${course.subject}.`,
          },
          { status: 400 },
        );
      }

      const teacher = teacherOption
        ? getTeacherById(teacherOption.teacherId)
        : undefined;

      if (teacherOption && !teacher) {
        return NextResponse.json(
          {
            ok: false,
            message: `Thông tin giáo viên môn ${course.subject} không tồn tại.`,
          },
          { status: 400 },
        );
      }

      const schedule = teacherOption?.schedules.find(
        (item) => item.id === selection.scheduleId,
      );

      if (selection.scheduleId && !schedule) {
        return NextResponse.json(
          {
            ok: false,
            message: `Lịch học đã chọn của môn ${course.subject} không hợp lệ.`,
          },
          { status: 400 },
        );
      }

      if (mode === "registration") {
        if (!teacherOption || !teacher) {
          return NextResponse.json(
            {
              ok: false,
              message: `Vui lòng chọn giáo viên cho môn ${course.subject}.`,
            },
            { status: 400 },
          );
        }

        if (teacherOption.schedules.length === 0) {
          return NextResponse.json(
            {
              ok: false,
              message: `Giáo viên đã chọn của môn ${course.subject} chưa có ca học chính thức.`,
            },
            { status: 400 },
          );
        }

        if (!schedule) {
          return NextResponse.json(
            {
              ok: false,
              message: `Vui lòng chọn lịch học cho môn ${course.subject}.`,
            },
            { status: 400 },
          );
        }
      }

      resolvedSelections.push({
        course,
        teacher,
        teacherOption,
        schedule,
      });
    }

    if (mode === "registration" && resolvedSelections.length === 0) {
      return NextResponse.json(
        { ok: false, message: "Vui lòng chọn ít nhất một môn học muốn đăng ký." },
        { status: 400 },
      );
    }

    if (mode === "registration") {
      for (let i = 0; i < resolvedSelections.length; i += 1) {
        for (let j = i + 1; j < resolvedSelections.length; j += 1) {
          const first = resolvedSelections[i];
          const second = resolvedSelections[j];

          if (!first.schedule || !second.schedule) continue;
          if (first.schedule.day !== second.schedule.day) continue;

          const firstStart = toMinutes(first.schedule.start);
          const firstEnd = toMinutes(first.schedule.end);
          const secondStart = toMinutes(second.schedule.start);
          const secondEnd = toMinutes(second.schedule.end);

          if (firstStart < secondEnd && secondStart < firstEnd) {
            return NextResponse.json(
              {
                ok: false,
                message: `Lịch ${first.course.subject} (${first.schedule.label}) bị trùng với ${second.course.subject} (${second.schedule.label}). Vui lòng chọn ca khác.`,
              },
              { status: 400 },
            );
          }
        }
      }
    }

    const orderId = makeOrderId();
    const amount =
      mode === "registration"
        ? resolvedSelections.reduce((sum, item) => sum + item.course.price, 0)
        : 0;

    const courseId = resolvedSelections
      .map((item) => item.course.id)
      .join("|");

    const courseName =
      resolvedSelections
        .map((item) => item.course.subject)
        .join(" | ") || "Cần tư vấn";

    const teacherName = resolvedSelections
      .map(
        (item) =>
          `${item.course.subject}: ${item.teacher?.name || "Chưa chọn giáo viên"}`,
      )
      .join(" | ");

    const scheduleId = resolvedSelections
      .map((item) => item.schedule?.id || "")
      .join("|");

    const scheduleLabel = resolvedSelections
      .map(
        (item) =>
          `${item.course.subject}: ${item.schedule?.label || "Chưa chọn lịch"}`,
      )
      .join(" | ");

    await createRegistration({
      orderId,
      type: mode,
      studentName,
      studentEmail,
      grade,
      school,
      parentName,
      parentEmail,
      parentPhone,
      courseId,
      courseName,
      teacherName,
      scheduleId,
      scheduleLabel,
      desiredSchedule,
      amount,
      status: mode === "registration" ? "PENDING_PAYMENT" : "NEW_LEAD",
      note,
    });

    if (mode === "consultation") {
      return NextResponse.json({
        ok: true,
        orderId,
        message: "Thông tin tư vấn đã được ghi nhận.",
        availableCourses: courses.map((item) => item.subject),
      });
    }

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
      request.nextUrl.origin;

    const subjectSummary = resolvedSelections
      .map((item) => item.course.subject)
      .join(", ");

    const paymentUrl = createVnpayPaymentUrl({
      orderId,
      amount,
      ipAddress: extractClientIp(request.headers),
      returnUrl: `${siteUrl}/api/vnpay/return`,
      orderInfo: `Thanh toan khoa hoc ${asciiSubject(subjectSummary)} ${orderId}`,
    });

    return NextResponse.json({
      ok: true,
      orderId,
      amount,
      paymentUrl,
    });
  } catch (error) {
    console.error("Enrollment API error:", error);
    return NextResponse.json(
      {
        ok: false,
        message: "Hệ thống đang bận. Vui lòng thử lại hoặc liên hệ trung tâm.",
      },
      { status: 500 },
    );
  }
}
