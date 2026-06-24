import React, { useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  KeyRound,
  LockKeyhole,
  Mail,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext.jsx";

function getErrorMessage(t, error) {
  const code = String(error?.code || error?.message || "");

  if (code.includes("auth/invalid-credential") || code.includes("auth/wrong-password") || code.includes("auth/user-not-found")) {
    return t("errors.invalidCredentials");
  }

  if (code.includes("account_disabled")) return t("errors.accountDisabled");
  if (code.includes("missing_role")) return t("errors.missingRole");
  if (code.includes("gmail_required")) return t("errors.gmailRequired");
  if (code.includes("role_conflict")) return t("errors.roleConflict");
  if (code.includes("popup-closed-by-user")) return t("errors.popupClosed");

  return error?.message || t("errors.generic");
}

export default function Login() {
  const { t } = useTranslation("auth");
  const navigate = useNavigate();
  const location = useLocation();
  const { loginWithEmail, loginWithGoogleStudent } = useAuth();

  const redirectTo = location.state?.from?.pathname || "/profile";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submittingEmail, setSubmittingEmail] = useState(false);
  const [submittingGoogle, setSubmittingGoogle] = useState(false);
  const [error, setError] = useState("");

  const loginNotes = useMemo(() => t("login.notes", { returnObjects: true }), [t]);

  const handleEmailLogin = async (event) => {
    event.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError(t("errors.requiredLogin"));
      return;
    }

    try {
      setSubmittingEmail(true);
      await loginWithEmail({ email, password });
      navigate(redirectTo, { replace: true });
    } catch (loginError) {
      setError(getErrorMessage(t, loginError));
    } finally {
      setSubmittingEmail(false);
    }
  };

  const handleGoogleStudent = async () => {
    setError("");

    try {
      setSubmittingGoogle(true);
      await loginWithGoogleStudent({ learnerGroup: "student" });
      navigate(redirectTo, { replace: true });
    } catch (loginError) {
      setError(getErrorMessage(t, loginError));
    } finally {
      setSubmittingGoogle(false);
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#e0e7ff,transparent_32%),radial-gradient(circle_at_top_right,#cffafe,transparent_28%),linear-gradient(to_bottom,#f8fafc,#eef2ff)] px-4 py-10 text-slate-900">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
        <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-indigo-950 to-sky-900 p-7 text-white shadow-2xl shadow-indigo-950/20 md:p-10">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="relative z-10 flex h-full flex-col justify-between gap-10">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black backdrop-blur">
                <ShieldCheck size={16} />
                {t("login.badge")}
              </div>
              <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
                {t("login.title")}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
                {t("login.subtitle")}
              </p>
            </div>

            <div className="grid gap-3">
              {Array.isArray(loginNotes) && loginNotes.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-3xl border border-white/10 bg-white/10 p-4 text-sm font-semibold leading-6 backdrop-blur">
                  <BookOpen className="mt-0.5 shrink-0 text-sky-200" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-white bg-white/90 p-6 shadow-xl shadow-slate-200/70 ring-1 ring-slate-200/70 backdrop-blur md:p-8">
          <div className="mb-6 flex items-start gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700">
              <LockKeyhole size={22} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-950">{t("login.formTitle")}</h2>
              <p className="mt-1 text-sm leading-6 text-slate-500">{t("login.formDesc")}</p>
            </div>
          </div>

          {error && (
            <div className="mb-5 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleEmailLogin} className="grid gap-4">
            <label className="block">
              <span className="text-sm font-black text-slate-700">{t("fields.email")}</span>
              <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-100">
                <Mail size={18} className="text-slate-400" />
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  autoComplete="email"
                  className="w-full bg-transparent text-slate-900 outline-none"
                  placeholder={t("fields.emailPlaceholder")}
                />
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-black text-slate-700">{t("fields.password")}</span>
              <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-100">
                <KeyRound size={18} className="text-slate-400" />
                <input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  autoComplete="current-password"
                  className="w-full bg-transparent text-slate-900 outline-none"
                  placeholder={t("fields.passwordPlaceholder")}
                />
              </div>
            </label>

            <button
              type="submit"
              disabled={submittingEmail}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 font-black text-white shadow-lg shadow-indigo-100 transition hover:-translate-y-0.5 hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              <UserRound size={18} />
              {submittingEmail ? t("login.signingIn") : t("login.emailButton")}
            </button>
          </form>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-xs font-black uppercase tracking-wide text-slate-400">{t("login.or")}</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-5">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-emerald-700 shadow-sm">
                <GraduationCap size={21} />
              </div>
              <div>
                <h3 className="font-black text-emerald-950">{t("login.studentTitle")}</h3>
                <p className="text-sm text-emerald-900/70">{t("login.studentDesc")}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleGoogleStudent}
              disabled={submittingGoogle}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 font-black text-slate-800 shadow-sm ring-1 ring-emerald-100 transition hover:-translate-y-0.5 hover:bg-slate-50 disabled:cursor-not-allowed disabled:bg-slate-100"
            >
              <span className="text-lg">G</span>
              {submittingGoogle ? t("login.signingIn") : t("login.googleStudentButton")}
            </button>
          </div>

          <div className="mt-6 rounded-3xl bg-slate-50 p-5 text-sm leading-6 text-slate-600">
            <b className="text-slate-900">{t("login.noStaffRegisterTitle")}</b>{" "}
            {t("login.noStaffRegisterDesc")}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Link to="/register" className="inline-flex items-center gap-2 font-black text-indigo-700 hover:text-indigo-900">
              {t("login.studentRegisterLink")}
              <ArrowRight size={16} />
            </Link>
            <Link to="/" className="font-bold text-slate-500 hover:text-slate-900">
              {t("login.backHome")}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
