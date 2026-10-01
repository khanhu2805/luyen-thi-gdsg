'use client';

import {
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
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import PolicyRoundedIcon from '@mui/icons-material/PolicyRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import Link from 'next/link';
import { publicCourses as courses, getPublicTeacherById as getTeacherById } from '../data/public-enrollment';

const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

export default function KhoaHocPage() {
  return (
    <Box sx={{ bgcolor: '#f4f7fe', minHeight: '100vh', pb: 12, fontFamily: fontBody }}>
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #081f49 0%, #0d47a1 50%, #1976d2 100%)',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: 380,
            height: 380,
            borderRadius: '50%',
            right: -120,
            top: -160,
            bgcolor: 'rgba(255,255,255,.07)',
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Chip
            label="LỘ TRÌNH ÔN THI VÀO LỚP 10"
            sx={{
              mb: 2,
              bgcolor: 'rgba(255,255,255,.14)',
              color: 'white',
              border: '1px solid rgba(255,255,255,.18)',
              fontWeight: 900,
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontFamily: fontHeader,
              fontWeight: 900,
              fontSize: { xs: '2.2rem', md: '3.65rem' },
            }}
          >
            Chọn môn học phù hợp với mục tiêu
          </Typography>
          <Typography
            variant="h6"
            sx={{ mt: 2, opacity: 0.93, maxWidth: 840, mx: 'auto', lineHeight: 1.75 }}
          >
            Toán · Ngữ văn · Tiếng Anh. Mỗi khóa gồm 8 buổi trong 8 tuần,
            tập trung kiến thức trọng tâm và kỹ năng làm bài cho kỳ thi tuyển sinh lớp 10.
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.2}
            justifyContent="center"
            sx={{ mt: 3 }}
          >
            <Chip
              icon={<CardGiftcardRoundedIcon />}
              label="Đăng ký khóa học – tặng sách Toán 9"
              sx={{
                bgcolor: '#fff3e0',
                color: '#e65100',
                fontWeight: 900,
                '& .MuiChip-icon': { color: '#e65100' },
              }}
            />
            <Chip
              icon={<GroupsRoundedIcon />}
              label="Mời bạn cùng học – ưu đãi 100.000đ"
              sx={{
                bgcolor: '#e8eaf6',
                color: '#283593',
                fontWeight: 900,
                '& .MuiChip-icon': { color: '#283593' },
              }}
            />
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ mt: { xs: 5, md: 7 } }}>
        <Box
          sx={{
            mb: 5,
            p: { xs: 3, md: 4 },
            borderRadius: 5,
            bgcolor: 'white',
            border: '1px solid #e5eaf0',
            boxShadow: '0 12px 30px rgba(31,42,74,.05)',
            display: { md: 'flex' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 3,
          }}
        >
          <Box>
            <Typography variant="h5" sx={{ fontFamily: fontHeader, fontWeight: 900, color: '#1a237e' }}>
              Chưa biết nên chọn lớp nào?
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 0.8, lineHeight: 1.7, maxWidth: 760 }}>
              Để lại thông tin, đội ngũ tư vấn sẽ hỗ trợ phụ huynh chọn môn, giáo viên
              và lớp học phù hợp với nhu cầu của học sinh.
            </Typography>
          </Box>
          <Button
            component={Link}
            href="/#form-dang-ky"
            variant="contained"
            size="large"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              mt: { xs: 2, md: 0 },
              borderRadius: 999,
              px: 3.5,
              fontWeight: 900,
              whiteSpace: 'nowrap',
            }}
          >
            Nhận tư vấn
          </Button>
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
                    overflow: 'hidden',
                    boxShadow: '0 16px 40px rgba(31,42,74,.09)',
                    border: '1px solid #e8edf4',
                    transition: 'transform .25s ease, box-shadow .25s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 22px 50px rgba(31,42,74,.14)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      p: 3.2,
                      color: 'white',
                      position: 'relative',
                      overflow: 'hidden',
                      background: 'linear-gradient(135deg, ' + (primaryTeacher?.accent || '#1976d2') + ', #1a237e)',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        width: 130,
                        height: 130,
                        borderRadius: '50%',
                        right: -40,
                        top: -45,
                        bgcolor: 'rgba(255,255,255,.10)',
                      }}
                    />
                    <Typography variant="overline" sx={{ fontWeight: 900, opacity: 0.9 }}>
                      LUYỆN THI TRỰC TUYẾN
                    </Typography>
                    <Typography variant="h3" sx={{ fontFamily: fontHeader, fontWeight: 900, position: 'relative' }}>
                      {course.subject}
                    </Typography>
                    <Typography sx={{ mt: 1, opacity: 0.9, position: 'relative' }}>
                      {teacherNames || 'Đang cập nhật giáo viên'}
                    </Typography>
                  </Box>

                  <CardContent sx={{ p: 3.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                      <Box
                        sx={{
                          width: 42,
                          height: 42,
                          borderRadius: 2.5,
                          bgcolor: '#e8f1ff',
                          color: '#1976d2',
                          display: 'grid',
                          placeItems: 'center',
                        }}
                      >
                        <SchoolRoundedIcon />
                      </Box>
                      <Box>
                        <Typography sx={{ fontWeight: 900 }}>
                          {course.sessions} buổi / {course.weeks} tuần
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lộ trình ôn tập tập trung
                        </Typography>
                      </Box>
                    </Box>

                    <Typography color="text.secondary" sx={{ lineHeight: 1.75, my: 3 }}>
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

                    <Stack spacing={1.15} sx={{ mt: 3 }}>
                      {[
                        'Tập trung kiến thức trọng tâm tuyển sinh lớp 10',
                        'Có video và tài liệu hỗ trợ ôn tập',
                        'LMS đồng hành trong quá trình học',
                      ].map((item) => (
                        <Box key={item} sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                          <CheckCircleRoundedIcon sx={{ color: 'success.main', fontSize: 20, mt: 0.2 }} />
                          <Typography variant="body2">{item}</Typography>
                        </Box>
                      ))}
                    </Stack>

                    <Button
                      component={Link}
                      href={'/?course=' + course.id + '#form-dang-ky'}
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{ mt: 3.5, borderRadius: 999, fontWeight: 900 }}
                    >
                      Tư vấn môn {course.subject}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        <Grid container spacing={3} sx={{ mt: 5 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                height: '100%',
                p: 3.5,
                borderRadius: 4,
                bgcolor: '#fff8e1',
                border: '1px solid #ffe082',
              }}
            >
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                <CardGiftcardRoundedIcon sx={{ color: '#ef6c00' }} />
                <Typography variant="h5" sx={{ fontFamily: fontHeader, fontWeight: 900, color: '#e65100' }}>
                  Tặng sách Toán 9 khi đăng ký khóa học
                </Typography>
              </Stack>
              <Typography sx={{ mt: 1.5, lineHeight: 1.75 }}>
                Học viên đăng ký và hoàn tất học phí một khóa ôn thi tuyển sinh lớp 10
                được tặng 01 cuốn “36 Đề kiểm tra định kỳ Toán 9”.
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                height: '100%',
                p: 3.5,
                borderRadius: 4,
                bgcolor: '#eef4ff',
                border: '1px solid #c9ddff',
              }}
            >
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                <GroupsRoundedIcon sx={{ color: '#1565c0' }} />
                <Typography variant="h5" sx={{ fontFamily: fontHeader, fontWeight: 900, color: '#0d47a1' }}>
                  Mời bạn cùng học – cùng nhận ưu đãi
                </Typography>
              </Stack>
              <Typography sx={{ mt: 1.5, lineHeight: 1.75 }}>
                Bạn mới được giảm 100.000đ trên khóa đăng ký; người giới thiệu nhận
                100.000đ ưu đãi cho khóa tiếp theo khi đăng ký thành công.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 6,
            p: { xs: 3, md: 5 },
            borderRadius: 5,
            bgcolor: 'white',
            border: '1px solid #e5eaf0',
          }}
        >
          <Typography variant="h4" sx={{ fontFamily: fontHeader, fontWeight: 900, color: '#1a237e' }}>
            Đăng ký chỉ với 3 bước
          </Typography>
          <Grid container spacing={2.5} sx={{ mt: 1 }}>
            {[
              ['1', 'Chọn môn quan tâm', 'Có thể chọn một hoặc nhiều môn cần được tư vấn.'],
              ['2', 'Gửi thông tin', 'Điền thông tin học sinh, phụ huynh và nhu cầu học tập.'],
              ['3', 'Nhận tư vấn', 'Đội ngũ trung tâm liên hệ để tư vấn lớp phù hợp và hướng dẫn đăng ký.'],
            ].map(([step, title, desc]) => (
              <Grid key={step} size={{ xs: 12, md: 4 }}>
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

          <Button
            component={Link}
            href="/chinh-sach"
            variant="outlined"
            startIcon={<PolicyRoundedIcon />}
            sx={{ mt: 2.5, borderRadius: 999, px: 3, fontWeight: 900 }}
          >
            Xem quyền lợi học viên
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
