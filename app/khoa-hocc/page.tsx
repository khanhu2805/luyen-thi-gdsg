'use client';

import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Button, 
  Stack,
  Chip,
  Divider,
  Grid
} from '@mui/material';
import { keyframes } from '@mui/system';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import Link from 'next/link';

// --- ANIMATIONS ---
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const pulseGlow = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(255, 152, 0, 0.5); }
  70% { box-shadow: 0 0 0 20px rgba(255, 152, 0, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 152, 0, 0); }
`;

// --- FONTS ---
const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

// --- DỮ LIỆU KHÓA HỌC ---
const courses = [
  {
    id: "combo",
    title: "COMBO TOÀN DIỆN LỚP 9 (TOÁN - VĂN - ANH)",
    teacher: "Đội ngũ 3 Chuyên gia HTV3",
    subject: "Combo 3 Môn",
    desc: "Giải pháp hoàn hảo giúp bứt phá điểm số toàn diện. Đầy đủ lộ trình từ lấy gốc đến nâng cao, cam kết đỗ NV1.",
    price: "1.990.000đ",
    originalPrice: "3.500.000đ",
    discount: "-43%",
    features: ["150+ Video bài giảng", "Ngân hàng 10.000+ câu hỏi", "Thi thử ĐGNL không giới hạn"],
    highlights: ["Tặng bộ 3 sách bí kíp", "Hỗ trợ học tập 1-kèm-1 24/7", "Báo cáo Zalo hàng tuần"],
    gradient: "linear-gradient(135deg, #ff9800 0%, #f44336 100%)",
    isPopular: true
  },
  {
    id: "toan",
    title: "Bứt Phá Điểm 9+ Môn Toán",
    teacher: "Thầy Huỳnh Ngọc Thanh",
    subject: "Toán Học",
    desc: "Hệ thống hóa toàn bộ kiến thức Đại số và Hình học. Trọng tâm vào các dạng toán thực tế và câu phân loại.",
    price: "890.000đ",
    originalPrice: "1.200.000đ",
    discount: "-25%",
    features: ["50+ Video bài giảng", "3.000+ Bài tập trắc nghiệm", "15 Đề thi thử bám sát Sở GD&ĐT"],
    highlights: ["Sửa lỗi sai thường gặp", "Cập nhật đề thi mới nhất"],
    gradient: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
    isPopular: false
  },
  {
    id: "van",
    title: "Cảm Thụ Văn Học - Viết Trọn Cảm Xúc",
    teacher: "Thầy Nguyễn Phước Bảo Khôi",
    subject: "Ngữ Văn",
    desc: "Phương pháp tư duy mở bài, kết bài và phân tích tác phẩm siêu tốc. Chống liệt và nâng cao điểm Nghị luận.",
    price: "890.000đ",
    originalPrice: "1.200.000đ",
    discount: "-25%",
    features: ["45+ Video bài giảng", "Sơ đồ tư duy 100% tác phẩm", "Chấm chữa bài chi tiết 1:1"],
    highlights: ["Kỹ năng Nghị luận Xã hội", "Bộ khung dàn ý đa năng"],
    gradient: "linear-gradient(135deg, #c62828 0%, #ef5350 100%)",
    isPopular: false
  },
  {
    id: "anh",
    title: "Chinh Phục Ngữ Pháp & Từ Vựng Tiếng Anh",
    teacher: "Thầy Vũ Vạn Xuân",
    subject: "Tiếng Anh",
    desc: "Quét sạch mọi lỗ hổng ngữ pháp. Học từ vựng theo chủ đề với Flashcard giúp phản xạ nhanh khi làm bài thi.",
    price: "890.000đ",
    originalPrice: "1.200.000đ",
    discount: "-25%",
    features: ["55+ Video bài giảng", "Bộ Flashcard từ vựng độc quyền", "20 Đề thi chuẩn form cấu trúc"],
    highlights: ["Mẹo làm bài điền từ", "Kỹ năng đọc hiểu siêu tốc"],
    gradient: "linear-gradient(135deg, #2e7d32 0%, #66bb6a 100%)",
    isPopular: false
  }
];

export default function KhoaHocPage() {
  return (
    <Box sx={{ fontFamily: fontBody, bgcolor: '#f8fafc', minHeight: '100vh', pb: 15 }}>
      
      {/* ================= HERO SECTION ================= */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)', // Tone tối sang trọng
        pt: { xs: 12, md: 16 }, pb: { xs: 12, md: 18 }, 
        textAlign: 'center', color: 'white', position: 'relative', overflow: 'hidden'
      }}>
        <Box sx={{ position: 'absolute', top: -100, right: -50, width: 300, height: 300, background: 'radial-gradient(circle, rgba(25,118,210,0.3) 0%, transparent 70%)', borderRadius: '50%', animation: `${float} 8s infinite` }} />
        
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2, animation: `${fadeInUp} 0.8s ease-out` }}>
          <Chip 
            icon={<LocalOfferRoundedIcon />} 
            label="ƯU ĐÃI EARLY BIRD KHI ĐĂNG KÝ SỚM" 
            sx={{ bgcolor: 'rgba(255,152,0,0.2)', color: '#ffb300', fontWeight: 800, mb: 3, px: 1, border: '1px solid #ffb300' }} 
          />
          <Typography variant="h2" sx={{ fontFamily: fontHeader, fontWeight: 900, mb: 3, fontSize: { xs: '2.5rem', md: '3.8rem' }, lineHeight: 1.2 }}>
            Lộ Trình Học Tập <br />
            <Box component="span" sx={{ color: '#4fc3f7' }}>Cá Nhân Hóa Toàn Diện</Box>
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 400, opacity: 0.9, lineHeight: 1.6, maxWidth: '85%', mx: 'auto' }}>
            Hệ thống khóa học được thiết kế đồng bộ với chương trình HTV3. Cam kết đồng hành cùng học sinh Lớp 9 chinh phục nguyện vọng 1.
          </Typography>
        </Container>
      </Box>

      {/* ================= DANH SÁCH KHÓA HỌC ================= */}
      <Container maxWidth="lg" sx={{ mt: { xs: -8, md: -10 }, position: 'relative', zIndex: 10 }}>
        
        {/* Khóa học Combo (Nổi bật lên trên cùng) */}
        <Box sx={{ mb: 8, animation: `${fadeInUp} 1s ease-out` }}>
          {courses.filter(c => c.isPopular).map(combo => (
            <Card key={combo.id} sx={{ 
              borderRadius: 6, overflow: 'visible', position: 'relative',
              boxShadow: '0 25px 50px rgba(0,0,0,0.15)', border: '2px solid #ff9800',
              animation: `${pulseGlow} 3s infinite`
            }}>
              {/* Ribbon Best Seller */}
              <Box sx={{ 
                position: 'absolute', top: -15, right: 30, background: '#d32f2f', color: 'white', 
                px: 3, py: 1, borderRadius: 8, fontWeight: 800, fontFamily: fontHeader,
                boxShadow: '0 5px 15px rgba(211,47,47,0.4)', zIndex: 10, display: 'flex', alignItems: 'center', gap: 1
              }}>
                <StarRoundedIcon fontSize="small" /> ĐĂNG KÝ NHIỀU NHẤT
              </Box>

              <Grid container>
                <Grid size={{ xs: 12, md: 5 }} sx={{ background: combo.gradient, color: 'white', p: { xs: 4, md: 6 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, letterSpacing: 2, mb: 2, color: 'rgba(255,255,255,0.8)' }}>
                    {combo.subject}
                  </Typography>
                  <Typography variant="h3" sx={{ fontFamily: fontHeader, fontWeight: 900, mb: 2, lineHeight: 1.2 }}>
                    {combo.title}
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.9, mb: 4 }}>
                    {combo.desc}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 2 }}>
                    <Typography variant="h3" sx={{ fontFamily: fontHeader, fontWeight: 900, color: '#fff9c4' }}>
                      {combo.price}
                    </Typography>
                    <Typography variant="h6" sx={{ textDecoration: 'line-through', opacity: 0.7, mb: 0.5 }}>
                      {combo.originalPrice}
                    </Typography>
                  </Box>
                </Grid>
                
                <Grid size={{ xs: 12, md: 7 }} sx={{ p: { xs: 4, md: 6 }, bgcolor: 'white' }}>
                  <Typography variant="h6" sx={{ fontFamily: fontHeader, fontWeight: 800, mb: 3 }}>
                    Gói Combo bao gồm:
                  </Typography>
                  <Grid container spacing={2} sx={{ mb: 4 }}>
                    {combo.features.map((feature, i) => (
                      <Grid size={{ xs: 12, sm: 6 }} key={i}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                          <OndemandVideoRoundedIcon color="primary" />
                          <Typography variant="body1" sx={{ fontWeight: 600 }}>{feature}</Typography>
                        </Box>
                      </Grid>
                    ))}
                    {combo.highlights.map((highlight, i) => (
                      <Grid size={{ xs: 12, sm: 6 }} key={`hl-${i}`}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                          <CheckCircleRoundedIcon color="success" />
                          <Typography variant="body1" sx={{ fontWeight: 600 }}>{highlight}</Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                  
                  <Divider sx={{ mb: 4 }} />
                  
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <Button 
                      component={Link} href="/#form-dang-ky"
                      variant="contained" size="large" fullWidth
                      sx={{ 
                        py: 1.8, borderRadius: 50, fontFamily: fontHeader, fontWeight: 800, fontSize: '1.1rem',
                        background: 'linear-gradient(90deg, #ff9800, #ff5722)', boxShadow: '0 10px 20px rgba(255, 87, 34, 0.3)',
                        '&:hover': { transform: 'translateY(-3px)' }, transition: '0.3s'
                      }}
                    >
                      Đăng Ký Combo Ngay
                    </Button>
                    <Button 
                      variant="outlined" size="large" fullWidth
                      sx={{ py: 1.8, borderRadius: 50, fontFamily: fontHeader, fontWeight: 800, borderWidth: 2, '&:hover': { borderWidth: 2 } }}
                    >
                      Nhận tư vấn chi tiết
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Card>
          ))}
        </Box>

        {/* Các Khóa Lẻ */}
        <Typography variant="h4" sx={{ fontFamily: fontHeader, fontWeight: 900, textAlign: 'center', mb: 5, color: '#1a237e' }}>
          Đăng Ký Lộ Trình Lẻ Từng Môn
        </Typography>

        <Grid container spacing={4}>
          {courses.filter(c => !c.isPopular).map((course, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={course.id}>
              <Card sx={{ 
                height: '100%', borderRadius: 4, display: 'flex', flexDirection: 'column',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)', transition: 'all 0.3s ease', border: '1px solid #f0f0f0',
                animation: `${fadeInUp} 0.6s ease-out ${index * 0.2}s both`,
                '&:hover': { transform: 'translateY(-10px)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }
              }}>
                {/* Header khóa học (Màu riêng biệt) */}
                <Box sx={{ background: course.gradient, p: 3, position: 'relative' }}>
                  <Chip label={course.discount} size="small" sx={{ position: 'absolute', top: 15, right: 15, bgcolor: '#ffea00', color: '#d32f2f', fontWeight: 900 }} />
                  <Typography variant="subtitle2" sx={{ color: 'rgba(255,255,255,0.8)', fontWeight: 800, textTransform: 'uppercase', mb: 1 }}>
                    Môn {course.subject}
                  </Typography>
                  <Typography variant="h5" sx={{ fontFamily: fontHeader, fontWeight: 800, color: 'white', lineHeight: 1.3, minHeight: 65 }}>
                    {course.title}
                  </Typography>
                </Box>

                <CardContent sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, minHeight: 60 }}>
                    {course.desc}
                  </Typography>
                  
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#1a237e', mb: 1 }}>Giảng viên:</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>{course.teacher}</Typography>
                  </Box>

                  <Divider sx={{ mb: 3 }} />

                  <Stack spacing={1.5} sx={{ mb: 4, flexGrow: 1 }}>
                    {course.features.map((item, i) => (
                      <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                        <AssignmentRoundedIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.secondary' }}>{item}</Typography>
                      </Box>
                    ))}
                  </Stack>

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography variant="h5" sx={{ fontFamily: fontHeader, fontWeight: 900, color: '#d32f2f' }}>
                      {course.price}
                    </Typography>
                    <Typography variant="body2" sx={{ textDecoration: 'line-through', color: 'text.secondary' }}>
                      {course.originalPrice}
                    </Typography>
                  </Box>

                  <Button 
                    component={Link} href="/#form-dang-ky"
                    variant="outlined" fullWidth 
                    sx={{ borderRadius: 8, fontFamily: fontHeader, fontWeight: 800, py: 1.2, borderWidth: 2, '&:hover': { borderWidth: 2 } }}
                  >
                    Đăng ký môn học
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ================= ĐẶC QUYỀN (FEATURES) ================= */}
      <Container maxWidth="lg" sx={{ mt: 15 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" gutterBottom sx={{ fontFamily: fontHeader, fontWeight: 900 }}>
            Tại sao nên chọn hệ thống GDSG?
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {[
            { title: "Bám sát HTV3", desc: "Giáo trình và bài tập được biên soạn đồng bộ 100% với chương trình phát sóng.", icon: "📺" },
            { title: "Chấm điểm AI", desc: "Làm bài trắc nghiệm biết điểm ngay. Hệ thống phân tích lỗi sai chi tiết.", icon: "🤖" },
            { title: "Báo cáo Zalo", desc: "Phụ huynh nhận thông báo kết quả học tập của con mỗi tuần hoàn toàn tự động.", icon: "📱" },
            { title: "Trợ giảng 24/7", desc: "Mắc kẹt ở bài toán khó? Trợ giảng sẽ giải đáp cặn kẽ cho bạn trong 30 phút.", icon: "👨‍🏫" }
          ].map((item, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
              <Card sx={{ textAlign: 'center', p: 4, height: '100%', borderRadius: 4, border: 'none', boxShadow: '0 10px 20px rgba(0,0,0,0.03)' }}>
                <Box sx={{ fontSize: '3rem', mb: 2 }}>{item.icon}</Box>
                <Typography variant="h6" sx={{ fontFamily: fontHeader, fontWeight: 800, mb: 1 }}>{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      
    </Box>
  );
}