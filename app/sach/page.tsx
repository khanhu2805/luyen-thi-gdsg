'use client';

import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Grid,
  Link as MuiLink,
  Stack,
  Typography,
} from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import Link from 'next/link';
import BookCover from '../components/BookCover';
import { answerBooks } from '../data/answerBooks';

const navy = '#283878';
const red = '#E82020';
const ink = '#26324D';
const muted = '#657086';
const border = '#E6E8EE';
const heading = "'Montserrat', sans-serif";

export default function SachPage() {
  return (
    <Box sx={{ bgcolor: '#F8F9FC', minHeight: '100vh', color: ink, pb: { xs: 8, md: 12 } }}>
      <Box sx={{ bgcolor: '#fff', borderBottom: `1px solid ${border}` }}>
        <Container maxWidth="lg" sx={{ pt: { xs: 3, md: 4 }, pb: { xs: 5, md: 7 } }}>
          <Breadcrumbs aria-label="Đường dẫn" sx={{ color: muted, fontSize: 13, mb: { xs: 4, md: 5 } }}>
            <MuiLink component={Link} href="/" underline="hover" color="inherit">Trang chủ</MuiLink>
            <Typography sx={{ fontSize: 13, fontWeight: 700, color: navy }}>Sách luyện tập</Typography>
          </Breadcrumbs>

          <Grid container spacing={{ xs: 4, md: 5 }} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack direction="row" spacing={1.25} sx={{ alignItems: 'center', mb: 2.2 }}>
                <Box sx={{ width: 28, height: 2.5, bgcolor: red }} />
                <Typography sx={{ fontSize: 12, fontWeight: 800, letterSpacing: '.1em', color: red }}>
                  TỦ SÁCH GIÁO DỤC SÀI GÒN
                </Typography>
              </Stack>
              <Typography component="h1" sx={{ color: navy, fontFamily: heading, fontSize: { xs: 35, sm: 44, md: 52 }, letterSpacing: '-.04em', fontWeight: 800, lineHeight: 1.17, maxWidth: 650 }}>
                Bộ sách 36 đề kiểm tra định kỳ Toán 6–9
              </Typography>
              <Typography sx={{ mt: 2.6, fontSize: { xs: 15, md: 17 }, color: muted, lineHeight: 1.85, maxWidth: 600 }}>
                Mỗi cuốn gồm các đề luyện tập để học sinh tự đánh giá kiến thức theo khối lớp. Xem bìa sách, chọn đúng lớp và tra cứu đáp án khi cần.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.4} sx={{ mt: 4, alignItems: { sm: 'center' } }}>
                <Button component="a" href="#danh-sach-sach" variant="contained" endIcon={<ArrowForwardRoundedIcon />} sx={{ bgcolor: navy, textTransform: 'none', px: 3, py: 1.45, borderRadius: 2, fontWeight: 800, boxShadow: 'none', '&:hover': { bgcolor: '#1F2C65', boxShadow: 'none' } }}>
                  Chọn sách theo lớp
                </Button>
                <Button component={Link} href="/tai-lieu-on-luyen#dap-an-sach" endIcon={<ArrowForwardRoundedIcon />} sx={{ color: navy, textTransform: 'none', px: 2, py: 1.3, fontWeight: 800 }}>
                  Tra cứu đáp án
                </Button>
              </Stack>
              <Stack direction="row" spacing={{ xs: 2, sm: 4 }} sx={{ mt: 4, flexWrap: 'wrap', rowGap: 2 }}>
                <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                  <AutoStoriesOutlinedIcon sx={{ color: red, fontSize: 22 }} />
                  <Typography sx={{ fontWeight: 750, fontSize: 13.5 }}>4 cuốn · Lớp 6–9</Typography>
                </Stack>
                <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                  <LocalShippingOutlinedIcon sx={{ color: red, fontSize: 22 }} />
                  <Typography sx={{ fontSize: 13.5, color: muted }}>Giao sách theo đơn hàng</Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ bgcolor: '#F1F3F8', border: `1px solid ${border}`, borderRadius: 4, px: { xs: 3, sm: 4 }, py: { xs: 3.3, md: 4 }, maxWidth: 490, ml: { md: 'auto' } }}>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: { xs: 1.4, sm: 2 }, alignItems: 'center' }}>
                  {answerBooks.map((book, i) => (
                    <Box key={book.grade} sx={{ transform: `translateY(${i % 2 === 0 ? 10 : -10}px)` }}>
                      <BookCover src={book.coverUrl} title={book.title} subject={`Toán ${book.grade}`} maxWidth={108} />
                    </Box>
                  ))}
                </Box>
                <Typography sx={{ mt: 3.4, pt: 2, borderTop: '1px solid #DFE3EB', color: muted, fontSize: 13, textAlign: 'center' }}>
                  Hình bìa của 4 cuốn sách hiện có
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" id="danh-sach-sach" sx={{ pt: { xs: 6, md: 8 }, scrollMarginTop: '100px' }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ justifyContent: 'space-between', gap: 2, alignItems: { sm: 'end' }, mb: 3.7 }}>
          <Box>
            <Typography sx={{ color: red, fontSize: 12, fontWeight: 800, letterSpacing: '.08em', mb: 1 }}>DANH MỤC SÁCH</Typography>
            <Typography component="h2" sx={{ fontFamily: heading, fontSize: { xs: 26, md: 32 }, fontWeight: 800, color: navy, letterSpacing: '-.025em' }}>
              Chọn cuốn sách phù hợp
            </Typography>
            <Typography sx={{ color: muted, mt: 1, lineHeight: 1.7, fontSize: 14 }}>Bìa sách thật và đường dẫn đáp án được đặt cùng một chỗ để dễ tìm.</Typography>
          </Box>
          <Typography sx={{ color: navy, fontSize: 15, fontWeight: 800, whiteSpace: 'nowrap' }}>90.000đ / cuốn</Typography>
        </Stack>

        <Grid container spacing={2.5}>
          {answerBooks.map((book) => (
            <Grid key={book.grade} size={{ xs: 12, md: 6 }}>
              <Box sx={{ height: '100%', bgcolor: '#fff', border: `1px solid ${border}`, borderRadius: 3, overflow: 'hidden', transition: 'box-shadow .2s ease, border-color .2s ease', '&:hover': { borderColor: '#C8CFDE', boxShadow: '0 12px 36px rgba(22,34,62,.07)' } }}>
                <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ height: '100%' }}>
                  <Box sx={{ bgcolor: '#F4F5F8', borderRight: { sm: `1px solid ${border}` }, borderBottom: { xs: `1px solid ${border}`, sm: 'none' }, width: { sm: 205 }, flexShrink: 0, p: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <BookCover src={book.coverUrl} title={book.title} subject={`Toán ${book.grade}`} maxWidth={150} />
                  </Box>
                  <Box sx={{ p: { xs: 3, sm: 3.2 }, flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ color: red, fontSize: 12, fontWeight: 800, letterSpacing: '.06em' }}>SÁCH TOÁN LỚP {book.grade}</Typography>
                    <Typography component="h3" sx={{ mt: 1, fontSize: 20, fontWeight: 800, color: ink, lineHeight: 1.45 }}>36 đề kiểm tra định kỳ Toán {book.grade}</Typography>
                    <Typography sx={{ fontSize: 24, fontWeight: 850, color: navy, mt: 2 }}>90.000đ</Typography>
                    <Typography sx={{ fontSize: 12.5, color: muted, mt: 0.3 }}>Chưa bao gồm phí vận chuyển</Typography>
                    <Stack spacing={1.1} sx={{ mt: 'auto', pt: 3 }}>
                      <Button component="a" href="https://zalo.me/1357593207866827845" target="_blank" rel="noopener noreferrer" variant="contained" endIcon={<ArrowOutwardRoundedIcon sx={{ fontSize: 18 }} />} sx={{ bgcolor: navy, borderRadius: 1.8, boxShadow: 'none', py: 1.15, fontWeight: 800, textTransform: 'none', '&:hover': { bgcolor: '#1F2C65', boxShadow: 'none' } }}>
                        Liên hệ đặt sách
                      </Button>
                      <Button component={Link} href={`/tai-lieu-on-luyen/${book.slug}`} endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />} sx={{ color: navy, textTransform: 'none', fontWeight: 800, py: 0.7 }}>
                        {book.fileUrl ? 'Xem đáp án PDF' : 'Thông tin đáp án'}
                      </Button>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: { xs: 5, md: 7 }, p: { xs: 3, md: 4.5 }, bgcolor: '#fff', borderRadius: 3, border: `1px solid ${border}`, borderLeft: `4px solid ${red}`, display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' }, gap: 2.5, alignItems: { md: 'center' } }}>
          <Box sx={{ maxWidth: 710 }}>
            <Typography component="h2" sx={{ color: navy, fontSize: 21, fontWeight: 800, lineHeight: 1.4 }}>Chính sách tặng sách Toán 9</Typography>
            <Typography sx={{ mt: 1, color: muted, lineHeight: 1.8, fontSize: 14 }}>
              Học viên đủ điều kiện theo chương trình hiện hành có thể nhận sách Toán 9. Xem chi tiết điều kiện và cách nhận tại trang chính sách.
            </Typography>
          </Box>
          <Button component={Link} href="/chinh-sach" variant="outlined" endIcon={<ArrowForwardRoundedIcon />} sx={{ color: navy, borderColor: '#C4CDE1', fontWeight: 800, textTransform: 'none', borderRadius: 2, px: 2.5, py: 1.1, flexShrink: 0, alignSelf: { xs: 'start', md: 'center' } }}>
            Xem chính sách
          </Button>
        </Box>
      </Container>
    </Box>
  );
}