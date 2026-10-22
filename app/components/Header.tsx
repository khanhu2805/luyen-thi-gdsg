'use client';

import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navy = '#283878';
const red = '#E82020';
const navItems = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Khóa học', path: '/khoa-hoc' },
  { label: 'Đội ngũ', path: '/doi-ngu' },
  { label: 'Sách', path: '/sach' },
  { label: 'Tài liệu', path: '/tai-lieu-on-luyen' },
  { label: 'Đề thi thử', path: '/de-thi-thu' },
  { label: 'Chính sách', path: '/chinh-sach' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = (path: string) => (path === '/' ? pathname === '/' : pathname.startsWith(path));

  return (
    <>
      <AppBar position="sticky" elevation={0} sx={{ bgcolor: '#fff', color: '#243049', borderBottom: '1px solid #e2e6ed', zIndex: 1300 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: { xs: 66, md: 78 }, gap: 2 }}>
            <Box component={Link} href="/" sx={{ display: 'flex', alignItems: 'center', gap: 1.3, textDecoration: 'none', color: navy, flexShrink: 0 }}>
              <Image src="/Logo_cty_sach.png" width={46} height={46} alt="Logo Giáo dục Sài Gòn" style={{ objectFit: 'contain' }} />
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Typography sx={{ fontWeight: 900, fontSize: 13, letterSpacing: '.04em', lineHeight: 1.2 }}>LUYỆN THI</Typography>
                <Typography sx={{ color: red, fontWeight: 800, fontSize: 11, letterSpacing: '.04em', lineHeight: 1.35 }}>GIÁO DỤC SÀI GÒN</Typography>
              </Box>
            </Box>
            <Stack direction="row" sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', justifyContent: 'center', gap: 2.6, flexGrow: 1 }}>
              {navItems.map((item) => (
                <Box component={Link} key={item.path} href={item.path} aria-current={active(item.path) ? 'page' : undefined} sx={{ textDecoration: 'none', fontWeight: active(item.path) ? 900 : 700, fontSize: 13.5, color: active(item.path) ? navy : '#59657a', py: 3.15, borderBottom: active(item.path) ? `2px solid ${red}` : '2px solid transparent', whiteSpace: 'nowrap', '&:hover': { color: navy } }}>
                  {item.label}
                </Box>
              ))}
            </Stack>
            <Button component={Link} href="/#form-dang-ky" variant="contained" endIcon={<ArrowOutwardRoundedIcon sx={{ fontSize: 17 }} />} sx={{ display: { xs: 'none', lg: 'inline-flex' }, ml: 'auto', bgcolor: navy, textTransform: 'none', borderRadius: 1.2, fontWeight: 800, fontSize: 13, boxShadow: 'none', px: 2.1, py: 1.1, whiteSpace: 'nowrap', '&:hover': { bgcolor: '#1e2c63', boxShadow: 'none' } }}>
              Liên hệ tư vấn
            </Button>
            <IconButton aria-label="Mở menu" onClick={() => setMobileOpen(true)} sx={{ display: { xs: 'inline-flex', lg: 'none' }, ml: 'auto', color: navy }}><MenuRoundedIcon /></IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)} slotProps={{ paper: { sx: { width: 'min(88vw, 360px)', bgcolor: '#fff' } } }}>
        <Box sx={{ px: 3, py: 2.5 }}>
          <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 2.5 }}>
            <Typography sx={{ fontWeight: 900, color: navy }}>Mục lục</Typography>
            <IconButton aria-label="Đóng menu" onClick={() => setMobileOpen(false)}><CloseRoundedIcon /></IconButton>
          </Stack>
          <List disablePadding>
            {navItems.map((item) => (
              <ListItemButton key={item.path} component={Link} href={item.path} onClick={() => setMobileOpen(false)} sx={{ borderBottom: '1px solid #e9ecf1', px: 0.5, py: 1.6, color: active(item.path) ? navy : '#39455d', bgcolor: 'transparent', '&:hover': { bgcolor: '#f5f6f9' } }}>
                <ListItemText primary={item.label} slotProps={{ primary: { sx: { fontWeight: active(item.path) ? 900 : 700 } } }} />
                {active(item.path) && <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: red }} />}
              </ListItemButton>
            ))}
          </List>
          <Button component={Link} href="/#form-dang-ky" onClick={() => setMobileOpen(false)} fullWidth variant="contained" sx={{ mt: 3, bgcolor: navy, textTransform: 'none', borderRadius: 1, fontWeight: 800, py: 1.3 }}>
            Liên hệ tư vấn
          </Button>
        </Box>
      </Drawer>
    </>
  );
}