'use client';
import { Box, Container, Typography, Grid, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#f3f4f6', py: 6, borderTop: '1px solid #e5e7eb' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          
          {/* Đã xóa 'item' và gộp xs, md vào prop 'size' */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, fontFamily: 'montserrat' }} className='text-brand-primary'>
              LUYỆN THI - GIÁO DỤC SÀI GÒN
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Nền tảng học tập và luyện thi thông minh. <br/>Tối ưu điểm số cho học sinh chinh phục mục tiêu Đại học và trường Chuyên.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }} className='text-brand-primary'>Liên kết</Typography>
            <Typography variant='body2' component={Link} href="/khoa-hoc" color="textPrimary" sx={{ display: 'block', mb: 1, textDecoration: 'none' }}>
              Khóa học
            </Typography>
            <Typography variant='body2' component={Link} href="/de-thi-thu" color="textPrimary" sx={{ display: 'block', textDecoration: 'none' }}>
              Luyện đề
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }} className='text-brand-primary'>Hỗ trợ</Typography>
            <Typography variant="body2" color="textPrimary">Email: luyenthigdsg@gmail.com</Typography>
          </Grid>

        </Grid>
        
        <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 5 }}>
          © {new Date().getFullYear()} Luyện thi Giáo dục Sài Gòn.
        </Typography>
      </Container>
    </Box>
  );
}