import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  GraduationCap,
  Layers3,
  Lock,
  PlayCircle,
  Sparkles,
  Target,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import LessonCard from "../components/LessonCard.jsx";
import CourseCard from "../components/CourseCard.jsx";
import { courses, getCourseById } from "../data/courses.js";
import { getLessonsByCourse } from "../data/lessons.js";
import { getLanguageById } from "../data/languages.js";

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

export default function CourseDetail() {
  const { courseId } = useParams();
  const { t } = useTranslation("courses");
  const course = getCourseById(courseId);

  if (!course) return <Navigate to="/courses" replace />;

  const language = getLanguageById(course.languageId);
  const lessons = getLessonsByCourse(course.id);
  const relatedCourses = courses
    .filter((item) => item.languageId === course.languageId && item.id !== course.id)
    .slice(0, 3);

  const baseKey = `courses:${course.i18nKey}`;
  const outcomes = asArray(t(`${baseKey}.outcomes`, { returnObjects: true }));
  const prerequisites = asArray(t(`${baseKey}.prerequisites`, { returnObjects: true }));
  const projects = asArray(t(`${baseKey}.projects`, { returnObjects: true }));
  const tools = asArray(t(`${baseKey}.tools`, { returnObjects: true }));

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#e0e7ff,transparent_28%),linear-gradient(to_bottom,#f8fafc,#eef2ff)] text-slate-900">
      <section className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        <Link
          to={language ? `/courses/${language.id}` : "/courses"}
          className="mb-5 inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-700 shadow-sm hover:bg-slate-50"
        >
          <ArrowLeft size={16} />
          {t("courseDetail.backToCourses")}
        </Link>

        <div className="overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-2xl">
          <div className={`h-2 bg-gradient-to-r ${course.accent}`} />
          <div className="relative p-7 md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#4f46e5,transparent_35%),radial-gradient(circle_at_bottom_right,#06b6d4,transparent_35%)] opacity-70" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
              <div>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black backdrop-blur">
                    <GraduationCap size={16} />
                    {language ? t(`${language.i18nKey}.name`) : course.languageId}
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black backdrop-blur">
                    {t(`status.${course.status}`)}
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black backdrop-blur">
                    {course.level}
                  </span>
                </div>

                <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
                  {t(`${baseKey}.title`)}
                </h1>
                <p className="mt-3 text-xl font-black text-sky-200">
                  {t(`${baseKey}.subtitle`)}
                </p>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-white/82">
                  {t(`${baseKey}.description`)}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  {course.status === "available" && lessons.length > 0 ? (
                    <Link
                      to={`/lessons/${lessons[0].id}`}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 font-black text-slate-950 transition hover:bg-slate-100"
                    >
                      <PlayCircle size={18} />
                      {t("courseDetail.startFirstLesson")}
                    </Link>
                  ) : (
                    <Link
                      to="/placement"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 font-black text-slate-950 transition hover:bg-slate-100"
                    >
                      <Sparkles size={18} />
                      {t("courseDetail.joinWaitlist")}
                    </Link>
                  )}

                  <Link
                    to="/roadmap"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-black text-white transition hover:bg-white/20"
                  >
                    {t("courseDetail.viewRoadmap")}
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-3xl bg-white/10 p-4">
                    <Clock className="mx-auto mb-2" size={18} />
                    <div className="text-2xl font-black">{course.durationSessions}</div>
                    <div className="text-xs text-white/70">{t("courseDetail.sessions")}</div>
                  </div>
                  <div className="rounded-3xl bg-white/10 p-4">
                    <Layers3 className="mx-auto mb-2" size={18} />
                    <div className="text-2xl font-black">{course.estimatedHours}</div>
                    <div className="text-xs text-white/70">{t("courseDetail.hours")}</div>
                  </div>
                  <div className="rounded-3xl bg-white/10 p-4">
                    <BookOpen className="mx-auto mb-2" size={18} />
                    <div className="text-2xl font-black">{lessons.length || course.lessonIds.length}</div>
                    <div className="text-xs text-white/70">{t("courseDetail.lessons")}</div>
                  </div>
                </div>

                <div className="mt-5 rounded-3xl bg-white p-5 text-slate-900">
                  <h3 className="font-black">{t("courseDetail.target")}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{t(`${baseKey}.target`)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-10 lg:grid-cols-3">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
            <Target size={22} />
          </div>
          <h2 className="text-xl font-black">{t("courseDetail.outcomes")}</h2>
          <div className="mt-4 space-y-3">
            {outcomes.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={17} />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700">
            <BookOpen size={22} />
          </div>
          <h2 className="text-xl font-black">{t("courseDetail.prerequisites")}</h2>
          <div className="mt-4 space-y-3">
            {prerequisites.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                <CheckCircle2 className="mt-0.5 shrink-0 text-indigo-600" size={17} />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
            <Sparkles size={22} />
          </div>
          <h2 className="text-xl font-black">{t("courseDetail.projectsAndTools")}</h2>
          <div className="mt-4 space-y-3">
            {[...projects, ...tools].slice(0, 6).map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                <CheckCircle2 className="mt-0.5 shrink-0 text-amber-600" size={17} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-black text-indigo-700">
              <Layers3 size={16} />
              {t("courseDetail.lessonRoadmapBadge")}
            </div>
            <h2 className="text-3xl font-black text-slate-950">{t("courseDetail.lessonRoadmap")}</h2>
            <p className="mt-2 max-w-2xl text-slate-600">{t("courseDetail.lessonRoadmapDesc")}</p>
          </div>
        </div>

        {lessons.length > 0 ? (
          <div className="grid gap-4 lg:grid-cols-2">
            {lessons.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-amber-200 bg-amber-50 p-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-amber-700 shadow-sm">
              <Lock size={24} />
            </div>
            <h3 className="text-2xl font-black text-amber-950">{t("courseDetail.plannedTitle")}</h3>
            <p className="mx-auto mt-3 max-w-2xl text-amber-900/80">{t("courseDetail.plannedDesc")}</p>
          </div>
        )}
      </section>

      {relatedCourses.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pb-16">
          <h2 className="mb-5 text-3xl font-black text-slate-950">{t("courseDetail.relatedCourses")}</h2>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {relatedCourses.map((item) => (
              <CourseCard key={item.id} course={item} lessonCount={getLessonsByCourse(item.id).length} compact />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
