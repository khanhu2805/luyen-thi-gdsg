'use client';

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
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import AutorenewRoundedIcon from '@mui/icons-material/AutorenewRounded';
import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import SwapHorizRoundedIcon from '@mui/icons-material/SwapHorizRounded';
import VideoLibraryRoundedIcon from '@mui/icons-material/VideoLibraryRounded';
import Link from 'next/link';

const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

const studentBenefits = [
  {
    title: 'Không bỏ lỡ bài học',
    icon: <VideoLibraryRoundedIcon />,
    text: 'Nếu vắng buổi, học viên vẫn có video và tài liệu để chủ động ôn lại nội dung đã học.',
  },
  {
    title: 'Tham gia sau khi khóa đã bắt đầu',
    icon: <SchoolRoundedIcon />,
    text: 'Học viên tham gia muộn vẫn được bổ sung video, tài liệu và quyền truy cập LMS của các buổi đã qua.',
  },
  {
    title: 'Bảo lưu linh hoạt',
    icon: <AutorenewRoundedIcon />,
    text: 'Hỗ trợ bảo lưu 01 lần/khóa, tối đa 90 ngày, giúp gia đình chủ động hơn khi có thay đổi kế hoạch học tập.',
  },
  {
    title: 'Hỗ trợ chuyển lớp',
    icon: <SwapHorizRoundedIcon />,
    text: 'Có thể chuyển lớp 01 lần khi có lớp cùng môn/chương trình phù hợp, giúp học sinh duy trì việc học thuận tiện.',
  },
  {
    title: 'Đảm bảo nội dung học',
    icon: <CheckCircleRoundedIcon />,
    text: 'Khi có thay đổi từ phía lớp học, trung tâm chủ động bố trí phương án học bù hoặc giáo viên phù hợp để đảm bảo tiến độ.',
  },
];

