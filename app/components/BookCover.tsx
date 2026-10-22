import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';

type BookCoverProps = {
  src: string | null;
  title: string;
  subject: string;
  maxWidth?: number;
};

/** Display the full original cover without cropping, with a neutral empty state. */
export default function BookCover({ src, title, subject, maxWidth = 168 }: BookCoverProps) {
  return (
    <Box sx={{
      width: '100%', maxWidth, aspectRatio: '3 / 4', position: 'relative',
      mx: 'auto', bgcolor: 'white', border: '1px solid #dce0e8',
      boxShadow: '6px 8px 16px rgba(32,44,71,.13)',
      borderRadius: 0.5, overflow: 'hidden', flexShrink: 0,
    }}>
      {src ? (
        <Image src={src} alt={`Bìa sách ${title}`} fill
          sizes="(max-width: 600px) 168px, 210px"
          style={{ objectFit: 'contain' }} />
      ) : (
        <Box role="img" aria-label={`Chưa có ảnh bìa sách ${title}`}
          sx={{ height: '100%', px: 1, py: 2, bgcolor: '#f8f9fb',
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            alignItems: 'center', textAlign: 'center', gap: 1, color: '#65718a' }}>
          <MenuBookOutlinedIcon sx={{ fontSize: 26, color: '#283878' }} />
          <Typography sx={{ fontSize: 13, fontWeight: 800, lineHeight: 1.3, color: '#283878' }}>{subject}</Typography>
          <Typography sx={{ fontSize: 10.5, lineHeight: 1.45 }}>Chưa có ảnh bìa</Typography>
        </Box>
      )}
    </Box>
  );
}
