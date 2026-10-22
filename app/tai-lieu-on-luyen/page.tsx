'use client';

import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Divider,
  Grid,
  Link as MuiLink,
  Stack,
  Typography,
} from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import Link from 'next/link';
import { answerBooks } from '../data/answerBooks';
import { studyMaterials } from '../data/studyMaterials';
import BookCover from '../components/BookCover';

const navy = '#283878';
const red = '#E82020';
const ink = '#243049';
const muted = '#647087';
const border = '#e2e6ed';
const heading = "'Montserrat', sans-serif";


export default function TaiLieuOnLuyenPage() {
  return (
    <Box sx={{ bgcolor: '#fbfbf9', minHeight: '100vh', color: ink, pb: { xs: 8, md: 12 } }}>
      <Box sx={{ borderBottom: `1px solid ${border}`, bgcolor: '#fff' }}>
        <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 5 }, pb: { xs: 5, md: 7 } }}>
          <Breadcrumbs aria-label="Đường dẫn" sx={{ mb: { xs: 4, md: 5 }, fontSize: 13 }}>
            <MuiLink component={Link} href="/" underline="hover" sx={{ color: muted }}>Trang chủ</MuiLink>
            <Typography sx={{ fontSize: 13, color: ink }}>Tài liệu học tập</Typography>
          </Breadcrumbs>

          <Grid container spacing={{ xs: 4, md: 7 }} sx={{ alignItems: 'end' }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography sx={{ color: red, fontWeight: 800, letterSpacing: '.09em', fontSize: 12, mb: 1.5 }}>
                THƯ VIỆN HỌC TẬP
              </Typography>
              <Typography component="h1" sx={{ fontFamily: heading, fontWeight: 800, fontSize: { xs: 35, sm: 45, md: 54 }, letterSpacing: '-.045em', lineHeight: 1.15, color: navy }}>
                Tài liệu để học và tự ôn tập
              </Typography>
              <Typography sx={{ color: muted, maxWidth: 660, lineHeight: 1.9, fontSize: { xs: 15, md: 17 }, mt: 2.3 }}>
                Tổng hợp tài liệu ôn thi lớp 10 và đáp án của bộ sách Toán 6–9. Chọn đúng tài liệu mình đang học để mở bản PDF.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ borderLeft: `3px solid ${red}`, pl: 2.4, py: 0.2 }}>
                <Typography sx={{ fontWeight: 800, fontSize: 14, mb: 0.8 }}>Gợi ý sử dụng</Typography>
                <Typography sx={{ color: muted, fontSize: 14, lineHeight: 1.75 }}>
                  Hãy thử làm bài trước, sau đó mở đáp án để đối chiếu và ghi lại những câu cần ôn thêm.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: { xs: 6, md: 8 } }}>
        <Box component="section" aria-labelledby="tai-lieu-lop-10">
          <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ alignItems: { sm: 'end' }, justifyContent: 'space-between', gap: 1.5, mb: 3 }}>
            <Box>
              <Typography sx={{ color: red, fontSize: 12, fontWeight: 800, letterSpacing: '.1em', mb: 1 }}>01 / THEO MÔN HỌC</Typography>
              <Typography component="h2" id="tai-lieu-lop-10" sx={{ fontFamily: heading, fontSize: { xs: 24, md: 30 }, fontWeight: 800, letterSpacing: '-.025em' }}>
                Tài liệu ôn thi vào lớp 10
              </Typography>
            </Box>
            <Typography sx={{ color: muted, fontSize: 14 }}>Mở trực tiếp trên trình duyệt · Định dạng PDF</Typography>
          </Stack>

          <Grid container spacing={2.4}>
            {studyMaterials.map((book) => (
              <Grid key={book.id} size={{ xs: 12, md: 4 }}>
                <Box sx={{ height: '100%', bgcolor: '#fff', border: `1px solid ${border}`, borderRadius: 2.3, overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'border-color .2s ease', '&:hover': { borderColor: '#a7b2cd' } }}>
                  <Box sx={{ bgcolor: '#f5f5f2', px: 2.8, py: 2.6, borderBottom: `1px solid ${border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ width: 134, flexShrink: 0 }}>
                      <BookCover src={book.coverUrl} title={book.title}
                        subject={book.name} maxWidth={130} />
                    </Box>
                    <Typography sx={{ alignSelf: 'start', color: '#8c94a2', fontWeight: 700, fontSize: 13 }}>{book.number} / 03</Typography>
                  </Box>
                  <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <Typography sx={{ fontSize: 12, color: book.accent, fontWeight: 800, mb: 1 }}>TÀI LIỆU ÔN TẬP</Typography>
                    <Typography component="h3" sx={{ fontWeight: 800, fontSize: 19, lineHeight: 1.45, mb: 1.3 }}>{book.title}</Typography>
                    <Typography sx={{ fontSize: 14, color: muted, lineHeight: 1.75, flexGrow: 1 }}>{book.description}</Typography>
                    <Divider sx={{ my: 2.5 }} />
                    <Button component="a" href={book.fileUrl} target="_blank" rel="noopener noreferrer" endIcon={<ArrowOutwardRoundedIcon fontSize="small" />} sx={{ p: 0, alignSelf: 'start', textTransform: 'none', fontWeight: 800, color: navy, '&:hover': { bgcolor: 'transparent', color: red } }}>
                      Đọc tài liệu PDF
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box component="section" aria-labelledby="dap-an-theo-lop" sx={{ mt: { xs: 7, md: 10 } }}>
          <Stack direction={{ xs: 'column', md: 'row' }} sx={{ justifyContent: 'space-between', alignItems: { md: 'end' }, gap: 2, mb: 3 }}>
            <Box>
              <Typography sx={{ color: red, fontSize: 12, fontWeight: 800, letterSpacing: '.1em', mb: 1 }}>02 / TRA CỨU ĐÁP ÁN</Typography>
              <Typography component="h2" id="dap-an-theo-lop" sx={{ fontFamily: heading, fontSize: { xs: 24, md: 30 }, fontWeight: 800, letterSpacing: '-.025em' }}>
                Đáp án bộ sách 36 đề kiểm tra định kỳ
              </Typography>
              <Typography sx={{ color: muted, lineHeight: 1.75, mt: 1, maxWidth: 680 }}>
                Dành cho học sinh đang sử dụng sách Toán lớp 6, 7, 8 và 9. Chọn lớp để xem tình trạng tệp và mở đáp án khi đã được đăng tải.
              </Typography>
            </Box>
            <MuiLink component={Link} href="/sach" underline="hover" sx={{ flexShrink: 0, fontSize: 14, fontWeight: 800, color: navy }}>
              Xem bộ sách <ArrowForwardRoundedIcon sx={{ verticalAlign: 'middle', fontSize: 16 }} />
            </MuiLink>
          </Stack>

          <Grid container spacing={2}>
            {answerBooks.map((book) => (
              <Grid key={book.grade} size={{ xs: 12, sm: 6, lg: 3 }}>
                <Box component={Link} href={`/tai-lieu-on-luyen/${book.slug}`} sx={{ bgcolor: '#fff', textDecoration: 'none', color: ink, height: '100%', display: 'flex', flexDirection: 'column', border: `1px solid ${border}`, borderRadius: 2, overflow: 'hidden', transition: 'border-color .2s ease, transform .2s ease', '&:hover': { borderColor: navy, transform: 'translateY(-2px)' }, '&:focus-visible': { outline: `3px solid ${red}`, outlineOffset: 2 } }}>
                  <Box sx={{ px: 2.3, py: 2.1, bgcolor: '#f3f4f8', borderBottom: `1px solid ${border}` }}>
                    <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                      <Box sx={{ width: 82, flexShrink: 0 }}>
                        <BookCover src={book.coverUrl} title={book.title} subject={`Toán ${book.grade}`} maxWidth={80} />
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: 11, color: muted, fontWeight: 800 }}>TOÁN THCS</Typography>
                        <Typography sx={{ mt: 0.5, fontFamily: heading, fontWeight: 800, color: navy, fontSize: 27, lineHeight: 1.25 }}>Lớp {book.grade}</Typography>
                      </Box>
                    </Stack>
                  </Box>
                  <Box sx={{ p: 2.5, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <Typography component="h3" sx={{ fontSize: 16, fontWeight: 800, lineHeight: 1.5, minHeight: 48 }}>{book.title}</Typography>
                    <Typography sx={{ mt: 1, mb: 3, fontSize: 13, color: book.fileUrl ? '#346752' : muted }}>
                      {book.fileUrl ? 'Có file đáp án PDF' : 'Chưa liên kết tệp đáp án'}
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ color: navy, fontWeight: 800, alignItems: 'center', mt: 'auto' }}>
                      <Typography sx={{ fontSize: 14, fontWeight: 800 }}>{book.fileUrl ? 'Xem đáp án' : 'Thông tin đáp án'}</Typography>
                      <ArrowForwardRoundedIcon sx={{ fontSize: 17 }} />
                    </Stack>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ mt: { xs: 7, md: 9 }, borderTop: `1px solid ${border}`, pt: 3.5, display: 'flex', gap: 2, alignItems: 'flex-start' }}>
          <DescriptionOutlinedIcon sx={{ color: red, mt: 0.25 }} />
          <Box>
            <Typography sx={{ fontWeight: 800, mb: 0.5 }}>Một lưu ý nhỏ khi đối chiếu đáp án</Typography>
            <Typography sx={{ lineHeight: 1.8, color: muted, fontSize: 14, maxWidth: 800 }}>
              Nếu kết quả khác đáp án, hãy kiểm tra lại từng bước làm. Với bài tự luận, có thể có nhiều cách giải đúng; đáp án nên được dùng để tham khảo và tự sửa bài.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}