'use client';

import {
  Box,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import RouteRoundedIcon from '@mui/icons-material/RouteRounded';
import FadeInScroll from '../FadeInScroll';

const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

const features = [
  {
    title: 'Lộ trình 8 tuần rõ ràng',
    desc: 'Mỗi khóa gồm 8 buổi, tập trung những nội dung trọng tâm cần thiết cho quá trình ôn thi vào lớp 10.',
    icon: <RouteRoundedIcon sx={{ fontSize: 30 }} />,
    accent: '#2f6fed',
    soft: '#eaf2ff',
  },
  {
    title: 'Tài liệu hỗ trợ ôn tập',
    desc: 'Học sinh được tiếp cận tài liệu theo từng môn để hệ thống kiến thức và chủ động luyện tập sau buổi học.',
    icon: <AutoStoriesRoundedIcon sx={{ fontSize: 30 }} />,
    accent: '#7b61d1',
    soft: '#f2efff',
  },
  {
    title: 'Đề luyện & đề thi thử',
    desc: 'Kho đề giúp học sinh làm quen dạng bài, rèn tốc độ và kiểm tra mức độ sẵn sàng trước kỳ thi.',
    icon: <AssignmentRoundedIcon sx={{ fontSize: 30 }} />,
    accent: '#f08a24',
    soft: '#fff3e8',
  },
  {
    title: 'Video & LMS đồng hành',
    desc: 'Nội dung học tập được hỗ trợ trên hệ thống để học sinh thuận tiện xem lại và duy trì tiến độ ôn tập.',
    icon: <DevicesRoundedIcon sx={{ fontSize: 30 }} />,
    accent: '#22a06b',
    soft: '#e9f8f1',
  },
];

export default function Features() {
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
        className="floating-orb"
        sx={{
          position: 'absolute',
          width: 360,
          height: 360,
          borderRadius: '50%',
          left: -170,
          top: 40,
          bgcolor: 'rgba(123,97,209,.06)',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <FadeInScroll>
          <Box sx={{ textAlign: 'center', mb: 5.5 }}>
            <Typography
              variant="overline"
              sx={{
                fontFamily: fontHeader,
                fontWeight: 900,
                letterSpacing: 1.4,
                color: '#2f6fed',
              }}
            >
              HỌC CÓ HỆ THỐNG
            </Typography>
            <Typography
              variant="h3"
              sx={{
                mt: 0.6,
                fontFamily: fontHeader,
                fontWeight: 900,
                color: '#102044',
                fontSize: { xs: '2rem', md: '2.9rem' },
                letterSpacing: '-0.03em',
              }}
            >
              Một hành trình ôn thi
              <Box component="span" className="gradient-text" sx={{ display: 'block' }}>
                không chỉ dừng ở buổi học
              </Box>
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ mt: 1.5, maxWidth: 780, mx: 'auto', lineHeight: 1.75, fontFamily: fontBody }}
            >
              Kết hợp lộ trình, tài liệu, đề luyện và nền tảng học tập
              để học sinh có thể học trên lớp, xem lại và tự luyện một cách liên tục.
            </Typography>
          </Box>
        </FadeInScroll>

        <Grid container spacing={2.5}>
          {features.map((feature, index) => (
            <Grid key={feature.title} size={{ xs: 12, sm: 6, lg: 3 }}>
              <FadeInScroll delay={index * 0.07}>
                <Card
                  className="card-lift"
                  sx={{
                    height: '100%',
                    p: 3,
                    borderRadius: 5,
                    bgcolor: 'white',
                    border: '1px solid #e5edf8',
                    boxShadow: '0 14px 34px rgba(15,48,105,.055)',
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
                      bgcolor: feature.soft,
                    }}
                  />
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 3.2,
                      display: 'grid',
                      placeItems: 'center',
                      bgcolor: feature.soft,
                      color: feature.accent,
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      mt: 2.3,
                      fontFamily: fontHeader,
                      fontWeight: 900,
                      color: '#102044',
                      lineHeight: 1.3,
                      position: 'relative',
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ mt: 1.25, lineHeight: 1.75, fontFamily: fontBody, position: 'relative' }}
                  >
                    {feature.desc}
                  </Typography>
                </Card>
              </FadeInScroll>
            </Grid>
          ))}
        </Grid>

        <FadeInScroll delay={0.12}>
          <Box
            sx={{
              mt: 4,
              p: { xs: 2.4, md: 3 },
              borderRadius: 4,
              bgcolor: '#102a66',
              color: 'white',
              display: { md: 'flex' },
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 2,
              boxShadow: '0 18px 40px rgba(16,42,102,.14)',
            }}
          >
            <Box>
              <Typography sx={{ fontFamily: fontHeader, fontWeight: 900, fontSize: '1.05rem' }}>
                Mục tiêu: giúp học sinh chủ động hơn trong quá trình ôn tập
              </Typography>
              <Typography variant="body2" sx={{ mt: 0.5, opacity: 0.8, lineHeight: 1.65 }}>
                Kiến thức trên lớp được nối tiếp bằng tài liệu và hoạt động tự luyện,
                thay vì học xong rồi để đó.
              </Typography>
            </Box>
            <Stack direction="row" spacing={1} sx={{ mt: { xs: 1.5, md: 0 }, flexWrap: 'wrap', rowGap: 1 }}>
              {['Học', 'Xem lại', 'Luyện tập', 'Củng cố'].map((item, index) => (
                <Box
                  key={item}
                  sx={{
                    px: 1.5,
                    py: 0.75,
                    borderRadius: 999,
                    bgcolor: index === 3 ? '#ff8a1f' : 'rgba(255,255,255,.09)',
                    border: index === 3 ? 'none' : '1px solid rgba(255,255,255,.12)',
                    fontWeight: 900,
                    fontSize: '.78rem',
                  }}
                >
                  {item}
                </Box>
              ))}
            </Stack>
          </Box>
        </FadeInScroll>
      </Container>
    </Box>
  );
}
