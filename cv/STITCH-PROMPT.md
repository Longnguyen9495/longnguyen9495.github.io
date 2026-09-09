# Prompt thiết kế CV Nguyễn Thành Long trên Google Stitch

Dán toàn bộ nội dung bên dưới vào Google Stitch và chọn loại dự án **Web**.

---

Thiết kế lại một trang CV/portfolio cá nhân dạng one-page responsive cho **Nguyễn Thành Long**, ứng tuyển vị trí **Senior Full-stack PHP Developer / Laravel Developer**. Đối tượng xem chính là HR, Engineering Manager và CTO, thường chỉ có 30-60 giây để quét CV. Giao diện phải giúp họ nhận ra ngay: ứng viên có hơn 8 năm kinh nghiệm, mạnh PHP/Laravel, từng làm hệ thống ERP/CRM/bán hàng, có năng lực full-stack và thành thạo ứng dụng các model AI hiện đại trong toàn bộ vòng đời phát triển phần mềm.

## Hướng sáng tạo

Tạo cảm giác như một **developer portfolio cao cấp kết hợp editorial technology**, tự tin, rõ ràng và có cá tính Việt Nam. Bố cục bất đối xứng nhưng dễ đọc, nhiều khoảng thở, không giống mẫu CV văn phòng truyền thống và không giống landing page SaaS phổ thông.

Thông số định hướng:
- Design variance: 8/10, bất đối xứng có kiểm soát.
- Motion intensity: 5/10, chuyển động nhẹ và có mục đích.
- Visual density: 5/10, đủ thông tin nhưng quét nhanh.
- Toàn trang sử dụng một hệ màu dark charcoal nhất quán.
- Không thiết kế theo kiểu dashboard.

## Bảng màu

Chỉ dùng một màu nhấn trên toàn trang:
- Deep Charcoal `#11120F`: nền chính.
- Elevated Charcoal `#191A16`: bề mặt nội dung.
- Soft Graphite `#22231E`: bề mặt phụ.
- Warm White `#EEEEE8`: chữ chính.
- Muted Sage Gray `#A9ABA1`: chữ phụ và metadata.
- Structural Line `#383A32`: đường phân tách mảnh.
- Signal Orange `#E76A41`: màu nhấn duy nhất cho CTA, tiêu đề quan trọng, focus và chi tiết tương tác.

Không dùng màu tím, xanh neon, gradient AI, outer glow hoặc nền đen tuyệt đối `#000000`.

## Typography

- Display và heading: **Satoshi** hoặc **Cabinet Grotesk**, font sans-serif có cá tính, tracking âm nhẹ, weight 700-850.
- Body: **Geist**, line-height thoáng, chiều rộng đoạn văn tối đa 65 ký tự.
- Metadata, thời gian, công nghệ: **JetBrains Mono**.
- H1 responsive bằng clamp, tối đa 2 dòng trên desktop.
- Không dùng Inter, Times New Roman, Georgia hoặc serif cổ điển.
- Không dùng gradient text.

## Cấu trúc trang

### 1. Navigation tối giản

Thanh điều hướng sticky cao tối đa 68px, một dòng trên desktop.
- Bên trái: wordmark `LONG.DEV`, dấu chấm màu Signal Orange.
- Bên phải: liên kết `Kinh nghiệm`, `Kỹ năng`, `Học vấn`, nút chính `Lưu PDF`.
- Thêm nút chuyển light/dark nhỏ, rõ trạng thái.
- Trên mobile, giữ wordmark, theme toggle và nút PDF. Ẩn các anchor link phụ thay vì tạo menu phức tạp.

### 2. Hero bất đối xứng

Hero vừa trọn viewport đầu tiên, dùng grid khoảng 65/35.

Khối trái:
- Eyebrow duy nhất của hero: `FULL-STACK PHP DEVELOPER`.
- Headline lớn tối đa 2 dòng: `Nguyễn Thành Long`
- Tô Signal Orange cho từ `Long` nhưng không dùng gradient.
- Mô tả ngắn: `Tôi xây dựng hệ thống web ổn định, dễ mở rộng bằng PHP, Laravel và JavaScript, kết hợp AI hiện đại để tăng tốc toàn bộ vòng đời phát triển phần mềm.`
- Thông tin liên hệ dạng text rõ ràng: `0963 195 861`, `thanhlong09041995@gmail.com`, `Hà Nội, Việt Nam`.

