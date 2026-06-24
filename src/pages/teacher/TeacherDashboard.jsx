import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Code2,
  GraduationCap,
  Layers3,
  Monitor,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { getTeacherGuideStats } from "../../data/teacherGuides.js";

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

export default function TeacherDashboard() {
  const { t } = useTranslation("teacher");
  const stats = getTeacherGuideStats("python-foundation");
  const principles = asArray(t("dashboard.principles", { returnObjects: true }));
  const teachingModes = asArray(t("courses.pythonFoundation.deliveryModes", { returnObjects: true }));
  const assessmentPlan = asArray(t("courses.pythonFoundation.assessmentPlan", { returnObjects: true }));

  const metrics = [
    { icon: <BookOpen size={22} />, value: stats.totalLessons, label: t("dashboard.totalLessons") },
    { icon: <Clock size={22} />, value: stats.totalMinutes, label: t("dashboard.totalMinutes") },
    { icon: <Code2 size={22} />, value: stats.codeLessons, label: t("dashboard.codeExercises") },
    { icon: <ClipboardCheck size={22} />, value: stats.quizQuestions, label: t("dashboard.quizQuestions") },
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_28%),linear-gradient(to_bottom,#f8fafc,#eef2ff)] text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#4f46e5,transparent_34%),radial-gradient(circle_at_bottom_right,#06b6d4,transparent_30%)] opacity-80" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-[1fr_420px] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black backdrop-blur">
              <GraduationCap size={16} />
              {t("dashboard.badge")}
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
              {t("dashboard.title")}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
              {t("dashboard.subtitle")}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/teacher/course/python-foundation"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 font-black text-slate-950 shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                {t("dashboard.startTeachingGuide")}
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/course/python-foundation"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-black text-white transition hover:bg-white/20"
              >
                {t("dashboard.viewStudentCourse")}
                <Target size={18} />
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur">
            <div className="grid grid-cols-2 gap-3">
              {metrics.map((item) => (
                <div key={item.label} className="rounded-3xl bg-white p-5 text-slate-950 shadow-sm">
                  <div className="mb-3 inline-flex rounded-2xl bg-indigo-50 p-3 text-indigo-700">{item.icon}</div>
                  <div className="text-3xl font-black">{item.value}</div>
                  <div className="mt-1 text-sm font-semibold text-slate-500">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 lg:grid-cols-[1fr_380px]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700">
            <Layers3 size={22} />
          </div>
          <h2 className="text-2xl font-black text-slate-950">{t("dashboard.teachingPrinciples")}</h2>
          <div className="mt-5 grid gap-3">
            {principles.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700">
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={17} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-[2rem] border border-emerald-100 bg-emerald-50 p-6 shadow-sm">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-emerald-700 shadow-sm">
            <Sparkles size={22} />
          </div>
          <h2 className="text-2xl font-black text-emerald-950">{t("dashboard.assessmentPlan")}</h2>
          <div className="mt-4 space-y-3">
            {assessmentPlan.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm leading-6 text-emerald-900/80">
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={17} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="mb-6">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sm font-black text-sky-700">
            <Monitor size={16} />
            {t("dashboard.onlineOffline")}
          </div>
          <h2 className="text-3xl font-black text-slate-950">{t("courses.pythonFoundation.title")}</h2>
          <p className="mt-2 max-w-3xl text-slate-600">{t("courses.pythonFoundation.description")}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {teachingModes.map((mode) => (
            <article key={mode.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                <Users size={22} />
              </div>
              <h3 className="text-xl font-black text-slate-950">{mode.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{mode.description}</p>
              <div className="mt-4 grid gap-2">
                {asArray(mode.checklist).map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-indigo-600" size={16} />
                    {item}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
