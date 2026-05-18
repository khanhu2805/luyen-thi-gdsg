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
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';
import { keyframes } from '@mui/system';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
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

// --- DỮ LIỆU KHÓA HỌC (CHI TIẾT TỪNG DÒNG THEO PDF) ---
const courses = [
  {
    id: "nen-tang-plus",
    title: "GÓI NỀN TẢNG PLUS",
    price: "650.000đ",
    unit: "/tháng/môn",
    discount: "ĐĂNG KÝ NHIỀU",
    gradient: "linear-gradient(135deg, #ff9800 0%, #f44336 100%)",
    isPopular: true,
    details: [
      {
        category: "Mô hình:",
        items: [
          "Lớp học online nhóm tập trung",
          "Giáo viên giảng trực tiếp qua Google Meet (tuần 2 buổi)",
          "Có thêm 1 buổi giải bài tập tương tác trực tiếp",
          "Điểm danh & gửi đánh giá trực tiếp về PH mỗi tháng",
        ]
      },
      {
        category: "Phù hợp với:",
        items: [
          "Học sinh có khả năng tự học tương đối tốt",
          "Muốn củng cố kiến thức và luyện tập chi phí hợp lý",
        ]
      },
      {
        category: "Quyền lợi:",
        items: [
          "Truy cập kho tài liệu & Kiểm tra online không giới hạn",
          "Xem lại video bài giảng sau buổi học",
          "Tham gia nhóm học tập riêng của lớp"
        ]
      }
    ]
  },
  {
    id: "nen-tang",
    title: "GÓI NỀN TẢNG",
    price: "250.000đ",
    unit: "/tháng/môn",
    discount: "TIẾT KIỆM",
    gradient: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
    isPopular: false,
    details: [
      {
        category: "Mô hình:",
        items: [
          "Lớp học online nhóm tập trung",
          "Giảng dạy trực tiếp qua Google Meet (tuần 2 buổi)",
          "Tương tác qua chat và hoạt động trên lớp"
        ]
      },
      {
        category: "Phù hợp với:",
        items: [
          "Học sinh có khả năng tự học tương đối tốt",
          "Muốn củng cố kiến thức trên lớp",
        ]
      },
      {
        category: "Quyền lợi:",
        items: [
          "Tham gia nhóm học tập riêng của lớp",
          "Kiểm tra định kỳ mỗi tháng gửi điểm số về PH",
          "Giao bài tập để luyện tập cuối mỗi buổi"
        ]
      }
    ]
  },
  {
    id: "si-so-thap",
    title: "GÓI SĨ SỐ THẤP",
    price: "800.000đ",
    unit: "/tháng/môn",
    discount: "HIỆU QUẢ",
    gradient: "linear-gradient(135deg, #c62828 0%, #ef5350 100%)",
    isPopular: false,
    details: [
      {
        category: "Mô hình:",
        items: [
          "Lớp học nhóm nhỏ dưới 7 học sinh",
          "Giáo viên và trợ giảng theo sát quá trình học tập"
        ]
      },
      {
        category: "Phù hợp với:",
        items: [
          "Học sinh cần được kèm cặp sát sao",
          "Muốn cải thiện điểm số nhanh hơn",
          "Cần môi trường học tập có tương tác cao"
        ]
      },
      {
        category: "Quyền lợi:",
        items: [
          "Sửa bài tập luyện tập và hỏi đáp trực tiếp 1-1",
          "Được điểm danh & gửi đánh giá về PH theo tháng",
          "Làm kiểm tra online không giới hạn số lượt"
        ]
      }
    ]
  },
  {
    id: "gia-su-1-1",
    title: "GÓI GIA SƯ 1 KÈM 1",
    price: "LIÊN HỆ",
    unit: "/tháng/môn",
    discount: "CAO CẤP",
    gradient: "linear-gradient(135deg, #2e7d32 0%, #66bb6a 100%)",
    isPopular: false,
    details: [
      {
        category: "Mô hình:",
        items: [
          "Một giáo viên – Một học sinh",
          "Xây dựng lộ trình học tập cá nhân hóa riêng"
        ]
      },
      {
        category: "Phù hợp với:",
        items: [
          "Học sinh mất gốc cần lấy lại kiến thức nhanh",
          "Học sinh luyện thi chuyên, lớp chọn"
        ]
      },
      {
        category: "Quyền lợi:",
        items: [
          "Giáo án 'may đo' theo năng lực học sinh",
          "Điều chỉnh tiến độ học linh hoạt",
          "Đồng hành cùng phụ huynh suốt quá trình học",
          "Hỗ trợ giải đáp bài tập theo lịch riêng"
        ]
      }
    ]
  }
];

