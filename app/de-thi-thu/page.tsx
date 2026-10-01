'use client';

import { useMemo, useState } from 'react';
import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import TimerRoundedIcon from '@mui/icons-material/TimerRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import Link from 'next/link';
import FadeInScroll from '../components/FadeInScroll';

const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

type ExamItem = {
  id: string;
  title: string;
  subject: 'Toán' | 'Ngữ Văn' | 'Tiếng Anh';
  type: 'exam' | 'answer';
  time: string;
  year: string;
  fileUrl: string;
};

const literatureExams: ExamItem[] = Array.from({ length: 10 }, (_, index) => {
  const number = index + 1;

  return [
    {
      id: 'van-exam-' + number,
      title: 'Đề thi thử Tuyển sinh 10 - Môn Ngữ Văn (Đề ' + number + ')',
      subject: 'Ngữ Văn' as const,
      type: 'exam' as const,
      time: '120 phút',
      year: '2026',
      fileUrl: '/exam/mon-van/de-thi/de' + number + '.pdf',
    },
    {
      id: 'van-answer-' + number,
      title: 'Đáp án đề thi thử Tuyển sinh 10 - Môn Ngữ Văn (Đề ' + number + ')',
      subject: 'Ngữ Văn' as const,
      type: 'answer' as const,
      time: '120 phút',
      year: '2026',
      fileUrl: '/exam/mon-van/dap-an/de' + number + '.pdf',
    },
  ];
}).flat();

const officialExams: ExamItem[] = [
  {
    id: 'official-toan-exam',
    title: 'Đề thi Tuyển sinh 10 - Môn Toán',
    subject: 'Toán',
    type: 'exam',
    time: '120 phút',
    year: '2025',
    fileUrl: '/exam/Đề thi NH 2024–2025/De-thi-TS10-nam-hoc-2025-2026-Mon-Toan-pdf.pdf',
  },
  {
    id: 'official-toan-answer',
    title: 'Đáp án Đề thi Tuyển sinh 10 - Môn Toán',
    subject: 'Toán',
    type: 'answer',
    time: '120 phút',
    year: '2025',
    fileUrl: '/exam/Đề thi NH 2024–2025/Dap-an-De-thi-TS10-nam-hoc-2025-2026-Mon-Toan-pdf.pdf',
  },
  {
    id: 'official-anh-exam',
    title: 'Đề thi Tuyển sinh 10 - Môn Tiếng Anh',
    subject: 'Tiếng Anh',
    type: 'exam',
    time: '90 phút',
    year: '2025',
    fileUrl: '/exam/Đề thi NH 2024–2025/De-thi-TS10-nam-hoc-2025-2026-Mon-Tieng-Anh-pdf.pdf',
  },
  {
    id: 'official-anh-answer',
    title: 'Đáp án Đề thi Tuyển sinh 10 - Môn Tiếng Anh',
    subject: 'Tiếng Anh',
    type: 'answer',
    time: '90 phút',
    year: '2025',
    fileUrl: '/exam/Đề thi NH 2024–2025/Dap-an-De-thi-TS10-nam-hoc-2025-2026-Mon-Tieng-Anh-pdf.pdf',
  },
  {
    id: 'official-van-exam',
    title: 'Đề thi Tuyển sinh 10 - Môn Ngữ Văn',
    subject: 'Ngữ Văn',
    type: 'exam',
    time: '120 phút',
    year: '2025',
    fileUrl: '/exam/Đề thi NH 2024–2025/De-thi-TS10-nam-hoc-2025-2026-Mon-Ngu-van-pdf.pdf',
  },
  {
    id: 'official-van-answer',
    title: 'Đáp án Đề thi Tuyển sinh 10 - Môn Ngữ Văn',
    subject: 'Ngữ Văn',
    type: 'answer',
    time: '120 phút',
    year: '2025',
    fileUrl: '/exam/Đề thi NH 2024–2025/Dap-an-De-thi-TS10-nam-hoc-2025-2026-Mon-Ngu-van-pdf.pdf',
  },
];

const exams = [...literatureExams, ...officialExams];
const subjects = ['Tất cả', 'Toán', 'Ngữ Văn', 'Tiếng Anh'] as const;

const subjectMeta = {
  'Toán': { accent: '#2f6fed', soft: '#eaf2ff', label: 'TOÁN' },
  'Ngữ Văn': { accent: '#e14d4d', soft: '#fff0f0', label: 'NGỮ VĂN' },
  'Tiếng Anh': { accent: '#22a06b', soft: '#e9f8f1', label: 'TIẾNG ANH' },
};

