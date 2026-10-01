'use client';

import { Box, Typography } from '@mui/material';
import { keyframes } from '@mui/system';

const marquee = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

export default function MarqueeNoti() {
  const message =
    '🎁 ĐĂNG KÝ KHÓA HỌC – TẶNG SÁCH TOÁN 9  •  👥 MỜI BẠN CÙNG HỌC – ƯU ĐÃI 100.000Đ  •  TOÁN  •  NGỮ VĂN  •  TIẾNG ANH  •  MỖI KHÓA 8 BUỔI / 8 TUẦN  •  ';

  return (
    <Box sx={{ overflow: 'hidden', bgcolor: '#ff9800', color: '#fff', py: 1.05 }}>
      <Box
        sx={{
          display: 'flex',
          width: 'max-content',
          animation: `${marquee} 30s linear infinite`,
        }}
      >
        {[0, 1].map((item) => (
          <Typography
            key={item}
            component="span"
            sx={{
              whiteSpace: 'nowrap',
              fontWeight: 900,
              fontFamily: "'Montserrat', sans-serif",
              letterSpacing: 0.35,
              pr: 2,
              fontSize: { xs: '.82rem', md: '.92rem' },
            }}
          >
            {message}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
