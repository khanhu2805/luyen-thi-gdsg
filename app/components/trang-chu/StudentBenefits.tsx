import React from 'react'
import { Box, Container, Typography, Grid, Card, Button, Link } from '@mui/material';

type Props = {}

const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

const benefits = [
    {
        title: "Bài Tập Thực Hành", subtitle: "Cập nhật mỗi ngày theo kênh HTV3",
        desc: "Sau mỗi buổi phát sóng, bài tập tự luyện lập tức được cập nhật trên website để học sinh ôn bài, chống quên kiến thức.",
        icon: "📚", color: "linear-gradient(135deg, #1976d2, #42a5f5)", link: "/khoa-hoc"
    },
    {
        title: "Kho Tài Liệu 'Hack Điểm'", subtitle: "Tải về hoàn toàn miễn phí",
        desc: "Truy cập không giới hạn vào kho tàng sơ đồ tư duy, bảng tóm tắt công thức và các tài liệu bí kíp giải nhanh được biên soạn bởi các chuyên gia.",
        icon: "📑", color: "linear-gradient(135deg, #7b1fa2, #ab47bc)", link: "#"
    },
    {
        title: "Phòng Thi Thử Thực Chiến", subtitle: "Trải nghiệm áp lực thi thật",
        desc: "Làm bài thi online với thời gian đếm ngược. Hệ thống AI tự động chấm điểm và chỉ ra các lỗ hổng kiến thức cần khắc phục ngay lập tức.",
        icon: "🎯", color: "linear-gradient(135deg, #c62828, #ef5350)", link: "#"
    },
    {
        title: "Cộng Đồng Hỏi Đáp 24/7", subtitle: "Giải bài tập khó trong nháy mắt",
        desc: "Không còn bế tắc khi tự ôn luyện. Đội ngũ trợ giảng của hệ thống luôn túc trực để giải đáp mọi bài tập khó trong thời gian ngắn nhất.",
        icon: "👨‍🏫", color: "linear-gradient(135deg, #2e7d32, #66bb6a)", link: "#"
    }
];

const StudentBenefits = (props: Props) => {
    return (
        <Container maxWidth="xl" sx={{ mt: 5, mb: 15 }}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
                <Typography variant="h3" gutterBottom sx={{ fontFamily: fontHeader, fontWeight: 900, color: '#1a237e', textTransform: 'uppercase' }}>
                    Khám Phá <span style={{ color: '#ff9800' }}>Tài Nguyên</span> Độc Quyền
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    Những công cụ học tập miễn phí hỗ trợ đắc lực cho các em ngay khi hệ thống ra mắt.
                </Typography>
            </Box>

            <Grid container spacing={3}>
                {benefits.map((item, idx) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                        <Card sx={{
                            borderRadius: 4, p: { xs: 3, md: 5 }, height: '100%', position: 'relative', overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)', transition: 'all 0.4s ease', border: '1px solid #f0f0f0',
                            '&:hover': { transform: 'translateY(-10px)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', borderColor: 'primary.main' }
                        }}>
                            <Box sx={{
                                position: 'absolute', top: -50, right: -50, width: 150, height: 150,
                                background: item.color, opacity: 0.1, borderRadius: '50%'
                            }} />

                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                <Box sx={{
                                    fontSize: '3rem', mr: 3, display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    width: 70, height: 70, borderRadius: 4, background: item.color, color: 'white',
                                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                                }}>
                                    {item.icon}
                                </Box>
                                <Box>
                                    <Typography variant="h5" sx={{ fontFamily: fontHeader, fontWeight: 800 }}>{item.title}</Typography>
                                    <Typography variant="body2" sx={{ color: 'primary.main', fontFamily: fontBody, fontWeight: 700 }}>{item.subtitle}</Typography>
                                </Box>
                            </Box>

                            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.7, fontFamily: fontBody }}>
                                {item.desc}
                            </Typography>

                            <Button
                                component={Link} href={item.link}
                                variant="outlined" color="primary"
                                sx={{ borderRadius: 8, fontWeight: 'bold', borderWidth: 2, '&:hover': { borderWidth: 2 }, fontFamily: fontHeader }}
                            >
                                Tìm hiểu ngay →
                            </Button>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>

    )
}

export default StudentBenefits