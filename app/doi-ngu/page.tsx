'use client';

import { useState } from 'react';
import {
  Avatar,
  Box,
  Card,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import AssignForm from '../components/AssignForm';
import SnackBar from '../components/SnackBar';
import { teachers } from '../data/enrollment';

const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

function initials(name: string) {
  return name
    .replace(/^Thầy\s+/i, '')
    .split(/\s+/)
    .slice(-2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

export default function DoiNguPage() {
  const [openSuccessPopup, setOpenSuccessPopup] = useState(false);
  const [phone, setPhone] = useState('');
  type SnackbarSeverity = 'success' | 'error' | 'warning' | 'info';

  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: SnackbarSeverity;
  }>({
    open: false,
    message: '',
    severity: 'success',
  });
  const showSnackbar = (
    message: string,
    severity: SnackbarSeverity = 'success',
  ) => {
    setSnackbar({
      open: true,
      message,
      severity,
    });
  };

  return (
    <Box sx={{ bgcolor: '#f7f9fc', minHeight: '100vh', fontFamily: fontBody }}>
      <Box
        sx={{
          py: { xs: 8, md: 11 },
          textAlign: 'center',
          background: 'linear-gradient(135deg, #eef4ff, #ffffff 55%, #fff3f1)',
          borderBottom: '1px solid #e5eaf0',
        }}
      >
        <Container maxWidth="md">
          <Chip label="ĐỘI NGŨ GIẢNG DẠY" color="primary" variant="outlined" sx={{ fontWeight: 900 }} />
          <Typography
            variant="h2"
            sx={{
              fontFamily: fontHeader,
              fontWeight: 900,
              color: '#1a237e',
              mt: 2,
              fontSize: { xs: '2.3rem', md: '3.8rem' },
            }}
          >
            Giáo viên đồng hành cùng học sinh
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 2, fontSize: '1.1rem', lineHeight: 1.75 }}>
            Thông tin dưới đây được cập nhật theo danh sách giáo viên của đợt tuyển sinh
            khai giảng 20/09/2026.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <Stack spacing={4}>
          {teachers.map((teacher, index) => (
            <Card
              key={teacher.id}
              sx={{
                borderRadius: 5,
                p: { xs: 3, md: 4 },
                boxShadow: '0 16px 42px rgba(31,42,74,.08)',
                border: '1px solid #e8edf4',
              }}
            >
              <Grid container spacing={4} sx={{ alignItems: "center" }}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    sx={{
                      minHeight: { xs: 260, md: 340 },
                      borderRadius: 4,
                      overflow: 'hidden',
                      display: 'grid',
                      placeItems: 'center',
                      background: `linear-gradient(145deg, ${teacher.accent}22, ${teacher.accent}66)`,
                    }}
                  >
                    {teacher.image ? (
                      <Box
                        component="img"
                        src={teacher.image}
                        alt={teacher.name}
                        sx={{
                          width: '100%',
                          height: { xs: 300, md: 360 },
                          objectFit: 'cover',
                          objectPosition: 'top center',
                        }}
                      />
                    ) : (
                      <Avatar
                        sx={{
                          width: 150,
                          height: 150,
                          bgcolor: teacher.accent,
                          fontSize: 52,
                          fontFamily: fontHeader,
                          fontWeight: 900,
                          boxShadow: '0 14px 30px rgba(0,0,0,.14)',
                        }}
                      >
                        {initials(teacher.name)}
                      </Avatar>
                    )}
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 8 }}>
                  <Chip
                    label={`Giáo viên ${teacher.subject}`}
                    sx={{
                      bgcolor: `${teacher.accent}14`,
                      color: teacher.accent,
                      fontWeight: 900,
                    }}
                  />
                  <Typography
                    variant="h3"
                    sx={{
                      mt: 2,
                      fontFamily: fontHeader,
                      fontWeight: 900,
                      color: '#1a237e',
                    }}
                  >
                    {teacher.name}
                  </Typography>

                  <Stack spacing={2.2} sx={{ mt: 3 }}>
                    <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                      <WorkspacePremiumRoundedIcon sx={{ color: teacher.accent }} />
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          Trình độ
                        </Typography>
                        <Typography sx={{ fontWeight: 900 }}>{teacher.degree}</Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                      <SchoolRoundedIcon sx={{ color: teacher.accent }} />
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          Trường / đơn vị
                        </Typography>
                        <Typography sx={{ fontWeight: 900 }}>{teacher.organization}</Typography>
                      </Box>
                    </Box>
                  </Stack>

                  {teacher.note && (
                    <Box
                      sx={{
                        mt: 3,
                        p: 2.5,
                        borderRadius: 3,
                        bgcolor: '#f8fafc',
                        borderLeft: `5px solid ${teacher.accent}`,
                      }}
                    >
                      <Typography sx={{ lineHeight: 1.7 }}>{teacher.note}</Typography>
                    </Box>
                  )}
                </Grid>
              </Grid>
            </Card>
          ))}
        </Stack>
      </Container>

      <AssignForm
        setPhone={setPhone}
        showSnackbar={showSnackbar}
      />
      <SnackBar
        open={snackbar.open}
        setOpen={(open) =>
          setSnackbar((prev) => ({
            ...prev,
            open,
          }))
        }
        phone={phone}
        message={snackbar.message}
        severity={snackbar.severity}
      />
    </Box>
  );
}
