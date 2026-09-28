'use client';

import {
  Alert,
  Box,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import {
  CourseSelection,
  courses,
  formatVnd,
  getTeacherById,
  makeDefaultCourseSelection,
} from '../data/enrollment';

type Props = {
  mode: 'consultation' | 'registration';
  value: CourseSelection[];
  onChange: (value: CourseSelection[]) => void;
};

export default function CourseSelectionField({ mode, value, onChange }: Props) {
  const toggleCourse = (courseId: string) => {
    const exists = value.some((item) => item.courseId === courseId);

    if (exists) {
      onChange(value.filter((item) => item.courseId !== courseId));
      return;
    }

    const defaultSelection = makeDefaultCourseSelection(courseId);
    if (!defaultSelection) return;

    onChange([...value, defaultSelection]);
  };

  const changeTeacher = (courseId: string, teacherId: string) => {
    const course = courses.find((item) => item.id === courseId);
    const teacherOption = course?.teachers.find(
      (item) => item.teacherId === teacherId,
    );

    const scheduleId =
      teacherOption?.schedules.length === 1
        ? teacherOption.schedules[0].id
        : '';

    onChange(
      value.map((item) =>
        item.courseId === courseId
          ? { ...item, teacherId, scheduleId }
          : item,
      ),
    );
  };

  const changeSchedule = (courseId: string, scheduleId: string) => {
    onChange(
      value.map((item) =>
        item.courseId === courseId ? { ...item, scheduleId } : item,
      ),
    );
  };

  return (
    <Stack spacing={2}>
      <Box>
        <Typography sx={{ fontWeight: 900, color: '#1a237e' }}>
          {mode === 'registration' ? 'Môn học đăng ký *' : 'Môn học quan tâm'}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          Có thể chọn nhiều môn. Mỗi môn có thể có nhiều giáo viên và nhiều ca học.
        </Typography>
      </Box>

      {courses.map((course) => {
        const selected = value.find((item) => item.courseId === course.id);
        const selectedTeacherOption = course.teachers.find(
          (item) => item.teacherId === selected?.teacherId,
        );
        const selectedTeacher = selected?.teacherId
          ? getTeacherById(selected.teacherId)
          : undefined;

        return (
          <Paper
            key={course.id}
            variant="outlined"
            sx={{
              borderRadius: 3,
              overflow: 'hidden',
              borderColor: selected ? 'primary.main' : 'divider',
              borderWidth: selected ? 2 : 1,
            }}
          >
            <Box sx={{ p: 2 }}>
              <FormControlLabel
                sx={{ m: 0, width: '100%', alignItems: 'flex-start' }}
                control={
                  <Checkbox
                    checked={Boolean(selected)}
                    onChange={() => toggleCourse(course.id)}
                  />
                }
                label={
                  <Box sx={{ pt: 0.35 }}>
                    <Typography sx={{ fontWeight: 900 }}>
                      {course.subject}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {course.sessions} buổi / {course.weeks} tuần ·{' '}
                      {formatVnd(course.price)}
                    </Typography>
                  </Box>
                }
              />
            </Box>

            {selected && (
              <Stack
                spacing={2}
                sx={{
                  px: 2,
                  pb: 2,
                  pt: 1.5,
                  bgcolor: '#f8fafc',
                  borderTop: '1px solid #e5eaf0',
                }}
              >
                {course.teachers.length > 1 ? (
                  <TextField
                    select
                    fullWidth
                    required={mode === 'registration'}
                    label="Giáo viên"
                    value={selected.teacherId}
                    onChange={(event) =>
                      changeTeacher(course.id, event.target.value)
                    }
                  >
                    <MenuItem value="">Chọn giáo viên</MenuItem>
                    {course.teachers.map((teacherOption) => {
                      const teacher = getTeacherById(teacherOption.teacherId);
                      return (
                        <MenuItem
                          key={teacherOption.teacherId}
                          value={teacherOption.teacherId}
                        >
                          {teacher?.name || teacherOption.teacherId}
                        </MenuItem>
                      );
                    })}
                  </TextField>
                ) : (
                  <Box>
                    <Typography variant="caption" color="text.secondary">
                      Giáo viên
                    </Typography>
                    <Typography sx={{ fontWeight: 800 }}>
                      {selectedTeacher?.name || 'Đang cập nhật'}
                    </Typography>
                  </Box>
                )}

                {selectedTeacherOption ? (
                  selectedTeacherOption.schedules.length > 1 ? (
                    <TextField
                      select
                      fullWidth
                      required={mode === 'registration'}
                      label={
                        mode === 'registration'
                          ? 'Chọn lịch học'
                          : 'Lịch học quan tâm'
                      }
                      value={selected.scheduleId}
                      onChange={(event) =>
                        changeSchedule(course.id, event.target.value)
                      }
                    >
                      <MenuItem value="">Chưa chọn lịch</MenuItem>
                      {selectedTeacherOption.schedules.map((schedule) => (
                        <MenuItem key={schedule.id} value={schedule.id}>
                          {schedule.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  ) : selectedTeacherOption.schedules.length === 1 ? (
                    <Box>
                      <Typography variant="caption" color="text.secondary">
                        Lịch học
                      </Typography>
                      <Typography sx={{ fontWeight: 800 }}>
                        {selectedTeacherOption.schedules[0].label}
                      </Typography>
                    </Box>
                  ) : (
                    <Alert severity="warning">
                      Giáo viên này chưa có ca học chính thức.
                    </Alert>
                  )
                ) : (
                  <Typography variant="body2" color="text.secondary">
                    Chọn giáo viên để xem các ca học đang mở.
                  </Typography>
                )}
              </Stack>
            )}
          </Paper>
        );
      })}
    </Stack>
  );
}
