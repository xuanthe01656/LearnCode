import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, BookOpen, Filter, GraduationCap, Search, Target } from "lucide-react";
import { useTranslation } from "react-i18next";
import CourseCard from "../components/CourseCard.jsx";
import { courses } from "../data/courses.js";
import { getLessonsByCourse } from "../data/lessons.js";
import { getLanguageById, languages } from "../data/languages.js";

const STATUS_FILTERS = ["all", "available", "planned"];

export default function CourseList() {
  const { languageId } = useParams();
  const { t } = useTranslation("courses");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  const selectedLanguage = languageId ? getLanguageById(languageId) : null;

  const visibleCourses = useMemo(() => {
    const keyword = search.trim().toLowerCase();
    const languageCourseIds = selectedLanguage?.courseIds || [];

    return courses
      .filter((course) => {
        const courseText = [
          t(`${course.i18nKey}.title`),
          t(`${course.i18nKey}.subtitle`),
          t(`${course.i18nKey}.description`),
        ]
          .join(" ")
          .toLowerCase();

        const matchLanguage = !selectedLanguage || languageCourseIds.includes(course.id) || course.languageId === selectedLanguage.id;
        const matchStatus = status === "all" || course.status === status;
        const matchSearch = !keyword || courseText.includes(keyword) || course.tags.some((tag) => tag.includes(keyword));

        return matchLanguage && matchStatus && matchSearch;
      })
      .sort((a, b) => a.order - b.order);
  }, [search, selectedLanguage, status, t]);

  const title = selectedLanguage ? t(`${selectedLanguage.i18nKey}.name`) : t("coursePage.title");
  const subtitle = selectedLanguage ? t(`${selectedLanguage.i18nKey}.description`) : t("coursePage.subtitle");

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#e0f2fe,transparent_28%),linear-gradient(to_bottom,#f8fafc,#eef2ff)] text-slate-900">
      <section className="mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-2xl">
          <div className="relative p-7 md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#4f46e5,transparent_35%),radial-gradient(circle_at_bottom_right,#06b6d4,transparent_35%)] opacity-80" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black backdrop-blur">
                  <GraduationCap size={16} />
                  {selectedLanguage ? t("coursePage.languageBadge") : t("coursePage.badge")}
                </div>
                <h1 className="text-4xl font-black leading-tight md:text-6xl">{title}</h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">{subtitle}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/placement"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 font-black text-slate-950 transition hover:bg-slate-100"
                  >
                    {t("coursePage.takePlacement")}
                    <Target size={18} />
                  </Link>
                  <Link
                    to="/roadmap"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-black text-white transition hover:bg-white/20"
                  >
                    {t("coursePage.viewRoadmap")}
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 rounded-[2rem] border border-white/10 bg-white/10 p-5 text-center backdrop-blur">
                <div className="rounded-3xl bg-white/10 p-4">
                  <div className="text-3xl font-black">{visibleCourses.length}</div>
                  <div className="text-xs text-white/70">{t("coursePage.stats.matched")}</div>
                </div>
                <div className="rounded-3xl bg-white/10 p-4">
                  <div className="text-3xl font-black">{courses.filter((course) => course.status === "available").length}</div>
                  <div className="text-xs text-white/70">{t("coursePage.stats.available")}</div>
                </div>
                <div className="rounded-3xl bg-white/10 p-4">
                  <div className="text-3xl font-black">{languages.length}</div>
                  <div className="text-xs text-white/70">{t("coursePage.stats.languages")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14">
        <div className="mb-8 rounded-[2rem] border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur">
          <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <label className="relative block">
              <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={t("coursePage.searchPlaceholder")}
                className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm font-semibold outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />
            </label>

            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 text-sm font-black text-slate-500">
                <Filter size={16} />
                {t("coursePage.statusFilter")}
              </span>
              {STATUS_FILTERS.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setStatus(item)}
                  className={`rounded-full px-4 py-2 text-sm font-black transition ${
                    status === item ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {t(`filters.${item}`)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-black text-indigo-700">
              <BookOpen size={16} />
              {t("coursePage.catalogBadge")}
            </div>
            <h2 className="text-3xl font-black text-slate-950">{t("coursePage.catalogTitle")}</h2>
          </div>
          {selectedLanguage && (
            <Link to="/courses" className="font-black text-indigo-700 hover:text-indigo-900">
              {t("coursePage.clearLanguage")}
            </Link>
          )}
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              lessonCount={getLessonsByCourse(course.id).length || course.lessonIds.length}
            />
          ))}
        </div>

        {visibleCourses.length === 0 && (
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center font-bold text-slate-500">
            {t("coursePage.noResult")}
          </div>
        )}
      </section>
    </div>
  );
}
