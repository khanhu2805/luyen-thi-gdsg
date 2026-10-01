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
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import Link from 'next/link';
import FadeInScroll from '../components/FadeInScroll';

const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

const coreBooks = [
  {
    id: 'toan',
    subject: 'TOÁN',
    title: 'Tài liệu ôn luyện môn Toán',
    description:
      'Hệ thống kiến thức trọng tâm, dạng bài và nội dung luyện tập dành cho học sinh ôn thi tuyển sinh lớp 10.',
    fileUrl: '/book/sach_toan.pdf',
    accent: '#2f6fed',
    soft: '#eaf2ff',
    symbol: '∑',
  },
  {
    id: 'van',
    subject: 'NGỮ VĂN',
    title: 'Tài liệu ôn luyện môn Ngữ văn',
    description:
      'Tổng hợp kiến thức, phương pháp đọc hiểu, làm văn và nội dung ôn tập phục vụ quá trình luyện thi.',
    fileUrl: '/book/sach_van.pdf',
    accent: '#e14d4d',
    soft: '#fff0f0',
    symbol: 'V',
  },
  {
    id: 'anh',
    subject: 'TIẾNG ANH',
    title: 'Tài liệu ôn luyện môn Tiếng Anh',
    description:
      'Ôn tập từ vựng, ngữ pháp và các dạng bài trọng tâm để học sinh rèn kỹ năng làm bài có hệ thống.',
    fileUrl: '/book/sach_anh.pdf',
    accent: '#22a06b',
    soft: '#e9f8f1',
    symbol: 'A',
  },
];

const answerBooks = [6, 7, 8, 9].map((grade) => ({
  grade,
  slug: 'dap-an-toan-' + grade,
  title: 'Đáp án sách Toán ' + grade,
  description:
    'Đáp án và hướng dẫn giải dành cho bộ sách Toán lớp ' + grade + '.',
  available: false,
}));

