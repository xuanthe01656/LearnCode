import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BookOpen, Brain, Code2, LogIn, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation("common");

  const currentLang = i18n.resolvedLanguage || i18n.language || "vi";

  const changeLanguage = () => {
    i18n.changeLanguage(currentLang === "vi" ? "en" : "vi");
  };

  const navItems = [
    { to: "/", label: t("home") },
    { to: "/test", label: t("thinkingTest") },
    { to: "/languages", label: t("courses") },
    { to: "/courses", label: t("roadmap") },
  ];

  const navClass = ({ isActive }) =>
    `block rounded-xl px-3 py-2 text-sm font-semibold transition ${
      isActive
        ? "bg-indigo-50 text-indigo-700"
        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-sky-500 text-white shadow">
            <Code2 size={24} />
          </div>

          <div>
            <div className="text-lg font-extrabold leading-5 text-slate-900">
              {t("appName")}
            </div>
            <div className="text-xs font-medium text-slate-500">
              {t("slogan")}
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={changeLanguage}
            className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-bold text-slate-600 hover:bg-slate-100"
          >
            {currentLang === "vi" ? "EN" : "VI"}
          </button>

          <Link
            to="/login"
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-100"
          >
            <LogIn size={16} />
            {t("login")}
          </Link>

          <Link
            to="/placement"
            className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-indigo-700"
          >
            <Brain size={16} />
            {t("startTest")}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 md:hidden"
          aria-label={t("openMenu")}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto max-w-7xl space-y-2 px-4 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={navClass}
              >
                {item.label}
              </NavLink>
            ))}

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={changeLanguage}
                className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700"
              >
                {currentLang === "vi" ? "English" : "Tiếng Việt"}
              </button>

              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700"
              >
                <LogIn size={16} />
                {t("login")}
              </Link>
            </div>

            <Link
              to="/placement"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white"
            >
              <BookOpen size={16} />
              {t("startTest")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}