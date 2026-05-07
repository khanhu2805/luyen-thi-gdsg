import React from 'react'
import { Box, Container, Typography, Grid, Card, Button, Link, keyframes, CardContent } from '@mui/material';
import FadeInScroll from '../FadeInScroll';

type Props = {}

const blobMorph = keyframes`
  0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
`;

const floatComplex = keyframes`
  0% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(30px, -50px) rotate(10deg); }
  66% { transform: translate(-20px, 20px) rotate(-10deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
`;

const slideUpFade = keyframes`
  0% { opacity: 0; transform: translateY(50px) scale(0.95); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`;

const gradientShimmer = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

const HeroSection = (props: Props) => {
    return (
        <Box sx={{
            position: 'relative', minHeight: '90vh',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'linear-gradient(135deg, #ffffff 0%, #e6efff 100%)',
            overflow: 'hidden',
            pt: { xs: 8, md: 4 }, pb: 10
        }}>
            {/* Animated Background Blobs */}
            <Box sx={{
                position: 'absolute', top: '-10%', left: '-5%', width: '500px', height: '500px',
                background: 'radial-gradient(circle, rgba(25,118,210,0.15) 0%, rgba(25,118,210,0) 70%)',
                animation: `${blobMorph} 15s ease-in-out infinite, ${floatComplex} 20s ease-in-out infinite`,
                zIndex: 0
            }} />
            <Box sx={{
                position: 'absolute', bottom: '-20%', right: '-10%', width: '600px', height: '600px',
                background: 'radial-gradient(circle, rgba(255,152,0,0.15) 0%, rgba(255,152,0,0) 70%)',
                animation: `${blobMorph} 12s ease-in-out infinite reverse, ${floatComplex} 18s ease-in-out infinite reverse`,
                zIndex: 0
            }} />

            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10 }}>
                <Grid container spacing={6} sx={{ alignItems: 'center' }}>
                    {/* Nội dung Text */}
                    <Grid size={{ xs: 12, md: 7 }} sx={{ animation: `${slideUpFade} 1s cubic-bezier(0.2, 0.8, 0.2, 1)` }}>
                        <FadeInScroll delay={0.5}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: 'primary.main', fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase',
                                    mb: 2, display: 'inline-block', px: 2, py: 0.5, bgcolor: 'rgba(25,118,210,0.1)', borderRadius: 2
                                }}
                            >
                                PHÁT SÓNG TỪ THÁNG 5/2026 TRÊN HTV3
                            </Typography>
                        </FadeInScroll>
                        <FadeInScroll>
                            <Typography variant="h2" sx={{ fontFamily: fontHeader, fontWeight: 900, lineHeight: 1.2, mb: 3 }}>
                                Đồng Hành Cùng Lớp 9 <br />
                                <Box component="span" sx={{
                                    background: 'linear-gradient(90deg, #1976d2, #9c27b0)',
                                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                                    backgroundSize: '200% auto', animation: `${gradientShimmer} 3s linear infinite`
                                }}>
                                    Bứt Phá Điểm Số Vào 10
                                </Box>
                            </Typography>
                            <Typography variant="h6" color="textPrimary" sx={{ mb: 5, fontFamily: fontBody, lineHeight: 1.6, maxWidth: '95%' }}>
                                Môi trường học tập công nghệ cao, cung cấp ngân hàng đề thi và tài liệu được biên soạn <strong>đồng bộ với chương trình đang phát sóng trên kênh HTV3</strong>.
                            </Typography>
                        </FadeInScroll>
                        <FadeInScroll delay={0.75}>
                            <Button
                                component={Link} href="/#form-dang-ky"
                                variant="contained" size="large"
                                sx={{
                                    borderRadius: '50px', px: 5, py: 2, fontFamily: fontHeader, fontWeight: 800, fontSize: '1.1rem',
                                    background: 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)',
                                    boxShadow: '0 10px 30px rgba(25, 118, 210, 0.4)', transition: 'all 0.3s',
                                    '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 15px 40px rgba(25, 118, 210, 0.6)' }
                                }}
                            >
                                Khám phá Lộ trình
                            </Button>
                        </FadeInScroll>
                    </Grid>

                    {/* Khối Hình ảnh/Thông báo Glassmorphism thay thế cho Countdown */}

                    <Grid size={{ xs: 12, md: 5 }}>
                        <FadeInScroll delay={0.75}>

                            <Card sx={{
                                background: 'rgba(255, 255, 255, 0.65)', backdropFilter: 'blur(25px)',
                                border: '1px solid rgba(255, 255, 255, 1)', borderRadius: 6,
                                boxShadow: '0 25px 50px rgba(0,0,0,0.05)', overflow: 'visible', position: 'relative'
                            }}>

                                {/* ================= CÁC ICON BAY BAY (FLOATING ICONS) ================= */}
                                {/* 1. Icon Sách (Góc trên trái) */}
                                <Box sx={{
                                    position: 'absolute', top: -20, left: -25, width: 56, height: 56,
                                    bgcolor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '1.8rem', boxShadow: '0 15px 25px rgba(0,0,0,0.12)', zIndex: 10,
                                    animation: `${floatComplex} 6s infinite ease-in-out`
                                }}>📚</Box>

                                {/* 2. Icon Bóng đèn (Góc trên phải) */}
                                <Box sx={{
                                    position: 'absolute', top: 50, right: -25, width: 48, height: 48,
                                    bgcolor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '1.5rem', boxShadow: '0 15px 25px rgba(0,0,0,0.12)', zIndex: 10,
                                    animation: `${floatComplex} 5s infinite ease-in-out reverse`
                                }}>💡</Box>

                                {/* 3. Icon Mục tiêu (Góc dưới phải) */}
                                <Box sx={{
                                    position: 'absolute', bottom: -20, right: 40, width: 64, height: 64,
                                    bgcolor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '2rem', boxShadow: '0 15px 30px rgba(0,0,0,0.15)', zIndex: 10,
                                    animation: `${floatComplex} 7s infinite ease-in-out 1s`
                                }}>🎯</Box>
                                {/* ============================================================= */}

                                <CardContent sx={{ p: 5, textAlign: 'center' }}>
                                    <Typography variant="subtitle2" sx={{
                                        display: 'inline-flex', alignItems: 'center', gap: 1,
                                        color: '#d32f2f', fontWeight: 800, bgcolor: '#ffebee', px: 2, py: 1, borderRadius: 10, mb: 3
                                    }}>
                                        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#d32f2f', display: 'inline-block', animation: 'pulse 1s infinite' }} />
                                        SONG SONG VỚI TRUYỀN HÌNH
                                    </Typography>

                                    <Typography variant="h4" sx={{ fontFamily: fontHeader, fontWeight: 900, color: '#1a237e', mb: 2, textTransform: 'uppercase' }}>
                                        Bộ Tài Liệu <br /> ôn luyện
                                    </Typography>

                                    <Typography variant="body1" color="textPrimary" sx={{ mb: 4, lineHeight: 1.6, fontFamily: fontBody }}>
                                        Vừa xem bài giảng trên tivi, vừa lên hệ thống làm bài tập tương ứng để củng cố ngay kiến thức.
                                    </Typography>

                                    <Button
                                        component={Link} href="/tai-lieu-on-luyen"
                                        variant="contained" size="large"
                                        sx={{
                                            borderRadius: '50px', px: 6, py: 2, fontFamily: fontHeader, fontWeight: 800, fontSize: '1.1rem',
                                            background: 'linear-gradient(45deg, #1a237e 30%, #1976d2 90%)',
                                            boxShadow: '0 10px 30px rgba(26, 35, 126, 0.3)', transition: 'all 0.3s',
                                            '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 15px 40px rgba(26, 35, 126, 0.5)' }
                                        }}
                                    >
                                        KHÁM PHÁ NGAY
                                    </Button>
                                </CardContent>
                            </Card>
                        </FadeInScroll>
                    </Grid>

                </Grid>

            </Container>
        </Box>
    )
}

export default HeroSection