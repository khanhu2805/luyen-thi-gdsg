'use client';

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { teachers } from '../../data/enrollment';

function initials(name: string) {
  return name
    .replace(/^Thầy\s+/i, '')
    .split(/\s+/)
    .slice(-2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

export default function Teacher() {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: 'white' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 900,
              color: '#1a237e',
            }}
          >
            Đội ngũ giảng dạy
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 1.5 }}>
            Giáo viên phụ trách các lớp mở trong đợt tuyển sinh 20/09/2026.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {teachers.map((teacher) => (
            <Grid key={teacher.id} size={{ xs: 12, md: 4 }}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  border: '1px solid #e8edf4',
                  boxShadow: '0 12px 32px rgba(31,42,74,.07)',
                }}
              >
                <CardContent sx={{ p: 3.5, textAlign: 'center' }}>
                  {teacher.image ? (
                    <Avatar
                      src={teacher.image}
                      alt={teacher.name}
                      sx={{ width: 116, height: 116, mx: 'auto', mb: 2 }}
                    />
                  ) : (
                    <Avatar
                      sx={{
                        width: 116,
                        height: 116,
                        mx: 'auto',
                        mb: 2,
                        bgcolor: teacher.accent,
                        fontSize: 36,
                        fontWeight: 900,
                      }}
                    >
                      {initials(teacher.name)}
                    </Avatar>
                  )}

                  <Typography
                    variant="h5"
                    sx={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900 }}
                  >
                    {teacher.name}
                  </Typography>
                  <Typography sx={{ color: teacher.accent, fontWeight: 900, mt: 0.8 }}>
                    {teacher.subject}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mt: 1.5 }}>
                    {teacher.degree} · {teacher.organization}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            component={Link}
            href="/doi-ngu"
            variant="outlined"
            size="large"
            sx={{ borderRadius: 999, px: 4, fontWeight: 900 }}
          >
            Xem thông tin đội ngũ
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
