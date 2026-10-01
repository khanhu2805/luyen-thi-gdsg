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
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Khóa học', path: '/khoa-hoc' },
  { label: 'Đội ngũ', path: '/doi-ngu' },
  { label: 'Sách', path: '/sach' },
  { label: 'Tài liệu', path: '/tai-lieu-on-luyen' },
  { label: 'Ưu đãi', path: '/chinh-sach' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          color: '#102044',
          bgcolor: isScrolled ? 'rgba(255,255,255,.90)' : 'rgba(255,255,255,.96)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          borderBottom: isScrolled
            ? '1px solid rgba(193,207,231,.72)'
            : '1px solid rgba(224,231,242,.86)',
          boxShadow: isScrolled ? '0 10px 32px rgba(15,48,105,.08)' : 'none',
          transition: 'all .28s ease',
          zIndex: 1300,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: { xs: 68, md: 78 }, gap: 2 }}>
            <Link
              href="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                minWidth: 0,
              }}
            >
              <Box
                sx={{
                  width: { xs: 42, md: 48 },
                  height: { xs: 42, md: 48 },
                  borderRadius: 3,
                  bgcolor: 'white',
                  display: 'grid',
                  placeItems: 'center',
                  boxShadow: '0 8px 22px rgba(15,48,105,.10)',
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/Logo_cty_sach.png"
                  alt="Logo Giáo dục Sài Gòn"
                  width={42}
                  height={42}
                />
              </Box>

              <Box sx={{ ml: 1.25, display: { xs: 'none', sm: 'block' }, minWidth: 0 }}>
                <Typography
                  sx={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 900,
                    color: '#102044',
                    fontSize: { sm: '.88rem', lg: '1rem' },
                    lineHeight: 1.1,
                    whiteSpace: 'nowrap',
                  }}
                >
                  LUYỆN THI
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 800,
                    color: '#2f6fed',
                    fontSize: { sm: '.72rem', lg: '.8rem' },
                    lineHeight: 1.2,
                    whiteSpace: 'nowrap',
                  }}
                >
                  GIÁO DỤC SÀI GÒN
                </Typography>
              </Box>
            </Link>

            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                flexGrow: 1,
                justifyContent: 'center',
              }}
            >
              <Stack
                direction="row"
                spacing={0.35}
                sx={{
                  p: 0.5,
                  borderRadius: 999,
                  bgcolor: '#f4f7fc',
                  border: '1px solid #e6edf7',
                }}
              >
                {navItems.map((item) => {
                  const active = isActive(item.path);
                  return (
                    <Button
                      key={item.label}
                      component={Link}
                      href={item.path}
                      sx={{
                        minWidth: 0,
                        px: { md: 1.25, lg: 1.55 },
                        py: 0.8,
                        borderRadius: 999,
                        textTransform: 'none',
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 800,
                        fontSize: { md: '.76rem', lg: '.84rem' },
                        color: active ? 'white' : '#4b5d7e',
                        bgcolor: active ? '#153a8a' : 'transparent',
                        boxShadow: active ? '0 6px 16px rgba(21,58,138,.18)' : 'none',
                        '&:hover': {
                          bgcolor: active ? '#153a8a' : '#eaf1fb',
                          color: active ? 'white' : '#153a8a',
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  );
                })}
              </Stack>
            </Box>

            <Button
              component={Link}
              href="/#form-dang-ky"
              variant="contained"
              endIcon={<ArrowForwardRoundedIcon />}
              className="shine-button"
              sx={{
                display: { xs: 'none', md: 'inline-flex' },
                borderRadius: 999,
                px: 2.5,
                py: 1.05,
                textTransform: 'none',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                whiteSpace: 'nowrap',
                bgcolor: '#ff8a1f',
                boxShadow: '0 10px 24px rgba(255,138,31,.24)',
                '&:hover': {
                  bgcolor: '#f57c00',
                  boxShadow: '0 12px 28px rgba(255,138,31,.30)',
                },
              }}
            >
              Nhận tư vấn
            </Button>

            <IconButton
              onClick={() => setMobileOpen(true)}
              sx={{
                ml: 'auto',
                display: { xs: 'inline-flex', md: 'none' },
                bgcolor: '#f2f6fd',
                color: '#153a8a',
                '&:hover': { bgcolor: '#e8effa' },
              }}
              aria-label="Mở menu"
            >
              <MenuRoundedIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: 'min(88vw, 340px)',
              bgcolor: '#f8fbff',
              backgroundImage:
                'radial-gradient(circle at 100% 0%, rgba(47,111,237,.10), transparent 35%)',
            },
          },
        }}
      >
        <Box sx={{ p: 2.5 }}>
          <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Stack direction="row" spacing={1.2} sx={{ alignItems: 'center' }}>
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: 2.8,
                  bgcolor: 'white',
                  display: 'grid',
                  placeItems: 'center',
                  boxShadow: '0 8px 20px rgba(15,48,105,.10)',
                }}
              >
                <Image src="/Logo_cty_sach.png" alt="Logo" width={38} height={38} />
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 900, fontFamily: "'Montserrat', sans-serif", color: '#102044' }}>
                  LUYỆN THI
                </Typography>
                <Typography sx={{ fontWeight: 800, fontSize: '.76rem', color: '#2f6fed' }}>
                  GIÁO DỤC SÀI GÒN
                </Typography>
              </Box>
            </Stack>

            <IconButton
              onClick={() => setMobileOpen(false)}
              aria-label="Đóng menu"
              sx={{ bgcolor: 'white', border: '1px solid #e7edf7' }}
            >
              <CloseRoundedIcon />
            </IconButton>
          </Stack>

          <List sx={{ py: 1 }}>
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <ListItem key={item.label} disablePadding sx={{ mb: 0.6 }}>
                  <ListItemButton
                    component={Link}
                    href={item.path}
                    onClick={() => setMobileOpen(false)}
                    sx={{
                      borderRadius: 3,
                      py: 1.25,
                      bgcolor: active ? '#eaf2ff' : 'transparent',
                      color: active ? '#153a8a' : '#3f506f',
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      slotProps={{
                        primary: {
                          sx: {
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: active ? 900 : 800,
                          },
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>

          <Box
            sx={{
              mt: 2,
              p: 2.2,
              borderRadius: 3.5,
              bgcolor: '#102a66',
              color: 'white',
            }}
          >
            <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900 }}>
              Cần hỗ trợ chọn lớp?
            </Typography>
            <Typography variant="body2" sx={{ mt: 0.6, opacity: 0.82, lineHeight: 1.6 }}>
              Chọn môn quan tâm, đội ngũ tư vấn sẽ hỗ trợ gia đình.
            </Typography>
            <Button
              component={Link}
              href="/#form-dang-ky"
              onClick={() => setMobileOpen(false)}
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                borderRadius: 999,
                py: 1.15,
                textTransform: 'none',
                fontWeight: 900,
                bgcolor: '#ff8a1f',
                '&:hover': { bgcolor: '#f57c00' },
              }}
            >
              Đăng ký tư vấn
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
