'use client';

import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  Stack
} from '@mui/material';
import { keyframes } from '@mui/system';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import Link from 'next/link';
import AssignForm from '../components/trang-chu/AssignForm';

// --- ANIMATIONS ---
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

// --- FONTS ---
const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

// --- DỮ LIỆU 3 CUỐN SÁCH CỐT LÕI (Đã thêm link file PDF) ---
const coreBooks = [
  {
    id: 1,
    title: "TUYỂN SINH 10 & CÁC ĐỀ TOÁN THỰC TẾ",
    subject: "Toán Học",
    desc: "Tổng hợp các chuyên đề trọng tâm, phân dạng bài tập từ cơ bản đến nâng cao theo cấu trúc đề thi mới nhất.",
    icon: "📘",
    gradient: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
    chapters: ["Chuyên đề Đại số", "Chuyên đề Hình học", "Toán Thực tế"],
    // SỬA ĐƯỜNG DẪN NÀY ĐÚNG VỚI TÊN FILE CỦA BẠN TRONG THƯ MỤC public
    fileUrl: "/book/sach_toan.pdf" 
  },
  {
    id: 2,
    title: "ĐỀ ÔN THI TUYỂN SINH 10 MÔN NGỮ VĂN",
    subject: "Ngữ Văn",
    desc: "Hướng dẫn chi tiết phương pháp làm bài nghị luận xã hội và văn học ăn trọn điểm.",
    icon: "📕",
    gradient: "linear-gradient(135deg, #c62828 0%, #ef5350 100%)",
    chapters: ["Nghị luận Xã hội", "Nghị luận Văn học"],
    // SỬA ĐƯỜNG DẪN NÀY ĐÚNG VỚI TÊN FILE CỦA BẠN TRONG THƯ MỤC public
    fileUrl: "/book/sach_van.pdf"
  },
  {
    id: 3,
    title: "HƯỚNG DẪN ÔN THI TUYỂN SINH 10 MÔN TIẾNG ANH",
    subject: "Tiếng Anh",
    desc: "Hệ thống toàn bộ cấu trúc ngữ pháp bám sát đề thi Sở GD&ĐT.",
    icon: "📗",
    gradient: "linear-gradient(135deg, #2e7d32 0%, #66bb6a 100%)",
    chapters: ["Ngữ pháp cốt lõi", "Luyện kỹ năng Đọc"],
    // SỬA ĐƯỜNG DẪN NÀY ĐÚNG VỚI TÊN FILE CỦA BẠN TRONG THƯ MỤC public
    fileUrl: "/book/sach_anh.pdf"
  }
];

