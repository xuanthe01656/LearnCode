import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  Clipboard,
  KeyRound,
  Mail,
  PlusCircle,
  RefreshCcw,
  ShieldCheck,
  UserCog,
} from "lucide-react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { useTranslation } from "react-i18next";
import { db } from "../../firebase.js";
import { useAuth } from "../../context/AuthContext.jsx";
import { USER_ROLES } from "../../constants/roles.js";

const CREATE_TEACHER_ENDPOINT = "/api/admin/create-teacher";

function normalizeDate(value, locale) {
  if (!value) return "-";
  const date = typeof value.toDate === "function" ? value.toDate() : new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return date.toLocaleDateString(locale === "en" ? "en-US" : "vi-VN");
}

function generatePassword() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";
  const symbols = "!@#$%";
  let value = "Tch@";
  const bytes = new Uint8Array(10);
  crypto.getRandomValues(bytes);
  bytes.forEach((byte) => {
    value += alphabet[byte % alphabet.length];
  });
  value += symbols[bytes[0] % symbols.length];
  return value;
}

async function postJson(endpoint, body, token) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  let payload;
  try {
    payload = await response.json();
  } catch {
    payload = { error: "Invalid server response" };
  }

  if (!response.ok) {
    const error = new Error(payload?.error || "Request failed");
    error.details = payload;
    throw error;
  }

  return payload;
}

