import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  BookOpen,
  Brain,
  ChevronDown,
  ClipboardCheck,
  Code2,
  GraduationCap,
  Home as HomeIcon,
  Languages,
  LayoutDashboard,
  LogIn,
  LogOut,
  Menu,
  Route,
  ShieldCheck,
  Sparkles,
  UserRound,
  UsersRound,
  X,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext.jsx";
import { USER_ROLES } from "../constants/roles.js";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function getInitials(name = "") {
  const cleaned = String(name || "").trim();
  if (!cleaned) return "U";
  const parts = cleaned.split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0] || ""}${parts[parts.length - 1][0] || ""}`.toUpperCase();
}

function isActivePath(currentPath, item) {
  if (item.exact) return currentPath === item.to;
  return currentPath === item.to || currentPath.startsWith(`${item.to}/`);
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const accountRef = useRef(null);
  const { t, i18n } = useTranslation(["common", "auth"]);
  const { user, loading, isAuthenticated, isAdmin, isTeacher, isStudent, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const currentLang = i18n.resolvedLanguage || i18n.language || "vi";
  const isEnglish = String(currentLang).startsWith("en");
  const label = (key, vi, en) => t(key, { defaultValue: isEnglish ? en : vi });

  const changeLanguage = () => {
    i18n.changeLanguage(isEnglish ? "vi" : "en");
  };

  const closeMenus = () => {
    setMobileOpen(false);
    setAccountOpen(false);
  };

  const handleLogout = async () => {
    await logout();
    closeMenus();
    navigate("/", { replace: true });
  };

  useEffect(() => {
    closeMenus();
  }, [location.pathname]);

  useEffect(() => {
    function handlePointerDown(event) {
      if (accountRef.current && !accountRef.current.contains(event.target)) {
        setAccountOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") closeMenus();
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const role = isAdmin
    ? USER_ROLES.admin
    : isTeacher
      ? USER_ROLES.teacher
      : isStudent
        ? USER_ROLES.student
        : null;

  const accountName = user?.name || user?.displayName || user?.email || label("auth:header.account.fallbackName", "Tài khoản", "Account");
  const accountEmail = user?.email || "";

  const navItems = useMemo(() => {
    const commonHome = {
      to: "/",
      exact: true,
      icon: HomeIcon,
      label: label("auth:header.nav.home", "Trang chủ", "Home"),
      description: label("auth:header.navDesc.home", "Tổng quan chương trình", "Program overview"),
      desktop: true,
    };

    const guestItems = [
      commonHome,
      {
        to: "/course/python-foundation",
        icon: BookOpen,
        label: label("auth:header.nav.pythonFoundation", "Python Foundation", "Python Foundation"),
        description: label("auth:header.navDesc.pythonFoundation", "Khóa học đã hoàn chỉnh", "Completed course"),
        desktop: true,
      },
      {
        to: "/test",
        icon: Brain,
        label: label("auth:header.nav.thinkingTest", "Test tư duy", "Thinking Test"),
        description: label("auth:header.navDesc.thinkingTest", "Đánh giá logic đầu vào", "Entry thinking assessment"),
        desktop: true,
      },
      {
        to: "/placement",
        icon: ClipboardCheck,
        label: label("auth:header.nav.placement", "Placement", "Placement"),
        description: label("auth:header.navDesc.placement", "Xếp lớp học phù hợp", "Find the right starting point"),
        desktop: true,
      },
      {
        to: "/roadmap",
        icon: Route,
        label: label("auth:header.nav.roadmap", "Lộ trình", "Roadmap"),
        description: label("auth:header.navDesc.roadmap", "Lộ trình học đề xuất", "Recommended learning path"),
        desktop: false,
      },
    ];

    const studentItems = [
      commonHome,
      {
        to: "/course/python-foundation",
        icon: GraduationCap,
        label: label("auth:header.nav.myCourse", "Khóa học của em", "My course"),
        description: label("auth:header.navDesc.myCourse", "Tiếp tục Python Foundation", "Continue Python Foundation"),
        desktop: true,
      },
      {
        to: "/roadmap",
        icon: Route,
        label: label("auth:header.nav.roadmap", "Lộ trình", "Roadmap"),
        description: label("auth:header.navDesc.roadmap", "Xem hành trình học", "View learning journey"),
        desktop: true,
      },
      {
        to: "/test",
        icon: Brain,
        label: label("auth:header.nav.thinkingTest", "Test tư duy", "Thinking Test"),
        description: label("auth:header.navDesc.thinkingTest", "Tự kiểm tra tư duy", "Practice thinking skills"),
        desktop: true,
      },
      {
        to: "/placement",
        icon: ClipboardCheck,
        label: label("auth:header.nav.placement", "Placement", "Placement"),
        description: label("auth:header.navDesc.placement", "Kiểm tra vị trí học", "Check placement"),
        desktop: false,
      },
    ];

    const teacherItems = [
      commonHome,
      {
        to: "/teacher",
        exact: true,
        icon: GraduationCap,
        label: label("auth:header.nav.teacherCenter", "Khu giáo viên", "Teacher center"),
        description: label("auth:header.navDesc.teacherCenter", "Giáo án và hướng dẫn lớp", "Lesson guides and class flow"),
        desktop: true,
      },
      {
        to: "/teacher/course/python-foundation",
        icon: BookOpen,
        label: label("auth:header.nav.teacherGuide", "Giáo án Python", "Python guide"),
        description: label("auth:header.navDesc.teacherGuide", "24 buổi hướng dẫn chi tiết", "24 detailed teaching sessions"),
        desktop: true,
      },
      {
        to: "/course/python-foundation",
        icon: Sparkles,
        label: label("auth:header.nav.studentView", "Giao diện học viên", "Student view"),
        description: label("auth:header.navDesc.studentView", "Xem bài học học viên", "Preview learner lessons"),
        desktop: true,
      },
      {
        to: "/placement",
        icon: ClipboardCheck,
        label: label("auth:header.nav.placement", "Placement", "Placement"),
        description: label("auth:header.navDesc.placement", "Dùng khi tư vấn xếp lớp", "Use for class placement"),
        desktop: false,
      },
    ];

    const adminItems = [
      commonHome,
      {
        to: "/admin",
        exact: true,
        icon: LayoutDashboard,
        label: label("auth:header.nav.adminDashboard", "Admin", "Admin"),
        description: label("auth:header.navDesc.adminDashboard", "Tổng quan quản trị", "Administration overview"),
        desktop: true,
      },
      {
        to: "/admin/teachers",
        icon: UsersRound,
        label: label("auth:header.nav.manageTeachers", "Giáo viên", "Teachers"),
        description: label("auth:header.navDesc.manageTeachers", "Tạo và quản lý tài khoản", "Create and manage accounts"),
        desktop: true,
      },
      {
        to: "/teacher",
        exact: true,
        icon: GraduationCap,
        label: label("auth:header.nav.teacherCenter", "Khu giáo viên", "Teacher center"),
        description: label("auth:header.navDesc.teacherCenter", "Kiểm tra giáo án", "Review teaching guides"),
        desktop: true,
      },
      {
        to: "/course/python-foundation",
        icon: BookOpen,
        label: label("auth:header.nav.pythonFoundation", "Python Foundation", "Python Foundation"),
        description: label("auth:header.navDesc.pythonFoundation", "Khóa học đã hoàn chỉnh", "Completed course"),
        desktop: false,
      },
    ];

    if (isAdmin) return adminItems;
    if (isTeacher) return teacherItems;
    if (isStudent) return studentItems;
    return guestItems;
  }, [isAdmin, isTeacher, isStudent, currentLang]);

  const desktopNavItems = navItems.filter((item) => item.desktop !== false).slice(0, 4);

  const quickAction = useMemo(() => {
    if (isAdmin) {
      return {
        to: "/admin/teachers",
        icon: UsersRound,
        label: label("auth:header.cta.manageTeachers", "Quản lý giáo viên", "Manage teachers"),
      };
    }

    if (isTeacher) {
      return {
        to: "/teacher/course/python-foundation",
        icon: GraduationCap,
        label: label("auth:header.cta.openTeacherGuide", "Mở giáo án", "Open guide"),
      };
    }

    if (isStudent) {
      return {
        to: "/course/python-foundation",
        icon: BookOpen,
        label: label("auth:header.cta.continueLearning", "Tiếp tục học", "Continue learning"),
      };
    }

    return {
      to: "/placement",
      icon: ClipboardCheck,
      label: label("auth:header.cta.startPlacement", "Làm test đầu vào", "Start placement"),
    };
  }, [isAdmin, isTeacher, isStudent, currentLang]);

  const accountLinks = useMemo(() => {
    const base = [
      {
        to: "/profile",
        icon: UserRound,
        label: label("auth:header.account.profile", "Hồ sơ cá nhân", "Profile"),
        description: label("auth:header.account.profileDesc", "Thông tin tài khoản", "Account information"),
      },
    ];

    if (isAdmin) {
      base.push(
        {
          to: "/admin",
          icon: ShieldCheck,
          label: label("auth:header.account.adminDashboard", "Bảng quản trị", "Admin dashboard"),
          description: label("auth:header.account.adminDashboardDesc", "Quản lý hệ thống", "Manage the system"),
        },
        {
          to: "/admin/teachers",
          icon: UsersRound,
          label: label("auth:header.account.manageTeachers", "Tài khoản giáo viên", "Teacher accounts"),
          description: label("auth:header.account.manageTeachersDesc", "Tạo và khóa/mở tài khoản", "Create and manage staff accounts"),
        }
      );
    }

    if (isTeacher) {
      base.push({
        to: "/teacher",
        exact: true,
        icon: GraduationCap,
        label: label("auth:header.account.teacherDashboard", "Khu giáo viên", "Teacher center"),
        description: label("auth:header.account.teacherDashboardDesc", "Giáo án và hoạt động lớp", "Guides and classroom activities"),
      });
    }

    if (isStudent) {
      base.push({
        to: "/course/python-foundation",
        icon: BookOpen,
        label: label("auth:header.account.myCourse", "Python Foundation", "Python Foundation"),
        description: label("auth:header.account.myCourseDesc", "Quay lại khóa học", "Return to the course"),
      });
    }

    return base;
  }, [isAdmin, isTeacher, isStudent, currentLang]);

  const navClass = ({ isActive }) =>
    cx(
      "inline-flex h-10 shrink-0 items-center gap-2 whitespace-nowrap rounded-2xl px-3 text-sm font-extrabold leading-none transition",
      isActive
        ? "bg-slate-950 text-white shadow-sm shadow-slate-300"
        : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
    );

  const mobileNavClass = ({ isActive }) =>
    cx(
      "group flex items-start gap-3 rounded-3xl border p-4 transition",
      isActive
        ? "border-indigo-200 bg-indigo-50 text-indigo-900"
        : "border-slate-200 bg-white text-slate-800 hover:border-indigo-200 hover:bg-indigo-50/60"
    );

  const QuickIcon = quickAction.icon;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex min-h-[76px] max-w-[1440px] items-center justify-between gap-3 px-4 py-3 lg:px-6">
        <Link
          to="/"
          className="group flex min-w-0 shrink-0 items-center gap-3"
          onClick={closeMenus}
          aria-label={t("common:appName", { defaultValue: "Code Explorer" })}
        >
          <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 via-blue-600 to-sky-500 text-white shadow-lg shadow-indigo-200 transition group-hover:-translate-y-0.5">
            <Code2 size={23} />
            <span className="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-400" />
          </div>

          <div className="hidden min-w-0 sm:block lg:w-44 xl:w-40 2xl:w-52">
            <div className="truncate text-lg font-black leading-5 text-slate-950">
              {t("common:appName", { defaultValue: "Code Explorer" })}
            </div>
            <div className="truncate text-xs font-bold text-slate-500">
              {t("common:slogan", { defaultValue: isEnglish ? "Learn coding from zero" : "Học lập trình từ con số 0" })}
            </div>
          </div>
        </Link>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-1 xl:flex"
          aria-label={label("auth:header.aria.mainNav", "Điều hướng chính", "Main navigation")}
        >
          {desktopNavItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink key={item.to} to={item.to} end={item.exact} className={navClass}>
                <Icon size={15} className="shrink-0" />
                <span className="whitespace-nowrap">{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <button
            type="button"
            onClick={changeLanguage}
            className="inline-flex h-10 shrink-0 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 text-sm font-black text-slate-700 shadow-sm transition hover:bg-slate-50"
            aria-label={label("auth:header.aria.changeLanguage", "Đổi ngôn ngữ", "Change language")}
          >
            <Languages size={16} className="shrink-0" />
            {isEnglish ? "VI" : "EN"}
          </button>

          {loading ? (
            <div className="h-10 w-32 animate-pulse rounded-2xl bg-slate-100" />
          ) : isAuthenticated ? (
            <div ref={accountRef} className="relative">
              <button
                type="button"
                onClick={() => setAccountOpen((value) => !value)}
                className="inline-flex h-10 max-w-[220px] items-center gap-2 rounded-2xl border border-slate-200 bg-white px-2.5 text-left shadow-sm transition hover:bg-slate-50"
                aria-expanded={accountOpen}
                aria-label={label("auth:header.aria.accountMenu", "Mở menu tài khoản", "Open account menu")}
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-sky-500 text-[11px] font-black text-white">
                  {getInitials(accountName)}
                </div>
                <div className="min-w-0">
                  <div className="truncate text-sm font-black leading-4 text-slate-900">{accountName}</div>
                  <div className="truncate text-[11px] font-bold leading-4 text-slate-500">
                    {t(`auth:roles.${role}`, { defaultValue: role || "user" })}
                  </div>
                </div>
                <ChevronDown size={15} className={cx("shrink-0 text-slate-400 transition", accountOpen && "rotate-180")} />
              </button>

              {accountOpen && (
                <div className="absolute right-0 top-full mt-3 w-80 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-2xl shadow-slate-200/80 ring-1 ring-slate-950/5">
                  <div className="bg-gradient-to-br from-slate-950 via-indigo-950 to-sky-800 p-4 text-white">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-sm font-black backdrop-blur">
                        {getInitials(accountName)}
                      </div>
                      <div className="min-w-0">
                        <div className="truncate font-black">{accountName}</div>
                        <div className="truncate text-sm text-white/70">{accountEmail}</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-2">
                    {accountLinks.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link key={item.to} to={item.to} className="flex items-start gap-3 rounded-2xl px-3 py-3 transition hover:bg-slate-50">
                          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                            <Icon size={17} />
                          </span>
                          <span>
                            <span className="block text-sm font-black text-slate-900">{item.label}</span>
                            <span className="block text-xs leading-5 text-slate-500">{item.description}</span>
                          </span>
                        </Link>
                      );
                    })}

                    <button type="button" onClick={handleLogout} className="mt-1 flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition hover:bg-red-50">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                        <LogOut size={17} />
                      </span>
                      <span>
                        <span className="block text-sm font-black text-red-700">{label("auth:header.account.logout", "Đăng xuất", "Logout")}</span>
                        <span className="block text-xs leading-5 text-red-500">{label("auth:header.account.logoutDesc", "Thoát khỏi tài khoản hiện tại", "Sign out of this account")}</span>
                      </span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="inline-flex h-10 shrink-0 items-center gap-2 whitespace-nowrap rounded-2xl border border-slate-200 bg-white px-4 text-sm font-black text-slate-700 shadow-sm transition hover:bg-slate-50"
            >
              <LogIn size={16} className="shrink-0" />
              {label("auth:header.auth.login", "Đăng nhập", "Login")}
            </Link>
          )}

          <Link
            to={quickAction.to}
            className="inline-flex h-10 shrink-0 items-center gap-2 whitespace-nowrap rounded-2xl bg-gradient-to-r from-indigo-600 to-sky-500 px-4 text-sm font-black text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:from-indigo-700 hover:to-sky-600"
          >
            <QuickIcon size={16} className="shrink-0" />
            {quickAction.label}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 xl:hidden"
          aria-expanded={mobileOpen}
          aria-label={label("auth:header.aria.openMenu", "Mở menu", "Open menu")}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="xl:hidden">
          <button
            type="button"
            aria-label={label("auth:header.aria.closeMenu", "Đóng menu", "Close menu")}
            className="fixed inset-0 top-[76px] z-40 bg-slate-950/30 backdrop-blur-[2px]"
            onClick={closeMenus}
          />

          <div className="fixed left-3 right-3 top-[84px] z-50 max-h-[calc(100vh-100px)] overflow-y-auto rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-900/20">
            {isAuthenticated && (
              <div className="mb-4 overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-slate-950 via-indigo-950 to-sky-800 p-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-sm font-black backdrop-blur">
                    {getInitials(accountName)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate font-black">{accountName}</div>
                    <div className="truncate text-sm text-white/70">{accountEmail}</div>
                  </div>
                  <span className="shrink-0 rounded-full bg-white/15 px-3 py-1 text-xs font-black backdrop-blur">
                    {t(`auth:roles.${role}`, { defaultValue: role || "user" })}
                  </span>
                </div>
              </div>
            )}

            <div className="mb-3 grid grid-cols-2 gap-2 rounded-2xl bg-slate-50 p-2">
              <button
                type="button"
                onClick={changeLanguage}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-black text-slate-700 shadow-sm ring-1 ring-slate-200"
              >
                <Languages size={16} />
                {isEnglish ? "Tiếng Việt" : "English"}
              </button>

              {!loading && !isAuthenticated ? (
                <Link to="/login" onClick={closeMenus} className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-3 py-2 text-sm font-black text-white">
                  <LogIn size={16} />
                  {label("auth:header.auth.login", "Đăng nhập", "Login")}
                </Link>
              ) : (
                <Link to="/profile" onClick={closeMenus} className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-black text-slate-700 shadow-sm ring-1 ring-slate-200">
                  <UserRound size={16} />
                  {label("auth:header.account.profile", "Hồ sơ", "Profile")}
                </Link>
              )}
            </div>

            <nav className="grid gap-2" aria-label={label("auth:header.aria.mobileNav", "Menu trên điện thoại", "Mobile navigation")}>
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActivePath(location.pathname, item);
                return (
                  <NavLink key={item.to} to={item.to} end={item.exact} className={mobileNavClass}>
                    <span className={cx("flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl", active ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-700 group-hover:bg-indigo-100 group-hover:text-indigo-700")}>
                      <Icon size={20} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-black">{item.label}</span>
                      <span className="mt-0.5 block text-sm leading-5 text-slate-500">{item.description}</span>
                    </span>
                  </NavLink>
                );
              })}
            </nav>

            <div className="mt-4 grid gap-2 border-t border-slate-200 pt-4">
              {!loading && !isAuthenticated && (
                <Link to="/register" onClick={closeMenus} className="flex items-center justify-center gap-2 rounded-2xl border border-indigo-200 bg-indigo-50 px-4 py-3 text-sm font-black text-indigo-700">
                  <UserRound size={17} />
                  {label("auth:header.auth.studentRegister", "Đăng ký học viên", "Student sign up")}
                </Link>
              )}

              {isAuthenticated &&
                accountLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link key={item.to} to={item.to} onClick={closeMenus} className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-black text-slate-700">
                      <Icon size={17} />
                      {item.label}
                    </Link>
                  );
                })}

              <Link to={quickAction.to} onClick={closeMenus} className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-sky-500 px-4 py-3 text-sm font-black text-white shadow-lg shadow-indigo-200">
                <QuickIcon size={17} />
                {quickAction.label}
              </Link>

              {isAuthenticated && (
                <button type="button" onClick={handleLogout} className="flex w-full items-center justify-center gap-2 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-black text-red-700">
                  <LogOut size={17} />
                  {label("auth:header.account.logout", "Đăng xuất", "Logout")}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
