'use client';

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import Image from 'next/image';
import Link from 'next/link';

const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

const footerLinkStyle = {
  color: '#c6d2e8',
  textDecoration: 'none',
  transition: 'color .2s ease, transform .2s ease',
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{ bgcolor: '#061a3d', color: '#c6d2e8', position: 'relative', overflow: 'hidden' }}>
      <Box
        sx={{
          position: 'absolute',
          width: 440,
          height: 440,
          borderRadius: '50%',
          right: -180,
          top: -180,
          bgcolor: 'rgba(47,111,237,.15)',
          filter: 'blur(4px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: 300,
          height: 300,
          borderRadius: '50%',
          left: -150,
          bottom: -120,
          bgcolor: 'rgba(255,138,31,.08)',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, pt: { xs: 6, md: 8 }, pb: 3.5 }}>
        <Box
          sx={{
            mb: { xs: 6, md: 7 },
            p: { xs: 3, md: 4 },
            borderRadius: 5,
            bgcolor: 'rgba(255,255,255,.07)',
            border: '1px solid rgba(255,255,255,.11)',
            backdropFilter: 'blur(10px)',
            display: { md: 'flex' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 3,
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{ fontFamily: fontHeader, fontWeight: 900, color: 'white', fontSize: { xs: '1.7rem', md: '2.2rem' } }}
            >
              Sẵn sàng xây dựng lộ trình ôn thi vào 10?
            </Typography>
            <Typography sx={{ mt: 1, color: '#b7c7e2', maxWidth: 760, lineHeight: 1.7 }}>
              Chọn môn quan tâm và để lại thông tin. Đội ngũ tư vấn sẽ hỗ trợ phụ huynh tìm lớp phù hợp với nhu cầu học tập của học sinh.
            </Typography>
          </Box>
          <Button
            component={Link}
            href="/#form-dang-ky"
            variant="contained"
            endIcon={<ArrowForwardRoundedIcon />}
            className="shine-button"
            sx={{
              mt: { xs: 2.5, md: 0 },
              borderRadius: 999,
              px: 3.2,
              py: 1.25,
              textTransform: 'none',
              fontFamily: fontHeader,
              fontWeight: 900,
              whiteSpace: 'nowrap',
              bgcolor: '#ff8a1f',
              boxShadow: '0 12px 28px rgba(255,138,31,.24)',
              '&:hover': { bgcolor: '#f57c00' },
            }}
          >
            Nhận tư vấn
          </Button>
        </Box>

        <Grid container spacing={{ xs: 5, md: 6 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
              <Box
                sx={{
                  width: 58,
                  height: 58,
                  borderRadius: 3.2,
                  bgcolor: 'white',
                  p: 0.5,
                  display: 'grid',
                  placeItems: 'center',
                  boxShadow: '0 10px 26px rgba(0,0,0,.16)',
                }}
              >
                <Image src="/Logo_cty_sach.png" alt="Logo Giáo dục Sài Gòn" width={50} height={50} />
              </Box>
              <Box>
                <Typography sx={{ fontFamily: fontHeader, fontWeight: 900, color: 'white', fontSize: '1.1rem' }}>
                  LUYỆN THI
                </Typography>
                <Typography sx={{ fontFamily: fontHeader, fontWeight: 800, color: '#85b6ff', fontSize: '.88rem' }}>
                  GIÁO DỤC SÀI GÒN
                </Typography>
              </Box>
            </Stack>
            <Typography sx={{ mt: 2.4, maxWidth: 560, fontFamily: fontBody, lineHeight: 1.8, color: '#aebed8' }}>
              Đồng hành cùng học sinh lớp 9 với lộ trình ôn thi trực tuyến,
              tài liệu học tập, đề luyện và đội ngũ giáo viên có kinh nghiệm chuyên môn.
            </Typography>

            <Stack direction="row" spacing={1} sx={{ mt: 2.5, flexWrap: 'wrap', rowGap: 1 }}>
              {['Toán', 'Ngữ văn', 'Tiếng Anh', 'Lộ trình 8 tuần'].map((item) => (
                <Box
                  key={item}
                  sx={{
                    px: 1.4,
                    py: 0.65,
                    borderRadius: 999,
                    bgcolor: 'rgba(255,255,255,.07)',
                    border: '1px solid rgba(255,255,255,.10)',
                    fontSize: '.82rem',
                    color: '#d4deef',
                  }}
                >
                  {item}
                </Box>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography sx={{ fontFamily: fontHeader, fontWeight: 900, color: 'white', mb: 2 }}>
              Tuyển sinh
            </Typography>
            <Stack spacing={1.35}>
              {[
                ['Khóa học', '/khoa-hoc'],
                ['Đội ngũ giáo viên', '/doi-ngu'],
                ['Đăng ký tư vấn', '/#form-dang-ky'],
                ['Quyền lợi & ưu đãi', '/chinh-sach'],
              ].map(([label, href]) => (
                <Link key={label} href={href} style={footerLinkStyle}>
                  {label}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography sx={{ fontFamily: fontHeader, fontWeight: 900, color: 'white', mb: 2 }}>
              Học tập
            </Typography>
            <Stack spacing={1.35}>
              {[
                ['Sách luyện tập', '/sach'],
                ['Tài liệu ôn luyện', '/tai-lieu-on-luyen'],
                ['Đề thi thử', '/de-thi-thu'],
                ['Tin tức giáo dục', '/tin-tuc'],
              ].map(([label, href]) => (
                <Link key={label} href={href} style={footerLinkStyle}>
                  {label}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography sx={{ fontFamily: fontHeader, fontWeight: 900, color: 'white', mb: 2 }}>
              Liên hệ
            </Typography>
            <Stack spacing={1.7}>
              <Link href="mailto:luyenthigdsg@gmail.com" style={footerLinkStyle}>
                <Stack direction="row" spacing={1.2} sx={{ alignItems: 'center' }}>
                  <EmailRoundedIcon sx={{ color: '#85b6ff', fontSize: 21 }} />
                  <Typography sx={{ fontFamily: fontBody, fontSize: '.94rem' }}>
                    luyenthigdsg@gmail.com
                  </Typography>
                </Stack>
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61589419747743"
                target="_blank"
                rel="noopener noreferrer"
                style={footerLinkStyle}
              >
                <Stack direction="row" spacing={1.2} sx={{ alignItems: 'center' }}>
                  <FacebookRoundedIcon sx={{ color: '#85b6ff', fontSize: 21 }} />
                  <Typography sx={{ fontSize: '.94rem' }}>Facebook Luyện thi GDSG</Typography>
                </Stack>
              </Link>
              <Link
                href="https://zalo.me/1357593207866827845"
                target="_blank"
                rel="noopener noreferrer"
                style={footerLinkStyle}
              >
                <Stack direction="row" spacing={1.2} sx={{ alignItems: 'center' }}>
                  <SchoolRoundedIcon sx={{ color: '#85b6ff', fontSize: 21 }} />
                  <Typography sx={{ fontSize: '.94rem' }}>Zalo tư vấn tuyển sinh</Typography>
                </Stack>
              </Link>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,.09)' }} />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1}
          sx={{ alignItems: { sm: 'center' }, justifyContent: 'space-between' }}
        >
          <Typography sx={{ color: '#8295b6', fontFamily: fontBody, fontSize: '.88rem' }}>
            © {currentYear} Luyện Thi Giáo Dục Sài Gòn.
          </Typography>
          <Typography sx={{ color: '#8295b6', fontFamily: fontBody, fontSize: '.82rem' }}>
            Học chắc kiến thức · Vững vàng vào lớp 10
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