// --- DỮ LIỆU BẢNG SO SÁNH (DẤU TÍCH) ---
const comparisonFeatures = [
  { name: "Học trực tiếp cùng Giáo viên", packages: [true, true, true, true] },
  { name: "Xem lại video bài giảng sau học", packages: [true, true, true, true] },
  { name: "Tham gia nhóm học tập riêng", packages: [true, true, true, true] },
  { name: "Kiểm tra định kỳ hằng tháng", packages: [true, true, true, true] },
  { name: "Giao bài tập cuối mỗi buổi", packages: [true, true, true, true] },
  { name: "Sửa bài tập & hỏi đáp trực tiếp với Thầy/Cô", packages: [false, true, true, true] },
  { name: "Truy cập kho tài liệu học tập", packages: [false, true, true, true] },
  { name: "Làm bài kiểm tra online không giới hạn", packages: [false, true, true, true] },
  { name: "Điểm danh & đánh giá mỗi tháng gửi Zalo PH", packages: [false, true, true, true] },
  { name: "Trợ giảng (TA) theo sát quá trình học", packages: [false, true, true, false] },
  { name: "Lớp nhóm nhỏ (Dưới 7 học sinh)", packages: [false, false, true, false] },
  { name: "Lộ trình cá nhân hóa (1 Kèm 1)", packages: [false, false, false, true] },
  { name: "Giáo án 'may đo' theo năng lực", packages: [false, false, false, true] },
];

