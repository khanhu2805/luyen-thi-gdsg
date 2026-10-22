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
import Link from 'next/link';
import { answerBooks } from '../data/answerBooks';

const navy = '#283878';
const red = '#E82020';
const ink = '#243049';
const muted = '#647087';
const border = '#e2e6ed';
const heading = "'Montserrat', sans-serif";

export default function SachPage() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#fbfbf9', color: ink, pb: { xs: 9, md: 12 } }}>
      <Box sx={{ bgcolor: '#fff', borderBottom: `1px solid ${border}` }}>
        <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 5 }, pb: { xs: 5, md: 7 } }}>
          <Breadcrumbs aria-label="Đường dẫn" sx={{ mb: { xs: 4, md: 5 }, fontSize: 13 }}>
            <MuiLink component={Link} href="/" underline="hover" sx={{ color: muted }}>Trang chủ</MuiLink>
            <Typography sx={{ color: ink, fontSize: 13 }}>Sách luyện tập</Typography>
          </Breadcrumbs>
          <Typography sx={{ color: red, fontWeight: 800, fontSize: 12, letterSpacing: '.09em', mb: 1.5 }}>
            SÁCH DÀNH CHO HỌC SINH THCS
          </Typography>
          <Typography component="h1" sx={{ maxWidth: 830, color: navy, fontFamily: heading, fontSize: { xs: 34, md: 52 }, fontWeight: 800, letterSpacing: '-.045em', lineHeight: 1.18 }}>
            36 đề kiểm tra định kỳ Toán 6, 7, 8, 9
          </Typography>
          <Typography sx={{ color: muted, maxWidth: 730, fontSize: { xs: 15, md: 17 }, lineHeight: 1.9, mt: 2.2 }}>
            Bộ sách luyện tập giúp học sinh làm quen với cấu trúc đề và tự kiểm tra mức độ nắm bài. Chọn cuốn phù hợp với lớp đang học.
          </Typography>
          <Stack direction="row" spacing={3} sx={{ flexWrap: 'wrap', mt: 3, rowGap: 1 }}>
            <Typography sx={{ fontSize: 14, color: ink }}><Box component="span" sx={{ fontWeight: 800 }}>90.000đ</Box> / cuốn</Typography>
            <Typography sx={{ fontSize: 14, color: muted }}>Phí vận chuyển tính theo đơn hàng</Typography>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: { xs: 6, md: 8 } }}>
        <Typography component="h2" sx={{ fontFamily: heading, fontSize: { xs: 25, md: 31 }, fontWeight: 800, letterSpacing: '-.025em', mb: 1 }}>Chọn sách theo khối lớp</Typography>
        <Typography sx={{ color: muted, lineHeight: 1.7, mb: 3.5 }}>Thông tin từng cuốn và đường dẫn xem đáp án được đặt ngay bên dưới.</Typography>

        <Grid container spacing={2.5}>
          {answerBooks.map((book) => (
            <Grid key={book.grade} size={{ xs: 12, sm: 6, lg: 3 }}>
              <Box sx={{ bgcolor: 'white', border: `1px solid ${border}`, borderRadius: 2.3, overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%', transition: 'border-color .2s ease', '&:hover': { borderColor: '#a7b2cd' } }}>
                <Box sx={{ bgcolor: '#f3f4f6', p: 3, borderBottom: `1px solid ${border}`, display: 'grid', placeItems: 'center', minHeight: 266 }}>
                  <Box sx={{ width: 148, height: 204, background: navy, boxShadow: '7px 8px 0 #d7dbe4', color: '#fff', display: 'flex', flexDirection: 'column', p: 2.2, justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
                    <Box sx={{ position: 'absolute', right: 0, top: 0, width: 9, height: '100%', bgcolor: red }} />
                    <Typography sx={{ fontSize: 9, fontWeight: 800, letterSpacing: '.08em', pr: 1 }}>GIÁO DỤC SÀI GÒN</Typography>
                    <Box>
                      <Typography sx={{ fontSize: 11, fontWeight: 800, lineHeight: 1.3 }}>36 ĐỀ KIỂM TRA ĐỊNH KỲ</Typography>
                      <Typography sx={{ fontSize: 28, fontWeight: 900, mt: 0.8, fontFamily: heading }}>TOÁN {book.grade}</Typography>
                      <Box sx={{ bgcolor: red, width: 40, height: 4, mt: 1.5 }} />
                    </Box>
                    <Typography sx={{ fontSize: 10, opacity: .8 }}>BỘ SÁCH THCS</Typography>
                  </Box>
                </Box>
                <Box sx={{ p: 2.7, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <Typography component="h3" sx={{ fontWeight: 800, fontSize: 17, minHeight: 54, lineHeight: 1.5 }}>{book.title}</Typography>
                  <Typography sx={{ fontSize: 22, fontWeight: 900, color: red, mt: 1.5 }}>90.000đ</Typography>
                  <Typography sx={{ color: muted, fontSize: 13, mt: 0.5 }}>Chưa bao gồm phí vận chuyển</Typography>
                  {book.grade === 9 && (
                    <Typography sx={{ color: '#6c4c19', fontSize: 12.5, mt: 1.6, bgcolor: '#fff8e9', p: 1.2, borderLeft: '2px solid #d69a2e' }}>
                      Có trong chương trình tặng sách cho học viên đủ điều kiện.
                    </Typography>
                  )}
                  <Stack spacing={1.4} sx={{ mt: 'auto', pt: 3 }}>
                    <Button component="a" href="https://zalo.me/1357593207866827845" target="_blank" rel="noopener noreferrer" fullWidth variant="contained" endIcon={<ArrowOutwardRoundedIcon fontSize="small" />} sx={{ bgcolor: navy, boxShadow: 'none', textTransform: 'none', fontWeight: 800, borderRadius: 1.25, py: 1.25, '&:hover': { bgcolor: '#1e2c63', boxShadow: 'none' } }}>
                      Liên hệ đặt sách
                    </Button>
                    <Button component={Link} href={`/tai-lieu-on-luyen/${book.slug}`} endIcon={<ArrowForwardRoundedIcon fontSize="small" />} fullWidth variant="text" sx={{ fontWeight: 800, textTransform: 'none', color: navy, py: 1 }}>
                      {book.fileUrl ? 'Xem đáp án sách' : 'Thông tin đáp án'}
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: { xs: 6, md: 8 }, bgcolor: '#fff', border: `1px solid ${border}`, borderLeft: `4px solid ${red}`, borderRadius: 1.5, p: { xs: 3, md: 4 }, display: 'flex', gap: 3, flexDirection: { xs: 'column', md: 'row' }, alignItems: { md: 'center' }, justifyContent: 'space-between' }}>
          <Box sx={{ maxWidth: 770 }}>
            <Typography component="h2" sx={{ fontFamily: heading, fontWeight: 800, fontSize: { xs: 20, md: 24 } }}>Chính sách tặng sách Toán 9</Typography>
            <Typography sx={{ color: muted, fontSize: 14, lineHeight: 1.8, mt: 1 }}>
              Theo thông tin chương trình hiện có, học viên đăng ký và hoàn tất học phí một khóa ôn thi tuyển sinh lớp 10 được tặng 01 cuốn “36 đề kiểm tra định kỳ Toán 9”. Trung tâm hỗ trợ phí vận chuyển đối với sách tặng.
            </Typography>
          </Box>
          <Button component={Link} href="/chinh-sach" variant="outlined" endIcon={<ArrowForwardRoundedIcon />} sx={{ color: navy, borderColor: navy, textTransform: 'none', fontWeight: 800, borderRadius: 1.25, px: 2.5, py: 1.2, alignSelf: { xs: 'start', md: 'center' }, flexShrink: 0 }}>
            Xem chính sách
          </Button>
        </Box>
      </Container>
    </Box>
  );
}