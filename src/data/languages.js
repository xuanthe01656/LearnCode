export const languages = [
  {
    id: "python",
    name: "Python",
    icon: "🐍",
    level: "Beginner",
    category: "programming",
    description: "Ngôn ngữ dễ học, phù hợp cho người mới bắt đầu, học sinh, automation, data và AI.",
    targetLearners: ["students", "beginners", "working-adults", "career-switchers"],
    recommendedFirst: true,
    courseIds: ["python-foundation", "python-projects", "python-automation"]
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "🟨",
    level: "Beginner - Intermediate",
    category: "web",
    description: "Ngôn ngữ chính của lập trình web, dùng để xây dựng website, frontend và ứng dụng hiện đại.",
    targetLearners: ["students", "beginners", "career-switchers"],
    recommendedFirst: false,
    courseIds: ["javascript-foundation", "react-foundation"]
  },
  {
    id: "cpp",
    name: "C++",
    icon: "⚙️",
    level: "Intermediate",
    category: "algorithm",
    description: "Phù hợp cho tư duy thuật toán, cấu trúc dữ liệu, thi học sinh giỏi và lập trình hiệu năng cao.",
    targetLearners: ["students", "algorithm-learners"],
    recommendedFirst: false,
    courseIds: ["cpp-foundation", "algorithm-basic"]
  },
  {
    id: "web",
    name: "Web Development",
    icon: "🌐",
    level: "Beginner - Intermediate",
    category: "career",
    description: "Lộ trình xây dựng website từ HTML, CSS, JavaScript đến React.",
    targetLearners: ["students", "beginners", "career-switchers"],
    recommendedFirst: false,
    courseIds: ["web-foundation", "react-foundation"]
  },
  {
    id: "data-ai",
    name: "Data & AI",
    icon: "🤖",
    level: "Intermediate",
    category: "career",
    description: "Lộ trình xử lý dữ liệu, phân tích dữ liệu và làm quen AI bằng Python.",
    targetLearners: ["working-adults", "career-switchers"],
    recommendedFirst: false,
    courseIds: ["data-foundation", "ai-beginner"]
  }
];