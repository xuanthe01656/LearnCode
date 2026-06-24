import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Clock,
  Code2,
  FileText,
  Layers3,
  Lightbulb,
  PlayCircle,
  Target,
  Users,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import TeacherLessonGuideCard from "../../components/teacher/TeacherLessonGuideCard.jsx";
import { getCourseById } from "../../data/courses.js";
import { getTeacherGuideStats, getTeacherLessonGuides } from "../../data/teacherGuides.js";

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function InfoList({ items, color = "indigo" }) {
  const list = asArray(items);
  if (!list.length) return null;
  const colorClass = color === "emerald" ? "text-emerald-600" : color === "amber" ? "text-amber-600" : "text-indigo-600";
  return (
    <div className="mt-4 grid gap-3">
      {list.map((item) => (
        <div key={typeof item === "string" ? item : item.title} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700">
          <CheckCircle2 className={`mt-0.5 shrink-0 ${colorClass}`} size={17} />
          <span>{typeof item === "string" ? item : item.description}</span>
        </div>
      ))}
    </div>
  );
}

export default function TeacherCourseGuide() {
  const { courseId = "python-foundation" } = useParams();
  const { t } = useTranslation(["teacher", "courses"]);
  const course = getCourseById(courseId);
  const guides = getTeacherLessonGuides(courseId);
  const stats = getTeacherGuideStats(courseId);

  if (!course || guides.length === 0) return <Navigate to="/teacher" replace />;

  const learnerProfiles = asArray(t("teacher:courses.pythonFoundation.learnerProfiles", { returnObjects: true }));
  const pacingNotes = asArray(t("teacher:courses.pythonFoundation.pacingNotes", { returnObjects: true }));
  const assessmentPlan = asArray(t("teacher:courses.pythonFoundation.assessmentPlan", { returnObjects: true }));

  const metrics = [
    { icon: <BookOpen size={20} />, value: stats.totalLessons, label: t("teacher:dashboard.totalLessons") },
    { icon: <Clock size={20} />, value: stats.totalMinutes, label: t("teacher:dashboard.totalMinutes") },
    { icon: <Code2 size={20} />, value: stats.codeLessons, label: t("teacher:dashboard.codeExercises") },
    { icon: <FileText size={20} />, value: stats.homeworkMinutes, label: t("teacher:ui.homeworkTotal") },
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#e0e7ff,transparent_28%),linear-gradient(to_bottom,#f8fafc,#eef2ff)] text-slate-900">
      <section className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        <Link
          to="/teacher"
          className="mb-5 inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-700 shadow-sm hover:bg-slate-50"
        >
          <ArrowLeft size={16} />
          {t("teacher:ui.backToTeacherDashboard")}
        </Link>

        <div className="overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-2xl">
          <div className="relative p-7 md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#4f46e5,transparent_35%),radial-gradient(circle_at_bottom_right,#06b6d4,transparent_35%)] opacity-75" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_420px] lg:items-start">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black backdrop-blur">
                  <Layers3 size={16} />
                  {t("teacher:dashboard.lessonMapBadge")}
                </div>
                <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
                  {t("teacher:courses.pythonFoundation.title")}
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-white/82">
                  {t("teacher:courses.pythonFoundation.description")}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to={`/teacher/lessons/${guides[0].lessonId}`}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 font-black text-slate-950 transition hover:bg-slate-100"
                  >
                    <PlayCircle size={18} />
                    {t("teacher:dashboard.startTeachingGuide")}
                  </Link>
                  <Link
                    to={`/course/${course.id}`}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-black text-white transition hover:bg-white/20"
                  >
                    {t("teacher:dashboard.viewStudentCourse")}
                  </Link>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
                <div className="grid grid-cols-2 gap-3 text-center">
                  {metrics.map((item) => (
                    <div key={item.label} className="rounded-3xl bg-white/10 p-4">
                      <div className="mx-auto mb-2 flex justify-center">{item.icon}</div>
                      <div className="text-2xl font-black">{item.value}</div>
                      <div className="text-xs text-white/70">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-10 lg:grid-cols-3">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700"><Users size={22} /></div>
          <h2 className="text-xl font-black">{t("teacher:ui.studentOutcomes")}</h2>
          <InfoList items={learnerProfiles} />
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700"><Target size={22} /></div>
          <h2 className="text-xl font-black">{t("teacher:dashboard.pacing")}</h2>
          <InfoList items={pacingNotes} color="emerald" />
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-700"><Lightbulb size={22} /></div>
          <h2 className="text-xl font-black">{t("teacher:dashboard.assessmentPlan")}</h2>
          <InfoList items={assessmentPlan} color="amber" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-black text-indigo-700">
              <Layers3 size={16} />
              {t("teacher:dashboard.lessonMapBadge")}
            </div>
            <h2 className="text-3xl font-black text-slate-950">{t("teacher:dashboard.lessonMap")}</h2>
            <p className="mt-2 max-w-2xl text-slate-600">{t("teacher:dashboard.lessonMapDesc")}</p>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {guides.map((guide) => (
            <TeacherLessonGuideCard key={guide.id} guide={guide} />
          ))}
        </div>
      </section>
    </div>
  );
}
