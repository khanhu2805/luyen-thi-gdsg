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
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded';
import Link from 'next/link';
import FadeInScroll from '../components/FadeInScroll';

const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

const newsData = [
  {
    id: 1,
    title:
      'Lịch phát sóng chương trình “Đồng hành cùng học sinh lớp 9” – ôn tập cho kỳ thi vào lớp 10',
    description:
      'Cập nhật lịch phát sóng chương trình hỗ trợ học sinh lớp 9 ôn tập Toán, Ngữ văn và Tiếng Anh trên HTV3 và các nền tảng số của HTV.',
    date: '08/05/2026',
    category: 'Sự kiện',
    slug: 'dong-hanh-cung-hoc-sinh-lop-9',
    image: '/lich-phat-song.jpg',
  },
];

export default function TinTucPage() {
  return (
    <Box sx={{ fontFamily: fontBody, bgcolor: '#f6f9ff', minHeight: '100vh', pb: 12 }}>
      <Box
        className="animated-mesh noise-overlay"
        sx={{
          py: { xs: 8, md: 10 },
          textAlign: 'center',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          className="floating-orb"
          sx={{
            position: 'absolute',
            width: 360,
            height: 360,
            borderRadius: '50%',
            right: -120,
            top: -160,
            bgcolor: 'rgba(255,255,255,.07)',
          }}
        />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <FadeInScroll>
            <Chip
              icon={<CampaignRoundedIcon />}
              label="TIN TỨC & SỰ KIỆN"
              sx={{
                mb: 2,
                bgcolor: 'rgba(255,255,255,.13)',
                color: 'white',
                border: '1px solid rgba(255,255,255,.18)',
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
                fontSize: { xs: '2.3rem', md: '3.6rem' },
                letterSpacing: '-0.04em',
              }}
            >
              Cập nhật để
              <Box component="span" sx={{ color: '#ffd166', ml: 1 }}>
                học đúng nhịp
              </Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{ mt: 2, opacity: 0.9, lineHeight: 1.75, fontWeight: 500 }}
            >
              Tin tức giáo dục, chương trình hỗ trợ học sinh lớp 9
              và những nội dung hữu ích cho hành trình ôn thi tuyển sinh lớp 10.
            </Typography>
          </FadeInScroll>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ mt: { xs: 6, md: 8 } }}>
        <Grid container spacing={4}>
          {newsData.map((news, index) => (
            <Grid size={{ xs: 12, md: 8 }} key={news.id}>
              <FadeInScroll delay={index * 0.06}>
                <Link
                  href={'/tin-tuc/' + news.slug}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Card
                    className="card-lift"
                    sx={{
                      borderRadius: 6,
                      overflow: 'hidden',
                      border: '1px solid #e4ecf7',
                      boxShadow: '0 18px 48px rgba(15,48,105,.075)',
                      bgcolor: 'white',
                    }}
                  >
                    <Grid container>
                      <Grid size={{ xs: 12, md: 5 }}>
                        <Box
                          sx={{
                            height: { xs: 280, md: '100%' },
                            minHeight: { md: 390 },
                            position: 'relative',
                            overflow: 'hidden',
                            bgcolor: '#eaf2ff',
                          }}
                        >
                          <Box
                            component="img"
                            src={news.image}
                            alt={news.title}
                            sx={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              display: 'block',
                              transition: 'transform .55s ease',
                              '.card-lift:hover &': { transform: 'scale(1.035)' },
                            }}
                          />
                          <Box
                            sx={{
                              position: 'absolute',
                              inset: 0,
                              background: 'linear-gradient(to top, rgba(5,18,44,.30), transparent 55%)',
                            }}
                          />
                        </Box>
                      </Grid>

                      <Grid size={{ xs: 12, md: 7 }}>
                        <Box sx={{ p: { xs: 3.2, md: 4.5 } }}>
                          <Chip
                            label={news.category}
                            sx={{
                              bgcolor: '#eaf2ff',
                              color: '#2f6fed',
                              fontWeight: 900,
                              fontFamily: fontHeader,
                            }}
                          />

                          <Stack direction="row" spacing={0.8} sx={{ mt: 2, alignItems: 'center', color: '#71809a' }}>
                            <CalendarMonthRoundedIcon sx={{ fontSize: 19 }} />
                            <Typography variant="body2" sx={{ fontWeight: 700 }}>
                              {news.date}
                            </Typography>
                          </Stack>

                          <Typography
                            variant="h4"
                            sx={{
                              mt: 1.7,
                              fontFamily: fontHeader,
                              fontWeight: 900,
                              color: '#102044',
                              lineHeight: 1.3,
                              fontSize: { xs: '1.6rem', md: '2.05rem' },
                            }}
                          >
                            {news.title}
                          </Typography>

                          <Typography
                            color="text.secondary"
                            sx={{ mt: 1.5, lineHeight: 1.75, fontSize: '1rem' }}
                          >
                            {news.description}
                          </Typography>

                          <Button
                            component="span"
                            endIcon={<ArrowForwardRoundedIcon />}
                            sx={{
                              mt: 3,
                              p: 0,
                              textTransform: 'none',
                              fontFamily: fontHeader,
                              fontWeight: 900,
                              color: '#2f6fed',
                              '&:hover': { bgcolor: 'transparent', color: '#153a8a' },
                            }}
                          >
                            Xem chi tiết
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Card>
                </Link>
              </FadeInScroll>
            </Grid>
          ))}

          <Grid size={{ xs: 12, md: 4 }}>
            <FadeInScroll delay={0.08} direction="left">
              <Box
                sx={{
                  p: 3.2,
                  borderRadius: 5,
                  bgcolor: '#102a66',
                  color: 'white',
                  minHeight: 390,
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Box
                  className="floating-orb"
                  sx={{
                    position: 'absolute',
                    width: 230,
                    height: 230,
                    borderRadius: '50%',
                    right: -80,
                    top: -90,
                    bgcolor: 'rgba(255,255,255,.07)',
                  }}
                />
                <Box sx={{ position: 'relative' }}>
                  <AutoStoriesRoundedIcon sx={{ color: '#ffd166', fontSize: 38 }} />
                  <Typography
                    variant="h5"
                    sx={{ mt: 2, fontFamily: fontHeader, fontWeight: 900, lineHeight: 1.3 }}
                  >
                    Muốn luyện ngay thay vì chỉ đọc tin?
                  </Typography>
                  <Typography sx={{ mt: 1.4, opacity: 0.82, lineHeight: 1.75 }}>
                    Khám phá kho tài liệu và đề thi thử để bắt đầu ôn tập Toán, Ngữ văn, Tiếng Anh.
                  </Typography>
                </Box>

                <Stack spacing={1.2} sx={{ position: 'relative', mt: 3 }}>
                  <Button
                    component={Link}
                    href="/tai-lieu-on-luyen"
                    variant="contained"
                    sx={{
                      borderRadius: 999,
                      textTransform: 'none',
                      fontWeight: 900,
                      bgcolor: '#ff8a1f',
                      '&:hover': { bgcolor: '#f57c00' },
                    }}
                  >
                    Xem tài liệu ôn luyện
                  </Button>
                  <Button
                    component={Link}
                    href="/de-thi-thu"
                    variant="outlined"
                    sx={{
                      borderRadius: 999,
                      textTransform: 'none',
                      fontWeight: 900,
                      color: 'white',
                      borderColor: 'rgba(255,255,255,.45)',
                      '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,.06)' },
                    }}
                  >
                    Làm đề thi thử
                  </Button>
                </Stack>
              </Box>
            </FadeInScroll>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
