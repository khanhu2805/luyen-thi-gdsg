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
import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import Link from 'next/link';

const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        color: 'white',
        background: 'linear-gradient(135deg, #081f49 0%, #0d47a1 48%, #1976d2 100%)',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: 480,
          height: 480,
          borderRadius: '50%',
          right: -150,
          top: -190,
          bgcolor: 'rgba(255,255,255,.07)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: 240,
          height: 240,
          borderRadius: '50%',
          left: -90,
          bottom: -120,
          bgcolor: 'rgba(255,193,7,.08)',
        }}
      />

      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 11 }, position: 'relative', zIndex: 1 }}>
        <Grid container spacing={5} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Chip
              label="ÔN THI TUYỂN SINH LỚP 10"
              sx={{
                mb: 2.5,
                bgcolor: 'rgba(255,255,255,.13)',
                color: 'white',
                border: '1px solid rgba(255,255,255,.2)',
                fontWeight: 900,
              }}
            />

            <Typography
              variant="h1"
              sx={{
                fontFamily: fontHeader,
                fontWeight: 900,
                fontSize: { xs: '2.45rem', sm: '3.3rem', md: '4.4rem' },
                lineHeight: 1.08,
              }}
            >
              Học chắc kiến thức
              <Box component="span" sx={{ display: 'block', color: '#ffca28' }}>
                Vững vàng vào lớp 10
              </Box>
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontFamily: fontBody,
                mt: 3,
                maxWidth: 820,
                lineHeight: 1.75,
                opacity: 0.94,
              }}
            >
              Lộ trình 8 tuần cho Toán · Ngữ văn · Tiếng Anh, học cùng giáo viên phụ trách
              theo từng môn, có video, tài liệu và LMS hỗ trợ quá trình ôn tập.
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.2}
              sx={{ mt: 3, flexWrap: 'wrap', rowGap: 1.2 }}
            >
              <Chip
                icon={<CardGiftcardRoundedIcon />}
                label="Đăng ký khóa học – tặng sách Toán 9"
                sx={{
                  bgcolor: '#fff3e0',
                  color: '#e65100',
                  fontWeight: 900,
                  '& .MuiChip-icon': { color: '#e65100' },
                }}
              />
              <Chip
                icon={<GroupsRoundedIcon />}
                label="Mời bạn cùng học – ưu đãi 100.000đ"
                sx={{
                  bgcolor: '#e8eaf6',
                  color: '#283593',
                  fontWeight: 900,
                  '& .MuiChip-icon': { color: '#283593' },
                }}
              />
            </Stack>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 4 }}>
              <Button
                component={Link}
                href="/#form-dang-ky"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  borderRadius: 999,
                  px: 4,
                  py: 1.5,
                  bgcolor: '#ff9800',
                  fontWeight: 900,
                  boxShadow: '0 10px 24px rgba(255,152,0,.28)',
                  '&:hover': { bgcolor: '#f57c00' },
                }}
              >
                Đăng ký tư vấn ngay
              </Button>
              <Button
                component={Link}
                href="/khoa-hoc"
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
                Xem khóa học
              </Button>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                p: 3.2,
                borderRadius: 5,
                bgcolor: 'rgba(255,255,255,.10)',
                border: '1px solid rgba(255,255,255,.18)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 18px 40px rgba(0,0,0,.12)',
              }}
            >
              <Typography
                sx={{
                  fontFamily: fontHeader,
                  fontWeight: 900,
                  fontSize: '1.05rem',
                  color: '#ffca28',
                  mb: 1.5,
                }}
              >
                LỘ TRÌNH RÕ RÀNG
              </Typography>

              {[
                ['03 môn', 'Toán · Ngữ văn · Tiếng Anh'],
                ['08 tuần', 'Mỗi khóa gồm 8 buổi học'],
                ['Đồng hành', 'Video · tài liệu · LMS hỗ trợ ôn tập'],
              ].map(([value, label], index) => (
                <Box
                  key={value}
                  sx={{
                    py: 1.7,
                    borderTop: index === 0 ? 'none' : '1px solid rgba(255,255,255,.13)',
                  }}
                >
                  <Typography variant="h5" sx={{ fontFamily: fontHeader, fontWeight: 900 }}>
                    {value}
                  </Typography>
                  <Typography sx={{ opacity: 0.88, mt: 0.4 }}>{label}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
