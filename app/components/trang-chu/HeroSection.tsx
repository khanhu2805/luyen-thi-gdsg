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
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import RouteRoundedIcon from '@mui/icons-material/RouteRounded';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import CalculateRoundedIcon from '@mui/icons-material/CalculateRounded';
import Link from 'next/link';
import FadeInScroll from '../FadeInScroll';

const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

const subjectCards = [
  {
    title: 'Toán',
    desc: 'Tư duy · dạng bài · luyện đề',
    icon: <CalculateRoundedIcon />,
    accent: '#8fc3ff',
  },
  {
    title: 'Ngữ văn',
    desc: 'Đọc hiểu · nghị luận',
    icon: <MenuBookRoundedIcon />,
    accent: '#ffb2b2',
  },
  {
    title: 'Tiếng Anh',
    desc: 'Ngữ pháp · từ vựng',
    icon: <TranslateRoundedIcon />,
    accent: '#9fe5c6',
  },
];

export default function HeroSection() {
  return (
    <Box
      className="animated-mesh noise-overlay"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        color: 'white',
        minHeight: { md: 650 },
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box
        className="floating-orb"
        sx={{
          position: 'absolute',
          width: 520,
          height: 520,
          borderRadius: '50%',
          right: -180,
          top: -230,
          bgcolor: 'rgba(255,255,255,.07)',
        }}
      />
      <Box
        className="floating-card-delay"
        sx={{
          position: 'absolute',
          width: 280,
          height: 280,
          borderRadius: '50%',
          left: -130,
          bottom: -120,
          bgcolor: 'rgba(255,190,92,.10)',
        }}
      />

      <Container maxWidth="xl" sx={{ py: { xs: 7, md: 9 }, position: 'relative', zIndex: 2 }}>
        <Grid container spacing={{ xs: 5, md: 7 }} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <FadeInScroll>
              <Chip
                icon={<AutoAwesomeRoundedIcon />}
                label="TUYỂN SINH ÔN THI VÀO LỚP 10"
                sx={{
                  mb: 2.5,
                  bgcolor: 'rgba(255,255,255,.12)',
                  color: 'white',
                  border: '1px solid rgba(255,255,255,.17)',
                  fontFamily: fontHeader,
                  fontWeight: 900,
                  letterSpacing: 0.6,
                  '& .MuiChip-icon': { color: '#ffd166' },
                }}
              />

              <Typography
                variant="h1"
                sx={{
                  fontFamily: fontHeader,
                  fontWeight: 900,
                  fontSize: { xs: '2.45rem', sm: '3.2rem', md: '4.25rem' },
                  lineHeight: 1.06,
                  letterSpacing: '-0.04em',
                  maxWidth: 820,
                }}
              >
                Học chắc kiến thức.
                <Box
                  component="span"
                  sx={{
                    display: 'block',
                    color: '#ffd166',
                    textShadow: '0 6px 28px rgba(255,209,102,.18)',
                  }}
                >
                  Vững vàng vào lớp 10.
                </Box>
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  fontFamily: fontBody,
                  mt: 3,
                  maxWidth: 760,
                  lineHeight: 1.75,
                  opacity: 0.92,
                  fontWeight: 500,
                }}
              >
                Lộ trình 8 tuần cho Toán · Ngữ văn · Tiếng Anh,
                kết hợp giáo viên có kinh nghiệm chuyên môn, tài liệu ôn tập,
                đề luyện và LMS hỗ trợ học sinh trong suốt quá trình chuẩn bị cho kỳ thi.
              </Typography>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={1.5}
                sx={{ mt: 4 }}
              >
                <Button
                  component={Link}
                  href="/#form-dang-ky"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardRoundedIcon />}
                  className="shine-button"
                  sx={{
                    borderRadius: 999,
                    px: 4,
                    py: 1.55,
                    bgcolor: '#ff8a1f',
                    fontFamily: fontHeader,
                    fontWeight: 900,
                    textTransform: 'none',
                    boxShadow: '0 14px 34px rgba(255,138,31,.30)',
                    '&:hover': {
                      bgcolor: '#f57c00',
                      boxShadow: '0 16px 38px rgba(255,138,31,.36)',
                    },
                  }}
                >
                  Đăng ký tư vấn
                </Button>

                <Button
                  component={Link}
                  href="/de-thi-thu"
                  variant="outlined"
                  size="large"
                  startIcon={<AssignmentRoundedIcon />}
                  sx={{
                    borderRadius: 999,
                    px: 4,
                    py: 1.55,
                    color: 'white',
                    borderColor: 'rgba(255,255,255,.62)',
                    fontFamily: fontHeader,
                    fontWeight: 900,
                    textTransform: 'none',
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: 'rgba(255,255,255,.08)',
                    },
                  }}
                >
                  Xem đề thi thử
                </Button>
              </Stack>

              <Grid container spacing={1.2} sx={{ mt: 4.2, maxWidth: 760 }}>
                {[
                  ['03 môn', 'Toán · Văn · Anh'],
                  ['08 tuần', 'Lộ trình rõ ràng'],
                  ['LMS', 'Video & tài liệu'],
                ].map(([value, label]) => (
                  <Grid key={value} size={{ xs: 4 }}>
                    <Box
                      sx={{
                        p: { xs: 1.2, sm: 1.6 },
                        borderRadius: 3,
                        bgcolor: 'rgba(255,255,255,.08)',
                        border: '1px solid rgba(255,255,255,.12)',
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: fontHeader,
                          fontWeight: 900,
                          color: '#ffd166',
                          fontSize: { xs: '.96rem', sm: '1.1rem' },
                        }}
                      >
                        {value}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          opacity: 0.82,
                          mt: 0.25,
                          fontSize: { xs: '.68rem', sm: '.78rem' },
                        }}
                      >
                        {label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </FadeInScroll>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <FadeInScroll delay={0.12} direction="left">
              <Box
                sx={{
                  position: 'relative',
                  maxWidth: 520,
                  mx: 'auto',
                }}
              >
                <Box
                  className="glass-dark"
                  sx={{
                    borderRadius: 7,
                    p: { xs: 2.2, sm: 3 },
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    className="floating-orb"
                    sx={{
                      position: 'absolute',
                      width: 190,
                      height: 190,
                      borderRadius: '50%',
                      right: -70,
                      top: -80,
                      bgcolor: 'rgba(255,255,255,.09)',
                    }}
                  />

                  <Stack direction="row" spacing={1.2} sx={{ alignItems: 'center', position: 'relative' }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2.8,
                        display: 'grid',
                        placeItems: 'center',
                        bgcolor: 'rgba(255,209,102,.16)',
                        color: '#ffd166',
                      }}
                    >
                      <RouteRoundedIcon />
                    </Box>
                    <Box>
                      <Typography
                        variant="overline"
                        sx={{ fontWeight: 900, letterSpacing: 1, opacity: 0.8 }}
                      >
                        LỘ TRÌNH ÔN THI
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{ fontFamily: fontHeader, fontWeight: 900 }}
                      >
                        8 tuần tập trung cho mục tiêu vào 10
                      </Typography>
                    </Box>
                  </Stack>

                  <Stack spacing={1.2} sx={{ mt: 3, position: 'relative' }}>
                    {subjectCards.map((subject, index) => (
                      <Box
                        key={subject.title}
                        className={index === 1 ? 'floating-card-delay' : 'card-lift'}
                        sx={{
                          p: 1.6,
                          borderRadius: 3.5,
                          bgcolor: 'rgba(255,255,255,.10)',
                          border: '1px solid rgba(255,255,255,.13)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.4,
                        }}
                      >
                        <Box
                          sx={{
                            width: 44,
                            height: 44,
                            borderRadius: 2.6,
                            display: 'grid',
                            placeItems: 'center',
                            bgcolor: 'rgba(255,255,255,.10)',
                            color: subject.accent,
                            flexShrink: 0,
                          }}
                        >
                          {subject.icon}
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography
                            sx={{ fontFamily: fontHeader, fontWeight: 900 }}
                          >
                            {subject.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ mt: 0.2, opacity: 0.72 }}
                          >
                            {subject.desc}
                          </Typography>
                        </Box>
                        <CheckCircleRoundedIcon sx={{ color: '#9fe5c6', fontSize: 21 }} />
                      </Box>
                    ))}
                  </Stack>

                  <Grid container spacing={1.2} sx={{ mt: 2.2, position: 'relative' }}>
                    <Grid size={{ xs: 6 }}>
                      <Box
                        sx={{
                          p: 1.7,
                          borderRadius: 3.5,
                          bgcolor: '#fff3e0',
                          color: '#b85a00',
                          height: '100%',
                        }}
                      >
                        <CardGiftcardRoundedIcon />
                        <Typography sx={{ mt: 0.8, fontWeight: 900, fontSize: '.86rem' }}>
                          Tặng sách Toán 9
                        </Typography>
                        <Typography sx={{ mt: 0.3, fontSize: '.7rem', opacity: 0.8 }}>
                          Quyền lợi học viên
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid size={{ xs: 6 }}>
                      <Box
                        sx={{
                          p: 1.7,
                          borderRadius: 3.5,
                          bgcolor: '#eef1ff',
                          color: '#4050b2',
                          height: '100%',
                        }}
                      >
                        <GroupsRoundedIcon />
                        <Typography sx={{ mt: 0.8, fontWeight: 900, fontSize: '.86rem' }}>
                          Mời bạn cùng học
                        </Typography>
                        <Typography sx={{ mt: 0.3, fontSize: '.7rem', opacity: 0.8 }}>
                          Cùng nhận ưu đãi
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

                <Box
                  className="glass-panel floating-card-delay"
                  sx={{
                    position: 'absolute',
                    right: { xs: -4, sm: -18 },
                    bottom: { xs: -24, sm: -28 },
                    borderRadius: 3.3,
                    px: 1.7,
                    py: 1.3,
                    color: '#102044',
                    maxWidth: 190,
                  }}
                >
                  <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                    <AssignmentRoundedIcon sx={{ color: '#2f6fed', fontSize: 22 }} />
                    <Box>
                      <Typography sx={{ fontWeight: 900, fontSize: '.78rem' }}>
                        Có kho đề thi thử
                      </Typography>
                      <Typography sx={{ color: '#60708e', fontSize: '.68rem', mt: 0.2 }}>
                        Hỗ trợ học sinh tự luyện
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </FadeInScroll>
          </Grid>
        </Grid>

        <FadeInScroll delay={0.2}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={1.2}
            sx={{ mt: { xs: 5, md: 4 }, alignItems: { md: 'center' } }}
          >
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <CardGiftcardRoundedIcon sx={{ color: '#ffd166' }} />
              <Typography sx={{ fontWeight: 800, fontSize: '.92rem' }}>
                Đăng ký khóa học – tặng sách Toán 9
              </Typography>
            </Stack>
            <Box sx={{ display: { xs: 'none', md: 'block' }, opacity: 0.35 }}>•</Box>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <GroupsRoundedIcon sx={{ color: '#9fe5c6' }} />
              <Typography sx={{ fontWeight: 800, fontSize: '.92rem' }}>
                Mời bạn cùng học – cùng nhận ưu đãi 100.000đ
              </Typography>
            </Stack>
            <Box sx={{ display: { xs: 'none', md: 'block' }, opacity: 0.35 }}>•</Box>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <CheckCircleRoundedIcon sx={{ color: '#9fe5c6' }} />
              <Typography sx={{ fontWeight: 800, fontSize: '.92rem' }}>
                Video · tài liệu · LMS · đề thi thử
              </Typography>
            </Stack>
          </Stack>
        </FadeInScroll>
      </Container>
    </Box>
  );
}
