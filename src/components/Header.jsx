import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  BookOpen,
  Brain,
  Code2,
  Compass,
  GraduationCap,
  LogIn,
  LogOut,
  Menu,
  UserRound,
  X,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext.jsx";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation(["common", "auth", "courses"]);
  const { user, isAuthenticated, loading, logout } = useAuth();
  const navigate = useNavigate();

  const currentLang = i18n.resolvedLanguage || i18n.language || "vi";

  const changeLanguage = () => {
    i18n.changeLanguage(currentLang === "vi" ? "en" : "vi");
  };

  const closeMenu = () => setOpen(false);

  const handleLogout = async () => {
    await logout();
    closeMenu();
    navigate("/");
  };

  const navItems = [
    { to: "/", label: t("common:home") },
    { to: "/test", label: t("common:thinkingTest") },
    { to: "/languages", label: t("courses:nav.languages"), icon: GraduationCap },
    { to: "/courses", label: t("courses:nav.courses"), icon: BookOpen },
    { to: "/roadmap", label: t("courses:nav.roadmap"), icon: Compass },
  ];

  const navClass = ({ isActive }) =>
    `block rounded-xl px-3 py-2 text-sm font-semibold transition ${
      isActive
        ? "bg-indigo-50 text-indigo-700"
        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
    }`;

  const firstName = user?.name?.trim()?.split(/\s+/)?.[0] || t("auth:nav.account");

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-sky-500 text-white shadow">
            <Code2 size={24} />
          </div>

          <div>
            <div className="text-lg font-extrabold leading-5 text-slate-900">
              {t("common:appName")}
            </div>
            <div className="text-xs font-medium text-slate-500">
              {t("common:slogan")}
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={changeLanguage}
            className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-bold text-slate-600 hover:bg-slate-100"
          >
            {currentLang === "vi" ? "EN" : "VI"}
          </button>

          {!loading && isAuthenticated ? (
            <>
              <Link
                to="/profile"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-100"
              >
                <UserRound size={16} />
                {firstName}
              </Link>

              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-100"
              >
                <LogOut size={16} />
                {t("auth:nav.logout")}
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-100"
            >
              <LogIn size={16} />
              {t("common:login")}
            </Link>
          )}

          <Link
            to="/placement"
            className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-indigo-700"
          >
            <Brain size={16} />
            {t("common:startTest")}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 lg:hidden"
          aria-label={t("common:openMenu")}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto max-w-7xl space-y-2 px-4 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeMenu}
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

              {!loading && isAuthenticated ? (
                <Link
                  to="/profile"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700"
                >
                  <UserRound size={16} />
                  {firstName}
                </Link>
              ) : (
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700"
                >
                  <LogIn size={16} />
                  {t("common:login")}
                </Link>
              )}
            </div>

            {!loading && isAuthenticated && (
              <button
                type="button"
                onClick={handleLogout}
                className="flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700"
              >
                <LogOut size={16} />
                {t("auth:nav.logout")}
              </button>
            )}

            <Link
              to="/placement"
              onClick={closeMenu}
              className="mt-3 flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white"
            >
              <BookOpen size={16} />
              {t("common:startTest")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