export default function ChinhSachPage() {
  return (
    <Box sx={{ bgcolor: '#f4f7fe', minHeight: '100vh', pb: 12, fontFamily: fontBody }}>
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #081f49 0%, #0d47a1 50%, #3949ab 100%)',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: 340,
            height: 340,
            borderRadius: '50%',
            right: -120,
            top: -150,
            bgcolor: 'rgba(255,255,255,.07)',
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Chip
            label="QUYỀN LỢI HỌC VIÊN"
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
              fontSize: { xs: '2.15rem', md: '3.55rem' },
            }}
          >
            Học an tâm – nhận thêm nhiều quyền lợi
          </Typography>
          <Typography sx={{ mt: 2, maxWidth: 820, mx: 'auto', opacity: 0.93, lineHeight: 1.75 }}>
            Bên cạnh lộ trình học 8 tuần, học viên được hỗ trợ video, tài liệu, LMS
            và các chính sách giúp quá trình ôn thi vào lớp 10 thuận tiện hơn.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ mt: { xs: -3, md: -4 }, position: 'relative', zIndex: 2 }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                height: '100%',
                p: { xs: 3, md: 4 },
                borderRadius: 5,
                color: 'white',
                background: 'linear-gradient(135deg, #ff8f00, #ef6c00)',
                boxShadow: '0 18px 45px rgba(239,108,0,.2)',
              }}
            >
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                <Box
                  sx={{
                    width: 54,
                    height: 54,
                    borderRadius: 3,
                    display: 'grid',
                    placeItems: 'center',
                    bgcolor: 'rgba(255,255,255,.16)',
                  }}
                >
                  <CardGiftcardRoundedIcon sx={{ fontSize: 30 }} />
                </Box>
                <Box>
                  <Typography variant="overline" sx={{ fontWeight: 900 }}>
                    QUÀ TẶNG KHI ĐĂNG KÝ KHÓA HỌC
                  </Typography>
                  <Typography variant="h4" sx={{ fontFamily: fontHeader, fontWeight: 900 }}>
                    Tặng 01 cuốn Toán 9
                  </Typography>
                </Box>
              </Stack>
              <Typography sx={{ mt: 2.5, lineHeight: 1.75, fontSize: '1.05rem' }}>
                Học viên đăng ký và hoàn tất học phí một khóa ôn thi tuyển sinh lớp 10
                được tặng <b>01 cuốn “36 Đề kiểm tra định kỳ Toán 9”</b>.
              </Typography>
              <Typography sx={{ mt: 1, fontWeight: 800 }}>
                Sách tặng được trung tâm hỗ trợ phí vận chuyển.
              </Typography>
              <Button
                component={Link}
                href="/sach"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  mt: 3,
                  borderRadius: 999,
                  bgcolor: 'white',
                  color: '#e65100',
                  px: 2.8,
                  fontWeight: 900,
                  '&:hover': { bgcolor: '#fff8e1' },
                }}
              >
                Xem bộ sách
              </Button>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                height: '100%',
                p: { xs: 3, md: 4 },
                borderRadius: 5,
                color: 'white',
                background: 'linear-gradient(135deg, #1565c0, #3949ab)',
                boxShadow: '0 18px 45px rgba(25,118,210,.2)',
              }}
            >
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                <Box
                  sx={{
                    width: 54,
                    height: 54,
                    borderRadius: 3,
                    display: 'grid',
                    placeItems: 'center',
                    bgcolor: 'rgba(255,255,255,.16)',
                  }}
                >
                  <GroupsRoundedIcon sx={{ fontSize: 30 }} />
                </Box>
                <Box>
                  <Typography variant="overline" sx={{ fontWeight: 900 }}>
                    CHƯƠNG TRÌNH MỜI BẠN CÙNG HỌC
                  </Typography>
                  <Typography variant="h4" sx={{ fontFamily: fontHeader, fontWeight: 900 }}>
                    Cùng nhận ưu đãi 100.000đ
                  </Typography>
                </Box>
              </Stack>
              <Typography sx={{ mt: 2.5, lineHeight: 1.75, fontSize: '1.05rem' }}>
                Học viên mới được <b>giảm 100.000đ ngay trên khóa đăng ký</b> khi được
                học viên hiện tại giới thiệu và hoàn tất đăng ký.
              </Typography>
              <Typography sx={{ mt: 1, lineHeight: 1.75, fontSize: '1.05rem' }}>
                Người giới thiệu nhận <b>100.000đ ưu đãi cho khóa tiếp theo</b>.
              </Typography>
              <Button
                component={Link}
                href="/#form-dang-ky"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  mt: 3,
                  borderRadius: 999,
                  bgcolor: 'white',
                  color: '#1a237e',
                  px: 2.8,
                  fontWeight: 900,
                  '&:hover': { bgcolor: '#e8eaf6' },
                }}
              >
                Đăng ký tư vấn
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', mt: { xs: 7, md: 9 }, mb: 4 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: fontHeader,
              fontWeight: 900,
              color: '#1a237e',
              fontSize: { xs: '1.9rem', md: '2.7rem' },
            }}
          >
            Chính sách hỗ trợ học tập
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 1.3, maxWidth: 760, mx: 'auto', lineHeight: 1.7 }}>
            Những hỗ trợ thiết thực để học sinh duy trì tiến độ ôn tập và phụ huynh yên tâm hơn trong suốt khóa học.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {studentBenefits.map((item) => (
            <Grid key={item.title} size={{ xs: 12, sm: 6, lg: 4 }}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  border: '1px solid #e5eaf0',
                  boxShadow: '0 12px 30px rgba(31,42,74,.06)',
                  transition: 'transform .25s ease, box-shadow .25s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 18px 40px rgba(31,42,74,.11)',
                  },
                }}
              >
                <CardContent sx={{ p: 3.5 }}>
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: 3,
                      display: 'grid',
                      placeItems: 'center',
                      bgcolor: '#e8f1ff',
                      color: '#0d47a1',
                      mb: 2,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontFamily: fontHeader, fontWeight: 900 }}>
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mt: 1.2, lineHeight: 1.75 }}>
                    {item.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            mt: 5,
            p: { xs: 3, md: 4 },
            borderRadius: 5,
            bgcolor: 'white',
            border: '1px solid #e5eaf0',
            display: { md: 'flex' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 3,
          }}
        >
          <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
            <MenuBookRoundedIcon sx={{ color: '#1976d2', fontSize: 34 }} />
            <Box>
              <Typography variant="h5" sx={{ fontFamily: fontHeader, fontWeight: 900, color: '#1a237e' }}>
                Cần tư vấn lớp phù hợp?
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 0.5 }}>
                Để lại thông tin, đội ngũ tư vấn sẽ hỗ trợ phụ huynh chọn môn và lớp học phù hợp với nhu cầu của học sinh.
              </Typography>
            </Box>
          </Stack>
          <Button
            component={Link}
            href="/#form-dang-ky"
            variant="contained"
            size="large"
            sx={{ mt: { xs: 2.5, md: 0 }, borderRadius: 999, px: 3.2, fontWeight: 900, whiteSpace: 'nowrap' }}
          >
            Nhận tư vấn
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
