'use client';

import {
  Box,
  Container,
  Typography,
  Card,
  Chip,
  Divider,
  Stack,
  Button
} from '@mui/material';
import { keyframes } from '@mui/system';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import LightbulbCircleRoundedIcon from '@mui/icons-material/LightbulbCircleRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Link from 'next/link';
import Image from 'next/image';

// --- ANIMATIONS ---
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

// --- FONTS ---
const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

export default function TinTucChiTietPage() {
  // Trong thực tế, bạn sẽ fetch dữ liệu dựa trên params.slug
  // Ở đây tôi hardcode nội dung bài HTV3 từ tài liệu docx bạn gửi

  return (
    <Box sx={{ fontFamily: fontBody, bgcolor: '#f8fafc', minHeight: '100vh', pb: 15, pt: { xs: 4, md: 8 } }}>

      <Container maxWidth="xl" sx={{ animation: `${fadeInUp} 0.8s ease-out` }}>
        {/* Nút quay lại */}
        <Button
          component={Link}
          href="/tin-tuc"
          startIcon={<ArrowBackRoundedIcon />}
          sx={{ mb: 4, fontFamily: fontHeader, fontWeight: 700, color: 'text.secondary', '&:hover': { bgcolor: 'transparent', color: '#1976d2' } }}
        >
          Trở về Danh sách
        </Button>

        <Card sx={{ borderRadius: 6, p: { xs: 4, md: 8 }, boxShadow: '0 20px 40px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>

          {/* --- HEADER BÀI VIẾT --- */}
          <Stack direction="row" spacing={2} sx={{ mb: 3, alignItems: "center" }}>
            <Chip label="Sự kiện" sx={{ bgcolor: '#e3f2fd', color: '#1976d2', fontWeight: 800, fontFamily: fontHeader }} />
            <Stack direction="row" spacing={1} sx={{ color: 'text.secondary', alignItems: "center" }}>
              <CalendarMonthRoundedIcon fontSize="small" />
              <Typography variant="body2" sx={{ fontWeight: 600 }}>08/05/2026</Typography>
            </Stack>
          </Stack>

          <Typography variant="h1" sx={{ fontFamily: fontHeader, fontWeight: 900, color: '#1a237e', mb: 4, lineHeight: 1.3, fontSize: { xs: '2rem', md: '2.5rem' }, textTransform: 'uppercase' }}>
            Lịch Phát Sóng Chi Tiết Chương Trình "Đồng Hành Cùng Học Sinh Lớp 9" Tối Ưu Cho Kỳ Thi Vào Lớp 10
          </Typography>

          <Divider sx={{ mb: 5 }} />

          {/* --- NỘI DUNG BÀI VIẾT --- */}
          <Box sx={{ color: '#374151', fontSize: '1.1rem', lineHeight: 1.8 }}>

            <Typography variant='body1' sx={{ fontSize: 'inherit', mb: 3 }}>
              Kỳ thi tuyển sinh vào lớp 10 đang đến gần, mang theo không ít áp lực cho các sĩ tử. Nhằm hỗ trợ các em học sinh củng cố kiến thức và tự tin bước vào kỳ thi quan trọng, chương trình <strong>"Đồng hành cùng học sinh lớp 9"</strong> sẽ chính thức lên sóng trên kênh HTV3 bắt đầu từ ngày 07/05/2026. Cùng cập nhật ngay lịch phát sóng chi tiết dưới đây để không bỏ lỡ bất kỳ bài giảng hữu ích nào!
            </Typography>

            <Typography variant="h4" sx={{ fontFamily: fontHeader, fontWeight: 800, color: '#0d47a1', mt: 5, mb: 3 }}>
              Giải pháp ôn tập toàn diện 3 môn cốt lõi
            </Typography>
            <Typography variant='body1' sx={{ fontSize: 'inherit' }}>
              Chương trình được thiết kế đặc biệt như một người bạn đồng hành, giúp các sĩ tử hệ thống hóa lại toàn bộ kiến thức trọng tâm. Nội dung bám sát cấu trúc đề thi tuyển sinh vào lớp 10 với 3 môn học bắt buộc:
            </Typography>

            <Stack spacing={2} sx={{ mb: 4, ml: 2, mt: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <CheckCircleRoundedIcon sx={{ color: '#1976d2', mt: 0.5 }} />
                <Typography sx={{ fontSize: 'inherit' }}><strong>Toán học:</strong> Ôn tập các chuyên đề Đại số và Hình học quan trọng, rèn luyện kỹ năng giải đề và tránh các lỗi sai thường gặp.</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <CheckCircleRoundedIcon sx={{ color: '#d32f2f', mt: 0.5 }} />
                <Typography sx={{ fontSize: 'inherit' }}><strong>Ngữ Văn:</strong> Phân tích các tác phẩm văn học trọng tâm, rèn luyện kỹ năng viết đoạn văn nghị luận xã hội và nghị luận văn học.</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <CheckCircleRoundedIcon sx={{ color: '#2e7d32', mt: 0.5 }} />
                <Typography sx={{ fontSize: 'inherit' }}><strong>Tiếng Anh:</strong> Củng cố ngữ pháp, từ vựng và luyện các dạng bài tập đọc hiểu, viết lại câu thường xuất hiện trong đề thi.</Typography>
              </Box>
            </Stack>

            {/* Banner / Chỗ chèn hình ảnh */}
            <Box sx={{display: 'flex', justifyContent: 'center', mb: 5}}>
            <Typography variant="h3" sx={{ color: '#757575', fontFamily: fontHeader }}>
              <Image src="/lich-phat-song.jpg" alt="Lịch phát sóng chương trình" width={600} height={300} style={{ objectFit: 'cover', borderRadius: 4, }} />
            </Typography>
            </Box>

            <Typography variant="h4" sx={{ fontFamily: fontHeader, fontWeight: 800, color: '#0d47a1', mt: 5, mb: 3 }}>
              Chi tiết lịch phát sóng chương trình
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 'inherit' }}>
              Để thuận tiện cho việc theo dõi, chương trình được phát sóng cố định vào khung giờ vàng buổi tối và có lịch phát lại vào sáng hôm sau. Cụ thể:
            </Typography>

            {/* Box nổi bật lịch phát sóng */}
            <Box sx={{ bgcolor: '#e3f2fd', p: 4, borderRadius: 4, mb: 4, borderLeft: '6px solid #1976d2', mt: 4 }}>
              <Stack spacing={2}>
                <Typography sx={{ fontSize: '1.1rem' }}>📺 <strong>Lịch phát sóng chính:</strong> 18g30 hàng ngày trên kênh truyền hình HTV3.</Typography>
                <Typography sx={{ fontSize: '1.1rem' }}>📅 <strong>Thời gian diễn ra:</strong> Bắt đầu từ ngày 07/05/2026 đến hết ngày 24/05/2026.</Typography>
                <Typography sx={{ fontSize: '1.1rem' }}>🔄 <strong>Nền tảng phát lại:</strong> Các nền tảng số của HTV (Kênh YouTube, Ứng dụng HTV).</Typography>
              </Stack>
            </Box>

            <Typography variant="h4" sx={{ fontFamily: fontHeader, fontWeight: 800, color: '#0d47a1', mt: 4, mb: 4 }}>
              Tại sao học sinh lớp 9 không nên bỏ lỡ?
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 5 }}>
              <li><Typography sx={{ fontSize: 'inherit', mb: 1 }}><strong>Hệ thống kiến thức chuẩn xác:</strong> Biên soạn và giảng dạy bởi đội ngũ giáo viên giàu kinh nghiệm.</Typography></li>
              <li><Typography sx={{ fontSize: 'inherit', mb: 1 }}><strong>Tiết kiệm thời gian:</strong> Chỉ với 30 - 45 phút mỗi ngày, ôn tập hiệu quả tại nhà mà không cần di chuyển.</Typography></li>
              <li><Typography sx={{ fontSize: 'inherit', mb: 1 }}><strong>Hoàn toàn miễn phí:</strong> Phủ sóng rộng rãi trên HTV3 và các nền tảng số.</Typography></li>
            </Box>

            {/* Box Lời Khuyên (Màu vàng) */}
            <Box sx={{ bgcolor: '#fff8e1', p: 4, borderRadius: 4, display: 'flex', gap: 3, alignItems: 'flex-start', border: '1px solid #ffe082' }}>
              <LightbulbCircleRoundedIcon sx={{ fontSize: 40, color: '#ffb300' }} />
              <Box>
                <Typography variant="h6" sx={{ fontFamily: fontHeader, fontWeight: 800, color: '#f57f17', mb: 1 }}>
                  Lời khuyên cho các sĩ tử
                </Typography>
                <Typography sx={{ fontSize: 'inherit', color: '#5d4037' }}>
                  Hãy chuẩn bị sẵn tập vở, bút highlight và ghi chú lại những "mẹo" giải bài tập nhanh được các thầy cô chia sẻ trong chương trình. Việc kết hợp giữa xem truyền hình trực quan và tự ghi chép sẽ giúp não bộ ghi nhớ kiến thức lâu hơn.
                </Typography>
              </Box>
            </Box>

          </Box>
        </Card>
      </Container>
    </Box>
  );
}