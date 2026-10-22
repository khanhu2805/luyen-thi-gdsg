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
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import Link from 'next/link';
import BookCover from '../components/BookCover';
import { answerBooks } from '../data/answerBooks';
import { studyMaterials } from '../data/studyMaterials';

const navy = '#283878';
const red = '#E82020';
const ink = '#26324D';
const muted = '#657086';
const border = '#E6E8EE';
const heading = "'Montserrat', sans-serif";

export default function TaiLieuOnLuyenPage() {
  return (
    <Box sx={{ bgcolor: '#F8F9FC', minHeight: '100vh', color: ink, pb: { xs: 8, md: 12 } }}>
      <Box sx={{ bgcolor: '#fff', borderBottom: `1px solid ${border}` }}>
        <Container maxWidth="lg" sx={{ pt: { xs: 3, md: 4 }, pb: { xs: 5, md: 7 } }}>
          <Breadcrumbs aria-label="Đường dẫn" sx={{ fontSize: 13, mb: { xs: 4, md: 5 } }}>
            <MuiLink component={Link} href="/" color="inherit" underline="hover" sx={{ color: muted }}>Trang chủ</MuiLink>
            <Typography sx={{ color: navy, fontSize: 13, fontWeight: 700 }}>Tài liệu học tập</Typography>
          </Breadcrumbs>

          <Grid container spacing={{ xs: 3, md: 7 }} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Stack direction="row" spacing={1.2} alignItems="center" sx={{ mb: 2 }}>
                <Box sx={{ width: 28, height: 2.5, bgcolor: red }} />
                <Typography sx={{ fontSize: 12, fontWeight: 800, letterSpacing: '.1em', color: red }}>THƯ VIỆN HỌC TẬP</Typography>
              </Stack>
              <Typography component="h1" sx={{ fontFamily: heading, fontWeight: 800, color: navy, letterSpacing: '-.04em', lineHeight: 1.16, fontSize: { xs: 36, md: 52 }, maxWidth: 700 }}>
                Tài liệu và đáp án, tìm nhanh trong một nơi
              </Typography>
              <Typography sx={{ mt: 2.4, color: muted, maxWidth: 690, lineHeight: 1.85, fontSize: { xs: 15, md: 17 } }}>
                Mở tài liệu ôn thi vào lớp 10 hoặc chọn cuốn sách Toán đang học để xem đáp án PDF. Không cần tìm qua nhiều trang.
              </Typography>
              <Stack direction="row" spacing={1.5} sx={{ mt: 3.7, flexWrap: 'wrap', rowGap: 1.2 }}>
                <Button component="a" href="#tai-lieu-on-thi" variant="contained" endIcon={<ArrowForwardRoundedIcon />} sx={{ bgcolor: navy, color: '#fff', boxShadow: 'none', fontWeight: 800, textTransform: 'none', borderRadius: 2, px: 2.8, py: 1.3, '&:hover': { bgcolor: '#1F2C65', boxShadow: 'none' } }}>
                  Tài liệu ôn thi
                </Button>
                <Button component="a" href="#dap-an-sach" variant="outlined" sx={{ borderColor: '#C4CDE1', color: navy, fontWeight: 800, textTransform: 'none', borderRadius: 2, px: 2.4, py: 1.2 }}>
                  Đáp án sách 6–9
                </Button>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ bgcolor: '#F4F6FA', border: `1px solid ${border}`, borderRadius: 3, p: { xs: 2.6, md: 3.5 } }}>
                <Stack direction="row" spacing={1.7} alignItems="center" sx={{ pb: 2.2, mb: 2.2, borderBottom: '1px solid #DDE2EC' }}>
                  <DescriptionOutlinedIcon sx={{ fontSize: 28, color: navy }} />
                  <Box><Typography sx={{ fontSize: 24, color: navy, fontWeight: 850, lineHeight: 1 }}>3 môn</Typography><Typography sx={{ mt: .4, color: muted, fontSize: 13 }}>Tài liệu ôn thi lớp 10</Typography></Box>
                </Stack>
                <Stack direction="row" spacing={1.7} alignItems="center">
                  <AutoStoriesOutlinedIcon sx={{ fontSize: 28, color: red }} />
                  <Box><Typography sx={{ fontSize: 24, color: navy, fontWeight: 850, lineHeight: 1 }}>4 lớp</Typography><Typography sx={{ mt: .4, color: muted, fontSize: 13 }}>Đáp án bộ sách Toán 6–9</Typography></Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ pt: { xs: 6, md: 8 } }}>
        <Box id="tai-lieu-on-thi" component="section" sx={{ scrollMarginTop: '100px' }}>
          <Typography sx={{ color: red, fontSize: 12, letterSpacing: '.08em', fontWeight: 800, mb: 1 }}>01 / TÀI LIỆU THEO MÔN</Typography>
          <Typography component="h2" sx={{ fontFamily: heading, color: navy, fontSize: { xs: 26, md: 32 }, letterSpacing: '-.025em', fontWeight: 800 }}>
            Ôn thi tuyển sinh lớp 10
          </Typography>
          <Typography sx={{ fontSize: 14, lineHeight: 1.75, color: muted, mt: 1, mb: 3.5, maxWidth: 740 }}>
            Chọn môn cần học và đọc ngay tài liệu PDF. Bìa tài liệu sẽ được cập nhật khi có ảnh đúng với từng cuốn.
          </Typography>

          <Grid container spacing={2.5}>
            {studyMaterials.map((book) => (
              <Grid key={book.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <Box sx={{ bgcolor: '#fff', border: `1px solid ${border}`, borderRadius: 3, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', transition: 'box-shadow .2s ease, border-color .2s ease', '&:hover': { borderColor: '#C8CFDE', boxShadow: '0 12px 36px rgba(22,34,62,.07)' } }}>
                  <Box sx={{ bgcolor: '#F3F4F7', p: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 232, borderBottom: `1px solid ${border}` }}>
                    <BookCover src={book.coverUrl} title={book.title} subject={book.name} maxWidth={140} />
                  </Box>
                  <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <Typography sx={{ color: book.accent, fontWeight: 800, fontSize: 12, letterSpacing: '.06em' }}>MÔN {book.name.toUpperCase()}</Typography>
                    <Typography component="h3" sx={{ fontWeight: 800, fontSize: 20, lineHeight: 1.45, color: ink, mt: 1.1 }}>{book.title}</Typography>
                    <Typography sx={{ color: muted, mt: 1.1, fontSize: 14, lineHeight: 1.75, flexGrow: 1 }}>{book.description}</Typography>
                    <Button component="a" href={book.fileUrl} target="_blank" rel="noopener noreferrer" endIcon={<ArrowOutwardRoundedIcon sx={{ fontSize: 18 }} />} sx={{ mt: 3, borderTop: `1px solid ${border}`, borderRadius: 0, justifyContent: 'space-between', textTransform: 'none', color: navy, fontWeight: 800, pt: 2.2, px: 0 }}>
                      Mở tài liệu PDF
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box id="dap-an-sach" component="section" sx={{ mt: { xs: 7, md: 10 }, scrollMarginTop: '100px' }}>
          <Box sx={{ bgcolor: '#ECF0F8', borderRadius: { xs: 3, md: 4 }, p: { xs: 3, md: 5 } }}>
            <Grid container spacing={{ xs: 3.5, md: 5 }}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Typography sx={{ color: red, fontSize: 12, fontWeight: 800, letterSpacing: '.08em', mb: 1 }}>02 / ĐÁP ÁN SÁCH</Typography>
                <Typography component="h2" sx={{ fontFamily: heading, color: navy, fontSize: { xs: 27, md: 32 }, lineHeight: 1.25, fontWeight: 800 }}>
                  Tra cứu đáp án Toán 6–9
                </Typography>
                <Typography sx={{ mt: 1.5, fontSize: 14, color: muted, lineHeight: 1.8 }}>
                  Chọn đúng lớp để xem hướng dẫn giải đi kèm sách 36 đề kiểm tra định kỳ.
                </Typography>
                <Button component={Link} href="/sach" endIcon={<ArrowForwardRoundedIcon />} sx={{ mt: 2, textTransform: 'none', color: navy, fontWeight: 800, px: 0 }}>
                  Xem bộ sách
                </Button>
              </Grid>
              <Grid size={{ xs: 12, md: 8 }}>
                <Grid container spacing={1.8}>
                  {answerBooks.map((book) => (
                    <Grid key={book.grade} size={{ xs: 12, sm: 6 }}>
                      <Box component={Link} href={`/tai-lieu-on-luyen/${book.slug}`} sx={{ textDecoration: 'none', bgcolor: '#fff', color: ink, display: 'flex', gap: 2, alignItems: 'center', border: `1px solid ${border}`, borderRadius: 2.2, p: 2, minHeight: 164, height: '100%', transition: 'border-color .2s ease, transform .2s ease', '&:hover': { borderColor: '#B5C1DE', transform: 'translateY(-2px)' }, '&:focus-visible': { outline: `3px solid ${navy}`, outlineOffset: 2 } }}>
                        <Box sx={{ width: 78, flexShrink: 0 }}>
                          <BookCover src={book.coverUrl} title={book.title} subject={`Toán ${book.grade}`} maxWidth={77} />
                        </Box>
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                          <Typography sx={{ color: red, fontSize: 11, fontWeight: 800, mb: .4 }}>SÁCH TOÁN</Typography>
                          <Typography component="h3" sx={{ fontSize: 19, fontWeight: 850, color: navy, lineHeight: 1.3 }}>Lớp {book.grade}</Typography>
                          <Typography sx={{ color: muted, fontSize: 12.5, mt: 1 }}>{book.fileUrl ? 'Đáp án PDF đã có' : 'Chưa có tệp PDF'}</Typography>
                          <Stack direction="row" spacing={.4} alignItems="center" sx={{ mt: 1.2, color: navy }}>
                            <Typography sx={{ fontSize: 12.5, fontWeight: 800 }}>{book.fileUrl ? 'Xem đáp án' : 'Chi tiết'}</Typography>
                            <ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />
                          </Stack>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Stack direction="row" spacing={1.5} sx={{ mt: 5, alignItems: 'flex-start', maxWidth: 900 }}>
          <DescriptionOutlinedIcon sx={{ color: red, fontSize: 23, mt: .2 }} />
          <Box>
            <Typography sx={{ fontSize: 15, color: ink, fontWeight: 800 }}>Mẹo nhỏ khi dùng đáp án</Typography>
            <Typography sx={{ mt: .5, fontSize: 14, color: muted, lineHeight: 1.8 }}>Làm bài trước, sau đó mở đáp án để đối chiếu. Với bài tự luận, hãy chú ý phương pháp giải chứ không chỉ nhìn vào kết quả.</Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}