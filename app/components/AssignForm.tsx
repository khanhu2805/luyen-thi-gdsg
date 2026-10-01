'use client';

import React, { useEffect, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Card,
  Checkbox,
  CircularProgress,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import CourseSelectionField from './CourseSelectionField';
import FadeInScroll from './FadeInScroll';
import {
  PublicCourseSelection as CourseSelection,
  publicCourses as courses,
} from '../data/public-enrollment';

type SnackbarSeverity = 'success' | 'error' | 'warning' | 'info';

type Props = {
  showSnackbar: (
    message: string,
    severity?: SnackbarSeverity,
  ) => void;
  setPhone: (phone: string) => void;
};

type FormState = {
  studentName: string;
  studentEmail: string;
  grade: string;
  school: string;
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  desiredSchedule: string;
  note: string;
  consent: boolean;
  website: string;
};

const emptyForm: FormState = {
  studentName: '',
  studentEmail: '',
  grade: '9',
  school: '',
  parentName: '',
  parentEmail: '',
  parentPhone: '',
  desiredSchedule: '',
  note: '',
  consent: false,
  website: '',
};

const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

export default function AssignForm(props: Props) {
  const [formData, setFormData] = useState<FormState>(emptyForm);
  const [selectedCourses, setSelectedCourses] = useState<CourseSelection[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('course');
    const course = courses.find((item) => item.id === courseId);

    if (!course) return;

    setSelectedCourses([
      {
        courseId: course.id,
        teacherId: '',
        scheduleId: '',
      },
    ]);
  }, []);

  const update = (field: keyof FormState, value: string | boolean) => {
    setServerError('');
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validate = () => {
    if (
      !formData.studentName.trim() ||
      !formData.studentEmail.trim() ||
      !formData.school.trim() ||
      !formData.parentName.trim() ||
      !formData.parentEmail.trim() ||
      !formData.parentPhone.trim()
    ) {
      return 'Vui lòng điền đầy đủ thông tin bắt buộc của học sinh và phụ huynh.';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.studentEmail.trim())) {
      return 'Email học sinh chưa đúng định dạng.';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.parentEmail.trim())) {
      return 'Email phụ huynh chưa đúng định dạng.';
    }

    if (!/^0\d{9}$/.test(formData.parentPhone.replace(/\s/g, ''))) {
      return 'Số điện thoại phụ huynh phải gồm 10 số và bắt đầu bằng 0.';
    }

    if (selectedCourses.length === 0) {
      return 'Vui lòng chọn ít nhất một môn học quan tâm.';
    }

    if (!formData.consent) {
      return 'Vui lòng xác nhận đồng ý để trung tâm liên hệ tư vấn.';
    }

    return '';
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationError = validate();
    if (validationError) {
      setServerError(validationError);
      props.showSnackbar(validationError, 'error');
      return;
    }

    setIsSubmitting(true);
    setServerError('');

    try {
      const response = await fetch('/api/enrollment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          mode: 'consultation',
          selections: selectedCourses,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.message || 'Không thể gửi đăng ký.');
      }

      props.setPhone(formData.parentPhone);
      props.showSnackbar(
        'Đăng ký tư vấn thành công! Đội ngũ Luyện thi - Giáo dục Sài Gòn sẽ liên hệ để hỗ trợ gia đình chọn lớp phù hợp.',
        'success',
      );

      setFormData(emptyForm);
      setSelectedCourses([]);
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Có lỗi xảy ra. Vui lòng thử lại.';

      setServerError(errorMessage);
      props.showSnackbar(errorMessage, 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      id="form-dang-ky"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        bgcolor: '#f6f9ff',
      }}
    >
      <Box
        className="floating-orb"
        sx={{
          position: 'absolute',
          width: 360,
          height: 360,
          borderRadius: '50%',
          bgcolor: 'rgba(47,111,237,.08)',
          filter: 'blur(2px)',
          left: -180,
          top: 80,
        }}
      />
      <Box
        className="floating-card-delay"
        sx={{
          position: 'absolute',
          width: 260,
          height: 260,
          borderRadius: '50%',
          bgcolor: 'rgba(255,138,31,.08)',
          right: -110,
          bottom: 50,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <FadeInScroll>
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Typography
              variant="overline"
              sx={{
                fontFamily: fontHeader,
                fontWeight: 900,
                letterSpacing: 1.5,
                color: '#2f6fed',
              }}
            >
              ĐĂNG KÝ TƯ VẤN
            </Typography>
            <Typography
              variant="h3"
              sx={{
                mt: 0.7,
                fontFamily: fontHeader,
                fontWeight: 900,
                color: '#102044',
                fontSize: { xs: '2rem', md: '2.8rem' },
              }}
            >
              Chọn môn học, phần còn lại để chúng tôi hỗ trợ
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ mt: 1.4, maxWidth: 760, mx: 'auto', lineHeight: 1.75 }}
            >
              Phụ huynh chỉ cần chọn môn quan tâm và để lại thông tin.
              Đội ngũ tư vấn sẽ liên hệ để gợi ý lớp phù hợp với nhu cầu học tập của học sinh.
            </Typography>
          </Box>
        </FadeInScroll>

        <FadeInScroll delay={0.08}>
          <Card
            className="glass-panel"
            sx={{
              borderRadius: { xs: 4, md: 6 },
              overflow: 'hidden',
              boxShadow: '0 26px 80px rgba(15,48,105,.13)',
            }}
          >
            <Grid container>
              <Grid
                size={{ xs: 12, md: 4.5 }}
                className="animated-mesh noise-overlay"
                sx={{
                  p: { xs: 3.5, md: 5 },
                  color: 'white',
                  position: 'relative',
                }}
              >
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Stack direction="row" spacing={1.2} sx={{ alignItems: 'center' }}>
                    <AutoAwesomeRoundedIcon sx={{ color: '#ffd166' }} />
                    <Typography
                      variant="overline"
                      sx={{ fontFamily: fontHeader, fontWeight: 900, letterSpacing: 1.3 }}
                    >
                      QUYỀN LỢI ĐANG ÁP DỤNG
                    </Typography>
                  </Stack>

                  <Typography
                    variant="h3"
                    sx={{
                      mt: 1.2,
                      fontFamily: fontHeader,
                      fontWeight: 900,
                      fontSize: { xs: '2rem', md: '2.45rem' },
                      lineHeight: 1.15,
                    }}
                  >
                    Ôn thi có lộ trình,
                    <Box component="span" sx={{ display: 'block', color: '#ffd166' }}>
                      học tập có đồng hành
                    </Box>
                  </Typography>

                  <Typography sx={{ mt: 2, opacity: 0.9, lineHeight: 1.75 }}>
                    Lộ trình 8 tuần cho Toán · Ngữ văn · Tiếng Anh,
                    kết hợp video, tài liệu và LMS hỗ trợ ôn tập.
                  </Typography>

                  <Stack spacing={1.4} sx={{ mt: 3.5 }}>
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: 3,
                        bgcolor: 'rgba(255,255,255,.12)',
                        border: '1px solid rgba(255,255,255,.16)',
                      }}
                    >
                      <Stack direction="row" spacing={1.3} sx={{ alignItems: 'center' }}>
                        <CardGiftcardRoundedIcon sx={{ color: '#ffd166' }} />
                        <Box>
                          <Typography sx={{ fontWeight: 900 }}>
                            Tặng sách Toán 9
                          </Typography>
                          <Typography variant="body2" sx={{ opacity: 0.86, mt: 0.3 }}>
                            Khi đăng ký và hoàn tất học phí khóa ôn thi lớp 10.
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>

                    <Box
                      sx={{
                        p: 2,
                        borderRadius: 3,
                        bgcolor: 'rgba(255,255,255,.12)',
                        border: '1px solid rgba(255,255,255,.16)',
                      }}
                    >
                      <Stack direction="row" spacing={1.3} sx={{ alignItems: 'center' }}>
                        <GroupsRoundedIcon sx={{ color: '#9fe5c6' }} />
                        <Box>
                          <Typography sx={{ fontWeight: 900 }}>
                            Mời bạn cùng học
                          </Typography>
                          <Typography variant="body2" sx={{ opacity: 0.86, mt: 0.3 }}>
                            Bạn mới và người giới thiệu cùng nhận ưu đãi 100.000đ.
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>
                  </Stack>

                  <Divider sx={{ my: 3.5, borderColor: 'rgba(255,255,255,.18)' }} />

                  <Stack spacing={1.15}>
                    {[
                      'Chọn một hoặc nhiều môn trong cùng một lần',
                      'Tư vấn theo nhu cầu học tập của học sinh',
                      'Hỗ trợ xuyên suốt quá trình ôn tập',
                    ].map((item) => (
                      <Stack key={item} direction="row" spacing={1} sx={{ alignItems: 'flex-start' }}>
                        <CheckCircleRoundedIcon sx={{ fontSize: 20, color: '#9fe5c6', mt: 0.15 }} />
                        <Typography variant="body2" sx={{ lineHeight: 1.6, opacity: 0.9 }}>
                          {item}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 7.5 }} sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
                <Stack direction="row" spacing={1.2} sx={{ alignItems: 'center', mb: 0.8 }}>
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: 2.5,
                      display: 'grid',
                      placeItems: 'center',
                      bgcolor: '#eaf2ff',
                      color: '#2f6fed',
                    }}
                  >
                    <SchoolRoundedIcon />
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{ fontFamily: fontHeader, fontWeight: 900, color: '#102044' }}
                  >
                    Thông tin phụ huynh & học sinh
                  </Typography>
                </Stack>
                <Typography color="text.secondary" sx={{ mb: 3 }}>
                  Các trường có dấu * là bắt buộc.
                </Typography>

                {serverError && (
                  <Alert severity="error" sx={{ mb: 3, borderRadius: 3 }}>
                    {serverError}
                  </Alert>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  <Stack spacing={2.6}>
                    <CourseSelectionField
                      value={selectedCourses}
                      onChange={(value) => {
                        setServerError('');
                        setSelectedCourses(value);
                      }}
                    />

                    <Divider />

                    <Grid container spacing={2}>
                      <Grid size={{ xs: 12, sm: 7 }}>
                        <TextField
                          fullWidth
                          required
                          label="Họ tên học sinh"
                          value={formData.studentName}
                          onChange={(event) => update('studentName', event.target.value)}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 5 }}>
                        <TextField
                          select
                          fullWidth
                          required
                          label="Khối lớp"
                          value={formData.grade}
                          onChange={(event) => update('grade', event.target.value)}
                        >
                          <MenuItem value="9">Lớp 9</MenuItem>
                          <MenuItem value="10">Lớp 10</MenuItem>
                          <MenuItem value="11">Lớp 11</MenuItem>
                          <MenuItem value="12">Lớp 12</MenuItem>
                        </TextField>
                      </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          required
                          type="email"
                          label="Email học sinh"
                          placeholder="hocsinh@example.com"
                          value={formData.studentEmail}
                          onChange={(event) => update('studentEmail', event.target.value)}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          required
                          label="Trường đang học"
                          value={formData.school}
                          onChange={(event) => update('school', event.target.value)}
                        />
                      </Grid>
                    </Grid>

                    <Divider />

                    <Grid container spacing={2}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          required
                          label="Họ tên phụ huynh"
                          value={formData.parentName}
                          onChange={(event) => update('parentName', event.target.value)}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          required
                          type="tel"
                          label="Số điện thoại phụ huynh"
                          placeholder="09xxxxxxxx"
                          value={formData.parentPhone}
                          onChange={(event) => update('parentPhone', event.target.value)}
                        />
                      </Grid>
                    </Grid>

                    <TextField
                      fullWidth
                      required
                      type="email"
                      label="Email phụ huynh"
                      value={formData.parentEmail}
                      onChange={(event) => update('parentEmail', event.target.value)}
                    />

                    <TextField
                      fullWidth
                      label="Khung thời gian thuận tiện"
                      placeholder="Ví dụ: các buổi tối trong tuần"
                      value={formData.desiredSchedule}
                      onChange={(event) => update('desiredSchedule', event.target.value)}
                      helperText="Thông tin này giúp đội ngũ tư vấn gợi ý lớp phù hợp hơn."
                    />

                    <TextField
                      fullWidth
                      multiline
                      rows={3}
                      label="Nhu cầu cần tư vấn thêm"
                      placeholder="Ví dụ: cần củng cố nền tảng, muốn luyện đề nhiều hơn..."
                      value={formData.note}
                      onChange={(event) => update('note', event.target.value)}
                    />

                    <Box
                      sx={{
                        position: 'absolute',
                        left: '-9999px',
                        width: 1,
                        height: 1,
                        overflow: 'hidden',
                      }}
                      aria-hidden="true"
                    >
                      <TextField
                        tabIndex={-1}
                        autoComplete="off"
                        label="Website"
                        value={formData.website}
                        onChange={(event) => update('website', event.target.value)}
                      />
                    </Box>

                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.consent}
                          onChange={(event) => update('consent', event.target.checked)}
                        />
                      }
                      label="Tôi đồng ý để trung tâm sử dụng thông tin trên nhằm liên hệ tư vấn và hỗ trợ đăng ký."
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      variant="contained"
                      size="large"
                      className="shine-button"
                      sx={{
                        py: 1.65,
                        borderRadius: 999,
                        fontFamily: fontHeader,
                        fontWeight: 900,
                        fontSize: '1rem',
                        textTransform: 'none',
                        background: 'linear-gradient(90deg, #ff8a1f, #ff6d31)',
                        boxShadow: '0 14px 32px rgba(255,122,39,.28)',
                        '&:hover': {
                          background: 'linear-gradient(90deg, #f57c00, #f4511e)',
                          boxShadow: '0 16px 36px rgba(255,122,39,.34)',
                        },
                      }}
                    >
                      {isSubmitting ? (
                        <CircularProgress size={24} sx={{ color: 'white' }} />
                      ) : (
                        'Gửi thông tin để được tư vấn'
                      )}
                    </Button>
                  </Stack>
                </form>
              </Grid>
            </Grid>
          </Card>
        </FadeInScroll>
      </Container>
    </Box>
  );
}
