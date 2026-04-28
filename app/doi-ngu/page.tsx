export default function TeachersPage() {
  const teachers = [
    { name: 'ThS. Nguyễn Văn A', role: 'Trưởng bộ môn Toán • Cố vấn chuyên môn ĐGNL', exp: '10+', students: '5000+', avgScore: '8.5+' },
    { name: 'Cô Trần Thị B', role: 'Chuyên gia luyện thi Ngữ Văn 10', exp: '8+', students: '3000+', avgScore: '8.0+' },
  ];

  return (
    <main className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-brand-primary mb-4">Đội Ngũ Chuyên Gia Luyện Thi</h1>
          <p className="text-lg text-gray-600">Những người thầy cô trực tiếp đồng hành cùng học viên chạm đến ước mơ.</p>
        </div>

        <div className="space-y-8">
          {teachers.map((teacher, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-8 bg-brand-primary text-white p-8 rounded-3xl items-center shadow-lg">
              <div className="w-40 h-40 rounded-full border-4 border-white/20 overflow-hidden shrink-0 bg-gray-300">
                <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">Avatar</div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold mb-2">{teacher.name}</h2>
                <p className="text-lg text-blue-200 mb-6">{teacher.role}</p>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                    <p className="text-2xl font-bold text-brand-accent">{teacher.exp}</p>
                    <p className="text-xs uppercase opacity-80 mt-1">Năm kinh nghiệm</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                    <p className="text-2xl font-bold text-brand-accent">{teacher.students}</p>
                    <p className="text-xs uppercase opacity-80 mt-1">Học viên đỗ NV1</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                    <p className="text-2xl font-bold text-brand-accent">{teacher.avgScore}</p>
                    <p className="text-xs uppercase opacity-80 mt-1">Điểm trung bình</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}