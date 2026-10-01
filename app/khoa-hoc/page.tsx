'use client';

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import PolicyRoundedIcon from '@mui/icons-material/PolicyRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import Link from 'next/link';
import { courses, getTeacherById } from '../data/enrollment';

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
          <Typography
            variant="h2"
            sx={{
              fontFamily: fontHeader,
              fontWeight: 900,
              fontSize: { xs: '2.2rem', md: '3.6rem' },
            }}
          >
            Khóa học ôn thi vào lớp 10
          </Typography>
          <Typography
            variant="h6"
            sx={{ mt: 2, opacity: 0.92, maxWidth: 900, mx: 'auto', lineHeight: 1.7 }}
          >
            Toán · Ngữ văn · Tiếng Anh. Mỗi khóa gồm 8 buổi trong 8 tuần.
            Học phí và lịch học được tư vấn trực tiếp để phụ huynh nhận thông tin
            đúng với lớp đang mở tại thời điểm đăng ký.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ mt: { xs: 5, md: 7 } }}>
        <Box
          sx={{
            mb: 4,
            p: { xs: 2.5, md: 3 },
            borderRadius: 4,
            bgcolor: '#e8f1ff',
            border: '1px solid #c9ddff',
          }}
        >
          <Typography sx={{ fontWeight: 900, color: '#0d47a1' }}>
            Thông tin học phí và lịch học không hiển thị công khai trên website.
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 0.7, lineHeight: 1.7 }}>
            Phụ huynh vui lòng gửi yêu cầu tư vấn. Trung tâm sẽ xác nhận lớp đang mở,
            giáo viên phụ trách, lịch học phù hợp và mức học phí áp dụng tại thời điểm đăng ký.
          </Typography>
        </Box>

        <Grid container spacing={3.5}>
          {courses.map((course) => {
            const primaryTeacher = getTeacherById(course.teachers[0]?.teacherId || '');
            const teacherNames = course.teachers
              .map((item) => getTeacherById(item.teacherId)?.name)
              .filter(Boolean)
              .join(' · ');

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
                      background: primaryTeacher?.accent || '#1976d2',
                    }}
                  >
                    <Typography variant="overline" sx={{ fontWeight: 900 }}>
                      LUYỆN THI TRỰC TUYẾN
                    </Typography>
                    <Typography variant="h3" sx={{ fontFamily: fontHeader, fontWeight: 900 }}>
                      {course.subject}
                    </Typography>
                    <Typography sx={{ mt: 1, opacity: 0.9 }}>
                      {teacherNames || 'Đang cập nhật giáo viên'}
                    </Typography>
                  </Box>

                  <CardContent sx={{ p: 3.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                      <SchoolRoundedIcon color="primary" />
                      <Typography>
                        <b>{course.sessions} buổi</b> / {course.weeks} tuần
                      </Typography>
                    </Box>

                    <Typography color="text.secondary" sx={{ lineHeight: 1.7, my: 3 }}>
                      {course.description}
                    </Typography>

                    <Divider sx={{ mb: 2.5 }} />

                    <Typography sx={{ fontFamily: fontHeader, fontWeight: 900, mb: 1.5 }}>
                      Giáo viên phụ trách
                    </Typography>

                    <Stack spacing={1.5} sx={{ flexGrow: 1 }}>
                      {course.teachers.map((teacherOption) => {
                        const teacher = getTeacherById(teacherOption.teacherId);

                        return (
                          <Box
                            key={teacherOption.teacherId}
                            sx={{
                              p: 2,
                              borderRadius: 3,
                              bgcolor: '#f8fafc',
                              border: '1px solid #e5eaf0',
                            }}
                          >
                            <Typography sx={{ fontWeight: 900, color: '#1a237e' }}>
                              {teacher?.name || 'Đang cập nhật giáo viên'}
                            </Typography>
                            {teacher && (
                              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.6 }}>
                                {teacher.degree} · {teacher.organization}
                              </Typography>
                            )}
                          </Box>
                        );
                      })}
                    </Stack>

                    <Stack spacing={1.25} sx={{ mt: 3 }}>
                      {[
                        'Lộ trình 8 tuần, tập trung kiến thức trọng tâm tuyển sinh lớp 10',
                        'Video, tài liệu và LMS được cung cấp theo chính sách của khóa học',
                        'Lịch học và học phí được xác nhận trực tiếp khi tư vấn',
                      ].map((item) => (
                        <Box key={item} sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                          <CheckCircleRoundedIcon sx={{ color: 'success.main', fontSize: 20, mt: 0.2 }} />
                          <Typography variant="body2">{item}</Typography>
                        </Box>
                      ))}
                    </Stack>

                    <Stack spacing={1.25} sx={{ mt: 3.5 }}>
                      <Button
                        component={Link}
                        href={'/?course=' + course.id + '#form-dang-ky'}
                        variant="contained"
                        size="large"
                        sx={{ borderRadius: 999, fontWeight: 900 }}
                      >
                        Đăng ký tư vấn
                      </Button>
                      <Button
                        component={Link}
                        href="/chinh-sach"
                        variant="outlined"
                        size="large"
                        startIcon={<PolicyRoundedIcon />}
                        sx={{ borderRadius: 999, fontWeight: 900 }}
                      >
                        Xem chính sách học viên
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
              ['1', 'Chọn môn', 'Có thể chọn một hoặc nhiều môn cần tư vấn.'],
              ['2', 'Chọn giáo viên', 'Nếu môn có nhiều giáo viên, phụ huynh có thể chọn giáo viên quan tâm.'],
              ['3', 'Gửi thông tin', 'Điền thông tin học sinh, phụ huynh và nhu cầu cần tư vấn.'],
              ['4', 'Trung tâm xác nhận', 'Tư vấn viên liên hệ để xác nhận lịch học, học phí và hướng dẫn đăng ký.'],
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