Khối phải:
- Dùng ảnh chân dung thật được người dùng upload. Ảnh là một người đàn ông đứng trên núi và cầm cờ Việt Nam.
- Hiển thị ảnh lớn theo tỷ lệ gần vuông hoặc portrait, bo góc 14px, crop giữ đủ người và lá cờ.
- Không phủ badge hoặc pill lên ảnh.
- Bên dưới ảnh là thông tin `8+ năm kinh nghiệm thực chiến` và mô tả ngắn `Web application, ERP, CRM, bán hàng và quản trị nội bộ.`

Không thêm scroll indicator, avatar giả, blob gradient hoặc hình dashboard giả.

### 3. Kinh nghiệm làm việc

Tiêu đề lớn: `Kinh nghiệm tạo ra sản phẩm thật.`

Thể hiện ba công ty theo grid bất đối xứng, không dùng ba card bằng nhau:

1. **Công ty cổ phần 1Office**
   - `03/2022 - HIỆN TẠI`
   - `Lập trình viên Full-stack`
   - Phát triển hệ thống quản trị doanh nghiệp toàn diện với HRM, CRM, tài chính, kế toán, dự án và workflow.
   - Thiết kế kiến trúc và tối ưu backend PHP/Laravel, phát triển frontend với jQuery.
   - Xây dựng API nội bộ, đảm bảo dữ liệu nhất quán và hiệu suất xử lý.
   - Phân tích nghiệp vụ, thiết kế cơ sở dữ liệu, code review và tối ưu truy vấn.
   - Phối hợp UI/UX, QA, Product Owner; triển khai GitLab CI/CD, logging và cronjob.

2. **Công ty cổ phần Viễn thông DTH**
   - `04/2020 - 02/2022`
   - `Lập trình viên Full-stack`
   - Phụ trách vòng đời hệ thống bán hàng sim từ kiến trúc, backend API, frontend đến triển khai.
   - Tối ưu hiệu suất, quản lý dữ liệu và phát triển tính năng theo chiến dịch bán hàng.
   - Dự án tiêu biểu: Websim.vn và Sim.vn.

3. **Công ty cổ phần VNP Group**
   - `06/2017 - 03/2020`
   - `Frontend Developer, sau đó Full-stack và Team Lead`
   - Phát triển hệ thống quản trị nội bộ và website thương mại điện tử.
   - Công nghệ: PHP, MongoDB, Elasticsearch, Bootstrap và JavaScript.
   - Thiết kế cơ sở dữ liệu, tối ưu nghiệp vụ và hướng dẫn thành viên.
   - Dự án tiêu biểu: Trip247.net, WeMarry.vn và Vpage.

Công việc gần nhất chiếm diện tích lớn nhất. Hai công việc cũ hơn xếp lệch bên cạnh hoặc bên dưới. Dùng border mảnh và khoảng trắng thay cho shadow nặng.

### 4. Kỹ năng cốt lõi

Tạo composition 40/60:
- Khối Signal Orange lớn bên trái với tiêu đề `Năng lực cốt lõi.` và câu mô tả ngắn.
- Bên phải là bento grid 5 ô không đồng đều, đúng 5 ô và không có ô trống.
- Ô `AI-assisted Engineering` phải có diện tích lớn nhất để trở thành điểm nhấn mới nhưng không lấn át kinh nghiệm PHP/Laravel.

