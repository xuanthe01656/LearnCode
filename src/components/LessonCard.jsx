import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock, Code2, FileText, HelpCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function LessonCard({ lesson }) {
  const { t } = useTranslation("lessons");
  const baseKey = `lessons:${lesson.i18nKey}`;

  return (
    <Link
      to={`/lessons/${lesson.id}`}
      className="group block rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-lg font-black text-indigo-700">
          {lesson.order}
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">
              {t(`typeLabels.${lesson.type}`)}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-700">
              <Clock size={13} />
              {t("ui.minutes", { count: lesson.durationMinutes })}
            </span>
            <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-black text-violet-700">
              {t("ui.difficulty", { level: lesson.difficulty || 1 })}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">
              <HelpCircle size={13} />
              {t("ui.quizCount", { count: lesson.quizQuestionCount || 0 })}
            </span>
            {lesson.hasCodeExercise && (
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                <Code2 size={13} />
                {t("ui.codePractice")}
              </span>
            )}
          </div>

          <h3 className="text-lg font-black text-slate-950">{t(`${baseKey}.title`)}</h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">{t(`${baseKey}.description`)}</p>

          <div className="mt-4 flex items-center justify-between text-sm font-black text-indigo-700">
            <span className="inline-flex items-center gap-2">
              <FileText size={16} />
              {t("ui.openLesson")}
            </span>
            <ArrowRight size={16} className="transition group-hover:translate-x-1" />
          </div>
        </div>

        <CheckCircle2 className="hidden text-slate-200 md:block" size={22} />
      </div>
    </Link>
  );
}
