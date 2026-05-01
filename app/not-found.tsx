'use client';

import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { keyframes } from '@mui/system';
import Link from 'next/link';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';

// --- ANIMATIONS ---
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

// --- FONTS ---
const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

export default function NotFound() {
  return (
    <Box sx={{ 
      fontFamily: fontBody, 
      bgcolor: '#f8fafc', 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Các icon bay bay nền mờ */}
      <Box sx={{ position: 'absolute', top: '15%', left: '15%', fontSize: '4rem', opacity: 0.1, animation: `${float} 6s infinite` }}>📐</Box>
      <Box sx={{ position: 'absolute', bottom: '20%', right: '15%', fontSize: '5rem', opacity: 0.1, animation: `${float} 8s infinite reverse` }}>📚</Box>
      <Box sx={{ position: 'absolute', top: '30%', right: '20%', fontSize: '3rem', opacity: 0.1, animation: `${float} 5s infinite` }}>✍️</Box>

      <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 10, animation: `${fadeInUp} 0.8s ease-out` }}>
        
        {/* Số 404 to */}
        <Typography 
          variant="h1" 
          sx={{ 
            fontFamily: fontHeader, 
            fontWeight: 900, 
            fontSize: { xs: '6rem', md: '10rem' },
            color: '#1976d2',
            mb: 1
          }}
        >
          404
        </Typography>

        {/* Lời nhắn đơn giản */}
        <Typography variant="h4" sx={{ fontFamily: fontHeader, fontWeight: 800, color: '#1a237e', mb: 2 }}>
          Ôi không! Không tìm thấy trang này...
        </Typography>
        
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', mb: 5, maxWidth: 500, mx: 'auto', lineHeight: 1.6 }}>
          Đường link bạn vừa truy cập không tồn tại hoặc đã bị xóa. Bạn quay lại trang chủ để tiếp tục học nhé!
        </Typography>

        {/* Nút bấm */}
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'center' }}>
          <Button 
            component={Link} 
            href="/"
            variant="contained" 
            size="large"
            startIcon={<HomeRoundedIcon />}
            sx={{ 
              borderRadius: 50, px: 4, py: 1.5, 
              fontFamily: fontHeader, fontWeight: 700, fontSize: '1rem',
              bgcolor: '#1976d2',
              boxShadow: '0 4px 14px rgba(25, 118, 210, 0.3)',
              '&:hover': { transform: 'translateY(-2px)' },
              transition: 'all 0.2s'
            }}
          >
            Về Trang Chủ
          </Button>

          <Button 
            component={Link} 
            href="/khoa-hoc"
            variant="outlined" 
            size="large"
            startIcon={<AutoStoriesRoundedIcon />}
            sx={{ 
              borderRadius: 50, px: 4, py: 1.5, 
              fontFamily: fontHeader, fontWeight: 700, fontSize: '1rem',
              borderWidth: 2, borderColor: '#1976d2', color: '#1976d2',
              bgcolor: 'white',
              '&:hover': { borderWidth: 2, transform: 'translateY(-2px)', bgcolor: '#f5f9ff' },
              transition: 'all 0.2s'
            }}
          >
            Xem Khóa Học
          </Button>
        </Stack>

      </Container>
    </Box>
  );
}