export default function DeThiThuPage() {
  const [activeSubject, setActiveSubject] = useState<(typeof subjects)[number]>('Tất cả');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredExams = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return exams.filter((exam) => {
      const matchSubject = activeSubject === 'Tất cả' || exam.subject === activeSubject;
      const matchSearch = !query || exam.title.toLowerCase().includes(query);
      return matchSubject && matchSearch;
    });
  }, [activeSubject, searchQuery]);

  return (
    <Box sx={{ fontFamily: fontBody, bgcolor: '#f6f9ff', minHeight: '100vh', pb: 12 }}>
      <Box
        className="animated-mesh noise-overlay"
        sx={{
          py: { xs: 8, md: 10 },
          textAlign: 'center',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          className="floating-orb"
          sx={{
            position: 'absolute',
            width: 370,
            height: 370,
            borderRadius: '50%',
            left: -145,
            top: -130,
            bgcolor: 'rgba(255,255,255,.06)',
          }}
        />

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <FadeInScroll>
            <Chip
              icon={<AssignmentRoundedIcon />}
              label="KHO ĐỀ LUYỆN"
              sx={{
                mb: 2,
                bgcolor: 'rgba(255,255,255,.13)',
                color: 'white',
                border: '1px solid rgba(255,255,255,.18)',
                fontFamily: fontHeader,
                fontWeight: 900,
                '& .MuiChip-icon': { color: '#ffd166' },
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontFamily: fontHeader,
                fontWeight: 900,
                fontSize: { xs: '2.3rem', md: '3.7rem' },
                lineHeight: 1.08,
                letterSpacing: '-0.04em',
              }}
            >
              Luyện đề như thi thật.
              <Box component="span" sx={{ display: 'block', color: '#ffd166' }}>
                Biết mình đang ở đâu.
              </Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{ mt: 2.2, opacity: 0.9, lineHeight: 1.75, fontWeight: 500 }}
            >
              Chọn môn, bấm giờ và thử sức với đề thi tuyển sinh lớp 10.
              Đáp án được tách riêng để học sinh có thể tự làm trước khi đối chiếu.
            </Typography>
          </FadeInScroll>

          <FadeInScroll delay={0.1}>
            <Card
              className="glass-panel"
              sx={{ mt: 4, p: 0.8, borderRadius: 999, maxWidth: 700, mx: 'auto' }}
            >
              <TextField
                fullWidth
                placeholder="Tìm kiếm đề thi..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                sx={{
                  '& fieldset': { border: 'none' },
                  '& .MuiInputBase-root': { borderRadius: 999 },
                  '& input': { fontFamily: fontBody, py: 1.45 },
                }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchRoundedIcon sx={{ color: '#2f6fed' }} />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Card>
          </FadeInScroll>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: -3, position: 'relative', zIndex: 5 }}>
        <FadeInScroll>
          <Box
            className="glass-panel"
            sx={{
              p: 1.2,
              borderRadius: 4,
              display: 'flex',
              gap: 0.8,
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TuneRoundedIcon sx={{ color: '#71809a', mr: 0.4 }} />
            {subjects.map((subject) => {
              const active = activeSubject === subject;

              return (
                <Button
                  key={subject}
                  onClick={() => setActiveSubject(subject)}
                  variant={active ? 'contained' : 'text'}
                  sx={{
                    borderRadius: 999,
                    px: 2.6,
                    py: 0.85,
                    textTransform: 'none',
                    fontFamily: fontHeader,
                    fontWeight: 900,
                    color: active ? 'white' : '#52627d',
                    bgcolor: active ? '#153a8a' : 'transparent',
                    '&:hover': { bgcolor: active ? '#153a8a' : '#edf3fc' },
                  }}
                >
                  {subject}
                </Button>
              );
            })}
          </Box>
        </FadeInScroll>
      </Container>

      <Container maxWidth="xl" sx={{ mt: 7 }}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1}
          sx={{ mb: 3, alignItems: { sm: 'center' }, justifyContent: 'space-between' }}
        >
          <Typography
            variant="h5"
            sx={{ fontFamily: fontHeader, fontWeight: 900, color: '#102044' }}
          >
            {activeSubject === 'Tất cả' ? 'Tất cả đề & đáp án' : 'Môn ' + activeSubject}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            {filteredExams.length} tài liệu phù hợp
          </Typography>
        </Stack>

        {filteredExams.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 10 }}>
            <AssignmentRoundedIcon sx={{ fontSize: 48, color: '#a6b3c8' }} />
            <Typography variant="h5" sx={{ mt: 1.5, fontFamily: fontHeader, fontWeight: 900, color: '#53627d' }}>
              Chưa tìm thấy đề phù hợp
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 0.7 }}>
              Thử từ khóa khác hoặc chọn lại môn học.
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={2.5}>
            {filteredExams.map((exam, index) => {
              const meta = subjectMeta[exam.subject];
              const isExam = exam.type === 'exam';

              return (
                <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={exam.id}>
                  <FadeInScroll delay={(index % 4) * 0.04}>
                    <Card
                      className="card-lift"
                      sx={{
                        height: '100%',
                        borderRadius: 4.5,
                        border: '1px solid #e4ecf7',
                        boxShadow: '0 12px 32px rgba(15,48,105,.055)',
                        bgcolor: 'white',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <Box
                        sx={{
                          p: 2.5,
                          bgcolor: meta.soft,
                          borderBottom: '1px solid #e9eef7',
                          position: 'relative',
                          overflow: 'hidden',
                        }}
                      >
                        <Box
                          sx={{
                            position: 'absolute',
                            width: 120,
                            height: 120,
                            borderRadius: '50%',
                            right: -50,
                            top: -55,
                            bgcolor: 'rgba(255,255,255,.55)',
                          }}
                        />
                        <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
                          <Box
                            sx={{
                              width: 48,
                              height: 48,
                              borderRadius: 2.7,
                              bgcolor: meta.accent,
                              color: 'white',
                              display: 'grid',
                              placeItems: 'center',
                            }}
                          >
                            {isExam ? <AssignmentRoundedIcon /> : <CheckCircleRoundedIcon />}
                          </Box>
                          <Chip
                            label={exam.year}
                            size="small"
                            sx={{ bgcolor: 'white', fontWeight: 900, color: '#52627d' }}
                          />
                        </Stack>
                      </Box>

                      <Box sx={{ p: 2.7, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                        <Typography
                          variant="overline"
                          sx={{
                            fontFamily: fontHeader,
                            fontWeight: 900,
                            color: meta.accent,
                            letterSpacing: 0.8,
                          }}
                        >
                          {meta.label} · {isExam ? 'ĐỀ THI' : 'ĐÁP ÁN'}
                        </Typography>

                        <Typography
                          variant="h6"
                          sx={{
                            mt: 0.7,
                            fontFamily: fontHeader,
                            fontWeight: 900,
                            color: '#102044',
                            lineHeight: 1.4,
                          }}
                        >
                          {exam.title}
                        </Typography>

                        <Stack direction="row" spacing={0.8} sx={{ mt: 2, alignItems: 'center', color: '#71809a' }}>
                          <TimerRoundedIcon sx={{ fontSize: 19, color: '#f08a24' }} />
                          <Typography variant="body2" sx={{ fontWeight: 700 }}>
                            {exam.time}
                          </Typography>
                        </Stack>

                        <Button
                          component="a"
                          href={exam.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          fullWidth
                          variant="contained"
                          startIcon={<PictureAsPdfRoundedIcon />}
                          sx={{
                            mt: 'auto',
                            pt: 1.15,
                            pb: 1.15,
                            borderRadius: 999,
                            textTransform: 'none',
                            fontFamily: fontHeader,
                            fontWeight: 900,
                            bgcolor: isExam ? meta.accent : '#22a06b',
                            '&:hover': {
                              bgcolor: isExam ? meta.accent : '#1c8b5e',
                              filter: isExam ? 'brightness(.92)' : 'none',
                            },
                          }}
                        >
                          Mở {isExam ? 'đề thi' : 'đáp án'}
                        </Button>
                      </Box>
                    </Card>
                  </FadeInScroll>
                </Grid>
              );
            })}
          </Grid>
        )}

        <FadeInScroll>
          <Box
            sx={{
              mt: 7,
              p: { xs: 3, md: 4 },
              borderRadius: 5,
              bgcolor: '#102a66',
              color: 'white',
              display: { md: 'flex' },
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 3,
            }}
          >
            <Box>
              <Typography variant="h5" sx={{ fontFamily: fontHeader, fontWeight: 900 }}>
                Muốn có lộ trình ôn tập theo từng môn?
              </Typography>
              <Typography sx={{ mt: 0.7, opacity: 0.8, lineHeight: 1.7 }}>
                Chọn môn quan tâm để được tư vấn khóa học và cách kết hợp học – xem lại – luyện đề.
              </Typography>
            </Box>
            <Button
              component={Link}
              href="/#form-dang-ky"
              variant="contained"
              sx={{
                mt: { xs: 2, md: 0 },
                borderRadius: 999,
                px: 3,
                py: 1.2,
                textTransform: 'none',
                fontFamily: fontHeader,
                fontWeight: 900,
                whiteSpace: 'nowrap',
                bgcolor: '#ff8a1f',
                '&:hover': { bgcolor: '#f57c00' },
              }}
            >
              Đăng ký tư vấn
            </Button>
          </Box>
        </FadeInScroll>
      </Container>
    </Box>
  );
}
