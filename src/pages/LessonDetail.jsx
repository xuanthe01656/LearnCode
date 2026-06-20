import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Code2,
  FileText,
  HelpCircle,
  Lightbulb,
  PlayCircle,
  Target,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import CodeBlock from "../components/CodeBlock.jsx";
import CodeRunner from "../components/CodeRunner.jsx";
import QuizBox from "../components/QuizBox.jsx";
import { getCourseById } from "../data/courses.js";
import { getAdjacentLessons, getLessonById } from "../data/lessons.js";

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function asObject(value) {
  return value && typeof value === "object" && !Array.isArray(value) ? value : null;
}

function iconForBlock(type) {
  if (type === "code") return <PlayCircle size={20} />;
  if (type === "practice") return <Target size={20} />;
  if (type === "story") return <BookOpen size={20} />;
  if (type === "guide") return <Lightbulb size={20} />;
  if (type === "mistake") return <HelpCircle size={20} />;
  return <Lightbulb size={20} />;
}

function BlockList({ items }) {
  const list = asArray(items);
  if (list.length === 0) return null;
  return (
    <div className="mt-4 grid gap-2">
      {list.map((item) => (
        <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700">
          <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={17} />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

export default function LessonDetail() {
  const { lessonId } = useParams();
  const { t } = useTranslation(["courses", "lessons"]);
  const lesson = getLessonById(lessonId);

  if (!lesson) return <Navigate to="/courses" replace />;

  const course = getCourseById(lesson.courseId);
  const { previousLesson, nextLesson } = getAdjacentLessons(lesson.id);
  const baseKey = `lessons:${lesson.i18nKey}`;
  const objectives = asArray(t(`${baseKey}.objectives`, { returnObjects: true }));
  const blocks = asArray(t(`${baseKey}.blocks`, { returnObjects: true }));
  const quiz = asArray(t(`${baseKey}.quiz`, { returnObjects: true }));
  const project = asObject(t(`${baseKey}.project`, { returnObjects: true }));
  const checklist = asArray(project?.checklist);
  const rubric = asArray(project?.rubric);
  const timePlan = asArray(t(`${baseKey}.timePlan`, { returnObjects: true }));
  const teacherGuide = asObject(t(`${baseKey}.teacherGuide`, { returnObjects: true }));
  const codeExercise = asObject(t(`${baseKey}.codeExercise`, { returnObjects: true }));
  const hasCodeExercise = Boolean(codeExercise?.enabled && asArray(codeExercise?.testCases).length > 0);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#e0e7ff,transparent_28%),linear-gradient(to_bottom,#f8fafc,#eef2ff)] text-slate-900">
      <section className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <div className="mb-5 flex flex-wrap gap-3">
          <Link
            to={course ? `/course/${course.id}` : "/courses"}
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-700 shadow-sm hover:bg-slate-50"
          >
            <ArrowLeft size={16} />
            {t("lessons:ui.backToCourse")}
          </Link>
        </div>

        <div className="overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-2xl">
          <div className="relative p-7 md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#4f46e5,transparent_35%),radial-gradient(circle_at_bottom_right,#06b6d4,transparent_35%)] opacity-80" />
            <div className="relative">
              <div className="mb-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black backdrop-blur">
                  {t("lessons:ui.lessonNumber", { order: lesson.order })}
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black backdrop-blur">
                  {t(`lessons:typeLabels.${lesson.type}`)}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black backdrop-blur">
                  <Clock size={16} />
                  {t("lessons:ui.minutes", { count: lesson.durationMinutes })}
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black backdrop-blur">
                  {t("lessons:ui.difficulty", { level: lesson.difficulty })}
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black backdrop-blur">
                  {t("lessons:ui.quizCount", { count: lesson.quizQuestionCount })}
                </span>
                {hasCodeExercise && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black backdrop-blur">
                    <Code2 size={16} />
                    {t("lessons:ui.codePractice")}
                  </span>
                )}
              </div>

              <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">{t(`${baseKey}.title`)}</h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/82">{t(`${baseKey}.description`)}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 pb-8 lg:grid-cols-[340px_1fr]">
        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700">
              <Target size={22} />
            </div>
            <h2 className="text-xl font-black">{t("lessons:ui.objectives")}</h2>
            <div className="mt-4 space-y-3">
              {objectives.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={17} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {timePlan.length > 0 && (
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-black">{t("lessons:ui.timePlan")}</h2>
              <div className="mt-4 space-y-3">
                {timePlan.map((item, index) => (
                  <div key={`${item.label}-${index}`} className="flex items-center justify-between gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm">
                    <span className="font-bold text-slate-700">{item.label}</span>
                    <span className="shrink-0 rounded-full bg-white px-2 py-1 text-xs font-black text-indigo-700 ring-1 ring-indigo-100">
                      {t("lessons:ui.minutes", { count: item.minutes })}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black">{t("lessons:ui.navigation")}</h2>
            <div className="mt-4 grid gap-3">
              {previousLesson && (
                <Link to={`/lessons/${previousLesson.id}`} className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50">
                  ← {t("lessons:ui.previousLesson")}
                </Link>
              )}
              {nextLesson && (
                <Link to={`/lessons/${nextLesson.id}`} className="rounded-2xl bg-indigo-600 px-4 py-3 text-center text-sm font-black text-white hover:bg-indigo-700">
                  {t("lessons:ui.nextLesson")} →
                </Link>
              )}
            </div>
          </div>
        </aside>

        <main className="space-y-6">
          {teacherGuide?.title && (
            <section className="rounded-[2rem] border border-indigo-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700">
                  <Lightbulb size={20} />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-wide text-slate-400">{t("lessons:ui.teacherGuide")}</div>
                  <h2 className="text-xl font-black text-slate-950">{teacherGuide.title}</h2>
                </div>
              </div>
              {teacherGuide.summary && <p className="text-base leading-8 text-slate-700">{teacherGuide.summary}</p>}
              <BlockList items={teacherGuide.steps} />
              {teacherGuide.pace && <div className="mt-4 rounded-2xl bg-amber-50 p-4 text-sm font-semibold leading-6 text-amber-800">{teacherGuide.pace}</div>}
            </section>
          )}

          {blocks.map((block, index) => (
            <article key={`${block.title}-${index}`} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700">
                  {iconForBlock(block.type)}
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-wide text-slate-400">
                    {t(`lessons:blockTypes.${block.type || "concept"}`)}
                  </div>
                  <h2 className="text-xl font-black text-slate-950">{block.title}</h2>
                </div>
              </div>

              {block.content && <p className="whitespace-pre-line text-base leading-8 text-slate-700">{block.content}</p>}
              <BlockList items={block.steps} />
              <BlockList items={block.items} />

              {block.code && (
                <div className="mt-5">
                  <CodeBlock code={block.code} language={block.language || "python"} title={block.title} />
                </div>
              )}
            </article>
          ))}

          {hasCodeExercise && <CodeRunner key={`${lesson.id}-runner`} exercise={codeExercise} lessonId={lesson.id} />}

          <QuizBox key={`${lesson.id}-quiz`} quiz={quiz} minimumScorePercent={lesson.requiredQuizScorePercent || 70} quizMinutes={lesson.quizMinutes || 0} />

          {project?.title && (
            <section className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-emerald-50 shadow-sm">
              <div className="bg-gradient-to-r from-emerald-600 to-sky-500 p-6 text-white">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm font-black">
                  <FileText size={16} />
                  {t("lessons:ui.project")}
                </div>
                <h2 className="text-2xl font-black">{project.title}</h2>
                <p className="mt-2 text-white/85">{project.description}</p>
              </div>
              {(checklist.length > 0 || rubric.length > 0) && (
                <div className="grid gap-5 p-6 md:grid-cols-2">
                  {checklist.length > 0 && (
                    <div className="rounded-3xl bg-white p-5 shadow-sm">
                      <h3 className="font-black text-slate-950">Checklist</h3>
                      <BlockList items={checklist} />
                    </div>
                  )}
                  {rubric.length > 0 && (
                    <div className="rounded-3xl bg-white p-5 shadow-sm">
                      <h3 className="font-black text-slate-950">{t("lessons:ui.rubric")}</h3>
                      <BlockList items={rubric} />
                    </div>
                  )}
                </div>
              )}
            </section>
          )}
        </main>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="flex flex-col gap-3 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">
          <Link to={course ? `/course/${course.id}` : "/courses"} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-5 py-3 font-black text-slate-700 hover:bg-slate-50">
            <ArrowLeft size={18} />
            {t("lessons:ui.backToCourse")}
          </Link>

          {nextLesson && (
            <Link to={`/lessons/${nextLesson.id}`} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 font-black text-white hover:bg-indigo-700">
              {t("lessons:ui.nextLesson")}
              <ArrowRight size={18} />
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
