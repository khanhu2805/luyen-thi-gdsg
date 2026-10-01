'use client';

import {
  Alert,
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import AutorenewRoundedIcon from '@mui/icons-material/AutorenewRounded';
import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import PaymentsRoundedIcon from '@mui/icons-material/PaymentsRounded';
import PolicyRoundedIcon from '@mui/icons-material/PolicyRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import SwapHorizRoundedIcon from '@mui/icons-material/SwapHorizRounded';
import VideoLibraryRoundedIcon from '@mui/icons-material/VideoLibraryRounded';

const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

const policyCards = [
  {
    title: 'Tham gia giữa khóa',
    icon: <VideoLibraryRoundedIcon />,
    items: [
      'Học viên tham gia muộn vẫn được nhận đầy đủ video, tài liệu và quyền truy cập LMS của các buổi đã qua.',
      'Học phí được trung tâm tư vấn trực tiếp theo thời điểm tham gia và được áp dụng theo gói phù hợp của khóa.',
      'Sau buổi 5, trung tâm không nhận học viên giữa khóa; trường hợp đặc biệt được xem xét riêng.',
    ],
  },
  {
    title: 'Nghỉ học',
    icon: <SchoolRoundedIcon />,
    items: [
      'Học viên nghỉ buổi không được hoàn hoặc khấu trừ học phí.',
      'Học viên vẫn được cấp video, tài liệu và tiếp tục học các buổi còn lại.',
    ],
  },
  {
    title: 'Bảo lưu',
    icon: <AutorenewRoundedIcon />,
    items: [
      'Được bảo lưu 01 lần/khóa, tối đa 90 ngày.',
      'Phần học trực tiếp chưa sử dụng được chuyển sang khóa cùng môn/chương trình gần nhất.',
      'Video và tài liệu đã cấp vẫn giữ quyền truy cập trong thời hạn khóa.',
    ],
  },
  {
    title: 'Chuyển lớp',
    icon: <SwapHorizRoundedIcon />,
    items: [
      'Được chuyển lớp 01 lần nếu còn lớp cùng môn/chương trình và còn chỗ.',
      'Nếu chuyển sang chương trình có học phí cao hơn, học viên đóng phần chênh lệch.',
      'Nếu chuyển sang chương trình có học phí thấp hơn, phần chênh lệch được giữ làm tín dụng học phí và không hoàn bằng tiền.',
    ],
  },
  {
    title: 'Hoàn học phí',
    icon: <PaymentsRoundedIcon />,
    items: [
      'Học phí đã thanh toán không hoàn lại.',
      'Chỉ trường hợp đặc biệt mới được xem xét và phải có phê duyệt của Ban Giám đốc.',
    ],
  },
  {
    title: 'Giáo viên nghỉ / sự cố từ đơn vị',
    icon: <GroupsRoundedIcon />,
    items: [
      'Trung tâm bố trí học bù hoặc giáo viên thay thế tương đương.',
      'Không tính là buổi học đã sử dụng nếu đơn vị không tổ chức được nội dung tương ứng.',
    ],
  },
];

export default function ChinhSachPage() {
  return (
    <Box sx={{ bgcolor: '#f4f7fe', minHeight: '100vh', pb: 12, fontFamily: fontBody }}>
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          color: 'white',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #0d47a1, #283593)',
        }}
      >
        <Container maxWidth="lg">
          <Chip
            icon={<PolicyRoundedIcon />}
            label="CHÍNH SÁCH HỌC VIÊN"
            sx={{ mb: 2, bgcolor: 'rgba(255,255,255,.14)', color: 'white', fontWeight: 900 }}
          />
          <Typography
            variant="h2"
            sx={{
              fontFamily: fontHeader,
              fontWeight: 900,
              fontSize: { xs: '2.15rem', md: '3.5rem' },
            }}
          >
            Chính sách tuyển sinh & vận hành
          </Typography>
          <Typography sx={{ mt: 2, maxWidth: 850, mx: 'auto', opacity: 0.92, lineHeight: 1.7 }}>
            Nội dung áp dụng cho chương trình ôn thi tuyển sinh lớp 10 trực tuyến.
            Học phí và lịch học cụ thể không công khai trên website và được tư vấn trực tiếp theo lớp đang mở.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ mt: { xs: 5, md: 7 } }}>
        <Alert severity="info" sx={{ mb: 4, borderRadius: 3 }}>
          Chính sách này được trình bày theo hướng dành cho phụ huynh và học viên.
          Trường hợp ngoại lệ hoặc vượt khung sẽ được đơn vị xem xét riêng.
        </Alert>

        <Grid container spacing={3}>
          {policyCards.map((policy) => (
            <Grid key={policy.title} size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  border: '1px solid #e5eaf0',
                  boxShadow: '0 12px 30px rgba(31,42,74,.06)',
                }}
              >
                <CardContent sx={{ p: 3.5 }}>
                  <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', mb: 2 }}>
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: 2.5,
                        bgcolor: '#e8f1ff',
                        color: '#0d47a1',
                        display: 'grid',
                        placeItems: 'center',
                      }}
                    >
                      {policy.icon}
                    </Box>
                    <Typography variant="h5" sx={{ fontFamily: fontHeader, fontWeight: 900 }}>
                      {policy.title}
                    </Typography>
                  </Stack>
                  <Stack spacing={1.4}>
                    {policy.items.map((item) => (
                      <Box key={item} sx={{ display: 'flex', gap: 1.2, alignItems: 'flex-start' }}>
                        <Box
                          sx={{
                            width: 7,
                            height: 7,
                            borderRadius: '50%',
                            bgcolor: '#1976d2',
                            mt: 1,
                            flexShrink: 0,
                          }}
                        />
                        <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            mt: 5,
            p: { xs: 3, md: 4 },
            borderRadius: 5,
            bgcolor: 'white',
            border: '1px solid #e5eaf0',
          }}
        >
          <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', mb: 2.5 }}>
            <CardGiftcardRoundedIcon color="primary" />
            <Typography variant="h4" sx={{ fontFamily: fontHeader, fontWeight: 900, color: '#1a237e' }}>
              Chính sách sách & quà tặng
            </Typography>
          </Stack>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography sx={{ fontWeight: 900 }}>Giá bán sách</Typography>
              <Typography color="text.secondary" sx={{ mt: 1, lineHeight: 1.7 }}>
                Các cuốn “36 ĐỀ KIỂM TRA ĐỊNH KỲ TOÁN 6”, “TOÁN 7”, “TOÁN 8” và “TOÁN 9”
                có giá bán lẻ 90.000 đồng/cuốn, chưa bao gồm phí vận chuyển. Phí vận chuyển
                đối với đơn mua sách do người mua thanh toán.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography sx={{ fontWeight: 900 }}>Quà tặng học viên</Typography>
              <Typography color="text.secondary" sx={{ mt: 1, lineHeight: 1.7 }}>
                Mỗi học viên đăng ký và hoàn tất học phí một khóa ôn thi tuyển sinh lớp 10
                được tặng tối đa 01 cuốn “36 ĐỀ KIỂM TRA ĐỊNH KỲ TOÁN 9”/khóa.
                Quà tặng không quy đổi thành tiền và Công ty chịu phí vận chuyển đối với sách tặng.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography sx={{ fontWeight: 900 }}>Sách Toán 6–8</Typography>
              <Typography color="text.secondary" sx={{ mt: 1, lineHeight: 1.7 }}>
                Không dùng làm quà tặng của khóa tuyển sinh lớp 10; các đầu sách này được bán độc lập.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            mt: 3,
            p: { xs: 3, md: 4 },
            borderRadius: 5,
            bgcolor: '#fff8e1',
            border: '1px solid #ffe082',
          }}
        >
          <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', mb: 2 }}>
            <GroupsRoundedIcon sx={{ color: '#ef6c00' }} />
            <Typography variant="h4" sx={{ fontFamily: fontHeader, fontWeight: 900, color: '#e65100' }}>
              Chương trình “Mời bạn cùng học”
            </Typography>
          </Stack>
          <Typography sx={{ lineHeight: 1.75 }}>
            Học viên hiện tại giới thiệu 01 học viên mới đăng ký và thanh toán thành công:
            người giới thiệu được giảm 100.000đ cho khóa tiếp theo; học viên mới được giảm
            100.000đ ngay trên khóa đăng ký.
          </Typography>
          <Typography sx={{ mt: 1.5, lineHeight: 1.75 }}>
            Mỗi học viên được hưởng tối đa 02 lượt giới thiệu/khóa. Ưu đãi không quy đổi thành tiền
            và không áp dụng đồng thời với ưu đãi khác, trừ khi Ban Giám đốc phê duyệt.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
