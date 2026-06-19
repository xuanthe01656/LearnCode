import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
  UserPlus,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext.jsx";
import { DEMO_ACCOUNT } from "../services/auth/localAuthProvider.js";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Login() {
  const { t } = useTranslation(["common", "auth"]);
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isAuthenticated, loading } = useAuth();

  const redirectTo = location.state?.from?.pathname || "/profile";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const benefits = useMemo(() => {
    const value = t("auth:login.benefits", { returnObjects: true });
    return Array.isArray(value) ? value : [];
  }, [t]);

  useEffect(() => {
    if (!loading && isAuthenticated) {
      navigate(redirectTo, { replace: true });
    }
  }, [isAuthenticated, loading, navigate, redirectTo]);

  const getErrorMessage = (authError) => {
    if (!authError?.code) return t("auth:errors.generic");
    return t(`auth:errors.${authError.code}`, {
      defaultValue: t("auth:errors.generic"),
    });
  };

  const validateForm = () => {
    if (!email.trim() || !password) {
      return t("auth:errors.required");
    }

    if (!isValidEmail(email.trim())) {
      return t("auth:errors.invalid_email");
    }

    return "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setSubmitting(true);
      setError("");
      await login({ email, password, remember });
      navigate(redirectTo, { replace: true });
    } catch (authError) {
      setError(getErrorMessage(authError));
    } finally {
      setSubmitting(false);
    }
  };

  const fillDemoAccount = () => {
    setEmail(DEMO_ACCOUNT.email);
    setPassword(DEMO_ACCOUNT.password);
    setRemember(true);
    setError("");
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_30%),radial-gradient(circle_at_top_right,#e0e7ff,transparent_32%),linear-gradient(to_bottom,#f8fafc,#eef2ff)] text-slate-900">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <section className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-indigo-950/20 md:p-10">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl" />
          <div className="absolute -bottom-28 left-10 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />

          <div className="relative z-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white/90 backdrop-blur">
              <Sparkles size={16} />
              {t("auth:login.badge")}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-sky-400 text-white shadow-xl">
                <Code2 size={28} />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-200">
                  {t("common:appName")}
                </p>
                <h1 className="mt-1 text-3xl font-black leading-tight md:text-5xl">
                  {t("auth:login.title")}
                </h1>
              </div>
            </div>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              {t("auth:login.subtitle")}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur"
                >
                  <ShieldCheck className="text-sky-200" size={20} />
                  <p className="mt-3 text-sm font-semibold leading-6 text-white/90">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
              <p className="font-black text-white">{t("auth:login.futureTitle")}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {t("auth:login.futureDesc")}
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-white bg-white/90 p-6 shadow-2xl shadow-slate-200/70 ring-1 ring-slate-200/70 backdrop-blur md:p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-black text-slate-950 md:text-3xl">
              {t("auth:login.formTitle")}
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              {t("auth:login.formSubtitle")}
            </p>
          </div>

          {error && (
            <div className="mb-5 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
              {error}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <label className="block">
              <span className="text-sm font-bold text-slate-700">
                {t("auth:login.email")}
              </span>
              <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-100">
                <Mail className="shrink-0 text-slate-400" size={20} />
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  autoComplete="email"
                  className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
                  placeholder={t("auth:login.emailPlaceholder")}
                />
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-bold text-slate-700">
                {t("auth:login.password")}
              </span>
              <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-100">
                <LockKeyhole className="shrink-0 text-slate-400" size={20} />
                <input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
                  placeholder={t("auth:login.passwordPlaceholder")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  className="rounded-xl p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                  aria-label={
                    showPassword
                      ? t("auth:login.hidePassword")
                      : t("auth:login.showPassword")
                  }
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </label>

            <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
              <label className="inline-flex items-center gap-2 font-semibold text-slate-600">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(event) => setRemember(event.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                />
                {t("auth:login.remember")}
              </label>
              <span className="font-medium text-slate-400">
                {t("auth:login.forgotHint")}
              </span>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-sky-500 px-6 py-4 font-black text-white shadow-xl shadow-indigo-200 transition hover:-translate-y-0.5 hover:from-indigo-700 hover:to-sky-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? t("auth:login.submitting") : t("auth:login.submit")}
              <ArrowRight size={18} />
            </button>
          </form>

          <div className="mt-5 rounded-3xl border border-indigo-100 bg-indigo-50/80 p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-black text-indigo-950">
                  {t("auth:login.demoTitle")}
                </p>
                <p className="mt-1 text-xs text-indigo-800">
                  {DEMO_ACCOUNT.email} · {DEMO_ACCOUNT.password}
                </p>
              </div>
              <button
                type="button"
                onClick={fillDemoAccount}
                className="rounded-2xl bg-white px-4 py-2 text-sm font-black text-indigo-700 shadow-sm ring-1 ring-indigo-100 transition hover:-translate-y-0.5"
              >
                {t("auth:login.useDemo")}
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 rounded-3xl bg-slate-50 p-4 text-center sm:flex-row sm:items-center sm:justify-center">
            <span className="text-sm font-semibold text-slate-500">
              {t("auth:login.noAccount")}
            </span>
            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-2 text-sm font-black text-indigo-700 hover:text-indigo-900"
            >
              <UserPlus size={16} />
              {t("auth:login.createAccount")}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
