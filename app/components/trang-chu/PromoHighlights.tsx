'use client';

import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import Link from 'next/link';

const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

export default function PromoHighlights() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: '#f4f7fe' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 4.5 }}>
          <Chip
            label="ƯU ĐÃI ĐANG ÁP DỤNG"
            sx={{
              mb: 1.5,
              fontFamily: fontHeader,
              fontWeight: 900,
              bgcolor: '#fff3e0',
              color: '#e65100',
            }}
          />
          <Typography
            variant="h3"
            sx={{
              fontFamily: fontHeader,
              fontWeight: 900,
              color: '#1a237e',
              fontSize: { xs: '2rem', md: '2.8rem' },
            }}
          >
            Đăng ký học – nhận thêm quyền lợi
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ mt: 1.5, maxWidth: 760, mx: 'auto', lineHeight: 1.7, fontFamily: fontBody }}
          >
            Các ưu đãi được thiết kế để học sinh có thêm tài liệu ôn tập và cùng bạn bè tạo động lực học tập tốt hơn.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                height: '100%',
                p: { xs: 3, md: 4 },
                borderRadius: 5,
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #ff8f00 0%, #ff6f00 100%)',
                boxShadow: '0 18px 42px rgba(239,108,0,.22)',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  width: 190,
                  height: 190,
                  borderRadius: '50%',
                  right: -65,
                  top: -70,
                  bgcolor: 'rgba(255,255,255,.12)',
                }}
              />
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', position: 'relative' }}>
                <Box
                  sx={{
                    width: 54,
                    height: 54,
                    borderRadius: 3,
                    display: 'grid',
                    placeItems: 'center',
                    bgcolor: 'rgba(255,255,255,.16)',
                  }}
                >
                  <CardGiftcardRoundedIcon sx={{ fontSize: 30 }} />
                </Box>
                <Box>
                  <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 1 }}>
                    QUÀ TẶNG HỌC VIÊN
                  </Typography>
                  <Typography variant="h4" sx={{ fontFamily: fontHeader, fontWeight: 900 }}>
                    Tặng sách Toán 9
                  </Typography>
                </Box>
              </Stack>

              <Typography sx={{ mt: 2.5, fontSize: '1.05rem', lineHeight: 1.75, position: 'relative' }}>
                Học viên đăng ký và hoàn tất học phí một khóa ôn thi tuyển sinh lớp 10
                được tặng <b>01 cuốn “36 Đề kiểm tra định kỳ Toán 9”</b>.
              </Typography>

              <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mt: 2, position: 'relative' }}>
                <LocalShippingRoundedIcon sx={{ fontSize: 20 }} />
                <Typography sx={{ fontWeight: 800 }}>
                  Phí vận chuyển sách tặng do trung tâm hỗ trợ.
                </Typography>
              </Stack>

              <Button
                component={Link}
                href="/sach"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  mt: 3,
                  borderRadius: 999,
                  px: 2.8,
                  bgcolor: 'white',
                  color: '#e65100',
                  fontWeight: 900,
                  '&:hover': { bgcolor: '#fff8e1' },
                }}
              >
                Xem sách
              </Button>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                height: '100%',
                p: { xs: 3, md: 4 },
                borderRadius: 5,
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #1565c0 0%, #3949ab 100%)',
                boxShadow: '0 18px 42px rgba(25,118,210,.2)',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  width: 200,
                  height: 200,
                  borderRadius: '50%',
                  right: -70,
                  bottom: -95,
                  bgcolor: 'rgba(255,255,255,.10)',
                }}
              />
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', position: 'relative' }}>
                <Box
                  sx={{
                    width: 54,
                    height: 54,
                    borderRadius: 3,
                    display: 'grid',
                    placeItems: 'center',
                    bgcolor: 'rgba(255,255,255,.16)',
                  }}
                >
                  <GroupsRoundedIcon sx={{ fontSize: 30 }} />
                </Box>
                <Box>
                  <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 1 }}>
                    MỜI BẠN CÙNG HỌC
                  </Typography>
                  <Typography variant="h4" sx={{ fontFamily: fontHeader, fontWeight: 900 }}>
                    Cùng nhận ưu đãi 100.000đ
                  </Typography>
                </Box>
              </Stack>

              <Typography sx={{ mt: 2.5, fontSize: '1.05rem', lineHeight: 1.75, position: 'relative' }}>
                Khi học viên hiện tại giới thiệu một bạn mới đăng ký và thanh toán thành công,
                <b> bạn mới được giảm 100.000đ ngay trên khóa đăng ký</b>.
              </Typography>
              <Typography sx={{ mt: 1.2, fontSize: '1.05rem', lineHeight: 1.75, position: 'relative' }}>
                Người giới thiệu nhận <b>100.000đ ưu đãi cho khóa học tiếp theo</b>.
              </Typography>

              <Button
                component={Link}
                href="/chinh-sach"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  mt: 3,
                  borderRadius: 999,
                  px: 2.8,
                  bgcolor: 'white',
                  color: '#1a237e',
                  fontWeight: 900,
                  '&:hover': { bgcolor: '#e8eaf6' },
                }}
              >
                Xem quyền lợi
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
