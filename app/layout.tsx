import type { Metadata } from "next";
import { Montserrat, Nunito } from 'next/font/google';
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import ZaloFloatingButton from "./components/ZaloFloatingButton";

const montserrat = Montserrat({ subsets: ['vietnamese'], variable: '--font-montserrat' });
const nunito = Nunito({ subsets: ['vietnamese'], variable: '--font-nunito' });

export const metadata: Metadata = {
  title: "Luyện thi - Giáo dục Sài Gòn",
  description: "Hệ thống ôn tập kiến thức, luyện đề thi trực tuyến chất lượng cao. Cập nhật bám sát chương trình Sở Giáo dục & Đào tạo.",
  keywords: ["luyện thi lớp 10", "đề thi thử vào 10", "giáo dục sài gòn", "ôn thi tuyển sinh", "luyện thi trực tuyến", "tài liệu ôn thi", "giáo viên chuyên môn"],
  openGraph: {
    title: "Luyện thi - Giáo dục Sài Gòn",
    description: "Hệ thống luyện thi trực tuyến.",
    url: "https://luyenthi.giaoducsaigon.com",
    siteName: "Luyện Thi - Giáo dục Sài Gòn",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <Analytics />
      <SpeedInsights />
      <body className={`${montserrat.variable} ${nunito.variable} font-nunito bg-gray-50 text-gray-900 flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <ZaloFloatingButton />
        <Footer />
      </body>
    </html>
  );
}
