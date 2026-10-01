export type PublicTeacherInfo = {
  id: string;
  name: string;
  subject: string;
  degree: string;
  organization: string;
  tagline: string;
  note: string;
  highlights: string[];
  image?: string;
  accent: string;
  softAccent: string;
};

export type PublicCourseInfo = {
  id: string;
  subject: string;
  sessions: number;
  weeks: number;
  description: string;
  focus: string[];
};

export type PublicCourseSelection = {
  courseId: string;
  teacherId: '';
  scheduleId: '';
};

export const publicTeachers: PublicTeacherInfo[] = [
  {
    id: 'lo-quoc-khai',
    name: 'Thầy Lô Quốc Khải',
    subject: 'Toán',
    degree: 'Thạc sĩ',
    organization: 'Chuyên viên Phòng GD&ĐT P. Tân Phú',
    tagline: 'Chuyên môn Toán THCS · bồi dưỡng tư duy và kỹ năng giải bài',
    note: 'Trực tiếp giảng dạy các lớp Toán chuyên và nâng cao, chú trọng khả năng phân tích đề, tư duy giải quyết vấn đề và cách trình bày bài làm chặt chẽ.',
    highlights: [
      'Thạc sĩ',
      'Chuyên viên Phòng GD&ĐT P. Tân Phú',
      'Giảng dạy Toán chuyên & nâng cao',
    ],
    image: '/teachers/lo_quoc_khai.png',
    accent: '#2f6fed',
    softAccent: '#eaf2ff',
  },
  {
    id: 'nguyen-phuoc-bao-khoi',
    name: 'Thầy Nguyễn Phước Bảo Khôi',
    subject: 'Ngữ văn',
    degree: 'Thạc sĩ',
    organization: 'Giảng viên Khoa Ngữ văn, Đại học Sư phạm TP.HCM',
    tagline: 'Giảng dạy · nghiên cứu · biên soạn tài liệu ôn thi Ngữ văn',
    note: 'Cựu giáo viên THPT chuyên Lê Hồng Phong, TP.HCM (2004–2009); chủ biên, đồng chủ biên nhiều sách tham khảo phục vụ kì thi tuyển sinh vào lớp 10 và các kì thi quan trọng.',
    highlights: [
      'Giảng viên Khoa Ngữ văn – ĐHSP TP.HCM',
      'Cựu GV THPT chuyên Lê Hồng Phong',
      'Tác giả, đồng chủ biên nhiều sách ôn thi',
    ],
    image: '/teachers/nguyen_phuoc_bao_khoi.png',
    accent: '#e14d4d',
    softAccent: '#fff0f0',
  },
  {
    id: 'dinh-hoang-tuan-anh',
    name: 'Thầy Đinh Hoàng Tuấn Anh',
    subject: 'Tiếng Anh',
    degree: 'Cử nhân',
    organization: 'THCS Chánh Hưng',
    tagline: 'Ngữ pháp · từ vựng · chiến lược làm bài tuyển sinh 10',
    note: '12 năm kinh nghiệm giảng dạy, TOEIC 955/990; tác giả sách Bài kiểm tra Tiếng Anh 8, 9 và nhiều tài liệu luyện tập dành cho học sinh.',
    highlights: [
      '12 năm kinh nghiệm giảng dạy',
      'TOEIC 955/990',
      'Tác giả sách Bài kiểm tra Tiếng Anh 8, 9',
    ],
    image: '/teachers/dinh_hoang_tuan_anh.jpg',
    accent: '#22a06b',
    softAccent: '#e9f8f1',
  },
];

export const publicCourses: PublicCourseInfo[] = [
  {
    id: 'toan',
    subject: 'Toán',
    sessions: 8,
    weeks: 8,
    description:
      'Củng cố kiến thức trọng tâm, rèn tư duy phân tích và kỹ năng xử lý các dạng bài thường gặp trong kỳ thi tuyển sinh lớp 10.',
    focus: ['Đại số & bài toán thực tế', 'Hình học', 'Kỹ năng phân tích đề'],
  },
  {
    id: 'ngu-van',
    subject: 'Ngữ văn',
    sessions: 8,
    weeks: 8,
    description:
      'Hệ thống kiến thức, rèn đọc hiểu và kỹ năng viết để học sinh tự tin xử lý các dạng câu hỏi và bài nghị luận trong đề thi.',
    focus: ['Đọc hiểu', 'Nghị luận xã hội', 'Nghị luận văn học'],
  },
  {
    id: 'tieng-anh',
    subject: 'Tiếng Anh',
    sessions: 8,
    weeks: 8,
    description:
      'Ôn tập ngữ pháp, từ vựng và các dạng bài trọng tâm; xây dựng chiến lược làm bài nhanh, chính xác và có hệ thống.',
    focus: ['Ngữ pháp', 'Từ vựng', 'Đọc hiểu & chiến lược làm bài'],
  },
];

export const getPublicTeacherById = (id: string) =>
  publicTeachers.find((teacher) => teacher.id === id);
