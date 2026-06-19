export const roadmaps = [
  {
    id: "student",
    i18nKey: "roadmaps.student",
    targetGroup: "student",
    accent: "from-indigo-600 to-sky-500",
    recommendedCourseIds: ["python-foundation", "python-projects", "cpp-foundation", "algorithm-basic"],
  },
  {
    id: "beginner",
    i18nKey: "roadmaps.beginner",
    targetGroup: "beginner",
    accent: "from-emerald-500 to-cyan-500",
    recommendedCourseIds: ["python-foundation", "python-projects", "web-foundation", "javascript-foundation"],
  },
  {
    id: "working-adult",
    i18nKey: "roadmaps.workingAdult",
    targetGroup: "working-adult",
    accent: "from-cyan-500 to-blue-600",
    recommendedCourseIds: ["python-foundation", "python-automation", "data-foundation", "ai-beginner"],
  },
  {
    id: "career-switcher",
    i18nKey: "roadmaps.careerSwitcher",
    targetGroup: "career-switcher",
    accent: "from-violet-600 to-fuchsia-500",
    recommendedCourseIds: ["python-foundation", "web-foundation", "javascript-foundation", "react-foundation", "data-foundation"],
  },
];

export function getRoadmapById(roadmapId) {
  return roadmaps.find((roadmap) => roadmap.id === roadmapId) || null;
}
