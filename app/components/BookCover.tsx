import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';

type BookCoverProps = {
  src: string | null;
  title: string;
  subject: string;
  maxWidth?: number;
};

/** Displays the actual cover at its original proportions, never a simulated published cover. */
export default function BookCover({ src, title, subject, maxWidth = 168 }: BookCoverProps) {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth,
        aspectRatio: '3 / 4',
        position: 'relative',
        overflow: 'hidden',
        mx: 'auto',
        bgcolor: '#ffffff',
        border: '1px solid #e3e5eb',
        borderRadius: 1.2,
        boxShadow: '0 14px 26px rgba(22,34,62,.13), 0 2px 5px rgba(22,34,62,.06)',
      }}
    >
      {src ? (
        <Image
          src={src}
          alt={`Bìa sách ${title}`}
          fill
          sizes={`(max-width: 600px) 150px, ${maxWidth}px`}
          style={{ objectFit: 'contain' }}
        />
      ) : (
        <Box
          role="img"
          aria-label={`Chưa có ảnh bìa: ${title}`}
          sx={{
            height: '100%',
            p: 2,
            bgcolor: '#f8f8f6',
            color: '#54617d',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1.2,
          }}
        >
          <AutoStoriesOutlinedIcon sx={{ color: '#283878', fontSize: 28 }} />
          <Typography sx={{ fontWeight: 800, color: '#283878', fontSize: 13, lineHeight: 1.4 }}>
            {subject}
          </Typography>
          <Typography sx={{ fontSize: 11, lineHeight: 1.5 }}>Chưa có ảnh bìa</Typography>
        </Box>
      )}
    </Box>
  );
}