export type AnswerBook = {
  id: number;
  grade: 6 | 7 | 8 | 9;
  slug: string;
  title: string;
  desc: string;
  icon: string;
  gradient: string;
  fileUrl: string | null;
};

export const answerBooks: AnswerBook[] = [
  {
    id: 6,
    grade: 6,
    slug: 'dap-an-toan-6',
    title: 'ĐÁP ÁN SÁCH LUYỆN THI TOÁN 6',
    desc: 'Đáp án và hướng dẫn giải chi tiết dành cho học sinh lớp 6.',
    icon: '6',
    gradient: 'linear-gradient(135deg, #1565c0 0%, #42a5f5 100%)',
    fileUrl: null,
  },
  {
    id: 7,
    grade: 7,
    slug: 'dap-an-toan-7',
    title: 'ĐÁP ÁN SÁCH LUYỆN THI TOÁN 7',
    desc: 'Đáp án và hướng dẫn giải chi tiết dành cho học sinh lớp 7.',
    icon: '7',
    gradient: 'linear-gradient(135deg, #2e7d32 0%, #66bb6a 100%)',
    fileUrl: null,
  },
  {
    id: 8,
    grade: 8,
    slug: 'dap-an-toan-8',
    title: 'ĐÁP ÁN SÁCH LUYỆN THI TOÁN 8',
    desc: 'Đáp án và hướng dẫn giải chi tiết dành cho học sinh lớp 8.',
    icon: '8',
    gradient: 'linear-gradient(135deg, #ef6c00 0%, #ffa726 100%)',
    fileUrl: null,
  },
  {
    id: 9,
    grade: 9,
    slug: 'dap-an-toan-9',
    title: 'ĐÁP ÁN SÁCH LUYỆN THI TOÁN 9',
    desc: 'Đáp án và hướng dẫn giải chi tiết dành cho học sinh lớp 9.',
    icon: '9',
    gradient: 'linear-gradient(135deg, #6a1b9a 0%, #ab47bc 100%)',
    fileUrl: null,
  },
];

export function getAnswerBookBySlug(slug: string) {
  return answerBooks.find((book) => book.slug === slug);
}