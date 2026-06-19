export const languages = [
  {
    id: "python",
    i18nKey: "languages.python",
    icon: "🐍",
    level: "Beginner",
    category: "programming",
    recommendedFirst: true,
    accent: "from-emerald-500 to-sky-500",
    courseIds: ["python-foundation", "python-projects", "python-automation"],
  },
  {
    id: "javascript",
    i18nKey: "languages.javascript",
    icon: "🟨",
    level: "Beginner - Intermediate",
    category: "web",
    recommendedFirst: false,
    accent: "from-amber-400 to-orange-500",
    courseIds: ["javascript-foundation", "react-foundation"],
  },
  {
    id: "web",
    i18nKey: "languages.web",
    icon: "🌐",
    level: "Beginner - Intermediate",
    category: "career",
    recommendedFirst: false,
    accent: "from-sky-500 to-indigo-500",
    courseIds: ["web-foundation", "javascript-foundation", "react-foundation"],
  },
  {
    id: "cpp",
    i18nKey: "languages.cpp",
    icon: "⚙️",
    level: "Intermediate",
    category: "algorithm",
    recommendedFirst: false,
    accent: "from-slate-700 to-indigo-600",
    courseIds: ["cpp-foundation", "algorithm-basic"],
  },
  {
    id: "data-ai",
    i18nKey: "languages.dataAi",
    icon: "🤖",
    level: "Intermediate",
    category: "data-ai",
    recommendedFirst: false,
    accent: "from-violet-500 to-fuchsia-500",
    courseIds: ["data-foundation", "ai-beginner"],
  },
];

export function getLanguageById(languageId) {
  return languages.find((language) => language.id === languageId) || null;
}
