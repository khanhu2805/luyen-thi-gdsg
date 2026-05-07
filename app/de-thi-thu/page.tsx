'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  InputAdornment,
  Chip,
  Stack
} from '@mui/material';
import { keyframes } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import TimerRoundedIcon from '@mui/icons-material/TimerRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded';
import Link from 'next/link';

// --- ANIMATIONS ---
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

// --- FONTS ---
const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

// --- MOCK DATA ĐỀ THI THỬ (Dạng PDF) ---
const mockExams = [
  {
    id: 1,
    title: "Đề thi thử Tuyển sinh 10 - Môn Ngữ Văn (Đề 1)",
    subject: "Ngữ Văn",
    type: 'exam',
    time: "120 phút",
    year: "2026",
    fileUrl: "/exam/mon-van/de-thi/de1.pdf",
    icon: "✍️",
    color: "#fbe9e7",
    tagColor: "error"
  },
  {
    id: 2,
    title: "Đề thi thử Tuyển sinh 10 - Môn Ngữ Văn (Đề 2)",
    subject: "Ngữ Văn",
    type: 'exam',
    time: "120 phút",
    year: "2026",
    fileUrl: "/exam/mon-van/de-thi/de2.pdf",
    icon: "✍️",
    color: "#fbe9e7",
    tagColor: "error"
  },
  {
    id: 3,
    title: "Đề thi thử Tuyển sinh 10 - Môn Ngữ Văn (Đề 3)",
    subject: "Ngữ Văn",
    type: 'exam',
    time: "120 phút",
    year: "2026",
    fileUrl: "/exam/mon-van/de-thi/de3.pdf",
    icon: "✍️",
    color: "#fbe9e7",
    tagColor: "error"
  },
  {
    id: 4,
    title: "Đề thi thử Tuyển sinh 10 - Môn Ngữ Văn (Đề 4)",
    subject: "Ngữ Văn",
    type: 'exam',
    time: "120 phút",
    year: "2026",
    fileUrl: "/exam/mon-van/de-thi/de4.pdf",
    icon: "✍️",
    color: "#fbe9e7",
    tagColor: "error"
  },
  {
    id: 5,
    title: "Đề thi thử Tuyển sinh 10 - Môn Ngữ Văn (Đề 5)",
    subject: "Ngữ Văn",
    type: 'exam',
    time: "120 phút",
    year: "2026",
    fileUrl: "/exam/mon-van/de-thi/de5.pdf",
    icon: "✍️",
    color: "#fbe9e7",
    tagColor: "error"
  },
  {
    id: 6,
    title: "Đề thi thử Tuyển sinh 10 - Môn Ngữ Văn (Đề 6)",
    subject: "Ngữ Văn",
    type: 'exam',
    time: "120 phút",
    year: "2026",
    fileUrl: "/exam/mon-van/de-thi/de6.pdf",
    icon: "✍️",
    color: "#fbe9e7",
    tagColor: "error"
  },
  {
    id: 7,
    title: "Đề thi thử Tuyển sinh 10 - Môn Ngữ Văn (Đề 7)",
    subject: "Ngữ Văn",
    type: 'exam',
    time: "120 phút",
    year: "2026",
    fileUrl: "/exam/mon-van/de-thi/de7.pdf",
    icon: "✍️",
    color: "#fbe9e7",
    tagColor: "error"
  },
  {
    id: 8,
    title: "Đề thi thử Tuyển sinh 10 - Môn Ngữ Văn (Đề 8)",
    subject: "Ngữ Văn",
    type: 'exam',
    time: "120 phút",
    year: "2026",
    fileUrl: "/exam/mon-van/de-thi/de8.pdf",
    icon: "✍️",
    color: "#fbe9e7",
    tagColor: "error"
  },
  {
    id: 9,
    title: "Đề thi thử Tuyển sinh 10 - Môn Ngữ Văn (Đề 9)",
    subject: "Ngữ Văn",
    type: 'exam',
    time: "120 phút",
    year: "2026",
    fileUrl: "/exam/mon-van/de-thi/de9.pdf",
    icon: "✍️",
    color: "#fbe9e7",
    tagColor: "error"
  },
  {
    id: 10,
    title: "Đề thi thử Tuyển sinh 10 - Môn Ngữ Văn (Đề 10)",
    subject: "Ngữ Văn",
    type: 'exam',
    time: "120 phút",
    year: "2026",
    fileUrl: "/exam/mon-van/de-thi/de10.pdf",
    icon: "✍️",
    color: "#fbe9e7",
    tagColor: "error"
  },
  {
    id: 11,
    title: "Đáp án đề thi thử Tuyển sinh 10 - Môn Ngữ Văn (Đề 1)",
    subject: "Ngữ Văn",
    type: 'answer',
    time: "120 phút",
    year: "2026",
    fileUrl: "/exam/mon-van/dap-an/de1.pdf",
    icon: "✍️",
    color: "#fbe9e7",
    tagColor: "error"
  },
  {
    id: 12,
    title: "Đáp án đề thi thử Tuyển sinh 10 - Môn Ngữ Văn (Đề 2)",
    subject: "Ngữ Văn",
    type: 'answer',
    time: "120 phút",
    year: "2026",
    fileUrl: "/exam/mon-van/dap-an/de2.pdf",
    icon: "✍️",
    color: "#fbe9e7",
    tagColor: "error"
  },
  {
    id: 13,
    title: "Đáp án đề thi thử Tuyển sinh 10 - Môn Ngữ Văn (Đề 3)",
    subject: "Ngữ Văn",
    type: 'answer',
    time: "120 phút",
    year: "2026",
    fileUrl: "/exam/mon-van/dap-an/de3.pdf",
    icon: "✍️",
    color: "#fbe9e7",
    tagColor: "error"
  },
  {
    id: 14,
    title: "Đáp án đề thi thử Tuyển sinh 10 - Môn Ngữ Văn (Đề 4)",
    subject: "Ngữ Văn",
    type: 'answer',
    time: "120 phút",
    year: "2026",
    fileUrl: "/exam/mon-van/dap-an/de4.pdf",
    icon: "✍️",
    color: "#fbe9e7",
    tagColor: "error"
  },
  {
    id: 15,
    title: "Đáp án đề thi thử Tuyển sinh 10 - Môn Ngữ Văn (Đề 5)",
    subject: "Ngữ Văn",
    type: 'answer',
    time: "120 phút",
    year: "2026",
    fileUrl: "/exam/mon-van/dap-an/de5.pdf",
    icon: "✍️",
    color: "#fbe9e7",
    tagColor: "error"
  },
  {
    id: 16,
    title: "Đáp án đề thi thử Tuyển sinh 10 - Môn Ngữ Văn (Đề 6)",
    subject: "Ngữ Văn",
    type: 'answer',
    time: "120 phút",
    year: "2026",
    fileUrl: "/exam/mon-van/dap-an/de6.pdf",
    icon: "✍️",
    color: "#fbe9e7",
    tagColor: "error"
  },
  {
    id: 17,
    title: "Đáp án đề thi thử Tuyển sinh 10 - Môn Ngữ Văn (Đề 7)",
    subject: "Ngữ Văn",
    type: 'answer',
    time: "120 phút",
    year: "2026",
    fileUrl: "/exam/mon-van/dap-an/de7.pdf",
    icon: "✍️",
    color: "#fbe9e7",
    tagColor: "error"
  },
  {
    id: 18,
    title: "Đáp án đề thi thử Tuyển sinh 10 - Môn Ngữ Văn (Đề 8)",
    subject: "Ngữ Văn",
    type: 'answer',
    time: "120 phút",
    year: "2026",
    fileUrl: "/exam/mon-van/dap-an/de8.pdf",
    icon: "✍️",
    color: "#fbe9e7",
    tagColor: "error"
  },
  {
    id: 19,
    title: "Đáp án đề thi thử Tuyển sinh 10 - Môn Ngữ Văn (Đề 9)",
    subject: "Ngữ Văn",
    type: 'answer',
    time: "120 phút",
    year: "2026",
    fileUrl: "/exam/mon-van/dap-an/de9.pdf",
    icon: "✍️",
    color: "#fbe9e7",
    tagColor: "error"
  },
  {
    id: 20,
    title: "Đáp án đề thi thử Tuyển sinh 10 - Môn Ngữ Văn (Đề 10)",
    subject: "Ngữ Văn",
    type: 'answer',
    time: "120 phút",
    year: "2026",
    fileUrl: "/exam/mon-van/dap-an/de10.pdf",
    icon: "✍️",
    color: "#fbe9e7",
    tagColor: "error"
  },
];

