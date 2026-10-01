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
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import Link from 'next/link';
import FadeInScroll from '../FadeInScroll';
import { publicTeachers } from '../../data/public-enrollment';

const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

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
                  href="/doi-ngu"
                  variant="outlined"
                  size="large"
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
                  Khám phá đội ngũ
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
                  minHeight: { xs: 430, sm: 500, md: 540 },
                  maxWidth: 520,
                  mx: 'auto',
                }}
              >
                <Box
                  className="glass-dark"
                  sx={{
                    position: 'absolute',
                    inset: { xs: '34px 12px 34px 12px', sm: '30px 40px 30px 40px' },
                    borderRadius: 7,
                    transform: 'rotate(-2deg)',
                  }}
                />

                {publicTeachers.map((teacher, index) => {
                  const positions = [
                    {
                      top: { xs: 34, sm: 24 },
                      left: { xs: 8, sm: 12 },
                      width: { xs: 190, sm: 210 },
                      zIndex: 3,
                      rotate: '-4deg',
                      className: 'floating-card',
                    },
                    {
                      top: { xs: 95, sm: 92 },
                      right: { xs: 0, sm: 0 },
                      width: { xs: 190, sm: 214 },
                      zIndex: 4,
                      rotate: '4deg',
                      className: 'floating-card-delay',
                    },
                    {
                      bottom: { xs: 10, sm: 8 },
                      left: { xs: 72, sm: 116 },
                      width: { xs: 195, sm: 218 },
                      zIndex: 5,
                      rotate: '-1deg',
                      className: 'floating-card',
                    },
                  ][index];

                  return (
                    <Box
                      key={teacher.id}
                      className={positions.className}
                      sx={{
                        position: 'absolute',
                        top: positions.top,
                        bottom: positions.bottom,
                        left: positions.left,
                        right: positions.right,
                        width: positions.width,
                        zIndex: positions.zIndex,
                        transform: 'rotate(' + positions.rotate + ')',
                        transformOrigin: 'center',
                      }}
                    >
                      <Box
                        className="card-lift"
                        sx={{
                          bgcolor: 'white',
                          borderRadius: 4.5,
                          p: 1.2,
                          boxShadow: '0 20px 45px rgba(0,0,0,.23)',
                          border: '1px solid rgba(255,255,255,.75)',
                        }}
                      >
                        <Box
                          sx={{
                            position: 'relative',
                            borderRadius: 3.5,
                            overflow: 'hidden',
                            height: { xs: 205, sm: 230 },
                            bgcolor: teacher.softAccent,
                          }}
                        >
                          <Box
                            component="img"
                            src={teacher.image}
                            alt={teacher.name}
                            sx={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              objectPosition: 'top center',
                              display: 'block',
                            }}
                          />
                          <Box
                            sx={{
                              position: 'absolute',
                              inset: 'auto 0 0',
                              height: '46%',
                              background: 'linear-gradient(to top, rgba(5,18,44,.88), transparent)',
                            }}
                          />
                          <Chip
                            label={teacher.subject}
                            size="small"
                            sx={{
                              position: 'absolute',
                              top: 10,
                              left: 10,
                              bgcolor: teacher.accent,
                              color: 'white',
                              fontWeight: 900,
                            }}
                          />
                          <Box sx={{ position: 'absolute', left: 13, right: 13, bottom: 12 }}>
                            <Typography
                              sx={{
                                fontFamily: fontHeader,
                                fontWeight: 900,
                                color: 'white',
                                fontSize: { xs: '.86rem', sm: '.95rem' },
                                lineHeight: 1.2,
                              }}
                            >
                              {teacher.name}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{ color: 'rgba(255,255,255,.78)', display: 'block', mt: 0.35 }}
                            >
                              {teacher.degree}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  );
                })}

                <Box
                  className="glass-panel floating-card-delay"
                  sx={{
                    position: 'absolute',
                    right: { xs: 6, sm: 12 },
                    bottom: { xs: 104, sm: 118 },
                    zIndex: 7,
                    borderRadius: 3,
                    px: 1.5,
                    py: 1.2,
                    maxWidth: 180,
                    color: '#102044',
                  }}
                >
                  <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                    <SchoolRoundedIcon sx={{ color: '#2f6fed', fontSize: 21 }} />
                    <Box>
                      <Typography sx={{ fontWeight: 900, fontSize: '.78rem' }}>
                        Đội ngũ chuyên môn
                      </Typography>
                      <Typography sx={{ color: '#60708e', fontSize: '.68rem', mt: 0.2 }}>
                        Đồng hành cùng học sinh lớp 9
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
            sx={{ mt: { xs: 2, md: 3 }, alignItems: { md: 'center' } }}
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
                Video · tài liệu · LMS hỗ trợ ôn tập
              </Typography>
            </Stack>
          </Stack>
        </FadeInScroll>
      </Container>
    </Box>
  );
}
