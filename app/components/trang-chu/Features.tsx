import React from 'react'
import { Box, Container, Typography, Grid, Card, Fade } from '@mui/material';
import FadeInScroll from '../FadeInScroll';

type Props = {}

const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

const Features = (props: Props) => {
  return (
    <Container maxWidth="xl" sx={{ mt: 15 }}>
      <FadeInScroll>
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="h3" gutterBottom sx={{ fontFamily: fontHeader, fontWeight: 900, textTransform: 'uppercase' }}>
            HỆ THỐNG ÔN LUYỆN <span style={{ color: '#1976d2' }}>CHUẨN XÁC</span>
          </Typography>
          <Typography variant="h6" color="textSecondary" sx={{ fontFamily: fontBody }}>
            Hệ thống ôn luyện được thiết kế đặc biệt giúp học sinh tiếp cận kiến thức một cách trực quan và hiệu quả nhất
          </Typography>
        </Box>
      </FadeInScroll>
      <FadeInScroll delay={0.2}>
        <Grid container spacing={4}>
          {[
            { title: 'TÀI LIỆU BIÊN SOẠN CHUẨN CHỈNH', icon: '📺', color: '#e3f2fd', desc: 'Tài liệu được biên soạn chuẩn chỉnh, sát với nội dung cấu trúc đề thi.' },
            { title: 'NGÂN HÀNG ĐỀ THI THỬ', icon: '📝', color: '#fff3e0', desc: 'Tổng hợp đề thi thử bám sát cấu trúc của Sở GD&ĐT.' },
            { title: 'ZALO REPORT CHO PHỤ HUYNH', icon: '📱', color: '#e8f5e9', desc: 'Chấm điểm tự động và gửi báo cáo tiến độ làm bài chi tiết qua Zalo OA của phụ huynh hàng tuần.' },
            { title: 'HỎI ĐÁP CÙNG THẦY CÔ', icon: '💡', color: '#f3e5f5', desc: 'Gửi câu hỏi lên hệ thống để đội ngũ thầy cô giải đáp ngay trong tíc tắc.' }
          ].map((feature, i) => (
            <Grid size={{ xs: 12, md: 6 }} key={i}>
              <Card sx={{
                height: '100%', borderRadius: 6, p: 4, bgcolor: 'white',
                border: '1px solid #eee', transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                '&:hover': { transform: 'translateY(-15px)', boxShadow: '0 30px 60px rgba(0,0,0,0.1)', borderColor: 'transparent', bgcolor: feature.color }
              }}>
                <Box sx={{ fontSize: '3.5rem', mb: 3 }}>{feature.icon}</Box>
                <Typography variant="h5" sx={{ fontFamily: fontHeader, fontWeight: 800, mb: 2 }}>{feature.title}</Typography>
                <Typography color="textSecondary" sx={{ fontSize: '1.1rem', lineHeight: 1.6 }}>{feature.desc}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </FadeInScroll>
    </Container>
  )
}

export default Features