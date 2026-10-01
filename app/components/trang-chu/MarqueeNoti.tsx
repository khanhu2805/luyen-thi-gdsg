'use client';

import { Box, Stack, Typography } from '@mui/material';
import { keyframes } from '@mui/system';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';

const marquee = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

export default function MarqueeNoti() {
  const message =
    'ĐĂNG KÝ KHÓA HỌC – TẶNG SÁCH TOÁN 9  •  MỜI BẠN CÙNG HỌC – ƯU ĐÃI 100.000Đ  •  TOÁN · NGỮ VĂN · TIẾNG ANH  •  LỘ TRÌNH 8 BUỔI / 8 TUẦN  •  ';

  return (
    <Box
      sx={{
        overflow: 'hidden',
        color: 'white',
        py: 0.95,
        background: 'linear-gradient(90deg, #ff8a1f, #f56c2a, #ff8a1f)',
        backgroundSize: '200% 100%',
        animation: 'gradient-pan 10s ease infinite',
        borderBottom: '1px solid rgba(255,255,255,.18)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: 'max-content',
          animation: `${marquee} 32s linear infinite`,
          '@media (prefers-reduced-motion: reduce)': {
            animation: 'none',
          },
        }}
      >
        {[0, 1].map((item) => (
          <Stack
            key={item}
            direction="row"
            spacing={1}
            sx={{ alignItems: 'center', pr: 2 }}
          >
            <AutoAwesomeRoundedIcon sx={{ fontSize: 17, color: '#fff3cd' }} />
            <Typography
              component="span"
              sx={{
                whiteSpace: 'nowrap',
                fontWeight: 900,
                fontFamily: "'Montserrat', sans-serif",
                letterSpacing: 0.35,
                fontSize: { xs: '.78rem', md: '.87rem' },
              }}
            >
              {message}
            </Typography>
          </Stack>
        ))}
      </Box>
    </Box>
  );
}
