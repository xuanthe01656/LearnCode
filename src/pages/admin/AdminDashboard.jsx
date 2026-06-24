import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { BookOpen, GraduationCap, ShieldCheck, UserCog, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { db } from "../../firebase.js";
import { USER_ROLES } from "../../constants/roles.js";

async function countUsersByRole(role) {
  const snap = await getDocs(query(collection(db, "users"), where("role", "==", role)));
  return snap.size;
}

export default function AdminDashboard() {
  const { t } = useTranslation("admin");
  const [stats, setStats] = useState({ admins: 0, teachers: 0, students: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    Promise.all([
      countUsersByRole(USER_ROLES.admin),
      countUsersByRole(USER_ROLES.teacher),
      countUsersByRole(USER_ROLES.student),
    ])
      .then(([admins, teachers, students]) => {
        if (mounted) setStats({ admins, teachers, students });
      })
      .catch((err) => {
        console.error("[admin] Failed to load dashboard", err);
        if (mounted) setError(t("errors.loadDashboard"));
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [t]);

  const cards = useMemo(
    () => [
      { label: t("dashboard.stats.admins"), value: stats.admins, icon: <ShieldCheck size={22} />, tone: "bg-indigo-50 text-indigo-700" },
      { label: t("dashboard.stats.teachers"), value: stats.teachers, icon: <UserCog size={22} />, tone: "bg-sky-50 text-sky-700" },
      { label: t("dashboard.stats.students"), value: stats.students, icon: <GraduationCap size={22} />, tone: "bg-emerald-50 text-emerald-700" },
    ],
    [stats, t]
  );

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#e0e7ff,transparent_32%),linear-gradient(to_bottom,#f8fafc,#eef2ff)] px-4 py-10 text-slate-900">
      <div className="mx-auto max-w-7xl">
        <section className="overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-2xl">
          <div className="relative p-7 md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#4f46e5,transparent_35%),radial-gradient(circle_at_bottom_right,#06b6d4,transparent_35%)] opacity-75" />
            <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black backdrop-blur">
                  <ShieldCheck size={16} />
                  {t("dashboard.badge")}
                </div>
                <h1 className="text-4xl font-black tracking-tight md:text-6xl">{t("dashboard.title")}</h1>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-white/78">{t("dashboard.subtitle")}</p>
              </div>
              <Link to="/admin/teachers" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 font-black text-slate-950 transition hover:bg-slate-100">
                <UserCog size={18} />
                {t("dashboard.manageTeachers")}
              </Link>
            </div>
          </div>
        </section>

        {error && <div className="mt-5 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-bold text-red-700">{error}</div>}

        <section className="mt-6 grid gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <div key={card.label} className="rounded-[2rem] border border-white bg-white/90 p-6 shadow-xl shadow-slate-200/70 ring-1 ring-slate-200/70 backdrop-blur">
              <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${card.tone}`}>{card.icon}</div>
              <div className="text-4xl font-black text-slate-950">{loading ? "..." : card.value}</div>
              <p className="mt-2 font-bold text-slate-500">{card.label}</p>
            </div>
          ))}
        </section>

        <section className="mt-6 grid gap-5 lg:grid-cols-2">
          <AdminActionCard to="/admin/teachers" icon={<UserCog size={22} />} title={t("dashboard.actions.teachers.title")} desc={t("dashboard.actions.teachers.desc")} />
          <AdminActionCard to="/teacher/course/python-foundation" icon={<BookOpen size={22} />} title={t("dashboard.actions.teacherGuide.title")} desc={t("dashboard.actions.teacherGuide.desc")} />
        </section>
      </div>
    </div>
  );
}

function AdminActionCard({ to, icon, title, desc }) {
  return (
    <Link to={to} className="rounded-[2rem] border border-white bg-white/90 p-6 shadow-xl shadow-slate-200/70 ring-1 ring-slate-200/70 backdrop-blur transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-2xl">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700">{icon}</div>
      <h2 className="text-2xl font-black text-slate-950">{title}</h2>
      <p className="mt-3 leading-7 text-slate-600">{desc}</p>
    </Link>
  );
}
