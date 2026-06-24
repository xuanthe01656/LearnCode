import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock, Code2, FileText, HelpCircle, Target } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function TeacherLessonGuideCard({ guide }) {
  const { t } = useTranslation(["teacher", "lessons"]);
  const studentBase = `lessons:${guide.studentLessonI18nKey}`;
  const teacherBase = `teacher:${guide.i18nKey}`;

  return (
    <Link
      to={`/teacher/lessons/${guide.lessonId}`}
      className="group block rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-lg font-black text-indigo-700">
          {guide.order}
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">
              {t(`lessons:typeLabels.${guide.type}`)}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-700">
              <Clock size={13} />
              {t("teacher:ui.minutes", { count: guide.durationMinutes })}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">
              <HelpCircle size={13} />
              {t("teacher:ui.quizCount", { count: guide.quizQuestionCount })}
            </span>
            {guide.hasCodeExercise && (
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                <Code2 size={13} />
                {t("teacher:ui.codeExercise")}
              </span>
            )}
          </div>

          <h3 className="text-lg font-black text-slate-950">{t(`${studentBase}.title`)}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{t(`${teacherBase}.summary`)}</p>

          <div className="mt-4 grid gap-2 text-xs font-bold text-slate-600 sm:grid-cols-2">
            <span className="inline-flex items-center gap-2 rounded-2xl bg-slate-50 px-3 py-2">
              <Target size={14} /> {t("teacher:dashboard.lessonFocus")}: {t(`${teacherBase}.focus`)}
            </span>
            <span className="inline-flex items-center gap-2 rounded-2xl bg-slate-50 px-3 py-2">
              <CheckCircle2 size={14} /> {t("teacher:dashboard.homeworkIncluded")}
            </span>
          </div>

          <div className="mt-4 flex items-center justify-between text-sm font-black text-indigo-700">
            <span className="inline-flex items-center gap-2">
              <FileText size={16} />
              {t("teacher:dashboard.openGuide")}
            </span>
            <ArrowRight size={16} className="transition group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
