'use client';

import React, { useEffect, useMemo, useState } from 'react';
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
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import {
  courses,
  ENROLLMENT_OPEN_DATE,
  formatVnd,
  getTeacherById,
} from '../data/enrollment';

type Props = {
  setOpenSuccessPopup: (open: boolean) => void;
  setPhone: (phone: string) => void;
};

type Mode = 'consultation' | 'registration';

type FormState = {
  mode: Mode;
  studentName: string;
  studentEmail: string;
  grade: string;
  school: string;
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  courseId: string;
  scheduleId: string;
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
  courseId: '',
  scheduleId: '',
  desiredSchedule: '',
  note: '',
  consent: false,
  website: '',
};

const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

export default function AssignForm(props: Props) {
  const [formData, setFormData] = useState<FormState>(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const course = params.get('course');
    const mode = params.get('mode');

    if (course && courses.some((item) => item.id === course)) {
      setFormData((prev) => ({
        ...prev,
        courseId: course,
        mode: mode === 'register' ? 'registration' : prev.mode,
      }));
    }
  }, []);

  const selectedCourse = useMemo(
    () => courses.find((course) => course.id === formData.courseId),
    [formData.courseId],
  );

  const selectedTeacher = selectedCourse
    ? getTeacherById(selectedCourse.teacherId)
    : undefined;

  const update = (field: keyof FormState, value: string | boolean) => {
    setServerError('');
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleModeChange = (_: React.MouseEvent<HTMLElement>, value: Mode | null) => {
    if (!value) return;
    setFormData((prev) => ({
      ...prev,
      mode: value,
      scheduleId: value === 'consultation' ? prev.scheduleId : prev.scheduleId,
    }));
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

    if (formData.mode === 'registration') {
      if (!selectedCourse) return 'Vui lòng chọn môn học muốn đăng ký.';

      if (selectedCourse.schedules.length > 0 && !formData.scheduleId) {
        return 'Vui lòng chọn một lịch học đã mở.';
      }

      if (selectedCourse.schedules.length === 0) {
        return 'Khóa này chưa có ca học chính thức. Vui lòng chọn “Tôi cần tư vấn” để trung tâm xác nhận lịch trước khi thanh toán.';
      }
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
      return;
    }

    setIsSubmitting(true);
    setServerError('');

    try {
      const response = await fetch('/api/enrollment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.message || 'Không thể gửi đăng ký.');
      }

      if (formData.mode === 'registration') {
        if (!result.paymentUrl) {
          throw new Error('Chưa tạo được liên kết thanh toán VNPAY.');
        }

        window.location.assign(result.paymentUrl);
        return;
      }

      props.setPhone(formData.parentPhone);
      props.setOpenSuccessPopup(true);
      setFormData(emptyForm);
    } catch (error) {
      setServerError(
        error instanceof Error
          ? error.message
          : 'Có lỗi xảy ra. Vui lòng thử lại.',
      );
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
                TUYỂN SINH ĐỢT MỚI
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontFamily: fontHeader, fontWeight: 900, mt: 1, mb: 2 }}
              >
                Khai giảng {ENROLLMENT_OPEN_DATE}
              </Typography>
              {/* <Typography sx={{ fontFamily: fontBody, opacity: 0.92, lineHeight: 1.75 }}>
                Phụ huynh có thể để lại nhu cầu tư vấn hoặc đăng ký trực tiếp lớp
                đã có lịch. Với đăng ký chính thức, hệ thống sẽ chuyển sang cổng
                VNPAY để thanh toán bằng mã QR.
              </Typography> */}

              <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,.25)' }} />

              {/* <Stack spacing={2}>
                {courses.map((course) => {
                  const teacher = getTeacherById(course.teacherId);
                  return (
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
                        {teacher?.name}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        {course.schedules.map((item) => item.label).join(' | ')}
                      </Typography>
                    </Box>
                  );
                })}
              </Stack> */}
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

              {/* <ToggleButtonGroup
                exclusive
                fullWidth
                value={formData.mode}
                onChange={handleModeChange}
                sx={{ mb: 4 }}
              >
                <ToggleButton value="consultation" sx={{ fontWeight: 800, py: 1.4 }}>
                  Tôi cần tư vấn
                </ToggleButton>
                <ToggleButton value="registration" sx={{ fontWeight: 800, py: 1.4 }}>
                  Tôi muốn đăng ký
                </ToggleButton>
              </ToggleButtonGroup> */}

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
                        onChange={(e) => update('studentName', e.target.value)}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 5 }}>
                      <TextField
                        select
                        fullWidth
                        required
                        label="Khối lớp"
                        value={formData.grade}
                        onChange={(e) => update('grade', e.target.value)}
                      >
                        <MenuItem value="9">Lớp 9</MenuItem>
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
                    onChange={(e) => update('studentEmail', e.target.value)}
                  />
                  <TextField
                    fullWidth
                    required
                    label="Trường đang học"
                    value={formData.school}
                    onChange={(e) => update('school', e.target.value)}
                  />

                  <Divider />

                  <Grid container spacing={2.5}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        required
                        label="Họ tên phụ huynh"
                        value={formData.parentName}
                        onChange={(e) => update('parentName', e.target.value)}
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
                        onChange={(e) => update('parentPhone', e.target.value)}
                      />
                    </Grid>
                  </Grid>

                  <TextField
                    fullWidth
                    required
                    type="email"
                    label="Email phụ huynh"
                      
                    value={formData.parentEmail}
                    onChange={(e) => update('parentEmail', e.target.value)}
                  />

                  <TextField
                    fullWidth
                    select
                    required={formData.mode === 'registration'}
                    label={
                      formData.mode === 'registration'
                        ? 'Môn học đăng ký'
                        : 'Môn học quan tâm'
                    }
                    value={formData.courseId}
                    onChange={(e) => {
                      setServerError('');
                      setFormData((prev) => ({
                        ...prev,
                        courseId: e.target.value,
                        scheduleId: '',
                        desiredSchedule: '',
                      }));
                    }}
                  >
                    {formData.mode === 'consultation' && (
                      <MenuItem value="0">Chưa xác định – cần tư vấn</MenuItem>
                    )}
                    {courses.map((course) => (
                      <MenuItem key={course.id} value={course.id}>
                        {course.subject} · {formatVnd(course.price)} / 8 buổi
                      </MenuItem>
                    ))}
                  </TextField>

                  {selectedCourse && (
                    <Box
                      sx={{
                        p: 2.5,
                        borderRadius: 3,
                        bgcolor: '#f8fafc',
                        border: '1px solid #e3e8ef',
                      }}
                    >
                      <Typography sx={{ fontWeight: 900, color: '#1a237e' }}>
                        {selectedCourse.subject} · {selectedTeacher?.name}
                      </Typography>
                      <Typography color="text.secondary" variant="body2">
                        {selectedCourse.sessions} buổi trong {selectedCourse.weeks} tuần ·{' '}
                        {formatVnd(selectedCourse.price)}
                      </Typography>
                    </Box>
                  )}

                  {selectedCourse && selectedCourse.schedules.length > 0 && (
                    <TextField
                      fullWidth
                      select
                      required={formData.mode === 'registration'}
                      label={
                        formData.mode === 'registration'
                          ? 'Chọn lịch học'
                          : 'Lịch học quan tâm'
                      }
                      value={formData.scheduleId}
                      onChange={(e) => update('scheduleId', e.target.value)}
                    >
                      {formData.mode === 'consultation' && (
                        <MenuItem value="0">Chưa chọn lịch</MenuItem>
                      )}
                      {selectedCourse.schedules.map((schedule) => (
                        <MenuItem key={schedule.id} value={schedule.id}>
                          {schedule.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}

                  {selectedCourse && selectedCourse.schedules.length === 0 && (
                    <>
                      <TextField
                        fullWidth
                        label="Lịch học mong muốn"
                        placeholder="Ví dụ: tối Thứ 5, 19:00 – 21:00"
                        value={formData.desiredSchedule}
                        onChange={(e) => update('desiredSchedule', e.target.value)}
                      />
                      {formData.mode === 'registration' && (
                        <Alert severity="warning">
                          Môn này chưa có ca học chính thức nên chưa mở thanh toán. Hãy
                          chuyển sang “Tôi cần tư vấn” và ghi lịch mong muốn để trung tâm
                          xác nhận trước.
                        </Alert>
                      )}
                    </>
                  )}

                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="Ghi chú / nhu cầu cần tư vấn thêm"
                    value={formData.note}
                    onChange={(e) => update('note', e.target.value)}
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
                      onChange={(e) => update('website', e.target.value)}
                    />
                  </Box>

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.consent}
                        onChange={(e) => update('consent', e.target.checked)}
                      />
                    }
                    label="Tôi đồng ý để trung tâm sử dụng thông tin trên nhằm liên hệ tư vấn, xác nhận lớp học và xử lý đăng ký."
                  />

                  {formData.mode === 'registration' && selectedCourse && (
                    <Alert severity="info">
                      Số tiền thanh toán: <b>{formatVnd(selectedCourse.price)}</b>. Sau
                      khi gửi đăng ký, phụ huynh sẽ được chuyển sang VNPAY QR. Hệ thống
                      chỉ ghi nhận thanh toán thành công sau khi kiểm tra chữ ký trả về
                      từ VNPAY.
                    </Alert>
                  )}

                  <Button
                    type="submit"
                    disabled={
                      isSubmitting ||
                      (formData.mode === 'registration' &&
                        !!selectedCourse &&
                        selectedCourse.schedules.length === 0)
                    }
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
                    ) : formData.mode === 'registration' ? (
                      'Đăng ký tham gia khóa học'
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
