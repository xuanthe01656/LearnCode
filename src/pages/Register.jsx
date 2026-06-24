import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, GraduationCap, ShieldCheck, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext.jsx";

function getErrorMessage(t, error) {
  const code = String(error?.code || error?.message || "");
  if (code.includes("gmail_required")) return t("errors.gmailRequired");
  if (code.includes("role_conflict")) return t("errors.roleConflict");
  if (code.includes("popup-closed-by-user")) return t("errors.popupClosed");
  if (code.includes("email_not_verified")) return t("errors.emailNotVerified");
  return error?.message || t("errors.generic");
}

export default function Register() {
  const { t } = useTranslation("auth");
  const navigate = useNavigate();
  const { registerStudentWithGoogle } = useAuth();
  const [learnerGroup, setLearnerGroup] = useState("student");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const benefits = useMemo(() => t("register.benefits", { returnObjects: true }), [t]);
  const groupOptions = useMemo(
    () => [
      { id: "student", label: t("groups.student") },
      { id: "beginner", label: t("groups.beginner") },
      { id: "working-adult", label: t("groups.workingAdult") },
      { id: "career-switcher", label: t("groups.careerSwitcher") },
    ],
    [t]
  );

  const handleRegister = async () => {
    setError("");
    try {
      setSubmitting(true);
      await registerStudentWithGoogle({ learnerGroup });
      navigate("/profile", { replace: true });
    } catch (registerError) {
      setError(getErrorMessage(t, registerError));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#e0e7ff,transparent_32%),radial-gradient(circle_at_top_right,#cffafe,transparent_28%),linear-gradient(to_bottom,#f8fafc,#eef2ff)] px-4 py-10 text-slate-900">
      <div className="mx-auto max-w-5xl">
        <Link to="/login" className="mb-5 inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-700 shadow-sm hover:bg-slate-50">
          <ArrowLeft size={16} />
          {t("register.backToLogin")}
        </Link>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <section className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-600 to-sky-500 p-7 text-white shadow-2xl shadow-indigo-200 md:p-9">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-black backdrop-blur">
              <GraduationCap size={16} />
              {t("register.badge")}
            </div>
            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-5xl">
              {t("register.title")}
            </h1>
            <p className="mt-5 text-lg leading-8 text-white/86">{t("register.subtitle")}</p>

            <div className="mt-8 grid gap-3">
              {Array.isArray(benefits) && benefits.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-3xl bg-white/12 p-4 text-sm font-semibold leading-6 ring-1 ring-white/10">
                  <CheckCircle2 className="mt-0.5 shrink-0" size={18} />
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-white bg-white/90 p-6 shadow-xl shadow-slate-200/70 ring-1 ring-slate-200/70 backdrop-blur md:p-8">
            <div className="mb-6 flex items-start gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-950">{t("register.formTitle")}</h2>
                <p className="mt-1 text-sm leading-6 text-slate-500">{t("register.formDesc")}</p>
              </div>
            </div>

            {error && (
              <div className="mb-5 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
                {error}
              </div>
            )}

            <label className="block">
              <span className="text-sm font-black text-slate-700">{t("fields.learnerGroup")}</span>
              <select
                value={learnerGroup}
                onChange={(event) => setLearnerGroup(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              >
                {groupOptions.map((group) => (
                  <option key={group.id} value={group.id}>{group.label}</option>
                ))}
              </select>
              <p className="mt-2 text-sm leading-6 text-slate-500">{t("register.groupHelp")}</p>
            </label>

            <button
              type="button"
              onClick={handleRegister}
              disabled={submitting}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 font-black text-white shadow-lg shadow-emerald-100 transition hover:-translate-y-0.5 hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              <span className="text-lg">G</span>
              {submitting ? t("register.creating") : t("register.googleButton")}
            </button>

            <div className="mt-6 rounded-3xl border border-amber-100 bg-amber-50 p-5 text-sm leading-6 text-amber-900">
              <div className="mb-2 flex items-center gap-2 font-black text-amber-950">
                <Sparkles size={16} />
                {t("register.staffNoticeTitle")}
              </div>
              {t("register.staffNoticeDesc")}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
