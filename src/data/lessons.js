export const lessons = [
  {
    id: "pyf-001",
    courseId: "python-foundation",
    languageId: "python",
    order: 1,
    title: "Máy tính có biết suy nghĩ không?",
    duration: "45 phút",
    level: "Beginner",
    type: "concept",
    description: "Hiểu máy tính chỉ làm theo lệnh và mô hình Input - Process - Output.",
    objectives: [
      "Hiểu lập trình là ra lệnh cho máy tính",
      "Phân biệt Input, Process và Output",
      "Nhìn thấy lập trình trong đời sống hằng ngày"
    ],
    blocks: [
      {
        type: "story",
        title: "Máy tính có thông minh không?",
        content:
          "Máy tính có thể tính rất nhanh, nhưng nó không tự hiểu ý con người. Máy tính chỉ làm đúng những gì chúng ta hướng dẫn. Việc viết hướng dẫn cho máy tính được gọi là lập trình."
      },
      {
        type: "concept",
        title: "Input - Process - Output",
        content:
          "Input là dữ liệu đưa vào. Process là quá trình xử lý. Output là kết quả nhận được. Ví dụ: nhập 2 + 3, máy tính xử lý phép cộng, kết quả là 5."
      },
      {
        type: "practice",
        title: "Hoạt động tư duy",
        content:
          "Hãy chọn một việc hằng ngày như pha mì, đánh răng hoặc đi học, rồi chia việc đó thành Input, Process và Output."
      }
    ],
    quiz: [
      {
        question: "Máy tính làm việc chủ yếu bằng cách nào?",
        options: ["Tự suy nghĩ", "Làm theo lệnh", "Đoán ý người dùng", "Tự học mọi thứ"],
        answer: "Làm theo lệnh",
        explain: "Máy tính không tự hiểu ý, nó cần con người viết lệnh rõ ràng."
      }
    ],
    project: {
      title: "Mô tả một quy trình đời thường",
      description:
        "Chọn một hoạt động quen thuộc và mô tả theo 3 phần: Input, Process, Output."
    }
  },
  {
    id: "pyf-002",
    courseId: "python-foundation",
    languageId: "python",
    order: 2,
    title: "Chương trình Python đầu tiên",
    duration: "45 phút",
    level: "Beginner",
    type: "coding",
    description: "Làm quen với Python và lệnh print().",
    objectives: [
      "Biết chương trình Python là gì",
      "Biết dùng print() để hiển thị nội dung",
      "Chạy được chương trình đầu tiên"
    ],
    blocks: [
      {
        type: "concept",
        title: "print() dùng để làm gì?",
        content:
          "print() là lệnh dùng để hiển thị nội dung ra màn hình. Đây thường là lệnh đầu tiên khi học Python."
      },
      {
        type: "code",
        language: "python",
        title: "Ví dụ",
        content: "print(\"Xin chào\")"
      },
      {
        type: "practice",
        title: "Thực hành",
        content:
          "Viết chương trình in ra tên, tuổi và điều em thích."
      }
    ],
    quiz: [
      {
        question: "Lệnh print() dùng để làm gì?",
        options: ["Nhập dữ liệu", "Hiển thị dữ liệu", "Xóa dữ liệu", "Tắt chương trình"],
        answer: "Hiển thị dữ liệu",
        explain: "print() dùng để hiển thị nội dung ra màn hình."
      }
    ],
    project: {
      title: "Giới thiệu bản thân",
      description:
        "Viết chương trình hiển thị tên, tuổi, lớp hoặc công việc và mục tiêu học lập trình."
    }
  },
  {
    id: "pyf-003",
    courseId: "python-foundation",
    languageId: "python",
    order: 3,
    title: "Biến - chiếc hộp lưu dữ liệu",
    duration: "60 phút",
    level: "Beginner",
    type: "coding",
    description: "Hiểu biến là nơi lưu dữ liệu trong chương trình.",
    objectives: [
      "Hiểu biến là gì",
      "Biết đặt tên biến đơn giản",
      "Biết lưu chuỗi và số vào biến"
    ],
    blocks: [
      {
        type: "concept",
        title: "Biến là gì?",
        content:
          "Biến giống như một chiếc hộp có tên. Ta có thể bỏ dữ liệu vào hộp và lấy ra dùng lại."
      },
      {
        type: "code",
        language: "python",
        title: "Ví dụ",
        content: "name = \"An\"\nage = 13\nprint(name)\nprint(age)"
      },
      {
        type: "practice",
        title: "Thực hành",
        content:
          "Tạo các biến name, age, school rồi in ra màn hình."
      }
    ],
    quiz: [
      {
        question: "Biến dùng để làm gì?",
        options: ["Lưu dữ liệu", "Tắt máy", "Xóa chương trình", "Đổi màu màn hình"],
        answer: "Lưu dữ liệu",
        explain: "Biến giúp chương trình lưu và dùng lại dữ liệu."
      }
    ],
    project: {
      title: "Thẻ thông tin cá nhân",
      description:
        "Tạo chương trình lưu thông tin cá nhân bằng biến và hiển thị ra màn hình."
    }
  },
  {
    id: "pyf-004",
    courseId: "python-foundation",
    languageId: "python",
    order: 4,
    title: "Nhập dữ liệu với input()",
    duration: "60 phút",
    level: "Beginner",
    type: "coding",
    description: "Biết nhận dữ liệu từ người dùng.",
    objectives: [
      "Biết dùng input()",
      "Biết lưu dữ liệu người dùng nhập vào biến",
      "Tạo chương trình tương tác đơn giản"
    ],
    blocks: [
      {
        type: "concept",
        title: "input() là gì?",
        content:
          "input() giúp chương trình hỏi người dùng và nhận dữ liệu từ bàn phím."
      },
      {
        type: "code",
        language: "python",
        title: "Ví dụ",
        content: "name = input(\"Tên của bạn là gì? \")\nprint(\"Xin chào\", name)"
      },
      {
        type: "practice",
        title: "Thực hành",
        content:
          "Viết chương trình hỏi tên, tuổi và mục tiêu học lập trình."
      }
    ],
    quiz: [
      {
        question: "input() dùng để làm gì?",
        options: ["Hiển thị dữ liệu", "Nhận dữ liệu từ người dùng", "Lặp lại hành động", "So sánh dữ liệu"],
        answer: "Nhận dữ liệu từ người dùng",
        explain: "input() nhận dữ liệu người dùng nhập từ bàn phím."
      }
    ],
    project: {
      title: "Form đăng ký học",
      description:
        "Tạo form hỏi tên, tuổi, lớp/công việc và ngôn ngữ muốn học."
    }
  },
  {
    id: "pyf-005",
    courseId: "python-foundation",
    languageId: "python",
    order: 5,
    title: "Kiểu dữ liệu và toán tử",
    duration: "60 phút",
    level: "Beginner",
    type: "coding",
    description: "Làm quen với số, chữ, đúng/sai và phép tính cơ bản.",
    objectives: [
      "Biết string, integer, float, boolean",
      "Biết cộng, trừ, nhân, chia",
      "Biết chuyển dữ liệu nhập vào thành số"
    ],
    blocks: [
      {
        type: "concept",
        title: "Kiểu dữ liệu",
        content:
          "Dữ liệu trong Python có nhiều loại: chữ là string, số nguyên là integer, số thập phân là float, đúng/sai là boolean."
      },
      {
        type: "code",
        language: "python",
        title: "Ví dụ",
        content: "a = int(input(\"Nhập số thứ nhất: \"))\nb = int(input(\"Nhập số thứ hai: \"))\nprint(\"Tổng là:\", a + b)"
      },
      {
        type: "practice",
        title: "Thực hành",
        content:
          "Viết chương trình nhập 2 số và tính tổng, hiệu, tích."
      }
    ],
    quiz: [
      {
        question: "Kiểu dữ liệu nào phù hợp để lưu tên người?",
        options: ["String", "Integer", "Float", "Boolean"],
        answer: "String",
        explain: "Tên người là dữ liệu dạng chữ nên dùng string."
      }
    ],
    project: {
      title: "Máy tính mini",
      description:
        "Tạo chương trình nhập 2 số và in ra kết quả cộng, trừ, nhân, chia."
    }
  },
  {
    id: "pyf-006",
    courseId: "python-foundation",
    languageId: "python",
    order: 6,
    title: "Điều kiện if",
    duration: "60 phút",
    level: "Beginner",
    type: "coding",
    description: "Giúp chương trình biết ra quyết định.",
    objectives: [
      "Hiểu điều kiện đúng/sai",
      "Biết dùng if",
      "Viết chương trình kiểm tra điều kiện đơn giản"
    ],
    blocks: [
      {
        type: "concept",
        title: "Vì sao cần điều kiện?",
        content:
          "Trong đời sống, ta thường quyết định dựa trên điều kiện. Ví dụ: nếu trời mưa thì mang áo mưa. Trong lập trình cũng vậy."
      },
      {
        type: "code",
        language: "python",
        title: "Ví dụ",
        content: "score = 8\nif score >= 5:\n    print(\"Đậu\")"
      },
      {
        type: "practice",
        title: "Thực hành",
        content:
          "Viết chương trình nhập điểm. Nếu điểm từ 5 trở lên thì in ra 'Đậu'."
      }
    ],
    quiz: [
      {
        question: "if dùng để làm gì?",
        options: ["Lặp lại hành động", "Kiểm tra điều kiện", "Lưu dữ liệu", "Hiển thị hình ảnh"],
        answer: "Kiểm tra điều kiện",
        explain: "if giúp chương trình kiểm tra điều kiện để quyết định làm gì."
      }
    ],
    project: {
      title: "Máy kiểm tra đậu/rớt",
      description:
        "Nhập điểm số và cho biết kết quả đậu hay chưa đậu."
    }
  },
  {
    id: "pyf-007",
    courseId: "python-foundation",
    languageId: "python",
    order: 7,
    title: "if - else và nhiều nhánh lựa chọn",
    duration: "60 phút",
    level: "Beginner",
    type: "coding",
    description: "Xử lý nhiều trường hợp khác nhau trong chương trình.",
    objectives: [
      "Biết dùng if/else",
      "Biết dùng elif",
      "Viết chương trình xếp loại"
    ],
    blocks: [
      {
        type: "concept",
        title: "Nhiều trường hợp",
        content:
          "Không phải bài toán nào cũng chỉ có đúng hoặc sai. Có bài toán có nhiều mức như giỏi, khá, trung bình, yếu."
      },
      {
        type: "code",
        language: "python",
        title: "Ví dụ",
        content: "score = float(input(\"Nhập điểm: \"))\nif score >= 8:\n    print(\"Giỏi\")\nelif score >= 6.5:\n    print(\"Khá\")\nelif score >= 5:\n    print(\"Trung bình\")\nelse:\n    print(\"Cần cố gắng\")"
      },
      {
        type: "practice",
        title: "Thực hành",
        content:
          "Viết chương trình xếp loại học lực dựa trên điểm trung bình."
      }
    ],
    quiz: [
      {
        question: "elif dùng khi nào?",
        options: ["Khi có nhiều điều kiện cần kiểm tra", "Khi muốn xóa dữ liệu", "Khi muốn kết thúc chương trình", "Khi muốn nhập tên"],
        answer: "Khi có nhiều điều kiện cần kiểm tra",
        explain: "elif giúp kiểm tra thêm các điều kiện khác sau if."
      }
    ],
    project: {
      title: "Bảng xếp loại học lực",
      description:
        "Nhập điểm và in ra xếp loại tương ứng."
    }
  },
  {
    id: "pyf-008",
    courseId: "python-foundation",
    languageId: "python",
    order: 8,
    title: "Vòng lặp for",
    duration: "60 phút",
    level: "Beginner",
    type: "coding",
    description: "Lặp lại một hành động nhiều lần.",
    objectives: [
      "Hiểu vì sao cần vòng lặp",
      "Biết dùng for với range()",
      "Viết chương trình in dãy số"
    ],
    blocks: [
      {
        type: "concept",
        title: "Vì sao cần lặp?",
        content:
          "Nếu cần làm một việc nhiều lần, ta không nên viết lại cùng một lệnh quá nhiều lần. Vòng lặp giúp chương trình lặp lại hành động."
      },
      {
        type: "code",
        language: "python",
        title: "Ví dụ",
        content: "for i in range(1, 6):\n    print(i)"
      },
      {
        type: "practice",
        title: "Thực hành",
        content:
          "Viết chương trình in các số từ 1 đến 10 và bảng cửu chương 5."
      }
    ],
    quiz: [
      {
        question: "Vòng lặp dùng để làm gì?",
        options: ["Lặp lại hành động", "Lưu tên", "Xóa file", "Tắt máy"],
        answer: "Lặp lại hành động",
        explain: "Vòng lặp giúp thực hiện một hành động nhiều lần."
      }
    ],
    project: {
      title: "Bảng cửu chương",
      description:
        "Tạo chương trình in bảng cửu chương theo số người dùng nhập."
    }
  },
  {
    id: "pyf-009",
    courseId: "python-foundation",
    languageId: "python",
    order: 9,
    title: "Vòng lặp while",
    duration: "60 phút",
    level: "Beginner",
    type: "coding",
    description: "Lặp khi điều kiện còn đúng.",
    objectives: [
      "Hiểu while",
      "Biết điều kiện dừng",
      "Tránh vòng lặp vô hạn"
    ],
    blocks: [
      {
        type: "concept",
        title: "while khác for thế nào?",
        content:
          "for thường dùng khi biết số lần lặp. while dùng khi muốn lặp cho đến khi một điều kiện không còn đúng."
      },
      {
        type: "code",
        language: "python",
        title: "Ví dụ",
        content: "password = \"\"\nwhile password != \"1234\":\n    password = input(\"Nhập mật khẩu: \")\nprint(\"Đăng nhập thành công\")"
      },
      {
        type: "practice",
        title: "Thực hành",
        content:
          "Viết chương trình yêu cầu nhập đúng mật khẩu mới cho tiếp tục."
      }
    ],
    quiz: [
      {
        question: "Vòng lặp while dừng khi nào?",
        options: ["Khi điều kiện không còn đúng", "Khi máy tính nóng", "Khi có nhiều biến", "Khi dùng print"],
        answer: "Khi điều kiện không còn đúng",
        explain: "while tiếp tục chạy khi điều kiện đúng và dừng khi điều kiện sai."
      }
    ],
    project: {
      title: "Màn hình đăng nhập đơn giản",
      description:
        "Yêu cầu người dùng nhập đúng mật khẩu để đăng nhập."
    }
  },
  {
    id: "pyf-010",
    courseId: "python-foundation",
    languageId: "python",
    order: 10,
    title: "List - danh sách dữ liệu",
    duration: "60 phút",
    level: "Beginner",
    type: "coding",
    description: "Lưu nhiều giá trị trong một biến.",
    objectives: [
      "Hiểu list là gì",
      "Biết thêm, xóa, duyệt list",
      "Biết dùng list để quản lý dữ liệu đơn giản"
    ],
    blocks: [
      {
        type: "concept",
        title: "List là gì?",
        content:
          "List là danh sách chứa nhiều giá trị. Ví dụ danh sách học sinh, danh sách điểm, danh sách sản phẩm."
      },
      {
        type: "code",
        language: "python",
        title: "Ví dụ",
        content: "students = [\"An\", \"Bình\", \"Chi\"]\nfor name in students:\n    print(name)"
      },
      {
        type: "practice",
        title: "Thực hành",
        content:
          "Tạo danh sách 5 học sinh và in từng tên ra màn hình."
      }
    ],
    quiz: [
      {
        question: "List phù hợp để lưu gì?",
        options: ["Nhiều giá trị", "Chỉ một chữ cái", "Mật khẩu máy tính", "Màu nền màn hình"],
        answer: "Nhiều giá trị",
        explain: "List dùng để lưu nhiều giá trị trong cùng một biến."
      }
    ],
    project: {
      title: "Danh sách lớp học",
      description:
        "Tạo chương trình lưu danh sách học sinh và hiển thị danh sách."
    }
  },
  {
    id: "pyf-011",
    courseId: "python-foundation",
    languageId: "python",
    order: 11,
    title: "Hàm - chia nhỏ chương trình",
    duration: "60 phút",
    level: "Beginner",
    type: "coding",
    description: "Dùng function để tổ chức và tái sử dụng code.",
    objectives: [
      "Hiểu hàm là gì",
      "Biết tạo hàm đơn giản",
      "Biết gọi hàm và truyền dữ liệu"
    ],
    blocks: [
      {
        type: "concept",
        title: "Vì sao cần hàm?",
        content:
          "Khi chương trình lớn dần, ta cần chia thành các phần nhỏ. Hàm giúp code dễ đọc, dễ sửa và có thể dùng lại."
      },
      {
        type: "code",
        language: "python",
        title: "Ví dụ",
        content: "def say_hello(name):\n    print(\"Xin chào\", name)\n\nsay_hello(\"An\")"
      },
      {
        type: "practice",
        title: "Thực hành",
        content:
          "Tạo hàm tính tổng hai số và gọi hàm đó nhiều lần."
      }
    ],
    quiz: [
      {
        question: "Lợi ích chính của hàm là gì?",
        options: ["Chia nhỏ và tái sử dụng code", "Làm máy tính tự tắt", "Xóa lỗi tự động", "Không cần học biến"],
        answer: "Chia nhỏ và tái sử dụng code",
        explain: "Hàm giúp chương trình gọn hơn và dễ bảo trì hơn."
      }
    ],
    project: {
      title: "Máy tính bằng hàm",
      description:
        "Tạo các hàm cộng, trừ, nhân, chia và gọi theo lựa chọn của người dùng."
    }
  },
  {
    id: "pyf-012",
    courseId: "python-foundation",
    languageId: "python",
    order: 12,
    title: "Mini Project: Quiz trắc nghiệm",
    duration: "90 phút",
    level: "Beginner",
    type: "project",
    description: "Tổng hợp kiến thức để làm chương trình quiz đơn giản.",
    objectives: [
      "Ôn biến, input, if, list và vòng lặp",
      "Biết tính điểm",
      "Biết chia nhỏ project"
    ],
    blocks: [
      {
        type: "concept",
        title: "Tư duy làm project",
        content:
          "Một project nên được chia nhỏ: dữ liệu câu hỏi, hiển thị câu hỏi, nhận đáp án, kiểm tra đúng sai và tính điểm."
      },
      {
        type: "code",
        language: "python",
        title: "Ví dụ khung chương trình",
        content: "score = 0\nanswer = input(\"2 + 3 = ? \")\nif answer == \"5\":\n    score += 1\nprint(\"Điểm:\", score)"
      },
      {
        type: "practice",
        title: "Thực hành",
        content:
          "Tạo quiz 5 câu hỏi, mỗi câu có đáp án đúng, cuối chương trình in tổng điểm."
      }
    ],
    quiz: [
      {
        question: "Khi làm project lớn, nên làm gì trước?",
        options: ["Chia nhỏ chức năng", "Viết tất cả cùng lúc", "Không cần kiểm tra", "Xóa bài cũ"],
        answer: "Chia nhỏ chức năng",
        explain: "Chia nhỏ giúp dễ làm, dễ kiểm tra và dễ sửa lỗi."
      }
    ],
    project: {
      title: "Quiz 5 câu hỏi",
      description:
        "Tạo chương trình quiz trắc nghiệm có tính điểm và xếp loại kết quả."
    }
  }
];