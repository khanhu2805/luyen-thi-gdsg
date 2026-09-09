'use client';

import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import PaymentsRoundedIcon from '@mui/icons-material/PaymentsRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import Link from 'next/link';
import {
  courses,
  ENROLLMENT_OPEN_DATE,
  formatVnd,
  getTeacherById,
} from '../data/enrollment';

const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

export default function KhoaHocPage() {
  return (
    <Box sx={{ bgcolor: '#f4f7fe', minHeight: '100vh', pb: 12, fontFamily: fontBody }}>
      <Box
        sx={{
          py: { xs: 8, md: 11 },
          color: 'white',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #0d47a1, #1976d2 55%, #42a5f5)',
        }}
      >
        <Container maxWidth="lg">
          <Chip
            label={`KHAI GIẢNG ${ENROLLMENT_OPEN_DATE}`}
            sx={{ bgcolor: 'rgba(255,255,255,.15)', color: 'white', fontWeight: 900, mb: 2 }}
          />
          <Typography
            variant="h2"
            sx={{
              fontFamily: fontHeader,
              fontWeight: 900,
              fontSize: { xs: '2.2rem', md: '3.6rem' },
            }}
          >
            Khóa học & lịch học
          </Typography>
          <Typography
            variant="h6"
            sx={{ mt: 2, opacity: 0.92, maxWidth: 850, mx: 'auto', lineHeight: 1.7 }}
          >
            Toán · Ngữ văn · Tiếng Anh. Mỗi khóa gồm 8 buổi trong 8 tuần.
            Học sinh chọn một ca cố định phù hợp và học theo lịch đó trong suốt khóa.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ mt: { xs: 5, md: 7 } }}>
        <Alert severity="info" sx={{ mb: 5, borderRadius: 3 }}>
          Ngày 20/09/2026 là mốc khai giảng của đợt tuyển sinh. Buổi học thực tế diễn ra
          theo thứ và khung giờ của ca học mà học sinh lựa chọn.
        </Alert>

        <Grid container spacing={3.5}>
          {courses.map((course) => {
            const teacher = getTeacherById(course.teacherId);

            return (
              <Grid key={course.id} size={{ xs: 12, md: 4 }}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 14px 38px rgba(31,42,74,.09)',
                    border: '1px solid #e8edf4',
                  }}
                >
                  <Box
                    sx={{
                      p: 3,
                      color: 'white',
                      background: `linear-gradient(135deg, ${teacher?.accent || '#1976d2'}, #263238)`,
                    }}
                  >
                    <Typography variant="overline" sx={{ fontWeight: 900 }}>
                      LUYỆN THI TRỰC TUYẾN
                    </Typography>
                    <Typography variant="h3" sx={{ fontFamily: fontHeader, fontWeight: 900 }}>
                      {course.subject}
                    </Typography>
                    <Typography sx={{ mt: 1, opacity: 0.9 }}>{teacher?.name}</Typography>
                  </Box>

                  <CardContent sx={{ p: 3.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Stack spacing={1.5}>
                      <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                        <SchoolRoundedIcon color="primary" />
                        <Typography>
                          <b>{course.sessions} buổi</b> / {course.weeks} tuần
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                        <PaymentsRoundedIcon color="primary" />
                        <Typography>
                          <b>{formatVnd(course.price)}</b> / khóa
                        </Typography>
                      </Box>
                    </Stack>

                    <Typography color="text.secondary" sx={{ lineHeight: 1.7, my: 3 }}>
                      {course.description}
                    </Typography>

                    <Divider sx={{ mb: 2.5 }} />

                    <Typography sx={{ fontFamily: fontHeader, fontWeight: 900, mb: 1.5 }}>
                      Ca học đang mở
                    </Typography>

                    <Stack spacing={1.5} sx={{ flexGrow: 1 }}>
                      {course.schedules.map((schedule) => (
                        <Box
                          key={schedule.id}
                          sx={{
                            p: 2,
                            borderRadius: 3,
                            bgcolor: '#f8fafc',
                            border: '1px solid #e5eaf0',
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <CalendarMonthRoundedIcon sx={{ fontSize: 20, color: 'primary.main' }} />
                            <Typography sx={{ fontWeight: 900 }}>{schedule.day}</Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                            <AccessTimeRoundedIcon sx={{ fontSize: 20, color: 'text.secondary' }} />
                            <Typography color="text.secondary">{schedule.time}</Typography>
                          </Box>
                        </Box>
                      ))}
                    </Stack>

                    <Stack spacing={1.25} sx={{ mt: 3 }}>
                      {[
                        'Chọn ca học cố định ngay khi đăng ký',
                        'Thông tin phụ huynh được dùng để xác nhận lớp',
                        'Thanh toán đăng ký chính thức qua VNPAY QR',
                      ].map((item) => (
                        <Box key={item} sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                          <CheckCircleRoundedIcon sx={{ color: 'success.main', fontSize: 20, mt: 0.2 }} />
                          <Typography variant="body2">{item}</Typography>
                        </Box>
                      ))}
                    </Stack>

                    <Stack direction={{ xs: 'column', sm: 'row', md: 'column' }} spacing={1.25} sx={{ mt: 3.5 }}>
                      <Button
                        component={Link}
                        href={`/?course=${course.id}&mode=register#form-dang-ky`}
                        variant="contained"
                        size="large"
                        sx={{ borderRadius: 999, fontWeight: 900 }}
                      >
                        Đăng ký khóa học
                      </Button>
                      <Button
                        component={Link}
                        href={`/?course=${course.id}#form-dang-ky`}
                        variant="outlined"
                        size="large"
                        sx={{ borderRadius: 999, fontWeight: 900 }}
                      >
                        Nhận tư vấn
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        <Box
          sx={{
            mt: 7,
            p: { xs: 3, md: 5 },
            borderRadius: 5,
            bgcolor: 'white',
            border: '1px solid #e5eaf0',
          }}
        >
          <Typography variant="h4" sx={{ fontFamily: fontHeader, fontWeight: 900, color: '#1a237e' }}>
            Cách đăng ký
          </Typography>
          <Grid container spacing={2.5} sx={{ mt: 1 }}>
            {[
              ['1', 'Chọn môn', 'Xem giáo viên, học phí và các ca đang mở.'],
              ['2', 'Chọn ca học', 'Mỗi học sinh chọn một lịch cố định trong 8 tuần.'],
              ['3', 'Điền thông tin phụ huynh', 'Bắt buộc họ tên, email và số điện thoại phụ huynh.'],
              ['4', 'Thanh toán VNPAY QR', 'Chỉ áp dụng cho lớp đã có lịch học xác định.'],
            ].map(([step, title, desc]) => (
              <Grid key={step} size={{ xs: 12, sm: 6, md: 3 }}>
                <Box sx={{ p: 2.5, height: '100%' }}>
                  <Typography variant="h4" color="primary" sx={{ fontWeight: 900 }}>
                    {step}
                  </Typography>
                  <Typography sx={{ fontWeight: 900, mt: 1 }}>{title}</Typography>
                  <Typography color="text.secondary" variant="body2" sx={{ mt: 0.8, lineHeight: 1.6 }}>
                    {desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
