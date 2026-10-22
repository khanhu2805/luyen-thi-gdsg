export type StudyMaterial = {
  id: 'toan' | 'van' | 'anh';
  name: string;
  title: string;
  description: string;
  fileUrl: string;
  /** Only use a cover that actually belongs to this PDF, not a different book. */
  coverUrl: string | null;
  number: string;
  accent: string;
};

export const studyMaterials: StudyMaterial[] = [
  {
    id: 'toan', name: 'Toán', title: 'Ôn thi vào lớp 10 · Toán',
    description: 'Kiến thức cần nhớ và bài luyện tập trong giai đoạn ôn thi tuyển sinh lớp 10.',
    fileUrl: '/book/sach_toan.pdf', coverUrl: null, number: '01', accent: '#283878',
  },
  {
    id: 'van', name: 'Ngữ văn', title: 'Ôn thi vào lớp 10 · Ngữ văn',
    description: 'Đọc hiểu, viết đoạn văn và các nội dung luyện tập môn Ngữ văn.',
    fileUrl: '/book/sach_van.pdf', coverUrl: null, number: '02', accent: '#BE4051',
  },
  {
    id: 'anh', name: 'Tiếng Anh', title: 'Ôn thi vào lớp 10 · Tiếng Anh',
    description: 'Ôn từ vựng, ngữ pháp và luyện các dạng bài thi thường gặp.',
    fileUrl: '/book/sach_anh.pdf', coverUrl: null, number: '03', accent: '#3B7165',
  },
];