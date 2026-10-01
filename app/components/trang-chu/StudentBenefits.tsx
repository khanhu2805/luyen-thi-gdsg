'use client';

import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import Link from 'next/link';
import FadeInScroll from '../FadeInScroll';

const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

const resources = [
  {
    title: 'Tài liệu ôn luyện',
    subtitle: 'Ôn tập theo từng môn',
    desc: 'Truy cập các tài liệu hỗ trợ ôn tập Toán, Ngữ văn và Tiếng Anh để củng cố kiến thức sau mỗi buổi học.',
    icon: <AutoStoriesRoundedIcon sx={{ fontSize: 32 }} />,
    color: 'linear-gradient(135deg, #7b1fa2, #ab47bc)',
    link: '/tai-lieu-on-luyen',
  },
  {
    title: 'Đề thi thử',
    subtitle: 'Luyện kỹ năng làm bài',
    desc: 'Làm quen với dạng bài và áp lực thời gian thông qua hệ thống đề thi thử phục vụ quá trình ôn thi vào lớp 10.',
    icon: <AssignmentRoundedIcon sx={{ fontSize: 32 }} />,
    color: 'linear-gradient(135deg, #1565c0, #42a5f5)',
    link: '/de-thi-thu',
  },
  {
    title: 'Quyền lợi học viên',
    subtitle: 'Học an tâm hơn',
    desc: 'Tìm hiểu quà tặng sách, chương trình Mời bạn cùng học và các hỗ trợ dành cho học viên trong suốt khóa học.',
    icon: <WorkspacePremiumRoundedIcon sx={{ fontSize: 32 }} />,
    color: 'linear-gradient(135deg, #ef6c00, #ff9800)',
    link: '/chinh-sach',
  },
];

export default function StudentBenefits() {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: 'white' }}>
      <Container maxWidth="xl">
        <FadeInScroll>
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: fontHeader,
                fontWeight: 900,
                color: '#1a237e',
                fontSize: { xs: '2rem', md: '2.8rem' },
              }}
            >
              Tài nguyên đồng hành cùng học sinh
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ mt: 1.5, maxWidth: 760, mx: 'auto', lineHeight: 1.7, fontFamily: fontBody }}
            >
              Không chỉ học trên lớp, học sinh còn có thêm tài liệu, đề luyện và các quyền lợi hỗ trợ quá trình ôn tập.
            </Typography>
          </Box>
        </FadeInScroll>

        <Grid container spacing={3}>
          {resources.map((item, idx) => (
            <Grid size={{ xs: 12, md: 4 }} key={item.title}>
              <FadeInScroll delay={idx * 0.12}>
                <Card
                  sx={{
                    p: { xs: 3, md: 4 },
                    height: '100%',
                    borderRadius: 5,
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 12px 32px rgba(31,42,74,.07)',
                    border: '1px solid #e8edf4',
                    transition: 'transform .25s ease, box-shadow .25s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 20px 44px rgba(31,42,74,.12)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -55,
                      right: -55,
                      width: 160,
                      height: 160,
                      background: item.color,
                      opacity: 0.08,
                      borderRadius: '50%',
                    }}
                  />

                  <Box
                    sx={{
                      width: 58,
                      height: 58,
                      borderRadius: 3,
                      display: 'grid',
                      placeItems: 'center',
                      background: item.color,
                      color: 'white',
                      mb: 2.5,
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Typography
                    variant="h5"
                    sx={{ fontFamily: fontHeader, fontWeight: 900, color: '#1a237e' }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mt: 0.7, color: 'primary.main', fontWeight: 800, fontFamily: fontBody }}
                  >
                    {item.subtitle}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ mt: 2, mb: 3, lineHeight: 1.75, fontFamily: fontBody }}
                  >
                    {item.desc}
                  </Typography>

                  <Button
                    component={Link}
                    href={item.link}
                    endIcon={<ArrowForwardRoundedIcon />}
                    variant="outlined"
                    sx={{ borderRadius: 999, fontWeight: 900 }}
                  >
                    Xem thêm
                  </Button>
                </Card>
              </FadeInScroll>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
