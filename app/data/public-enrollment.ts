export type PublicTeacherInfo = {
  id: string;
  name: string;
  subject: string;
  degree: string;
  organization: string;
  note?: string;
  image?: string;
  accent: string;
};

export type PublicCourseInfo = {
  id: string;
  subject: string;
  sessions: number;
  weeks: number;
  description: string;
  teachers: { teacherId: string }[];
};

export type PublicCourseSelection = {
  courseId: string;
  teacherId: string;
  scheduleId: '';
};

export const publicTeachers: PublicTeacherInfo[] = [
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

export const publicCourses: PublicCourseInfo[] = [
  {
    id: 'toan',
    subject: 'Toán',
    sessions: 8,
    weeks: 8,
    description: 'Luyện thi theo lộ trình 8 tuần, củng cố kiến thức trọng tâm và rèn kỹ năng làm bài.',
    teachers: [{ teacherId: 'lo-quoc-khai' }],
  },
  {
    id: 'ngu-van',
    subject: 'Ngữ văn',
    sessions: 8,
    weeks: 8,
    description: 'Ôn tập kiến thức, kỹ năng đọc hiểu và làm văn theo định hướng tuyển sinh lớp 10.',
    teachers: [{ teacherId: 'nguyen-phuoc-bao-khoi' }],
  },
  {
    id: 'tieng-anh',
    subject: 'Tiếng Anh',
    sessions: 8,
    weeks: 8,
    description: 'Hệ thống ngữ pháp, từ vựng và chiến lược làm bài theo cấu trúc ôn thi vào lớp 10.',
    teachers: [{ teacherId: 'dinh-hoang-tuan-anh' }],
  },
];

export const getPublicTeacherById = (id: string) =>
  publicTeachers.find((teacher) => teacher.id === id);
