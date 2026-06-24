import React from "react";
import { Link } from "react-router-dom";
import { ShieldAlert, ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Unauthorized() {
  const { t } = useTranslation("auth");

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#e0e7ff,transparent_32%),linear-gradient(to_bottom,#f8fafc,#eef2ff)] px-4 py-12 text-slate-900">
      <section className="mx-auto max-w-2xl rounded-[2rem] border border-white bg-white/90 p-8 text-center shadow-xl shadow-slate-200/70 ring-1 ring-slate-200/70 backdrop-blur">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-red-50 text-red-600">
          <ShieldAlert size={30} />
        </div>
        <h1 className="text-3xl font-black text-slate-950">{t("unauthorized.title")}</h1>
        <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600">{t("unauthorized.desc")}</p>
        <Link
          to="/"
          className="mt-7 inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 font-black text-white shadow-lg shadow-indigo-100 transition hover:-translate-y-0.5 hover:bg-indigo-700"
        >
          <ArrowLeft size={18} />
          {t("unauthorized.backHome")}
        </Link>
      </section>
    </div>
  );
}
