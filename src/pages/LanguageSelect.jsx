import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Filter, Layers3, Search, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageCard from "../components/LanguageCard.jsx";
import { courses } from "../data/courses.js";
import { languages } from "../data/languages.js";

const CATEGORIES = ["all", "programming", "web", "algorithm", "career", "data-ai"];

export default function LanguageSelect() {
  const { t } = useTranslation("courses");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filteredLanguages = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return languages.filter((language) => {
      const name = t(`${language.i18nKey}.name`).toLowerCase();
      const description = t(`${language.i18nKey}.description`).toLowerCase();
      const matchSearch = !keyword || name.includes(keyword) || description.includes(keyword);
      const matchCategory = category === "all" || language.category === category;

      return matchSearch && matchCategory;
    });
  }, [category, search, t]);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#e0e7ff,transparent_30%),linear-gradient(to_bottom,#f8fafc,#eef2ff)] text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#4f46e5,transparent_35%),radial-gradient(circle_at_bottom_right,#06b6d4,transparent_35%)] opacity-80" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black backdrop-blur">
              <Sparkles size={16} />
              {t("languagePage.badge")}
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
              {t("languagePage.title")}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              {t("languagePage.subtitle")}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/placement"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 font-black text-slate-950 transition hover:bg-slate-100"
              >
                {t("languagePage.ctaPlacement")}
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/roadmap"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-black text-white transition hover:bg-white/20"
              >
                {t("languagePage.ctaRoadmap")}
                <Layers3 size={18} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 rounded-[2rem] border border-white/10 bg-white/10 p-5 backdrop-blur sm:grid-cols-3">
            <div className="rounded-3xl bg-white/10 p-5 text-center">
              <div className="text-4xl font-black">{languages.length}</div>
              <div className="mt-1 text-sm text-white/70">{t("languagePage.stats.languages")}</div>
            </div>
            <div className="rounded-3xl bg-white/10 p-5 text-center">
              <div className="text-4xl font-black">{courses.length}</div>
              <div className="mt-1 text-sm text-white/70">{t("languagePage.stats.courses")}</div>
            </div>
            <div className="col-span-2 rounded-3xl bg-white/10 p-5 text-center sm:col-span-1">
              <div className="text-4xl font-black">4</div>
              <div className="mt-1 text-sm text-white/70">{t("languagePage.stats.roadmaps")}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="mb-8 rounded-[2rem] border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur">
          <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <label className="relative block">
              <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={t("languagePage.searchPlaceholder")}
                className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm font-semibold outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />
            </label>

            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 text-sm font-black text-slate-500">
                <Filter size={16} />
                {t("languagePage.filter")}
              </span>
              {CATEGORIES.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`rounded-full px-4 py-2 text-sm font-black transition ${
                    category === item
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {t(`categories.${item}`)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-black text-indigo-700">
              <BookOpen size={16} />
              {t("languagePage.catalogBadge")}
            </div>
            <h2 className="text-3xl font-black text-slate-950">{t("languagePage.catalogTitle")}</h2>
          </div>
          <Link to="/courses" className="hidden font-black text-indigo-700 hover:text-indigo-900 md:inline-flex">
            {t("languagePage.viewAllCourses")}
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredLanguages.map((language) => (
            <LanguageCard
              key={language.id}
              language={language}
              courseCount={courses.filter((course) => language.courseIds.includes(course.id)).length}
            />
          ))}
        </div>

        {filteredLanguages.length === 0 && (
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center font-bold text-slate-500">
            {t("languagePage.noResult")}
          </div>
        )}
      </section>
    </div>
  );
}
