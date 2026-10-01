'use client';

import {
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
  getTeacherById,
} from '../data/enrollment';

type Props = {
  value: CourseSelection[];
  onChange: (value: CourseSelection[]) => void;
};

export default function CourseSelectionField({ value, onChange }: Props) {
  const toggleCourse = (courseId: string) => {
    const exists = value.some((item) => item.courseId === courseId);

    if (exists) {
      onChange(value.filter((item) => item.courseId !== courseId));
      return;
    }

    const course = courses.find((item) => item.id === courseId);
    if (!course) return;

    const onlyTeacher = course.teachers.length === 1 ? course.teachers[0] : undefined;

    onChange([
      ...value,
      {
        courseId,
        teacherId: onlyTeacher?.teacherId || '',
        scheduleId: '',
      },
    ]);
  };

  const changeTeacher = (courseId: string, teacherId: string) => {
    onChange(
      value.map((item) =>
        item.courseId === courseId
          ? { ...item, teacherId, scheduleId: '' }
          : item,
      ),
    );
  };

  return (
    <Stack spacing={2}>
      <Box>
        <Typography sx={{ fontWeight: 900, color: '#1a237e' }}>
          Môn học quan tâm *
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          Có thể chọn nhiều môn. Học phí và lịch học sẽ được tư vấn trực tiếp sau khi
          trung tâm tiếp nhận thông tin.
        </Typography>
      </Box>

      {courses.map((course) => {
        const selected = value.find((item) => item.courseId === course.id);
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
                      {course.sessions} buổi / {course.weeks} tuần
                    </Typography>
                  </Box>
                }
              />
            </Box>

            {selected && (
              <Box
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
                    label="Giáo viên quan tâm"
                    value={selected.teacherId}
                    onChange={(event) =>
                      changeTeacher(course.id, event.target.value)
                    }
                  >
                    <MenuItem value="">Chưa chọn giáo viên</MenuItem>
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
                      Giáo viên phụ trách
                    </Typography>
                    <Typography sx={{ fontWeight: 800 }}>
                      {selectedTeacher?.name || 'Đang cập nhật'}
                    </Typography>
                  </Box>
                )}
              </Box>
            )}
          </Paper>
        );
      })}
    </Stack>
  );
}
