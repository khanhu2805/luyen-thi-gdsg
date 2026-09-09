'use client';

import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import Link from 'next/link';
import { ENROLLMENT_OPEN_DATE } from '../../data/enrollment';

const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        color: 'white',
        background: 'linear-gradient(135deg, #0b2d62 0%, #0d47a1 46%, #1976d2 100%)',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: 420,
          height: 420,
          borderRadius: '50%',
          right: -130,
          top: -150,
          bgcolor: 'rgba(255,255,255,.07)',
        }}
      />
      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 11 }, position: 'relative', zIndex: 1 }}>
        <Grid container spacing={5} sx={{alignItems:"center"}}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Chip
              icon={<CalendarMonthRoundedIcon />}
              label={`KHAI GIẢNG ${ENROLLMENT_OPEN_DATE}`}
              sx={{
                bgcolor: 'rgba(255,255,255,.14)',
                color: 'white',
                border: '1px solid rgba(255,255,255,.25)',
                fontWeight: 900,
                mb: 2.5,
              }}
            />
            <Typography
              variant="h1"
              sx={{
                fontFamily: fontHeader,
                fontWeight: 900,
                fontSize: { xs: '2.5rem', sm: '3.3rem', md: '4.4rem' },
                lineHeight: 1.08,
              }}
            >
              Lớp luyện thi trực tuyến
              <Box component="span" sx={{ display: 'block', color: '#ffca28' }}>
                Toán · Ngữ văn · Tiếng Anh
              </Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: fontBody,
                mt: 3,
                maxWidth: 820,
                lineHeight: 1.75,
                opacity: 0.92,
              }}
            >
              Học cùng giáo viên theo từng môn, chọn ca học phù hợp và theo một
              lộ trình 8 tuần rõ ràng. Phụ huynh có thể đăng ký tư vấn hoặc đăng
              ký lớp trực tiếp ngay trên website.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 4 }}>
              <Button
                component={Link}
                href="/khoa-hoc"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  borderRadius: 999,
                  px: 4,
                  py: 1.5,
                  bgcolor: '#ff9800',
                  fontWeight: 900,
                  '&:hover': { bgcolor: '#f57c00' },
                }}
              >
                Xem khóa học & lịch học
              </Button>
              <Button
                component={Link}
                href="/#form-dang-ky"
                variant="outlined"
                size="large"
                sx={{
                  borderRadius: 999,
                  px: 4,
                  py: 1.5,
                  color: 'white',
                  borderColor: 'rgba(255,255,255,.7)',
                  fontWeight: 900,
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255,255,255,.08)',
                  },
                }}
              >
                Nhận tư vấn
              </Button>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                p: 3,
                borderRadius: 5,
                bgcolor: 'rgba(255,255,255,.10)',
                border: '1px solid rgba(255,255,255,.20)',
                backdropFilter: 'blur(8px)',
              }}
            >
              {[
                ['03 môn', 'Toán · Ngữ văn · Tiếng Anh'],
                ['08 tuần', 'Mỗi khóa 8 buổi'],
                ['Nhiều ca', 'Học sinh lựa chọn lịch phù hợp'],
                ['VNPAY QR', 'Thanh toán đăng ký chính thức'],
              ].map(([value, label]) => (
                <Box key={value} sx={{ py: 1.5 }}>
                  <Typography variant="h5" sx={{ fontFamily: fontHeader, fontWeight: 900 }}>
                    {value}
                  </Typography>
                  <Typography sx={{ opacity: 0.88 }}>{label}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
