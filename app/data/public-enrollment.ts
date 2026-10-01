export type PublicTeacherInfo = {
  id: string;
  name: string;
  subject: string;
  primaryFact: string;
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
    primaryFact:
      'Có kinh nghiệm trực tiếp giảng dạy, ôn chuyên, nâng cao và luyện thi tuyển sinh lớp 10 tại TP.HCM.',
    organization:
      'Nguyên chuyên viên môn Toán, Phòng Giáo dục và Đào tạo quận Tân Phú.',
    tagline: 'Ôn chuyên · nâng cao · luyện thi tuyển sinh lớp 10',
    note:
      'Có kinh nghiệm trực tiếp giảng dạy, ôn chuyên, nâng cao và luyện thi tuyển sinh lớp 10 tại TP.HCM. Nguyên chuyên viên môn Toán, Phòng Giáo dục và Đào tạo quận Tân Phú.',
    highlights: [
      'Kinh nghiệm trực tiếp giảng dạy và luyện thi tuyển sinh lớp 10 tại TP.HCM',
      'Ôn chuyên và nâng cao môn Toán',
      'Nguyên chuyên viên môn Toán, Phòng Giáo dục và Đào tạo quận Tân Phú',
    ],
    image: '/teachers/lo_quoc_khai.png',
    accent: '#2f6fed',
    softAccent: '#eaf2ff',
  },
  {
    id: 'nguyen-phuoc-bao-khoi',
    name: 'Thầy Nguyễn Phước Bảo Khôi',
    subject: 'Ngữ văn',
    primaryFact:
      'Giảng viên Khoa Ngữ văn, Trường Đại học Sư phạm TP.HCM.',
    organization:
      'Cựu giáo viên Trường THPT chuyên Lê Hồng Phong TP.HCM (2004–2009).',
    tagline: 'Giảng dạy · cố vấn chuyên môn · biên soạn sách tham khảo',
    note:
      'Giảng viên Khoa Ngữ văn, Trường Đại học Sư phạm TP.HCM. Cựu giáo viên Trường THPT chuyên Lê Hồng Phong TP.HCM (2004–2009). Có kinh nghiệm cố vấn chuyên môn và chủ biên nhiều sách tham khảo ôn thi vào lớp 10, tốt nghiệp THPT.',
    highlights: [
      'Giảng viên Khoa Ngữ văn, Trường Đại học Sư phạm TP.HCM',
      'Cựu giáo viên Trường THPT chuyên Lê Hồng Phong TP.HCM (2004–2009)',
      'Có kinh nghiệm cố vấn chuyên môn và chủ biên nhiều sách tham khảo ôn thi vào lớp 10, tốt nghiệp THPT',
    ],
    image: '/teachers/nguyen_phuoc_bao_khoi.png',
    accent: '#e14d4d',
    softAccent: '#fff0f0',
  },
  {
    id: 'dinh-hoang-tuan-anh',
    name: 'Thầy Đinh Hoàng Tuấn Anh',
    subject: 'Tiếng Anh',
    primaryFact: 'Giáo viên có 14 năm kinh nghiệm giảng dạy.',
    organization: 'Giáo viên Trường THCS Chánh Hưng.',
    tagline: '14 năm kinh nghiệm · TOEIC 955/990',
    note:
      'Giáo viên có 14 năm kinh nghiệm giảng dạy. Đạt chứng chỉ TOEIC 955/990. Giáo viên Trường THCS Chánh Hưng.',
    highlights: [
      '14 năm kinh nghiệm giảng dạy',
      'Đạt chứng chỉ TOEIC 955/990',
      'Giáo viên Trường THCS Chánh Hưng',
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
