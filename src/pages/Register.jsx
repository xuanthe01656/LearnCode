import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  UserRound,
  Users,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext.jsx";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getPasswordScore(password) {
  let score = 0;
  if (password.length >= 8) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/[a-z]/.test(password)) score += 1;
  if (/\d/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;
  return score;
}

export default function Register() {
  const { t } = useTranslation(["common", "auth"]);
  const navigate = useNavigate();
  const { register, isAuthenticated, loading } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [learnerGroup, setLearnerGroup] = useState("beginner");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const passwordScore = getPasswordScore(password);

  const groupOptions = useMemo(
    () => [
      { id: "student", label: t("auth:groups.student") },
      { id: "beginner", label: t("auth:groups.beginner") },
      { id: "working-adult", label: t("auth:groups.workingAdult") },
      { id: "career-switcher", label: t("auth:groups.careerSwitcher") },
    ],
    [t]
  );

  const benefits = useMemo(() => {
    const value = t("auth:register.benefits", { returnObjects: true });
    return Array.isArray(value) ? value : [];
  }, [t]);

  useEffect(() => {
    if (!loading && isAuthenticated) {
      navigate("/profile", { replace: true });
    }
  }, [isAuthenticated, loading, navigate]);

  const getErrorMessage = (authError) => {
    if (!authError?.code) return t("auth:errors.generic");
    return t(`auth:errors.${authError.code}`, {
      defaultValue: t("auth:errors.generic"),
    });
  };

  const validateForm = () => {
    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      return t("auth:errors.required");
    }

    if (!isValidEmail(email.trim())) {
      return t("auth:errors.invalid_email");
    }

    if (password.length < 8) {
      return t("auth:errors.password_short");
    }

    if (password !== confirmPassword) {
      return t("auth:errors.password_mismatch");
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
      await register({ name, email, password, learnerGroup });
      navigate("/profile", { replace: true });
    } catch (authError) {
      setError(getErrorMessage(authError));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#e0e7ff,transparent_32%),radial-gradient(circle_at_top_right,#cffafe,transparent_28%),linear-gradient(to_bottom,#f8fafc,#eef2ff)] text-slate-900">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <section className="rounded-[2rem] border border-white bg-white/90 p-6 shadow-2xl shadow-slate-200/70 ring-1 ring-slate-200/70 backdrop-blur md:p-8">
          <div className="mb-6">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-black text-indigo-700">
              <UserRound size={16} />
              {t("auth:register.badge")}
            </div>
            <h1 className="text-2xl font-black text-slate-950 md:text-4xl">
              {t("auth:register.title")}
            </h1>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              {t("auth:register.subtitle")}
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
                {t("auth:register.name")}
              </span>
              <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-100">
                <UserRound className="shrink-0 text-slate-400" size={20} />
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  type="text"
                  autoComplete="name"
                  className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
                  placeholder={t("auth:register.namePlaceholder")}
                />
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-bold text-slate-700">
                {t("auth:register.email")}
              </span>
              <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-100">
                <Mail className="shrink-0 text-slate-400" size={20} />
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  autoComplete="email"
                  className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
                  placeholder={t("auth:register.emailPlaceholder")}
                />
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-bold text-slate-700">
                {t("auth:register.learnerGroup")}
              </span>
              <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-100">
                <Users className="shrink-0 text-slate-400" size={20} />
                <select
                  value={learnerGroup}
                  onChange={(event) => setLearnerGroup(event.target.value)}
                  className="w-full bg-transparent text-slate-900 outline-none"
                >
                  {groupOptions.map((group) => (
                    <option key={group.id} value={group.id}>
                      {group.label}
                    </option>
                  ))}
                </select>
              </div>
            </label>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-bold text-slate-700">
                  {t("auth:register.password")}
                </span>
                <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-100">
                  <LockKeyhole className="shrink-0 text-slate-400" size={20} />
                  <input
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
                    placeholder={t("auth:register.passwordPlaceholder")}
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

              <label className="block">
                <span className="text-sm font-bold text-slate-700">
                  {t("auth:register.confirmPassword")}
                </span>
                <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-100">
                  <LockKeyhole className="shrink-0 text-slate-400" size={20} />
                  <input
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
                    placeholder={t("auth:register.confirmPasswordPlaceholder")}
                  />
                </div>
              </label>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between text-xs font-bold text-slate-500">
                <span>{t("auth:register.passwordStrength")}</span>
                <span>{t(`auth:register.strength.${Math.min(passwordScore, 4)}`)}</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {Array.from({ length: 4 }, (_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full ${
                      passwordScore > index ? "bg-indigo-600" : "bg-slate-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-sky-500 px-6 py-4 font-black text-white shadow-xl shadow-indigo-200 transition hover:-translate-y-0.5 hover:from-indigo-700 hover:to-sky-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting
                ? t("auth:register.submitting")
                : t("auth:register.submit")}
              <ArrowRight size={18} />
            </button>
          </form>

          <div className="mt-6 rounded-3xl bg-slate-50 p-4 text-center text-sm font-semibold text-slate-500">
            {t("auth:register.haveAccount")} {" "}
            <Link to="/login" className="font-black text-indigo-700 hover:text-indigo-900">
              {t("auth:register.signIn")}
            </Link>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-indigo-950 to-sky-900 p-8 text-white shadow-2xl shadow-indigo-950/20 md:p-10">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-3xl font-black leading-tight md:text-5xl">
              {t("auth:register.sideTitle")}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/80">
              {t("auth:register.sideDesc")}
            </p>

            <div className="mt-8 grid gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur"
                >
                  <CheckCircle2 className="mt-0.5 shrink-0 text-green-300" size={20} />
                  <span className="text-sm font-semibold leading-6 text-white/90">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
