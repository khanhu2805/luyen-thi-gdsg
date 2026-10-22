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
import { getAnswerBookBySlug } from '@/app/data/answerBooks';
import BookCover from '@/app/components/BookCover';

const navy = '#283878';
const red = '#E82020';
const ink = '#243049';
const muted = '#647087';
const border = '#e2e6ed';
const heading = "'Montserrat', sans-serif";

export default function DapAnPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const book = getAnswerBookBySlug(slug || '');

  if (!book) {
    return (
      <Container maxWidth="sm" sx={{ py: 10, textAlign: 'center' }}>
        <Typography component="h1" sx={{ fontFamily: heading, fontSize: 28, fontWeight: 800, color: navy }}>
          Không tìm thấy tài liệu
        </Typography>
        <Typography sx={{ mt: 1.5, color: muted }}>Đường dẫn này không nằm trong danh sách đáp án hiện có.</Typography>
        <Button component={Link} href="/tai-lieu-on-luyen" startIcon={<ArrowBackRoundedIcon />} sx={{ mt: 3, fontWeight: 800, color: navy, textTransform: 'none' }}>
          Về thư viện học tập
        </Button>
      </Container>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#fbfbf9', pb: { xs: 9, md: 12 }, color: ink }}>
      <Box sx={{ bgcolor: '#fff', borderBottom: `1px solid ${border}` }}>
        <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 5 }, pb: { xs: 5, md: 6 } }}>
          <Breadcrumbs aria-label="Đường dẫn" sx={{ fontSize: 13, mb: 5 }}>
            <MuiLink component={Link} href="/" underline="hover" sx={{ color: muted }}>Trang chủ</MuiLink>
            <MuiLink component={Link} href="/tai-lieu-on-luyen" underline="hover" sx={{ color: muted }}>Tài liệu học tập</MuiLink>
            <Typography sx={{ fontSize: 13, color: ink }}>Toán {book.grade}</Typography>
          </Breadcrumbs>
          <Typography sx={{ color: red, fontWeight: 800, fontSize: 12, letterSpacing: '.1em', mb: 1.5 }}>BỘ SÁCH 36 ĐỀ KIỂM TRA ĐỊNH KỲ</Typography>
          <Typography component="h1" sx={{ fontFamily: heading, color: navy, fontSize: { xs: 32, md: 48 }, fontWeight: 800, letterSpacing: '-.04em', lineHeight: 1.2 }}>
            Đáp án Toán lớp {book.grade}
          </Typography>
          <Typography sx={{ maxWidth: 690, mt: 2, color: muted, lineHeight: 1.85 }}>
            {book.desc} Mở tệp đáp án để đối chiếu sau khi đã tự làm bài.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: { xs: 5, md: 7 } }}>
        <Grid container spacing={{ xs: 4, md: 5 }}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Box sx={{ border: `1px solid ${border}`, bgcolor: '#fff', borderRadius: 2, p: { xs: 3, md: 4 } }}>
              <Stack direction="row" spacing={1.3} sx={{ alignItems: 'center', mb: 3 }}>
                <Box sx={{ width: 46, height: 46, bgcolor: '#f3f4f8', borderRadius: 1.4, display: 'grid', placeItems: 'center' }}>
                  <PictureAsPdfOutlinedIcon sx={{ color: navy }} />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 800, fontSize: 17 }}>Tệp đáp án Toán {book.grade}</Typography>
                  <Typography sx={{ color: muted, fontSize: 13 }}>Định dạng PDF</Typography>
                </Box>
              </Stack>

              {book.fileUrl ? (
                <>
                  <Typography sx={{ color: muted, mb: 2.5, lineHeight: 1.7, fontSize: 14 }}>
                    Tài liệu đã được liên kết. Bạn có thể đọc trực tiếp hoặc mở trong tab mới để lưu về máy.
                  </Typography>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.4}>
                    <Button component="a" href={book.fileUrl} target="_blank" rel="noopener noreferrer" variant="contained" endIcon={<ArrowOutwardRoundedIcon />} sx={{ bgcolor: navy, boxShadow: 'none', borderRadius: 1.3, px: 2.6, py: 1.3, fontWeight: 800, textTransform: 'none', '&:hover': { bgcolor: '#1e2c63', boxShadow: 'none' } }}>
                      Mở file đáp án
                    </Button>
                    <Button component="a" href={book.fileUrl} download variant="outlined" startIcon={<DownloadOutlinedIcon />} sx={{ borderColor: navy, color: navy, borderRadius: 1.3, px: 2.4, py: 1.3, fontWeight: 800, textTransform: 'none' }}>
                      Tải PDF
                    </Button>
                  </Stack>
                  <Box sx={{ mt: 4, display: { xs: 'none', md: 'block' } }}>
                    <Typography sx={{ color: ink, fontSize: 14, fontWeight: 800, mb: 1.5 }}>Xem nhanh tài liệu</Typography>
                    <Box component="iframe" title={`Xem trước đáp án Toán ${book.grade}`} src={book.fileUrl} loading="lazy" sx={{ display: 'block', border: `1px solid ${border}`, width: '100%', height: 640, bgcolor: '#f5f6f8' }} />
                  </Box>
                </>
              ) : (
                <Box sx={{ bgcolor: '#f7f7f4', p: { xs: 2.5, md: 3 }, borderLeft: `3px solid ${red}` }}>
                  <Typography sx={{ fontSize: 16, fontWeight: 800, mb: 1 }}>Tệp đáp án chưa được liên kết trên website</Typography>
                  <Typography sx={{ color: muted, lineHeight: 1.8, fontSize: 14 }}>
                    Danh mục cho lớp {book.grade} đã được tạo, nhưng hiện chưa có đường dẫn PDF trong hệ thống. Khi tệp được tải lên, nút đọc và tải tài liệu sẽ xuất hiện tại đây.
                  </Typography>
                </Box>
              )}
            </Box>
            <Button component={Link} href="/tai-lieu-on-luyen" startIcon={<ArrowBackRoundedIcon />} sx={{ mt: 3, fontWeight: 800, textTransform: 'none', color: navy }}>
              Xem các tài liệu khác
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ bgcolor: '#fff', border: `1px solid ${border}`, borderRadius: 2, p: 3, mb: 2 }}>
              <BookCover src={book.coverUrl} title={book.title} subject={`Toán ${book.grade}`} maxWidth={145} />
              <Typography sx={{ mt: 2, color: muted, fontSize: 13, textAlign: 'center' }}>{book.title}</Typography>
            </Box>
            <Box sx={{ bgcolor: '#fff', border: `1px solid ${border}`, borderRadius: 2, p: 3 }}>
              <Typography sx={{ fontFamily: heading, fontSize: 18, fontWeight: 800, mb: 2.5 }}>Cách đối chiếu đáp án</Typography>
              {[
                ['01', 'Tự hoàn thành đề', 'Cố gắng làm bài đúng thời gian trước khi xem đáp án.'],
                ['02', 'So sánh kết quả', 'Đánh dấu câu sai và ghi lại bước mình còn vướng.'],
                ['03', 'Làm lại câu chưa đúng', 'Đợi một lúc rồi tự giải lại, không chỉ chép lời giải.'],
              ].map(([number, title, desc], index) => (
                <Box key={number} sx={{ display: 'flex', gap: 1.6, pb: index === 2 ? 0 : 2.5, mb: index === 2 ? 0 : 2.5, borderBottom: index === 2 ? 'none' : `1px solid ${border}` }}>
                  <Typography sx={{ color: red, fontWeight: 900, fontSize: 15 }}>{number}</Typography>
                  <Box>
                    <Typography sx={{ fontWeight: 800, mb: 0.5 }}>{title}</Typography>
                    <Typography sx={{ color: muted, lineHeight: 1.65, fontSize: 13 }}>{desc}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
            <Box sx={{ mt: 2, px: 2.8, py: 2.5, border: `1px solid ${border}`, bgcolor: '#f5f6f8', borderRadius: 2 }}>
              <Typography sx={{ fontWeight: 800, fontSize: 14 }}>Bạn đang tìm mua sách?</Typography>
              <MuiLink component={Link} href="/sach" underline="hover" sx={{ display: 'inline-block', mt: 1, color: navy, fontSize: 14, fontWeight: 800 }}>
                Xem bộ sách Toán 6–9 <ArrowOutwardRoundedIcon sx={{ verticalAlign: 'middle', fontSize: 16 }} />
              </MuiLink>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}