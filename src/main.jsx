import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { Brain, CheckCircle2, RotateCcw, Trophy } from "lucide-react";
import "./index.css";

const QUESTIONS = [
  { id: 1, level: "Lớp 6-7", type: "Quy luật", question: "Dãy số: 2, 4, 6, 8, ?. Số tiếp theo là gì?", options: ["9", "10", "12", "16"], answer: "10", explain: "Mỗi số tăng thêm 2." },
  { id: 2, level: "Lớp 6-7", type: "Quy luật", question: "Dãy số: 1, 3, 5, 7, ?. Số tiếp theo là gì?", options: ["8", "9", "10", "11"], answer: "9", explain: "Đây là dãy số lẻ tăng dần." },
  { id: 3, level: "Lớp 6-7", type: "Quy luật", question: "Dãy số: 3, 6, 12, 24, ?. Số tiếp theo là gì?", options: ["36", "42", "48", "60"], answer: "48", explain: "Mỗi số gấp đôi số trước." },
  { id: 4, level: "Lớp 6-7", type: "Quy luật", question: "Dãy số: 5, 10, 15, 20, ?. Số tiếp theo là gì?", options: ["22", "24", "25", "30"], answer: "25", explain: "Mỗi số tăng thêm 5." },
  { id: 5, level: "Lớp 6-7", type: "Quy luật", question: "Dãy số: 1, 4, 9, 16, ?. Số tiếp theo là gì?", options: ["20", "24", "25", "36"], answer: "25", explain: "Đây là các số chính phương: 1, 4, 9, 16, 25." },
  { id: 6, level: "Lớp 6-7", type: "Quy luật", question: "Dãy chữ cái: A, B, C, D, ?. Chữ tiếp theo là gì?", options: ["E", "F", "G", "H"], answer: "E", explain: "Các chữ cái đi theo thứ tự bảng chữ cái." },
  { id: 7, level: "Lớp 6-7", type: "Quy luật", question: "Dãy số: 10, 9, 8, 7, ?. Số tiếp theo là gì?", options: ["5", "6", "7", "8"], answer: "6", explain: "Mỗi số giảm đi 1." },
  { id: 8, level: "Lớp 6-7", type: "Quy luật", question: "Dãy số: 2, 6, 18, ?. Số tiếp theo là gì?", options: ["36", "54", "72", "90"], answer: "54", explain: "Mỗi số nhân với 3." },
  { id: 9, level: "Lớp 6-7", type: "Quy luật", question: "Dãy số: 7, 14, 21, ?. Số tiếp theo là gì?", options: ["24", "27", "28", "35"], answer: "28", explain: "Mỗi số tăng thêm 7." },
  { id: 10, level: "Lớp 6-7", type: "Quy luật", question: "Dãy số: 100, 90, 80, ?. Số tiếp theo là gì?", options: ["60", "70", "75", "85"], answer: "70", explain: "Mỗi số giảm đi 10." },

  { id: 11, level: "Lớp 7-8", type: "Logic", question: "Tất cả mèo đều có đuôi. Mimi là mèo. Kết luận nào đúng?", options: ["Mimi có đuôi", "Mimi là chó", "Mimi không có đuôi", "Không biết"], answer: "Mimi có đuôi", explain: "Mimi thuộc nhóm mèo nên có đặc điểm của mèo." },
  { id: 12, level: "Lớp 7-8", type: "Logic", question: "Tất cả học sinh lớp 8 đều học Toán. Nam học lớp 8. Nam học môn gì?", options: ["Văn", "Toán", "Anh", "Không biết"], answer: "Toán", explain: "Nam thuộc nhóm học sinh lớp 8 nên học Toán." },
  { id: 13, level: "Lớp 7-8", type: "Logic", question: "A lớn hơn B. B lớn hơn C. Kết luận nào đúng?", options: ["A lớn hơn C", "C lớn hơn A", "A bằng C", "Không thể biết"], answer: "A lớn hơn C", explain: "A > B và B > C nên A > C." },
  { id: 14, level: "Lớp 7-8", type: "Logic", question: "Lan cao hơn Mai. Mai cao hơn An. Ai cao nhất?", options: ["An", "Mai", "Lan", "Không biết"], answer: "Lan", explain: "Lan cao hơn Mai, Mai cao hơn An nên Lan cao nhất." },
  { id: 15, level: "Lớp 7-8", type: "Logic", question: "Mọi quả táo đều là trái cây. Quả táo có phải là trái cây không?", options: ["Có", "Không", "Chưa chắc", "Không đủ dữ kiện"], answer: "Có", explain: "Theo đề bài, táo thuộc nhóm trái cây." },
  { id: 16, level: "Lớp 7-8", type: "Logic", question: "Một lớp có 30 học sinh. 20 bạn thích bóng đá, 10 bạn không thích. Số liệu này có hợp lý không?", options: ["Hợp lý", "Không hợp lý", "Thiếu dữ kiện", "Không thể tính"], answer: "Hợp lý", explain: "20 + 10 = 30, đúng bằng số học sinh trong lớp." },
  { id: 17, level: "Lớp 7-8", type: "Logic", question: "Có 5 người xếp hàng. An đứng đầu hàng. Ai đứng trước An?", options: ["Người thứ 2", "Người thứ 3", "Không ai", "Tất cả mọi người"], answer: "Không ai", explain: "An đứng đầu nên không có ai đứng trước." },
  { id: 18, level: "Lớp 7-8", type: "Logic", question: "Nếu hôm nay là thứ Hai, sau 2 ngày nữa là thứ mấy?", options: ["Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu"], answer: "Thứ Tư", explain: "Sau 1 ngày là thứ Ba, sau 2 ngày là thứ Tư." },
  { id: 19, level: "Lớp 7-8", type: "Logic", question: "Tất cả xe đạp đều có bánh. Xe của Nam là xe đạp. Xe của Nam có gì?", options: ["Động cơ", "Bánh", "Cánh", "Không biết"], answer: "Bánh", explain: "Xe đạp thuộc nhóm phương tiện có bánh." },
  { id: 20, level: "Lớp 7-8", type: "Logic", question: "Nếu hộp A nặng hơn hộp B, hộp B nặng hơn hộp C, hộp nào nhẹ nhất?", options: ["Hộp A", "Hộp B", "Hộp C", "Không biết"], answer: "Hộp C", explain: "A nặng hơn B, B nặng hơn C nên C nhẹ nhất." },

  { id: 21, level: "Lớp 8-9", type: "Điều kiện", question: "Nếu trời mưa thì mang áo mưa. Hôm nay trời mưa. Cần làm gì?", options: ["Mang áo mưa", "Không mang áo mưa", "Mang kính", "Không đủ dữ kiện"], answer: "Mang áo mưa", explain: "Điều kiện trời mưa đúng nên cần mang áo mưa." },
  { id: 22, level: "Lớp 8-9", type: "Điều kiện", question: "Điểm từ 5 trở lên là đậu. An được 4 điểm. Kết quả của An là gì?", options: ["Đậu", "Rớt", "Chưa biết", "Đậu nếu làm nhanh"], answer: "Rớt", explain: "4 nhỏ hơn 5 nên chưa đạt điều kiện đậu." },
  { id: 23, level: "Lớp 8-9", type: "Điều kiện", question: "Mua từ 5 ly nước trở lên được giảm giá. Khách mua 4 ly. Khách có được giảm giá không?", options: ["Có", "Không", "Có nếu trả tiền trước", "Không đủ dữ kiện"], answer: "Không", explain: "Điều kiện là từ 5 ly trở lên, 4 ly chưa đạt." },
  { id: 24, level: "Lớp 8-9", type: "Điều kiện", question: "Một CLB nhận học sinh từ 12 tuổi trở lên. Nam 12 tuổi. Nam có được tham gia không?", options: ["Có", "Không", "Chưa biết", "Phải học lớp 12"], answer: "Có", explain: "Từ 12 tuổi trở lên bao gồm cả 12 tuổi." },
  { id: 25, level: "Lớp 8-9", type: "Điều kiện kép", question: "Học sinh được thưởng nếu điểm từ 8 trở lên và không nghỉ học. Nam được 9 điểm nhưng nghỉ 1 buổi. Nam có được thưởng không?", options: ["Có", "Không", "Có nếu xin phép", "Không đủ dữ kiện"], answer: "Không", explain: "Cần thỏa cả hai điều kiện, nhưng Nam đã nghỉ học." },
  { id: 26, level: "Lớp 8-9", type: "Điều kiện kép", question: "Được vào rạp nếu có vé và đủ 13 tuổi. Lan có vé nhưng mới 12 tuổi. Lan có được vào không?", options: ["Có", "Không", "Có vì có vé", "Không đủ dữ kiện"], answer: "Không", explain: "Lan thiếu điều kiện đủ 13 tuổi." },
  { id: 27, level: "Lớp 8-9", type: "Điều kiện", question: "Nếu pin dưới 20% thì cần sạc. Điện thoại còn 15% pin. Nên làm gì?", options: ["Sạc pin", "Tắt màn hình", "Không làm gì", "Xóa ứng dụng"], answer: "Sạc pin", explain: "15% nhỏ hơn 20% nên cần sạc." },
  { id: 28, level: "Lớp 8-9", type: "Điều kiện", question: "Nếu nhiệt độ trên 37.5°C thì bị sốt. Nhiệt độ là 36.8°C. Kết luận nào đúng?", options: ["Bị sốt", "Không bị sốt theo điều kiện này", "Chắc chắn bị bệnh", "Không đủ dữ kiện"], answer: "Không bị sốt theo điều kiện này", explain: "36.8°C không lớn hơn 37.5°C." },
  { id: 29, level: "Lớp 8-9", type: "Điều kiện nhiều nhánh", question: "Điểm từ 8 trở lên là Giỏi, từ 6.5 đến dưới 8 là Khá, từ 5 đến dưới 6.5 là Trung bình. Bình được 7 điểm. Xếp loại gì?", options: ["Giỏi", "Khá", "Trung bình", "Yếu"], answer: "Khá", explain: "7 nằm trong khoảng từ 6.5 đến dưới 8." },
  { id: 30, level: "Lớp 8-9", type: "Điều kiện loại trừ", question: "Một cửa chỉ mở nếu nhập đúng mật khẩu. Minh nhập sai mật khẩu. Điều gì xảy ra?", options: ["Cửa mở", "Cửa không mở", "Cửa tự sửa", "Không cần mật khẩu"], answer: "Cửa không mở", explain: "Nhập sai mật khẩu nên không thỏa điều kiện mở cửa." },

  { id: 31, level: "Lớp 9-10", type: "Thuật toán đời thường", question: "Muốn pha mì gói, bước nào nên làm đầu tiên?", options: ["Ăn mì", "Lấy nồi hoặc tô", "Rửa bát", "Tắt bếp"], answer: "Lấy nồi hoặc tô", explain: "Cần có dụng cụ trước khi pha mì." },
  { id: 32, level: "Lớp 9-10", type: "Thuật toán đời thường", question: "Muốn đánh răng, sau khi lấy bàn chải thì nên làm gì?", options: ["Cho kem đánh răng", "Đi ngủ", "Uống nước ngọt", "Cất bàn chải"], answer: "Cho kem đánh răng", explain: "Sau khi lấy bàn chải thường cần cho kem đánh răng." },
  { id: 33, level: "Lớp 9-10", type: "Thuật toán đời thường", question: "Muốn nấu cơm, việc nào cần làm trước?", options: ["Ăn cơm", "Vo gạo", "Rửa chén", "Dọn bàn"], answer: "Vo gạo", explain: "Cần chuẩn bị gạo trước khi nấu." },
  { id: 34, level: "Lớp 9-10", type: "Tìm kiếm", question: "Muốn tìm tên mình trong danh sách lớp 40 bạn, cách chắc chắn nhất là gì?", options: ["Xem lần lượt từng tên", "Nhắm mắt chọn", "Xóa danh sách", "Đoán ngẫu nhiên"], answer: "Xem lần lượt từng tên", explain: "Kiểm tra lần lượt giúp tìm chính xác." },
  { id: 35, level: "Lớp 9-10", type: "Tìm kiếm", question: "Có 10 quyển sách trên bàn. Muốn tìm sách Toán, cách hợp lý nhất là gì?", options: ["Kiểm tra từng quyển", "Vứt sách đi", "Đoán đại", "Không tìm nữa"], answer: "Kiểm tra từng quyển", explain: "Kiểm tra từng quyển giúp tìm đúng sách." },
  { id: 36, level: "Lớp 9-10", type: "Sắp xếp", question: "Muốn xếp học sinh theo chiều cao từ thấp đến cao, cần làm gì?", options: ["So sánh chiều cao và sắp xếp lại", "Cho đứng ngẫu nhiên", "Cho tất cả ngồi xuống", "Xóa danh sách lớp"], answer: "So sánh chiều cao và sắp xếp lại", explain: "Sắp xếp cần so sánh các giá trị." },
  { id: 37, level: "Lớp 9-10", type: "Đếm", question: "Có 5 hộp, mỗi hộp có 6 cây bút. Tổng cộng có bao nhiêu cây bút?", options: ["11", "20", "30", "36"], answer: "30", explain: "5 x 6 = 30." },
  { id: 38, level: "Lớp 9-10", type: "Quy trình", question: "Muốn gửi thư, thứ tự nào hợp lý nhất?", options: ["Viết thư → ghi địa chỉ → gửi thư", "Gửi thư → viết thư → ghi địa chỉ", "Ghi địa chỉ → gửi thư → viết thư", "Xé thư → gửi thư"], answer: "Viết thư → ghi địa chỉ → gửi thư", explain: "Cần viết nội dung và ghi địa chỉ trước khi gửi." },
  { id: 39, level: "Lớp 9-10", type: "Kiểm tra", question: "Trước khi nộp bài kiểm tra, việc nào nên làm?", options: ["Kiểm tra lại bài", "Xóa hết đáp án", "Nộp ngay không xem", "Đổi tên bài"], answer: "Kiểm tra lại bài", explain: "Kiểm tra lại giúp phát hiện lỗi." },
  { id: 40, level: "Lớp 9-10", type: "Tối ưu", question: "Cô giáo muốn gửi cùng một thông báo cho cả lớp. Cách nào hợp lý nhất?", options: ["Gửi một thông báo cho cả lớp", "Gửi từng chữ một", "Không gửi", "Chỉ gửi cho 1 bạn"], answer: "Gửi một thông báo cho cả lớp", explain: "Một thông báo chung giúp tiết kiệm thời gian." },

  { id: 41, level: "Lớp 10-12", type: "Chia nhỏ vấn đề", question: "Muốn tổ chức sinh nhật, việc nào nên làm trước?", options: ["Lên danh sách khách", "Kết thúc tiệc", "Dọn quà", "Thổi nến ngay"], answer: "Lên danh sách khách", explain: "Cần biết khách mời trước khi chuẩn bị." },
  { id: 42, level: "Lớp 10-12", type: "Chia nhỏ vấn đề", question: "Muốn làm game đoán số, bước đầu tiên hợp lý nhất là gì?", options: ["Xác định luật chơi", "Đăng lên cửa hàng", "Tạo quảng cáo", "Làm nhạc nền trước"], answer: "Xác định luật chơi", explain: "Cần biết game chơi như thế nào trước khi làm." },
  { id: 43, level: "Lớp 10-12", type: "Tư duy hệ thống", question: "Muốn làm website bán nước, phần nào cần có?", options: ["Sản phẩm", "Giỏ hàng hoặc đơn hàng", "Thông tin khách", "Tất cả các phần trên"], answer: "Tất cả các phần trên", explain: "Website bán hàng cần sản phẩm, đơn hàng và thông tin khách." },
  { id: 44, level: "Lớp 10-12", type: "Chia nhỏ vấn đề", question: "Khi gặp một bài toán lớn, cách làm tốt nhất là gì?", options: ["Chia thành nhiều phần nhỏ", "Làm tất cả cùng lúc", "Không cần kế hoạch", "Bỏ qua bài toán"], answer: "Chia thành nhiều phần nhỏ", explain: "Chia nhỏ giúp dễ hiểu và dễ xử lý." },
  { id: 45, level: "Lớp 10-12", type: "Thứ tự công việc", question: "Muốn xây nhà, việc nào thường cần làm trước?", options: ["Làm móng", "Sơn tường", "Lắp đèn", "Trang trí phòng"], answer: "Làm móng", explain: "Móng nhà là phần nền tảng cần làm trước." },
  { id: 46, level: "Lớp 10-12", type: "Lập kế hoạch", question: "Muốn đi du lịch, việc nào nên làm sớm nhất?", options: ["Chọn địa điểm và thời gian", "Mua quà lưu niệm", "Đăng ảnh sau chuyến đi", "Dọn vali sau khi về"], answer: "Chọn địa điểm và thời gian", explain: "Cần biết đi đâu và khi nào trước khi chuẩn bị." },
  { id: 47, level: "Lớp 10-12", type: "Tư duy hệ thống", question: "Muốn quản lý thư viện nhỏ, thông tin nào quan trọng nhất?", options: ["Tên sách", "Người mượn", "Ngày mượn/trả", "Tất cả các phần trên"], answer: "Tất cả các phần trên", explain: "Quản lý thư viện cần đầy đủ thông tin sách và người mượn." },
  { id: 48, level: "Lớp 10-12", type: "Tư duy sản phẩm", question: "Sau khi làm xong một sản phẩm nhỏ, bước nào nên làm tiếp?", options: ["Kiểm tra với nhiều trường hợp", "Xóa sản phẩm", "Không dùng thử", "Đổi tên máy tính"], answer: "Kiểm tra với nhiều trường hợp", explain: "Kiểm tra giúp phát hiện lỗi và cải thiện sản phẩm." },
  { id: 49, level: "Lớp 10-12", type: "Tư duy hệ thống", question: "Muốn quản lý lớp học, chức năng nào nên có?", options: ["Thêm học sinh", "Xem danh sách", "Tìm kiếm học sinh", "Tất cả các phần trên"], answer: "Tất cả các phần trên", explain: "Quản lý lớp học cần nhiều chức năng phối hợp với nhau." },
  { id: 50, level: "Lớp 10-12", type: "Tư duy giải quyết vấn đề", question: "Nếu một kế hoạch không hoạt động, việc nên làm là gì?", options: ["Xem lại nguyên nhân và điều chỉnh", "Bỏ cuộc ngay", "Đổ lỗi cho người khác", "Làm y hệt lần nữa"], answer: "Xem lại nguyên nhân và điều chỉnh", explain: "Giải quyết vấn đề cần tìm nguyên nhân và cải thiện cách làm." }
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
