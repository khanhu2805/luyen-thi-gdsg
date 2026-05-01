'use client';

import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  Button, 
  Stack,
  Chip,
  Divider
} from '@mui/material';
import { keyframes } from '@mui/system';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import PlayCircleFilledWhiteRoundedIcon from '@mui/icons-material/PlayCircleFilledWhiteRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import Link from 'next/link';

// --- ANIMATIONS ---
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideInLeft = keyframes`
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
`;

const slideInRight = keyframes`
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// --- FONTS ---
const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

// --- DỮ LIỆU ĐỘI NGŨ CHUYÊN GIA ---
const teachers = [
  {
    id: 1,
    name: "Thầy Huỳnh Ngọc Thanh",
    role: "Giảng viên - Cố vấn chuyên môn Toán",
    image: "/teachers/huynh_ngoc_thanh.png",
    color: "#1976d2",
    gradient: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
    philosophy: "Toán học không phải là những con số khô khan để học thuộc, mà là công cụ tuyệt vời nhất để rèn luyện tư duy logic và giải quyết vấn đề.",
    experiences: [
      "Hơn 10 năm kinh nghiệm luyện thi Tuyển sinh Lớp 10 môn Toán.",
      "Cố vấn nội dung và Giảng viên trực tiếp chương trình ôn luyện trên kênh truyền hình HTV3.",
      "Tác giả chính của hệ thống bài tập thực chiến và các đề thi thử ĐGNL trên nền tảng GDSG."
    ],
    stats: { students: "10.000+", courses: "15+", rating: "4.9" }
  },
  {
    id: 2,
    name: "Thầy Nguyễn Phước Bảo Khôi",
    role: "Giảng viên - Cố vấn chuyên môn Ngữ Văn",
    image: "/teachers/nguyen_phuoc_bao_khoi.png",
    color: "#d32f2f",
    gradient: "linear-gradient(135deg, #c62828 0%, #ef5350 100%)",
    philosophy: "Học Văn là học cách cảm nhận cuộc sống. Một bài văn hay bắt nguồn từ những cảm xúc chân thật được sắp xếp bằng một tư duy rành mạch.",
    experiences: [
      "Chuyên gia với phong cách giảng dạy truyền cảm hứng, giúp hàng ngàn học sinh xóa bỏ nỗi sợ học Văn.",
      "Trực tiếp xây dựng cấu trúc bài giảng bám sát ma trận đề thi thực tế của Sở GD&ĐT.",
      "Tác giả bộ sơ đồ tư duy siêu tốc, tóm gọn mọi tác phẩm trọng tâm trong chương trình Lớp 9."
    ],
    stats: { students: "8.500+", courses: "12+", rating: "4.9" }
  },
  {
    id: 3,
    name: "Thầy Vũ Vạn Xuân",
    role: "Giảng viên - Cố vấn chuyên môn Tiếng Anh",
    image: "/teachers/vu_van_xuan.png",
    color: "#2e7d32",
    gradient: "linear-gradient(135deg, #2e7d32 0%, #66bb6a 100%)",
    philosophy: "Ngữ pháp tiếng Anh phức tạp đến đâu cũng có thể được giải quyết bằng những phương pháp trực quan và tư duy hệ thống.",
    experiences: [
      "Người đồng hành cùng học sinh Lớp 9 trên sóng truyền hình HTV3 giải quyết các chủ điểm ngữ pháp hóc búa.",
      "Áp dụng phương pháp giảng dạy trực quan, dễ hiểu, tập trung vào khả năng ghi nhớ dài hạn.",
      "Xây dựng hệ thống flashcard từ vựng và bài tập rèn luyện kỹ năng đọc hiểu chuyên sâu."
    ],
    stats: { students: "9.000+", courses: "14+", rating: "4.8" }
  }
];

export default function DoiNguPage() {
  return (
    <Box sx={{ fontFamily: fontBody, bgcolor: '#ffffff', minHeight: '100vh', pb: 15 }}>
      
      {/* ================= HERO SECTION ================= */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #f4f7fe 0%, #e6efff 100%)',
        pt: { xs: 12, md: 16 }, pb: { xs: 10, md: 14 }, 
        textAlign: 'center', position: 'relative', overflow: 'hidden',
        borderBottom: '1px solid #e0e0e0'
      }}>
        {/* Background Elements */}
        <Box sx={{ position: 'absolute', top: '20%', left: '10%', width: 300, height: 300, background: 'radial-gradient(circle, rgba(25,118,210,0.08) 0%, transparent 70%)', borderRadius: '50%', animation: `${float} 8s infinite` }} />
        <Box sx={{ position: 'absolute', bottom: '10%', right: '10%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(211,47,47,0.05) 0%, transparent 70%)', borderRadius: '50%', animation: `${float} 10s infinite reverse` }} />

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2, animation: `${fadeInUp} 0.8s ease-out` }}>
          <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', mb: 2 }}>
            Luyện Thi Giáo Dục Sài Gòn
          </Typography>
          <Typography variant="h2" sx={{ fontFamily: fontHeader, fontWeight: 900, mb: 4, color: '#1a237e', fontSize: { xs: '2.5rem', md: '3.8rem' }, lineHeight: 1.2 }}>
            Đội Ngũ Chuyên Gia <br />
            <Box component="span" sx={{ color: '#d32f2f' }}>Kiến Tạo Tương Lai</Box>
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, lineHeight: 1.7, maxWidth: '85%', mx: 'auto' }}>
            Hội tụ những chuyên gia giáo dục hàng đầu, những người thầy đã truyền cảm hứng và dẫn dắt hàng chục ngàn học sinh chinh phục thành công nguyện vọng 1 trên sóng truyền hình HTV3.
          </Typography>
        </Container>
      </Box>

      {/* ================= TEACHER PROFILES ================= */}
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Stack spacing={{ xs: 12, md: 15 }}>
          {teachers.map((teacher, index) => {
            const isEven = index % 2 === 0; // Để xếp xen kẽ: Ảnh trái - phải
            
            return (
              <Grid container spacing={8} key={teacher.id} alignItems="center">
                
                {/* IMAGE COLUMN */}
                <Grid 
                  size={{ xs: 12, md: 5 }} 
                  sx={{ 
                    order: { xs: 1, md: isEven ? 1 : 2 }, // Trên mobile ảnh luôn ở trên, desktop thì đan xen
                    animation: `${isEven ? slideInLeft : slideInRight} 1s cubic-bezier(0.2, 0.8, 0.2, 1) ${index * 0.2}s both`
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    {/* Background blob behind image */}
                    <Box sx={{ 
                      position: 'absolute', top: -20, left: isEven ? -20 : 20, right: isEven ? 20 : -20, bottom: -20,
                      background: teacher.gradient, borderRadius: '30px', opacity: 0.1, transform: 'rotate(-3deg)'
                    }} />
                    
                    <Card sx={{ 
                      borderRadius: '24px', overflow: 'hidden', position: 'relative', zIndex: 2,
                      boxShadow: '0 20px 50px rgba(0,0,0,0.15)', border: '8px solid white'
                    }}>
                      <Box 
                        component="img"
                        src={teacher.image}
                        alt={teacher.name}
                        sx={{ 
                          width: '100%', height: { xs: 400, md: 550 }, objectFit: 'cover', 
                          display: 'block', transition: '0.5s', '&:hover': { transform: 'scale(1.05)' }
                        }}
                      />
                      {/* Dải màu nhận diện ở dưới ảnh */}
                      <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 10, background: teacher.gradient }} />
                    </Card>

                    {/* Huy hiệu kinh nghiệm lơ lửng
                    <Box sx={{ 
                      position: 'absolute', bottom: 30, right: isEven ? -30 : 'auto', left: !isEven ? -30 : 'auto', zIndex: 10,
                      background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)', p: 2, borderRadius: 4,
                      boxShadow: '0 10px 30px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: 2,
                      animation: `${float} 5s infinite`
                    }}>
                      <WorkspacePremiumRoundedIcon sx={{ fontSize: 40, color: '#ffb300' }} />
                      <Box>
                        <Typography variant="h6" sx={{ fontFamily: fontHeader, fontWeight: 900, lineHeight: 1 }}>{teacher.stats.rating}</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 700 }}>Đánh giá</Typography>
                      </Box>
                    </Box> */}
                  </Box>
                </Grid>

                {/* TEXT COLUMN */}
                <Grid 
                  size={{ xs: 12, md: 7 }} 
                  sx={{ 
                    order: { xs: 2, md: isEven ? 2 : 1 },
                    animation: `${isEven ? slideInRight : slideInLeft} 1s cubic-bezier(0.2, 0.8, 0.2, 1) ${index * 0.2}s both`
                  }}
                >
                  <Box sx={{ pl: { md: isEven ? 4 : 0 }, pr: { md: !isEven ? 4 : 0 } }}>
                    <Chip 
                      label={teacher.role} 
                      sx={{ 
                        background: `${teacher.color}15`, color: teacher.color, 
                        fontWeight: 800, fontFamily: fontHeader, letterSpacing: 1, mb: 3, px: 1 
                      }} 
                    />
                    <Typography variant="h3" sx={{ fontFamily: fontHeader, fontWeight: 900, color: '#1a237e', mb: 3 }}>
                      {teacher.name}
                    </Typography>
                    
                    {/* Khối triết lý giảng dạy */}
                    <Box sx={{ borderLeft: `4px solid ${teacher.color}`, pl: 3, mb: 4 }}>
                      <Typography variant="body1" sx={{ fontSize: '1.2rem', fontStyle: 'italic', color: 'text.secondary', lineHeight: 1.8 }}>
                        "{teacher.philosophy}"
                      </Typography>
                    </Box>

                    {/* Chi tiết kinh nghiệm */}
                    <Typography variant="h6" sx={{ fontFamily: fontHeader, fontWeight: 800, mb: 2 }}>
                      Hành trình cống hiến:
                    </Typography>
                    <Stack spacing={2} sx={{ mb: 5 }}>
                      {teacher.experiences.map((exp, i) => (
                        <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                          <StarRoundedIcon sx={{ color: '#ffb300', mt: 0.2 }} />
                          <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>{exp}</Typography>
                        </Box>
                      ))}
                    </Stack>

                    <Divider sx={{ mb: 4 }} />

                    {/* Stats */}
                    <Grid container spacing={3}>
                      {[
                        { icon: <MenuBookRoundedIcon />, value: teacher.stats.courses, label: "Khóa học" },
                        { icon: <PlayCircleFilledWhiteRoundedIcon />, value: teacher.stats.students, label: "Học viên" }
                      ].map((stat, i) => (
                        <Grid size={6} key={i}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box sx={{ p: 1.5, borderRadius: 3, background: `${teacher.color}15`, color: teacher.color, display: 'flex' }}>
                              {stat.icon}
                            </Box>
                            <Box>
                              <Typography variant="h6" sx={{ fontFamily: fontHeader, fontWeight: 800, lineHeight: 1.2 }}>{stat.value}</Typography>
                              <Typography variant="body2" sx={{ color: 'text.secondary' }}>{stat.label}</Typography>
                            </Box>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                    
                  </Box>
                </Grid>

              </Grid>
            );
          })}
        </Stack>
      </Container>

      {/* ================= CALL TO ACTION ================= */}
      <Container maxWidth="md" sx={{ mt: 18 }}>
        <Box sx={{ 
          background: 'linear-gradient(135deg, #1976d2 0%, #115293 100%)',
          borderRadius: 6, p: { xs: 4, md: 8 }, textAlign: 'center', color: 'white',
          boxShadow: '0 25px 50px rgba(25, 118, 210, 0.2)', position: 'relative', overflow: 'hidden'
        }}>
          <Box sx={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '50%' }} />
          
          <Typography variant="h3" sx={{ fontFamily: fontHeader, fontWeight: 900, mb: 3 }}>
            Học Cùng Chuyên Gia Ngay Hôm Nay
          </Typography>
          <Typography variant="h6" sx={{ mb: 5, fontWeight: 400, opacity: 0.9, maxWidth: '80%', mx: 'auto' }}>
            Trải nghiệm phương pháp học tập đột phá, bám sát HTV3 để sẵn sàng bứt phá điểm số trong kỳ thi sắp tới.
          </Typography>
          <Button 
            component={Link} href="/khoa-hoc"
            variant="contained" size="large"
            sx={{ 
              bgcolor: 'white', color: '#1976d2', borderRadius: 50, px: 6, py: 2, 
              fontFamily: fontHeader, fontWeight: 800, fontSize: '1.2rem',
              '&:hover': { bgcolor: 'grey.100', transform: 'translateY(-3px)', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' },
              transition: 'all 0.3s'
            }}
          >
            Khám Phá Các Khóa Học
          </Button>
        </Box>
      </Container>
      
    </Box>
  );
}