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
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import CalculateRoundedIcon from '@mui/icons-material/CalculateRounded';
import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import RouteRoundedIcon from '@mui/icons-material/RouteRounded';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import Link from 'next/link';
import FadeInScroll from '../components/FadeInScroll';
import { publicCourses as courses } from '../data/public-enrollment';

const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

const courseMeta: Record<
  string,
  {
    icon: React.ReactNode;
    accent: string;
    soft: string;
    gradient: string;
    label: string;
  }
> = {
  toan: {
    icon: <CalculateRoundedIcon sx={{ fontSize: 32 }} />,
    accent: '#2f6fed',
    soft: '#eaf2ff',
    gradient: 'linear-gradient(135deg, #1e57c7, #2f6fed)',
    label: 'TƯ DUY & KỸ NĂNG GIẢI BÀI',
  },
  'ngu-van': {
    icon: <MenuBookRoundedIcon sx={{ fontSize: 32 }} />,
    accent: '#e14d4d',
    soft: '#fff0f0',
    gradient: 'linear-gradient(135deg, #c43d50, #e86464)',
    label: 'ĐỌC HIỂU & LẬP LUẬN',
  },
  'tieng-anh': {
    icon: <TranslateRoundedIcon sx={{ fontSize: 32 }} />,
    accent: '#22a06b',
    soft: '#e9f8f1',
    gradient: 'linear-gradient(135deg, #16855a, #22a06b)',
    label: 'NGỮ PHÁP & CHIẾN LƯỢC',
  },
};

