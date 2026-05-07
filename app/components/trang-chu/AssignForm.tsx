import React, { useState } from 'react'
import { Box, Container, Card, Grid, Typography, Stack, TextField, Button, CircularProgress, keyframes, Divider } from '@mui/material';
type Props = {
    setOpenSuccessPopup: (open: boolean) => void;
    setPhone: (phone: string) => void;
}

const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

const pulseGlow = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(25, 118, 210, 0.4); }
  70% { box-shadow: 0 0 0 25px rgba(25, 118, 210, 0); }
  100% { box-shadow: 0 0 0 0 rgba(25, 118, 210, 0); }
`;

// ================================================

const AssignForm = (props: Props) => {

    const [errors, setErrors] = useState({
        HoTen: '',
        SoDienThoai: '',
        TruongDangHoc: '',
        MonHocMuonOnLuyen: '',
    });

    // 2. Hàm kiểm tra tính hợp lệ
    const validateForm = () => {
        const tempErrors = {
            HoTen: '',
            SoDienThoai: '',
            TruongDangHoc: '',
            MonHocMuonOnLuyen: '',
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
            tempErrors.SoDienThoai = "Số điện thoại không hợp lệ (Gồm 10 số, bắt đầu bằng 09, 03...).";
            isValid = false;
        }

        // Kiểm tra Trường
        if (!formData.TruongDangHoc.trim()) {
            tempErrors.TruongDangHoc = "Vui lòng nhập tên trường.";
            isValid = false;
        }

        // Kiểm tra Môn học
        if (!formData.MonHocMuonOnLuyen.trim()) {
            tempErrors.MonHocMuonOnLuyen = "Vui lòng nhập môn học quan tâm.";
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const [formData, setFormData] = useState({
        HoTen: '',
        SoDienThoai: '',
        TruongDangHoc: '',
        MonHocMuonOnLuyen: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
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
                mode: 'no-cors' // Rất quan trọng: giúp tránh lỗi CORS policy khi gọi từ localhost/domain khác
            });

            props.setOpenSuccessPopup(true);

            // Xóa trắng form sau khi gửi
            props.setPhone(formData.SoDienThoai); // Lưu số điện thoại để hiển thị trong popup
            setFormData({ HoTen: '', SoDienThoai: '', TruongDangHoc: '', MonHocMuonOnLuyen: '' });
            setErrors({ HoTen: '', SoDienThoai: '', TruongDangHoc: '', MonHocMuonOnLuyen: '' });
        } catch (error) {
            alert('Có lỗi xảy ra, vui lòng thử lại sau.');
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
                            <Grid size={{ xs: 12, md: 5 }} sx={{
                                background: 'url(/banner-bg.jpg) center/cover', position: 'relative',
                                minHeight: { xs: 700, md: 'auto' }
                            }}>
                                {/* Overlay */}
                                <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,25,47,0.9), rgba(10,25,47,0.7))', display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 6, color: 'white' }}>
                                    <Typography variant="h3" sx={{ fontFamily: fontHeader, fontWeight: 900, mb: 3 }}>
                                        Nhận Mã Trải Nghiệm Sớm
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 400, opacity: 0.9, mb: 4, fontFamily: fontBody }}>
                                        Đăng ký ngay hôm nay để trở thành những người đầu tiên truy cập hệ thống và nhận ưu đãi hấp dẫn.
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 3, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 4, backdropFilter: 'blur(5px)' }}>
                                        <Box sx={{ fontSize: '2rem' }}>🎁</Box>
                                        <Box>
                                            <Typography variant="subtitle2" sx={{ fontWeight: 700, fontFamily: fontHeader }}>
                                                ƯU ĐÃI GHI DANH SỚM
                                            </Typography>
                                            <Typography variant="body2" sx={{ fontFamily: fontBody }}>
                                                Tặng ngay bộ tài liệu bí kíp và voucher giảm giá học phí hấp dẫn
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>

                            <Grid size={{ xs: 12, md: 7 }} sx={{ p: { xs: 4, md: 8 }, bgcolor: 'white' }}>
                                <Typography variant="h5" sx={{ fontFamily: fontHeader, fontWeight: 800, color: '#1a237e', mb: 1, textTransform: 'uppercase' }}>
                                    Đăng kí nhận tư vấn miễn phí
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
                                                    error={!!errors.SoDienThoai}      // <-- Thêm bắt lỗi
                                                    helperText={errors.SoDienThoai}   // <-- Hiện chữ lỗi
                                                    type='tel'
                                                    required
                                                    name="SoDienThoai" label="Số điện thoại / Zalo" variant="standard" />
                                            </Grid>
                                        </Grid>

                                        <TextField fullWidth value={formData.TruongDangHoc}
                                            onChange={handleInputChange}
                                            type='text'
                                            error={!!errors.TruongDangHoc}        // <-- Thêm bắt lỗi
                                            helperText={errors.TruongDangHoc}     // <-- Hiện chữ lỗi
                                            name="TruongDangHoc" required label="Trường đang theo học" variant="standard" />

                                        <TextField
                                            fullWidth value={formData.MonHocMuonOnLuyen}
                                            onChange={handleInputChange}
                                            name="MonHocMuonOnLuyen"
                                            required
                                            type='text'
                                            label="Môn học muốn ôn luyện?"
                                            error={!!errors.MonHocMuonOnLuyen}        // <-- Thêm bắt lỗi
                                            helperText={errors.MonHocMuonOnLuyen}     // <-- Hiện chữ lỗi
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
                                                    animation: `${pulseGlow} 2s infinite`, transition: '0.3s',
                                                    '&:hover': { transform: 'scale(1.02)', background: 'linear-gradient(90deg, #f57c00, #e64a19)' },
                                                    '&:disabled': { background: '#ccc', animation: 'none', transform: 'none' }
                                                }}
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <CircularProgress size={24} sx={{ color: 'white', mr: 2 }} />
                                                        ĐANG GỬI...
                                                    </>
                                                ) : (
                                                    'ĐĂNG KÝ TƯ VẤN MIỄN PHÍ'
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

export default AssignForm