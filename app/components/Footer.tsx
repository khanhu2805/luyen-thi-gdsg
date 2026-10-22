'use client';

import { Box, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

const groups = [
  {
    name: 'Tìm hiểu',
    links: [
      ['Khóa học', '/khoa-hoc'],
      ['Đội ngũ giáo viên', '/doi-ngu'],
      ['Chính sách', '/chinh-sach'],
      ['Đăng ký tư vấn', '/#form-dang-ky'],
    ],
  },
  {
    name: 'Học tập',
    links: [
      ['Sách luyện tập', '/sach'],
      ['Tài liệu học tập', '/tai-lieu-on-luyen'],
      ['Đề thi thử', '/de-thi-thu'],
      ['Tin tức', '/tin-tuc'],
    ],
  },
];

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#1d2b58', color: '#edf0f8', borderTop: '4px solid #E82020' }}>
      <Container maxWidth="lg" sx={{ pt: { xs: 6, md: 7 }, pb: 3.5 }}>
        <Grid container spacing={{ xs: 4, md: 6 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack direction="row" spacing={1.6} sx={{ alignItems: 'center' }}>
              <Box sx={{ bgcolor: '#fff', borderRadius: 1.5, width: 58, height: 58, display: 'grid', placeItems: 'center' }}>
                <Image src="/Logo_cty_sach.png" width={48} height={48} alt="Logo Giáo dục Sài Gòn" />
              </Box>
              <Box>
                <Typography sx={{ fontSize: 16, fontWeight: 900 }}>LUYỆN THI</Typography>
                <Typography sx={{ fontSize: 13, fontWeight: 800, color: '#c6d3fc' }}>GIÁO DỤC SÀI GÒN</Typography>
              </Box>
            </Stack>
            <Typography sx={{ mt: 2.3, color: '#cdd5e8', lineHeight: 1.8, fontSize: 14, maxWidth: 375 }}>
              Thông tin về khóa học, sách, đề luyện và tài liệu để học sinh thuận tiện ôn tập tại nhà.
            </Typography>
          </Grid>
          {groups.map((group) => (
            <Grid key={group.name} size={{ xs: 6, sm: 4, md: 2 }}>
              <Typography sx={{ fontWeight: 800, fontSize: 15, mb: 2 }}>{group.name}</Typography>
              <Stack spacing={1.5}>
                {group.links.map(([label, href]) => (
                  <Box component={Link} key={href} href={href} sx={{ color: '#cdd5e8', textDecoration: 'none', fontSize: 13.5, lineHeight: 1.5, '&:hover': { color: 'white', textDecoration: 'underline' } }}>{label}</Box>
                ))}
              </Stack>
            </Grid>
          ))}
          <Grid size={{ xs: 12, sm: 4, md: 3 }}>
            <Typography sx={{ fontWeight: 800, fontSize: 15, mb: 2 }}>Liên hệ</Typography>
            <Stack spacing={1.6}>
              <Box component="a" href="mailto:luyenthigdsg@gmail.com" sx={{ color: '#cdd5e8', textDecoration: 'none', fontSize: 13.5, overflowWrap: 'anywhere' }}>luyenthigdsg@gmail.com</Box>
              <Box component="a" href="https://www.facebook.com/profile.php?id=61589419747743" target="_blank" rel="noopener noreferrer" sx={{ color: '#cdd5e8', textDecoration: 'none', fontSize: 13.5 }}>Facebook Luyện thi GDSG ↗</Box>
              <Box component="a" href="https://zalo.me/1357593207866827845" target="_blank" rel="noopener noreferrer" sx={{ color: '#cdd5e8', textDecoration: 'none', fontSize: 13.5 }}>Zalo tư vấn ↗</Box>
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ borderColor: 'rgba(255,255,255,.18)', mt: 5, mb: 3 }} />
        <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ justifyContent: 'space-between', gap: 1 }}>
          <Typography sx={{ fontSize: 12.5, color: '#b2bdd7' }}>© {new Date().getFullYear()} Luyện thi Giáo dục Sài Gòn.</Typography>
          <Typography sx={{ fontSize: 12.5, color: '#b2bdd7' }}>Tài liệu được sử dụng phục vụ học tập và ôn luyện.</Typography>
        </Stack>
      </Container>
    </Box>
  );
}