export default function AdminTeachers() {
  const { t, i18n } = useTranslation("admin");
  const { getIdToken } = useAuth();
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: generatePassword(),
  });

  const teacherCount = teachers.length;
  const activeCount = useMemo(() => teachers.filter((teacher) => teacher.status === "active").length, [teachers]);

  const loadTeachers = async () => {
    setLoading(true);
    setError("");

    try {
      const q = query(collection(db, "users"), where("role", "==", USER_ROLES.teacher), orderBy("createdAt", "desc"));
      const snap = await getDocs(q);
      setTeachers(snap.docs.map((item) => ({ id: item.id, ...item.data() })));
    } catch (loadError) {
      console.error("[admin] Could not load teachers", loadError);
      setError(t("errors.loadTeachers"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTeachers();
  }, []);

  const setField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setError("");
    setSuccess(null);
  };

  const handleCreateTeacher = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess(null);

    if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
      setError(t("errors.requiredTeacherFields"));
      return;
    }

    try {
      setSaving(true);
      const token = await getIdToken(true);
      const payload = await postJson(CREATE_TEACHER_ENDPOINT, {
        name: form.name.trim(),
        email: form.email.trim(),
        password: form.password,
      }, token);

      setSuccess({ ...payload.user, password: form.password });
      setForm({ name: "", email: "", password: generatePassword() });
      await loadTeachers();
    } catch (createError) {
      console.error("[admin] Could not create teacher", createError);
      setError(createError?.message || t("errors.createTeacher"));
    } finally {
      setSaving(false);
    }
  };

  const copyCredentials = async () => {
    if (!success) return;
    const text = `${t("teachers.credentials.email")}: ${success.email}\n${t("teachers.credentials.password")}: ${success.password}`;
    await navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#e0e7ff,transparent_32%),linear-gradient(to_bottom,#f8fafc,#eef2ff)] px-4 py-10 text-slate-900">
      <div className="mx-auto max-w-7xl">
        <Link to="/admin" className="mb-5 inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-700 shadow-sm hover:bg-slate-50">
          <ArrowLeft size={16} />
          {t("teachers.backToAdmin")}
        </Link>

        <section className="overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-2xl">
          <div className="relative p-7 md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#4f46e5,transparent_35%),radial-gradient(circle_at_bottom_right,#06b6d4,transparent_35%)] opacity-75" />
            <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black backdrop-blur">
                  <UserCog size={16} />
                  {t("teachers.badge")}
                </div>
                <h1 className="text-4xl font-black tracking-tight md:text-6xl">{t("teachers.title")}</h1>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-white/78">{t("teachers.subtitle")}</p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="rounded-3xl bg-white/10 p-4 ring-1 ring-white/10">
                  <div className="text-3xl font-black">{teacherCount}</div>
                  <div className="text-xs text-white/70">{t("teachers.total")}</div>
                </div>
                <div className="rounded-3xl bg-white/10 p-4 ring-1 ring-white/10">
                  <div className="text-3xl font-black">{activeCount}</div>
                  <div className="text-xs text-white/70">{t("teachers.active")}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <section className="rounded-[2rem] border border-white bg-white/90 p-6 shadow-xl shadow-slate-200/70 ring-1 ring-slate-200/70 backdrop-blur md:p-8">
            <div className="mb-6 flex items-start gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700">
                <PlusCircle size={22} />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-950">{t("teachers.createTitle")}</h2>
                <p className="mt-1 text-sm leading-6 text-slate-500">{t("teachers.createDesc")}</p>
              </div>
            </div>

            {error && <div className="mb-5 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-bold text-red-700">{error}</div>}
            {success && (
              <div className="mb-5 rounded-2xl border border-green-100 bg-green-50 p-4 text-sm text-green-800">
                <div className="mb-2 flex items-center gap-2 font-black text-green-900">
                  <CheckCircle2 size={18} />
                  {t("teachers.createdSuccess")}
                </div>
                <div className="grid gap-1 font-mono text-xs">
                  <div>{t("teachers.credentials.email")}: {success.email}</div>
                  <div>{t("teachers.credentials.password")}: {success.password}</div>
                </div>
                <button type="button" onClick={copyCredentials} className="mt-3 inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 font-black text-green-800 shadow-sm ring-1 ring-green-100">
                  <Clipboard size={15} />
                  {t("teachers.copyCredentials")}
                </button>
              </div>
            )}

            <form onSubmit={handleCreateTeacher} className="grid gap-4">
              <TextField icon={<UserCog size={18} />} label={t("teachers.fields.name")} value={form.name} onChange={(value) => setField("name", value)} placeholder={t("teachers.fields.namePlaceholder")} />
              <TextField icon={<Mail size={18} />} label={t("teachers.fields.email")} type="email" value={form.email} onChange={(value) => setField("email", value)} placeholder={t("teachers.fields.emailPlaceholder")} />
              <TextField icon={<KeyRound size={18} />} label={t("teachers.fields.password")} value={form.password} onChange={(value) => setField("password", value)} placeholder={t("teachers.fields.passwordPlaceholder")} />

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setField("password", generatePassword())}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 font-black text-slate-700 shadow-sm transition hover:bg-slate-50"
                >
                  <RefreshCcw size={17} />
                  {t("teachers.generatePassword")}
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 font-black text-white shadow-lg shadow-indigo-100 transition hover:-translate-y-0.5 hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                >
                  <ShieldCheck size={18} />
                  {saving ? t("teachers.creating") : t("teachers.createButton")}
                </button>
              </div>
            </form>
          </section>

          <section className="rounded-[2rem] border border-white bg-white/90 p-6 shadow-xl shadow-slate-200/70 ring-1 ring-slate-200/70 backdrop-blur md:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-black text-slate-950">{t("teachers.listTitle")}</h2>
                <p className="mt-1 text-sm text-slate-500">{t("teachers.listDesc")}</p>
              </div>
              <button type="button" onClick={loadTeachers} className="rounded-2xl border border-slate-200 bg-white p-3 text-slate-700 shadow-sm hover:bg-slate-50" aria-label={t("teachers.refresh")}>
                <RefreshCcw size={18} />
              </button>
            </div>

            {loading ? (
              <div className="rounded-3xl bg-slate-50 p-6 text-center font-bold text-slate-500">{t("loading")}</div>
            ) : teachers.length === 0 ? (
              <div className="rounded-3xl bg-slate-50 p-6 text-center font-bold text-slate-500">{t("teachers.empty")}</div>
            ) : (
              <div className="grid gap-3">
                {teachers.map((teacher) => (
                  <article key={teacher.id} className="rounded-3xl border border-slate-100 bg-slate-50 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-black text-slate-950">{teacher.name || teacher.email}</h3>
                        <p className="mt-1 text-sm font-semibold text-slate-500">{teacher.email}</p>
                      </div>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-emerald-700 ring-1 ring-emerald-100">
                        {t(`status.${teacher.status || "active"}`)}
                      </span>
                    </div>
                    <div className="mt-3 text-xs font-semibold text-slate-500">
                      {t("teachers.createdAt")}: {normalizeDate(teacher.createdAt, i18n.resolvedLanguage)}
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

function TextField({ icon, label, value, onChange, placeholder, type = "text" }) {
  return (
    <label className="block">
      <span className="text-sm font-black text-slate-700">{label}</span>
      <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-100">
        <span className="text-slate-400">{icon}</span>
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          type={type}
          className="w-full bg-transparent text-slate-900 outline-none"
          placeholder={placeholder}
        />
      </div>
    </label>
  );
}
