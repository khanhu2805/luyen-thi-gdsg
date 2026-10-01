'use client';

import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Link from 'next/link';
import FadeInScroll from '../FadeInScroll';
import { publicTeachers as teachers } from '../../data/public-enrollment';

const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

export default function Teacher() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 11 },
        bgcolor: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        className="soft-grid"
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.6,
          maskImage: 'linear-gradient(to bottom, transparent, black 16%, black 82%, transparent)',
        }}
      />
      <Box
        className="floating-orb"
        sx={{
          position: 'absolute',
          width: 330,
          height: 330,
          borderRadius: '50%',
          right: -140,
          top: 80,
          bgcolor: 'rgba(47,111,237,.07)',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <FadeInScroll>
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 6 } }}>
            <Chip
              icon={<AutoAwesomeRoundedIcon />}
              label="ĐỘI NGŨ ĐỒNG HÀNH"
              sx={{
                mb: 1.7,
                bgcolor: '#eaf2ff',
                color: '#2f6fed',
                fontFamily: fontHeader,
                fontWeight: 900,
                '& .MuiChip-icon': { color: '#2f6fed' },
              }}
            />
            <Typography
              variant="h3"
              sx={{
                fontFamily: fontHeader,
                fontWeight: 900,
                color: '#102044',
                fontSize: { xs: '2rem', md: '3rem' },
                letterSpacing: '-0.03em',
              }}
            >
              Học cùng những thầy cô
              <Box component="span" className="gradient-text" sx={{ display: 'block' }}>
                có kinh nghiệm chuyên môn thực tế
              </Box>
            </Typography>
            <Typography
              color="text.secondary"
              sx={{
                mt: 1.7,
                maxWidth: 820,
                mx: 'auto',
                lineHeight: 1.75,
                fontFamily: fontBody,
                fontSize: { md: '1.05rem' },
              }}
            >
              Mỗi môn học được xây dựng theo thế mạnh chuyên môn của giáo viên,
              giúp học sinh vừa củng cố nền tảng vừa rèn kỹ năng xử lý đề thi.
            </Typography>
          </Box>
        </FadeInScroll>

        <Grid container spacing={3}>
          {teachers.map((teacher, index) => (
            <Grid key={teacher.id} size={{ xs: 12, md: 4 }}>
              <FadeInScroll delay={index * 0.08}>
                <Card
                  className="card-lift"
                  sx={{
                    height: '100%',
                    borderRadius: 5,
                    overflow: 'hidden',
                    border: '1px solid #e6edf7',
                    boxShadow: '0 16px 42px rgba(15,48,105,.08)',
                    bgcolor: 'white',
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      height: { xs: 330, md: 360 },
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
                        transition: 'transform .55s cubic-bezier(.2,.7,.2,1)',
                        '.MuiCard-root:hover &': { transform: 'scale(1.035)' },
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(to top, rgba(7,25,61,.88) 0%, rgba(7,25,61,.18) 46%, transparent 68%)',
                      }}
                    />
                    <Chip
                      label={'Môn ' + teacher.subject}
                      sx={{
                        position: 'absolute',
                        top: 18,
                        left: 18,
                        bgcolor: 'rgba(255,255,255,.92)',
                        color: teacher.accent,
                        fontWeight: 900,
                        backdropFilter: 'blur(8px)',
                      }}
                    />
                    <Box sx={{ position: 'absolute', left: 22, right: 22, bottom: 20 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontFamily: fontHeader,
                          fontWeight: 900,
                          color: 'white',
                          lineHeight: 1.2,
                        }}
                      >
                        {teacher.name}
                      </Typography>
                      <Typography sx={{ mt: 0.6, color: 'rgba(255,255,255,.78)', fontSize: '.9rem' }}>
                        {teacher.tagline}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ p: 3 }}>
                    <Typography
                      sx={{
                        fontFamily: fontHeader,
                        fontWeight: 900,
                        color: teacher.accent,
                        fontSize: '.82rem',
                        textTransform: 'uppercase',
                        letterSpacing: 0.6,
                      }}
                    >
                      Điểm nổi bật
                    </Typography>
                    <Stack spacing={1.2} sx={{ mt: 1.7 }}>
                      {teacher.highlights.map((item) => (
                        <Stack key={item} direction="row" spacing={1} sx={{ alignItems: 'flex-start' }}>
                          <CheckCircleRoundedIcon
                            sx={{ color: teacher.accent, fontSize: 20, mt: 0.15, flexShrink: 0 }}
                          />
                          <Typography
                            variant="body2"
                            sx={{ color: '#4c5d7a', lineHeight: 1.6, fontWeight: 700 }}
                          >
                            {item}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Box>
                </Card>
              </FadeInScroll>
            </Grid>
          ))}
        </Grid>

        <FadeInScroll delay={0.12}>
          <Box
            sx={{
              mt: 4.5,
              p: { xs: 2.5, md: 3.5 },
              borderRadius: 5,
              bgcolor: '#f3f7ff',
              border: '1px solid #e2eaf7',
              display: { md: 'flex' },
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 3,
            }}
          >
            <Box>
              <Typography
                variant="h5"
                sx={{ fontFamily: fontHeader, fontWeight: 900, color: '#102044' }}
              >
                Xem hồ sơ chuyên môn chi tiết của đội ngũ
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 0.8, lineHeight: 1.7 }}>
                Tìm hiểu kinh nghiệm, thế mạnh giảng dạy và thông tin chuyên môn của từng giáo viên.
              </Typography>
            </Box>
            <Button
              component={Link}
              href="/doi-ngu"
              variant="contained"
              endIcon={<ArrowForwardRoundedIcon />}
              sx={{
                mt: { xs: 2, md: 0 },
                borderRadius: 999,
                px: 3,
                py: 1.2,
                textTransform: 'none',
                fontFamily: fontHeader,
                fontWeight: 900,
                whiteSpace: 'nowrap',
                bgcolor: '#153a8a',
                '&:hover': { bgcolor: '#0f2f73' },
              }}
            >
              Khám phá đội ngũ
            </Button>
          </Box>
        </FadeInScroll>
      </Container>
    </Box>
  );
}
