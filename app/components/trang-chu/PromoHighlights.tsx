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
import FadeInScroll from '../FadeInScroll';

const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

export default function PromoHighlights() {
  return (
    <Box sx={{ py: { xs: 7, md: 9 }, bgcolor: 'white', position: 'relative', overflow: 'hidden' }}>
      <Box
        className="floating-card"
        sx={{
          position: 'absolute',
          width: 280,
          height: 280,
          borderRadius: '50%',
          left: -140,
          bottom: -120,
          bgcolor: 'rgba(255,138,31,.07)',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <FadeInScroll>
          <Box sx={{ textAlign: 'center', mb: 4.5 }}>
            <Chip
              label="ƯU ĐÃI ĐANG ÁP DỤNG"
              sx={{
                mb: 1.5,
                bgcolor: '#fff2e5',
                color: '#e66f00',
                fontFamily: fontHeader,
                fontWeight: 900,
              }}
            />
            <Typography
              variant="h3"
              sx={{
                fontFamily: fontHeader,
                fontWeight: 900,
                color: '#102044',
                fontSize: { xs: '2rem', md: '2.85rem' },
                letterSpacing: '-0.03em',
              }}
            >
              Đăng ký học,
              <Box component="span" className="gradient-text" sx={{ display: 'inline', ml: 1 }}>
                nhận thêm quyền lợi
              </Box>
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ mt: 1.4, maxWidth: 760, mx: 'auto', lineHeight: 1.7, fontFamily: fontBody }}
            >
              Hai chương trình ưu đãi giúp học sinh có thêm tài liệu luyện tập
              và tạo động lực học cùng bạn bè.
            </Typography>
          </Box>
        </FadeInScroll>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <FadeInScroll direction="right">
              <Box
                className="card-lift"
                sx={{
                  height: '100%',
                  p: { xs: 3, md: 4 },
                  borderRadius: 6,
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, #ff9b31 0%, #f46b20 100%)',
                  boxShadow: '0 22px 52px rgba(239,108,0,.18)',
                }}
              >
                <Box
                  className="floating-orb"
                  sx={{
                    position: 'absolute',
                    width: 230,
                    height: 230,
                    borderRadius: '50%',
                    right: -85,
                    top: -95,
                    bgcolor: 'rgba(255,255,255,.14)',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    width: 120,
                    height: 120,
                    borderRadius: '50%',
                    right: 40,
                    bottom: -55,
                    bgcolor: 'rgba(255,255,255,.08)',
                  }}
                />

                <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', position: 'relative' }}>
                  <Box
                    sx={{
                      width: 58,
                      height: 58,
                      borderRadius: 3.2,
                      display: 'grid',
                      placeItems: 'center',
                      bgcolor: 'rgba(255,255,255,.16)',
                      border: '1px solid rgba(255,255,255,.15)',
                    }}
                  >
                    <CardGiftcardRoundedIcon sx={{ fontSize: 32 }} />
                  </Box>
                  <Box>
                    <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 1 }}>
                      QUÀ TẶNG HỌC VIÊN
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{ fontFamily: fontHeader, fontWeight: 900, fontSize: { xs: '1.65rem', md: '2rem' } }}
                    >
                      Tặng sách Toán 9
                    </Typography>
                  </Box>
                </Stack>

                <Typography sx={{ mt: 2.5, fontSize: '1.04rem', lineHeight: 1.75, position: 'relative' }}>
                  Học viên đăng ký và hoàn tất học phí một khóa ôn thi tuyển sinh lớp 10
                  được tặng <b>01 cuốn “36 Đề kiểm tra định kỳ Toán 9”</b>.
                </Typography>

                <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mt: 2, position: 'relative' }}>
                  <LocalShippingRoundedIcon sx={{ fontSize: 21 }} />
                  <Typography sx={{ fontWeight: 800 }}>
                    Trung tâm hỗ trợ phí vận chuyển sách tặng.
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
                    py: 1.05,
                    bgcolor: 'white',
                    color: '#df6400',
                    textTransform: 'none',
                    fontFamily: fontHeader,
                    fontWeight: 900,
                    '&:hover': { bgcolor: '#fff6ec' },
                  }}
                >
                  Xem bộ sách
                </Button>
              </Box>
            </FadeInScroll>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <FadeInScroll direction="left" delay={0.08}>
              <Box
                className="card-lift"
                sx={{
                  height: '100%',
                  p: { xs: 3, md: 4 },
                  borderRadius: 6,
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, #2f6fed 0%, #5546c8 100%)',
                  boxShadow: '0 22px 52px rgba(47,111,237,.18)',
                }}
              >
                <Box
                  className="floating-card-delay"
                  sx={{
                    position: 'absolute',
                    width: 240,
                    height: 240,
                    borderRadius: '50%',
                    right: -95,
                    bottom: -110,
                    bgcolor: 'rgba(255,255,255,.11)',
                  }}
                />

                <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', position: 'relative' }}>
                  <Box
                    sx={{
                      width: 58,
                      height: 58,
                      borderRadius: 3.2,
                      display: 'grid',
                      placeItems: 'center',
                      bgcolor: 'rgba(255,255,255,.14)',
                      border: '1px solid rgba(255,255,255,.15)',
                    }}
                  >
                    <GroupsRoundedIcon sx={{ fontSize: 32 }} />
                  </Box>
                  <Box>
                    <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 1 }}>
                      MỜI BẠN CÙNG HỌC
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{ fontFamily: fontHeader, fontWeight: 900, fontSize: { xs: '1.65rem', md: '2rem' } }}
                    >
                      Cùng nhận ưu đãi 100.000đ
                    </Typography>
                  </Box>
                </Stack>

                <Typography sx={{ mt: 2.5, fontSize: '1.04rem', lineHeight: 1.75, position: 'relative' }}>
                  Khi học viên hiện tại giới thiệu một bạn mới đăng ký và thanh toán thành công,
                  <b> bạn mới được giảm 100.000đ</b> ngay trên khóa đăng ký.
                </Typography>
                <Typography sx={{ mt: 1.1, fontSize: '1.04rem', lineHeight: 1.75, position: 'relative' }}>
                  Người giới thiệu nhận <b>100.000đ ưu đãi cho khóa tiếp theo</b>.
                </Typography>

                <Button
                  component={Link}
                  href="/chinh-sach"
                  endIcon={<ArrowForwardRoundedIcon />}
                  sx={{
                    mt: 3,
                    borderRadius: 999,
                    px: 2.8,
                    py: 1.05,
                    bgcolor: 'white',
                    color: '#2a45a8',
                    textTransform: 'none',
                    fontFamily: fontHeader,
                    fontWeight: 900,
                    '&:hover': { bgcolor: '#eef2ff' },
                  }}
                >
                  Xem quyền lợi
                </Button>
              </Box>
            </FadeInScroll>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
