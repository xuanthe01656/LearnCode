import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const root = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(root, 'src');
const errors = [];

function readJson(rel) {
  try {
    return JSON.parse(fs.readFileSync(path.join(src, rel), 'utf8'));
  } catch (error) {
    errors.push(`${rel}: ${error.message}`);
    return null;
  }
}

const { courses } = await import(pathToFileURL(path.join(src, 'data/courses.js')));
const { languages } = await import(pathToFileURL(path.join(src, 'data/languages.js')));
const { lessons } = await import(pathToFileURL(path.join(src, 'data/lessons.js')));
const { roadmaps } = await import(pathToFileURL(path.join(src, 'data/roadmaps.js')));

const viCourses = readJson('i18n/locales/vi/courses.json');
const enCourses = readJson('i18n/locales/en/courses.json');
const viLessons = readJson('i18n/locales/vi/lessons.json');
const enLessons = readJson('i18n/locales/en/lessons.json');

const courseIds = new Set(courses.map((course) => course.id));
const lessonIds = new Set(lessons.map((lesson) => lesson.id));
const languageIds = new Set(languages.map((language) => language.id));

for (const language of languages) {
  if (!viCourses?.languages?.[language.i18nKey.split('.').pop()]) errors.push(`Missing vi language key ${language.i18nKey}`);
  if (!enCourses?.languages?.[language.i18nKey.split('.').pop()]) errors.push(`Missing en language key ${language.i18nKey}`);
  for (const courseId of language.courseIds) {
    if (!courseIds.has(courseId)) errors.push(`Language ${language.id} references missing course ${courseId}`);
  }
}

for (const course of courses) {
  if (!languageIds.has(course.languageId) && course.languageId !== 'web') errors.push(`Course ${course.id} has missing language ${course.languageId}`);
  const key = course.i18nKey.split('.').pop();
  if (!viCourses?.courses?.[key]) errors.push(`Missing vi course key ${course.i18nKey}`);
  if (!enCourses?.courses?.[key]) errors.push(`Missing en course key ${course.i18nKey}`);
  for (const lessonId of course.lessonIds) {
    if (!lessonIds.has(lessonId)) errors.push(`Course ${course.id} references missing lesson ${lessonId}`);
  }
}

for (const lesson of lessons) {
  if (!courseIds.has(lesson.courseId)) errors.push(`Lesson ${lesson.id} has missing course ${lesson.courseId}`);
  const key = lesson.i18nKey.split('.').pop();
  if (!viLessons?.lessons?.[key]) errors.push(`Missing vi lesson key ${lesson.i18nKey}`);
  if (!enLessons?.lessons?.[key]) errors.push(`Missing en lesson key ${lesson.i18nKey}`);
}

for (const roadmap of roadmaps) {
  const key = roadmap.i18nKey.split('.').pop();
  if (!viCourses?.roadmaps?.[key]) errors.push(`Missing vi roadmap key ${roadmap.i18nKey}`);
  if (!enCourses?.roadmaps?.[key]) errors.push(`Missing en roadmap key ${roadmap.i18nKey}`);
  for (const courseId of roadmap.recommendedCourseIds) {
    if (!courseIds.has(courseId)) errors.push(`Roadmap ${roadmap.id} references missing recommended course ${courseId}`);
  }
  const stages = viCourses?.roadmaps?.[key]?.stages || [];
  for (const stage of stages) {
    for (const courseId of stage.courseIds || []) {
      if (!courseIds.has(courseId)) errors.push(`Roadmap ${roadmap.id} stage references missing course ${courseId}`);
    }
  }
}

const report = {
  totalLanguages: languages.length,
  totalCourses: courses.length,
  availableCourses: courses.filter((course) => course.status === 'available').length,
  totalLessons: lessons.length,
  totalRoadmaps: roadmaps.length,
  pythonFoundationLessons: courses.find((course) => course.id === 'python-foundation')?.lessonIds.length || 0,
  namespacesAdded: ['courses', 'lessons'],
  newRoutes: ['/courses', '/courses/:languageId', '/course/:courseId', '/roadmap', '/lessons/:lessonId'],
  validationErrors: errors,
};

fs.writeFileSync(path.join(root, 'validation_report.json'), JSON.stringify(report, null, 2));

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(JSON.stringify(report, null, 2));
