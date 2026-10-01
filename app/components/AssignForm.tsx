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
import CourseSelectionField from './CourseSelectionField';
import {
  CourseSelection,
  courses,
} from '../data/enrollment';

type SnackbarSeverity = 'success' | 'error' | 'warning' | 'info';

type Props = {
  showSnackbar: (
    message: string,
    severity?: SnackbarSeverity,
  ) => void;
  setPhone: (phone: string) => void;
};

type FormState = {
  mode: 'consultation';
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
  mode: 'consultation',
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

    const onlyTeacher = course.teachers.length === 1 ? course.teachers[0] : undefined;

    setSelectedCourses([
      {
        courseId: course.id,
        teacherId: onlyTeacher?.teacherId || '',
        scheduleId: '',
      },
    ]);
  }, []);

  const update = (field: keyof FormState, value: string | boolean) => {
    setServerError('');
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCourseSelectionChange = (value: CourseSelection[]) => {
    setServerError('');
    setSelectedCourses(value);
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

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.parentEmail.trim())) {
      return 'Email phụ huynh chưa đúng định dạng.';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.studentEmail.trim())) {
      return 'Email học sinh chưa đúng định dạng.';
    }

    if (!/^0\d{9}$/.test(formData.parentPhone.replace(/\s/g, ''))) {
      return 'Số điện thoại phụ huynh phải gồm 10 số và bắt đầu bằng 0.';
    }

    if (selectedCourses.length === 0) {
      return 'Vui lòng chọn ít nhất một môn học quan tâm.';
    }

    if (!formData.consent) {
      return 'Vui lòng xác nhận đồng ý để trung tâm liên hệ và xử lý thông tin đăng ký.';
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
        'Đăng ký tư vấn thành công! Đội ngũ tư vấn sẽ liên hệ qua số điện thoại ' +
          formData.parentPhone +
          ' để xác nhận lớp học, lịch học và thông tin học phí.',
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
    <Box id="form-dang-ky" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#f4f7fe' }}>
      <Container maxWidth="lg">
        <Card
          sx={{
            borderRadius: 6,
            overflow: 'hidden',
            boxShadow: '0 24px 60px rgba(31,42,74,.12)',
          }}
        >
          <Grid container>
            <Grid
              size={{ xs: 12, md: 5 }}
              sx={{
                p: { xs: 4, md: 6 },
                color: 'white',
                background: 'linear-gradient(145deg, #0d47a1, #1976d2 55%, #42a5f5)',
              }}
            >
              <Typography
                variant="overline"
                sx={{ fontFamily: fontHeader, fontWeight: 900, letterSpacing: 1.5 }}
              >
                ĐĂNG KÝ TƯ VẤN
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontFamily: fontHeader, fontWeight: 900, mt: 1, mb: 2 }}
              >
                Ôn thi tuyển sinh lớp 10
              </Typography>
              <Typography sx={{ fontFamily: fontBody, opacity: 0.92, lineHeight: 1.75 }}>
                Phụ huynh có thể chọn một hoặc nhiều môn quan tâm. Trung tâm sẽ liên hệ
                để xác nhận giáo viên, lịch học và học phí theo lớp đang mở.
              </Typography>

              <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,.25)' }} />

              <Stack spacing={1.5}>
                {courses.map((course) => (
                  <Box
                    key={course.id}
                    sx={{
                      p: 2,
                      borderRadius: 3,
                      bgcolor: 'rgba(255,255,255,.10)',
                      border: '1px solid rgba(255,255,255,.16)',
                    }}
                  >
                    <Typography sx={{ fontWeight: 900 }}>
                      {course.subject} · {course.sessions} buổi / {course.weeks} tuần
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      {course.teachers.length} giáo viên phụ trách
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }} sx={{ p: { xs: 3, sm: 5, md: 6 } }}>
              <Typography
                variant="h4"
                sx={{ fontFamily: fontHeader, fontWeight: 900, color: '#1a237e' }}
              >
                Thông tin phụ huynh & học sinh
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 1, mb: 3 }}>
                Các trường có dấu * là bắt buộc.
              </Typography>

              {serverError && (
                <Alert severity="error" sx={{ mb: 3 }}>
                  {serverError}
                </Alert>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <Stack spacing={3}>
                  <Grid container spacing={2.5}>
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

                  <TextField
                    fullWidth
                    required
                    type="email"
                    label="Email học sinh"
                    placeholder="hocsinh@example.com"
                    name="studentEmail"
                    value={formData.studentEmail}
                    onChange={(event) => update('studentEmail', event.target.value)}
                  />

                  <TextField
                    fullWidth
                    required
                    label="Trường đang học"
                    value={formData.school}
                    onChange={(event) => update('school', event.target.value)}
                  />

                  <Divider />

                  <Grid container spacing={2.5}>
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

                  <Divider />

                  <CourseSelectionField
                    value={selectedCourses}
                    onChange={handleCourseSelectionChange}
                  />

                  <TextField
                    fullWidth
                    label="Khung thời gian thuận tiện"
                    placeholder="Ví dụ: buổi tối các ngày trong tuần"
                    value={formData.desiredSchedule}
                    onChange={(event) => update('desiredSchedule', event.target.value)}
                    helperText="Đây là nhu cầu của gia đình, không phải lịch học chính thức của lớp."
                  />

                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="Ghi chú / nhu cầu cần tư vấn thêm"
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
                    label="Tôi đồng ý để trung tâm sử dụng thông tin trên nhằm liên hệ tư vấn, xác nhận lớp học và xử lý đăng ký."
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="contained"
                    size="large"
                    sx={{
                      py: 1.8,
                      borderRadius: 999,
                      fontFamily: fontHeader,
                      fontWeight: 900,
                      fontSize: '1.05rem',
                      background: 'linear-gradient(90deg, #ff9800, #ff5722)',
                    }}
                  >
                    {isSubmitting ? (
                      <CircularProgress size={25} sx={{ color: 'white' }} />
                    ) : (
                      'Gửi yêu cầu tư vấn'
                    )}
                  </Button>
                </Stack>
              </form>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
}
