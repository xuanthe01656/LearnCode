import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  Brain,
  CalendarDays,
  LogOut,
  Mail,
  PenLine,
  Save,
  ShieldCheck,
  UserRound,
  Users,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext.jsx";

function formatDate(value, language) {
  if (!value) return "-";

  return new Date(value).toLocaleDateString(language === "en" ? "en-US" : "vi-VN", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export default function Profile() {
  const { t, i18n } = useTranslation(["common", "auth"]);
  const navigate = useNavigate();
  const { user, logout, updateProfile } = useAuth();

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user?.name || "");
  const [learnerGroup, setLearnerGroup] = useState(user?.learnerGroup || "beginner");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const groupOptions = useMemo(
    () => [
      { id: "student", label: t("auth:groups.student") },
      { id: "beginner", label: t("auth:groups.beginner") },
      { id: "working-adult", label: t("auth:groups.workingAdult") },
      { id: "career-switcher", label: t("auth:groups.careerSwitcher") },
    ],
    [t]
  );

  const futureItems = useMemo(() => {
    const value = t("auth:profile.futureItems", { returnObjects: true });
    return Array.isArray(value) ? value : [];
  }, [t]);

  const currentGroupLabel =
    groupOptions.find((group) => group.id === user?.learnerGroup)?.label ||
    t("auth:groups.beginner");

  const handleLogout = async () => {
    await logout();
    navigate("/", { replace: true });
  };

  const handleSave = async () => {
    if (!name.trim()) return;

    try {
      setSaving(true);
      const updatedUser = await updateProfile({
        name: name.trim(),
        learnerGroup,
      });
      setName(updatedUser.name);
      setLearnerGroup(updatedUser.learnerGroup);
      setMessage(t("auth:profile.saved"));
      setEditing(false);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#e0e7ff,transparent_32%),radial-gradient(circle_at_top_right,#cffafe,transparent_28%),linear-gradient(to_bottom,#f8fafc,#eef2ff)] text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-indigo-950 to-sky-900 p-6 text-white shadow-2xl shadow-indigo-950/20 md:p-8">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-white/15 text-white ring-1 ring-white/20">
                <UserRound size={30} />
              </div>
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur">
                  <BadgeCheck size={16} />
                  {t("auth:profile.badge")}
                </div>
                <h1 className="text-3xl font-black leading-tight md:text-5xl">
                  {user?.name}
                </h1>
                <p className="mt-3 max-w-2xl text-white/75">
                  {t("auth:profile.subtitle")}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 font-black text-white transition hover:bg-white/20"
            >
              <LogOut size={18} />
              {t("auth:nav.logout")}
            </button>
          </div>
        </section>

        {message && (
          <div className="mt-5 rounded-2xl border border-green-100 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
            {message}
          </div>
        )}

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <section className="rounded-[2rem] border border-white bg-white/90 p-6 shadow-xl shadow-slate-200/70 ring-1 ring-slate-200/70 backdrop-blur md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-black text-slate-950">
                  {t("auth:profile.accountInfo")}
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  {t("auth:profile.accountDesc")}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setEditing((value) => !value);
                  setMessage("");
                }}
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50"
              >
                <PenLine size={16} />
                {editing ? t("auth:profile.cancel") : t("auth:profile.edit")}
              </button>
            </div>

            {!editing ? (
              <div className="mt-6 grid gap-4">
                <div className="rounded-3xl bg-slate-50 p-4">
                  <div className="flex items-center gap-3 text-sm font-bold text-slate-500">
                    <UserRound size={18} />
                    {t("auth:profile.name")}
                  </div>
                  <p className="mt-2 text-lg font-black text-slate-950">{user?.name}</p>
                </div>

                <div className="rounded-3xl bg-slate-50 p-4">
                  <div className="flex items-center gap-3 text-sm font-bold text-slate-500">
                    <Mail size={18} />
                    {t("auth:profile.email")}
                  </div>
                  <p className="mt-2 text-lg font-black text-slate-950">{user?.email}</p>
                </div>

                <div className="rounded-3xl bg-slate-50 p-4">
                  <div className="flex items-center gap-3 text-sm font-bold text-slate-500">
                    <Users size={18} />
                    {t("auth:profile.learnerGroup")}
                  </div>
                  <p className="mt-2 text-lg font-black text-slate-950">
                    {currentGroupLabel}
                  </p>
                </div>

                <div className="rounded-3xl bg-slate-50 p-4">
                  <div className="flex items-center gap-3 text-sm font-bold text-slate-500">
                    <CalendarDays size={18} />
                    {t("auth:profile.createdAt")}
                  </div>
                  <p className="mt-2 text-lg font-black text-slate-950">
                    {formatDate(user?.createdAt, i18n.resolvedLanguage)}
                  </p>
                </div>
              </div>
            ) : (
              <div className="mt-6 grid gap-5">
                <label className="block">
                  <span className="text-sm font-bold text-slate-700">
                    {t("auth:profile.name")}
                  </span>
                  <input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-bold text-slate-700">
                    {t("auth:profile.learnerGroup")}
                  </span>
                  <select
                    value={learnerGroup}
                    onChange={(event) => setLearnerGroup(event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  >
                    {groupOptions.map((group) => (
                      <option key={group.id} value={group.id}>
                        {group.label}
                      </option>
                    ))}
                  </select>
                </label>

                <button
                  type="button"
                  onClick={handleSave}
                  disabled={saving || !name.trim()}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 font-black text-white shadow-lg shadow-indigo-100 transition hover:-translate-y-0.5 hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                >
                  <Save size={18} />
                  {saving ? t("auth:profile.saving") : t("auth:profile.save")}
                </button>
              </div>
            )}
          </section>

          <section className="grid gap-6">
            <div className="rounded-[2rem] border border-white bg-white/90 p-6 shadow-xl shadow-slate-200/70 ring-1 ring-slate-200/70 backdrop-blur md:p-8">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-black text-indigo-700">
                <ShieldCheck size={16} />
                {t("auth:profile.localModeBadge")}
              </div>
              <h2 className="text-2xl font-black text-slate-950">
                {t("auth:profile.localModeTitle")}
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                {t("auth:profile.localModeDesc")}
              </p>

              <div className="mt-5 grid gap-3">
                {futureItems.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                    <BadgeCheck className="mt-0.5 shrink-0 text-green-600" size={18} />
                    <span className="text-sm font-semibold leading-6 text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-600 to-sky-500 p-6 text-white shadow-xl shadow-indigo-200 md:p-8">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-black backdrop-blur">
                <Brain size={16} />
                {t("auth:profile.nextActionBadge")}
              </div>
              <h2 className="text-2xl font-black md:text-3xl">
                {t("auth:profile.nextActionTitle")}
              </h2>
              <p className="mt-3 text-white/85">{t("auth:profile.nextActionDesc")}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/test"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 font-black text-indigo-700 shadow transition hover:bg-slate-100"
                >
                  {t("common:startTest")}
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/placement"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-5 py-3 font-black text-white backdrop-blur transition hover:bg-white/20"
                >
                  {t("common:placementTest", { defaultValue: t("common:startTest") })}
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
