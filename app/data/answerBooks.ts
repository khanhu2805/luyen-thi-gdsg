/**
 * Đường dẫn PDF đáp án được khai báo tập trung tại đây.
 * Chỉ điền fileUrl khi tệp đã có thật trong public/answers/.
 */
export type AnswerBook = {
  id: number;
  grade: 6 | 7 | 8 | 9;
  slug: string;
  title: string;
  desc: string;
  fileUrl: string | null;
};

export const answerBooks: AnswerBook[] = [
  {
    id: 6,
    grade: 6,
    slug: 'dap-an-toan-6',
    title: '36 đề kiểm tra định kỳ Toán 6',
    desc: 'Đáp án dùng kèm sách 36 đề kiểm tra định kỳ Toán 6.',
    fileUrl: null,
  },
  {
    id: 7,
    grade: 7,
    slug: 'dap-an-toan-7',
    title: '36 đề kiểm tra định kỳ Toán 7',
    desc: 'Đáp án dùng kèm sách 36 đề kiểm tra định kỳ Toán 7.',
    fileUrl: null,
  },
  {
    id: 8,
    grade: 8,
    slug: 'dap-an-toan-8',
    title: '36 đề kiểm tra định kỳ Toán 8',
    desc: 'Đáp án dùng kèm sách 36 đề kiểm tra định kỳ Toán 8.',
    fileUrl: null,
  },
  {
    id: 9,
    grade: 9,
    slug: 'dap-an-toan-9',
    title: '36 đề kiểm tra định kỳ Toán 9',
    desc: 'Đáp án dùng kèm sách 36 đề kiểm tra định kỳ Toán 9.',
    fileUrl: null,
  },
];

export function getAnswerBookBySlug(slug: string): AnswerBook | undefined {
  return answerBooks.find((book) => book.slug === slug);
}