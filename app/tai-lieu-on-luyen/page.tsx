'use client';

import Link from 'next/link';

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';

import { keyframes } from '@mui/system';

import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';

const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

/* =========================================================
   ANIMATION
========================================================= */

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

/* =========================================================
   TÀI LIỆU HIỆN CÓ

   Nếu tên file PDF hiện tại của bạn khác,
   chỉ cần sửa fileUrl bên dưới.
========================================================= */

const coreBooks = [
  {
    id: 1,
    subject: 'TOÁN',
    title: 'Tài liệu ôn luyện môn Toán',
    description:
      'Hệ thống kiến thức trọng tâm, dạng bài và nội dung ôn luyện dành cho học sinh.',
    fileUrl: '/book/sach_toan.pdf',
    gradient:
      'linear-gradient(135deg, #1565c0 0%, #42a5f5 100%)',
    icon: '∑',
  },
  {
    id: 2,
    subject: 'NGỮ VĂN',
    title: 'Tài liệu ôn luyện môn Ngữ văn',
    description:
      'Tổng hợp kiến thức, phương pháp làm bài và nội dung ôn tập môn Ngữ văn.',
    fileUrl: '/book/sach_van.pdf',
    gradient:
      'linear-gradient(135deg, #c62828 0%, #ef5350 100%)',
    icon: 'V',
  },
  {
    id: 3,
    subject: 'TIẾNG ANH',
    title: 'Tài liệu ôn luyện môn Tiếng Anh',
    description:
      'Ôn tập từ vựng, ngữ pháp và các dạng bài trọng tâm môn Tiếng Anh.',
    fileUrl: '/book/sach_anh.pdf',
    gradient:
      'linear-gradient(135deg, #2e7d32 0%, #66bb6a 100%)',
    icon: 'A',
  },
];

/* =========================================================
   4 CUỐN ĐÁP ÁN TOÁN

   Các URL slug này phải GIỮ CỐ ĐỊNH vì QR sau này
   sẽ trỏ vào chính các đường dẫn này.

   Không đổi slug sau khi đã in QR vào sách.
========================================================= */

