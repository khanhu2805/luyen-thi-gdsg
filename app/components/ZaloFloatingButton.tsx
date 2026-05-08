'use client';

import { Box, Tooltip } from '@mui/material';
import { keyframes } from '@mui/system';
import Image from 'next/image';
import { Typography } from '@mui/material';

const pulseGlow = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(0, 104, 255, 0.7); }
  70% { box-shadow: 0 0 0 15px rgba(0, 104, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(0, 104, 255, 0); }
`;

export default function ZaloFloatingButton() {
  const zaloOALink = "https://zalo.me/1357593207866827845"; // Thay ID của bạn vào đây

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: 20, md: 30 },
        right: { xs: 20, md: 30 },
        zIndex: 9999,
      }}
    >
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
            bgcolor: '#0068ff',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            animation: `${pulseGlow} 2s infinite`,
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.1) rotate(5deg)',
            }
          }}
        >
           {/* Bạn có thể thay bằng icon Zalo thực tế */}
          <Typography sx={{ color: 'white', fontWeight: 900, fontSize: '1.2rem', fontFamily: "'Montserrat', sans-serif" }}>
            Zalo
          </Typography>
        </Box>
      </Tooltip>
    </Box>
  );
}