export default function KhoaHocPage() {
  return (
    <Box sx={{ fontFamily: fontBody, bgcolor: '#f8fafc', minHeight: '100vh', pb: 15 }}>
      
      {/* ================= HERO SECTION ================= */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
        pt: { xs: 12, md: 16 }, pb: { xs: 12, md: 18 }, 
        textAlign: 'center', color: 'white', position: 'relative', overflow: 'hidden'
      }}>
        <Box sx={{ position: 'absolute', top: -100, right: -50, width: 300, height: 300, background: 'radial-gradient(circle, rgba(25,118,210,0.3) 0%, transparent 70%)', borderRadius: '50%', animation: `${float} 8s infinite` }} />
        
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2, animation: `${fadeInUp} 0.8s ease-out` }}>
          <Chip 
            icon={<LocalOfferRoundedIcon />} 
            label="KIỂM TRA ĐẦU VÀO & HỌC THỬ MIỄN PHÍ" 
            sx={{ bgcolor: 'rgba(255,152,0,0.2)', color: '#ffb300', fontWeight: 800, mb: 3, px: 1, border: '1px solid #ffb300' }} 
          />
          <Typography variant="h2" sx={{ fontFamily: fontHeader, fontWeight: 900, mb: 3, fontSize: { xs: '2.5rem', md: '3.8rem' }, lineHeight: 1.2, textTransform: 'uppercase' }}>
            Hệ Thống Gói Học <br />
            <Box component="span" sx={{ color: '#4fc3f7' }}>Trực Tuyến Toàn Diện</Box>
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 400, opacity: 0.9, lineHeight: 1.6, maxWidth: '85%', mx: 'auto' }}>
            Từ việc xây dựng nền tảng đến cá nhân hóa lộ trình 1 kèm 1. Học dễ hiểu, bám sát chương trình, theo sát quá trình tiến bộ của học sinh.
          </Typography>
        </Container>
      </Box>

      {/* ================= DANH SÁCH KHÓA HỌC ================= */}
      <Container maxWidth="xl" sx={{ mt: { xs: -8, md: -10 }, position: 'relative', zIndex: 10 }}>
        
        {/* Khóa học NỔI BẬT NHẤT (Nền Tảng Plus) */}
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
                <StarRoundedIcon fontSize="small" /> LỰA CHỌN TỐI ƯU NHẤT
              </Box>

              <Grid container>
                <Grid size={{ xs: 12, md: 5 }} sx={{ background: combo.gradient, color: 'white', p: { xs: 4, md: 6 }, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', borderRadius: '20px 0 0 20px' }}>
                  <Typography variant="h3" sx={{ fontFamily: fontHeader, fontWeight: 900, mb: 4, lineHeight: 1.2 }}>
                    {combo.title}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                    <Typography variant="h3" sx={{ fontFamily: fontHeader, fontWeight: 900, color: '#fff9c4' }}>
                      {combo.price}
                    </Typography>
                    <Typography variant="h6" sx={{ opacity: 0.9 }}>
                      {combo.unit}
                    </Typography>
                  </Box>
                </Grid>
                
                <Grid size={{ xs: 12, md: 7 }} sx={{ p: { xs: 4, md: 6 }, bgcolor: 'white', borderRadius: '0 20px 20px 0' }}>
                  
                  {/* DUYỆT TỪNG DANH MỤC CHI TIẾT CỦA GÓI */}
                  {combo.details.map((section, idx) => (
                    <Box key={idx} sx={{ mb: 3 }}>
                      <Typography variant="subtitle1" sx={{ fontFamily: fontHeader, fontWeight: 900, mb: 1.5, color: '#d32f2f', textTransform: 'uppercase' }}>
                        {section.category}
                      </Typography>
                      <Stack spacing={1.5}>
                        {section.items.map((item, i) => (
                          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }} key={i}>
                            <CheckCircleRoundedIcon color="success" sx={{ fontSize: 22, mt: '-2px' }} />
                            <Typography variant="body1" sx={{ fontWeight: 600, color: '#424242' }}>{item}</Typography>
                          </Box>
                        ))}
                      </Stack>
                    </Box>
                  ))}
                  
                  <Divider sx={{ mb: 4, mt: 2 }} />
                  
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                    <Button 
                      component={Link} href="/#form-dang-ky"
                      variant="contained" size="large"
                      sx={{ 
                        flex: 1, py: 1.5, borderRadius: 50, fontFamily: fontHeader, fontWeight: 800,
                        background: 'linear-gradient(90deg, #ff9800, #ff5722)', boxShadow: '0 10px 20px rgba(255, 87, 34, 0.3)',
                        '&:hover': { transform: 'translateY(-3px)' }, transition: '0.3s'
                      }}
                    >
                      Đăng Ký gói học
                    </Button>
                    <Button 
                      variant="outlined" size="large"
                      sx={{ flex: 1, py: 1.5, borderRadius: 50, fontFamily: fontHeader, fontWeight: 800, borderWidth: 2, '&:hover': { borderWidth: 2 } }}
                    >
                      Học Thử Miễn Phí
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Card>
          ))}
        </Box>

        {/* Các Gói Lẻ khác */}
        <Typography variant="h4" sx={{ fontFamily: fontHeader, fontWeight: 900, textAlign: 'center', mb: 5, color: '#1a237e', textTransform: 'uppercase' }}>
          Tùy Chọn Gói Học Đa Dạng
        </Typography>

        <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
          {courses.filter(c => !c.isPopular).map((course, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={course.id}>
              <Card sx={{ 
                height: '100%', borderRadius: 4, display: 'flex', flexDirection: 'column',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)', transition: 'all 0.3s ease', border: '1px solid #f0f0f0',
                animation: `${fadeInUp} 0.6s ease-out ${index * 0.2}s both`,
                '&:hover': { transform: 'translateY(-10px)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }
              }}>
                <Box sx={{ background: course.gradient, p: 4, position: 'relative', textAlign: 'center' }}>
                  <Chip label={course.discount} size="small" sx={{ position: 'absolute', top: 15, right: 15, bgcolor: '#ffea00', color: '#d32f2f', fontWeight: 900 }} />
                  <Typography variant="h5" sx={{ fontFamily: fontHeader, fontWeight: 900, color: 'white', mt: 1 }}>
                    {course.title}
                  </Typography>
                </Box>

                <CardContent sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column' }}>
                  
                  {/* DUYỆT TỪNG DANH MỤC CHI TIẾT CỦA GÓI NHỎ */}
                  <Box sx={{ flexGrow: 1, mb: 3 }}>
                    {course.details.map((section, idx) => (
                      <Box key={idx} sx={{ mb: 2.5 }}>
                        <Typography variant="subtitle2" sx={{ fontFamily: fontHeader, fontWeight: 800, mb: 1, color: '#1a237e', textTransform: 'uppercase' }}>
                          {section.category}
                        </Typography>
                        <Stack spacing={1}>
                          {section.items.map((item, i) => (
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }} key={i}>
                              <CheckCircleRoundedIcon sx={{ color: 'success.main', fontSize: 18, mt: '2px' }} />
                              <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.secondary' }}>{item}</Typography>
                            </Box>
                          ))}
                        </Stack>
                      </Box>
                    ))}
                  </Box>

                  <Divider sx={{ mb: 3 }} />

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Box>
                      <Typography variant="h5" sx={{ fontFamily: fontHeader, fontWeight: 900, color: '#d32f2f' }}>
                        {course.price}
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                        {course.unit}
                      </Typography>
                    </Box>
                  </Box>

                  <Stack direction="row" spacing={1}>
                    <Button 
                      component={Link} href="/#form-dang-ky"
                      variant="outlined" sx={{ flexGrow: 1, borderRadius: 8, fontFamily: fontHeader, fontWeight: 800, py: 1.2, borderWidth: 2, '&:hover': { borderWidth: 2 } }}
                    >
                      Nhận tư vấn
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ================= BẢNG SO SÁNH DẤU TÍCH ================= */}
      <Container maxWidth="lg" sx={{ mt: 15 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" gutterBottom sx={{ fontFamily: fontHeader, fontWeight: 900, textTransform: 'uppercase' }}>
            Bảng So Sánh Quyền Lợi Các Gói
          </Typography>
          <Typography variant="h6" color="textSecondary" sx={{ fontFamily: fontBody }}>
            Cân nhắc các đặc quyền để lựa chọn lộ trình phù hợp nhất cho học sinh
          </Typography>
        </Box>

        <TableContainer component={Paper} sx={{ borderRadius: 4, boxShadow: '0 15px 35px rgba(0,0,0,0.05)', border: '1px solid #e0e0e0', overflowX: 'auto' }}>
          <Table sx={{ minWidth: 900 }} aria-label="bảng so sánh dấu tích">
            <TableHead>
              <TableRow sx={{ bgcolor: '#f5f7fa', textTransform: 'uppercase' }}>
                <TableCell sx={{ width: '28%', fontWeight: 800, fontFamily: fontHeader, fontSize: '1.1rem', color: '#1a237e' }}>Đặc quyền / Tính năng</TableCell>
                <TableCell align="center" sx={{ width: '18%', fontWeight: 800, fontFamily: fontHeader, fontSize: '1.1rem', color: '#2a5298' }}>Gói Nền Tảng</TableCell>
                <TableCell align="center" sx={{ width: '18%', fontWeight: 800, fontFamily: fontHeader, fontSize: '1.1rem', color: '#d84315' }}>Nền Tảng Plus</TableCell>
                <TableCell align="center" sx={{ width: '18%', fontWeight: 800, fontFamily: fontHeader, fontSize: '1.1rem', color: '#c62828' }}>Gói Sĩ Số Thấp</TableCell>
                <TableCell align="center" sx={{ width: '18%', fontWeight: 800, fontFamily: fontHeader, fontSize: '1.1rem', color: '#2e7d32' }}>Gia Sư 1 Kèm 1</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {comparisonFeatures.map((row, index) => (
                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 }, '&:hover': { bgcolor: '#fafafa' } }}>
                  {/* Cột Tên tính năng */}
                  <TableCell component="th" scope="row" sx={{ fontWeight: 700, fontFamily: fontBody, fontSize: '1rem', color: '#424242', borderRight: '1px solid #f0f0f0' }}>
                    {row.name}
                  </TableCell>
                  
                  {/* Duyệt qua 4 gói học */}
                  {row.packages.map((isIncluded, i) => (
                    <TableCell key={i} align="center" sx={{ 
                      borderRight: i < 3 ? '1px solid #f0f0f0' : 'none',
                      // bgcolor: i === 1 ? '#fffbf2' : 'transparent' // Highlight nhẹ cột Nền tảng Plus
                    }}>
                      {isIncluded ? (
                        <CheckCircleRoundedIcon color="success" sx={{ fontSize: 28 }} />
                      ) : (
                        <RemoveRoundedIcon sx={{ color: '#bdbdbd', fontSize: 28 }} />
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
              
              {/* Dòng hiển thị Học Phí ở cuối bảng */}
              <TableRow sx={{ bgcolor: '#f8fafc' }}>
                <TableCell sx={{ fontWeight: 800, fontFamily: fontHeader, fontSize: '1.1rem', color: '#1a237e', borderRight: '1px solid #f0f0f0' }}>
                  HỌC PHÍ (Tháng/Môn)
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 800, fontSize: '1.1rem', color: '#2a5298', borderRight: '1px solid #f0f0f0' }}>250.000đ</TableCell>
                <TableCell align="center" sx={{ fontWeight: 800, fontSize: '1.1rem', color: '#d84315', borderRight: '1px solid #f0f0f0' }}>650.000đ</TableCell>
                <TableCell align="center" sx={{ fontWeight: 800, fontSize: '1.1rem', color: '#c62828', borderRight: '1px solid #f0f0f0' }}>800.000đ</TableCell>
                <TableCell align="center" sx={{ fontWeight: 800, fontSize: '1rem', color: '#2e7d32' }}>LIÊN HỆ</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      {/* ================= ĐẶC QUYỀN / GIÁ TRỊ CỐT LÕI ================= */}
      <Container maxWidth="xl" sx={{ mt: 15 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" gutterBottom sx={{ fontFamily: fontHeader, fontWeight: 900 }}>
            Hệ Thống Chăm Sóc & Vận Hành Lớp Học
          </Typography>
          <Typography variant="h6" color="textSecondary" sx={{ fontFamily: fontBody }}>
            Đồng hành cùng phụ huynh để cải thiện kết quả thực tế của con em
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {[
            { title: "Đội ngũ chuyên nghiệp", desc: "Mỗi buổi học luôn có Giáo viên giảng dạy chính và Trợ giảng (TA) điểm danh, hỗ trợ kỹ thuật.", icon: "👨‍🏫" },
            { title: "Kiểm tra đầu vào", desc: "Tham gia đánh giá điểm mạnh - yếu miễn phí để sắp xếp lộ trình và giáo viên phù hợp.", icon: "🎯" },
            { title: "Báo cáo định kỳ", desc: "Phụ huynh nhận báo cáo kết quả, nhận xét của giáo viên và đánh giá chuyên cần qua Zalo.", icon: "📱" },
            { title: "Hỗ trợ 8h00 - 21h00", desc: "Đội ngũ chăm sóc luôn sẵn sàng giải đáp thắc mắc qua Hotline và Zalo hỗ trợ hằng ngày.", icon: "🎧" }
          ].map((item, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
              <Card sx={{ textAlign: 'center', p: 4, height: '100%', borderRadius: 4, border: 'none', boxShadow: '0 10px 20px rgba(0,0,0,0.03)' }}>
                <Box sx={{ fontSize: '3rem', mb: 2 }}>{item.icon}</Box>
                <Typography variant="h6" sx={{ fontFamily: fontHeader, fontWeight: 800, mb: 1 }}>{item.title}</Typography>
                <Typography variant="body1" color="text.secondary" sx={{ fontFamily: fontBody}}>{item.desc}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      
    </Box>
  );
}