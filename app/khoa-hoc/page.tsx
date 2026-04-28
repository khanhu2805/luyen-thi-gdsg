'use client';
import { useState } from 'react';

export default function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const filters = [
    { id: 'ALL', label: 'Tất cả' },
    { id: 'TS10', label: 'Tuyển sinh 10' },
    { id: 'DGNL', label: 'ĐGNL ĐHQG' },
    { id: 'THPT', label: 'THPT Quốc Gia' },
  ];

  const courses = [
    { id: 1, type: 'DGNL', title: 'Lộ trình Tốc chiến ĐGNL ĐHQG TP.HCM', target: 'Mục tiêu 900+', isHot: true },
    { id: 2, type: 'TS10', title: 'Vượt Vũ Môn - Toán Chuyên 10', target: 'Mục tiêu Trường Chuyên', isHot: false },
    { id: 3, type: 'THPT', title: 'Luyện Đề Tổng Ôn Khối A00', target: 'Mục tiêu 27+', isHot: true },
  ];

  return (
    <main className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-brand-primary mb-8">Lộ Trình Học Tập & Khóa Học</h1>
        
        {/* Bộ lọc */}
        <div className="flex flex-wrap gap-3 mb-10">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                activeFilter === filter.id 
                  ? 'bg-brand-primary text-white shadow-md' 
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Lưới khóa học */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.filter(c => activeFilter === 'ALL' || c.type === activeFilter).map(course => (
            <div key={course.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden relative flex flex-col">
              {course.isHot && (
                <div className="absolute top-4 left-4 bg-brand-accent text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse shadow-md z-10">
                  🔥 Tiêu biểu
                </div>
              )}
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                [Ảnh Thumbnail Video]
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex gap-2 mb-3">
                  <span className="bg-blue-50 text-brand-primary text-xs font-bold px-2 py-1 rounded">{course.type}</span>
                  <span className="bg-green-50 text-green-700 text-xs font-bold px-2 py-1 rounded">{course.target}</span>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-4 flex-1">
                  {course.title}
                </h3>
                <ul className="text-sm text-gray-600 mb-6 space-y-2">
                  <li>✓ 50+ Video bài giảng VOD</li>
                  <li>✓ 10 buổi Live trực tiếp chữa đề</li>
                  <li>✓ Ngân hàng câu hỏi ma trận Bộ GD</li>
                </ul>
                <a href={`/khoa-hoc/${course.id}`} className="block w-full text-center py-3 bg-brand-primary text-white font-bold rounded-lg hover:bg-[#1f2a4a] transition">
                  Xem chi tiết
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}