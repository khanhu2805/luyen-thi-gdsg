# Giao diện sách và tài liệu – Luyện thi Giáo dục Sài Gòn

## Các tệp thay đổi

- `app/tai-lieu-on-luyen/page.tsx`: trang thư viện, tài liệu 3 môn ôn lớp 10, danh mục đáp án Toán 6–9.
- `app/tai-lieu-on-luyen/[slug]/page.tsx`: trang xem đáp án theo lớp; đọc PDF trong trang (màn hình lớn), mở tab mới, tải PDF khi có file.
- `app/sach/page.tsx`: danh mục bộ sách 36 đề Toán 6–9, liên kết trực tiếp sang trang đáp án tương ứng.
- `app/data/answerBooks.ts`: nguồn dữ liệu dùng chung; không còn khai báo trùng trạng thái đáp án giữa hai trang.
- `app/components/Header.tsx` và `app/components/Footer.tsx`: điều chỉnh thanh điều hướng/chân trang cùng ngôn ngữ thiết kế đơn giản, hạn chế hiệu ứng màu và khẩu hiệu.
- `xem-truoc-thu-vien.html`: bản mockup tĩnh để xem nhanh phong cách trong trình duyệt, **không phải bản build Next.js**.

## Kết nối file đáp án bạn đang có

Repository ở nhánh `master` chưa chứa PDF đáp án Toán 6–9. Vì vậy bản thiết kế **không tự đặt các đường dẫn chưa tồn tại**.

1. Tạo thư mục `public/answers/` trong repository (nếu chưa có).
2. Sao chép từng file PDF đáp án và đặt tên, ví dụ: `toan-6.pdf`, `toan-7.pdf`, `toan-8.pdf`, `toan-9.pdf`.
3. Sửa `app/data/answerBooks.ts`: thay `fileUrl: null` ở đúng lớp thành `fileUrl: '/answers/toan-6.pdf'`, và tương tự cho các lớp khác.
4. Mở `/tai-lieu-on-luyen`, chọn đáp án theo lớp, thử mở file PDF. Đồng thời kiểm tra các nút xem đáp án trong `/sach`.

**Lưu ý:** Chỉ bật liên kết khi file thực sự tồn tại và đã có quyền đăng tải. Các câu trả lời trong PDF được giữ nguyên; bộ mã này chỉ thay đổi cách người học tìm và đọc tài liệu.

## Cài đặt, kiểm thử

Cập nhật các file bên trên vào đúng vị trí trong dự án hiện có. Sau đó chạy:

```bash
npm ci
npm run lint
npm run build
npm run dev
```

Kiểm tra màn hình desktop và di động tại `/sach`, `/tai-lieu-on-luyen` và `/tai-lieu-on-luyen/dap-an-toan-6` (tương tự lớp 7, 8, 9).

## Thiết kế

Sử dụng nhận diện chính: navy `#283878`, đỏ `#E82020`, trắng và nền trung tính. Giữ MUI và Next.js đang có; không thêm thư viện. Nội dung viết ngắn, rõ, tránh khẩu hiệu hoặc lời quảng bá quá mức. Hình bìa trong thẻ là **minh họa bằng CSS**, không phải ảnh bìa sách xuất bản thực tế.

## Trạng thái

- Đã có: mã nguồn thay thế cho sáu tệp kể trên và bản xem trước HTML.
- Chưa có: các PDF đáp án Toán 6–9 trong repository đang truy cập.
- Chưa kiểm chứng được: `npm run lint` và `npm run build` trên toàn bộ dự án (môi trường này không có dependencies và không tải được GitHub).
- Chưa triển khai: bản này chưa được đẩy lên GitHub hoặc website production.