export const courses = [
  {
    id: "python-foundation",
    languageId: "python",
    title: "Python Foundation",
    subtitle: "Học Python từ con số 0",
    level: "Beginner",
    status: "available",
    duration: "24 buổi",
    estimatedHours: 36,
    target: "Học sinh lớp 6-12, người mới bắt đầu, người mất gốc",
    description:
      "Khóa học nền tảng giúp người học hiểu tư duy lập trình, viết chương trình Python cơ bản, xử lý điều kiện, vòng lặp, hàm, danh sách, dữ liệu và làm mini project.",
    outcomes: [
      "Hiểu Input - Process - Output",
      "Biết dùng biến, kiểu dữ liệu và toán tử",
      "Viết được chương trình có điều kiện if/else",
      "Sử dụng vòng lặp for/while",
      "Biết dùng list, dictionary và function",
      "Biết debug lỗi cơ bản",
      "Hoàn thành các project nhỏ bằng Python"
    ],
    prerequisites: [
      "Biết sử dụng máy tính cơ bản",
      "Không yêu cầu biết lập trình trước",
      "Nên làm test tư duy đầu vào trước khi học"
    ],
    lessonIds: [
      "pyf-001",
      "pyf-002",
      "pyf-003",
      "pyf-004",
      "pyf-005",
      "pyf-006",
      "pyf-007",
      "pyf-008",
      "pyf-009",
      "pyf-010",
      "pyf-011",
      "pyf-012"
    ]
  },
  {
    id: "python-projects",
    languageId: "python",
    title: "Python Mini Projects",
    subtitle: "Luyện Python qua dự án thực tế",
    level: "Beginner - Intermediate",
    status: "planned",
    duration: "16 buổi",
    estimatedHours: 24,
    target: "Người đã học Python cơ bản",
    description:
      "Khóa học giúp người học củng cố Python bằng các dự án nhỏ như quiz, game đoán số, quản lý học sinh, xử lý file và ứng dụng console.",
    outcomes: [
      "Biết chia nhỏ project",
      "Biết tổ chức code theo hàm",
      "Biết lưu và đọc dữ liệu từ file",
      "Biết kiểm tra lỗi và cải thiện chương trình"
    ],
    prerequisites: ["Hoàn thành Python Foundation"],
    lessonIds: []
  },
  {
    id: "python-automation",
    languageId: "python",
    title: "Python Automation for Work",
    subtitle: "Tự động hóa công việc bằng Python",
    level: "Intermediate",
    status: "planned",
    duration: "20 buổi",
    estimatedHours: 30,
    target: "Người đi làm, nhân viên văn phòng, kỹ thuật viên",
    description:
      "Khóa học ứng dụng Python để xử lý file, Excel, dữ liệu lặp lại và tự động hóa các công việc văn phòng.",
    outcomes: [
      "Đọc ghi file",
      "Xử lý dữ liệu bảng",
      "Tự động hóa thao tác lặp lại",
      "Tạo báo cáo cơ bản"
    ],
    prerequisites: ["Biết Python cơ bản"],
    lessonIds: []
  },
  {
    id: "javascript-foundation",
    languageId: "javascript",
    title: "JavaScript Foundation",
    subtitle: "Nền tảng JavaScript cho web",
    level: "Beginner",
    status: "planned",
    duration: "24 buổi",
    estimatedHours: 36,
    target: "Người muốn học lập trình web",
    description:
      "Khóa học JavaScript nền tảng, chuẩn bị cho lộ trình HTML, CSS, DOM và React.",
    outcomes: [
      "Hiểu biến, điều kiện, vòng lặp trong JavaScript",
      "Biết thao tác với mảng và object",
      "Biết xử lý sự kiện cơ bản",
      "Chuẩn bị học React"
    ],
    prerequisites: ["Không yêu cầu biết lập trình trước"],
    lessonIds: []
  },
  {
    id: "react-foundation",
    languageId: "javascript",
    title: "React Foundation",
    subtitle: "Xây dựng giao diện web hiện đại",
    level: "Intermediate",
    status: "planned",
    duration: "24 buổi",
    estimatedHours: 36,
    target: "Người đã biết JavaScript cơ bản",
    description:
      "Khóa học React giúp xây dựng giao diện component, state, props, routing và project frontend.",
    outcomes: [
      "Hiểu component",
      "Biết dùng state và props",
      "Biết routing",
      "Làm được web app nhỏ"
    ],
    prerequisites: ["Biết JavaScript cơ bản"],
    lessonIds: []
  },
  {
    id: "cpp-foundation",
    languageId: "cpp",
    title: "C++ Foundation",
    subtitle: "Nền tảng C++ cho tư duy thuật toán",
    level: "Intermediate",
    status: "planned",
    duration: "30 buổi",
    estimatedHours: 45,
    target: "Học sinh muốn học thuật toán hoặc thi lập trình",
    description:
      "Khóa học C++ nền tảng, tập trung vào tư duy thuật toán, cấu trúc điều khiển, mảng, hàm và bài tập logic.",
    outcomes: [
      "Biết cú pháp C++ cơ bản",
      "Biết dùng vòng lặp, mảng, hàm",
      "Giải được bài toán thuật toán cơ bản"
    ],
    prerequisites: ["Có tư duy toán logic cơ bản"],
    lessonIds: []
  },
  {
    id: "data-foundation",
    languageId: "data-ai",
    title: "Data Foundation with Python",
    subtitle: "Nền tảng xử lý dữ liệu",
    level: "Intermediate",
    status: "planned",
    duration: "20 buổi",
    estimatedHours: 30,
    target: "Người đi làm, sinh viên, người muốn học Data/AI",
    description:
      "Khóa học giúp làm quen với dữ liệu, bảng, file, thống kê cơ bản và xử lý dữ liệu bằng Python.",
    outcomes: [
      "Hiểu dữ liệu dạng bảng",
      "Biết đọc ghi CSV/Excel",
      "Biết làm sạch dữ liệu cơ bản",
      "Chuẩn bị học AI"
    ],
    prerequisites: ["Biết Python cơ bản"],
    lessonIds: []
  },
  {
    id: "ai-beginner",
    languageId: "data-ai",
    title: "AI Beginner",
    subtitle: "Làm quen AI từ nền tảng",
    level: "Intermediate",
    status: "planned",
    duration: "24 buổi",
    estimatedHours: 36,
    target: "Người đã biết Python và muốn học AI",
    description:
      "Khóa học nhập môn AI, giúp người học hiểu dữ liệu, mô hình, huấn luyện, dự đoán và ứng dụng AI đơn giản.",
    outcomes: [
      "Hiểu AI là gì",
      "Hiểu dữ liệu huấn luyện",
      "Biết khái niệm model",
      "Làm được demo AI cơ bản"
    ],
    prerequisites: ["Biết Python cơ bản", "Có kiến thức dữ liệu cơ bản"],
    lessonIds: []
  }
];