'use client';

import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
  Divider,
  Grid
} from '@mui/material';
import Link from 'next/link';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import Image from 'next/image';

// --- FONTS ---
const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{
      bgcolor: '#0a192f', // Xanh navy đậm chuẩn EdTech
      color: '#a8b2d1', // Màu chữ xám xanh dịu mắt
      pt: { xs: 8, md: 10 },
      pb: 4,
      fontFamily: fontBody,
      borderTop: '4px solid #1976d2' // Viền nhấn màu xanh blue
    }}>
      <Container maxWidth="xl">
        <Grid container spacing={6}>

          {/* CỘT 1: THƯƠNG HIỆU & GIỚI THIỆU */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              {/* Nếu bạn có logo màu trắng/sáng thì dùng ảnh này */}
              <Image src="/Logo_cty_sach.png" alt="Logo GDSG" width={50} height={50} style={{ marginRight: '15px', background: 'white', borderRadius: '50%', padding: '2px' }} />
              <Typography variant="h5" sx={{ fontFamily: fontHeader, fontWeight: 900, color: '#e6f1ff', letterSpacing: 1 }}>
                LUYỆN THI <br /> GIÁO DỤC SÀI GÒN
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ lineHeight: 1.8, mb: 3, pr: { md: 4 } }}>
              Hệ thống ôn luyện toàn diện bám sát chương trình mới. Sứ mệnh của chúng tôi là đồng hành và giúp học sinh bứt phá điểm số, tự tin bước vào cánh cổng ngôi trường mơ ước.
            </Typography>

            {/* Mạng xã hội */}
            {/* <Stack direction="row" spacing={1.5}>
              {/* <IconButton sx={{ color: '#a8b2d1', bgcolor: 'rgba(255,255,255,0.05)', '&:hover': { color: '#1877F2', bgcolor: 'rgba(255,255,255,0.1)' } }}>
                <FacebookRoundedIcon />
              </IconButton>
              <IconButton sx={{ color: '#a8b2d1', bgcolor: 'rgba(255,255,255,0.05)', '&:hover': { color: '#FF0000', bgcolor: 'rgba(255,255,255,0.1)' } }}>
                <YouTubeIcon />
              </IconButton> */}
            {/* Icon Zalo giả lập bằng Box 
              <IconButton sx={{ color: '#a8b2d1', bgcolor: 'rgba(255,255,255,0.05)', '&:hover': { color: '#0068FF', bgcolor: 'rgba(255,255,255,0.1)' } }}>
                <Typography sx={{ fontWeight: 900, fontSize: '1rem', fontFamily: fontHeader }}>Z</Typography>
              </IconButton>
            </Stack> */}
          </Grid>

          {/* CỘT 2: KHÁM PHÁ (LINKS) */}
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="h6" sx={{ textTransform: 'uppercase', fontFamily: fontHeader, fontWeight: 800, color: '#e6f1ff', mb: 3 }}>
              Khám Phá
            </Typography>
            <Stack spacing={2}>
              {['Trang chủ', 'Đội ngũ',].map((item, idx) => (
                <Link
                  key={idx}
                  href={idx === 0 ? '/' : idx === 1 ? '/doi-ngu' : '/khoa-hoc'}
                  style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s' }}
                >
                  <Typography variant="body2" sx={{ '&:hover': { color: '#64ffda', transform: 'translateX(5px)' }, transition: 'all 0.2s' }}>
                    {item}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* CỘT 3: TÀI NGUYÊN (LINKS) */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ fontFamily: fontHeader, fontWeight: 800, color: '#e6f1ff', mb: 3 }}>
              TÀI NGUYÊN HỌC TẬP
            </Typography>
            <Stack spacing={2}>
              {['Tài liệu ôn tập miễn phí', 'Ngân hàng Đề thi thử'].map((item, idx) => (
                <Link
                  key={idx}
                  href={idx < 2 ? '/tai-lieu-on-luyen' : '/de-thi-thu'}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Typography variant="body2" sx={{ '&:hover': { color: '#64ffda', transform: 'translateX(5px)' }, transition: 'all 0.2s' }}>
                    {item}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* CỘT 4: THÔNG TIN LIÊN HỆ */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" sx={{ fontFamily: fontHeader, fontWeight: 800, color: '#e6f1ff', mb: 3 }}>
              LIÊN HỆ
            </Typography>
            <Stack spacing={2.5}>
              {/* <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <LocationOnRoundedIcon sx={{ color: '#64ffda', fontSize: 20, mt: 0.2 }} />
                <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
                  Trụ sở chính: TP. Hồ Chí Minh <br/>
                  (Đang cập nhật địa chỉ)
                </Typography>
              </Box> */}
              {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}> */}
              <Link href="https://zalo.me/1357593207866827845" target="_blank" rel="noopener noreferrer">
                <Stack direction='row' sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Typography sx={{ fontWeight: 900, fontSize: '1.25rem', fontFamily: fontHeader, color: '#64ffda' }}>Z</Typography>
                  <Typography variant="body2">
                    LUYỆN THI - GIÁO DỤC SÀI GÒN
                  </Typography>
                </Stack>
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=61589419747743" target="_blank" rel="noopener noreferrer">
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <FacebookRoundedIcon sx={{ color: '#64ffda', fontSize: 20 }} />
                <Typography variant="body2">
                  Luyện thi Giáo dục Sài Gòn
                </Typography>
              </Box>
              </Link>
              {/* </Box> */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <EmailRoundedIcon sx={{ color: '#64ffda', fontSize: 20 }} />
                <Typography variant="body2">
                  luyenthigdsg@gmail.com
                </Typography>
              </Box>
            </Stack>
          </Grid>

        </Grid>

        {/* COPYRIGHT SECTION */}
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mt: 8, mb: 4 }} />

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" sx={{ opacity: 0.7, textAlign: 'center' }}>
            &copy; {currentYear} Bản quyền thuộc về Luyện Thi Giáo Dục Sài Gòn.
          </Typography>
          {/* <Stack direction="row" spacing={3}>
            <Link href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="body2" sx={{ opacity: 0.7, '&:hover': { opacity: 1, color: '#64ffda' } }}>Điều khoản sử dụng</Typography>
            </Link>
            <Link href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="body2" sx={{ opacity: 0.7, '&:hover': { opacity: 1, color: '#64ffda' } }}>Chính sách bảo mật</Typography>
            </Link>
          </Stack> */}
        </Box>

      </Container>
    </Box>
  );
}