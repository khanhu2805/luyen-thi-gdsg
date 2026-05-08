'use client';

import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
    Chip,
    Stack
} from '@mui/material';
import { keyframes } from '@mui/system';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Link from 'next/link';
import FadeInScroll from '../components/FadeInScroll';

// --- ANIMATIONS ---

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// --- FONTS ---
const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

// --- DỮ LIỆU MẪU TIN TỨC ---
const newsData = [
    {
        id: 1,
        title: 'Lịch Phát Sóng Chi Tiết Chương Trình "Đồng Hành Cùng Học Sinh Lớp 9" Tối Ưu Cho Kỳ Thi Vào Lớp 10',
        description: 'Giải pháp ôn tập toàn diện 3 môn Toán, Văn, Anh bám sát cấu trúc đề thi tuyển sinh vào lớp 10, phát sóng từ ngày 07/05/2026 trên HTV3.',
        date: '08/05/2026',
        category: 'Sự kiện',
        slug: 'dong-hanh-cung-hoc-sinh-lop-9',
        gradient: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
    },
    // {
    //     id: 2,
    //     title: 'Bí kíp giữ vững tâm lý trước kỳ thi tuyển sinh lớp 10 năm 2026',
    //     description: 'Các chuyên gia tâm lý chia sẻ phương pháp giảm áp lực và quản lý thời gian hiệu quả cho sĩ tử trong giai đoạn nước rút cuối cùng.',
    //     date: '07/05/2026',
    //     category: 'Góc Tư Vấn',
    //     slug: 'bi-kip-tam-ly',
    //     gradient: 'linear-gradient(135deg, #c62828 0%, #ef5350 100%)',
    // },
    // {
    //     id: 3,
    //     title: 'Tổng hợp đề thi thử môn Toán vào lớp 10 từ các trường chuyên',
    //     description: 'Tài liệu tổng hợp các dạng bài tập khó và đáp án chi tiết giúp học sinh rèn luyện kỹ năng giải đề nhanh và chính xác nhất.',
    //     date: '05/05/2026',
    //     category: 'Tài Liệu',
    //     slug: 'tong-hop-de-thi-thu',
    //     gradient: 'linear-gradient(135deg, #2e7d32 0%, #66bb6a 100%)',
    // }
];

export default function TinTucPage() {
    return (
        <Box sx={{ fontFamily: fontBody, bgcolor: '#f8fafc', minHeight: '100vh', pb: 15 }}>

            {/* ================= HEADER SECTION ================= */}
            <Box sx={{
                background: 'linear-gradient(135deg, #0d47a1 0%, #1976d2 100%)',
                pt: { xs: 12, md: 15 }, pb: { xs: 15, md: 18 },
                textAlign: 'center', color: 'white', position: 'relative', overflow: 'hidden'
            }}>
                {/* Decorative Floating Blobs */}
                <Box sx={{ position: 'absolute', top: -50, left: -50, width: 250, height: 250, bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '50%', animation: `${float} 7s infinite` }} />
                <Box sx={{ position: 'absolute', bottom: -50, right: 100, width: 150, height: 150, bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '50%', animation: `${float} 5s infinite reverse` }} />
                <FadeInScroll>
                    <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
                        <Typography variant="h2" sx={{ textTransform: 'uppercase', fontFamily: fontHeader, fontWeight: 900, mb: 3, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
                            Tin Tức & <span style={{ color: '#ffb300' }}>Sự Kiện</span>
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 400, opacity: 0.9, lineHeight: 1.6 }}>
                            Cập nhật những thông tin mới nhất về kỳ thi tuyển sinh, lịch phát sóng các chương trình giáo dục và cẩm nang học tập hữu ích.
                        </Typography>
                    </Container>
                </FadeInScroll>
            </Box>

            {/* ================= DANH SÁCH TIN TỨC ================= */}

            <Container maxWidth="xl" sx={{ mt: { xs: 8, md: 10 }, position: 'relative', zIndex: 10 }}>
                <Grid container spacing={4}>
                    {newsData.map((news, index) => (
                        <Grid size={{ xs: 12, md: 4 }} key={news.id}>
                            <Link href={`/tin-tuc/${news.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Card sx={{
                                    height: '100%', borderRadius: 4, display: 'flex', flexDirection: 'column',
                                    boxShadow: '0 15px 35px rgba(0,0,0,0.05)', transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                    border: '1px solid #eee',
                                    '&:hover': { transform: 'translateY(-15px)', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }
                                }}>
                                    {/* Phần Hình ảnh / Thumbnail (dùng Box gradient tạm thời nếu chưa có ảnh) */}
                                    <Box sx={{ background: news.gradient, height: 200, position: 'relative', overflow: 'hidden', p: 3, display: 'flex', alignItems: 'flex-end' }}>
                                        <Box sx={{ position: 'absolute', opacity: 0.15, width: '100%', height: '100%', top: 0, left: 0, background: 'radial-gradient(circle, white 10%, transparent 10%)', backgroundSize: '15px 15px' }} />
                                        <Chip
                                            label={news.category}
                                            sx={{ bgcolor: 'white', color: '#1a237e', fontWeight: 800, fontFamily: fontHeader, zIndex: 2 }}
                                        />
                                    </Box>

                                    <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                        <Stack direction="row" spacing={1} sx={{ mb: 2, color: 'text.secondary', alignItems: "center" }}>
                                            <CalendarMonthRoundedIcon fontSize="small" />
                                            <Typography variant="body2" sx={{ fontWeight: 600 }}>{news.date}</Typography>
                                        </Stack>

                                        <Typography variant="h6" sx={{ fontFamily: fontHeader, fontWeight: 800, color: '#1a237e', mb: 2, lineHeight: 1.4, minHeight: '4.2rem', display: '-webkit-box', overflow: 'hidden', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3, textTransform: 'uppercase' }}>

                                            {news.title}

                                        </Typography>

                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 4, lineHeight: 1.6, flexGrow: 1, display: '-webkit-box', overflow: 'hidden', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3 }}>
                                            {news.description}
                                        </Typography>

                                        <Button
                                            component={Link}
                                            href={`/tin-tuc/${news.slug}`}
                                            endIcon={<ArrowForwardRoundedIcon />}
                                            sx={{
                                                alignSelf: 'flex-start', borderRadius: 8, fontFamily: fontHeader, fontWeight: 800,
                                                color: '#1976d2', p: 0, '&:hover': { background: 'transparent', color: '#0d47a1', transform: 'translateX(5px)' },
                                                transition: 'all 0.2s'
                                            }}
                                        >
                                            Xem chi tiết
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box >
    );
}