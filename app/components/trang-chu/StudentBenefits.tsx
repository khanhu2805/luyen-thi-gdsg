'use client';

import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import Link from 'next/link';
import FadeInScroll from '../FadeInScroll';

const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

const resources = [
  {
    title: 'Tài liệu ôn luyện',
    subtitle: 'Ôn tập theo từng môn',
    desc: 'Hệ thống kiến thức và nội dung luyện tập giúp học sinh chủ động củng cố những phần còn chưa vững.',
    icon: <AutoStoriesRoundedIcon sx={{ fontSize: 31 }} />,
    accent: '#7b61d1',
    soft: '#f2efff',
    link: '/tai-lieu-on-luyen',
  },
  {
    title: 'Đề thi thử',
    subtitle: 'Luyện kỹ năng làm bài',
    desc: 'Làm quen dạng đề, rèn khả năng phân bổ thời gian và kiểm tra mức độ sẵn sàng trước kỳ thi.',
    icon: <AssignmentRoundedIcon sx={{ fontSize: 31 }} />,
    accent: '#2f6fed',
    soft: '#eaf2ff',
    link: '/de-thi-thu',
  },
  {
    title: 'Sách luyện tập',
    subtitle: 'Có thêm tài liệu để tự học',
    desc: 'Bộ “36 Đề kiểm tra định kỳ Toán 6 · 7 · 8 · 9” hỗ trợ học sinh luyện tập theo khối lớp.',
    icon: <MenuBookRoundedIcon sx={{ fontSize: 31 }} />,
    accent: '#f08a24',
    soft: '#fff3e8',
    link: '/sach',
  },
];

export default function StudentBenefits() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 11 },
        bgcolor: '#f6f9ff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        className="floating-card-delay"
        sx={{
          position: 'absolute',
          width: 320,
          height: 320,
          borderRadius: '50%',
          right: -150,
          top: 120,
          bgcolor: 'rgba(123,97,209,.05)',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <FadeInScroll>
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Chip
              icon={<WorkspacePremiumRoundedIcon />}
              label="TÀI NGUYÊN ĐỒNG HÀNH"
              sx={{
                mb: 1.5,
                bgcolor: '#eaf2ff',
                color: '#2f6fed',
                fontFamily: fontHeader,
                fontWeight: 900,
                '& .MuiChip-icon': { color: '#2f6fed' },
              }}
            />
            <Typography
              variant="h3"
              sx={{
                fontFamily: fontHeader,
                fontWeight: 900,
                color: '#102044',
                fontSize: { xs: '2rem', md: '2.85rem' },
                letterSpacing: '-0.03em',
              }}
            >
              Học trên lớp,
              <Box component="span" className="gradient-text" sx={{ display: 'inline', ml: 1 }}>
                luyện thêm mỗi ngày
              </Box>
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ mt: 1.4, maxWidth: 780, mx: 'auto', lineHeight: 1.75, fontFamily: fontBody }}
            >
              Học sinh có thể tiếp tục ôn tập bằng tài liệu, đề luyện và sách
              để biến mỗi buổi học thành một phần của quá trình tự học liên tục.
            </Typography>
          </Box>
        </FadeInScroll>

        <Grid container spacing={3}>
          {resources.map((item, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={item.title}>
              <FadeInScroll delay={index * 0.08}>
                <Card
                  className="card-lift"
                  sx={{
                    p: { xs: 3, md: 3.5 },
                    height: '100%',
                    borderRadius: 5,
                    border: '1px solid #e4ecf7',
                    boxShadow: '0 14px 36px rgba(15,48,105,.06)',
                    bgcolor: 'white',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      width: 150,
                      height: 150,
                      borderRadius: '50%',
                      right: -70,
                      top: -70,
                      bgcolor: item.soft,
                    }}
                  />

                  <Box
                    sx={{
                      width: 58,
                      height: 58,
                      borderRadius: 3.2,
                      display: 'grid',
                      placeItems: 'center',
                      bgcolor: item.soft,
                      color: item.accent,
                      position: 'relative',
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Typography
                    variant="h5"
                    sx={{ mt: 2.3, fontFamily: fontHeader, fontWeight: 900, color: '#102044', position: 'relative' }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mt: 0.6, color: item.accent, fontWeight: 900, fontFamily: fontBody, position: 'relative' }}
                  >
                    {item.subtitle}
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{ mt: 1.6, mb: 3, lineHeight: 1.75, fontFamily: fontBody, position: 'relative' }}
                  >
                    {item.desc}
                  </Typography>

                  <Button
                    component={Link}
                    href={item.link}
                    endIcon={<ArrowForwardRoundedIcon />}
                    variant="outlined"
                    sx={{
                      borderRadius: 999,
                      px: 2.2,
                      textTransform: 'none',
                      fontFamily: fontHeader,
                      fontWeight: 900,
                      borderColor: item.accent,
                      color: item.accent,
                      '&:hover': { borderColor: item.accent, bgcolor: item.soft },
                    }}
                  >
                    Khám phá
                  </Button>
                </Card>
              </FadeInScroll>
            </Grid>
          ))}
        </Grid>

        <FadeInScroll delay={0.1}>
          <Box
            sx={{
              mt: 4,
              p: { xs: 2.5, md: 3.2 },
              borderRadius: 4.5,
              bgcolor: 'white',
              border: '1px solid #e4ecf7',
              display: { md: 'flex' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 3,
            }}
          >
            <Box>
              <Typography sx={{ fontFamily: fontHeader, fontWeight: 900, color: '#102044', fontSize: '1.05rem' }}>
                Học viên còn được xem quyền lợi & ưu đãi đang áp dụng
              </Typography>
              <Typography color="text.secondary" variant="body2" sx={{ mt: 0.5, lineHeight: 1.65 }}>
                Tặng sách Toán 9 khi đăng ký khóa học và chương trình “Mời bạn cùng học”.
              </Typography>
            </Box>
            <Button
              component={Link}
              href="/chinh-sach"
              variant="contained"
              endIcon={<ArrowForwardRoundedIcon />}
              sx={{
                mt: { xs: 2, md: 0 },
                borderRadius: 999,
                px: 2.8,
                textTransform: 'none',
                fontFamily: fontHeader,
                fontWeight: 900,
                whiteSpace: 'nowrap',
                bgcolor: '#153a8a',
                '&:hover': { bgcolor: '#0f2f73' },
              }}
            >
              Xem quyền lợi
            </Button>
          </Box>
        </FadeInScroll>
      </Container>
    </Box>
  );
}
