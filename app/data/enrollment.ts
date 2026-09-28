export type ScheduleOption = {
  id: string;
  day: string;
  time: string;
  start: string;
  end: string;
  label: string;
  startNote: string;
};

export type TeacherInfo = {
  id: string;
  name: string;
  subject: string;
  degree: string;
  organization: string;
  note?: string;
  image?: string;
  accent: string;
};

export type CourseTeacherInfo = {
  teacherId: string;
  schedules: ScheduleOption[];
};

export type CourseInfo = {
  id: string;
  subject: string;
  price: number;
  sessions: number;
  weeks: number;
  description: string;
  teachers: CourseTeacherInfo[];
};

export type CourseSelection = {
  courseId: string;
  teacherId: string;
  scheduleId: string;
};

export const ENROLLMENT_OPEN_DATE = '20/09/2026';
export const COURSE_PRICE = 1_200_000;
export const COURSE_SESSIONS = 8;
export const COURSE_WEEKS = 8;

export const teachers: TeacherInfo[] = [
  {
    id: 'lo-quoc-khai',
    name: 'Thầy Lô Quốc Khải',
    subject: 'Toán',
    degree: 'Thạc sĩ',
    organization: 'Chuyên viên Phòng GD&ĐT P. Tân Phú',
    note: 'Trực tiếp giảng dạy các lớp toán chuyên/ nâng cao.',
    image: '/teachers/lo_quoc_khai.png',
    accent: '#1976d2',
  },
  {
    id: 'nguyen-phuoc-bao-khoi',
    name: 'Thầy Nguyễn Phước Bảo Khôi',
    subject: 'Ngữ văn',
    degree: 'Thạc sĩ',
    organization: 'Đại học Sư phạm TP.HCM',
    image: '/teachers/nguyen_phuoc_bao_khoi.png',
    note: 'Cựu giáo viên THPT chuyên Lê Hồng Phong, TP.HCM (2004 – 2009); Chủ biên, đồng chủ biên của nhiều bộ sách tham khảo phục vụ cho kì thi tốt nghiệp THPT, kì thi tuyển sinh vào lớp 10.',
    accent: '#d32f2f',
  },
  {
    id: 'dinh-hoang-tuan-anh',
    name: 'Thầy Đinh Hoàng Tuấn Anh',
    subject: 'Tiếng Anh',
    degree: 'Cử nhân',
    organization: 'THCS Chánh Hưng',
    image: '/teachers/dinh_hoang_tuan_anh.jpg',
    note: '12 năm kinh nghiệm giảng dạy, TOEIC 955/990; tác giả sách bài kiểm tra Tiếng Anh 8, 9.',
    accent: '#2e7d32',
  },
];

export const courses: CourseInfo[] = [
  {
    id: 'toan',
    subject: 'Toán',
    price: COURSE_PRICE,
    sessions: COURSE_SESSIONS,
    weeks: COURSE_WEEKS,
    description: 'Luyện thi theo lộ trình 8 tuần, củng cố kiến thức trọng tâm và rèn kỹ năng làm bài.',
    teachers: [
      {
        teacherId: 'lo-quoc-khai',
        schedules: [
          {
            id: 'toan-t3-1745',
            day: 'Thứ 3',
            time: '17:45 – 19:15',
            start: '17:45',
            end: '19:15',
            label: 'Thứ 3 • 17:45 – 19:15',
            startNote: 'Bắt đầu theo tuần khai giảng 20/09/2026',
          },
        ],
      },
    ],
  },
  {
    id: 'ngu-van',
    subject: 'Ngữ văn',
    price: COURSE_PRICE,
    sessions: COURSE_SESSIONS,
    weeks: COURSE_WEEKS,
    description: 'Ôn tập kiến thức, kỹ năng đọc hiểu và làm văn theo định hướng tuyển sinh lớp 10.',
    teachers: [
      {
        teacherId: 'nguyen-phuoc-bao-khoi',
        schedules: [
          {
            id: 'van-t4-1900',
            day: 'Thứ 4',
            time: '19:00 – 21:00',
            start: '19:00',
            end: '21:00',
            label: 'Thứ 4 • 19:00 – 21:00',
            startNote: 'Bắt đầu theo tuần khai giảng 20/09/2026',
          },
          {
            id: 'van-t7-1900',
            day: 'Thứ 7',
            time: '19:00 – 21:00',
            start: '19:00',
            end: '21:00',
            label: 'Thứ 7 • 19:00 – 21:00',
            startNote: 'Bắt đầu theo tuần khai giảng 20/09/2026',
          },
        ],
      },
    ],
  },
  {
    id: 'tieng-anh',
    subject: 'Tiếng Anh',
    price: COURSE_PRICE,
    sessions: COURSE_SESSIONS,
    weeks: COURSE_WEEKS,
    description: 'Hệ thống ngữ pháp, từ vựng và chiến lược làm bài theo cấu trúc ôn thi vào lớp 10.',
    teachers: [
      {
        teacherId: 'dinh-hoang-tuan-anh',
        schedules: [
          {
            id: 'anh-t2-1945',
            day: 'Thứ 2',
            time: '19:45 – 21:15',
            start: '19:45',
            end: '21:15',
            label: 'Thứ 2 • 19:45 – 21:15',
            startNote: 'Bắt đầu theo tuần khai giảng 20/09/2026',
          },
          {
            id: 'anh-t4-1945',
            day: 'Thứ 4',
            time: '19:45 – 21:15',
            start: '19:45',
            end: '21:15',
            label: 'Thứ 4 • 19:45 – 21:15',
            startNote: 'Bắt đầu theo tuần khai giảng 20/09/2026',
          },
        ],
      },
    ],
  },
];

export const getTeacherById = (id: string) =>
  teachers.find((teacher) => teacher.id === id);

export const getCourseById = (id: string) =>
  courses.find((course) => course.id === id);

export const getCourseTeacherById = (courseId: string, teacherId: string) =>
  getCourseById(courseId)?.teachers.find((item) => item.teacherId === teacherId);

export const makeDefaultCourseSelection = (
  courseId: string,
): CourseSelection | undefined => {
  const course = getCourseById(courseId);
  if (!course) return undefined;

  const onlyTeacher = course.teachers.length === 1 ? course.teachers[0] : undefined;
  const onlySchedule =
    onlyTeacher?.schedules.length === 1 ? onlyTeacher.schedules[0] : undefined;

  return {
    courseId,
    teacherId: onlyTeacher?.teacherId || '',
    scheduleId: onlySchedule?.id || '',
  };
};

export const formatVnd = (amount: number) =>
  new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    maximumFractionDigits: 0,
  }).format(amount);
