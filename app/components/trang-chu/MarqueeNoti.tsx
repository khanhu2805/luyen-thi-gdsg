'use client';

import { Box, Typography } from '@mui/material';
import { keyframes } from '@mui/system';
import { ENROLLMENT_OPEN_DATE } from '../../data/enrollment';

const marquee = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

export default function MarqueeNoti() {
  const message = `KHAI GIẢNG ${ENROLLMENT_OPEN_DATE}  •  TOÁN  •  NGỮ VĂN  •  TIẾNG ANH  •  MỖI KHÓA 8 BUỔI / 8 TUẦN  •  ĐĂNG KÝ TƯ VẤN & CHỌN CA HỌC TRỰC TUYẾN  •  `;

  return (
    <Box sx={{ overflow: 'hidden', bgcolor: '#ff9800', color: '#fff', py: 1.1 }}>
      <Box
        sx={{
          display: 'flex',
          width: 'max-content',
          animation: `${marquee} 26s linear infinite`,
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
              letterSpacing: 0.4,
              pr: 2,
            }}
          >
            {message}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
