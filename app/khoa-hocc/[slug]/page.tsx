import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutlined';
import AssignmentIcon from '@mui/icons-material/Assignment';

export default function CourseDetailPage() {
  const modules = [
    { phase: 'Giai đoạn 1', title: 'Nền tảng cốt lõi', desc: 'Hệ thống hóa toàn bộ kiến thức nền tảng.', type: 'video' },
    { phase: 'Giai đoạn 2', title: 'Rèn luyện kỹ năng', desc: 'Thực hành phương pháp loại trừ, giải nhanh bằng máy tính.', type: 'practice' },
    { phase: 'Giai đoạn 3', title: 'Luyện đề thực chiến', desc: 'Thi thử với áp lực thời gian thật trên hệ thống phòng thi ảo.', type: 'exam' }
  ];

  return (
    <main className="bg-gray-50 min-h-screen pb-16">
      {/* Course Hero */}
      <div className="bg-brand-primary text-white pt-16 pb-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="bg-brand-accent px-3 py-1 rounded-full text-sm font-bold mb-4 inline-block">Mục tiêu 900+</span>
          <h1 className="text-4xl font-bold mb-4">Lộ trình Tốc chiến ĐGNL ĐHQG TP.HCM</h1>
          <p className="text-blue-200 text-lg">Giảng dạy bởi đội ngũ chuyên gia luyện thi hàng đầu.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-16">
        {/* Video Preview */}
        <div className="bg-black w-full aspect-video rounded-2xl shadow-xl flex items-center justify-center text-white mb-12">
          <PlayCircleOutlineIcon sx={{ fontSize: 80, opacity: 0.8 }} />
        </div>

        {/* Roadmap Timeline */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold text-brand-primary mb-8">Lộ trình học tập chi tiết</h3>
          <div className="relative border-l-4 border-gray-200 ml-4 space-y-8">
            {modules.map((mod, index) => (
              <div key={index} className="pl-8 relative">
                <div className="absolute w-6 h-6 bg-white border-4 border-brand-accent rounded-full -left-[15px] top-1"></div>
                
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition">
                  <span className="text-brand-accent font-bold text-sm uppercase tracking-wider">{mod.phase}</span>
                  <h4 className="text-xl font-bold text-gray-900 mt-2 flex items-center gap-2">
                    {mod.type === 'video' ? <PlayCircleOutlineIcon className="text-brand-primary" /> : <AssignmentIcon className="text-gray-500" />}
                    {mod.title}
                  </h4>
                  <p className="text-gray-600 mt-2">{mod.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}