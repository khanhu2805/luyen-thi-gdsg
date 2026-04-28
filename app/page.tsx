import ExamCountdown from './components/ExamCountdown';
import StarIcon from '@mui/icons-material/Star';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

export default function HomePage() {
  const topStudents = [
    { name: 'Nguyễn Minh T.', score: '980/1200', exam: 'ĐGNL ĐHQG TP.HCM', school: 'ĐH Bách Khoa' },
    { name: 'Trần Lê H.', score: '28.5', exam: 'Khối A00', school: 'ĐH Ngoại Thương' },
    { name: 'Phạm Văn K.', score: '27.8', exam: 'Tuyển sinh 10', school: 'THPT Chuyên Lê Hồng Phong' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <ExamCountdown targetDate="2026-06-05T00:00:00" examName="Tuyển sinh 10 (2026)" />

      {/* Hero Section */}
      <section className="bg-gray-50 py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-primary mb-6">
          Vượt Vũ Môn Thành Công Cùng Nền Tảng Luyện Thi Hàng Đầu
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Lộ trình cá nhân hóa, đo lường năng lực thực tế, nhắc nhở tiến độ tự động qua Zalo. Chinh phục cánh cổng trường Chuyên và Đại học Top đầu.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-brand-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-[#1f2a4a] transition">
            Khám phá Khóa học
          </button>
          <button className="border-2 border-brand-primary text-brand-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
            Làm bài Test Năng lực
          </button>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-primary mb-4">Bảng Vàng Thành Tích</h2>
          <p className="text-gray-600">Hàng ngàn học viên đã chinh phục mục tiêu thành công.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topStudents.map((student, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 relative overflow-hidden group hover:-translate-y-1 transition-transform">
              <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1 shadow-sm">
                <StarIcon fontSize="small" /> TOP ĐIỂM CAO
              </div>
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 text-brand-primary">
                <WorkspacePremiumIcon fontSize="large" />
              </div>
              <h3 className="font-bold text-xl text-gray-900">{student.name}</h3>
              <p className="text-brand-accent font-black text-3xl my-2">{student.score}</p>
              <div className="border-t border-gray-100 pt-3 mt-3">
                <p className="text-sm text-gray-500 mb-1">Kỳ thi: <span className="font-medium text-gray-700">{student.exam}</span></p>
                <p className="text-sm text-gray-500">Đỗ: <span className="font-medium text-brand-primary">{student.school}</span></p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}