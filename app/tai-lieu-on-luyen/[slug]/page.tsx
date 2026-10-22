'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
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
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import BookCover from '@/app/components/BookCover';
import { getAnswerBookBySlug } from '@/app/data/answerBooks';

const navy = '#283878';
const red = '#E82020';
const ink = '#26324D';
const muted = '#657086';
const border = '#E6E8EE';
const heading = "'Montserrat', sans-serif";

export default function DapAnPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const book = getAnswerBookBySlug(slug || '');

  if (!book) {
    return (
      <Container maxWidth="sm" sx={{ py: 10, textAlign: 'center' }}>
        <Typography component="h1" sx={{ color: navy, fontFamily: heading, fontSize: 30, fontWeight: 800 }}>Không tìm thấy đáp án</Typography>
        <Typography sx={{ mt: 1.5, color: muted }}>Hãy chọn lại cuốn sách từ thư viện.</Typography>
        <Button component={Link} href="/tai-lieu-on-luyen#dap-an-sach" startIcon={<ArrowBackRoundedIcon />} sx={{ mt: 3, color: navy, fontWeight: 800, textTransform: 'none' }}>Về thư viện</Button>
      </Container>
    );
  }

  return (
    <Box sx={{ bgcolor: '#F8F9FC', minHeight: '100vh', pb: { xs: 8, md: 12 }, color: ink }}>
      <Box sx={{ bgcolor: '#fff', borderBottom: `1px solid ${border}` }}>
        <Container maxWidth="lg" sx={{ pt: { xs: 3, md: 4 }, pb: { xs: 5, md: 6 } }}>
          <Breadcrumbs aria-label="Đường dẫn" sx={{ mb: 4, fontSize: 13 }}>
            <MuiLink component={Link} href="/" underline="hover" sx={{ color: muted }}>Trang chủ</MuiLink>
            <MuiLink component={Link} href="/tai-lieu-on-luyen" underline="hover" sx={{ color: muted }}>Tài liệu học tập</MuiLink>
            <Typography sx={{ color: navy, fontWeight: 700, fontSize: 13 }}>Đáp án Toán {book.grade}</Typography>
          </Breadcrumbs>
          <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center">
            <Grid size={{ xs: 12, sm: 8 }}>
              <Stack direction="row" spacing={1.2} alignItems="center" sx={{ mb: 2 }}>
                <Box sx={{ width: 28, height: 2.5, bgcolor: red }} />
                <Typography sx={{ color: red, fontSize: 12, fontWeight: 800, letterSpacing: '.08em' }}>HƯỚNG DẪN GIẢI · TOÁN {book.grade}</Typography>
              </Stack>
              <Typography component="h1" sx={{ fontFamily: heading, fontSize: { xs: 36, md: 49 }, lineHeight: 1.18, color: navy, fontWeight: 800, letterSpacing: '-.035em' }}>
                Đáp án sách Toán {book.grade}
              </Typography>
              <Typography sx={{ color: muted, lineHeight: 1.85, fontSize: { xs: 15, md: 16 }, mt: 2.2, maxWidth: 610 }}>
                {book.desc} Bạn có thể mở hoặc tải PDF về để xem lại sau khi đã hoàn thành đề luyện tập.
              </Typography>
              {book.fileUrl ? (
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.4} sx={{ mt: 3.5, alignItems: { sm: 'center' } }}>
                  <Button component="a" href={book.fileUrl} target="_blank" rel="noopener noreferrer" variant="contained" endIcon={<ArrowOutwardRoundedIcon />} sx={{ bgcolor: navy, textTransform: 'none', fontWeight: 800, borderRadius: 2, px: 2.9, py: 1.3, boxShadow: 'none', '&:hover': { bgcolor: '#1F2C65', boxShadow: 'none' } }}>
                    Mở đáp án PDF
                  </Button>
                  <Button component="a" href={book.fileUrl} download variant="outlined" startIcon={<DownloadOutlinedIcon />} sx={{ color: navy, borderColor: '#C6CFE2', fontWeight: 800, textTransform: 'none', borderRadius: 2, px: 2.4, py: 1.2 }}>
                    Tải về máy
                  </Button>
                </Stack>
              ) : (
                <Typography sx={{ color: muted, fontSize: 14, fontWeight: 800, mt: 2.5 }}>File PDF đang được cập nhật.</Typography>
              )}
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Box sx={{ bgcolor: '#F1F3F8', p: 3, border: `1px solid ${border}`, borderRadius: 3, mx: { sm: 'auto', md: '0 0 0 auto' }, maxWidth: 270, textAlign: 'center' }}>
                <BookCover src={book.coverUrl} title={book.title} subject={`Toán ${book.grade}`} maxWidth={155} />
                <Typography sx={{ mt: 2, color: muted, fontSize: 12.5 }}>Bìa sách Toán {book.grade}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ pt: { xs: 5, md: 7 } }}>
        <Grid container spacing={3.5}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Box sx={{ bgcolor: '#fff', border: `1px solid ${border}`, borderRadius: 3, overflow: 'hidden' }}>
              <Stack direction="row" spacing={1.3} sx={{ px: { xs: 2.4, md: 3.5 }, py: 2.5, alignItems: 'center', borderBottom: `1px solid ${border}` }}>
                <Box sx={{ width: 45, height: 45, bgcolor: '#F0F2F8', borderRadius: 2, display: 'grid', placeItems: 'center' }}>
                  <PictureAsPdfOutlinedIcon sx={{ color: navy, fontSize: 24 }} />
                </Box>
                <Box>
                  <Typography component="h2" sx={{ color: ink, fontSize: 18, fontWeight: 800 }}>Xem nội dung đáp án</Typography>
                  <Typography sx={{ color: muted, fontSize: 13, mt: .3 }}>Tệp PDF · Toán lớp {book.grade}</Typography>
                </Box>
              </Stack>
              {book.fileUrl ? (
                <>
                  <Box component="iframe" title={`Đáp án sách Toán ${book.grade}`} src={book.fileUrl} loading="lazy" sx={{ width: '100%', minHeight: 680, border: 0, bgcolor: '#F3F4F8', display: { xs: 'none', md: 'block' } }} />
                  <Box sx={{ display: { xs: 'block', md: 'none' }, p: 3 }}>
                    <Typography sx={{ color: muted, fontSize: 14, lineHeight: 1.8, mb: 2.5 }}>Bạn có thể mở tệp trong trình duyệt hoặc tải PDF về điện thoại.</Typography>
                    <Button component="a" href={book.fileUrl} target="_blank" rel="noopener noreferrer" variant="outlined" fullWidth sx={{ borderColor: '#C6CFE2', color: navy, fontWeight: 800, borderRadius: 2, textTransform: 'none', py: 1.2 }}>
                      Mở tệp PDF
                    </Button>
                  </Box>
                </>
              ) : (
                <Box sx={{ p: 4, color: muted, lineHeight: 1.8 }}>Chưa có tệp PDF cho cuốn sách này.</Box>
              )}
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ bgcolor: '#fff', border: `1px solid ${border}`, borderRadius: 3, p: { xs: 3, md: 3.2 } }}>
              <Typography component="h2" sx={{ color: navy, fontSize: 19, fontWeight: 800, mb: 2.5 }}>Cách học cùng đáp án</Typography>
              {[
                ['01', 'Tự làm bài trước', 'Dành thời gian giải đề trước khi mở đáp án.'],
                ['02', 'Đối chiếu từng câu', 'Đánh dấu câu sai và xem lại bước làm.'],
                ['03', 'Thử giải lại', 'Tự làm lại những câu chưa chắc kiến thức.'],
              ].map(([number, title, description], i) => (
                <Stack key={number} direction="row" spacing={1.5} sx={{ pb: i === 2 ? 0 : 2.1, mb: i === 2 ? 0 : 2.1, borderBottom: i === 2 ? 'none' : `1px solid ${border}` }}>
                  <Typography sx={{ color: red, fontWeight: 850, fontSize: 14 }}>{number}</Typography>
                  <Box>
                    <Typography sx={{ color: ink, fontWeight: 800, fontSize: 14.5 }}>{title}</Typography>
                    <Typography sx={{ color: muted, mt: .5, fontSize: 13, lineHeight: 1.7 }}>{description}</Typography>
                  </Box>
                </Stack>
              ))}
            </Box>
            <Button component={Link} href="/tai-lieu-on-luyen#dap-an-sach" startIcon={<ArrowBackRoundedIcon />} sx={{ mt: 2.5, fontWeight: 800, textTransform: 'none', color: navy, px: 0 }}>
              Xem đáp án lớp khác
            </Button>
            <Button component={Link} href="/sach" endIcon={<ArrowForwardRoundedIcon />} sx={{ display: 'flex', justifyContent: 'flex-start', fontWeight: 800, textTransform: 'none', color: navy, px: 0 }}>
              Xem bộ sách Toán 6–9
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}