import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Sparkles, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function LanguageCard({ language, courseCount = 0 }) {
  const { t } = useTranslation("courses");
  const baseKey = `courses:${language.i18nKey}`;
  const bestFor = t(`${baseKey}.bestFor`, { returnObjects: true });

  return (
    <Link
      to={`/courses/${language.id}`}
      className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl"
    >
      <div className={`h-2 bg-gradient-to-r ${language.accent}`} />

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="text-5xl">{language.icon}</div>

          {language.recommendedFirst && (
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">
              <Sparkles size={13} />
              {t("ui.recommendedFirst")}
            </span>
          )}
        </div>

        <h2 className="mt-5 text-2xl font-black text-slate-950">
          {t(`${baseKey}.name`)}
        </h2>

        <p className="mt-3 min-h-20 text-sm leading-6 text-slate-600">
          {t(`${baseKey}.description`)}
        </p>

        {Array.isArray(bestFor) && bestFor.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {bestFor.slice(0, 3).map((item) => (
              <span
                key={item}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5 text-sm">
          <div className="flex items-center gap-2 font-bold text-slate-600">
            <BookOpen size={16} />
            {t("ui.courseCount", { count: courseCount })}
          </div>

          <div className="inline-flex items-center gap-2 font-black text-indigo-700">
            {t("ui.viewCourses")}
            <ArrowRight size={16} className="transition group-hover:translate-x-1" />
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Users size={14} />
          {t(`${baseKey}.targetSummary`)}
        </div>
      </div>
    </Link>
  );
}
