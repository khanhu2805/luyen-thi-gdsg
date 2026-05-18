'use client';

import { Box, Tooltip, Typography } from '@mui/material';
import { keyframes } from '@mui/system';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

// Hiệu ứng tỏa sáng cho Zalo (Màu xanh Zalo)
const pulseGlowZalo = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(0, 104, 255, 0.7); }
  70% { box-shadow: 0 0 0 15px rgba(0, 104, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(0, 104, 255, 0); }
`;

// Hiệu ứng tỏa sáng cho Facebook (Màu xanh Facebook)
const pulseGlowFb = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(24, 119, 242, 0.7); }
  70% { box-shadow: 0 0 0 15px rgba(24, 119, 242, 0); }
  100% { box-shadow: 0 0 0 0 rgba(24, 119, 242, 0); }
`;

export default function FloatingContactButtons() {
  const zaloOALink = "https://zalo.me/1357593207866827845"; // Thay ID Zalo của bạn
  const fbMessengerLink = "https://www.facebook.com/profile.php?id=61589419747743"; // Thay link Messenger của bạn

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: 40, md: 50 },
        right: { xs: 20, md: 30 },
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column', // Xếp dọc 2 nút
        gap: 2.5, // Khoảng cách giữa 2 nút
      }}
    >
      {/* ================= NÚT FACEBOOK ================= */}
      <Tooltip title="Chat qua Messenger" placement="left" arrow>
        <Box
          component="a"
          href={fbMessengerLink}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: 'flex',
            width: { xs: 55, md: 65 },
            height: { xs: 55, md: 65 },
            borderRadius: '50%',
            bgcolor: '#1877F2', // Xanh đặc trưng Facebook
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            animation: `${pulseGlowFb} 2s infinite`,
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.1) rotate(-5deg)',
            }
          }}
        >
          <FacebookRoundedIcon sx={{ color: 'white', fontSize: { xs: 35, md: 42 } }} />
        </Box>
      </Tooltip>

      {/* ================= NÚT ZALO ================= */}
      <Tooltip title="Chat với tư vấn viên" placement="left" arrow>
        <Box
          component="a"
          href={zaloOALink}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: 'flex',
            width: { xs: 55, md: 65 },
            height: { xs: 55, md: 65 },
            borderRadius: '50%',
            bgcolor: '#0068ff', // Xanh đặc trưng Zalo
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            animation: `${pulseGlowZalo} 2s infinite`,
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.1) rotate(5deg)',
            }
          }}
        >
          <Typography sx={{ color: 'white', fontWeight: 900, fontSize: '1.2rem', fontFamily: "'Montserrat', sans-serif" }}>
            Zalo
          </Typography>
        </Box>
      </Tooltip>
      
    </Box>
  );
}