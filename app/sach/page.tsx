'use client';

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import Link from 'next/link';

const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

const books = [
  { grade: '6', title: '36 ĐỀ KIỂM TRA ĐỊNH KỲ TOÁN 6', accent: '#1565c0' },
  { grade: '7', title: '36 ĐỀ KIỂM TRA ĐỊNH KỲ TOÁN 7', accent: '#2e7d32' },
  { grade: '8', title: '36 ĐỀ KIỂM TRA ĐỊNH KỲ TOÁN 8', accent: '#7b1fa2' },
  { grade: '9', title: '36 ĐỀ KIỂM TRA ĐỊNH KỲ TOÁN 9', accent: '#d84315' },
];

export default function SachPage() {
  return (
    <Box sx={{ bgcolor: '#f4f7fe', minHeight: '100vh', pb: 12, fontFamily: fontBody }}>
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #081f49 0%, #0d47a1 50%, #1976d2 100%)',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: 360,
            height: 360,
            borderRadius: '50%',
            right: -120,
            top: -150,
            bgcolor: 'rgba(255,255,255,.07)',
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Chip
            icon={<MenuBookRoundedIcon />}
            label="SÁCH LUYỆN TẬP"
            sx={{
              mb: 2,
              bgcolor: 'rgba(255,255,255,.14)',
              color: 'white',
              border: '1px solid rgba(255,255,255,.18)',
              fontWeight: 900,
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontFamily: fontHeader,
              fontWeight: 900,
              fontSize: { xs: '2.15rem', md: '3.55rem' },
            }}
          >
            36 Đề kiểm tra định kỳ Toán 6 · 7 · 8 · 9
          </Typography>
          <Typography sx={{ mt: 2, maxWidth: 760, mx: 'auto', opacity: 0.93, lineHeight: 1.75 }}>
            Bộ sách luyện tập dành cho học sinh THCS, hỗ trợ ôn tập định kỳ và củng cố kỹ năng làm bài.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ mt: { xs: -3, md: -4 }, position: 'relative', zIndex: 2 }}>
        <Box
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 5,
            color: 'white',
            overflow: 'hidden',
            position: 'relative',
            background: 'linear-gradient(135deg, #ff8f00, #ef6c00)',
            boxShadow: '0 18px 45px rgba(239,108,0,.2)',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              width: 220,
              height: 220,
              borderRadius: '50%',
              right: -70,
              top: -90,
              bgcolor: 'rgba(255,255,255,.12)',
            }}
          />
          <Grid container spacing={3} sx={{ alignItems: 'center', position: 'relative' }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                <Box
                  sx={{
                    width: 54,
                    height: 54,
                    borderRadius: 3,
                    display: 'grid',
                    placeItems: 'center',
                    bgcolor: 'rgba(255,255,255,.16)',
                  }}
                >
                  <CardGiftcardRoundedIcon sx={{ fontSize: 30 }} />
                </Box>
                <Box>
                  <Typography variant="overline" sx={{ fontWeight: 900 }}>
                    QUÀ TẶNG HỌC VIÊN
                  </Typography>
                  <Typography variant="h4" sx={{ fontFamily: fontHeader, fontWeight: 900 }}>
                    Đăng ký khóa ôn thi lớp 10 – tặng sách Toán 9
                  </Typography>
                </Box>
              </Stack>
              <Typography sx={{ mt: 2, lineHeight: 1.75, maxWidth: 850 }}>
                Học viên đăng ký và hoàn tất học phí một khóa ôn thi tuyển sinh lớp 10
                được tặng <b>01 cuốn “36 Đề kiểm tra định kỳ Toán 9”</b>.
                Trung tâm hỗ trợ phí vận chuyển đối với sách tặng.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
              <Button
                component={Link}
                href="/#form-dang-ky"
                variant="contained"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  borderRadius: 999,
                  px: 3.2,
                  py: 1.3,
                  bgcolor: 'white',
                  color: '#e65100',
                  fontWeight: 900,
                  boxShadow: 'none',
                  '&:hover': { bgcolor: '#fff8e1', boxShadow: 'none' },
                }}
              >
                Đăng ký tư vấn
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ textAlign: 'center', mt: { xs: 7, md: 8 }, mb: 4 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: fontHeader,
              fontWeight: 900,
              color: '#1a237e',
              fontSize: { xs: '1.9rem', md: '2.7rem' },
            }}
          >
            Chọn sách theo khối lớp
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 1.2 }}>
            Giá bán lẻ: <b>90.000đ/cuốn</b>.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {books.map((book) => (
            <Grid key={book.grade} size={{ xs: 12, sm: 6, lg: 3 }}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 5,
                  border: '1px solid #e5eaf0',
                  boxShadow: '0 14px 36px rgba(31,42,74,.08)',
                  overflow: 'hidden',
                  transition: 'transform .25s ease, box-shadow .25s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 22px 48px rgba(31,42,74,.13)',
                  },
                }}
              >
                <Box
                  sx={{
                    m: 2.5,
                    aspectRatio: '3 / 4',
                    borderRadius: 3,
                    p: 3,
                    color: 'white',
                    bgcolor: book.accent,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 16px 30px rgba(31,42,74,.18)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      width: 150,
                      height: 150,
                      borderRadius: '50%',
                      right: -55,
                      top: -55,
                      bgcolor: 'rgba(255,255,255,.12)',
                    }}
                  />
                  <Box sx={{ position: 'relative' }}>
                    <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 1 }}>
                      GIÁO DỤC SÀI GÒN
                    </Typography>
                    <Typography sx={{ mt: 2, fontFamily: fontHeader, fontWeight: 900, fontSize: '1.25rem', lineHeight: 1.35 }}>
                      36 ĐỀ KIỂM TRA ĐỊNH KỲ
                    </Typography>
                  </Box>
                  <Box sx={{ position: 'relative' }}>
                    <Typography sx={{ fontFamily: fontHeader, fontWeight: 900, fontSize: '2rem' }}>
                      TOÁN
                    </Typography>
                    <Typography sx={{ fontFamily: fontHeader, fontWeight: 900, fontSize: '5rem', lineHeight: 1 }}>
                      {book.grade}
                    </Typography>
                  </Box>
                </Box>

                <CardContent sx={{ p: 3, pt: 1 }}>
                  <Typography sx={{ fontFamily: fontHeader, fontWeight: 900, minHeight: 54 }}>
                    {book.title}
                  </Typography>
                  <Typography variant="h5" sx={{ mt: 2, color: '#d84315', fontWeight: 900 }}>
                    90.000đ
                  </Typography>
                  <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mt: 1.2 }}>
                    <LocalShippingRoundedIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
                    <Typography color="text.secondary" variant="body2">
                      Phí vận chuyển được tính theo đơn hàng.
                    </Typography>
                  </Stack>

                  {book.grade === '9' && (
                    <Chip
                      label="Quà tặng khóa ôn thi lớp 10"
                      size="small"
                      sx={{
                        mt: 2,
                        bgcolor: '#fff3e0',
                        color: '#e65100',
                        fontWeight: 900,
                      }}
                    />
                  )}

                  <Button
                    component="a"
                    href="https://zalo.me/1357593207866827845"
                    target="_blank"
                    rel="noopener noreferrer"
                    fullWidth
                    variant="contained"
                    startIcon={<ShoppingCartRoundedIcon />}
                    sx={{ mt: 3, borderRadius: 999, py: 1.25, fontWeight: 900 }}
                  >
                    Liên hệ đặt sách
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            mt: 5,
            p: { xs: 3, md: 4 },
            borderRadius: 5,
            bgcolor: 'white',
            border: '1px solid #e5eaf0',
            display: { md: 'flex' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 3,
          }}
        >
          <Box>
            <Typography variant="h5" sx={{ fontFamily: fontHeader, fontWeight: 900, color: '#1a237e' }}>
              Xem thêm quyền lợi dành cho học viên
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 0.7, lineHeight: 1.7 }}>
              Tìm hiểu chương trình “Mời bạn cùng học”, quà tặng sách và các hỗ trợ trong quá trình học.
            </Typography>
          </Box>
          <Button
            component={Link}
            href="/chinh-sach"
            variant="outlined"
            sx={{ mt: { xs: 2, md: 0 }, borderRadius: 999, px: 3, fontWeight: 900, whiteSpace: 'nowrap' }}
          >
            Xem quyền lợi học viên
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
