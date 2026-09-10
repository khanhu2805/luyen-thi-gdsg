import { NextRequest, NextResponse } from "next/server";
import { courses, getCourseById, getTeacherById } from "@/app/data/enrollment";
import { createRegistration } from "@/app/lib/google-sheet";
import {
  createVnpayPaymentUrl,
  extractClientIp,
  makeOrderId,
} from "@/app/lib/vnpay";

export const runtime = "nodejs";

type EnrollmentPayload = {
  mode?: "consultation" | "registration";
  studentName?: string;
  studentEmail?: string;
  grade?: string;
  school?: string;
  parentName?: string;
  parentEmail?: string;
  parentPhone?: string;
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
    const courseId = clean(body.courseId);
    const scheduleId = clean(body.scheduleId);
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

    const course = courseId ? getCourseById(courseId) : undefined;
    const teacher = course ? getTeacherById(course.teacherId) : undefined;
    const schedule = course?.schedules.find((item) => item.id === scheduleId);

    if (courseId != "0") {
      if (courseId && !course) {
        return NextResponse.json(
          { ok: false, message: "Khóa học không tồn tại." },
          { status: 400 },
        );
      }
    }

    if (mode === "registration") {
      if (!course) {
        return NextResponse.json(
          { ok: false, message: "Vui lòng chọn môn học muốn đăng ký." },
          { status: 400 },
        );
      }

      if (course.schedules.length > 0 && !schedule) {
        return NextResponse.json(
          { ok: false, message: "Vui lòng chọn lịch học đã mở để thanh toán." },
          { status: 400 },
        );
      }

      if (course.schedules.length === 0) {
        return NextResponse.json(
          {
            ok: false,
            message:
              "Khóa học này chưa có ca chính thức. Vui lòng gửi yêu cầu tư vấn để trung tâm xác nhận lịch trước khi thanh toán.",
          },
          { status: 400 },
        );
      }
    }

    const orderId = makeOrderId();
    const amount = mode === "registration" && course ? course.price : 0;

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
      courseId: course?.id || "",
      courseName: course?.subject || "Cần tư vấn",
      teacherName: teacher?.name || "",
      scheduleId: schedule?.id || "",
      scheduleLabel: schedule?.label || "",
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

    const paymentUrl = createVnpayPaymentUrl({
      orderId,
      amount,
      ipAddress: extractClientIp(request.headers),
      returnUrl: `${siteUrl}/api/vnpay/return`,
      orderInfo: `Thanh toan khoa hoc ${asciiSubject(course!.subject)} ${orderId}`,
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
