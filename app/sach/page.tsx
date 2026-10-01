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
          background: 'linear-gradient(135deg, #0b2d62, #1976d2)',
        }}
      >
        <Container maxWidth="lg">
          <Chip
            icon={<MenuBookRoundedIcon />}
            label="SÁCH LUYỆN TẬP"
            sx={{ mb: 2, bgcolor: 'rgba(255,255,255,.14)', color: 'white', fontWeight: 900 }}
          />
          <Typography
            variant="h2"
            sx={{
              fontFamily: fontHeader,
              fontWeight: 900,
              fontSize: { xs: '2.15rem', md: '3.5rem' },
            }}
          >
            36 Đề kiểm tra định kỳ Toán 6 · 7 · 8 · 9
          </Typography>
          <Typography sx={{ mt: 2, maxWidth: 760, mx: 'auto', opacity: 0.92, lineHeight: 1.7 }}>
            Giá bán lẻ thống nhất 90.000 đồng/cuốn. Giá chưa bao gồm phí vận chuyển.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ mt: { xs: 5, md: 7 } }}>
        <Grid container spacing={3}>
          {books.map((book) => (
            <Grid key={book.grade} size={{ xs: 12, sm: 6, lg: 3 }}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 5,
                  border: '1px solid #e5eaf0',
                  boxShadow: '0 16px 38px rgba(31,42,74,.08)',
                  overflow: 'hidden',
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
                  }}
                >
                  <Box>
                    <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 1 }}>
                      GIÁO DỤC SÀI GÒN
                    </Typography>
                    <Typography sx={{ mt: 2, fontFamily: fontHeader, fontWeight: 900, fontSize: '1.25rem', lineHeight: 1.35 }}>
                      36 ĐỀ KIỂM TRA ĐỊNH KỲ
                    </Typography>
                  </Box>
                  <Box>
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
                    90.000đ / cuốn
                  </Typography>
                  <Typography color="text.secondary" variant="body2" sx={{ mt: 1.2, lineHeight: 1.7 }}>
                    Chưa bao gồm phí vận chuyển. Phí vận chuyển đối với đơn mua sách do người mua thanh toán.
                  </Typography>

                  {book.grade === '9' && (
                    <Box
                      sx={{
                        mt: 2,
                        p: 1.5,
                        borderRadius: 2.5,
                        bgcolor: '#fff3e0',
                        border: '1px solid #ffe0b2',
                      }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 800, color: '#e65100' }}>
                        Học viên hoàn tất học phí một khóa ôn thi tuyển sinh lớp 10 được tặng tối đa 01 cuốn Toán 9/khóa; Công ty chịu phí vận chuyển đối với sách tặng.
                      </Typography>
                    </Box>
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

        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ height: '100%', p: 3.5, borderRadius: 4, bgcolor: 'white', border: '1px solid #e5eaf0' }}>
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                <LocalShippingRoundedIcon color="primary" />
                <Typography variant="h6" sx={{ fontFamily: fontHeader, fontWeight: 900 }}>
                  Chính sách vận chuyển
                </Typography>
              </Stack>
              <Typography color="text.secondary" sx={{ mt: 1.5, lineHeight: 1.75 }}>
                Đơn mua sách: người mua thanh toán phí vận chuyển. Sách tặng cho học viên khóa ôn thi lớp 10: Công ty chịu phí vận chuyển.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ height: '100%', p: 3.5, borderRadius: 4, bgcolor: 'white', border: '1px solid #e5eaf0' }}>
              <Typography variant="h6" sx={{ fontFamily: fontHeader, fontWeight: 900 }}>
                Cần xem chính sách đầy đủ?
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 1.5, lineHeight: 1.75 }}>
                Xem quy định về quà tặng sách, bảo lưu, chuyển lớp, hoàn học phí và chương trình mời bạn cùng học.
              </Typography>
              <Button component={Link} href="/chinh-sach" variant="outlined" sx={{ mt: 2, borderRadius: 999, fontWeight: 900 }}>
                Xem chính sách
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
