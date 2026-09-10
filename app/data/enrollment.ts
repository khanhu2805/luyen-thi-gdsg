export type ScheduleOption = {
  id: string;
  day: string;
  time: string;
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

export type CourseInfo = {
  id: string;
  subject: string;
  teacherId: string;
  price: number;
  sessions: number;
  weeks: number;
  description: string;
  schedules: ScheduleOption[];
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
    note: 'Trên 15 năm kinh nghiệm dạy học.',
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
    teacherId: 'lo-quoc-khai',
    price: COURSE_PRICE,
    sessions: COURSE_SESSIONS,
    weeks: COURSE_WEEKS,
    description: 'Luyện thi theo lộ trình 8 tuần, củng cố kiến thức trọng tâm và rèn kỹ năng làm bài.',
    schedules: [
      {
        id: 'toan-t3-1745',
        day: 'Thứ 3',
        time: '17:45 – 19:15',
        label: 'Thứ 3 • 17:45 – 19:15',
        startNote: 'Bắt đầu theo tuần khai giảng 20/09/2026',
      },
    ],
  },
  {
    id: 'test',
    subject: 'test',
    teacherId: 'test',
    price: 1_499,
    sessions: COURSE_SESSIONS,
    weeks: COURSE_WEEKS,
    description: 'Luyện thi theo lộ trình 8 tuần, củng cố kiến thức trọng tâm và rèn kỹ năng làm bài.',
    schedules: [
      {
        id: 'toan-t3-1745',
        day: 'Thứ 3',
        time: '17:45 – 19:15',
        label: 'Thứ 3 • 17:45 – 19:15',
        startNote: 'Bắt đầu theo tuần khai giảng 20/09/2026',
      },
    ],
  },
  {
    id: 'ngu-van',
    subject: 'Ngữ văn',
    teacherId: 'nguyen-phuoc-bao-khoi',
    price: COURSE_PRICE,
    sessions: COURSE_SESSIONS,
    weeks: COURSE_WEEKS,
    description: 'Ôn tập kiến thức, kỹ năng đọc hiểu và làm văn theo định hướng tuyển sinh lớp 10.',
    schedules: [
      {
        id: 'van-t4-1900',
        day: 'Thứ 4',
        time: '19:00 – 21:00',
        label: 'Thứ 4 • 19:00 – 21:00',
        startNote: 'Bắt đầu theo tuần khai giảng 20/09/2026',
      },
      {
        id: 'van-t7-1900',
        day: 'Thứ 7',
        time: '19:00 – 21:00',
        label: 'Thứ 7 • 19:00 – 21:00',
        startNote: 'Bắt đầu theo tuần khai giảng 20/09/2026',
      },
    ],
  },
  {
    id: 'tieng-anh',
    subject: 'Tiếng Anh',
    teacherId: 'dinh-hoang-tuan-anh',
    price: COURSE_PRICE,
    sessions: COURSE_SESSIONS,
    weeks: COURSE_WEEKS,
    description: 'Hệ thống ngữ pháp, từ vựng và chiến lược làm bài theo cấu trúc ôn thi vào lớp 10.',
    schedules: [
      {
        id: 'anh-t2-1945',
        day: 'Thứ 2',
        time: '19:45 – 21:15',
        label: 'Thứ 2 • 19:45 – 21:15',
        startNote: 'Bắt đầu theo tuần khai giảng 20/09/2026',
      },
      {
        id: 'anh-t4-1945',
        day: 'Thứ 4',
        time: '19:45 – 21:15',
        label: 'Thứ 4 • 19:45 – 21:15',
        startNote: 'Bắt đầu theo tuần khai giảng 20/09/2026',
      },
    ],
  },
];

export const getTeacherById = (id: string) =>
  teachers.find((teacher) => teacher.id === id);

export const getCourseById = (id: string) =>
  courses.find((course) => course.id === id);

export const formatVnd = (amount: number) =>
  new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    maximumFractionDigits: 0,
  }).format(amount);
