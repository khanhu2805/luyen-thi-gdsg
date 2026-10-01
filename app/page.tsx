'use client';

import { Box } from '@mui/material';
import { useState } from 'react';
import AssignForm from './components/AssignForm';
import SnackBar from './components/SnackBar';
import Features from './components/trang-chu/Features';
import HeroSection from './components/trang-chu/HeroSection';
import MarqueeNoti from './components/trang-chu/MarqueeNoti';
import PromoHighlights from './components/trang-chu/PromoHighlights';
import StudentBenefits from './components/trang-chu/StudentBenefits';
import Teacher from './components/trang-chu/Teacher';

export default function HomePage() {
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
    <Box sx={{ overflowX: 'hidden', bgcolor: '#f6f9ff' }}>
      <MarqueeNoti />
      <HeroSection />

      {/* Đặt đội ngũ ngay sau hero để tăng độ tin cậy khi phụ huynh xem trang */}
      <Teacher />

      <Features />
      <PromoHighlights />
      <StudentBenefits />

      <AssignForm showSnackbar={showSnackbar} setPhone={setPhone} />

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
