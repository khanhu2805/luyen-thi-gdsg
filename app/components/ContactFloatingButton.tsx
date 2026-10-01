'use client';

import { Box, Tooltip, Typography } from '@mui/material';
import { keyframes } from '@mui/system';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';

const pulseGlow = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(47, 111, 237, .32); }
  70% { box-shadow: 0 0 0 13px rgba(47, 111, 237, 0); }
  100% { box-shadow: 0 0 0 0 rgba(47, 111, 237, 0); }
`;

export default function FloatingContactButtons() {
  const zaloOALink = 'https://zalo.me/1357593207866827845';
  const facebookLink = 'https://www.facebook.com/profile.php?id=61589419747743';

  const buttonSx = {
    width: { xs: 52, md: 58 },
    height: { xs: 52, md: 58 },
    borderRadius: 3.3,
    display: 'grid',
    placeItems: 'center',
    color: 'white',
    textDecoration: 'none',
    boxShadow: '0 12px 28px rgba(15,48,105,.18)',
    border: '2px solid rgba(255,255,255,.92)',
    transition: 'transform .25s ease, box-shadow .25s ease',
    '&:hover': {
      transform: 'translateY(-4px) scale(1.04)',
      boxShadow: '0 18px 34px rgba(15,48,105,.24)',
    },
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: 22, md: 30 },
        right: { xs: 16, md: 24 },
        zIndex: 1200,
        display: 'flex',
        flexDirection: 'column',
        gap: 1.25,
      }}
    >
      <Tooltip title="Facebook Luyện thi GDSG" placement="left" arrow>
        <Box
          component="a"
          href={facebookLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook Luyện thi Giáo dục Sài Gòn"
          sx={{
            ...buttonSx,
            bgcolor: '#1877f2',
          }}
        >
          <FacebookRoundedIcon sx={{ fontSize: { xs: 30, md: 33 } }} />
        </Box>
      </Tooltip>

      <Tooltip title="Chat Zalo với tư vấn viên" placement="left" arrow>
        <Box
          component="a"
          href={zaloOALink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Zalo tư vấn tuyển sinh"
          sx={{
            ...buttonSx,
            bgcolor: '#0068ff',
            animation: `${pulseGlow} 2.8s ease-out infinite`,
          }}
        >
          <Box sx={{ textAlign: 'center', lineHeight: 1 }}>
            <ForumRoundedIcon sx={{ fontSize: 22, display: 'block', mx: 'auto' }} />
            <Typography
              component="span"
              sx={{
                display: 'block',
                mt: 0.15,
                color: 'white',
                fontWeight: 900,
                fontSize: '.58rem',
                fontFamily: "'Montserrat', sans-serif",
                letterSpacing: 0.2,
              }}
            >
              ZALO
            </Typography>
          </Box>
        </Box>
      </Tooltip>
    </Box>
  );
}
