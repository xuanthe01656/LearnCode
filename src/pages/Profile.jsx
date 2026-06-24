import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BadgeCheck,
  BookOpen,
  CalendarDays,
  GraduationCap,
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
import { USER_ROLES } from "../constants/roles.js";

function formatDate(value, locale) {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return date.toLocaleDateString(locale === "en" ? "en-US" : "vi-VN");
}

export default function Profile() {
  const { t, i18n } = useTranslation("auth");
  const navigate = useNavigate();
  const { user, updateProfile, logout, isAdmin, isTeacher, isStudent } = useAuth();

  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: user?.name || "",
    phone: user?.phone || "",
    learnerGroup: user?.learnerGroup || "student",
    grade: user?.grade || "",
    school: user?.school || "",
    bio: user?.bio || "",
  });

  const groupOptions = useMemo(
    () => [
      { id: "student", label: t("groups.student") },
      { id: "beginner", label: t("groups.beginner") },
      { id: "working-adult", label: t("groups.workingAdult") },
      { id: "career-switcher", label: t("groups.careerSwitcher") },
    ],
    [t]
  );

  const roleLabel = t(`roles.${user?.role || USER_ROLES.student}`);
  const currentGroupLabel = groupOptions.find((item) => item.id === user?.learnerGroup)?.label || "-";

  const setField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setMessage("");
    setError("");
  };

  const handleSave = async () => {
    if (!form.name.trim()) {
      setError(t("errors.nameRequired"));
      return;
    }

    try {
      setSaving(true);
      setError("");
      const updatedUser = await updateProfile(form);
      setForm({
        name: updatedUser?.name || "",
        phone: updatedUser?.phone || "",
        learnerGroup: updatedUser?.learnerGroup || "student",
        grade: updatedUser?.grade || "",
        school: updatedUser?.school || "",
        bio: updatedUser?.bio || "",
      });
      setMessage(t("profile.saved"));
      setEditing(false);
    } catch (saveError) {
      setError(saveError?.message || t("errors.generic"));
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate("/", { replace: true });
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#e0e7ff,transparent_32%),radial-gradient(circle_at_top_right,#cffafe,transparent_28%),linear-gradient(to_bottom,#f8fafc,#eef2ff)] text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-indigo-950 to-sky-900 p-6 text-white shadow-2xl shadow-indigo-950/20 md:p-8">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-3xl bg-white/15 text-white ring-1 ring-white/20">
                {user?.photoURL ? (
                  <img src={user.photoURL} alt={user.name} className="h-full w-full object-cover" />
                ) : (
                  <UserRound size={30} />
                )}
              </div>
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black backdrop-blur">
                  <BadgeCheck size={16} />
                  {roleLabel}
                </div>
                <h1 className="text-3xl font-black leading-tight md:text-5xl">{user?.name}</h1>
                <p className="mt-3 max-w-2xl text-white/75">{t("profile.subtitle")}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 font-black text-white transition hover:bg-white/20"
            >
              <LogOut size={18} />
              {t("nav.logout")}
            </button>
          </div>
        </section>

        {message && (
          <div className="mt-5 rounded-2xl border border-green-100 bg-green-50 px-4 py-3 text-sm font-bold text-green-700">
            {message}
          </div>
        )}
        {error && (
          <div className="mt-5 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
            {error}
          </div>
        )}

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <section className="rounded-[2rem] border border-white bg-white/90 p-6 shadow-xl shadow-slate-200/70 ring-1 ring-slate-200/70 backdrop-blur md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-black text-slate-950">{t("profile.accountInfo")}</h2>
                <p className="mt-2 text-sm text-slate-500">{t("profile.accountDesc")}</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setEditing((value) => !value);
                  setMessage("");
                  setError("");
                }}
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50"
              >
                <PenLine size={16} />
                {editing ? t("profile.cancel") : t("profile.edit")}
              </button>
            </div>

            {!editing ? (
              <div className="mt-6 grid gap-4">
                <InfoRow icon={<UserRound size={18} />} label={t("profile.name")} value={user?.name} />
                <InfoRow icon={<Mail size={18} />} label={t("profile.email")} value={user?.email} />
                <InfoRow icon={<ShieldCheck size={18} />} label={t("profile.role")} value={roleLabel} />
                {isStudent && <InfoRow icon={<Users size={18} />} label={t("profile.learnerGroup")} value={currentGroupLabel} />}
                <InfoRow icon={<CalendarDays size={18} />} label={t("profile.createdAt")} value={formatDate(user?.createdAt, i18n.resolvedLanguage)} />
              </div>
            ) : (
              <div className="mt-6 grid gap-5">
                <TextField label={t("profile.name")} value={form.name} onChange={(value) => setField("name", value)} />
                <TextField label={t("profile.phone")} value={form.phone} onChange={(value) => setField("phone", value)} />

                {isStudent ? (
                  <>
                    <label className="block">
                      <span className="text-sm font-black text-slate-700">{t("profile.learnerGroup")}</span>
                      <select
                        value={form.learnerGroup}
                        onChange={(event) => setField("learnerGroup", event.target.value)}
                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                      >
                        {groupOptions.map((group) => <option key={group.id} value={group.id}>{group.label}</option>)}
                      </select>
                    </label>
                    <TextField label={t("profile.grade")} value={form.grade} onChange={(value) => setField("grade", value)} />
                    <TextField label={t("profile.school")} value={form.school} onChange={(value) => setField("school", value)} />
                  </>
                ) : (
                  <label className="block">
                    <span className="text-sm font-black text-slate-700">{t("profile.bio")}</span>
                    <textarea
                      value={form.bio}
                      onChange={(event) => setField("bio", event.target.value)}
                      rows={4}
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                    />
                  </label>
                )}

                <button
                  type="button"
                  onClick={handleSave}
                  disabled={saving || !form.name.trim()}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 font-black text-white shadow-lg shadow-indigo-100 transition hover:-translate-y-0.5 hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                >
                  <Save size={18} />
                  {saving ? t("profile.saving") : t("profile.save")}
                </button>
              </div>
            )}
          </section>

          <section className="grid gap-6">
            <div className="rounded-[2rem] border border-white bg-white/90 p-6 shadow-xl shadow-slate-200/70 ring-1 ring-slate-200/70 backdrop-blur md:p-8">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-black text-indigo-700">
                <ShieldCheck size={16} />
                {t("profile.roleAccessBadge")}
              </div>
              <h2 className="text-2xl font-black text-slate-950">{t("profile.roleAccessTitle")}</h2>
              <p className="mt-3 leading-7 text-slate-600">{t(`profile.roleAccessDesc.${user?.role || USER_ROLES.student}`)}</p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {isAdmin && <ActionCard to="/admin" icon={<ShieldCheck size={18} />} title={t("profile.adminPanel")} desc={t("profile.adminPanelDesc")} />}
                {(isAdmin || isTeacher) && <ActionCard to="/teacher" icon={<BookOpen size={18} />} title={t("profile.teacherGuide")} desc={t("profile.teacherGuideDesc")} />}
                {isStudent && <ActionCard to="/course/python-foundation" icon={<GraduationCap size={18} />} title={t("profile.startLearning")} desc={t("profile.startLearningDesc")} />}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="rounded-3xl bg-slate-50 p-4">
      <div className="flex items-center gap-3 text-sm font-bold text-slate-500">
        {icon}
        {label}
      </div>
      <p className="mt-2 break-words text-lg font-black text-slate-950">{value || "-"}</p>
    </div>
  );
}

function TextField({ label, value, onChange }) {
  return (
    <label className="block">
      <span className="text-sm font-black text-slate-700">{label}</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
      />
    </label>
  );
}

function ActionCard({ to, icon, title, desc }) {
  return (
    <Link to={to} className="rounded-3xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-50">
      <div className="mb-3 inline-flex rounded-2xl bg-white p-3 text-indigo-700 shadow-sm">
        {icon}
      </div>
      <h3 className="font-black text-slate-950">{title}</h3>
      <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
    </Link>
  );
}
