import type { Metadata, Viewport } from 'next';
import { Montserrat, Nunito } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import FloatingContactButtons from './components/ContactFloatingButton';

const montserrat = Montserrat({
  subsets: ['vietnamese'],
  variable: '--font-montserrat',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['vietnamese'],
  variable: '--font-nunito',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://luyenthi.giaoducsaigon.edu.vn'),
  title: {
    default: 'Luyện thi - Giáo dục Sài Gòn',
    template: '%s | Luyện thi - Giáo dục Sài Gòn',
  },
  description:
    'Luyện thi tuyển sinh lớp 10 trực tuyến các môn Toán, Ngữ văn, Tiếng Anh với lộ trình 8 tuần, tài liệu ôn tập, đề luyện và đội ngũ giáo viên có kinh nghiệm chuyên môn.',
  keywords: [
    'luyện thi lớp 10',
    'ôn thi tuyển sinh lớp 10',
    'luyện thi Toán lớp 9',
    'luyện thi Ngữ văn lớp 9',
    'luyện thi Tiếng Anh lớp 9',
    'Giáo dục Sài Gòn',
    'đề thi thử vào 10',
  ],
  openGraph: {
    title: 'Luyện thi - Giáo dục Sài Gòn',
    description:
      'Học chắc kiến thức · Vững vàng vào lớp 10 với lộ trình Toán, Ngữ văn, Tiếng Anh.',
    url: 'https://luyenthi.giaoducsaigon.edu.vn',
    siteName: 'Luyện Thi - Giáo dục Sài Gòn',
    locale: 'vi_VN',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#102a66',
  colorScheme: 'light',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body
        className={`${montserrat.variable} ${nunito.variable} font-nunito min-h-screen`}
      >
        <Header />
        <main>{children}</main>
        <FloatingContactButtons />
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