Nội dung:
- `Backend`: PHP, Laravel, REST API, authentication, queue, cronjob, tích hợp hệ thống.
- `Frontend`: HTML5, CSS3, JavaScript, jQuery, Bootstrap, Sass, Less, WordPress.
- `AI-assisted Engineering`: Thành thạo khai thác các model AI hiện đại và AI agents để phát triển ý tưởng, nghiên cứu phương án, xây dựng plan, phản biện và kiểm định plan, coding, refactor, code review, sinh test case, kiểm thử, debug và viết tài liệu. Biết chia nhỏ context, xây dựng prompt có ràng buộc, kiểm tra chéo đầu ra giữa yêu cầu nghiệp vụ và mã nguồn. Không phụ thuộc mù quáng vào AI; luôn review thủ công về logic, kiến trúc, bảo mật, hiệu năng và độ chính xác trước khi triển khai.
- `Data`: MySQL, MongoDB, NoSQL, Elasticsearch, Redis, Memcached.
- `Engineering`: OOP, Design Patterns, code review, tối ưu hiệu suất, Git, GitLab, CI/CD.

Ít nhất hai ô có biến thể bề mặt hoặc pattern nhẹ để tạo nhịp thị giác. Không dùng progress bar, phần trăm kỹ năng hoặc icon trang trí ngẫu nhiên.

### 5. Học vấn

Tiêu đề: `Nền tảng học vấn.`

Hai khối ngang không bằng nhau:
- Khối chính: `Đại học Kinh doanh và Công nghệ Hà Nội`, `Công nghệ Thông tin, 2014 - 2018`.
- Khối phụ: `Đào tạo chuyên sâu về lập trình hướng đối tượng, cơ sở dữ liệu, mạng máy tính và phát triển phần mềm. Đây là nền tảng cho định hướng Full-stack Developer sau này.`

### 6. Footer

Footer rất gọn với một đường phân tách:
- `Nguyễn Thành Long, Full-stack PHP Developer`
- `Hà Nội, Việt Nam`
- Không thêm version, thời tiết, status dot hoặc câu slogan giả tạo.

## Component và interaction

- Corner radius nhất quán: 14px cho card, ảnh và button; không trộn nhiều hệ bo góc.
- Button Signal Orange với chữ tương phản cao, nhấn xuống bằng translateY 1px.
- Hover card chỉ nâng 2-4px và đổi border sang Signal Orange, không outer glow.
- Entry reveal nhẹ theo cascade khi tải trang, chỉ animate opacity và transform.
- Tôn trọng `prefers-reduced-motion`.
- Focus state bàn phím rõ bằng outline Signal Orange.
- Mọi touch target tối thiểu 44px.

## Responsive

- Desktop tối đa 1280-1400px, căn giữa.
- Dưới 768px, mọi grid nhiều cột chuyển thành một cột rõ ràng.
- Hero mobile: text trước, ảnh sau; H1 không tràn và CTA luôn thấy được.
- Không có horizontal overflow ở màn hình 390px.
- Body text tối thiểu 16px trên mobile.
- Ảnh dùng object-fit cover và không làm méo khuôn mặt.

## Chế độ in PDF

Tạo thêm trạng thái print-friendly A4:
- Nền trắng, chữ đậm rõ, màu Signal Orange vẫn đủ tương phản.
- Ẩn navigation và theme toggle khi in.
- Không cắt đôi card công việc hoặc học vấn giữa hai trang.
- Giảm motion và shadow về 0.

## Tuyệt đối không làm

- Không dùng hero căn giữa.
- Không dùng ba card bằng nhau.
- Không dùng glassmorphism đại trà.
- Không dùng purple/blue neon, outer glow hoặc gradient text.
- Không dùng emoji.
- Không dùng ảnh stock hoặc avatar giả khi đã có ảnh thật.
- Không tạo dashboard giả bằng các hình chữ nhật.
- Không thêm scroll cue.
- Không đặt nhãn hoặc pill lên ảnh.
- Không dùng progress bar cho kỹ năng.
- Không dùng số liệu phần trăm giả.
- Không dùng các từ quảng cáo sáo rỗng như `Elevate`, `Seamless`, `Unleash`, `Next-Gen`.
- Không để text chồng lên ảnh hoặc chồng lên text khác.

Hãy tạo **một desktop web screen hoàn chỉnh** và **một mobile screen 390px** của cùng trang, giữ nguyên toàn bộ nội dung tiếng Việt và ưu tiên khả năng quét nhanh của nhà tuyển dụng.
