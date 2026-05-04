import React from 'react'
import { Box, keyframes } from '@mui/material';

type Props = {}

const gradientShimmer = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const marquee = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const fontBody = "'Nunito', sans-serif";

const MarqueeNoti = (props: Props) => {
  return (
    <Box sx={{
        background: 'linear-gradient(90deg, #d32f2f, #f44336, #d32f2f)',
        backgroundSize: '200% 200%', animation: `${gradientShimmer} 3s ease infinite`,
        color: 'white', py: 1.5, overflow: 'hidden', whiteSpace: 'nowrap',
        boxShadow: '0 4px 15px rgba(211, 47, 47, 0.4)', position: 'relative', zIndex: 50
      }}>
        <Box sx={{
          display: 'inline-block', animation: `${marquee} 20s linear infinite`,
          fontWeight: 800, fontFamily: fontBody, fontSize: '1rem', letterSpacing: 1
        }}>
          ⚡ ƯU ĐÃI ĐẶC BIỆT: TẶNG NGAY VOUCHER GIẢM HỌC PHÍ CHO CÁC HỌC VIÊN ĐĂNG KÝ SỚM! LIÊN HỆ NHẬN TƯ VẤN NGAY HÔM NAY! ⚡        </Box>
      </Box>
  )
}

export default MarqueeNoti