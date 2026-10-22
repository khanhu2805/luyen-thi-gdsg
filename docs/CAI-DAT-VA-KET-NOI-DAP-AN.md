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

Sử dụng nhận diện chính: navy `#283878`, đỏ `#E82020`, trắng và nền trung tính. Giữ MUI và Next.js đang có; không thêm thư viện. Nội dung viết ngắn, rõ, tránh khẩu hiệu hoặc lời quảng bá quá mức. Ảnh bìa trong thẻ sử dụng `BookCover`. Khi chưa có ảnh, giao diện hiện thông báo trung tính; không giả lập bìa đã xuất bản.

## Trạng thái

- Đã có: mã nguồn thay thế cho sáu tệp kể trên và bản xem trước HTML.
- Chưa có: các PDF đáp án Toán 6–9 trong repository đang truy cập.
- Chưa kiểm chứng được: `npm run lint` và `npm run build` trên toàn bộ dự án (môi trường này không có dependencies và không tải được GitHub).
- Bản thiết kế được đưa lên branch `feat/redesign-thu-vien-dap-an` để review; chưa merge vào `master` và chưa triển khai website production.
## Chèn ảnh bìa sách

**Hỗ trợ 7 bìa:** sách 36 đề Toán 6, 7, 8, 9; ba tài liệu ôn thi lớp 10 (Toán, Ngữ văn, Tiếng Anh). Các trang danh mục và trang đáp án dùng chung bìa sách Toán.

1. Thêm ảnh thật vào `public/covers/` (JPG, PNG, WebP; khuyến nghị ảnh đứng khoảng 3:4, tối thiểu 600 × 800 pixel). Tên file không dấu, không khoảng trắng.
2. Đối với sách Toán 6–9, sửa đúng mục trong `app/data/answerBooks.ts`, ví dụ `coverUrl: '/covers/toan-6.jpg'`.
3. Đối với ba tài liệu ôn thi lớp 10, sửa `app/data/studyMaterials.ts`, ví dụ `coverUrl: '/covers/on-thi-toan-10.webp'`.
4. Commit ảnh và thay đổi mã trên cùng một branch; mở `/sach` và `/tai-lieu-on-luyen` để kiểm tra. Tên file có phân biệt chữ hoa/chữ thường khi triển khai.

`coverUrl: null` sẽ hiển thị khung dự phòng cho tới khi được gán vào một tệp ảnh thật. Ảnh luôn dùng `object-fit: contain` để giữ nguyên toàn bộ bìa. Trường `coverUrl` độc lập với `fileUrl` đáp án PDF; việc đổi bìa không làm thay đổi tệp đáp án.
