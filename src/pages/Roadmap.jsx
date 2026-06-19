import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  Compass,
  GraduationCap,
  Layers3,
  Sparkles,
  Target,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import CourseCard from "../components/CourseCard.jsx";
import { getCourseById } from "../data/courses.js";
import { getLessonsByCourse } from "../data/lessons.js";
import { roadmaps } from "../data/roadmaps.js";

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

export default function Roadmap() {
  const { t } = useTranslation("courses");
  const [activeId, setActiveId] = useState("student");

  const activeRoadmap = useMemo(() => {
    return roadmaps.find((roadmap) => roadmap.id === activeId) || roadmaps[0];
  }, [activeId]);

  const baseKey = `courses:${activeRoadmap.i18nKey}`;
  const goals = asArray(t(`${baseKey}.goals`, { returnObjects: true }));
  const stages = asArray(t(`${baseKey}.stages`, { returnObjects: true }));
  const recommendedCourses = activeRoadmap.recommendedCourseIds
    .map((courseId) => getCourseById(courseId))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#e0e7ff,transparent_30%),radial-gradient(circle_at_top_right,#cffafe,transparent_28%),linear-gradient(to_bottom,#f8fafc,#eef2ff)] text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#4f46e5,transparent_35%),radial-gradient(circle_at_bottom_right,#06b6d4,transparent_35%)] opacity-80" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-[1fr_420px] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black backdrop-blur">
              <Compass size={16} />
              {t("roadmapPage.badge")}
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
              {t("roadmapPage.title")}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              {t("roadmapPage.subtitle")}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/test"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 font-black text-slate-950 transition hover:bg-slate-100"
              >
                <Brain size={18} />
                {t("roadmapPage.ctaThinking")}
              </Link>
              <Link
                to="/placement"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-black text-white transition hover:bg-white/20"
              >
                <Target size={18} />
                {t("roadmapPage.ctaPlacement")}
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
            <div className="rounded-3xl bg-white p-6 text-slate-950">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-sm font-black text-indigo-700">
                <Sparkles size={15} />
                {t("roadmapPage.recommendationCard.badge")}
              </div>
              <h2 className="text-2xl font-black">{t("roadmapPage.recommendationCard.title")}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{t("roadmapPage.recommendationCard.desc")}</p>
              <div className="mt-5 grid gap-3">
                <Link to="/languages" className="inline-flex items-center justify-between rounded-2xl bg-slate-950 px-4 py-3 text-sm font-black text-white">
                  {t("roadmapPage.recommendationCard.language")}
                  <ArrowRight size={16} />
                </Link>
                <Link to="/courses" className="inline-flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 text-sm font-black text-slate-700 hover:bg-slate-50">
                  {t("roadmapPage.recommendationCard.courses")}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-black text-indigo-700">
              <GraduationCap size={16} />
              {t("roadmapPage.chooseBadge")}
            </div>
            <h2 className="text-3xl font-black text-slate-950">{t("roadmapPage.chooseTitle")}</h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {roadmaps.map((roadmap) => {
            const active = roadmap.id === activeRoadmap.id;
            const key = `courses:${roadmap.i18nKey}`;

            return (
              <button
                key={roadmap.id}
                type="button"
                onClick={() => setActiveId(roadmap.id)}
                className={`overflow-hidden rounded-[1.5rem] border bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                  active ? "border-indigo-300 ring-4 ring-indigo-100" : "border-slate-200"
                }`}
              >
                <div className={`h-2 bg-gradient-to-r ${roadmap.accent}`} />
                <div className="p-5">
                  <div className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">
                    {t(`${key}.badge`)}
                  </div>
                  <h3 className="text-xl font-black text-slate-950">{t(`${key}.title`)}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{t(`${key}.shortDesc`)}</p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12">
        <div className={`overflow-hidden rounded-[2rem] bg-gradient-to-r ${activeRoadmap.accent} p-1 shadow-xl`}>
          <div className="rounded-[calc(2rem-4px)] bg-white p-6 md:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-black text-indigo-700">
                  <Layers3 size={16} />
                  {t(`${baseKey}.badge`)}
                </div>
                <h2 className="text-3xl font-black text-slate-950 md:text-4xl">
                  {t(`${baseKey}.title`)}
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
                  {t(`${baseKey}.description`)}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {goals.map((goal) => (
                    <div key={goal} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={18} />
                      {goal}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-xl font-black text-slate-950">{t("roadmapPage.whenToUse")}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{t(`${baseKey}.whenToUse`)}</p>
                <Link
                  to="/placement"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-black text-white hover:bg-indigo-700"
                >
                  {t("roadmapPage.checkPlacement")}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-white">
            <Layers3 size={22} />
          </div>
          <div>
            <h2 className="text-3xl font-black text-slate-950">{t("roadmapPage.stagesTitle")}</h2>
            <p className="text-sm text-slate-500">{t("roadmapPage.stagesDesc")}</p>
          </div>
        </div>

        <div className="grid gap-5">
          {stages.map((stage, index) => (
            <article key={`${stage.title}-${index}`} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid gap-5 lg:grid-cols-[80px_1fr_260px] lg:items-start">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-950 text-2xl font-black text-white">
                  {index + 1}
                </div>

                <div>
                  <h3 className="text-2xl font-black text-slate-950">{stage.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{stage.description}</p>

                  {Array.isArray(stage.items) && stage.items.length > 0 && (
                    <div className="mt-5 grid gap-3 md:grid-cols-2">
                      {stage.items.map((item) => (
                        <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                          <CheckCircle2 className="mt-0.5 shrink-0 text-indigo-600" size={18} />
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="rounded-3xl border border-slate-100 bg-slate-50 p-4">
                  <div className="mb-3 text-sm font-black text-slate-500">{t("roadmapPage.stageCourses")}</div>
                  <div className="space-y-2">
                    {Array.isArray(stage.courseIds) && stage.courseIds.map((courseId) => {
                      const course = getCourseById(courseId);
                      if (!course) return null;

                      return (
                        <Link
                          key={course.id}
                          to={`/course/${course.id}`}
                          className="block rounded-2xl bg-white px-4 py-3 text-sm font-black text-slate-800 shadow-sm hover:text-indigo-700"
                        >
                          {t(`courses:${course.i18nKey}.title`)}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
            <BookOpen size={22} />
          </div>
          <div>
            <h2 className="text-3xl font-black text-slate-950">{t("roadmapPage.recommendedCourses")}</h2>
            <p className="text-sm text-slate-500">{t("roadmapPage.recommendedCoursesDesc")}</p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {recommendedCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              lessonCount={getLessonsByCourse(course.id).length || course.lessonIds.length}
              compact
            />
          ))}
        </div>
      </section>
    </div>
  );
}
