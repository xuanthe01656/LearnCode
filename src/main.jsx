import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { Brain, CheckCircle2, RotateCcw, Trophy } from "lucide-react";
import "./index.css";

const QUESTIONS = [
  { id: 1, level: "Lớp 6-7", type: "Tuần tự", question: "Robot đang ở ô số 0. Robot đi tiến 4 bước, lùi 2 bước, rồi tiến thêm 5 bước. Robot đang ở ô số mấy?", options: ["5", "6", "7", "9"], answer: "7", explain: "0 + 4 - 2 + 5 = 7." },
  { id: 2, level: "Lớp 6-7", type: "Quy luật", question: "Dãy số: 2, 4, 6, 8, ?. Số tiếp theo là gì?", options: ["9", "10", "12", "16"], answer: "10", explain: "Mỗi lần tăng thêm 2." },
  { id: 3, level: "Lớp 6-7", type: "Quy luật", question: "Dãy số: 3, 6, 12, 24, ?. Số tiếp theo là gì?", options: ["30", "36", "48", "72"], answer: "48", explain: "Mỗi số gấp đôi số trước." },
  { id: 4, level: "Lớp 6-7", type: "Điều kiện", question: "Nếu trời mưa thì An mang áo mưa. Hôm nay trời mưa. An sẽ làm gì?", options: ["Mang áo mưa", "Không mang áo mưa", "Mang kính", "Không đủ dữ kiện"], answer: "Mang áo mưa", explain: "Điều kiện trời mưa đúng nên hành động mang áo mưa xảy ra." },
  { id: 5, level: "Lớp 6-7", type: "Phân loại", question: "Trong các số sau, số nào là số chẵn?", options: ["11", "15", "18", "21"], answer: "18", explain: "18 chia hết cho 2." },
  { id: 6, level: "Lớp 6-7", type: "Tuần tự", question: "Một công thức cần làm theo thứ tự: lấy cốc, đổ nước, cho đường, khuấy. Bước nào cần làm ngay sau khi đổ nước?", options: ["Lấy cốc", "Cho đường", "Khuấy", "Uống"], answer: "Cho đường", explain: "Thứ tự đã cho là đổ nước rồi cho đường." },
  { id: 7, level: "Lớp 6-7", type: "Logic", question: "Tất cả mèo đều có đuôi. Mimi là mèo. Kết luận nào đúng?", options: ["Mimi có đuôi", "Mimi là chó", "Mimi không có đuôi", "Không biết"], answer: "Mimi có đuôi", explain: "Mimi thuộc nhóm mèo nên có đặc điểm của nhóm mèo." },
  { id: 8, level: "Lớp 6-7", type: "Vòng lặp", question: "Nếu in các số từ 1 đến 5, kết quả nào đúng?", options: ["1 2 3 4 5", "0 1 2 3 4", "1 3 5", "5 4 3 2 1"], answer: "1 2 3 4 5", explain: "Dãy bắt đầu từ 1 và kết thúc ở 5." },
  { id: 9, level: "Lớp 6-7", type: "Đếm", question: "Có 3 hộp, mỗi hộp có 4 viên bi. Tổng cộng có bao nhiêu viên bi?", options: ["7", "9", "12", "16"], answer: "12", explain: "3 × 4 = 12." },
  { id: 10, level: "Lớp 6-7", type: "So sánh", question: "Nếu A lớn hơn B, B lớn hơn C, vậy kết luận nào đúng?", options: ["A lớn hơn C", "C lớn hơn A", "A bằng C", "Không thể biết"], answer: "A lớn hơn C", explain: "A > B và B > C nên A > C." },
  { id: 11, level: "Lớp 7-8", type: "Debug", question: "Một bạn muốn kiểm tra tuổi từ 15 trở lên. Điều kiện nào đúng?", options: ["age > 15", "age >= 15", "age < 15", "age == 14"], answer: "age >= 15", explain: "Từ 15 trở lên bao gồm cả 15." },
  { id: 12, level: "Lớp 7-8", type: "Quy luật", question: "Dãy số: 1, 4, 9, 16, ?. Số tiếp theo là gì?", options: ["20", "24", "25", "36"], answer: "25", explain: "Đây là các số chính phương: 1², 2², 3², 4², 5²." },
  { id: 13, level: "Lớp 7-8", type: "Điều kiện", question: "Điều kiện: Nếu điểm >= 5 thì đậu, ngược lại rớt. Bình được 4.5 điểm. Kết quả là gì?", options: ["Đậu", "Rớt", "Chưa biết", "Đậu nếu làm bài nhanh"], answer: "Rớt", explain: "4.5 nhỏ hơn 5." },
  { id: 14, level: "Lớp 7-8", type: "Vòng lặp", question: "Một vòng lặp chạy 4 lần, mỗi lần cộng thêm 3 điểm. Ban đầu là 0 điểm. Kết quả cuối cùng là gì?", options: ["7", "9", "12", "15"], answer: "12", explain: "4 lần × 3 điểm = 12." },
  { id: 15, level: "Lớp 7-8", type: "Tư duy biến", question: "x = 5. Sau đó x = x + 2. Giá trị mới của x là gì?", options: ["2", "5", "7", "10"], answer: "7", explain: "Lấy giá trị cũ 5 cộng thêm 2." },
  { id: 16, level: "Lớp 7-8", type: "Logic", question: "Nếu hôm nay là thứ Hai, sau 3 ngày nữa là thứ mấy?", options: ["Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu"], answer: "Thứ Năm", explain: "Thứ Ba là 1 ngày, thứ Tư là 2 ngày, thứ Năm là 3 ngày." },
  { id: 17, level: "Lớp 7-8", type: "Danh sách", question: "Danh sách có 5 phần tử. Nếu thêm 2 phần tử rồi xóa 1 phần tử, còn bao nhiêu phần tử?", options: ["5", "6", "7", "8"], answer: "6", explain: "5 + 2 - 1 = 6." },
  { id: 18, level: "Lớp 7-8", type: "Tách vấn đề", question: "Muốn làm game đoán số, bước nào nên làm trước?", options: ["Tạo số bí mật", "Vẽ nhân vật 3D", "Đăng lên App Store", "Tạo quảng cáo"], answer: "Tạo số bí mật", explain: "Game đoán số cần có số bí mật để người chơi đoán." },
  { id: 19, level: "Lớp 7-8", type: "Debug", question: "Bạn muốn in 'Xin chào' 3 lần. Cách nào hợp lý nhất?", options: ["Viết print 100 lần", "Dùng vòng lặp 3 lần", "Xóa chương trình", "Chỉ in 1 lần"], answer: "Dùng vòng lặp 3 lần", explain: "Vòng lặp dùng để lặp lại hành động." },
  { id: 20, level: "Lớp 7-8", type: "Điều kiện kép", question: "Một học sinh được thưởng nếu điểm >= 8 và không nghỉ buổi nào. Nam được 9 điểm nhưng nghỉ 1 buổi. Nam có được thưởng không?", options: ["Có", "Không", "Có nếu xin phép", "Không đủ dữ kiện"], answer: "Không", explain: "Cần thỏa cả hai điều kiện, nhưng Nam nghỉ 1 buổi." },
  { id: 21, level: "Lớp 8-9", type: "Logic", question: "Nếu A đúng, B sai. Biểu thức 'A và B' có kết quả gì?", options: ["Đúng", "Sai", "Vừa đúng vừa sai", "Không xác định"], answer: "Sai", explain: "Toán tử 'và' chỉ đúng khi cả hai cùng đúng." },
  { id: 22, level: "Lớp 8-9", type: "Logic", question: "Nếu A đúng, B sai. Biểu thức 'A hoặc B' có kết quả gì?", options: ["Đúng", "Sai", "Không xác định", "Lỗi"], answer: "Đúng", explain: "Toán tử 'hoặc' đúng khi ít nhất một điều kiện đúng." },
  { id: 23, level: "Lớp 8-9", type: "Tư duy code", question: "x = 10, y = 3. Kết quả của x % y là gì?", options: ["1", "2", "3", "3.33"], answer: "1", explain: "10 chia 3 dư 1." },
  { id: 24, level: "Lớp 8-9", type: "Vòng lặp", question: "Một vòng lặp chạy từ i = 1 đến i = 4, mỗi lần in i. Kết quả là gì?", options: ["1 2 3 4", "0 1 2 3", "1 2 3", "4 3 2 1"], answer: "1 2 3 4", explain: "Bắt đầu 1, kết thúc 4." },
  { id: 25, level: "Lớp 8-9", type: "Debug", question: "Trong Python, lỗi thường gặp khi nhập số từ bàn phím là gì?", options: ["input nhận vào chuỗi", "print không hoạt động", "if không dùng được", "Python không có số"], answer: "input nhận vào chuỗi", explain: "input() trả về chuỗi, muốn tính toán số cần ép kiểu int hoặc float." },
  { id: 26, level: "Lớp 8-9", type: "Thuật toán", question: "Muốn tìm số lớn nhất trong danh sách, cách tư duy nào hợp lý?", options: ["So sánh lần lượt từng số", "Chọn số đầu tiên luôn", "Xóa danh sách", "Sắp xếp bằng tay trên giấy mãi mãi"], answer: "So sánh lần lượt từng số", explain: "Ta giữ số lớn nhất tạm thời và cập nhật khi gặp số lớn hơn." },
  { id: 27, level: "Lớp 8-9", type: "Danh sách", question: "Danh sách [2, 4, 6, 8]. Tổng các phần tử là gì?", options: ["10", "16", "20", "24"], answer: "20", explain: "2 + 4 + 6 + 8 = 20." },
  { id: 28, level: "Lớp 8-9", type: "Điều kiện", question: "Một mật khẩu hợp lệ nếu dài từ 8 ký tự trở lên. Chuỗi 'abc123' có hợp lệ không?", options: ["Có", "Không", "Có nếu có số", "Không đủ dữ kiện"], answer: "Không", explain: "'abc123' có 6 ký tự, nhỏ hơn 8." },
  { id: 29, level: "Lớp 8-9", type: "Mô hình hóa", question: "Để lưu thông tin một học sinh gồm tên, tuổi, lớp, kiểu dữ liệu nào phù hợp nhất?", options: ["Một số", "Một chuỗi duy nhất", "Dictionary/Object", "Một giá trị True/False"], answer: "Dictionary/Object", explain: "Dictionary/Object lưu được nhiều thuộc tính có tên rõ ràng." },
  { id: 30, level: "Lớp 8-9", type: "Debug", question: "Nếu chương trình chạy sai kết quả, việc đầu tiên nên làm là gì?", options: ["Kiểm tra từng bước và dữ liệu đầu vào", "Xóa hết code", "Đổi máy tính", "Bỏ học lập trình"], answer: "Kiểm tra từng bước và dữ liệu đầu vào", explain: "Debug cần kiểm tra luồng xử lý và giá trị biến." },
  { id: 31, level: "Lớp 9-10", type: "Thuật toán", question: "Tìm kiếm tuyến tính nghĩa là gì?", options: ["Kiểm tra từng phần tử cho đến khi tìm thấy", "Chia đôi danh sách liên tục", "Xóa từng phần tử", "Sắp xếp ngẫu nhiên"], answer: "Kiểm tra từng phần tử cho đến khi tìm thấy", explain: "Linear search duyệt lần lượt từ đầu đến cuối." },
  { id: 32, level: "Lớp 9-10", type: "Thuật toán", question: "Điều kiện quan trọng để dùng tìm kiếm nhị phân là gì?", options: ["Danh sách đã được sắp xếp", "Danh sách có màu đẹp", "Danh sách phải có 10 phần tử", "Danh sách toàn số âm"], answer: "Danh sách đã được sắp xếp", explain: "Binary search cần dữ liệu có thứ tự để chia đôi đúng hướng." },
  { id: 33, level: "Lớp 9-10", type: "Logic", question: "not(True) có kết quả là gì?", options: ["True", "False", "0.5", "Không xác định"], answer: "False", explain: "not đảo ngược giá trị logic." },
  { id: 34, level: "Lớp 9-10", type: "Hàm", question: "Lợi ích chính của hàm trong lập trình là gì?", options: ["Tái sử dụng code và chia nhỏ vấn đề", "Làm máy tính nhanh hơn gấp 100 lần", "Thay thế hoàn toàn biến", "Không cần debug"], answer: "Tái sử dụng code và chia nhỏ vấn đề", explain: "Hàm giúp code gọn, dễ đọc và dùng lại." },
  { id: 35, level: "Lớp 9-10", type: "Dữ liệu", question: "JSON thường dùng để làm gì?", options: ["Lưu/truyền dữ liệu có cấu trúc", "Vẽ hình 3D", "Chạy điện thoại", "Tăng âm lượng loa"], answer: "Lưu/truyền dữ liệu có cấu trúc", explain: "JSON phổ biến khi lưu cấu hình hoặc trao đổi dữ liệu giữa app và server." },
  { id: 36, level: "Lớp 9-10", type: "Debug", question: "Một vòng lặp while không bao giờ dừng thường do nguyên nhân nào?", options: ["Điều kiện dừng không bao giờ sai", "Máy tính hết pin", "Dùng quá nhiều print", "Tên biến quá ngắn"], answer: "Điều kiện dừng không bao giờ sai", explain: "Nếu điều kiện luôn đúng, vòng lặp sẽ chạy mãi." },
  { id: 37, level: "Lớp 9-10", type: "Tối ưu", question: "Nếu có 1000 học sinh, cách nào tìm học sinh tên 'An' tốt hơn?", options: ["Dùng vòng lặp/tìm kiếm", "Nhìn từng dòng bằng mắt mãi", "Xóa 999 học sinh", "Đổi tên tất cả thành An"], answer: "Dùng vòng lặp/tìm kiếm", explain: "Máy tính phù hợp xử lý lặp lại trên dữ liệu lớn." },
  { id: 38, level: "Lớp 9-10", type: "Tư duy hệ thống", question: "Một app đặt hàng cần phần nào sau đây?", options: ["Sản phẩm, giỏ hàng, thông tin khách, đơn hàng", "Chỉ cần logo", "Chỉ cần màu nền", "Chỉ cần nút thoát"], answer: "Sản phẩm, giỏ hàng, thông tin khách, đơn hàng", explain: "App đặt hàng cần đủ dữ liệu và luồng xử lý đơn." },
  { id: 39, level: "Lớp 9-10", type: "Điều kiện", question: "Khách mua 5 ly được giảm 5k. Khách mua 4 ly thì sao?", options: ["Không giảm", "Giảm 5k", "Giảm 10k", "Miễn phí toàn bộ"], answer: "Không giảm", explain: "Điều kiện là mua 5 ly, 4 ly chưa đạt." },
  { id: 40, level: "Lớp 9-10", type: "Tư duy biến", question: "a = 3, b = 4. Sau đó a = b. Giá trị của a là gì?", options: ["3", "4", "7", "Không đổi"], answer: "4", explain: "a nhận giá trị hiện tại của b." },
  { id: 41, level: "Lớp 10-12", type: "Thuật toán", question: "Độ phức tạp O(n) thường nghĩa là gì?", options: ["Thời gian tăng theo số lượng dữ liệu", "Luôn chạy trong 1 giây", "Không cần dữ liệu", "Chỉ chạy với số chẵn"], answer: "Thời gian tăng theo số lượng dữ liệu", explain: "O(n) tăng tuyến tính theo kích thước đầu vào." },
  { id: 42, level: "Lớp 10-12", type: "Cấu trúc dữ liệu", question: "Stack hoạt động theo nguyên tắc nào?", options: ["Vào sau ra trước", "Vào trước ra trước", "Ngẫu nhiên", "Theo bảng chữ cái"], answer: "Vào sau ra trước", explain: "Stack là LIFO: Last In, First Out." },
  { id: 43, level: "Lớp 10-12", type: "Cấu trúc dữ liệu", question: "Queue hoạt động theo nguyên tắc nào?", options: ["Vào trước ra trước", "Vào sau ra trước", "Ngẫu nhiên", "Theo số lớn nhất"], answer: "Vào trước ra trước", explain: "Queue là FIFO: First In, First Out." },
  { id: 44, level: "Lớp 10-12", type: "Hàm", question: "Một hàm có return dùng để làm gì?", options: ["Trả kết quả về nơi gọi hàm", "In ra màn hình bắt buộc", "Xóa biến", "Dừng máy tính"], answer: "Trả kết quả về nơi gọi hàm", explain: "return đưa giá trị ra ngoài để dùng tiếp." },
  { id: 45, level: "Lớp 10-12", type: "Debug", question: "Lỗi 'index out of range' thường xảy ra khi nào?", options: ["Truy cập vị trí không tồn tại trong danh sách", "Sai mật khẩu máy tính", "Thiếu internet", "Dùng màu sai"], answer: "Truy cập vị trí không tồn tại trong danh sách", explain: "Ví dụ list có 3 phần tử nhưng truy cập phần tử thứ 10." },
  { id: 46, level: "Lớp 10-12", type: "Logic", question: "Điều kiện nào kiểm tra số x nằm trong khoảng từ 1 đến 10, bao gồm cả 1 và 10?", options: ["x >= 1 and x <= 10", "x > 1 and x < 10", "x == 1 and x == 10", "x < 1 or x > 10"], answer: "x >= 1 and x <= 10", explain: "Bao gồm biên nên dùng >= và <=." },
  { id: 47, level: "Lớp 10-12", type: "Dữ liệu", question: "Khi dữ liệu cần lưu lâu dài sau khi tắt chương trình, nên lưu ở đâu?", options: ["File hoặc database", "Chỉ trong biến", "Trong màn hình", "Trong RAM tạm thời"], answer: "File hoặc database", explain: "Biến/RAM mất khi chương trình tắt, file/database lưu lâu dài hơn." },
  { id: 48, level: "Lớp 10-12", type: "Thiết kế", question: "Khi bài toán quá lớn, cách làm tốt nhất là gì?", options: ["Chia thành nhiều phần nhỏ", "Làm tất cả cùng lúc", "Không cần kế hoạch", "Chỉ đổi tên file"], answer: "Chia thành nhiều phần nhỏ", explain: "Chia nhỏ giúp dễ hiểu, dễ làm và dễ kiểm tra." },
  { id: 49, level: "Lớp 10-12", type: "Tối ưu", question: "Vì sao không nên copy một đoạn code giống nhau ở quá nhiều nơi?", options: ["Khó sửa và dễ lỗi", "Máy tính không cho phép", "Code sẽ biến mất", "Không chạy được Python"], answer: "Khó sửa và dễ lỗi", explain: "Khi cần sửa, phải sửa nhiều nơi nên dễ bỏ sót." },
  { id: 50, level: "Lớp 10-12", type: "Tư duy sản phẩm", question: "Sau khi làm xong một chương trình nhỏ, bước nào nên làm tiếp?", options: ["Test với nhiều trường hợp", "Xóa chương trình", "Không chạy thử", "Đổi tên máy tính"], answer: "Test với nhiều trường hợp", explain: "Test giúp phát hiện lỗi và xác nhận chương trình hoạt động đúng." }
];

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}
function getGradeNumber(gradeText) {
  return Number(gradeText.replace("Lớp ", ""));
}