const answerBooks = [
  {
    id: 6,
    grade: 6,
    slug: 'dap-an-toan-6',
    title: 'Đáp án sách Toán 6',
    description:
      'Đáp án và hướng dẫn giải chi tiết các bài tập trong sách Toán lớp 6.',
    gradient:
      'linear-gradient(135deg, #1565c0 0%, #42a5f5 100%)',
    available: false,
  },
  {
    id: 7,
    grade: 7,
    slug: 'dap-an-toan-7',
    title: 'Đáp án sách Toán 7',
    description:
      'Đáp án và hướng dẫn giải chi tiết các bài tập trong sách Toán lớp 7.',
    gradient:
      'linear-gradient(135deg, #00897b 0%, #26a69a 100%)',
    available: false,
  },
  {
    id: 8,
    grade: 8,
    slug: 'dap-an-toan-8',
    title: 'Đáp án sách Toán 8',
    description:
      'Đáp án và hướng dẫn giải chi tiết các bài tập trong sách Toán lớp 8.',
    gradient:
      'linear-gradient(135deg, #ef6c00 0%, #ffa726 100%)',
    available: false,
  },
  {
    id: 9,
    grade: 9,
    slug: 'dap-an-toan-9',
    title: 'Đáp án sách Toán 9',
    description:
      'Đáp án và hướng dẫn giải chi tiết các bài tập trong sách Toán lớp 9.',
    gradient:
      'linear-gradient(135deg, #6a1b9a 0%, #ab47bc 100%)',
    available: false,
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function TaiLieuOnLuyenPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#f8fafc',
        fontFamily: fontBody,
        overflow: 'hidden',
      }}
    >
      {/* =====================================================
          HERO
      ===================================================== */}

      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          background:
            'linear-gradient(135deg, #0d47a1 0%, #1565c0 50%, #1e88e5 100%)',
          color: '#fff',
          pt: {
            xs: 12,
            md: 15,
          },
          pb: {
            xs: 10,
            md: 13,
          },
        }}
      >
        {/* Decorative circles */}

        <Box
          sx={{
            position: 'absolute',
            width: 380,
            height: 380,
            borderRadius: '50%',
            bgcolor: 'rgba(255,255,255,0.06)',
            top: -180,
            right: -80,
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            width: 260,
            height: 260,
            borderRadius: '50%',
            bgcolor: 'rgba(255,255,255,0.05)',
            bottom: -130,
            left: -70,
          }}
        />

        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              maxWidth: 820,
              mx: 'auto',
              textAlign: 'center',
              animation: `${fadeInUp} 0.7s ease-out`,
            }}
          >
            <Chip
              icon={
                <LibraryBooksRoundedIcon
                  sx={{
                    color: '#fff !important',
                  }}
                />
              }
              label="KHO TÀI LIỆU HỌC TẬP"
              sx={{
                mb: 3,
                px: 1,
                height: 38,
                bgcolor: 'rgba(255,255,255,0.15)',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.25)',
                fontFamily: fontHeader,
                fontWeight: 800,
                letterSpacing: 0.5,
              }}
            />

            <Typography
              component="h1"
              sx={{
                fontFamily: fontHeader,
                fontWeight: 900,
                fontSize: {
                  xs: '2.3rem',
                  sm: '3rem',
                  md: '4rem',
                },
                lineHeight: 1.1,
                mb: 3,
              }}
            >
              TÀI LIỆU ÔN LUYỆN
            </Typography>

            <Typography
              sx={{
                maxWidth: 700,
                mx: 'auto',
                fontSize: {
                  xs: '1rem',
                  md: '1.15rem',
                },
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.9)',
              }}
            >
              Kho tài liệu hỗ trợ học sinh củng cố kiến thức,
              luyện tập và tra cứu đáp án trong quá trình học tập.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* =====================================================
          TÀI LIỆU ÔN LUYỆN HIỆN CÓ
      ===================================================== */}

      <Container
        maxWidth="xl"
        sx={{
          py: {
            xs: 8,
            md: 11,
          },
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            mb: {
              xs: 5,
              md: 7,
            },
          }}
        >
          <Chip
            label="TÀI LIỆU HỌC TẬP"
            sx={{
              mb: 2,
              bgcolor: '#e3f2fd',
              color: '#1565c0',
              fontWeight: 900,
              fontFamily: fontHeader,
            }}
          />

          <Typography
            variant="h3"
            sx={{
              fontFamily: fontHeader,
              fontWeight: 900,
              color: '#172554',
              fontSize: {
                xs: '2rem',
                md: '2.7rem',
              },
              mb: 2,
            }}
          >
            Tài liệu ôn luyện
          </Typography>

          <Typography
            sx={{
              color: '#64748b',
              maxWidth: 650,
              mx: 'auto',
              lineHeight: 1.8,
              fontSize: '1.05rem',
            }}
          >
            Các tài liệu được biên soạn nhằm hỗ trợ học sinh
            hệ thống kiến thức và nâng cao hiệu quả ôn tập.
          </Typography>
        </Box>

        <Grid
          container
          spacing={3}
          sx={{ justifyContent: "center" }}  
        >
          {coreBooks.map((book, index) => (
            <Grid
              size={{
                xs: 12,
                sm: 6,
                md: 4,
              }}
              key={book.id}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  borderRadius: 5,
                  bgcolor: '#fff',
                  border: '1px solid #e2e8f0',
                  boxShadow:
                    '0 12px 35px rgba(15, 23, 42, 0.07)',
                  transition:
                    'transform 0.3s ease, box-shadow 0.3s ease',
                  animation: `${fadeInUp} 0.7s ease-out ${
                    index * 0.1
                  }s both`,

                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow:
                      '0 22px 50px rgba(15, 23, 42, 0.12)',
                  },
                }}
              >
                {/* Book Header */}

                <Box
                  sx={{
                    minHeight: 210,
                    background: book.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      width: 170,
                      height: 170,
                      borderRadius: '50%',
                      bgcolor: 'rgba(255,255,255,0.08)',
                      top: -70,
                      right: -50,
                    }}
                  />

                  <Box
                    sx={{
                      position: 'absolute',
                      width: 130,
                      height: 130,
                      borderRadius: '50%',
                      bgcolor: 'rgba(255,255,255,0.07)',
                      bottom: -60,
                      left: -30,
                    }}
                  />

                  <Stack
                    spacing={1}
                    sx={{
                      alignItems: "center",
                      position: 'relative',
                      zIndex: 1,
                      color: '#fff',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '4.8rem',
                        fontFamily: fontHeader,
                        fontWeight: 900,
                        lineHeight: 1,
                      }}
                    >
                      {book.icon}
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: fontHeader,
                        fontWeight: 900,
                        letterSpacing: 1,
                      }}
                    >
                      {book.subject}
                    </Typography>
                  </Stack>
                </Box>

                {/* Content */}

                <CardContent
                  sx={{
                    p: 3.5,
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: fontHeader,
                      fontWeight: 900,
                      color: '#172554',
                      lineHeight: 1.35,
                      mb: 2,
                    }}
                  >
                    {book.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: '#64748b',
                      lineHeight: 1.7,
                      mb: 3,
                      flexGrow: 1,
                    }}
                  >
                    {book.description}
                  </Typography>

                  <Button
                    component="a"
                    href={book.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    fullWidth
                    endIcon={<ArrowForwardRoundedIcon />}
                    sx={{
                      background: book.gradient,
                      py: 1.35,
                      borderRadius: 999,
                      fontFamily: fontHeader,
                      fontWeight: 900,
                      textTransform: 'none',
                      boxShadow: 'none',

                      '&:hover': {
                        boxShadow:
                          '0 10px 25px rgba(0,0,0,0.15)',
                      },
                    }}
                  >
                    Đọc tài liệu
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* =====================================================
          ĐÁP ÁN SÁCH TOÁN 6 - 9
      ===================================================== */}

      <Box
        sx={{
          bgcolor: '#ffffff',
          borderTop: '1px solid #eef2f7',
          borderBottom: '1px solid #eef2f7',
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            py: {
              xs: 8,
              md: 11,
            },
          }}
        >
          <Box
            sx={{
              textAlign: 'center',
              mb: {
                xs: 5,
                md: 7,
              },
            }}
          >
            <Chip
              icon={<MenuBookRoundedIcon />}
              label="ĐÁP ÁN & HƯỚNG DẪN GIẢI"
              sx={{
                mb: 2,
                bgcolor: '#eef2ff',
                color: '#3730a3',
                fontWeight: 900,
                fontFamily: fontHeader,

                '& .MuiChip-icon': {
                  color: '#3730a3',
                },
              }}
            />

            <Typography
              variant="h3"
              sx={{
                fontFamily: fontHeader,
                fontWeight: 900,
                color: '#172554',
                fontSize: {
                  xs: '2rem',
                  md: '2.7rem',
                },
                mb: 2,
              }}
            >
              Đáp án sách Toán
            </Typography>

            <Typography
              sx={{
                color: '#64748b',
                maxWidth: 700,
                mx: 'auto',
                lineHeight: 1.8,
                fontSize: '1.05rem',
              }}
            >
              Tra cứu đáp án và hướng dẫn giải dành cho
              học sinh lớp 6, 7, 8 và 9.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {answerBooks.map((book, index) => (
              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                  md: 3,
                }}
                key={book.id}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    borderRadius: 5,
                    border: '1px solid #e2e8f0',
                    bgcolor: '#fff',
                    boxShadow:
                      '0 10px 30px rgba(15, 23, 42, 0.06)',
                    transition:
                      'transform 0.3s ease, box-shadow 0.3s ease',
                    animation: `${fadeInUp} 0.7s ease-out ${
                      index * 0.1
                    }s both`,

                    '&:hover': {
                      transform: 'translateY(-7px)',
                      boxShadow:
                        '0 20px 45px rgba(15, 23, 42, 0.11)',
                    },
                  }}
                >
                  {/* Grade Header */}

                  <Box
                    sx={{
                      background: book.gradient,
                      minHeight: 175,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        width: 130,
                        height: 130,
                        borderRadius: '50%',
                        bgcolor: 'rgba(255,255,255,0.08)',
                        top: -50,
                        right: -30,
                      }}
                    />

                    <Stack
                      spacing={0.5}
                      sx={{
                        alignItems: "center",
                        color: '#fff',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: '4.5rem',
                          fontFamily: fontHeader,
                          fontWeight: 900,
                          lineHeight: 1,
                        }}
                      >
                        {book.grade}
                      </Typography>

                      <Typography
                        sx={{
                          fontFamily: fontHeader,
                          fontWeight: 900,
                          letterSpacing: 0.8,
                        }}
                      >
                        TOÁN LỚP {book.grade}
                      </Typography>
                    </Stack>
                  </Box>

                  {/* Answer Content */}

                  <CardContent
                    sx={{
                      p: 3,
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: fontHeader,
                        fontWeight: 900,
                        color: '#172554',
                        lineHeight: 1.4,
                        mb: 1.5,
                      }}
                    >
                      {book.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: '#64748b',
                        lineHeight: 1.7,
                        mb: 2.5,
                        flexGrow: 1,
                      }}
                    >
                      {book.description}
                    </Typography>

                    {/* Status */}

                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        px: 1.5,
                        py: 1,
                        mb: 2,
                        borderRadius: 2,
                        bgcolor: book.available
                          ? '#ecfdf5'
                          : '#fff7ed',
                        border: book.available
                          ? '1px solid #bbf7d0'
                          : '1px solid #fed7aa',
                      }}
                    >
                      {book.available ? (
                        <CheckCircleRoundedIcon
                          sx={{
                            fontSize: 18,
                            color: '#16a34a',
                          }}
                        />
                      ) : (
                        <AccessTimeRoundedIcon
                          sx={{
                            fontSize: 18,
                            color: '#ea580c',
                          }}
                        />
                      )}

                      <Typography
                        variant="caption"
                        sx={{
                          fontFamily: fontHeader,
                          fontWeight: 900,
                          color: book.available
                            ? '#15803d'
                            : '#c2410c',
                        }}
                      >
                        {book.available
                          ? 'ĐÃ CÓ ĐÁP ÁN'
                          : 'SẮP CẬP NHẬT'}
                      </Typography>
                    </Box>

                    {/* 
                      KHÔNG CÓ QR Ở ĐÂY.

                      Nút này luôn trỏ đến URL cố định.
                      Sau này QR cũng trỏ chính URL này.
                    */}

                    <Button
                      component={Link}
                      href={`/tai-lieu-on-luyen/${book.slug}`}
                      variant="contained"
                      fullWidth
                      endIcon={<ArrowForwardRoundedIcon />}
                      sx={{
                        background: book.gradient,
                        py: 1.3,
                        borderRadius: 999,
                        fontFamily: fontHeader,
                        fontWeight: 900,
                        textTransform: 'none',
                        boxShadow: 'none',

                        '&:hover': {
                          boxShadow:
                            '0 10px 24px rgba(0,0,0,0.14)',
                        },
                      }}
                    >
                      Xem đáp án
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* =====================================================
          INFO SECTION
      ===================================================== */}

      <Container
        maxWidth="lg"
        sx={{
          py: {
            xs: 8,
            md: 10,
          },
        }}
      >
        <Grid container spacing={3}>
          <Grid
            size={{
              xs: 12,
              md: 4,
            }}
          >
            <InfoCard
              icon={<AutoStoriesRoundedIcon />}
              title="Tài liệu chọn lọc"
              description="Nội dung tập trung vào những kiến thức và dạng bài trọng tâm trong quá trình học tập."
            />
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 4,
            }}
          >
            <InfoCard
              icon={<SchoolRoundedIcon />}
              title="Hỗ trợ tự học"
              description="Học sinh có thể chủ động ôn luyện, kiểm tra kết quả và củng cố những nội dung còn chưa vững."
            />
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 4,
            }}
          >
            <InfoCard
              icon={<CheckCircleRoundedIcon />}
              title="Cập nhật thường xuyên"
              description="Tài liệu và đáp án sẽ tiếp tục được cập nhật để đáp ứng nhu cầu học tập của học sinh."
            />
          </Grid>
        </Grid>
      </Container>

      {/* =====================================================
          CTA
      ===================================================== */}

      <Box
        sx={{
          background:
            'linear-gradient(135deg, #0d47a1 0%, #1565c0 100%)',
          color: '#fff',
          py: {
            xs: 7,
            md: 9,
          },
        }}
      >
        <Container maxWidth="md">
          <Stack
            spacing={3}
            sx={{
              alignItems: "center",
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: fontHeader,
                fontWeight: 900,
                fontSize: {
                  xs: '1.8rem',
                  md: '2.4rem',
                },
              }}
            >
              Cần hỗ trợ trong quá trình học?
            </Typography>

            <Typography
              sx={{
                maxWidth: 650,
                color: 'rgba(255,255,255,0.88)',
                lineHeight: 1.8,
              }}
            >
              Đăng ký nhận tư vấn để được hỗ trợ lựa chọn
              khóa học và lộ trình ôn luyện phù hợp.
            </Typography>

            <Button
              component={Link}
              href="/#form-dang-ky"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardRoundedIcon />}
              sx={{
                bgcolor: '#fff',
                color: '#1565c0',
                borderRadius: 999,
                px: 4,
                py: 1.5,
                fontFamily: fontHeader,
                fontWeight: 900,
                textTransform: 'none',

                '&:hover': {
                  bgcolor: '#f8fafc',
                },
              }}
            >
              Đăng ký nhận tư vấn
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

/* =========================================================
   INFO CARD
========================================================= */

function InfoCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Box
      sx={{
        height: '100%',
        bgcolor: '#fff',
        borderRadius: 4,
        p: 3.5,
        border: '1px solid #e2e8f0',
      }}
    >
      <Box
        sx={{
          width: 52,
          height: 52,
          borderRadius: 3,
          bgcolor: '#e3f2fd',
          color: '#1565c0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 2,

          '& svg': {
            fontSize: 28,
          },
        }}
      >
        {icon}
      </Box>

      <Typography
        variant="h6"
        sx={{
          fontFamily: fontHeader,
          fontWeight: 900,
          color: '#172554',
          mb: 1,
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          color: '#64748b',
          lineHeight: 1.7,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}