'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import HourglassTopRoundedIcon from '@mui/icons-material/HourglassTopRounded';

import { getAnswerBookBySlug } from '@/app/data/answerBooks';

const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

export default function DapAnPage() {
  const params = useParams();

  const slug = Array.isArray(params.slug)
    ? params.slug[0]
    : params.slug;

  const book = getAnswerBookBySlug(slug || '');

  if (!book) {
    return (
      <Container maxWidth="sm" sx={{ py: 15, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 900 }}>
          Không tìm thấy tài liệu
        </Typography>

        <Button
          component={Link}
          href="/tai-lieu-on-luyen"
          sx={{ mt: 3 }}
        >
          Quay lại kho tài liệu
        </Button>
      </Container>
    );
  }

  return (
    <Box
      sx={{
        fontFamily: fontBody,
        bgcolor: '#f8fafc',
        minHeight: '100vh',
        py: { xs: 10, md: 14 },
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={0}
          sx={{
            borderRadius: 6,
            overflow: 'hidden',
            border: '1px solid #e2e8f0',
            boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
          }}
        >
          <Box
            sx={{
              background: book.gradient,
              color: 'white',
              textAlign: 'center',
              px: 4,
              py: 6,
            }}
          >
            <Typography
              sx={{
                fontSize: '5rem',
                fontWeight: 900,
                lineHeight: 1,
                mb: 2,
              }}
            >
              {book.icon}
            </Typography>

            <Typography
              variant="overline"
              sx={{
                fontWeight: 800,
                letterSpacing: 2,
              }}
            >
              ĐÁP ÁN TOÁN LỚP {book.grade}
            </Typography>
          </Box>

          <Stack
            spacing={3}
            sx={{
              p: { xs: 3, md: 5 },
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: fontHeader,
                fontWeight: 900,
                color: '#1a237e',
              }}
            >
              {book.title}
            </Typography>

            <Typography color="text.secondary">
              {book.desc}
            </Typography>

            {book.fileUrl ? (
              <>
                <Typography
                  sx={{
                    color: 'success.main',
                    fontWeight: 800,
                  }}
                >
                  Tài liệu đã sẵn sàng
                </Typography>

                <Button
                  component="a"
                  href={book.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  size="large"
                  startIcon={<AutoStoriesRoundedIcon />}
                  sx={{
                    background: book.gradient,
                    borderRadius: 50,
                    py: 1.5,
                    fontWeight: 900,
                  }}
                >
                  Xem đáp án
                </Button>
              </>
            ) : (
              <Box
                sx={{
                  bgcolor: '#fff8e1',
                  borderRadius: 4,
                  p: 3,
                  border: '1px solid #ffe082',
                }}
              >
                <HourglassTopRoundedIcon
                  sx={{
                    fontSize: 45,
                    color: '#f57c00',
                    mb: 1,
                  }}
                />

                <Typography
                  variant="h6"
                  sx={{ fontWeight: 900 }}
                >
                  Đáp án đang được cập nhật
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  Nội dung đáp án và hướng dẫn giải chi tiết
                  sẽ được cập nhật tại chính đường dẫn này.
                </Typography>
              </Box>
            )}

            <Button
              component={Link}
              href="/tai-lieu-on-luyen"
              startIcon={<ArrowBackRoundedIcon />}
              sx={{
                fontWeight: 800,
              }}
            >
              Kho tài liệu ôn luyện
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}