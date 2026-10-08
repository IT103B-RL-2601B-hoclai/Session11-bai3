# BÁO CÁO PHÂN TÍCH KỸ THUẬT: CÁC HÌNH THỨC KHAI BÁO HÀM TRONG JAVASCRIPT

## 1. Bảng đối chiếu kỹ thuật (Trade-off Table)

| Tiêu chuẩn | Function Declaration | Function Expression | Arrow Function (=>) |
| --- | --- | --- | --- |
| Cơ chế Hoisting | Được nâng lên đầu phạm vi, gọi trước khi định nghĩa | Không nâng giá trị, dính TDZ nếu dùng const/let | Không nâng giá trị, dính TDZ nếu dùng const/let |
| Cú pháp | Khai báo với từ khóa function | Gán hàm ẩn danh vào biến | Cú pháp mũi tên ngắn gọn, có implicit return |
| Con trỏ this | Ràng buộc động theo ngữ cảnh gọi hàm | Ràng buộc động theo ngữ cảnh gọi hàm | Kế thừa từ ngữ cảnh bao ngoài (Lexical this) |
| Đối tượng arguments | Có đối tượng arguments riêng | Có đối tượng arguments riêng | Không có arguments riêng (dùng Rest parameter) |
| Khuyến nghị dự án | Dùng cho hàm tiện ích dùng chung toàn cục | Dùng khi cần truyền hàm ẩn danh/callback | Chuẩn mặc định cho toàn bộ dự án ES6+ Smart Home |

## 2. Quy chuẩn áp dụng cho dự án Smart Home IoT

- Khuyến nghị chuẩn: Dùng Arrow Function kết hợp với hằng số `const` cho toàn bộ các module xử lý nghiệp vụ, tính toán, và các hàm CRUD.
- Lý do: Đảm bảo tên hàm không bị ghi đè, tránh lỗi gọi trước khi khai báo do Hoisting và xử lý nhất quán con trỏ `this`.