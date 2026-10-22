export type StudyMaterial = {
  id: 'toan' | 'van' | 'anh';
  name: string;
  title: string;
  description: string;
  fileUrl: string;
  /** Đường dẫn ảnh bìa nằm trong public/covers/; null khi chưa có ảnh. */
  coverUrl: string | null;
  number: string;
  accent: string;
};

export const studyMaterials: StudyMaterial[] = [
  { id: 'toan', name: 'Toán', title: 'Tài liệu ôn thi vào lớp 10 · Toán',
    description: 'Kiến thức trọng tâm và bài luyện tập cho giai đoạn ôn thi tuyển sinh lớp 10.',
    fileUrl: '/book/sach_toan.pdf', coverUrl: '/covers/toan-9.jpg', number: '01', accent: '#283878' },
  { id: 'van', name: 'Ngữ văn', title: 'Tài liệu ôn thi vào lớp 10 · Ngữ văn',
    description: 'Các nội dung ôn tập đọc hiểu, viết đoạn văn và bài văn.',
    fileUrl: '/book/sach_van.pdf', coverUrl: null, number: '02', accent: '#E82020' },
  { id: 'anh', name: 'Tiếng Anh', title: 'Tài liệu ôn thi vào lớp 10 · Tiếng Anh',
    description: 'Tài liệu luyện từ vựng, ngữ pháp và các dạng bài thường gặp.',
    fileUrl: '/book/sach_anh.pdf', coverUrl: null, number: '03', accent: '#316867' },
];
