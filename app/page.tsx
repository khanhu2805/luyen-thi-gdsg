'use client';
import ExamCountdown from './components/ExamCountdown';
import StarIcon from '@mui/icons-material/Star';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Button, Card, CardContent, Typography, Box } from '@mui/material';

export default function HomePage() {
  const topStudents = [
    { name: 'Nguyễn Minh T.', score: '980/1200', exam: 'ĐGNL ĐHQG TP.HCM', school: 'ĐH Bách Khoa' },
    { name: 'Trần Lê H.', score: '28.5', exam: 'Khối A00', school: 'ĐH Ngoại Thương' },
    { name: 'Phạm Văn K.', score: '27.8', exam: 'Tuyển sinh 10', school: 'THPT Chuyên Lê Hồng Phong' },
  ];

  return (
    <div className="bg-white">
      <ExamCountdown targetDate="2026-06-01T07:30:00" examName="Tuyển sinh 10 (2026)" />

      {/* Hero Section */}
      <section className="bg-gray-50 py-20 px-4 text-center">
        <Typography 
          variant="h3" 
          component="h1" 
          sx={{ fontWeight: 800, color: '#1f2a4a', mb: 3, fontFamily: 'var(--font-montserrat)' }}
        >
          Vượt Vũ Môn Thành Công Cùng Nền Tảng Luyện Thi Hàng Đầu
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', mb: 5 }}>
          Lộ trình cá nhân hóa, đo lường năng lực thực tế, nhắc nhở tiến độ tự động qua Zalo. Chinh phục cánh cổng trường Chuyên và Đại học Top đầu.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button 
            variant="contained" 
            size="large"
            sx={{ bgcolor: '#1f2a4a', borderRadius: 2, px: 4, py: 1.5, fontWeight: 'bold' }}
          >
            Khám phá Khóa học
          </Button>
          <Button 
            variant="outlined" 
            size="large"
            sx={{ borderColor: '#1f2a4a', color: '#1f2a4a', borderRadius: 2, px: 4, py: 1.5, fontWeight: 'bold' }}
          >
            Làm bài Test Năng lực
          </Button>
        </Box>
      </section>

      {/* Social Proof */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1f2a4a', mb: 1, fontFamily: 'var(--font-montserrat)' }}>
            Bảng Vàng Thành Tích
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Hàng ngàn học viên đã chinh phục mục tiêu thành công.
          </Typography>
        </Box>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topStudents.map((student, idx) => (
            <Card 
              key={idx} 
              elevation={0}
              sx={{ 
                borderRadius: 4, 
                border: '1px solid #f3f4f6', 
                position: 'relative',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'translateY(-5px)', boxShadow: 3 }
              }}
            >
              <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1 shadow-sm z-10">
                <StarIcon fontSize="small" /> TOP ĐIỂM CAO
              </div>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ width: 64, height: 64, bgcolor: '#eff6ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1f2a4a', mb: 2 }}>
                  <WorkspacePremiumIcon fontSize="large" />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#111827' }}>
                  {student.name}
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 900, color: '#ef4444', my: 1 }}>
                  {student.score}
                </Typography>
                <Box sx={{ borderTop: '1px solid #f3f4f6', pt: 2, mt: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    Kỳ thi: <Box component="span" sx={{ fontWeight: 600, color: '#374151' }}>{student.exam}</Box>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Đỗ: <Box component="span" sx={{ fontWeight: 600, color: '#1f2a4a' }}>{student.school}</Box>
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}