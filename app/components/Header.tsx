'use client';
import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { label: 'Trang chủ', path: '/#' },
  // { label: 'Khóa học', path: '/khoa-hoc' },
  { label: 'Đội ngũ', path: '/doi-ngu' },
  { label: 'Tài liệu ôn luyện', path: '/tai-lieu-on-luyen' },
  { label: 'Đề thi thử', path: '/de-thi-thu' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Bắt sự kiện cuộn chuột để tạo viền mờ ảo cho Header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // CSS tùy chỉnh cho các nút điều hướng Desktop
  const navLinkStyle = {
    fontWeight: 700,
    fontFamily: "'Montserrat', sans-serif",
    color: '#1f2a4a',
    textTransform: 'uppercase',
    fontSize: '0.95rem',
    position: 'relative',
    px: 2,
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '0%',
      height: '3px',
      bottom: '6px',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: '#1976d2',
      transition: 'width 0.3s ease-in-out',
      borderRadius: '2px',
    },
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#1976d2',
      '&::after': { width: '60%' },
    },
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={isScrolled ? 4 : 0}
        sx={{
          bgcolor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'white',
          color: '#1f2a4a',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          transition: 'all 0.3s ease-in-out',
          borderBottom: isScrolled ? 'none' : '1px solid #f0f0f0'
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: { xs: 70, md: 80 } }}>

            {/* Logo / Tên thương hiệu */}
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: { xs: 1, md: 0 }, mr: 4 }}>
              <Link href="/#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <Image src="/Logo_cty_sach.png" alt="Logo" width={45} height={45} style={{ marginRight: '12px' }} />
                <Typography
                  variant="h6"
                  noWrap
                  sx={{
                    fontWeight: 800,
                    fontFamily: "'Montserrat', sans-serif",
                    color: '#1a237e',
                    fontSize: { xs: '1rem', md: '1.25rem' },
                    letterSpacing: '-0.5px'
                  }}
                >
                  LUYỆN THI - GIÁO DỤC SÀI GÒN
                </Typography>
              </Link>
            </Box>

            {/* Menu Desktop */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, gap: 1, justifyContent: 'center' }}>
              {navItems.map((item) => (
                <Button key={item.label} component={Link} href={item.path} sx={navLinkStyle}>
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* CTA Button Desktop */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              <Button
                variant="contained"
                component={Link}
                href="/#form-dang-ky"
                sx={{
                  borderRadius: '50px',
                  px: 4,
                  py: 1.2,
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 800,
                  background: 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)',
                  boxShadow: '0 4px 15px rgba(25, 118, 210, 0.3)',
                  textTransform: 'uppercase',
                  fontSize: '0.95rem',
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(25, 118, 210, 0.4)' }
                }}
              >
                Đăng ký ngay
              </Button>
            </Box>

            {/* Nút Hamburger cho Mobile */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                onClick={handleDrawerToggle}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>

      {/* Menu Mobile Trượt (Drawer) */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280, p: 2 },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Image src="/Logo_cty_sach.png" alt="Logo" width={40} height={40} />
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component={Link}
                href={item.path}
                onClick={handleDrawerToggle}
                sx={{ borderRadius: 2, mb: 1 }}
              >
                <ListItemText
                  primary={item.label}
                  sx={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#1f2a4a' }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding sx={{ mt: 3 }}>
            <Button
              fullWidth
              component={Link}
              href="/#form-dang-ky"
              variant="contained"
              sx={{
                borderRadius: '50px', py: 1.5, fontFamily: "'Montserrat', sans-serif", fontWeight: 800,
                background: 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)',
              }}
            >
              Đăng ký ngay
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}