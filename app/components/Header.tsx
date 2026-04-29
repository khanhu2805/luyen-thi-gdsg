'use client';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <AppBar position="sticky" elevation={1} sx={{ bgcolor: 'white', color: '#1f2a4a' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo / Tên thương hiệu */}
          <Image src="/Logo_cty_sach.png" alt="Logo" width={40} height={40} className="mr-2" />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, fontWeight: 800, fontFamily: 'montserrat' }}
            className="text-brand-primary"
          >
            <Link href="/">LUYỆN THI - GIÁO DỤC SÀI GÒN</Link>
          </Typography>

          {/* Menu Desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
            <Button color="inherit" component={Link} href="/khoa-hoc" sx={{ fontWeight: 600 }}>
              Khóa học
            </Button>
            {/* <Button color="inherit" component={Link} href="/thi-thu" sx={{ fontWeight: 600 }}>
              Thi thử ĐGNL
            </Button> */}
            <Button color="inherit" component={Link} href="/doi-ngu" sx={{ fontWeight: 600 }}>
              Đội ngũ
            </Button>
            <Button color="inherit" component={Link} href="/tai-lieu-on-luyen" sx={{ fontWeight: 600 }}>
              Tài liệu ôn luyện
            </Button>
            <Button color="inherit" component={Link} href="/de-thi-thu" sx={{ fontWeight: 600 }}>
              Đề thi thử
            </Button>
            {/* <Button 
              variant="contained" 
              sx={{ bgcolor: '#1f2a4a', '&:hover': { bgcolor: '#111827' }, borderRadius: 2, px: 3 }}
            >
              Đăng nhập
            </Button> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}