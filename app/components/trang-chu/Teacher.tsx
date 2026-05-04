import React from 'react'
import { Box, Container, Typography, Grid, Card, CardContent, Button, Link } from '@mui/material';

type Props = {}

const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

const teachers = [
    {
        id: 1,
        name: "Thầy Huỳnh Ngọc Thanh",
        subject: "Chuyên gia Toán 9",
        description: "10+ năm kinh nghiệm. Cố vấn nội dung đồng hành cùng chương trình Toán học trên truyền hình, tác giả chính của hệ thống bài tập.",
        role: "Giảng viên - Cố vấn môn Toán",
        img: "/teachers/huynh_ngoc_thanh.png",
        color: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)"
    },
    {
        id: 2,
        name: "Thầy Nguyễn Phước Bảo Khôi",
        subject: "Chuyên gia Ngữ Văn 9",
        description: "Xóa bỏ nỗi sợ học Văn. Xây dựng cấu trúc bài giảng sát đề thi thực tế của Sở GD&ĐT và đồng bộ với nội dung phát sóng.",
        role: "Giảng viên - Cố vấn môn Ngữ Văn",
        img: "/teachers/nguyen_phuoc_bao_khoi.png",
        color: "linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)"
    },
    {
        id: 3,
        name: "Thầy Vũ Vạn Xuân",
        subject: "Chuyên gia Tiếng Anh 9",
        description: "Phương pháp trực quan. Giải quyết chủ điểm ngữ pháp hóc búa theo lộ trình bám sát chương trình ôn tập truyền hình.",
        role: "Giảng viên - Cố vấn môn Tiếng Anh",
        img: "/teachers/vu_van_xuan.png",
        color: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)"
    }
];
const Teacher = (props: Props) => {
    return (
        <Box sx={{ mt: 15, py: 15, background: 'linear-gradient(180deg, #f4f7fe 0%, #ffffff 100%)' }}>
            <Container maxWidth="xl">
                <Box sx={{ textAlign: 'center', mb: 10 }}>
                    <Typography variant="h3" gutterBottom sx={{ fontFamily: fontHeader, fontWeight: 900, textTransform: 'uppercase' }}>
                        Cố Vấn <span style={{ color: '#d32f2f' }}>Chuyên Môn</span> Đồng Hành
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        Đội ngũ chuyên gia chịu trách nhiệm biên soạn toàn bộ hệ thống đề thi và tài liệu bám sát chương trình phát sóng.
                    </Typography>
                </Box>

                <Grid container spacing={5}>
                    {teachers.map((teacher, index) => (
                        <Grid size={{ xs: 12, md: 4 }} key={teacher.id}>
                            <Card sx={{
                                borderRadius: 4, overflow: 'hidden', position: 'relative',
                                boxShadow: '0 15px 35px rgba(0,0,0,0.08)', transition: '0.4s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-15px)',
                                    boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
                                    '& .teacher-img': { transform: 'scale(1.08)' } // Hiệu ứng zoom ảnh nhẹ khi hover
                                }
                            }}>
                                {/* Khối Hình ảnh chữ nhật */}
                                <Box sx={{ height: 350, overflow: 'hidden', position: 'relative' }}>
                                    <Box
                                        component="img"
                                        src={teacher.img}
                                        alt={teacher.name}
                                        className="teacher-img"
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover', // Đảm bảo ảnh lấp đầy khung mà không bị méo
                                            transition: 'transform 0.6s ease',
                                            bgcolor: 'grey.200' // Màu nền dự phòng khi ảnh chưa load
                                        }}
                                    />
                                    {/* Dải màu nhận diện cho từng thầy nằm ở đáy ảnh */}
                                    <Box sx={{
                                        position: 'absolute', bottom: 0, left: 0, width: '100%', height: '8px',
                                        background: teacher.color
                                    }} />
                                </Box>

                                {/* Nội dung (Chỉ giữ lại Tên và Vai trò) */}
                                <CardContent sx={{ pt: 4, pb: 4, textAlign: 'center', bgcolor: 'white' }}>
                                    <Typography variant="body1" sx={{ color: 'primary.main', fontWeight: 800, fontFamily: fontBody, mb: 1, letterSpacing: 1 }}>
                                        {teacher.role}
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontFamily: fontHeader, fontWeight: 800, color: '#1a237e', textTransform: 'uppercase' }}>
                                        {teacher.name}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Nút xem toàn bộ Đội Ngũ (Gom về 1 nút duy nhất) */}
                <Box sx={{ textAlign: 'center', mt: 8 }}>
                    <Button
                        component={Link} href="/doi-ngu"
                        variant="contained" size="large"
                        sx={{
                            borderRadius: '50px', px: 6, py: 2, fontFamily: fontHeader, fontWeight: 800, fontSize: '1.1rem',
                            background: 'linear-gradient(45deg, #1a237e 30%, #1976d2 90%)',
                            boxShadow: '0 10px 30px rgba(26, 35, 126, 0.3)', transition: 'all 0.3s',
                            '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 15px 40px rgba(26, 35, 126, 0.5)' }
                        }}
                    >
                        Gặp Gỡ Đội Ngũ Chuyên Gia
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}

export default Teacher