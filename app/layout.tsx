import type { Metadata } from "next";
import { Montserrat, Nunito } from 'next/font/google';
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const montserrat = Montserrat({ subsets: ['vietnamese'], variable: '--font-montserrat', weight: ['600', '700', '800'] });
const nunito = Nunito({ subsets: ['vietnamese'], variable: '--font-nunito', weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: "Luyện thi - Giáo dục Sài Gòn",
  description: "Ôn tập kiến thức, luyện đề thi thử, và chia sẻ kinh nghiệm cho kỳ thi",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className={`${montserrat.variable} ${nunito.variable} font-nunito bg-gray-50 text-gray-900 flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
