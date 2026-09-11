'use client';

import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import Image from 'next/image';
import Link from 'next/link';

const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

const footerLinkStyle = {
  color: '#c5d2e6',
  textDecoration: 'none',
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{ bgcolor: '#0a192f', color: '#c5d2e6', pt: { xs: 7, md: 9 }, pb: 3.5, borderTop: '4px solid #1976d2' }}>
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 5, md: 6 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
              <Box sx={{ width: 54, height: 54, borderRadius: '50%', bgcolor: 'white', p: .4, display: 'grid', placeItems: 'center' }}>
                <Image src="/Logo_cty_sach.png" alt="Logo Giáo dục Sài Gòn" width={48} height={48} />
              </Box>
              <Box>
                <Typography sx={{ fontFamily: fontHeader, fontWeight: 900, color: 'white', fontSize: '1.05rem' }}>
                  LUYỆN THI
                </Typography>
                <Typography sx={{ fontFamily: fontHeader, fontWeight: 800, color: '#7cc4ff', fontSize: '.88rem' }}>
                  GIÁO DỤC SÀI GÒN
                </Typography>
              </Box>
            </Stack>
            <Typography sx={{ mt: 2.5, maxWidth: 560, fontFamily: fontBody, lineHeight: 1.8, color: '#aebbd0' }}>
              Đồng hành cùng học sinh lớp 9 trong quá trình ôn thi vào 10 với khóa học trực tuyến,
              giáo viên phụ trách rõ ràng, lịch học minh bạch và tài liệu luyện tập theo từng môn.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography sx={{ fontFamily: fontHeader, fontWeight: 900, color: 'white', mb: 2.2 }}>
              Khóa học
            </Typography>
            <Stack spacing={1.4}>
              <Link href="/khoa-hoc" style={footerLinkStyle}>Khóa học & lịch học</Link>
              <Link href="/doi-ngu" style={footerLinkStyle}>Đội ngũ giáo viên</Link>
              <Link href="/#form-dang-ky" style={footerLinkStyle}>Đăng ký tư vấn</Link>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography sx={{ fontFamily: fontHeader, fontWeight: 900, color: 'white', mb: 2.2 }}>
              Học tập
            </Typography>
            <Stack spacing={1.4}>
              <Link href="/tai-lieu-on-luyen" style={footerLinkStyle}>Tài liệu ôn luyện</Link>
              <Link href="/de-thi-thu" style={footerLinkStyle}>Đề thi thử</Link>
              <Link href="/tin-tuc" style={footerLinkStyle}>Tin tức giáo dục</Link>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography sx={{ fontFamily: fontHeader, fontWeight: 900, color: 'white', mb: 2.2 }}>
              Liên hệ
            </Typography>
            <Stack spacing={1.8}>
              <Link href="mailto:luyenthigdsg@gmail.com" style={footerLinkStyle}>
                <Stack direction="row" spacing={1.2} sx={{ alignItems: 'center' }}>
                  <EmailRoundedIcon sx={{ color: '#7cc4ff', fontSize: 21 }} />
                  <Typography sx={{ fontFamily: fontBody }}>luyenthigdsg@gmail.com</Typography>
                </Stack>
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=61589419747743" target="_blank" rel="noopener noreferrer" style={footerLinkStyle}>
                <Stack direction="row" spacing={1.2} sx={{ alignItems: 'center' }}>
                  <FacebookRoundedIcon sx={{ color: '#7cc4ff', fontSize: 21 }} />
                  <Typography>Facebook Luyện thi GDSG</Typography>
                </Stack>
              </Link>
              <Link href="https://zalo.me/1357593207866827845" target="_blank" rel="noopener noreferrer" style={footerLinkStyle}>
                <Stack direction="row" spacing={1.2} sx={{ alignItems: 'center' }}>
                  <SchoolRoundedIcon sx={{ color: '#7cc4ff', fontSize: 21 }} />
                  <Typography>Zalo tư vấn tuyển sinh</Typography>
                </Stack>
              </Link>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,.1)' }} />
        <Typography sx={{ textAlign: 'center', color: '#8291aa', fontFamily: fontBody, fontSize: '.9rem' }}>
          © {currentYear} Bản quyền thuộc về Luyện Thi Giáo Dục Sài Gòn.
        </Typography>
      </Container>
    </Box>
  );
}
