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
  Divider,
  Paper
} from '@mui/material';
import { keyframes } from '@mui/system';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import PlayCircleFilledWhiteRoundedIcon from '@mui/icons-material/PlayCircleFilledWhiteRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import Link from 'next/link';
import AssignForm from '../components/trang-chu/AssignForm';
import SnackBar from '../components/SnackBar';
import { useState } from 'react';

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
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(2deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const floatReverse = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(15px) rotate(-2deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
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
      "Phó Viện trưởng Viện Đào tạo - Trường Đại học Bình Dương",
      "Đồng chủ biên sách giáo khoa môn Toán bộ \"Chân trời sáng tạo\"",
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
      "Giảng viên tại Trường Đại học Sư phạm TP.HCM",
      "Tác giả, đồng chủ biên của nhiều tài liệu sách ôn thi, ôn luyện vào lớp 10 môn Ngữ văn"
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
      "Tác giả sách giáo khoa môn Tiếng Anh bộ “Tiếng Anh Friends Plus” lớp 6 và lớp 7",
      "Sở hữu các tài liệu ôn thi vào lớp 10 và bài tập ứng dụng thực tế được đánh giá cao",
    ],
    stats: { students: "9.000+", courses: "14+", rating: "4.8" }
  }
];

export default function DoiNguPage() {
  const [openSuccessPopup, setOpenSuccessPopup] = useState(false);
  const [phone, setPhone] = useState('');
  return (
    <Box sx={{ fontFamily: fontBody, bgcolor: '#ffffff', minHeight: '100vh', pb: 15, overflowX: 'hidden' }}>

      {/* ================= HERO SECTION ================= */}
      <Box sx={{
        background: 'linear-gradient(-45deg, #f4f7fe, #e6efff, #eef2fa, #fce8e8)',
        backgroundSize: '400% 400%',
        animation: `${gradientShift} 15s ease infinite`,
        pt: { xs: 12, md: 18 }, pb: { xs: 10, md: 16 },
        textAlign: 'center', position: 'relative', overflow: 'hidden',
        borderBottom: '1px solid rgba(224, 224, 224, 0.5)'
      }}>
        {/* Mảng màu lơ lửng */}
        <Box sx={{ position: 'absolute', top: '10%', left: '5%', width: 350, height: 350, background: 'radial-gradient(circle, rgba(25,118,210,0.1) 0%, transparent 70%)', borderRadius: '50%', animation: `${float} 10s infinite ease-in-out` }} />
        <Box sx={{ position: 'absolute', bottom: '-10%', right: '5%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(211,47,47,0.08) 0%, transparent 70%)', borderRadius: '50%', animation: `${floatReverse} 12s infinite ease-in-out` }} />
        <Box sx={{ position: 'absolute', top: '40%', left: '50%', width: 200, height: 200, background: 'radial-gradient(circle, rgba(46,125,50,0.05) 0%, transparent 70%)', borderRadius: '50%', animation: `${float} 8s infinite ease-in-out`, transform: 'translateX(-50%)' }} />

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2, animation: `${fadeInUp} 1s cubic-bezier(0.2, 0.8, 0.2, 1) both` }}>
          <Chip
            label="Luyện Thi Giáo Dục Sài Gòn"
            sx={{
              mb: 3, px: 2, py: 2.5, fontSize: '0.9rem', fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase',
              bgcolor: 'rgba(25,118,210,0.1)', color: 'primary.main', border: '1px solid rgba(25,118,210,0.2)'
            }}
          />
          <Typography variant="h2" sx={{ fontFamily: fontHeader, fontWeight: 900, mb: 4, color: '#1a237e', fontSize: { xs: '2.5rem', md: '4.2rem' }, lineHeight: 1.1, textTransform: 'uppercase', textShadow: '0 10px 20px rgba(0,0,0,0.05)' }}>
            Đội Ngũ Chuyên Gia <br />
            <Box component="span" sx={{
              background: 'linear-gradient(135deg, #d32f2f 0%, #ff5252 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
              pt: 3,
            }}>
              Kiến Tạo Tương Lai
            </Box>
          </Typography>
          <Typography variant="h6" color="textPrimary" sx={{ fontFamily: fontBody, fontWeight: 500, lineHeight: 1.8, maxWidth: '85%', mx: 'auto', color: '#546e7a' }}>
            Hội tụ những chuyên gia giáo dục hàng đầu, những người thầy cô đã truyền cảm hứng và dẫn dắt hàng ngàn học sinh chinh phục thành công nguyện vọng 1
          </Typography>
        </Container>
      </Box>

      {/* ================= TEACHER PROFILES ================= */}
      <Container maxWidth="xl" sx={{ mt: { xs: 8, md: 6 }, position: 'relative', zIndex: 10 }}>
        <Stack spacing={{ xs: 12, md: 20 }}>
          {teachers.map((teacher, index) => {
            const isEven = index % 2 === 0;

            return (
              <Grid container spacing={{ xs: 6, md: 10 }} key={teacher.id} sx={{ alignItems: "center" }}>

                {/* IMAGE COLUMN */}
                <Grid
                  size={{ xs: 12, md: 5 }}
                  sx={{
                    order: { xs: 1, md: isEven ? 1 : 2 },
                    animation: `${isEven ? slideInLeft : slideInRight} 1s cubic-bezier(0.2, 0.8, 0.2, 1) ${index * 0.3}s both`
                  }}
                >
                  <Box sx={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
                    {/* Shadow Blob - Hiệu ứng bóng đổ cong */}
                    <Box sx={{
                      position: 'absolute', top: 20, left: 10, right: -10, bottom: -20,
                      background: teacher.gradient, borderRadius: '40px', opacity: 0.2, transform: 'rotate(-4deg)',
                      transition: 'all 0.5s ease'
                    }} className="shadow-blob" />

                    <Card sx={{
                      borderRadius: '32px', overflow: 'hidden', position: 'relative', zIndex: 2,
                      boxShadow: '0 25px 60px rgba(0,0,0,0.1)', border: '8px solid white', width: '100%',
                      transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                      '&:hover': {
                        transform: 'translateY(-15px) scale(1.02)',
                        boxShadow: `0 40px 80px ${teacher.color}40`,
                        '& .teacher-img': { transform: 'scale(1.08)' }
                      },
                      '&:hover + .shadow-blob': { transform: 'rotate(0deg) scale(1.05)', opacity: 0.3 }
                    }}>
                      <Box
                        className="teacher-img"
                        component="img"
                        src={teacher.image}
                        alt={teacher.name}
                        sx={{
                          width: '100%', height: { xs: 450, md: 600 }, objectFit: 'cover',
                          display: 'block', transition: 'transform 0.8s ease'
                        }}
                      />
                      {/* Dải màu nhận diện ở dưới ảnh */}
                      <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 12, background: teacher.gradient }} />
                    </Card>

                    {/* Huy hiệu kinh nghiệm lơ lửng - Đã thiết kế lại theo phong cách Glassmorphism */}
                    {/* <Paper sx={{
                      position: 'absolute', bottom: 40, right: isEven ? -40 : 'auto', left: !isEven ? -40 : 'auto', zIndex: 10,
                      background: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(12px)', p: 2.5, borderRadius: 5,
                      boxShadow: '0 15px 35px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: 2.5,
                      animation: `${float} 6s infinite ease-in-out`, border: '1px solid rgba(255,255,255,1)'
                    }}>
                      <Box sx={{ bgcolor: '#fff8e1', p: 1.5, borderRadius: '50%' }}>
                        <WorkspacePremiumRoundedIcon sx={{ fontSize: 40, color: '#ffb300' }} />
                      </Box>
                      <Box>
                        <Typography variant="h5" sx={{ fontFamily: fontHeader, fontWeight: 900, lineHeight: 1, color: '#333' }}>{teacher.stats.rating}/5.0</Typography>
                        <Typography variant="body2" sx={{ color: '#78909c', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, mt: 0.5 }}>Đánh giá</Typography>
                      </Box>
                    </Paper> */}
                  </Box>
                </Grid>

                {/* TEXT COLUMN */}
                <Grid
                  size={{ xs: 12, md: 7 }}
                  sx={{
                    order: { xs: 2, md: isEven ? 2 : 1 },
                    animation: `${isEven ? slideInRight : slideInLeft} 1s cubic-bezier(0.2, 0.8, 0.2, 1) ${index * 0.3}s both`
                  }}
                >
                  <Box sx={{ pl: { md: isEven ? 6 : 0 }, pr: { md: !isEven ? 6 : 0 } }}>
                    <Chip
                      label={teacher.role}
                      sx={{
                        background: `${teacher.color}15`, color: teacher.color, fontSize: '1rem',
                        fontWeight: 800, fontFamily: fontHeader, letterSpacing: 1, mb: 3, px: 2, py: 2.5,
                        transition: 'all 0.3s', '&:hover': { background: teacher.color, color: 'white', transform: 'translateX(5px)' }
                      }}
                    />
                    <Typography variant="h3" sx={{ fontFamily: fontHeader, fontWeight: 900, color: '#1a237e', mb: 4, lineHeight: 1.2 }}>
                      {teacher.name}
                    </Typography>

                    {/* Khối triết lý giảng dạy - Thiết kế nổi bật */}
                    {/* <Box sx={{
                      position: 'relative', p: 4, mb: 5, bgcolor: '#f8fafc', borderRadius: 4,
                      borderLeft: `6px solid ${teacher.color}`, transition: 'all 0.3s ease',
                      '&:hover': { bgcolor: `${teacher.color}08`, transform: 'translateX(10px)' }
                    }}>
                      <Typography variant="body1" sx={{ fontSize: '1.15rem', fontStyle: 'italic', color: '#455a64', lineHeight: 1.8, position: 'relative', zIndex: 2 }}>
                        &quot;{teacher.philosophy}&quot;
                      </Typography>
                    </Box> */}

                    {/* Chi tiết kinh nghiệm */}
                    <Typography variant="h5" sx={{ fontFamily: fontHeader, fontWeight: 800, mb: 3, color: '#263238' }}>
                      Hành trình cống hiến:
                    </Typography>
                    <Stack spacing={2.5} sx={{ mb: 6 }}>
                      {teacher.experiences.map((exp, i) => (
                        <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 2, transition: 'transform 0.2s', '&:hover': { transform: 'translateX(5px)' } }}>
                          <Box sx={{ mt: 0.5, bgcolor: `${teacher.color}20`, p: 0.5, borderRadius: '50%', display: 'flex' }}>
                            <StarRoundedIcon sx={{ color: teacher.color, fontSize: 20 }} />
                          </Box>
                          <Typography variant="body1" sx={{ color: '#546e7a', lineHeight: 1.6, fontSize: '1.25rem' }}>{exp}</Typography>
                        </Box>
                      ))}
                    </Stack>

                    <Divider sx={{ mb: 5, opacity: 0.6 }} />

                    {/* Stats - Đã khôi phục và tinh chỉnh UI */}
                    {/* <Grid container spacing={3}>
                      {[
                        { icon: <MenuBookRoundedIcon fontSize="large" />, value: teacher.stats.courses, label: "Khóa học" },
                        { icon: <PlayCircleFilledWhiteRoundedIcon fontSize="large" />, value: teacher.stats.students, label: "Học viên" }
                      ].map((stat, i) => (
                        <Grid size={{ xs: 6 }} key={i}>
                          <Box sx={{
                            display: 'flex', alignItems: 'center', gap: 2, p: 2, borderRadius: 4, border: '1px solid #f0f0f0',
                            transition: 'all 0.3s ease', '&:hover': { boxShadow: '0 10px 20px rgba(0,0,0,0.05)', transform: 'translateY(-5px)', borderColor: teacher.color }
                          }}>
                            <Box sx={{ p: 1.5, borderRadius: 3, background: `${teacher.color}15`, color: teacher.color, display: 'flex' }}>
                              {stat.icon}
                            </Box>
                            <Box>
                              <Typography variant="h5" sx={{ fontFamily: fontHeader, fontWeight: 900, lineHeight: 1.2, color: '#263238' }}>{stat.value}</Typography>
                              <Typography variant="body2" sx={{ color: '#78909c', fontWeight: 600, mt: 0.5 }}>{stat.label}</Typography>
                            </Box>
                          </Box>
                        </Grid>
                      ))}
                    </Grid> */}

                  </Box>
                </Grid>

              </Grid>
            );
          })}
        </Stack>
      </Container>

      {/* ================= CALL TO ACTION ================= */}
      {/* <Container maxWidth="lg" sx={{ mt: { xs: 15, md: 25 } }}>
        <Box sx={{
          background: 'linear-gradient(135deg, #1976d2 0%, #0d47a1 100%)',
          borderRadius: 8, p: { xs: 5, md: 10 }, textAlign: 'center', color: 'white',
          boxShadow: '0 30px 60px rgba(25, 118, 210, 0.3)', position: 'relative', overflow: 'hidden'
        }}>
          {/* Decorative shapes 
          <Box sx={{ position: 'absolute', top: -50, right: -50, width: 250, height: 250, bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '50%' }} />
          <Box sx={{ position: 'absolute', bottom: -100, left: -50, width: 300, height: 300, bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '50%' }} />

          <Typography variant="h3" sx={{ fontFamily: fontHeader, fontWeight: 900, mb: 3, position: 'relative', zIndex: 2 }}>
            Sẵn Sàng Bứt Phá Điểm Số?
          </Typography>
          <Typography variant="h6" sx={{ mb: 6, fontWeight: 400, opacity: 0.9, maxWidth: '70%', mx: 'auto', lineHeight: 1.8, position: 'relative', zIndex: 2 }}>
            Đồng hành cùng đội ngũ chuyên gia hàng đầu để trải nghiệm phương pháp học tập đột phá, tự tin bước vào kỳ thi sắp tới.
          </Typography>
          <Box sx={{ position: 'relative', display: 'inline-block', zIndex: 2 }}>
            <Button
              component={Link} href="/khoa-hoc"
              variant="contained" size="large"
              sx={{
                bgcolor: 'white', color: '#1976d2', borderRadius: 50, px: 8, py: 2.5,
                fontFamily: fontHeader, fontWeight: 800, fontSize: '1.2rem',
                animation: `${pulseGlow} 2s infinite`,
                '&:hover': {
                  bgcolor: '#f5f5f5',
                  transform: 'translateY(-5px)',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.3)',
                  animation: 'none' // Tắt nhịp đập khi hover
                },
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
            >
              Khám Phá Khóa Học
            </Button>
          </Box>
        </Box>
      </Container> */}
      <Box sx={{ mt: 15 }}>
        <AssignForm setOpenSuccessPopup={setOpenSuccessPopup} setPhone={setPhone} />
        <SnackBar openSuccessPopup={openSuccessPopup} setOpenSuccessPopup={setOpenSuccessPopup} phone={phone} />
      </Box>
    </Box>
  );
}