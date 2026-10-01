'use client';

import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import CalculateRoundedIcon from '@mui/icons-material/CalculateRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import {
  PublicCourseSelection as CourseSelection,
  publicCourses as courses,
} from '../data/public-enrollment';

type Props = {
  value: CourseSelection[];
  onChange: (value: CourseSelection[]) => void;
};

const subjectMeta: Record<
  string,
  { icon: React.ReactNode; accent: string; soft: string }
> = {
  toan: {
    icon: <CalculateRoundedIcon />,
    accent: '#2f6fed',
    soft: '#eaf2ff',
  },
  'ngu-van': {
    icon: <MenuBookRoundedIcon />,
    accent: '#e14d4d',
    soft: '#fff0f0',
  },
  'tieng-anh': {
    icon: <TranslateRoundedIcon />,
    accent: '#22a06b',
    soft: '#e9f8f1',
  },
};

export default function CourseSelectionField({ value, onChange }: Props) {
  const toggleCourse = (courseId: string) => {
    const exists = value.some((item) => item.courseId === courseId);

    if (exists) {
      onChange(value.filter((item) => item.courseId !== courseId));
      return;
    }

    onChange([
      ...value,
      {
        courseId,
        teacherId: '',
        scheduleId: '',
      },
    ]);
  };

  return (
    <Box>
      <Typography
        sx={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 900,
          color: '#102044',
          mb: 0.6,
        }}
      >
        Môn học quan tâm *
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Chọn một hoặc nhiều môn để được tư vấn.
      </Typography>

      <Grid container spacing={1.5}>
        {courses.map((course) => {
          const selected = value.some((item) => item.courseId === course.id);
          const meta = subjectMeta[course.id] || subjectMeta.toan;

          return (
            <Grid key={course.id} size={{ xs: 12, sm: 4 }}>
              <Paper
                variant="outlined"
                className="card-lift"
                sx={{
                  height: '100%',
                  borderRadius: 3.5,
                  overflow: 'hidden',
                  borderWidth: selected ? 2 : 1,
                  borderColor: selected ? meta.accent : '#e3eaf5',
                  bgcolor: selected ? meta.soft : 'white',
                  boxShadow: selected
                    ? '0 12px 28px rgba(15,48,105,.10)'
                    : '0 6px 18px rgba(15,48,105,.035)',
                  position: 'relative',
                }}
              >
                {selected && (
                  <CheckCircleRoundedIcon
                    sx={{
                      position: 'absolute',
                      right: 12,
                      top: 12,
                      color: meta.accent,
                      fontSize: 22,
                    }}
                  />
                )}

                <FormControlLabel
                  sx={{
                    m: 0,
                    p: 2.2,
                    width: '100%',
                    minHeight: 110,
                    cursor: 'pointer',
                    alignItems: 'center',
                    '& .MuiFormControlLabel-label': { width: '100%' },
                  }}
                  control={
                    <Checkbox
                      checked={selected}
                      onChange={() => toggleCourse(course.id)}
                      sx={{ display: 'none' }}
                    />
                  }
                  label={
                    <Box sx={{ textAlign: 'center' }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          mx: 'auto',
                          mb: 1.2,
                          borderRadius: 2.7,
                          display: 'grid',
                          placeItems: 'center',
                          bgcolor: meta.soft,
                          color: meta.accent,
                        }}
                      >
                        {meta.icon}
                      </Box>
                      <Typography
                        sx={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 900,
                          color: selected ? meta.accent : '#102044',
                          fontSize: '1rem',
                        }}
                      >
                        {course.subject}
                      </Typography>
                    </Box>
                  }
                />
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
