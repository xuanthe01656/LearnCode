import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, Clock, Layers3, Lock, PlayCircle, Target } from "lucide-react";
import { useTranslation } from "react-i18next";

function StatusBadge({ status }) {
  const { t } = useTranslation("courses");

  const className =
    status === "available"
      ? "bg-emerald-50 text-emerald-700 ring-emerald-100"
      : "bg-amber-50 text-amber-700 ring-amber-100";

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-black ring-1 ${className}`}>
      {t(`status.${status}`)}
    </span>
  );
}

function ContentStatusBadge({ contentStatus }) {
  const { t } = useTranslation("courses");
  const status = contentStatus || "planned";

  const className =
    status === "completed"
      ? "bg-indigo-50 text-indigo-700 ring-indigo-100"
      : status === "in-progress"
        ? "bg-sky-50 text-sky-700 ring-sky-100"
        : "bg-slate-100 text-slate-600 ring-slate-200";

  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-black ring-1 ${className}`}>
      {status === "completed" && <BadgeCheck size={13} />}
      {t(`contentStatus.${status}`)}
    </span>
  );
}

export default function CourseCard({ course, lessonCount = 0, compact = false }) {
  const { t } = useTranslation("courses");
  const baseKey = `courses:${course.i18nKey}`;
  const outcomes = t(`${baseKey}.outcomes`, { returnObjects: true });
  const linkTo = `/course/${course.id}`;
  const isCompleted = course.contentStatus === "completed";

  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl">
      <div className={`h-2 bg-gradient-to-r ${course.accent}`} />

      <div className="p-6">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            <StatusBadge status={course.status} />
            <ContentStatusBadge contentStatus={course.contentStatus} />
          </div>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">
            {course.level}
          </span>
        </div>

        <h2 className="text-2xl font-black text-slate-950">{t(`${baseKey}.title`)}</h2>

        <p className="mt-2 text-sm font-bold text-indigo-700">{t(`${baseKey}.subtitle`)}</p>

        <p className="mt-4 text-sm leading-6 text-slate-600">{t(`${baseKey}.description`)}</p>

        {!compact && Array.isArray(outcomes) && outcomes.length > 0 && (
          <div className="mt-5 space-y-2">
            {outcomes.slice(0, 3).map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-slate-700">
                <Target className="mt-0.5 text-indigo-600" size={15} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}

        {isCompleted && (
          <div className="mt-5 rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm font-bold leading-6 text-emerald-800">
            {t("ui.completedCourseNote")}
          </div>
        )}

        <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs font-bold text-slate-600">
          <div className="rounded-2xl bg-slate-50 p-3">
            <Clock className="mx-auto mb-1 text-slate-500" size={16} />
            {t("ui.sessions", { count: course.durationSessions })}
          </div>
          <div className="rounded-2xl bg-slate-50 p-3">
            <Layers3 className="mx-auto mb-1 text-slate-500" size={16} />
            {t("ui.hours", { count: course.estimatedHours })}
          </div>
          <div className="rounded-2xl bg-slate-50 p-3">
            {course.status === "available" ? (
              <PlayCircle className="mx-auto mb-1 text-emerald-600" size={16} />
            ) : (
              <Lock className="mx-auto mb-1 text-amber-600" size={16} />
            )}
            {t("ui.lessons", { count: lessonCount || course.lessonIds?.length || 0 })}
          </div>
        </div>

        <Link
          to={linkTo}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-indigo-700"
        >
          {course.status === "available" ? t("ui.openCourse") : t("ui.viewPlannedCourse")}
          <ArrowRight size={16} className="transition group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
