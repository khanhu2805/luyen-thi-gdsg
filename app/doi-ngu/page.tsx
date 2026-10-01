'use client';

import { useState } from 'react';
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
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import Link from 'next/link';
import AssignForm from '../components/AssignForm';
import FadeInScroll from '../components/FadeInScroll';
import SnackBar from '../components/SnackBar';
import { publicTeachers as teachers } from '../data/public-enrollment';

const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

export default function DoiNguPage() {
  const [phone, setPhone] = useState('');
  type SnackbarSeverity = 'success' | 'error' | 'warning' | 'info';

  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: SnackbarSeverity;
  }>({
    open: false,
    message: '',
    severity: 'success',
  });

  const showSnackbar = (
    message: string,
    severity: SnackbarSeverity = 'success',
  ) => {
    setSnackbar({ open: true, message, severity });
  };

  return (
    <Box sx={{ bgcolor: '#f6f9ff', minHeight: '100vh', fontFamily: fontBody }}>
      <Box
        className="animated-mesh noise-overlay"
        sx={{
          py: { xs: 8, md: 10 },
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          className="floating-orb"
          sx={{
            position: 'absolute',
            width: 410,
            height: 410,
            borderRadius: '50%',
            right: -130,
            top: -170,
            bgcolor: 'rgba(255,255,255,.07)',
          }}
        />

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={{ xs: 5, md: 7 }} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <FadeInScroll>
                <Chip
                  icon={<AutoAwesomeRoundedIcon />}
                  label="ĐỘI NGŨ GIẢNG DẠY"
                  sx={{
                    mb: 2,
                    bgcolor: 'rgba(255,255,255,.13)',
                    color: 'white',
                    border: '1px solid rgba(255,255,255,.17)',
                    fontFamily: fontHeader,
                    fontWeight: 900,
                    '& .MuiChip-icon': { color: '#ffd166' },
                  }}
                />
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: fontHeader,
                    fontWeight: 900,
                    fontSize: { xs: '2.35rem', md: '3.9rem' },
                    lineHeight: 1.08,
                    letterSpacing: '-0.04em',
                  }}
                >
                  Chuyên môn vững.
                  <Box component="span" sx={{ display: 'block', color: '#ffd166' }}>
                    Đồng hành sát mục tiêu.
                  </Box>
                </Typography>

                <Typography
                  variant="h6"
                  sx={{ mt: 2.4, maxWidth: 760, lineHeight: 1.75, opacity: 0.9, fontWeight: 500 }}
                >
                  Đội ngũ giảng dạy các môn Toán, Ngữ văn và Tiếng Anh
                  có kinh nghiệm chuyên môn, giảng dạy và luyện thi tuyển sinh lớp 10.
                </Typography>

                <Button
                  component={Link}
                  href="/#form-dang-ky"
                  variant="contained"
                  endIcon={<ArrowForwardRoundedIcon />}
                  className="shine-button"
                  sx={{
                    mt: 3.8,
                    borderRadius: 999,
                    px: 3.5,
                    py: 1.3,
                    bgcolor: '#ff8a1f',
                    fontFamily: fontHeader,
                    fontWeight: 900,
                    textTransform: 'none',
                    '&:hover': { bgcolor: '#f57c00' },
                  }}
                >
                  Đăng ký tư vấn
                </Button>
              </FadeInScroll>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <FadeInScroll delay={0.12} direction="left">
                <Box
                  className="glass-dark"
                  sx={{
                    p: { xs: 2.2, sm: 3 },
                    borderRadius: 6,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <Typography
                    variant="overline"
                    sx={{
                      fontFamily: fontHeader,
                      fontWeight: 900,
                      letterSpacing: 1.1,
                      opacity: 0.78,
                    }}
                  >
                    03 MÔN TRỌNG TÂM
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ mt: 0.5, fontFamily: fontHeader, fontWeight: 900 }}
                  >
                    Đội ngũ theo từng môn học
                  </Typography>

                  <Stack spacing={1.25} sx={{ mt: 2.4 }}>
                    {teachers.map((teacher) => (
                      <Box
                        key={teacher.id}
                        className="card-lift"
                        sx={{
                          p: 1.7,
                          borderRadius: 3.5,
                          bgcolor: 'rgba(255,255,255,.09)',
                          border: '1px solid rgba(255,255,255,.13)',
                        }}
                      >
                        <Stack direction="row" spacing={1.4} sx={{ alignItems: 'center' }}>
                          <Box
                            sx={{
                              width: 46,
                              height: 46,
                              borderRadius: 2.8,
                              display: 'grid',
                              placeItems: 'center',
                              bgcolor: teacher.accent,
                              color: 'white',
                              fontFamily: fontHeader,
                              fontWeight: 900,
                              flexShrink: 0,
                            }}
                          >
                            {teacher.subject === 'Toán'
                              ? '∑'
                              : teacher.subject === 'Ngữ văn'
                                ? 'V'
                                : 'A'}
                          </Box>
                          <Box sx={{ minWidth: 0 }}>
                            <Typography sx={{ fontFamily: fontHeader, fontWeight: 900 }}>
                              {teacher.subject}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                mt: 0.2,
                                opacity: 0.76,
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                              }}
                            >
                              {teacher.tagline}
                            </Typography>
                          </Box>
                        </Stack>
                      </Box>
                    ))}
                  </Stack>

                  <Box
                    sx={{
                      mt: 2.2,
                      p: 1.7,
                      borderRadius: 3.5,
                      bgcolor: '#fff3e0',
                      color: '#b85a00',
                    }}
                  >
                    <Typography sx={{ fontFamily: fontHeader, fontWeight: 900 }}>
                      Phụ huynh chỉ cần chọn môn khi đăng ký
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 0.4, lineHeight: 1.6 }}>
                      Trung tâm sẽ hỗ trợ sắp xếp lớp phù hợp với nhu cầu học tập.
                    </Typography>
                  </Box>
                </Box>
              </FadeInScroll>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 11 } }}>
        <FadeInScroll>
          <Box sx={{ textAlign: 'center', mb: 5.5 }}>
            <Typography
              variant="overline"
              sx={{ fontFamily: fontHeader, fontWeight: 900, color: '#2f6fed', letterSpacing: 1.4 }}
            >
              HỒ SƠ CHUYÊN MÔN
            </Typography>
            <Typography
              variant="h3"
              sx={{
                mt: 0.5,
                fontFamily: fontHeader,
                fontWeight: 900,
                color: '#102044',
                fontSize: { xs: '2rem', md: '2.9rem' },
                letterSpacing: '-0.03em',
              }}
            >
              Mỗi giáo viên,
              <Box component="span" className="gradient-text" sx={{ display: 'inline', ml: 1 }}>
                một thế mạnh riêng
              </Box>
            </Typography>
          </Box>
        </FadeInScroll>

        <Stack spacing={{ xs: 4, md: 5 }}>
          {teachers.map((teacher, index) => (
            <FadeInScroll
              key={teacher.id}
              delay={0.05}
              direction={index % 2 === 0 ? 'right' : 'left'}
            >
              <Box
                className="card-lift"
                sx={{
                  borderRadius: 6,
                  overflow: 'hidden',
                  bgcolor: 'white',
                  border: '1px solid #e4ecf7',
                  boxShadow: '0 18px 48px rgba(15,48,105,.075)',
                }}
              >
                <Grid
                  container
                  sx={{
                    flexDirection: { md: index % 2 === 0 ? 'row' : 'row-reverse' },
                    alignItems: 'stretch',
                  }}
                >
                  <Grid size={{ xs: 12, md: 4.5 }}>
                    <Box
                      sx={{
                        height: { xs: 380, md: '100%' },
                        minHeight: { md: 470 },
                        position: 'relative',
                        overflow: 'hidden',
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
                          transition: 'transform .55s ease',
                          '.card-lift:hover &': { transform: 'scale(1.025)' },
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          background:
                            'linear-gradient(to top, rgba(5,18,44,.46), transparent 46%)',
                        }}
                      />
                      <Chip
                        label={'Môn ' + teacher.subject}
                        sx={{
                          position: 'absolute',
                          top: 20,
                          left: 20,
                          bgcolor: 'rgba(255,255,255,.92)',
                          color: teacher.accent,
                          fontWeight: 900,
                        }}
                      />
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 12, md: 7.5 }}>
                    <Box sx={{ p: { xs: 3.2, md: 5 } }}>
                      <Typography
                        variant="overline"
                        sx={{
                          fontFamily: fontHeader,
                          fontWeight: 900,
                          color: teacher.accent,
                          letterSpacing: 1.2,
                        }}
                      >
                        {teacher.tagline}
                      </Typography>
                      <Typography
                        variant="h3"
                        sx={{
                          mt: 0.8,
                          fontFamily: fontHeader,
                          fontWeight: 900,
                          color: '#102044',
                          fontSize: { xs: '2rem', md: '2.65rem' },
                          lineHeight: 1.15,
                        }}
                      >
                        {teacher.name}
                      </Typography>

                      <Grid container spacing={2} sx={{ mt: 2.2 }}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <Stack
                            direction="row"
                            spacing={1.2}
                            sx={{
                              p: 1.7,
                              borderRadius: 3,
                              bgcolor: teacher.softAccent,
                              alignItems: 'flex-start',
                              height: '100%',
                            }}
                          >
                            <WorkspacePremiumRoundedIcon sx={{ color: teacher.accent, mt: 0.2 }} />
                            <Box>
                              <Typography variant="caption" color="text.secondary">
                                Kinh nghiệm / vai trò
                              </Typography>
                              <Typography sx={{ fontWeight: 900, color: '#102044', fontSize: '.9rem', lineHeight: 1.55 }}>
                                {teacher.primaryFact}
                              </Typography>
                            </Box>
                          </Stack>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <Stack
                            direction="row"
                            spacing={1.2}
                            sx={{
                              p: 1.7,
                              borderRadius: 3,
                              bgcolor: '#f5f8fd',
                              alignItems: 'flex-start',
                              height: '100%',
                            }}
                          >
                            <SchoolRoundedIcon sx={{ color: teacher.accent, mt: 0.2 }} />
                            <Box>
                              <Typography variant="caption" color="text.secondary">
                                Thông tin chuyên môn
                              </Typography>
                              <Typography sx={{ fontWeight: 900, color: '#102044', fontSize: '.9rem', lineHeight: 1.55 }}>
                                {teacher.organization}
                              </Typography>
                            </Box>
                          </Stack>
                        </Grid>
                      </Grid>

                      <Typography
                        color="text.secondary"
                        sx={{ mt: 2.8, lineHeight: 1.8, fontSize: '1.02rem' }}
                      >
                        {teacher.note}
                      </Typography>

                      <Typography
                        sx={{
                          mt: 2.8,
                          mb: 1.4,
                          fontFamily: fontHeader,
                          fontWeight: 900,
                          color: '#102044',
                          fontSize: '.9rem',
                        }}
                      >
                        ĐIỂM NỔI BẬT
                      </Typography>
                      <Stack spacing={1.15}>
                        {teacher.highlights.map((item) => (
                          <Stack key={item} direction="row" spacing={1} sx={{ alignItems: 'flex-start' }}>
                            <CheckCircleRoundedIcon
                              sx={{ color: teacher.accent, fontSize: 20, mt: 0.12, flexShrink: 0 }}
                            />
                            <Typography sx={{ color: '#52627d', lineHeight: 1.6, fontWeight: 700 }}>
                              {item}
                            </Typography>
                          </Stack>
                        ))}
                      </Stack>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </FadeInScroll>
          ))}
        </Stack>

        <FadeInScroll>
          <Box
            sx={{
              mt: { xs: 6, md: 8 },
              p: { xs: 3, md: 4 },
              borderRadius: 5,
              bgcolor: '#102a66',
              color: 'white',
              display: { md: 'flex' },
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 3,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', position: 'relative' }}>
              <Box
                sx={{
                  width: 52,
                  height: 52,
                  borderRadius: 3,
                  display: 'grid',
                  placeItems: 'center',
                  bgcolor: 'rgba(255,255,255,.1)',
                }}
              >
                <MenuBookRoundedIcon sx={{ color: '#ffd166' }} />
              </Box>
              <Box>
                <Typography variant="h5" sx={{ fontFamily: fontHeader, fontWeight: 900 }}>
                  Không cần chọn giáo viên khi đăng ký
                </Typography>
                <Typography sx={{ mt: 0.4, opacity: 0.8, lineHeight: 1.65 }}>
                  Phụ huynh chỉ cần chọn môn quan tâm. Trung tâm sẽ hỗ trợ sắp xếp lớp phù hợp.
                </Typography>
              </Box>
            </Stack>
            <Button
              component={Link}
              href="/#form-dang-ky"
              variant="contained"
              endIcon={<ArrowForwardRoundedIcon />}
              sx={{
                mt: { xs: 2.4, md: 0 },
                borderRadius: 999,
                px: 3.2,
                py: 1.25,
                textTransform: 'none',
                fontFamily: fontHeader,
                fontWeight: 900,
                whiteSpace: 'nowrap',
                bgcolor: '#ff8a1f',
                '&:hover': { bgcolor: '#f57c00' },
              }}
            >
              Chọn môn để tư vấn
            </Button>
          </Box>
        </FadeInScroll>
      </Container>

      <AssignForm setPhone={setPhone} showSnackbar={showSnackbar} />

      <SnackBar
        open={snackbar.open}
        setOpen={(open) =>
          setSnackbar((prev) => ({
            ...prev,
            open,
          }))
        }
        phone={phone}
        message={snackbar.message}
        severity={snackbar.severity}
      />
    </Box>
  );
}