const subjects = ["Tất cả", "Toán", "Ngữ Văn", "Tiếng Anh"];

export default function DeThiThuPage() {
  const [activeSubject, setActiveSubject] = useState("Tất cả");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredExams = mockExams.filter(exam => {
    const matchSubject = activeSubject === "Tất cả" || exam.subject === activeSubject;
    const matchSearch = exam.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchSubject && matchSearch;
  });

  return (
    <Box sx={{ fontFamily: fontBody, bgcolor: '#f8fafc', minHeight: '100vh', pb: 15 }}>

      {/* ================= HEADER SECTION ================= */}
      <Box sx={{
        background: 'linear-gradient(135deg, #311b92 0%, #512da8 100%)', // Tông màu tím đậm tạo cảm giác tập trung thi cử
        pt: { xs: 12, md: 15 }, pb: { xs: 10, md: 12 },
        textAlign: 'center', color: 'white', position: 'relative', overflow: 'hidden'
      }}>
        <Box sx={{ position: 'absolute', top: -50, left: -50, width: 200, height: 200, bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '50%', animation: `${float} 6s infinite` }} />
        <Box sx={{ position: 'absolute', bottom: -50, right: 100, width: 150, height: 150, bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '50%', animation: `${float} 5s infinite reverse` }} />

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2, animation: `${fadeInUp} 0.8s ease-out` }}>
          <Typography variant="h2" sx={{ textTransform: 'uppercase', fontFamily: fontHeader, fontWeight: 900, mb: 3, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            ĐỀ THI <span style={{ color: '#ffea00' }}>Thực Chiến</span>
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 400, opacity: 0.9, mb: 5, lineHeight: 1.6 }}>
            Ngân hàng đề thi thử bám sát cấu trúc mới nhất của Sở GD&ĐT. Hãy chuẩn bị giấy bút, bấm giờ và thử sức ngay!
          </Typography>

          {/* Thanh Tìm Kiếm */}
          <Card sx={{ p: 1, borderRadius: 50, boxShadow: '0 15px 35px rgba(0,0,0,0.2)' }}>
            <TextField
              fullWidth
              placeholder="Tìm kiếm tên đề, ..."
              variant="outlined"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{ '& fieldset': { border: 'none' }, '& input': { fontFamily: fontBody, fontSize: '1.1rem', py: 1.5 } }}
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start"><SearchIcon color="primary" sx={{ fontSize: 28, ml: 1 }} /></InputAdornment>,
                }
              }}
            />
          </Card>
        </Container>
      </Box>

      {/* ================= FILTER SECTION ================= */}
      <Container maxWidth="lg" sx={{ mt: -3, position: 'relative', zIndex: 10 }}>
        <Box sx={{
          display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2,
          bgcolor: 'white', p: 2, borderRadius: 50, boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
        }}>
          {subjects.map((subject) => (
            <Button
              key={subject}
              onClick={() => setActiveSubject(subject)}
              variant={activeSubject === subject ? "contained" : "text"}
              sx={{
                borderRadius: 50, px: 4, py: 1, fontFamily: fontHeader, fontWeight: 700,
                color: activeSubject === subject ? 'white' : 'text.secondary',
                bgcolor: activeSubject === subject ? '#512da8' : 'transparent',
                transition: 'all 0.3s',
                '&:hover': { bgcolor: activeSubject === subject ? '#311b92' : 'grey.100' }
              }}
            >
              {subject}
            </Button>
          ))}
        </Box>
      </Container>

      {/* ================= EXAMS GRID ================= */}
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        {filteredExams.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 10 }}>
            <Typography variant="h5" sx={{ fontFamily: fontHeader, color: 'text.secondary', mb: 2 }}>
              Không tìm thấy đề thi phù hợp 😢
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Vui lòng thử lại với từ khóa khác hoặc chọn môn học khác nhé.
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={4}>
            {filteredExams.map((exam, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={exam.id}>
                <Card sx={{
                  height: '100%', borderRadius: 4, display: 'flex', flexDirection: 'column',
                  border: '1px solid #e0e0e0', transition: 'all 0.3s ease',
                  animation: `${fadeInUp} 0.6s ease-out ${index * 0.1}s both`,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(81, 45, 168, 0.12)',
                    borderColor: '#512da8'
                  }
                }}>
                  {/* Card Header (Icon & Tag Năm) */}
                  <Box sx={{ p: 3, pb: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Box sx={{
                      width: 60, height: 60, borderRadius: 3, bgcolor: exam.color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem'
                    }}>
                      {exam.icon}
                    </Box>
                    <Chip
                      label={`Năm ${exam.year}`}
                      size="small"
                      sx={{ fontWeight: 'bold', fontFamily: fontBody, bgcolor: 'grey.100' }}
                    />
                  </Box>

                  {/* Card Content */}
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="subtitle2" sx={{ color: exam.tagColor === 'primary' ? '#1976d2' : exam.tagColor === 'error' ? '#d32f2f' : '#2e7d32', fontWeight: 800, mb: 1, textTransform: 'uppercase' }}>
                      Môn {exam.subject}
                    </Typography>
                    <Typography variant="h6" sx={{ fontFamily: fontHeader, fontWeight: 800, color: '#1a237e', mb: 2, lineHeight: 1.4 }}>
                      {exam.title}
                    </Typography>

                    {/* Meta info: Trường & Thời gian */}
                    <Stack spacing={1.5} sx={{ mt: 'auto', pt: 2, borderTop: '1px dashed #eee' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary' }}>
                        <TimerRoundedIcon fontSize="small" color="warning" />
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>Thời gian: {exam.time}</Typography>
                      </Box>
                    </Stack>
                  </CardContent>

                  {/* Card Actions - Mở Tab Mới */}
                  <Box sx={{ p: 3, pt: 0 }}>
                    <Button
                      component="a"
                      href={exam.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      fullWidth variant="contained"
                      startIcon={<PictureAsPdfRoundedIcon />}
                      sx={{
                        borderRadius: 2, fontFamily: fontHeader, fontWeight: 700, py: 1.2,
                        bgcolor: `${exam.type == 'exam' ? '#512da8' : '#2e7d32'}`, '&:hover': { bgcolor: `${exam.type == 'exam' ? '#311b92' : '#1b5e20'}` }
                      }}
                    >
                      Mở {exam.type == 'exam' ? 'đề thi' : 'đáp án'}
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>

      {/* ================= CALL TO ACTION ================= */}
      {/* <Container maxWidth="md" sx={{ mt: 15 }}>
        <Box sx={{ 
          background: 'linear-gradient(135deg, #1976d2 0%, #115293 100%)',
          borderRadius: 6, p: { xs: 4, md: 6 }, textAlign: 'center', color: 'white',
          boxShadow: '0 20px 40px rgba(25, 118, 210, 0.3)'
        }}>
          <Typography variant="h4" sx={{ fontFamily: fontHeader, fontWeight: 900, mb: 2 }}>
            Bạn muốn nhận đáp án chi tiết?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', opacity: 0.9 }}>
            Đăng ký thông tin để nhận trọn bộ file đáp án giải chi tiết từng câu và video phân tích lỗi sai thường gặp từ các thầy cô HTV3.
          </Typography>
          <Button 
            component={Link} href="/#form-dang-ky"
            variant="contained" size="large"
            sx={{ 
              bgcolor: 'white', color: '#1976d2', borderRadius: 50, px: 5, py: 1.5, 
              fontFamily: fontHeader, fontWeight: 800, fontSize: '1.1rem',
              '&:hover': { bgcolor: 'grey.100', transform: 'scale(1.05)' },
              transition: '0.2s'
            }}
          >
            Đăng Ký Nhận Đáp Án
          </Button>
        </Box>
      </Container> */}
      {/* ================= CALL TO ACTION ================= */}
      <Container maxWidth="md" sx={{ mt: 15 }}>
        <Box sx={{
          background: 'linear-gradient(135deg, #ff9800 0%, #ff5722 100%)',
          borderRadius: 6, p: { xs: 4, md: 6 }, textAlign: 'center', color: 'white',
          boxShadow: '0 20px 40px rgba(255, 87, 34, 0.3)'
        }}>
          <Typography variant="h4" sx={{ fontFamily: fontHeader, fontWeight: 900, mb: 2 }}>
            Muốn tìm hiểu chi tiết về lộ trình?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', opacity: 0.9 }}>
            Để lại thông tin để được đội ngũ chuyên gia tư vấn chi tiết và định hướng lộ trình học tập cá nhân hóa phù hợp nhất.
          </Typography>
          <Button
            component={Link} href="/#form-dang-ky"
            variant="contained" size="large"
            sx={{
              bgcolor: 'white', color: '#ff5722', borderRadius: 50, px: 5, py: 1.8,
              fontFamily: fontHeader, fontWeight: 800, fontSize: '1.1rem',
              '&:hover': { bgcolor: 'grey.100', transform: 'scale(1.05)' },
              transition: '0.2s'
            }}
          >
            Đăng Ký Tư Vấn Miễn Phí
          </Button>
        </Box>
      </Container>

    </Box>
  );
}