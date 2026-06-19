export const LESSON_TYPES = {
  concept: "concept",
  coding: "coding",
  practice: "practice",
  quiz: "quiz",
  project: "project",
};

export const lessons = [
  { id: "pyf-001", courseId: "python-foundation", languageId: "python", order: 1, i18nKey: "lessons.pyf001", durationMinutes: 45, level: "Beginner", type: LESSON_TYPES.concept },
  { id: "pyf-002", courseId: "python-foundation", languageId: "python", order: 2, i18nKey: "lessons.pyf002", durationMinutes: 45, level: "Beginner", type: LESSON_TYPES.coding },
  { id: "pyf-003", courseId: "python-foundation", languageId: "python", order: 3, i18nKey: "lessons.pyf003", durationMinutes: 60, level: "Beginner", type: LESSON_TYPES.coding },
  { id: "pyf-004", courseId: "python-foundation", languageId: "python", order: 4, i18nKey: "lessons.pyf004", durationMinutes: 60, level: "Beginner", type: LESSON_TYPES.coding },
  { id: "pyf-005", courseId: "python-foundation", languageId: "python", order: 5, i18nKey: "lessons.pyf005", durationMinutes: 60, level: "Beginner", type: LESSON_TYPES.coding },
  { id: "pyf-006", courseId: "python-foundation", languageId: "python", order: 6, i18nKey: "lessons.pyf006", durationMinutes: 60, level: "Beginner", type: LESSON_TYPES.coding },
  { id: "pyf-007", courseId: "python-foundation", languageId: "python", order: 7, i18nKey: "lessons.pyf007", durationMinutes: 60, level: "Beginner", type: LESSON_TYPES.coding },
  { id: "pyf-008", courseId: "python-foundation", languageId: "python", order: 8, i18nKey: "lessons.pyf008", durationMinutes: 60, level: "Beginner", type: LESSON_TYPES.coding },
  { id: "pyf-009", courseId: "python-foundation", languageId: "python", order: 9, i18nKey: "lessons.pyf009", durationMinutes: 60, level: "Beginner", type: LESSON_TYPES.coding },
  { id: "pyf-010", courseId: "python-foundation", languageId: "python", order: 10, i18nKey: "lessons.pyf010", durationMinutes: 60, level: "Beginner", type: LESSON_TYPES.coding },
  { id: "pyf-011", courseId: "python-foundation", languageId: "python", order: 11, i18nKey: "lessons.pyf011", durationMinutes: 60, level: "Beginner", type: LESSON_TYPES.coding },
  { id: "pyf-012", courseId: "python-foundation", languageId: "python", order: 12, i18nKey: "lessons.pyf012", durationMinutes: 60, level: "Beginner", type: LESSON_TYPES.practice },
  { id: "pyf-013", courseId: "python-foundation", languageId: "python", order: 13, i18nKey: "lessons.pyf013", durationMinutes: 60, level: "Beginner", type: LESSON_TYPES.coding },
  { id: "pyf-014", courseId: "python-foundation", languageId: "python", order: 14, i18nKey: "lessons.pyf014", durationMinutes: 60, level: "Beginner", type: LESSON_TYPES.coding },
  { id: "pyf-015", courseId: "python-foundation", languageId: "python", order: 15, i18nKey: "lessons.pyf015", durationMinutes: 60, level: "Beginner", type: LESSON_TYPES.coding },
  { id: "pyf-016", courseId: "python-foundation", languageId: "python", order: 16, i18nKey: "lessons.pyf016", durationMinutes: 60, level: "Beginner", type: LESSON_TYPES.coding },
  { id: "pyf-017", courseId: "python-foundation", languageId: "python", order: 17, i18nKey: "lessons.pyf017", durationMinutes: 60, level: "Beginner", type: LESSON_TYPES.practice },
  { id: "pyf-018", courseId: "python-foundation", languageId: "python", order: 18, i18nKey: "lessons.pyf018", durationMinutes: 60, level: "Beginner", type: LESSON_TYPES.concept },
  { id: "pyf-019", courseId: "python-foundation", languageId: "python", order: 19, i18nKey: "lessons.pyf019", durationMinutes: 60, level: "Beginner", type: LESSON_TYPES.coding },
  { id: "pyf-020", courseId: "python-foundation", languageId: "python", order: 20, i18nKey: "lessons.pyf020", durationMinutes: 60, level: "Beginner", type: LESSON_TYPES.practice },
  { id: "pyf-021", courseId: "python-foundation", languageId: "python", order: 21, i18nKey: "lessons.pyf021", durationMinutes: 60, level: "Beginner", type: LESSON_TYPES.project },
  { id: "pyf-022", courseId: "python-foundation", languageId: "python", order: 22, i18nKey: "lessons.pyf022", durationMinutes: 90, level: "Beginner", type: LESSON_TYPES.project },
  { id: "pyf-023", courseId: "python-foundation", languageId: "python", order: 23, i18nKey: "lessons.pyf023", durationMinutes: 90, level: "Beginner", type: LESSON_TYPES.project },
  { id: "pyf-024", courseId: "python-foundation", languageId: "python", order: 24, i18nKey: "lessons.pyf024", durationMinutes: 90, level: "Beginner", type: LESSON_TYPES.project },
];

export function getLessonById(lessonId) {
  return lessons.find((lesson) => lesson.id === lessonId) || null;
}

export function getLessonsByCourse(courseId) {
  return lessons
    .filter((lesson) => lesson.courseId === courseId)
    .sort((a, b) => a.order - b.order);
}

export function getAdjacentLessons(lessonId) {
  const current = getLessonById(lessonId);
  if (!current) return { previousLesson: null, nextLesson: null };

  const courseLessons = getLessonsByCourse(current.courseId);
  const index = courseLessons.findIndex((lesson) => lesson.id === lessonId);

  return {
    previousLesson: index > 0 ? courseLessons[index - 1] : null,
    nextLesson: index >= 0 && index < courseLessons.length - 1 ? courseLessons[index + 1] : null,
  };
}
