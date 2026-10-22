# Thiết kế lại trang Sách – Tài liệu – Đáp án (V2)

Bản cập nhật tạo từ `master` tại commit `121d82c46ea3c336894ba8651ca4ceafbc900d72`.

## Thay đổi giao diện

- `/sach`: hero có đủ bốn bìa sách Toán 6–9 thật; danh mục dạng thẻ lớn, giá và nút đặt sách/xem đáp án rõ ràng; tối ưu responsive.
- `/tai-lieu-on-luyen`: chia riêng tài liệu ôn thi lớp 10 và tra cứu đáp án sách Toán 6–9, không dùng minh họa bìa giả; có liên kết PDF trực tiếp.
- `/tai-lieu-on-luyen/[slug]`: trang xem đáp án có thanh thao tác mở/tải PDF, bản đọc PDF trên desktop và khu vực hướng dẫn gọn gàng.
- `BookCover`: dùng ảnh thật với `object-fit: contain`, không cắt bìa; với dữ liệu chưa có bìa, hiện khung trung tính.
- `studyMaterials`: gỡ bìa Toán 9 ra khỏi mục tài liệu ôn thi lớp 10 vì ảnh ấy thuộc một cuốn sách khác. Hai tài liệu Ngữ văn/Tiếng Anh cũng chưa có ảnh bìa; hệ thống không tự suy đoán.

## Dữ liệu được bảo toàn

- Giữ nguyên `app/data/answerBooks.ts`, bao gồm cả bốn liên kết PDF ở `public/answers/` và bốn ảnh thật ở `public/covers/`.
- Không sửa, ghi đè, đổi tên hoặc xóa các PDF hay JPG nguồn.
- Giữ nguyên thông tin đặt sách qua Zalo và liên kết chính sách đang dùng trong repository.

## Chạy thử

```bash
npm ci
npm run lint
npm run build
npm run dev
```

Kiểm tra các trang `/sach`, `/tai-lieu-on-luyen`, và `/tai-lieu-on-luyen/dap-an-toan-6` tới `dap-an-toan-9` trên desktop và mobile. Thử nút xem PDF ở mỗi lớp, nhất là lớp 7 có tên file `Dan-An` trong repository. Các đường dẫn trực tiếp đến PDF đã được bảo toàn.

> Kiểm tra cú pháp TypeScript/JSX đã chạy. Build/lint ứng dụng hoàn chỉnh và kiểm thử giao diện trong trình duyệt cần thực hiện trong môi trường đã cài dependencies.