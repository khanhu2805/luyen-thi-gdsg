'use client';

import ExamCountdown from './components/ExamCountdown';
import {
  Box,
  Button,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
  TextField,
  Grid,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  Snackbar
} from '@mui/material';
import { keyframes } from '@mui/system';
import Link from 'next/link';
import { useState } from 'react';

// ==========================================
// 1. ĐỊNH NGHĨA ANIMATION PHỨC TẠP
// ==========================================

const marquee = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const blobMorph = keyframes`
  0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
`;

const floatComplex = keyframes`
  0% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(30px, -50px) rotate(10deg); }
  66% { transform: translate(-20px, 20px) rotate(-10deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
`;

const gradientShimmer = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const slideUpFade = keyframes`
  0% { opacity: 0; transform: translateY(50px) scale(0.95); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`;

const pulseGlow = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(25, 118, 210, 0.4); }
  70% { box-shadow: 0 0 0 25px rgba(25, 118, 210, 0); }
  100% { box-shadow: 0 0 0 0 rgba(25, 118, 210, 0); }
`;

// Font chữ chuẩn UI/UX
const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

export default function HomePage() {
  const teachers = [
    {
      id: 1,
      name: "Thầy Huỳnh Ngọc Thanh",
      subject: "Chuyên gia Toán 9",
      description: "10+ năm kinh nghiệm. Cố vấn nội dung đồng hành cùng chương trình Toán học trên truyền hình, tác giả chính của hệ thống bài tập.",
      role: "Giảng viên - Cố vấn môn Toán",
      img: "/teachers/huynh_ngoc_thanh.png",
      color: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)"
    },
    {
      id: 2,
      name: "Thầy Nguyễn Phước Bảo Khôi",
      subject: "Chuyên gia Ngữ Văn 9",
      description: "Xóa bỏ nỗi sợ học Văn. Xây dựng cấu trúc bài giảng sát đề thi thực tế của Sở GD&ĐT và đồng bộ với nội dung phát sóng.",
      role: "Giảng viên - Cố vấn môn Ngữ Văn",
      img: "/teachers/nguyen_phuoc_bao_khoi.png",
      color: "linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)"
    },
    {
      id: 3,
      name: "Thầy Vũ Vạn Xuân",
      subject: "Chuyên gia Tiếng Anh 9",
      description: "Phương pháp trực quan. Giải quyết chủ điểm ngữ pháp hóc búa theo lộ trình bám sát chương trình ôn tập truyền hình.",
      role: "Giảng viên - Cố vấn môn Tiếng Anh",
      img: "/teachers/vu_van_xuan.png",
      color: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)"
    }
  ];

  const [openSuccessPopup, setOpenSuccessPopup] = useState(false);

  const [errors, setErrors] = useState({
    HoTen: '',
    SoDienThoai: '',
    TruongDangHoc: '',
    MonHocMuonOnLuyen: '',
  });

  // 2. Hàm kiểm tra tính hợp lệ
  const validateForm = () => {
    const tempErrors = {
      HoTen: '',
      SoDienThoai: '',
      TruongDangHoc: '',
      MonHocMuonOnLuyen: '',
    };
    let isValid = true;

    // Kiểm tra Họ tên
    if (!formData.HoTen.trim()) {
      tempErrors.HoTen = "Vui lòng nhập họ tên.";
      isValid = false;
    }

    // Kiểm tra Số điện thoại (Regex chuẩn nhà mạng VN)
    const phoneRegex = /^(0[2|3|5|7|8|9])+([0-9]{8})$/;
    if (!formData.SoDienThoai.trim()) {
      tempErrors.SoDienThoai = "Vui lòng nhập số điện thoại.";
      isValid = false;
    } else if (!phoneRegex.test(formData.SoDienThoai)) {
      tempErrors.SoDienThoai = "Số điện thoại không hợp lệ (Gồm 10 số, bắt đầu bằng 09, 03...).";
      isValid = false;
    }

    // Kiểm tra Trường
    if (!formData.TruongDangHoc.trim()) {
      tempErrors.TruongDangHoc = "Vui lòng nhập tên trường.";
      isValid = false;
    }

    // Kiểm tra Môn học
    if (!formData.MonHocMuonOnLuyen.trim()) {
      tempErrors.MonHocMuonOnLuyen = "Vui lòng nhập môn học quan tâm.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const [formData, setFormData] = useState({
    HoTen: '',
    SoDienThoai: '',
    TruongDangHoc: '',
    MonHocMuonOnLuyen: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleClosePopup = () => {
    setOpenSuccessPopup(false);
  };

  const [phone, setPhone] = useState(''); // Biến để lưu số điện thoại hiển thị trong popup

  const handleSubmit = async (e) => {
    e.preventDefault(); // Ngăn form reload lại trang

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Chuyển dữ liệu thành dạng FormData để Google Script dễ đọc
    const data = new FormData();
    Object.keys(formData).forEach(key => {
      data.append(key, formData[key]);
    });

    try {
      // Thay URL_CỦA_BẠN bằng link Web App lấy ở bước trước
      await fetch('https://script.google.com/macros/s/AKfycbxPgs_n6UZ3Pvp3vGHYDtfJPiYdMhy2tZBmJTDC2ZEHSefljcH8F4-36kxSMt1AORxFvw/exec', {
        method: 'POST',
        body: data,
        mode: 'no-cors' // Rất quan trọng: giúp tránh lỗi CORS policy khi gọi từ localhost/domain khác
      });

      setOpenSuccessPopup(true);

      // Xóa trắng form sau khi gửi
      setPhone(formData.SoDienThoai); // Lưu số điện thoại để hiển thị trong popup
      setFormData({ HoTen: '', SoDienThoai: '', TruongDangHoc: '', MonHocMuonOnLuyen: '' });
      setErrors({ HoTen: '', SoDienThoai: '', TruongDangHoc: '', MonHocMuonOnLuyen: '' });
    } catch (error) {
      alert('Có lỗi xảy ra, vui lòng thử lại sau.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // ================================================

  return (
    <Box sx={{ fontFamily: fontBody, overflowX: 'hidden', bgcolor: '#f4f7fe' }}>

      {/* ================= THÔNG BÁO MARQUEE ================= */}
      <Box sx={{
        background: 'linear-gradient(90deg, #d32f2f, #f44336, #d32f2f)',
        backgroundSize: '200% 200%', animation: `${gradientShimmer} 3s ease infinite`,
        color: 'white', py: 1.5, overflow: 'hidden', whiteSpace: 'nowrap',
        boxShadow: '0 4px 15px rgba(211, 47, 47, 0.4)', position: 'relative', zIndex: 50
      }}>
        <Box sx={{
          display: 'inline-block', animation: `${marquee} 20s linear infinite`,
          fontWeight: 800, fontFamily: fontBody, fontSize: '1rem', letterSpacing: 1
        }}>
          ⚡ ƯU ĐÃI ĐẶC BIỆT: TẶNG NGAY VOUCHER GIẢM HỌC PHÍ CHO CÁC HỌC VIÊN ĐĂNG KÝ SỚM! LIÊN HỆ NHẬN TƯ VẤN NGAY HÔM NAY! ⚡        </Box>
      </Box>

      {/* ================= FULL WIDTH COUNTDOWN ================= */}
      {/* Trả ExamCountdown về lại kích thước full-width như thiết kế gốc của bạn */}
      <ExamCountdown targetDate='2026-06-01T07:30:00' examName='Tuyển sinh Lớp 10 (2026-2027)' />

      {/* ================= HERO SECTION ================= */}
      <Box sx={{
        position: 'relative', minHeight: '90vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'linear-gradient(135deg, #ffffff 0%, #e6efff 100%)',
        overflow: 'hidden',
        pt: { xs: 8, md: 4 }, pb: 10
      }}>
        {/* Animated Background Blobs */}
        <Box sx={{
          position: 'absolute', top: '-10%', left: '-5%', width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(25,118,210,0.15) 0%, rgba(25,118,210,0) 70%)',
          animation: `${blobMorph} 15s ease-in-out infinite, ${floatComplex} 20s ease-in-out infinite`,
          zIndex: 0
        }} />
        <Box sx={{
          position: 'absolute', bottom: '-20%', right: '-10%', width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(255,152,0,0.15) 0%, rgba(255,152,0,0) 70%)',
          animation: `${blobMorph} 12s ease-in-out infinite reverse, ${floatComplex} 18s ease-in-out infinite reverse`,
          zIndex: 0
        }} />

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10 }}>
          <Grid container spacing={6} sx={{ alignItems: 'center' }}>
            {/* Nội dung Text */}
            <Grid size={{ xs: 12, md: 7 }} sx={{ animation: `${slideUpFade} 1s cubic-bezier(0.2, 0.8, 0.2, 1)` }}>
              <Typography
                variant="h6"
                sx={{
                  color: 'primary.main', fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase',
                  mb: 2, display: 'inline-block', px: 2, py: 0.5, bgcolor: 'rgba(25,118,210,0.1)', borderRadius: 2
                }}
              >
                PHÁT SÓNG TỪ THÁNG 5/2026 TRÊN HTV3
              </Typography>
              <Typography variant="h2" sx={{ fontFamily: fontHeader, fontWeight: 900, lineHeight: 1.2, mb: 3 }}>
                Đồng Hành Cùng Lớp 9 <br />
                <Box component="span" sx={{
                  background: 'linear-gradient(90deg, #1976d2, #9c27b0)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  backgroundSize: '200% auto', animation: `${gradientShimmer} 3s linear infinite`
                }}>
                  Bứt Phá Điểm Số Vào 10
                </Box>
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 5, fontWeight: 500, lineHeight: 1.6, maxWidth: '95%' }}>
                Môi trường học tập công nghệ cao, cung cấp ngân hàng đề thi và tài liệu được biên soạn <strong>đồng bộ với chương trình đang phát sóng trên kênh HTV3</strong>.
              </Typography>

              <Button
                component={Link} href="/#form-dang-ky"
                variant="contained" size="large"
                sx={{
                  borderRadius: '50px', px: 5, py: 2, fontFamily: fontHeader, fontWeight: 800, fontSize: '1.1rem',
                  background: 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)',
                  boxShadow: '0 10px 30px rgba(25, 118, 210, 0.4)', transition: 'all 0.3s',
                  '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 15px 40px rgba(25, 118, 210, 0.6)' }
                }}
              >
                Khám phá Lộ trình
              </Button>
            </Grid>

            {/* Khối Hình ảnh/Thông báo Glassmorphism thay thế cho Countdown */}
            <Grid size={{ xs: 12, md: 5 }} sx={{ animation: `${slideUpFade} 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.3s both` }}>
              <Card sx={{
                background: 'rgba(255, 255, 255, 0.65)', backdropFilter: 'blur(25px)',
                border: '1px solid rgba(255, 255, 255, 1)', borderRadius: 6,
                boxShadow: '0 25px 50px rgba(0,0,0,0.05)', overflow: 'visible', position: 'relative'
              }}>

                {/* ================= CÁC ICON BAY BAY (FLOATING ICONS) ================= */}
                {/* 1. Icon Sách (Góc trên trái) */}
                <Box sx={{
                  position: 'absolute', top: -20, left: -25, width: 56, height: 56,
                  bgcolor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.8rem', boxShadow: '0 15px 25px rgba(0,0,0,0.12)', zIndex: 10,
                  animation: `${floatComplex} 6s infinite ease-in-out`
                }}>📚</Box>

                {/* 2. Icon Bóng đèn (Góc trên phải) */}
                <Box sx={{
                  position: 'absolute', top: 50, right: -25, width: 48, height: 48,
                  bgcolor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem', boxShadow: '0 15px 25px rgba(0,0,0,0.12)', zIndex: 10,
                  animation: `${floatComplex} 5s infinite ease-in-out reverse`
                }}>💡</Box>

                {/* 3. Icon Mục tiêu (Góc dưới phải) */}
                <Box sx={{
                  position: 'absolute', bottom: -20, right: 40, width: 64, height: 64,
                  bgcolor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '2rem', boxShadow: '0 15px 30px rgba(0,0,0,0.15)', zIndex: 10,
                  animation: `${floatComplex} 7s infinite ease-in-out 1s`
                }}>🎯</Box>
                {/* ============================================================= */}

                <CardContent sx={{ p: 5, textAlign: 'center' }}>
                  <Typography variant="subtitle2" sx={{
                    display: 'inline-flex', alignItems: 'center', gap: 1,
                    color: '#d32f2f', fontWeight: 800, bgcolor: '#ffebee', px: 2, py: 1, borderRadius: 10, mb: 3
                  }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#d32f2f', display: 'inline-block', animation: 'pulse 1s infinite' }} />
                    SONG SONG VỚI TRUYỀN HÌNH
                  </Typography>

                  <Typography variant="h4" sx={{ fontFamily: fontHeader, fontWeight: 900, color: '#1a237e', mb: 2, textTransform: 'uppercase' }}>
                    Bộ Tài Liệu <br /> ôn luyện
                  </Typography>

                  <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.6, fontFamily: fontBody }}>
                    Vừa xem bài giảng trên tivi, vừa lên hệ thống làm bài tập tương ứng để củng cố ngay kiến thức.
                  </Typography>

                  <Button
                    component={Link} href="/tai-lieu-on-luyen"
                    variant="contained" size="large"
                    sx={{
                      borderRadius: '50px', px: 6, py: 2, fontFamily: fontHeader, fontWeight: 800, fontSize: '1.1rem',
                      background: 'linear-gradient(45deg, #1a237e 30%, #1976d2 90%)',
                      boxShadow: '0 10px 30px rgba(26, 35, 126, 0.3)', transition: 'all 0.3s',
                      '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 15px 40px rgba(26, 35, 126, 0.5)' }
                    }}
                  >
                    KHÁM PHÁ NGAY
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>


      {/* ================= TÍNH NĂNG NỔI BẬT (FEATURES) ================= */}
      <Container maxWidth="xl" sx={{ mt: 15 }}>
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="h3" gutterBottom sx={{ fontFamily: fontHeader, fontWeight: 900 }}>
            HỆ THỐNG ÔN LUYỆN <span style={{ color: '#1976d2' }}>CHUẨN XÁC</span>
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', fontSize: '1.2rem', fontFamiy: fontBody }}>
            Hệ thống ôn luyện được thiết kế đặc biệt giúp học sinh tiếp cận kiến thức một cách trực quan và hiệu quả nhất.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {[
            { title: 'TÀI LIỆU BIÊN SOẠN CHUẨN CHỈNH', icon: '📺', color: '#e3f2fd', desc: 'Tài liệu được biên soạn chuẩn chỉnh, sát với nội dung cấu trúc đề thi.' },
            { title: 'NGÂN HÀNG ĐỀ THI THỬ', icon: '📝', color: '#fff3e0', desc: 'Tổng hợp đề thi thử bám sát cấu trúc của Sở GD&ĐT.' },
            { title: 'ZALO REPORT CHO PHỤ HUYNH', icon: '📱', color: '#e8f5e9', desc: 'Chấm điểm tự động và gửi báo cáo tiến độ làm bài chi tiết qua Zalo OA của phụ huynh hàng tuần.' },
            { title: 'HỎI ĐÁP CÙNG THẦY CÔ', icon: '💡', color: '#f3e5f5', desc: 'Gửi câu hỏi lên hệ thống để đội ngũ thầy cô giải đáp ngay trong tíc tắc.' }
          ].map((feature, i) => (
            <Grid size={{ xs: 12, md: 6 }} key={i}>
              <Card sx={{
                height: '100%', borderRadius: 6, p: 4, bgcolor: 'white',
                border: '1px solid #eee', transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                '&:hover': { transform: 'translateY(-15px)', boxShadow: '0 30px 60px rgba(0,0,0,0.1)', borderColor: 'transparent', bgcolor: feature.color }
              }}>
                <Box sx={{ fontSize: '3.5rem', mb: 3 }}>{feature.icon}</Box>
                <Typography variant="h5" sx={{ fontFamily: fontHeader, fontWeight: 800, mb: 2 }}>{feature.title}</Typography>
                <Typography color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.6 }}>{feature.desc}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ================= ĐỘI NGŨ GIẢNG VIÊN ================= */}
      <Box sx={{ mt: 15, py: 15, background: 'linear-gradient(180deg, #f4f7fe 0%, #ffffff 100%)' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography variant="h3" gutterBottom sx={{ fontFamily: fontHeader, fontWeight: 900 }}>
              Cố Vấn <span style={{ color: '#d32f2f' }}>Chuyên Môn</span> Đồng Hành
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Đội ngũ chuyên gia chịu trách nhiệm biên soạn toàn bộ hệ thống đề thi và tài liệu bám sát chương trình phát sóng.
            </Typography>
          </Box>

          <Grid container spacing={5}>
            {teachers.map((teacher, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={teacher.id}>
                <Card sx={{
                  borderRadius: 4, overflow: 'hidden', position: 'relative',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.08)', transition: '0.4s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-15px)',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
                    '& .teacher-img': { transform: 'scale(1.08)' } // Hiệu ứng zoom ảnh nhẹ khi hover
                  }
                }}>
                  {/* Khối Hình ảnh chữ nhật */}
                  <Box sx={{ height: 350, overflow: 'hidden', position: 'relative' }}>
                    <Box
                      component="img"
                      src={teacher.img}
                      alt={teacher.name}
                      className="teacher-img"
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover', // Đảm bảo ảnh lấp đầy khung mà không bị méo
                        transition: 'transform 0.6s ease',
                        bgcolor: 'grey.200' // Màu nền dự phòng khi ảnh chưa load
                      }}
                    />
                    {/* Dải màu nhận diện cho từng thầy nằm ở đáy ảnh */}
                    <Box sx={{
                      position: 'absolute', bottom: 0, left: 0, width: '100%', height: '8px',
                      background: teacher.color
                    }} />
                  </Box>

                  {/* Nội dung (Chỉ giữ lại Tên và Vai trò) */}
                  <CardContent sx={{ pt: 4, pb: 4, textAlign: 'center', bgcolor: 'white' }}>
                    <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 800, mb: 1, textTransform: 'uppercase', letterSpacing: 1 }}>
                      {teacher.role}
                    </Typography>
                    <Typography variant="h6" sx={{ fontFamily: fontHeader, fontWeight: 900, color: '#1a237e' }}>
                      {teacher.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Nút xem toàn bộ Đội Ngũ (Gom về 1 nút duy nhất) */}
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Button
              component={Link} href="/doi-ngu"
              variant="contained" size="large"
              sx={{
                borderRadius: '50px', px: 6, py: 2, fontFamily: fontHeader, fontWeight: 800, fontSize: '1.1rem',
                background: 'linear-gradient(45deg, #1a237e 30%, #1976d2 90%)',
                boxShadow: '0 10px 30px rgba(26, 35, 126, 0.3)', transition: 'all 0.3s',
                '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 15px 40px rgba(26, 35, 126, 0.5)' }
              }}
            >
              Gặp Gỡ Đội Ngũ Chuyên Gia
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ================= ĐẶC QUYỀN HỌC VIÊN ================= */}
      <Container maxWidth="lg" sx={{ mt: 5, mb: 15 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" gutterBottom sx={{ fontFamily: fontHeader, fontWeight: 900, color: '#1a237e' }}>
            Khám Phá <span style={{ color: '#ff9800' }}>Tài Nguyên</span> Độc Quyền
          </Typography>
          <Typography color="text.secondary" sx={{ fontSize: '1.2rem' }}>
            Những công cụ học tập miễn phí hỗ trợ đắc lực cho các em ngay khi hệ thống ra mắt.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {[
            {
              title: "Bài Tập Thực Hành", subtitle: "Cập nhật mỗi ngày theo kênh HTV3",
              desc: "Sau mỗi buổi phát sóng, bài tập tự luyện lập tức được cập nhật trên website để học sinh ôn bài, chống quên kiến thức.",
              icon: "📚", color: "linear-gradient(135deg, #1976d2, #42a5f5)", link: "/khoa-hoc"
            },
            {
              title: "Kho Tài Liệu 'Hack Điểm'", subtitle: "Tải về hoàn toàn miễn phí",
              desc: "Truy cập không giới hạn vào kho tàng sơ đồ tư duy, bảng tóm tắt công thức và các tài liệu bí kíp giải nhanh được biên soạn bởi các chuyên gia.",
              icon: "📑", color: "linear-gradient(135deg, #7b1fa2, #ab47bc)", link: "#"
            },
            {
              title: "Phòng Thi Thử Thực Chiến", subtitle: "Trải nghiệm áp lực thi thật",
              desc: "Làm bài thi online với thời gian đếm ngược. Hệ thống AI tự động chấm điểm và chỉ ra các lỗ hổng kiến thức cần khắc phục ngay lập tức.",
              icon: "🎯", color: "linear-gradient(135deg, #c62828, #ef5350)", link: "#"
            },
            {
              title: "Cộng Đồng Hỏi Đáp 24/7", subtitle: "Giải bài tập khó trong nháy mắt",
              desc: "Không còn bế tắc khi tự ôn luyện. Đội ngũ trợ giảng của hệ thống luôn túc trực để giải đáp mọi bài tập khó trong thời gian ngắn nhất.",
              icon: "👨‍🏫", color: "linear-gradient(135deg, #2e7d32, #66bb6a)", link: "#"
            }
          ].map((item, idx) => (
            <Grid size={{ xs: 12, sm: 6 }} key={idx}>
              <Card sx={{
                borderRadius: 4, p: { xs: 3, md: 5 }, height: '100%', position: 'relative', overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)', transition: 'all 0.4s ease', border: '1px solid #f0f0f0',
                '&:hover': { transform: 'translateY(-10px)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', borderColor: 'primary.main' }
              }}>
                <Box sx={{
                  position: 'absolute', top: -50, right: -50, width: 150, height: 150,
                  background: item.color, opacity: 0.1, borderRadius: '50%'
                }} />

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Box sx={{
                    fontSize: '3rem', mr: 3, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: 70, height: 70, borderRadius: 4, background: item.color, color: 'white',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                  }}>
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography variant="h5" sx={{ fontFamily: fontHeader, fontWeight: 800 }}>{item.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 700 }}>{item.subtitle}</Typography>
                  </Box>
                </Box>

                <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.7 }}>
                  {item.desc}
                </Typography>

                <Button
                  component={Link} href={item.link}
                  variant="outlined" color="primary"
                  sx={{ borderRadius: 8, fontWeight: 'bold', borderWidth: 2, '&:hover': { borderWidth: 2 } }}
                >
                  Tìm hiểu ngay →
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ================= FORM ĐĂNG KÝ ================= */}
      <Box sx={{ position: 'relative', pb: 15 }}>
        {/* SVG Wave Divider */}
        <Box sx={{ width: '100%', overflow: 'hidden', lineHeight: 0, transform: 'rotate(180deg)' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '100px' }}>
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#1976d2"></path>
          </svg>
        </Box>

        <Box sx={{ bgcolor: '#1976d2', pt: 5, pb: 15, px: 2 }}>
          <Container maxWidth="lg" id="form-dang-ky">
            <Card sx={{
              borderRadius: 8, overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(0,0,0,0.3)'
            }}>
              <Grid container>
                <Grid size={{ xs: 12, md: 5 }} sx={{
                  background: 'url(/banner-bg.jpg) center/cover', position: 'relative',
                  minHeight: { xs: 300, md: 'auto' }
                }}>
                  {/* Overlay */}
                  <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,25,47,0.9), rgba(10,25,47,0.7))', display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 6, color: 'white' }}>
                    <Typography variant="h3" sx={{ fontFamily: fontHeader, fontWeight: 900, mb: 3 }}>
                      Nhận Mã Trải Nghiệm Sớm
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 400, opacity: 0.9, mb: 4 }}>
                      Đăng ký ngay hôm nay để trở thành những người đầu tiên truy cập hệ thống và nhận ưu đãi hấp dẫn.
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 3, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 4, backdropFilter: 'blur(5px)' }}>
                      <Box sx={{ fontSize: '2rem' }}>🎁</Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>ƯU ĐÃI GHI DANH SỚM</Typography>
                        <Typography variant="body2">Tặng ngay bộ tài liệu bí kíp và voucher giảm giá học phí hấp dẫn</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 7 }} sx={{ p: { xs: 4, md: 8 }, bgcolor: 'white' }}>
                  <Typography variant="h5" sx={{ fontFamily: fontHeader, fontWeight: 800, color: '#1a237e', mb: 1, textTransform: 'uppercase' }}>
                    Đăng kí nhận tư vấn miễn phí
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 5 }}>
                  </Typography>

                  <form onSubmit={handleSubmit} noValidate>
                    <Stack spacing={4}>
                      <Grid container spacing={3}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <TextField fullWidth
                            error={!!errors.HoTen}
                            helperText={errors.HoTen}
                            value={formData.HoTen}
                            onChange={handleInputChange}
                            type='text'
                            required name="HoTen" label="Họ tên học sinh" variant="standard" sx={{ '& .MuiInput-underline:after': { borderBottomColor: 'primary.main' } }} />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <TextField fullWidth value={formData.SoDienThoai}
                            onChange={handleInputChange}
                            error={!!errors.SoDienThoai}      // <-- Thêm bắt lỗi
                            helperText={errors.SoDienThoai}   // <-- Hiện chữ lỗi
                            type='tel'
                            required
                            name="SoDienThoai" label="Số điện thoại / Zalo" variant="standard" />
                        </Grid>
                      </Grid>

                      <TextField fullWidth value={formData.TruongDangHoc}
                        onChange={handleInputChange}
                        type='text'
                        error={!!errors.TruongDangHoc}        // <-- Thêm bắt lỗi
                        helperText={errors.TruongDangHoc}     // <-- Hiện chữ lỗi
                        name="TruongDangHoc" required label="Trường đang theo học" variant="standard" />

                      <TextField
                        fullWidth value={formData.MonHocMuonOnLuyen}
                        onChange={handleInputChange}
                        name="MonHocMuonOnLuyen"
                        required
                        type='text'
                        label="Môn học muốn ôn luyện?"
                        error={!!errors.MonHocMuonOnLuyen}        // <-- Thêm bắt lỗi
                        helperText={errors.MonHocMuonOnLuyen}     // <-- Hiện chữ lỗi
                        variant="standard" multiline rows={2}
                      />

                      <Box sx={{ pt: 2 }}>
                        <Button
                          type='submit'
                          disabled={isSubmitting}
                          variant="contained" size="large" fullWidth
                          sx={{
                            py: 2.5, borderRadius: 50, fontFamily: fontHeader, fontWeight: 900, fontSize: '1.2rem',
                            background: 'linear-gradient(90deg, #ff9800, #ff5722)',
                            boxShadow: '0 10px 20px rgba(255, 87, 34, 0.3)',
                            animation: `${pulseGlow} 2s infinite`, transition: '0.3s',
                            '&:hover': { transform: 'scale(1.02)', background: 'linear-gradient(90deg, #f57c00, #e64a19)' },
                            '&:disabled': { background: '#ccc', animation: 'none', transform: 'none' }
                          }}
                        >
                          {isSubmitting ? (
                            <>
                              <CircularProgress size={24} sx={{ color: 'white', mr: 2 }} />
                              ĐANG GỬI...
                            </>
                          ) : (
                            'ĐĂNG KÝ TƯ VẤN MIỄN PHÍ'
                          )}
                        </Button>
                      </Box>
                    </Stack>
                  </form>
                </Grid>
              </Grid>
            </Card>
          </Container>
        </Box>
      </Box>
      {/* ================= POPUP THÔNG BÁO THÀNH CÔNG ================= */}
      {/* <Dialog
        open={openSuccessPopup}
        onClose={handleClosePopup}
        sx={{ borderRadius: 4, p: 2, maxWidth: '400px', textAlign: 'center' }}

      >
        <DialogTitle sx={{ pb: 1 }}>
          <Box sx={{ fontSize: '4rem', mb: 1, animation: `${floatComplex} 3s infinite` }}>🎉</Box>
          <Typography variant="h5" sx={{ fontFamily: fontHeader, fontWeight: 900, color: '#4caf50', textTransform: 'uppercase' }}>
            Đăng Ký Thành Công!
          </Typography>
        </DialogTitle>

        <DialogContent>
          <Typography variant="body1" color="text.secondary" sx={{ fontFamily: fontBody, lineHeight: 1.6 }}>
            Đăng ký thành công! Đội ngũ tư vấn sẽ liên hệ với bạn qua số điện thoại <strong>{formData.SoDienThoai}</strong> trong thời gian sớm nhất để hướng dẫn nhận ưu đãi!
          </Typography>
        </DialogContent>

        <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
          <Button
            onClick={handleClosePopup}
            variant="contained"
            sx={{
              borderRadius: 50, px: 5, py: 1.5,
              fontFamily: fontHeader, fontWeight: 'bold',
              background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
              boxShadow: '0 8px 16px rgba(25, 118, 210, 0.2)'
            }}
          >
            Đóng thông báo
          </Button>
        </DialogActions>
      </Dialog> */}
      <Snackbar open={openSuccessPopup} autoHideDuration={6000} onClose={handleClosePopup}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClosePopup} severity="success" sx={{ width: '100%', borderRadius: 4, bgcolor: '#e8f5e9', color: '#2e7d32', fontFamily: fontBody, boxShadow: '0 10px 30px rgba(46, 125, 50, 0.3)' }}>
          Đăng ký thành công! Đội ngũ tư vấn sẽ liên hệ với bạn qua số điện thoại <strong>{phone}</strong> trong thời gian sớm nhất để hướng dẫn nhận ưu đãi!
        </Alert>
      </Snackbar>
      {/* ============================================================= */}
    </Box>
  );
}