function getQuestionMaxLevel(levelText) {
  const numbers = levelText.match(/\d+/g).map(Number);
  return Math.max(...numbers);
}
function getResult(score) {
  if (score >= 8) return { title: "Rất phù hợp để học Python ngay", desc: "Tư duy logic, đọc đề và suy luận khá tốt. Có thể bắt đầu Python cơ bản kết hợp mini project.", badge: "Nhóm A" };
  if (score >= 5) return { title: "Có tiềm năng, nên học theo hướng chậm và nhiều ví dụ", desc: "Nên bổ sung thêm tư duy điều kiện, vòng lặp và chia nhỏ vấn đề trong 2–4 tuần.", badge: "Nhóm B" };
  return { title: "Nên làm quen tư duy lập trình trước", desc: "Nên bắt đầu bằng Scratch, trò chơi logic, thuật toán đời thường rồi mới chuyển sang Python.", badge: "Nhóm C" };
}

function App() {
  const [studentName, setStudentName] = useState("");
  const [grade, setGrade] = useState("Lớp 8");
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState({});
  const [testId, setTestId] = useState(1);
  const [timeLeft, setTimeLeft] = useState(15 * 60);
  const [formError, setFormError] = useState("");

  const testQuestions = useMemo(() => {
    const selectedGrade = getGradeNumber(grade);
  
    let baseQuestions;
    let challengeQuestions;
  
    if (selectedGrade === 12) {
      baseQuestions = QUESTIONS.filter(
        (q) => getQuestionMaxLevel(q.level) >= 10
      );
  
      challengeQuestions = QUESTIONS.filter(
        (q) => getQuestionMaxLevel(q.level) >= 10
      );
    } else if (selectedGrade >= 10) {
      baseQuestions = QUESTIONS.filter(
        (q) => getQuestionMaxLevel(q.level) >= 8
      );
  
      challengeQuestions = QUESTIONS.filter(
        (q) => getQuestionMaxLevel(q.level) > selectedGrade
      );
    } else {
      baseQuestions = QUESTIONS.filter(
        (q) => getQuestionMaxLevel(q.level) <= selectedGrade
      );
  
      challengeQuestions = QUESTIONS.filter(
        (q) => getQuestionMaxLevel(q.level) > selectedGrade
      );
    }
  
    const selectedBase = shuffle(baseQuestions).slice(0, 8);
    const selectedBaseIds = selectedBase.map((q) => q.id);
    const uniqueChallengeQuestions = challengeQuestions.filter(
      (q) => !selectedBaseIds.includes(q.id)
    );
    const selectedChallenge = shuffle(uniqueChallengeQuestions).slice(0, 2);
    return [
      ...selectedBase,
      ...selectedChallenge,
    ];
  }, [testId, grade]);
  const answeredCount = Object.keys(answers).length;
  const score = testQuestions.reduce((total, q) => total + (answers[q.id] === q.answer ? 1 : 0), 0);
  const result = getResult(score);
  const handleStart = () => {
    if (!studentName.trim()) {
      setFormError("Vui lòng nhập tên học sinh.");
      return;
    }
  
    setFormError("");
    setAnswers({});
    setSubmitted(false);
    setTimeLeft(15 * 60);
    setTestId((v) => v + 1);
    setStarted(true);
  };
  useEffect(() => {
    if (!started || submitted) return;
  
    if (timeLeft <= 0) {
      setSubmitted(true);
      return;
    }
  
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
  
    return () => clearInterval(timer);
  }, [started, submitted, timeLeft]);
  const restart = () => {
    setAnswers({});
    setSubmitted(false);
    setStarted(false);
    setTimeLeft(15 * 60);
    setFormError("");
    setTestId((v) => v + 1);
  };
  const handlePrintResult = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="mb-6 rounded-3xl bg-gradient-to-br from-indigo-600 to-sky-500 p-6 text-white shadow-lg">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm">
                <Brain size={16} /> Test tư duy lập trình
              </div>
              <h1 className="text-3xl font-bold md:text-4xl">Kiểm tra tư duy học Python</h1>
              <p className="mt-2 max-w-2xl text-white/90">Ngân hàng 50 câu hỏi cho học sinh lớp 6–12. Mỗi lượt random 10 câu để đánh giá logic, điều kiện, vòng lặp, debug và chia nhỏ vấn đề.</p>
            </div>
            <div className="rounded-2xl bg-white/15 p-4 text-center backdrop-blur">
              <div className="text-4xl font-bold">10</div>
              <div className="text-sm text-white/80">câu mỗi lượt</div>
            </div>
          </div>
        </div>
        {formError && (
          <div className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {formError}
          </div>
        )}
        {!started ? (
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-bold">Thông tin học sinh</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Tên học sinh</span>
                <input value={studentName} onChange={(e) => setStudentName(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" placeholder="Ví dụ: Nguyễn Văn An" />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Khối lớp</span>
                <select value={grade} onChange={(e) => setGrade(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100">
                  {Array.from({ length: 7 }, (_, i) => `Lớp ${i + 6}`).map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>
            </div>
            <button onClick={handleStart} className="mt-6 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow hover:bg-indigo-700">Bắt đầu làm bài</button>
          </div>
        ) : (
          <>
            <div className="mb-4 flex flex-col gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="font-semibold">{studentName || "Học sinh"} · {grade}</div>
                <div className="text-sm text-slate-500">Đã trả lời {answeredCount}/10 câu</div>
                <div className={`text-sm font-semibold ${timeLeft <= 60 ? "text-red-600" : "text-indigo-600"}`}>
                  Thời gian còn lại: {formatTime(timeLeft)}
                </div>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-slate-200 md:w-72">
                <div className="h-full rounded-full bg-indigo-600 transition-all" style={{ width: `${answeredCount * 10}%` }} />
              </div>
            </div>

            <div className="space-y-4">
              {testQuestions.map((q, index) => {
                const isCorrect = answers[q.id] === q.answer;
                return (
                  <div key={q.id} className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold">Câu {index + 1}</span>
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">{q.level}</span>
                      <span className="rounded-full bg-amber-50 px-3 py-1 text-sm text-amber-700">{q.type}</span>
                    </div>
                    <h3 className="text-lg font-bold">{q.question}</h3>
                    <div className="mt-4 grid gap-3 md:grid-cols-2">
                      {q.options.map((option) => {
                        const selected = answers[q.id] === option;
                        const showCorrect = submitted && option === q.answer;
                        const showWrong = submitted && selected && option !== q.answer;
                        return (
                          <button key={option} disabled={submitted} onClick={() => setAnswers({ ...answers, [q.id]: option })} className={`rounded-2xl border px-4 py-3 text-left transition ${selected ? "border-indigo-500 bg-indigo-50" : "border-slate-200 hover:border-indigo-300 hover:bg-slate-50"} ${showCorrect ? "border-green-500 bg-green-50" : ""} ${showWrong ? "border-red-500 bg-red-50" : ""}`}>
                            {option}
                          </button>
                        );
                      })}
                    </div>
                    {submitted && (
                      <div className={`mt-4 rounded-2xl p-4 text-sm ${isCorrect ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
                        <b>{isCorrect ? "Đúng." : "Sai."}</b> {q.explain}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {!submitted ? (
              <button disabled={answeredCount < 10} onClick={() => setSubmitted(true)} className="mt-6 w-full rounded-2xl bg-indigo-600 px-6 py-4 font-bold text-white shadow hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-300">Nộp bài và xem kết quả</button>
            ) : (
              <div className="mt-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="print-card">
                    <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-700">
                      <Trophy size={16} /> {result.badge}
                    </div>

                    <h2 className="text-2xl font-bold">Phiếu kết quả test tư duy lập trình</h2>

                    <div className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
                      <div><b>Học sinh:</b> {studentName}</div>
                      <div><b>Khối lớp:</b> {grade}</div>
                      <div><b>Số câu:</b> 10</div>
                      <div><b>Điểm:</b> {score}/10</div>
                      <div><b>Thời gian làm bài:</b> {formatTime(15 * 60 - timeLeft)}</div>
                      <div><b>Ngày in:</b> {new Date().toLocaleDateString("vi-VN")}</div>
                    </div>

                    <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                      <h3 className="font-bold">{result.title}</h3>
                      <p className="mt-2 text-slate-600">{result.desc}</p>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-6 text-center text-sm">
                      <div className="border-t border-slate-300 pt-2">Phụ huynh</div>
                      <div className="border-t border-slate-300 pt-2">Giáo viên</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={restart} className="no-print inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-semibold hover:bg-slate-50"><RotateCcw size={18} /> Làm lượt mới</button>
                    <button onClick={handlePrintResult} className="no-print inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700"> In kết quả</button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
