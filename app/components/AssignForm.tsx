'use client';

import React, { useState } from 'react';
import { 
    Box, Container, Card, Grid, Typography, Stack, 
    TextField, Button, CircularProgress, keyframes, Divider, MenuItem 
} from '@mui/material';

type Props = {
    setOpenSuccessPopup: (open: boolean) => void;
    setPhone: (phone: string) => void;
}

const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

const pulseGlow = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(255, 152, 0, 0.6); }
  70% { box-shadow: 0 0 0 25px rgba(255, 152, 0, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 152, 0, 0); }
`;

// ================================================

const AssignForm = (props: Props) => {

    const [errors, setErrors] = useState({
        HoTen: '',
        SoDienThoai: '',
        TruongDangHoc: '',
        KhoiLop: '',
        MonHocMuonOnLuyen: '',
        CauHoiKhac: '',
    });

    const [formData, setFormData] = useState({
        HoTen: '',
        SoDienThoai: '',
        TruongDangHoc: '',
        KhoiLop: '',
        MonHocMuonOnLuyen: '', // Sẽ dùng trường này để lưu Gói khóa học
        CauHoiKhac: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // 1. Hàm kiểm tra tính hợp lệ
    const validateForm = () => {
        const tempErrors = {
            HoTen: '',
            SoDienThoai: '',
            TruongDangHoc: '',
            KhoiLop: '',
            MonHocMuonOnLuyen: '',
            CauHoiKhac: '',
        };
        let isValid = true;

        // Kiểm tra Họ tên
        if (!formData.HoTen.trim()) {
            tempErrors.HoTen = "Vui lòng nhập họ tên.";
            isValid = false;
        }

        // Kiểm tra Số điện thoại (Regex chuẩn nhà mạng VN)
        const phoneRegex = /^(0[2|3|5|7|8|9])+([0-9]{8})$/;
        if (!formData.SoDienThoai.trim()) {
            tempErrors.SoDienThoai = "Vui lòng nhập số điện thoại.";
            isValid = false;
        } else if (!phoneRegex.test(formData.SoDienThoai)) {
            tempErrors.SoDienThoai = "Số điện thoại không hợp lệ (Gồm 10 số, bắt đầu bằng 0).";
            isValid = false;
        }

        // Kiểm tra Trường
        if (!formData.TruongDangHoc.trim()) {
            tempErrors.TruongDangHoc = "Vui lòng nhập tên trường.";
            isValid = false;
        }

        // Kiểm tra Khối lớp
        if (!formData.KhoiLop.trim()) {
            tempErrors.KhoiLop = "Vui lòng chọn khối lớp.";
            isValid = false;
        }
        // Kiểm tra Gói Môn học
        if (!formData.MonHocMuonOnLuyen.trim()) {
            tempErrors.MonHocMuonOnLuyen = "Vui lòng chọn gói học quan tâm.";
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        
        // Xóa lỗi khi user bắt đầu gõ lại
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Ngăn form reload lại trang

        if (!validateForm()) return;

        setIsSubmitting(true);

        // Chuyển dữ liệu thành dạng FormData để Google Script dễ đọc
        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value);
        });

        try {
            await fetch('https://script.google.com/macros/s/AKfycbxPgs_n6UZ3Pvp3vGHYDtfJPiYdMhy2tZBmJTDC2ZEHSefljcH8F4-36kxSMt1AORxFvw/exec', {
                method: 'POST',
                body: data,
                mode: 'no-cors' // Tránh lỗi CORS policy
            });

            props.setOpenSuccessPopup(true);

            // Xóa trắng form sau khi gửi
            props.setPhone(formData.SoDienThoai);
            setFormData({ HoTen: '', SoDienThoai: '', TruongDangHoc: '', KhoiLop: '', MonHocMuonOnLuyen: '', CauHoiKhac: '' });
            
        } catch (error) {
            alert('Có lỗi xảy ra trong quá trình gửi. Vui lòng liên hệ trực tiếp qua Zalo.');
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    //===========================================================================

    return (
        <Box sx={{ position: 'relative', pb: 15 }} id="form-dang-ky">
            {/* SVG Wave Divider */}
            <Box sx={{ width: '100%', overflow: 'hidden', lineHeight: 0, transform: 'rotate(180deg)' }}>
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '100px' }}>
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#1976d2"></path>
                </svg>
            </Box>

            <Box sx={{ bgcolor: '#1976d2', pt: 5, pb: 15, px: 2 }}>
                <Container maxWidth="xl">
                    <Card sx={{
                        borderRadius: 8, overflow: 'hidden',
                        boxShadow: '0 30px 60px rgba(0,0,0,0.3)'
                    }}>
                        <Grid container>
                            {/* CỘT TRÁI - BANNER THÔNG TIN */}
                            <Grid size={{ xs: 12, md: 6 }} sx={{
                                background: 'url(/banner-bg.jpg) center/cover', position: 'relative',
                                minHeight: { xs: 500, md: 'auto' }
                            }}>
                                {/* Overlay */}
                                <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,25,47,0.95), rgba(10,25,47,0.75))', display: 'flex', flexDirection: 'column', justifyContent: 'center', p: { xs: 4, md: 6 }, color: 'white' }}>
                                    <Typography variant="h3" sx={{ fontFamily: fontHeader, fontWeight: 900, mb: 3, lineHeight: 1.3, textTransform: 'uppercase' }}>
                                        Kiểm Tra Năng Lực <br/><span style={{ color: '#4fc3f7' }}>& Đăng Ký Học Thử</span>
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 400, opacity: 0.9, mb: 4, fontFamily: fontBody, lineHeight: 1.6 }}>
                                        Để lại thông tin ngay hôm nay, đội ngũ Giáo viên sẽ liên hệ đánh giá điểm mạnh - yếu và tư vấn lộ trình học tập cá nhân hóa phù hợp nhất.
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 3, bgcolor: 'rgba(255,152,0,0.15)', borderRadius: 4, border: '1px solid rgba(255,152,0,0.3)', backdropFilter: 'blur(5px)' }}>
                                        <Box sx={{ fontSize: '2.5rem' }}>🎁</Box>
                                        <Box>
                                            <Typography variant="subtitle1" sx={{ fontWeight: 800, fontFamily: fontHeader, color: '#ffb300' }}>
                                                QUYỀN LỢI ĐĂNG KÝ
                                            </Typography>
                                            <Typography variant="body1" sx={{ fontFamily: fontBody, opacity: 0.9 }}>
                                                Tham gia 1 buổi học thử miễn phí và nhận báo cáo đánh giá năng lực<br/>chi tiết.
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>

                            {/* CỘT PHẢI - FORM ĐIỀN THÔNG TIN */}
                            <Grid size={{ xs: 12, md: 6 }} sx={{ p: { xs: 4, md: 8 }, bgcolor: 'white' }}>
                                <Typography variant="h4" sx={{ fontFamily: fontHeader, fontWeight: 900, color: '#1a237e', mb: 1, textTransform: 'uppercase' }}>
                                    Điền Thông Tin Đăng Ký
                                </Typography>
                                <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
                                    Trung tâm sẽ liên hệ với Phụ huynh/Học sinh trong thời gian sớm nhất.
                                </Typography>

                                <Divider sx={{ mb: 4, border: '0px' }} />

                                <form onSubmit={handleSubmit} noValidate>
                                    <Stack spacing={4}>
                                        <Grid container spacing={3}>
                                            <Grid size={{ xs: 12, sm: 6 }}>
                                                <TextField fullWidth
                                                    error={!!errors.HoTen}
                                                    helperText={errors.HoTen}
                                                    value={formData.HoTen}
                                                    onChange={handleInputChange}
                                                    type='text'
                                                    required name="HoTen" label="Họ tên học sinh" variant="standard" sx={{ '& .MuiInput-underline:after': { borderBottomColor: 'primary.main' } }} />
                                            </Grid>
                                            <Grid size={{ xs: 12, sm: 6 }}>
                                                <TextField fullWidth value={formData.SoDienThoai}
                                                    onChange={handleInputChange}
                                                    error={!!errors.SoDienThoai}
                                                    helperText={errors.SoDienThoai}
                                                    type='tel'
                                                    required
                                                    name="SoDienThoai" label="Số điện thoại / Zalo (Phụ huynh)" variant="standard" />
                                            </Grid>
                                        </Grid>

                                        <Grid container spacing={3}>
                                            <Grid size={{ xs: 12, sm: 6 }}>
                                                <TextField fullWidth value={formData.TruongDangHoc}
                                                    onChange={handleInputChange}
                                                    type='text'
                                                    error={!!errors.TruongDangHoc}
                                                    helperText={errors.TruongDangHoc}
                                                    name="TruongDangHoc" required label="Trường đang theo học" variant="standard" />
                                            </Grid>
                                            <Grid size={{ xs: 12, sm: 6 }}>
                                                <TextField fullWidth value={formData.KhoiLop}
                                                    onChange={handleInputChange}
                                                    type='text' select
                                                    error={!!errors.KhoiLop}
                                                    helperText={errors.KhoiLop}
                                                    name="KhoiLop" required label="Khối lớp" variant="standard">
                                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(lop => (
                                                        <MenuItem key={lop} value={lop.toString()}>Lớp {lop}</MenuItem>
                                                    ))}
                                                </TextField>
                                            </Grid>
                                        </Grid>

                                        {/* DROPDOWN CHỌN GÓI KHÓA HỌC */}
                                        <TextField
                                            fullWidth select
                                            value={formData.MonHocMuonOnLuyen}
                                            onChange={handleInputChange}
                                            name="MonHocMuonOnLuyen"
                                            required
                                            label="Gói học quan tâm / Môn muốn đăng ký?"
                                            error={!!errors.MonHocMuonOnLuyen}
                                            helperText={errors.MonHocMuonOnLuyen}
                                            variant="standard" 
                                        >
                                            <MenuItem value="Gói Nền Tảng (250k)">Gói Nền Tảng</MenuItem>
                                            <MenuItem value="Gói Nền Tảng Plus (650k)">Gói Nền Tảng Plus</MenuItem>
                                            <MenuItem value="Gói Sĩ Số Thấp (800k)">Gói Sĩ Số Thấp</MenuItem>
                                            <MenuItem value="Gói Gia Sư 1 Kèm 1">Gói Gia Sư 1 Kèm 1</MenuItem>
                                            <MenuItem value="Cần tư vấn thêm">Chưa rõ, cần tư vấn thêm định hướng</MenuItem>
                                        </TextField>

                                        <TextField
                                            fullWidth value={formData.CauHoiKhac}
                                            onChange={handleInputChange}
                                            name="CauHoiKhac"
                                            type='text'
                                            label="Bạn còn thắc mắc hay cần hỗ trợ gì thêm không?"
                                            variant="standard" multiline rows={2}
                                        />

                                        <Box sx={{ pt: 2 }}>
                                            <Button
                                                type='submit'
                                                disabled={isSubmitting}
                                                variant="contained" size="large" fullWidth
                                                sx={{
                                                    py: 2.5, borderRadius: 50, fontFamily: fontHeader, fontWeight: 900, fontSize: '1.2rem',
                                                    background: 'linear-gradient(90deg, #ff9800, #ff5722)',
                                                    boxShadow: '0 10px 20px rgba(255, 87, 34, 0.3)',
                                                    animation: isSubmitting ? 'none' : `${pulseGlow} 2s infinite`, transition: '0.3s',
                                                    '&:hover': { transform: 'scale(1.02)', background: 'linear-gradient(90deg, #f57c00, #e64a19)' },
                                                    '&:disabled': { background: '#ccc', animation: 'none', transform: 'none' }
                                                }}
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <CircularProgress size={24} sx={{ color: 'white', mr: 2 }} />
                                                        ĐANG GỬI THÔNG TIN...
                                                    </>
                                                ) : (
                                                    'GỬI ĐĂNG KÝ TƯ VẤN'
                                                )}
                                            </Button>
                                        </Box>
                                    </Stack>
                                </form>
                            </Grid>
                        </Grid>
                    </Card>
                </Container>
            </Box>
        </Box>
    )
}

export default AssignForm;