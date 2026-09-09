'use client';

import { useEffect, useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'next/link';

const navItems = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Khóa học & lịch học', path: '/khoa-hoc' },
  { label: 'Đội ngũ', path: '/doi-ngu' },
  { label: 'Tin tức', path: '/tin-tuc' },
  { label: 'Tài liệu ôn luyện', path: '/tai-lieu-on-luyen' },
  { label: 'Đề thi thử', path: '/de-thi-thu' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkStyle = {
    fontWeight: 800,
    fontFamily: "'Montserrat', sans-serif",
    color: '#1f2a4a',
    textTransform: 'none',
    fontSize: '0.9rem',
    px: 1.5,
    whiteSpace: 'nowrap',
    '&:hover': { color: '#1976d2', bgcolor: 'transparent' },
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={isScrolled ? 4 : 0}
        sx={{
          bgcolor: isScrolled ? 'rgba(255,255,255,.93)' : 'white',
          color: '#1f2a4a',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          borderBottom: isScrolled ? 'none' : '1px solid #edf0f4',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: { xs: 70, md: 80 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: { xs: 1, md: 0 }, mr: 2.5 }}>
              <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <Image src="/Logo_cty_sach.png" alt="Logo Giáo dục Sài Gòn" width={44} height={44} />
                <Typography
                  sx={{
                    ml: 1.2,
                    fontWeight: 900,
                    fontFamily: "'Montserrat', sans-serif",
                    color: '#1a237e',
                    fontSize: { xs: '.9rem', lg: '1.08rem' },
                    display: { xs: 'none', sm: 'block' },
                  }}
                >
                  LUYỆN THI - GIÁO DỤC SÀI GÒN
                </Typography>
              </Link>
            </Box>

            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                flexGrow: 1,
                justifyContent: 'center',
              }}
            >
              {navItems.map((item) => (
                <Button key={item.label} component={Link} href={item.path} sx={navLinkStyle}>
                  {item.label}
                </Button>
              ))}
            </Box>

            <Button
              component={Link}
              href="/#form-dang-ky"
              variant="contained"
              sx={{
                display: { xs: 'none', md: 'inline-flex' },
                borderRadius: 999,
                px: 2.7,
                fontWeight: 900,
                whiteSpace: 'nowrap',
              }}
            >
              Đăng ký
            </Button>

            <IconButton
              onClick={() => setMobileOpen(true)}
              sx={{ display: { xs: 'inline-flex', md: 'none' } }}
              aria-label="Mở menu"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <Box sx={{ width: 300, p: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Image src="/Logo_cty_sach.png" alt="Logo" width={42} height={42} />
            <IconButton onClick={() => setMobileOpen(false)} aria-label="Đóng menu">
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.path}
                  onClick={() => setMobileOpen(false)}
                  sx={{ borderRadius: 2 }}
                >
                  <ListItemText
                    primary={item.label}
                    slotProps={{
                      primary: {
                        sx: {
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 800,
                        },
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Button
            component={Link}
            href="/#form-dang-ky"
            onClick={() => setMobileOpen(false)}
            fullWidth
            variant="contained"
            sx={{ mt: 2, borderRadius: 999, py: 1.3, fontWeight: 900 }}
          >
            Đăng ký ngay
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
