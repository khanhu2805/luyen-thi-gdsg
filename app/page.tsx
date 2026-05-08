'use client';

import ExamCountdown from './components/ExamCountdown';
import {
  Box,
} from '@mui/material';
import { useState } from 'react';
import AssignForm from './components/AssignForm';
import StudentBenefits from './components/trang-chu/StudentBenefits';
import Teacher from './components/trang-chu/Teacher';
import Features from './components/trang-chu/Features';
import HeroSection from './components/trang-chu/HeroSection';
import MarqueeNoti from './components/trang-chu/MarqueeNoti';
import SnackBar from './components/SnackBar';

export default function HomePage() {

  const [openSuccessPopup, setOpenSuccessPopup] = useState(false);

  const [phone, setPhone] = useState(''); // Biến để lưu số điện thoại hiển thị trong popup

  // ================================================

  return (
    <Box sx={{ overflowX: 'hidden', bgcolor: '#f4f7fe' }}>

      {/* ================= THÔNG BÁO MARQUEE ================= */}
      <MarqueeNoti />

      {/* ================= FULL WIDTH COUNTDOWN ================= */}
      {/* Trả ExamCountdown về lại kích thước full-width như thiết kế gốc của bạn */}
      <ExamCountdown targetDate='2026-06-01T07:30:00' examName='Tuyển sinh Lớp 10 (2025-2026)' />

      {/* ================= HERO SECTION ================= */}

      <HeroSection />

      {/* ================= TÍNH NĂNG NỔI BẬT (FEATURES) ================= */}

      <Features />

      {/* ================= ĐỘI NGŨ GIẢNG VIÊN ================= */}

      <Teacher />

      {/* ================= ĐẶC QUYỀN HỌC VIÊN ================= */}

      <StudentBenefits />

      {/* ================= FORM ĐĂNG KÝ ================= */}

      <AssignForm setOpenSuccessPopup={setOpenSuccessPopup} setPhone={setPhone} />

      {/* ================= POPUP THÔNG BÁO THÀNH CÔNG ================= */}

      <SnackBar openSuccessPopup={openSuccessPopup} setOpenSuccessPopup={setOpenSuccessPopup} phone={phone} />
      {/* ============================================================= */}
    </Box>
  );
}