export default function KhoaHocPage() {
  return (
    <Box sx={{ bgcolor: '#f6f9ff', minHeight: '100vh', pb: 12, fontFamily: fontBody }}>
      <Box
        className="animated-mesh noise-overlay"
        sx={{
          py: { xs: 8, md: 10 },
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          className="floating-orb"
          sx={{
            position: 'absolute',
            width: 380,
            height: 380,
            borderRadius: '50%',
            right: -120,
            top: -160,
            bgcolor: 'rgba(255,255,255,.07)',
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <FadeInScroll>
            <Chip
              icon={<RouteRoundedIcon />}
              label="LỘ TRÌNH ÔN THI VÀO LỚP 10"
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
                fontSize: { xs: '2.25rem', md: '3.8rem' },
                letterSpacing: '-0.04em',
                lineHeight: 1.08,
              }}
            >
              Chọn đúng môn cần tập trung.
              <Box component="span" sx={{ display: 'block', color: '#ffd166' }}>
                Học theo lộ trình rõ ràng.
              </Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{ mt: 2.2, opacity: 0.9, maxWidth: 860, mx: 'auto', lineHeight: 1.75, fontWeight: 500 }}
            >
              Toán · Ngữ văn · Tiếng Anh. Mỗi khóa gồm 8 buổi trong 8 tuần,
              kết hợp nội dung trọng tâm, tài liệu luyện tập và hệ thống hỗ trợ học tập.
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.2}
              sx={{ mt: 3.2, justifyContent: 'center' }}
            >
              <Chip
                icon={<CardGiftcardRoundedIcon />}
                label="Đăng ký khóa học – tặng sách Toán 9"
                sx={{
                  bgcolor: '#fff3e0',
                  color: '#e66f00',
                  fontWeight: 900,
                  '& .MuiChip-icon': { color: '#e66f00' },
                }}
              />
              <Chip
                icon={<GroupsRoundedIcon />}
                label="Mời bạn cùng học – ưu đãi 100.000đ"
                sx={{
                  bgcolor: '#eef1ff',
                  color: '#3e4fb9',
                  fontWeight: 900,
                  '& .MuiChip-icon': { color: '#3e4fb9' },
                }}
              />
            </Stack>
          </FadeInScroll>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ mt: { xs: -3, md: -4 }, position: 'relative', zIndex: 2 }}>
        <FadeInScroll>
          <Box
            className="glass-panel"
            sx={{
              p: { xs: 2.6, md: 3.4 },
              borderRadius: 5,
              display: { md: 'flex' },
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 3,
            }}
          >
            <Box>
              <Typography variant="h5" sx={{ fontFamily: fontHeader, fontWeight: 900, color: '#102044' }}>
                Chưa biết nên bắt đầu từ môn nào?
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 0.7, lineHeight: 1.7, maxWidth: 760 }}>
                Chọn môn đang cần củng cố, đội ngũ tư vấn sẽ hỗ trợ phụ huynh
                xác định lớp phù hợp với nhu cầu học tập của học sinh.
              </Typography>
            </Box>
            <Button
              component={Link}
              href="/#form-dang-ky"
              variant="contained"
              endIcon={<ArrowForwardRoundedIcon />}
              className="shine-button"
              sx={{
                mt: { xs: 2, md: 0 },
                borderRadius: 999,
                px: 3.4,
                py: 1.25,
                textTransform: 'none',
                fontFamily: fontHeader,
                fontWeight: 900,
                whiteSpace: 'nowrap',
                bgcolor: '#ff8a1f',
                '&:hover': { bgcolor: '#f57c00' },
              }}
            >
              Nhận tư vấn
            </Button>
          </Box>
        </FadeInScroll>

        <Box sx={{ textAlign: 'center', mt: { xs: 7, md: 9 }, mb: 4.5 }}>
          <FadeInScroll>
            <Typography
              variant="overline"
              sx={{ fontFamily: fontHeader, fontWeight: 900, color: '#2f6fed', letterSpacing: 1.4 }}
            >
              03 MÔN TRỌNG TÂM
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
              Mỗi môn một trọng tâm,
              <Box component="span" className="gradient-text" sx={{ display: 'block' }}>
                cùng hướng đến mục tiêu tuyển sinh 10
              </Box>
            </Typography>
          </FadeInScroll>
        </Box>

        <Grid container spacing={3}>
          {courses.map((course, index) => {
            const meta = courseMeta[course.id] || courseMeta.toan;

            return (
              <Grid key={course.id} size={{ xs: 12, md: 4 }}>
                <FadeInScroll delay={index * 0.08}>
                  <Card
                    className="card-lift"
                    sx={{
                      height: '100%',
                      borderRadius: 5,
                      overflow: 'hidden',
                      border: '1px solid #e4ecf7',
                      boxShadow: '0 16px 42px rgba(15,48,105,.075)',
                      bgcolor: 'white',
                    }}
                  >
                    <Box
                      sx={{
                        p: 3.2,
                        color: 'white',
                        position: 'relative',
                        overflow: 'hidden',
                        background: meta.gradient,
                      }}
                    >
                      <Box
                        className="floating-card-delay"
                        sx={{
                          position: 'absolute',
                          width: 160,
                          height: 160,
                          borderRadius: '50%',
                          right: -60,
                          top: -60,
                          bgcolor: 'rgba(255,255,255,.12)',
                        }}
                      />
                      <Box
                        sx={{
                          width: 58,
                          height: 58,
                          borderRadius: 3.2,
                          display: 'grid',
                          placeItems: 'center',
                          bgcolor: 'rgba(255,255,255,.14)',
                          border: '1px solid rgba(255,255,255,.15)',
                          position: 'relative',
                        }}
                      >
                        {meta.icon}
                      </Box>
                      <Typography
                        variant="overline"
                        sx={{ mt: 2.4, display: 'block', fontWeight: 900, opacity: 0.82, letterSpacing: 1 }}
                      >
                        {meta.label}
                      </Typography>
                      <Typography
                        variant="h3"
                        sx={{ fontFamily: fontHeader, fontWeight: 900, position: 'relative', lineHeight: 1.08 }}
                      >
                        {course.subject}
                      </Typography>
                      <Typography sx={{ mt: 1.1, opacity: 0.88 }}>
                        {course.sessions} buổi · {course.weeks} tuần
                      </Typography>
                    </Box>

                    <Box sx={{ p: 3.2 }}>
                      <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
                        {course.description}
                      </Typography>

                      <Typography
                        sx={{
                          mt: 2.7,
                          mb: 1.4,
                          fontFamily: fontHeader,
                          fontWeight: 900,
                          color: '#102044',
                          fontSize: '.9rem',
                        }}
                      >
                        NỘI DUNG TẬP TRUNG
                      </Typography>

                      <Stack spacing={1.15}>
                        {course.focus.map((item) => (
                          <Stack key={item} direction="row" spacing={1} sx={{ alignItems: 'flex-start' }}>
                            <CheckCircleRoundedIcon sx={{ color: meta.accent, fontSize: 20, mt: 0.15 }} />
                            <Typography variant="body2" sx={{ color: '#52627d', lineHeight: 1.6, fontWeight: 700 }}>
                              {item}
                            </Typography>
                          </Stack>
                        ))}
                      </Stack>

                      <Button
                        component={Link}
                        href={'/?course=' + course.id + '#form-dang-ky'}
                        variant="contained"
                        fullWidth
                        endIcon={<ArrowForwardRoundedIcon />}
                        sx={{
                          mt: 3.2,
                          borderRadius: 999,
                          py: 1.2,
                          textTransform: 'none',
                          fontFamily: fontHeader,
                          fontWeight: 900,
                          bgcolor: meta.accent,
                          '&:hover': { bgcolor: meta.accent, filter: 'brightness(.92)' },
                        }}
                      >
                        Tư vấn môn {course.subject}
                      </Button>
                    </Box>
                  </Card>
                </FadeInScroll>
              </Grid>
            );
          })}
        </Grid>

        <Grid container spacing={3} sx={{ mt: { xs: 6, md: 8 } }}>
          {[
            {
              icon: <PlayCircleRoundedIcon />,
              title: 'Học & xem lại',
              desc: 'Video và LMS giúp học sinh thuận tiện xem lại nội dung cần củng cố.',
              accent: '#2f6fed',
              soft: '#eaf2ff',
            },
            {
              icon: <AutoStoriesRoundedIcon />,
              title: 'Tài liệu theo môn',
              desc: 'Tài liệu hỗ trợ hệ thống kiến thức và duy trì nhịp tự học sau mỗi buổi.',
              accent: '#7b61d1',
              soft: '#f2efff',
            },
            {
              icon: <AssignmentRoundedIcon />,
              title: 'Luyện đề',
              desc: 'Đề luyện và đề thi thử giúp học sinh rèn tốc độ, kỹ năng và tâm lý làm bài.',
              accent: '#f08a24',
              soft: '#fff3e8',
            },
          ].map((item, index) => (
            <Grid key={item.title} size={{ xs: 12, md: 4 }}>
              <FadeInScroll delay={index * 0.07}>
                <Box
                  className="card-lift"
                  sx={{
                    height: '100%',
                    p: 3,
                    borderRadius: 4.5,
                    bgcolor: 'white',
                    border: '1px solid #e6edf7',
                    boxShadow: '0 10px 30px rgba(15,48,105,.05)',
                  }}
                >
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: 2.8,
                      bgcolor: item.soft,
                      color: item.accent,
                      display: 'grid',
                      placeItems: 'center',
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography variant="h6" sx={{ mt: 1.8, fontFamily: fontHeader, fontWeight: 900, color: '#102044' }}>
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mt: 0.8, lineHeight: 1.7 }}>
                    {item.desc}
                  </Typography>
                </Box>
              </FadeInScroll>
            </Grid>
          ))}
        </Grid>

        <FadeInScroll>
          <Box
            sx={{
              mt: { xs: 6, md: 8 },
              p: { xs: 3, md: 4.2 },
              borderRadius: 5,
              bgcolor: '#102a66',
              color: 'white',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box
              className="floating-orb"
              sx={{
                position: 'absolute',
                width: 280,
                height: 280,
                borderRadius: '50%',
                right: -90,
                top: -120,
                bgcolor: 'rgba(255,255,255,.07)',
              }}
            />
            <Grid container spacing={3} sx={{ alignItems: 'center', position: 'relative' }}>
              <Grid size={{ xs: 12, md: 8 }}>
                <Typography
                  variant="h4"
                  sx={{ fontFamily: fontHeader, fontWeight: 900, fontSize: { xs: '1.7rem', md: '2.2rem' } }}
                >
                  Đăng ký đơn giản với 3 bước
                </Typography>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={1.2}
                  sx={{ mt: 2.2 }}
                >
                  {[
                    ['1', 'Chọn môn'],
                    ['2', 'Gửi thông tin'],
                    ['3', 'Nhận tư vấn'],
                  ].map(([step, label]) => (
                    <Stack
                      key={step}
                      direction="row"
                      spacing={1}
                      sx={{
                        alignItems: 'center',
                        px: 1.4,
                        py: 0.9,
                        borderRadius: 999,
                        bgcolor: 'rgba(255,255,255,.08)',
                        border: '1px solid rgba(255,255,255,.11)',
                      }}
                    >
                      <Box
                        sx={{
                          width: 25,
                          height: 25,
                          borderRadius: '50%',
                          bgcolor: '#ff8a1f',
                          display: 'grid',
                          placeItems: 'center',
                          fontWeight: 900,
                          fontSize: '.76rem',
                        }}
                      >
                        {step}
                      </Box>
                      <Typography sx={{ fontWeight: 800, fontSize: '.88rem' }}>{label}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: { md: 'right' } }}>
                <Button
                  component={Link}
                  href="/#form-dang-ky"
                  variant="contained"
                  endIcon={<ArrowForwardRoundedIcon />}
                  className="shine-button"
                  sx={{
                    borderRadius: 999,
                    px: 3.3,
                    py: 1.3,
                    textTransform: 'none',
                    fontFamily: fontHeader,
                    fontWeight: 900,
                    bgcolor: '#ff8a1f',
                    '&:hover': { bgcolor: '#f57c00' },
                  }}
                >
                  Bắt đầu đăng ký
                </Button>
              </Grid>
            </Grid>
          </Box>
        </FadeInScroll>
      </Container>
    </Box>
  );
}
