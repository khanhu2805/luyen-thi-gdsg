'use client';

import ExamCountdown from './components/ExamCountdown';
import {
  Box,
  Alert,
  Snackbar
} from '@mui/material';
import { useState } from 'react';
import AssignForm from './components/trang-chu/AssignForm';
import StudentBenefits from './components/trang-chu/StudentBenefits';
import Teacher from './components/trang-chu/Teacher';
import Features from './components/trang-chu/Features';
import HeroSection from './components/trang-chu/HeroSection';
import MarqueeNoti from './components/trang-chu/MarqueeNoti';


const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

export default function HomePage() {

  const [openSuccessPopup, setOpenSuccessPopup] = useState(false);

  const handleClosePopup = () => {
    setOpenSuccessPopup(false);
  };

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

      <AssignForm openSuccessPopup={openSuccessPopup} setOpenSuccessPopup={setOpenSuccessPopup} setPhone={setPhone} />

      {/* ================= POPUP THÔNG BÁO THÀNH CÔNG ================= */}

      <Snackbar open={openSuccessPopup} autoHideDuration={6000} onClose={handleClosePopup}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClosePopup} severity="success" sx={{ width: '100%', borderRadius: 4, bgcolor: '#e8f5e9', color: '#2e7d32', fontFamily: fontBody, boxShadow: '0 10px 30px rgba(46, 125, 50, 0.3)' }}>
          Đăng ký thành công! Đội ngũ tư vấn sẽ liên hệ với bạn qua số điện thoại <strong>{phone}</strong> trong thời gian sớm nhất để hướng dẫn nhận ưu đãi!
        </Alert>
      </Snackbar>
      {/* ============================================================= */}
    </Box>
  );
}