export default function TaiLieuOnLuyenPage() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f6f9ff', fontFamily: fontBody, pb: 12 }}>
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
            right: -140,
            top: -160,
            bgcolor: 'rgba(255,255,255,.07)',
          }}
        />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <FadeInScroll>
            <Chip
              icon={<LibraryBooksRoundedIcon />}
              label="KHO TÀI LIỆU HỌC TẬP"
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
                fontSize: { xs: '2.3rem', md: '3.7rem' },
                lineHeight: 1.08,
                letterSpacing: '-0.04em',
              }}
            >
              Học xong trên lớp.
              <Box component="span" sx={{ display: 'block', color: '#ffd166' }}>
                Tiếp tục ôn tập chủ động.
              </Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{ mt: 2.2, opacity: 0.9, lineHeight: 1.75, fontWeight: 500 }}
            >
              Kho tài liệu hỗ trợ học sinh hệ thống kiến thức, tự luyện
              và xem lại nội dung theo từng môn Toán · Ngữ văn · Tiếng Anh.
            </Typography>
          </FadeInScroll>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ mt: { xs: 6, md: 8 } }}>
        <FadeInScroll>
          <Box sx={{ textAlign: 'center', mb: 4.5 }}>
            <Typography
              variant="overline"
              sx={{ fontFamily: fontHeader, fontWeight: 900, color: '#2f6fed', letterSpacing: 1.4 }}
            >
              TÀI LIỆU THEO MÔN
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
              Chọn môn cần ôn,
              <Box component="span" className="gradient-text" sx={{ display: 'inline', ml: 1 }}>
                mở tài liệu và bắt đầu
              </Box>
            </Typography>
          </Box>
        </FadeInScroll>

        <Grid container spacing={3}>
          {coreBooks.map((book, index) => (
            <Grid key={book.id} size={{ xs: 12, md: 4 }}>
              <FadeInScroll delay={index * 0.08}>
                <Card
                  className="card-lift"
                  sx={{
                    height: '100%',
                    borderRadius: 5,
                    overflow: 'hidden',
                    bgcolor: 'white',
                    border: '1px solid #e4ecf7',
                    boxShadow: '0 16px 42px rgba(15,48,105,.07)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Box
                    sx={{
                      p: 3.2,
                      minHeight: 215,
                      position: 'relative',
                      overflow: 'hidden',
                      bgcolor: book.accent,
                      color: 'white',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box
                      className="floating-orb"
                      sx={{
                        position: 'absolute',
                        width: 170,
                        height: 170,
                        borderRadius: '50%',
                        right: -65,
                        top: -70,
                        bgcolor: 'rgba(255,255,255,.13)',
                      }}
                    />
                    <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative' }}>
                      <Chip
                        label={book.subject}
                        sx={{
                          bgcolor: 'rgba(255,255,255,.16)',
                          color: 'white',
                          border: '1px solid rgba(255,255,255,.15)',
                          fontWeight: 900,
                        }}
                      />
                      <Typography
                        sx={{
                          fontFamily: fontHeader,
                          fontWeight: 900,
                          fontSize: '4rem',
                          lineHeight: 1,
                          opacity: 0.88,
                        }}
                      >
                        {book.symbol}
                      </Typography>
                    </Stack>
                    <Typography
                      variant="h5"
                      sx={{ fontFamily: fontHeader, fontWeight: 900, position: 'relative', maxWidth: 310 }}
                    >
                      {book.title}
                    </Typography>
                  </Box>

                  <Box sx={{ p: 3.2, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <Typography color="text.secondary" sx={{ lineHeight: 1.75, flexGrow: 1 }}>
                      {book.description}
                    </Typography>

                    <Stack spacing={1} sx={{ mt: 2.4, mb: 2.8 }}>
                      {['Tài liệu PDF', 'Có thể mở trực tiếp trên trình duyệt', 'Phù hợp để tự ôn tập'].map((item) => (
                        <Stack key={item} direction="row" spacing={0.8} sx={{ alignItems: 'center' }}>
                          <CheckCircleRoundedIcon sx={{ color: book.accent, fontSize: 18 }} />
                          <Typography variant="body2" sx={{ color: '#60708e', fontWeight: 700 }}>
                            {item}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>

                    <Button
                      component="a"
                      href={book.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      fullWidth
                      endIcon={<ArrowForwardRoundedIcon />}
                      sx={{
                        py: 1.2,
                        borderRadius: 999,
                        textTransform: 'none',
                        fontFamily: fontHeader,
                        fontWeight: 900,
                        bgcolor: book.accent,
                        '&:hover': { bgcolor: book.accent, filter: 'brightness(.92)' },
                      }}
                    >
                      Đọc tài liệu
                    </Button>
                  </Box>
                </Card>
              </FadeInScroll>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: { xs: 8, md: 10 } }}>
          <FadeInScroll>
            <Box sx={{ textAlign: 'center', mb: 4.5 }}>
              <Chip
                icon={<MenuBookRoundedIcon />}
                label="ĐÁP ÁN & HƯỚNG DẪN GIẢI"
                sx={{
                  mb: 1.5,
                  bgcolor: '#f2efff',
                  color: '#6a50c8',
                  fontFamily: fontHeader,
                  fontWeight: 900,
                  '& .MuiChip-icon': { color: '#6a50c8' },
                }}
              />
              <Typography
                variant="h3"
                sx={{
                  fontFamily: fontHeader,
                  fontWeight: 900,
                  color: '#102044',
                  fontSize: { xs: '2rem', md: '2.8rem' },
                }}
              >
                Đáp án sách Toán 6 · 7 · 8 · 9
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 1.2, maxWidth: 700, mx: 'auto', lineHeight: 1.7 }}>
                Khu vực tra cứu đáp án được chuẩn bị để học sinh sử dụng cùng bộ sách luyện tập.
              </Typography>
            </Box>
          </FadeInScroll>

          <Grid container spacing={2.5}>
            {answerBooks.map((book, index) => (
              <Grid key={book.grade} size={{ xs: 12, sm: 6, lg: 3 }}>
                <FadeInScroll delay={index * 0.06}>
                  <Card
                    className="card-lift"
                    sx={{
                      height: '100%',
                      p: 3,
                      borderRadius: 4.5,
                      bgcolor: 'white',
                      border: '1px solid #e4ecf7',
                      boxShadow: '0 12px 32px rgba(15,48,105,.055)',
                    }}
                  >
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 3,
                        display: 'grid',
                        placeItems: 'center',
                        bgcolor: '#f2efff',
                        color: '#6a50c8',
                      }}
                    >
                      <AutoStoriesRoundedIcon />
                    </Box>
                    <Typography variant="h6" sx={{ mt: 2, fontFamily: fontHeader, fontWeight: 900, color: '#102044' }}>
                      {book.title}
                    </Typography>
                    <Typography color="text.secondary" variant="body2" sx={{ mt: 1, lineHeight: 1.7 }}>
                      {book.description}
                    </Typography>

                    {book.available ? (
                      <Button
                        component={Link}
                        href={'/tai-lieu-on-luyen/' + book.slug}
                        fullWidth
                        variant="outlined"
                        sx={{ mt: 2.5, borderRadius: 999, textTransform: 'none', fontWeight: 900 }}
                      >
                        Xem đáp án
                      </Button>
                    ) : (
                      <Button
                        disabled
                        fullWidth
                        startIcon={<LockRoundedIcon />}
                        sx={{ mt: 2.5, borderRadius: 999, textTransform: 'none', fontWeight: 900 }}
                      >
                        Đang cập nhật
                      </Button>
                    )}
                  </Card>
                </FadeInScroll>
              </Grid>
            ))}
          </Grid>
        </Box>

        <FadeInScroll>
          <Box
            sx={{
              mt: 7,
              p: { xs: 3, md: 4 },
              borderRadius: 5,
              bgcolor: '#102a66',
              color: 'white',
              display: { md: 'flex' },
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 3,
            }}
          >
            <Box>
              <Typography variant="h5" sx={{ fontFamily: fontHeader, fontWeight: 900 }}>
                Muốn được hướng dẫn ôn tập theo lộ trình?
              </Typography>
              <Typography sx={{ mt: 0.7, opacity: 0.8, lineHeight: 1.7 }}>
                Chọn môn quan tâm để đội ngũ tư vấn hỗ trợ gia đình tìm lớp phù hợp.
              </Typography>
            </Box>
            <Button
              component={Link}
              href="/#form-dang-ky"
              variant="contained"
              sx={{
                mt: { xs: 2, md: 0 },
                borderRadius: 999,
                px: 3,
                py: 1.2,
                textTransform: 'none',
                fontFamily: fontHeader,
                fontWeight: 900,
                whiteSpace: 'nowrap',
                bgcolor: '#ff8a1f',
                '&:hover': { bgcolor: '#f57c00' },
              }}
            >
              Đăng ký tư vấn
            </Button>
          </Box>
        </FadeInScroll>
      </Container>
    </Box>
  );
}
