import { getLessonById, getLessonsByCourse } from "./lessons.js";

export const TEACHER_COURSE_GUIDES = [
  {
    id: "python-foundation-teacher-guide",
    courseId: "python-foundation",
    i18nKey: "courses.pythonFoundation",
    status: "ready",
    deliveryModes: ["online", "offline", "hybrid"],
    requiredTeacherLevel: "Python foundation + classroom facilitation",
  },
];

export function getTeacherCourseGuide(courseId = "python-foundation") {
  return TEACHER_COURSE_GUIDES.find((guide) => guide.courseId === courseId) || null;
}

export function getTeacherLessonGuide(lessonId) {
  const lesson = getLessonById(lessonId);
  if (!lesson) return null;

  const lessonKey = lesson.i18nKey.replace("lessons.", "");
  return {
    id: `${lesson.id}-teacher-guide`,
    lessonId: lesson.id,
    courseId: lesson.courseId,
    languageId: lesson.languageId,
    order: lesson.order,
    type: lesson.type,
    difficulty: lesson.difficulty || 1,
    durationMinutes: lesson.durationMinutes,
    quizQuestionCount: lesson.quizQuestionCount || 0,
    quizMinutes: lesson.quizMinutes || 0,
    hasCodeExercise: Boolean(lesson.hasCodeExercise),
    requiredQuizScorePercent: lesson.requiredQuizScorePercent || 70,
    i18nKey: `lessons.${lessonKey}.teacher`,
    studentLessonI18nKey: lesson.i18nKey,
  };
}

export function getTeacherLessonGuides(courseId = "python-foundation") {
  return getLessonsByCourse(courseId).map((lesson) => getTeacherLessonGuide(lesson.id)).filter(Boolean);
}

export function getTeacherAdjacentLessons(lessonId) {
  const current = getLessonById(lessonId);
  if (!current) return { previousLesson: null, nextLesson: null };

  const teacherLessons = getTeacherLessonGuides(current.courseId);
  const index = teacherLessons.findIndex((lesson) => lesson.lessonId === lessonId);

  return {
    previousLesson: index > 0 ? teacherLessons[index - 1] : null,
    nextLesson: index >= 0 && index < teacherLessons.length - 1 ? teacherLessons[index + 1] : null,
  };
}

export function getTeacherGuideStats(courseId = "python-foundation") {
  const guides = getTeacherLessonGuides(courseId);
  return guides.reduce(
    (stats, guide) => ({
      totalLessons: stats.totalLessons + 1,
      totalMinutes: stats.totalMinutes + guide.durationMinutes,
      codeLessons: stats.codeLessons + (guide.hasCodeExercise ? 1 : 0),
      quizQuestions: stats.quizQuestions + guide.quizQuestionCount,
      homeworkMinutes: stats.homeworkMinutes + (guide.durationMinutes >= 90 ? 45 : guide.difficulty >= 4 ? 40 : 30),
    }),
    { totalLessons: 0, totalMinutes: 0, codeLessons: 0, quizQuestions: 0, homeworkMinutes: 0 }
  );
}