export default function TaiLieuOnLuyenPage() {

  return (
    <Box sx={{ fontFamily: fontBody, bgcolor: '#f8fafc', minHeight: '100vh', pb: 15 }}>
      
      {/* ================= HEADER SECTION ================= */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
        pt: { xs: 12, md: 15 }, pb: { xs: 15, md: 18 }, 
        textAlign: 'center', color: 'white', position: 'relative', overflow: 'hidden'
      }}>
        <Box sx={{ position: 'absolute', top: -50, left: -50, width: 200, height: 200, bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '50%', animation: `${float} 6s infinite` }} />
        <Box sx={{ position: 'absolute', bottom: -50, right: 100, width: 150, height: 150, bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '50%', animation: `${float} 5s infinite reverse` }} />

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2, animation: `${fadeInUp} 0.8s ease-out` }}>
          <Typography variant="h2" sx={{ textTransform:'uppercase', fontFamily: fontHeader, fontWeight: 900, mb: 3, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            KHO TÀI LIỆU <span style={{ color: '#ffb300' }}>Toàn Diện</span>
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 400, opacity: 0.9, lineHeight: 1.6 }}>
            Trọn bộ giáo trình độc quyền do các chuyên gia biên soạn, bám sát cấu trúc đề thi tuyển sinh lớp 10. Chọn sách để đọc ngay nội dung!
          </Typography>
        </Container>
      </Box>

      {/* ================= BỘ 3 CUỐN SÁCH CỐT LÕI ================= */}
      <Container maxWidth="lg" sx={{ mt: { xs: -8, md: -10 }, position: 'relative', zIndex: 10 }}>
        <Grid container spacing={4} sx={{justifyContent:"center"}}>
          {coreBooks.map((book, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={book.id}>
              <Card sx={{ 
                height: '100%', borderRadius: 4, overflow: 'hidden', display: 'flex', flexDirection: 'column',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)', transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                animation: `${fadeInUp} 0.8s ease-out ${index * 0.2}s both`,
                border: '1px solid #eee',
                '&:hover': { transform: 'translateY(-15px)', boxShadow: '0 30px 60px rgba(0,0,0,0.15)' }
              }}>
                <Box sx={{ background: book.gradient, p: 5, textAlign: 'center', color: 'white', position: 'relative', overflow: 'hidden' }}>
                  <Box sx={{ position: 'absolute', opacity: 0.1, width: '100%', height: '100%', top: 0, left: 0, background: 'radial-gradient(circle, white 10%, transparent 10%)', backgroundSize: '15px 15px' }} />
                  <Typography variant="h1" sx={{ animation: `${float} 4s infinite ${index}s`, fontSize: '5rem', mb: 2, position: 'relative', zIndex: 2 }}>
                    {book.icon}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontFamily: fontHeader, fontWeight: 900, letterSpacing: 2, textTransform: 'uppercase', position: 'relative', zIndex: 2 }}>
                    MÔN {book.subject}
                  </Typography>
                </Box>
                
                <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h5" sx={{ fontFamily: fontHeader, fontWeight: 800, color: '#1a237e', mb: 2, lineHeight: 1.3, minHeight: '6rem' }}>
                    {book.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.6, flexGrow: 1 }}>
                    {book.desc}
                  </Typography>
                  
                  <Stack spacing={1} sx={{ mb: 4 }}>
                    {book.chapters.map((chapter, i) => (
                      <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: book.gradient }} />
                        <Typography variant="body2" sx={{ fontWeight: 700, color: 'text.primary' }}>{chapter}</Typography>
                      </Box>
                    ))}
                  </Stack>

                  <Button 
                    component="a" 
                    href={book.fileUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variant="contained" 
                    fullWidth 
                    size="large"
                    startIcon={<AutoStoriesRoundedIcon />}
                    sx={{ 
                      borderRadius: 8, fontFamily: fontHeader, fontWeight: 800, py: 1.5,
                      background: book.gradient, boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                      color: 'white',
                      '&:hover': { transform: 'scale(1.02)' }, transition: 'all 0.2s'
                    }}
                  >
                    Đọc
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ================= CALL TO ACTION ================= */}
      <Container maxWidth="md" sx={{ mt: 15 }}>
        <Box sx={{ 
          background: 'linear-gradient(135deg, #ff9800 0%, #ff5722 100%)',
          borderRadius: 6, p: { xs: 4, md: 6 }, textAlign: 'center', color: 'white',
          boxShadow: '0 20px 40px rgba(255, 87, 34, 0.3)'
        }}>
          <Typography variant="h4" sx={{ fontFamily: fontHeader, fontWeight: 900, mb: 2 }}>
            Muốn tìm hiểu chi tiết về lộ trình?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', opacity: 0.9 }}>
            Để lại thông tin để được đội ngũ chuyên gia tư vấn chi tiết và định hướng lộ trình học tập cá nhân hóa phù hợp nhất.
          </Typography>
          <Button 
            component={Link} href="/#form-dang-ky"
            variant="contained" size="large"
            sx={{ 
              bgcolor: 'white', color: '#ff5722', borderRadius: 50, px: 5, py: 1.8, 
              fontFamily: fontHeader, fontWeight: 800, fontSize: '1.1rem',
              '&:hover': { bgcolor: 'grey.100', transform: 'scale(1.05)' },
              transition: '0.2s'
            }}
          >
            Đăng Ký Tư Vấn Miễn Phí
          </Button>
        </Box>
      </Container>
    </Box>
  );
}