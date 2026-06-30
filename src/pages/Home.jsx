import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  FileText,
  GraduationCap,
  Layers3,
  Lightbulb,
  PlayCircle,
  Rocket,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Trophy,
  UserPlus,
  Users,
  UsersRound,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext.jsx";
import { getCourseById } from "../data/courses.js";
import { getLessonStatsByCourse } from "../data/lessons.js";

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function getFirstName(user) {
  const source = user?.name || user?.displayName || user?.email || "";
  const first = String(source).split("@")[0].trim().split(/\s+/)[0];
  return first || "bạn";
}

function StatCard({ value, label, tone = "glass" }) {
  const toneClass =
    tone === "dark"
      ? "border-slate-800 bg-slate-900 text-white"
      : tone === "light"
        ? "border-slate-200 bg-white text-slate-950 shadow-sm"
        : "border-white/10 bg-white/10 text-white backdrop-blur";

  return (
    <div className={`rounded-2xl border p-4 ${toneClass}`}>
      <div className="text-2xl font-black">{value}</div>
      <div className="mt-1 text-sm opacity-75">{label}</div>
    </div>
  );
}

function QuickActionCard({ icon, title, desc, to, tone = "indigo", actionLabel = "Mở ngay" }) {
  const toneClass = {
    indigo: "border-indigo-100 bg-indigo-50 text-indigo-700 hover:border-indigo-200 hover:bg-indigo-100/80",
    emerald: "border-emerald-100 bg-emerald-50 text-emerald-700 hover:border-emerald-200 hover:bg-emerald-100/80",
    sky: "border-sky-100 bg-sky-50 text-sky-700 hover:border-sky-200 hover:bg-sky-100/80",
    amber: "border-amber-100 bg-amber-50 text-amber-700 hover:border-amber-200 hover:bg-amber-100/80",
    slate: "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50",
  }[tone] || "border-slate-200 bg-white text-slate-700 hover:bg-slate-50";

  return (
    <Link
      to={to}
      className={`group rounded-3xl border p-5 transition hover:-translate-y-0.5 hover:shadow-lg ${toneClass}`}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/80 shadow-sm">
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-black text-slate-950">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
          <div className="mt-3 inline-flex items-center gap-2 text-sm font-black">
            {actionLabel}
            <ArrowRight size={15} className="transition group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}

function RoleWorkspace({ role, user, isEnglish, label }) {
  const firstName = getFirstName(user);

  const config = {
    guest: {
      badge: label("home:workspace.guest.badge", "Bắt đầu đúng trình độ", "Start at the right level"),
      title: label("home:workspace.guest.title", "Bạn mới tìm hiểu khóa học?", "New to the program?"),
      desc: label(
        "home:workspace.guest.desc",
        "Hãy làm test đầu vào để chọn lộ trình phù hợp, sau đó đăng ký tài khoản học viên bằng Gmail để bắt đầu học trên web.",
        "Take an entry assessment to choose the right path, then create a student account with Gmail to start learning on the web."
      ),
      tone: "from-slate-950 via-indigo-950 to-sky-900",
      actions: [
        {
          to: "/placement",
          icon: <ClipboardCheck size={21} />,
          title: label("home:workspace.guest.actions.placement.title", "Làm Placement Test", "Take Placement Test"),
          desc: label("home:workspace.guest.actions.placement.desc", "Xác định nên bắt đầu từ đâu trong Python Foundation.", "Find the best starting point in Python Foundation."),
          tone: "indigo",
        },
        {
          to: "/test",
          icon: <Sparkles size={21} />,
          title: label("home:workspace.guest.actions.thinking.title", "Test tư duy", "Thinking Test"),
          desc: label("home:workspace.guest.actions.thinking.desc", "Kiểm tra logic, pattern, tư duy thuật toán trước khi học code.", "Check logic, patterns, and algorithmic thinking before coding."),
          tone: "sky",
        },
        {
          to: "/register",
          icon: <UserPlus size={21} />,
          title: label("home:workspace.guest.actions.register.title", "Đăng ký học viên", "Student sign up"),
          desc: label("home:workspace.guest.actions.register.desc", "Dùng Gmail để tạo tài khoản học viên và lưu quá trình học.", "Use Gmail to create a student account and save learning progress."),
          tone: "emerald",
        },
      ],
    },
    student: {
      badge: label("home:workspace.student.badge", `Xin chào ${firstName}`, `Welcome back, ${firstName}`),
      title: label("home:workspace.student.title", "Tiếp tục học Python Foundation", "Continue Python Foundation"),
      desc: label(
        "home:workspace.student.desc",
        "Tập trung vào bài học, chạy code với input thật, làm quiz và hoàn thành project theo đúng lộ trình.",
        "Focus on lessons, run code with real input, complete quizzes, and finish projects in order."
      ),
      tone: "from-indigo-700 via-blue-700 to-sky-500",
      actions: [
        {
          to: "/course/python-foundation",
          icon: <BookOpen size={21} />,
          title: label("home:workspace.student.actions.course.title", "Vào khóa học", "Open course"),
          desc: label("home:workspace.student.actions.course.desc", "Xem toàn bộ 24 bài và tiếp tục bài đang học.", "View all 24 lessons and continue learning."),
          tone: "indigo",
        },
        {
          to: "/lessons/pyf-001",
          icon: <Code2 size={21} />,
          title: label("home:workspace.student.actions.lesson.title", "Bắt đầu bài 1", "Start lesson 1"),
          desc: label("home:workspace.student.actions.lesson.desc", "Học tư duy Input - Process - Output trước khi viết code.", "Learn Input - Process - Output before writing code."),
          tone: "emerald",
        },
        {
          to: "/roadmap",
          icon: <Layers3 size={21} />,
          title: label("home:workspace.student.actions.roadmap.title", "Xem lộ trình", "View roadmap"),
          desc: label("home:workspace.student.actions.roadmap.desc", "Biết mình đang ở giai đoạn nào và bước tiếp theo là gì.", "Know your stage and next step."),
          tone: "sky",
        },
      ],
    },
    teacher: {
      badge: label("home:workspace.teacher.badge", `Khu giáo viên · ${firstName}`, `Teacher center · ${firstName}`),
      title: label("home:workspace.teacher.title", "Dạy Python Foundation online/offline", "Teach Python Foundation online/offline"),
      desc: label(
        "home:workspace.teacher.desc",
        "Mở giáo án 24 buổi, câu hỏi trên lớp, bài tập về nhà, rubric và lời giải tham khảo để hướng dẫn học viên nhất quán.",
        "Open the 24-session guide, class questions, homework, rubrics, and reference solutions for consistent instruction."
      ),
      tone: "from-slate-950 via-violet-950 to-indigo-800",
      actions: [
        {
          to: "/teacher/course/python-foundation",
          icon: <GraduationCap size={21} />,
          title: label("home:workspace.teacher.actions.guide.title", "Giáo án Python", "Python guide"),
          desc: label("home:workspace.teacher.actions.guide.desc", "Mở giáo án chi tiết 24 buổi theo lộ trình.", "Open the detailed 24-session guide."),
          tone: "indigo",
        },
        {
          to: "/placement",
          icon: <ClipboardCheck size={21} />,
          title: label("home:workspace.teacher.actions.placement.title", "Xếp lớp học viên", "Place learners"),
          desc: label("home:workspace.teacher.actions.placement.desc", "Dùng placement để tư vấn lộ trình phù hợp.", "Use placement to recommend the right path."),
          tone: "amber",
        },
        {
          to: "/course/python-foundation",
          icon: <BookOpen size={21} />,
          title: label("home:workspace.teacher.actions.preview.title", "Xem như học viên", "Preview learner view"),
          desc: label("home:workspace.teacher.actions.preview.desc", "Kiểm tra bài học, quiz và code runner phía học viên.", "Check learner lessons, quizzes, and code runner."),
          tone: "sky",
        },
      ],
    },
    admin: {
      badge: label("home:workspace.admin.badge", `Quản trị hệ thống · ${firstName}`, `Admin workspace · ${firstName}`),
      title: label("home:workspace.admin.title", "Điều phối khóa học và tài khoản", "Operate courses and accounts"),
      desc: label(
        "home:workspace.admin.desc",
        "Quản lý giáo viên, kiểm tra giáo án, rà soát khóa Python Foundation và theo dõi các luồng vận hành chính của hệ thống.",
        "Manage teachers, review guides, audit Python Foundation, and monitor core platform operations."
      ),
      tone: "from-slate-950 via-slate-900 to-indigo-900",
      actions: [
        {
          to: "/admin/teachers",
          icon: <UsersRound size={21} />,
          title: label("home:workspace.admin.actions.teachers.title", "Quản lý giáo viên", "Manage teachers"),
          desc: label("home:workspace.admin.actions.teachers.desc", "Tạo tài khoản giáo viên và kiểm soát trạng thái.", "Create teacher accounts and control status."),
          tone: "indigo",
        },
        {
          to: "/teacher/course/python-foundation",
          icon: <FileText size={21} />,
          title: label("home:workspace.admin.actions.guides.title", "Kiểm tra giáo án", "Review guides"),
          desc: label("home:workspace.admin.actions.guides.desc", "Rà soát giáo án trước khi mở lớp.", "Review teaching guides before class."),
          tone: "emerald",
        },
        {
          to: "/admin",
          icon: <ShieldCheck size={21} />,
          title: label("home:workspace.admin.actions.dashboard.title", "Bảng quản trị", "Admin dashboard"),
          desc: label("home:workspace.admin.actions.dashboard.desc", "Xem nhanh các khu vực quản trị chính.", "Open key admin areas."),
          tone: "slate",
        },
      ],
    },
  };

  const active = config[role] || config.guest;

  return (
    <section className="mx-auto max-w-7xl px-4 pb-4 pt-8">
      <div className={`overflow-hidden rounded-[2rem] bg-gradient-to-br ${active.tone} p-1 shadow-2xl shadow-slate-200/70`}>
        <div className="rounded-[calc(2rem-4px)] bg-white/95 p-5 backdrop-blur md:p-7">
          <div className="grid gap-6 lg:grid-cols-[360px_1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-black text-white">
                <Sparkles size={16} />
                {active.badge}
              </div>
              <h2 className="mt-4 text-2xl font-black text-slate-950 md:text-3xl">{active.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{active.desc}</p>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {active.actions.map((item) => (
                <QuickActionCard key={item.to} {...item} actionLabel={label("home:workspace.openAction", "Mở ngay", "Open")} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { t, i18n } = useTranslation(["common", "home"]);
  const { user, isAuthenticated, isAdmin, isTeacher, isStudent } = useAuth();

  const currentLang = i18n.resolvedLanguage || i18n.language || "vi";
  const isEnglish = String(currentLang).startsWith("en");
  const label = (key, vi, en) => t(key, { defaultValue: isEnglish ? en : vi });

  const pythonCourse = getCourseById("python-foundation");
  const pythonStats = getLessonStatsByCourse("python-foundation");
  const isStaff = isAdmin || isTeacher;
  const role = isAdmin ? "admin" : isTeacher ? "teacher" : isStudent ? "student" : "guest";

  const audiences = [
    {
      icon: <GraduationCap size={22} />,
      title: t("home:audiences.students.title"),
      desc: t("home:audiences.students.desc"),
      tag: t("home:audiences.students.tag"),
    },
    {
      icon: <Users size={22} />,
      title: t("home:audiences.beginners.title"),
      desc: t("home:audiences.beginners.desc"),
      tag: t("home:audiences.beginners.tag"),
    },
    {
      icon: <BriefcaseBusiness size={22} />,
      title: t("home:audiences.workingAdults.title"),
      desc: t("home:audiences.workingAdults.desc"),
      tag: t("home:audiences.workingAdults.tag"),
    },
    {
      icon: <Rocket size={22} />,
      title: t("home:audiences.careerSwitchers.title"),
      desc: t("home:audiences.careerSwitchers.desc"),
      tag: t("home:audiences.careerSwitchers.tag"),
    },
  ];

  const features = asArray(t("home:features", { returnObjects: true }));
  const learningPaths = asArray(t("home:learningPaths", { returnObjects: true }));
  const steps = asArray(t("home:steps", { returnObjects: true }));
  const pythonHighlights = asArray(t("home:pythonFoundation.highlights", { returnObjects: true }));
  const pythonIncludes = asArray(t("home:pythonFoundation.includes", { returnObjects: true }));

  const heroStats = [
    {
      value: pythonStats.totalLessons || pythonCourse?.lessonIds?.length || 24,
      label: t("home:stats.lessons", { defaultValue: isEnglish ? "lessons" : "bài học" }),
    },
    {
      value: pythonStats.quizQuestions || 178,
      label: t("home:stats.quizQuestions", { defaultValue: isEnglish ? "quiz questions" : "câu quiz" }),
    },
    {
      value: pythonStats.codeExercises || 22,
      label: t("home:stats.codeExercises", { defaultValue: isEnglish ? "code exercises" : "bài code" }),
    },
  ];

  const heroCopy = useMemo(() => {
    if (isAdmin) {
      return {
        badge: label("home:heroRole.admin.badge", "Admin · Python Foundation đã sẵn sàng", "Admin · Python Foundation is ready"),
        title: label("home:heroRole.admin.title", "Quản trị chương trình học lập trình từ một nơi", "Manage the coding program from one place"),
        subtitle: label(
          "home:heroRole.admin.subtitle",
          "Theo dõi khóa Python Foundation, quản lý tài khoản giáo viên và kiểm tra giáo án trước khi mở lớp.",
          "Track Python Foundation, manage teacher accounts, and review guides before classes start."
        ),
        primary: { to: "/admin/teachers", text: label("home:heroRole.admin.primary", "Quản lý giáo viên", "Manage teachers"), icon: <UsersRound size={18} /> },
        secondary: { to: "/teacher/course/python-foundation", text: label("home:heroRole.admin.secondary", "Kiểm tra giáo án", "Review guides"), icon: <FileText size={18} /> },
      };
    }

    if (isTeacher) {
      return {
        badge: label("home:heroRole.teacher.badge", "Teacher · Giáo án 24 buổi", "Teacher · 24-session guide"),
        title: label("home:heroRole.teacher.title", "Dạy Python Foundation có hệ thống", "Teach Python Foundation with structure"),
        subtitle: label(
          "home:heroRole.teacher.subtitle",
          "Mở giáo án, hoạt động lớp, câu hỏi gợi mở, bài tập về nhà và rubric để dạy online/offline nhất quán.",
          "Open guides, classroom activities, prompts, homework, and rubrics for consistent online/offline teaching."
        ),
        primary: { to: "/teacher/course/python-foundation", text: label("home:heroRole.teacher.primary", "Mở giáo án", "Open guide"), icon: <GraduationCap size={18} /> },
        secondary: { to: "/course/python-foundation", text: label("home:heroRole.teacher.secondary", "Xem bài học", "Preview lessons"), icon: <BookOpen size={18} /> },
      };
    }

    if (isStudent) {
      return {
        badge: label("home:heroRole.student.badge", "Học viên · Tiếp tục lộ trình", "Student · Continue your path"),
        title: label("home:heroRole.student.title", "Học Python bằng bài học, quiz và chạy code thật", "Learn Python through lessons, quizzes, and real code"),
        subtitle: label(
          "home:heroRole.student.subtitle",
          "Theo dõi lộ trình 24 bài, luyện input/output, chạy test code và hoàn thành project cuối khóa.",
          "Follow 24 lessons, practice input/output, run code tests, and complete final projects."
        ),
        primary: { to: "/course/python-foundation", text: label("home:heroRole.student.primary", "Tiếp tục học", "Continue learning"), icon: <BookOpen size={18} /> },
        secondary: { to: "/lessons/pyf-001", text: label("home:heroRole.student.secondary", "Bắt đầu bài 1", "Start lesson 1"), icon: <PlayCircle size={18} /> },
      };
    }

    return {
      badge: t("home:pythonFoundation.statusLabel", { defaultValue: isEnglish ? "Python Foundation is complete" : "Python Foundation đã hoàn thành" }),
      title: t("home:title"),
      subtitle: t("home:subtitle"),
      primary: { to: "/course/python-foundation", text: t("home:heroCta.openPython", { defaultValue: isEnglish ? "Open Python Foundation" : "Xem Python Foundation" }), icon: <ArrowRight size={18} /> },
      secondary: { to: "/placement", text: t("home:heroCta.takePlacement", { defaultValue: isEnglish ? "Take placement test" : "Làm test đầu vào" }), icon: <ClipboardCheck size={18} /> },
    };
  }, [role, currentLang]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#4f46e5,transparent_35%),radial-gradient(circle_at_bottom_right,#0ea5e9,transparent_35%)] opacity-80" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(2,6,23,0.95))]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 md:py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-400/10 px-4 py-2 text-sm font-black text-emerald-100 backdrop-blur">
              <BadgeCheck size={16} />
              {heroCopy.badge}
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
              {heroCopy.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {heroCopy.subtitle}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to={heroCopy.primary.to} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 font-bold text-slate-950 shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-100">
                {heroCopy.primary.text}
                {heroCopy.primary.icon}
              </Link>

              <Link to={heroCopy.secondary.to} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur transition hover:bg-white/20">
                {heroCopy.secondary.text}
                {heroCopy.secondary.icon}
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              {heroStats.map((item) => (
                <StatCard key={item.label} value={item.value} label={item.label} />
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur">
            <div className="rounded-3xl bg-slate-950 p-5 font-mono text-sm text-slate-100 ring-1 ring-white/10">
              <div className="mb-4 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <p className="text-sky-300">{t("home:codeCard.comment")}</p>

              <p className="mt-3">
                <span className="text-pink-300">print</span>
                <span>(</span>
                <span className="text-green-300">"{t("home:codeCard.messageMuted")}"</span>
                <span>)</span>
              </p>

              <p className="mt-3">
                <span className="text-pink-300">print</span>
                <span>(</span>
                <span className="text-green-300">"{t("home:codeCard.statusMessage")}"</span>
                <span>)</span>
              </p>

              <div className="mt-6 rounded-2xl bg-slate-900 p-4">
                <p className="text-slate-400">{t("home:codeCard.resultLabel")}</p>
                <p className="mt-2 text-green-300">{t("home:codeCard.messageMuted")}</p>
                <p className="text-green-300">{t("home:codeCard.statusMessage")}</p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-5 text-slate-900">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                  <Trophy size={16} />
                  {t("home:badgeCard.label")}
                </div>
                <div className="mt-2 text-lg font-black">{t("home:badgeCard.title")}</div>
                <p className="mt-1 text-sm text-slate-500">{t("home:badgeCard.desc")}</p>
              </div>

              <div className="rounded-3xl bg-white p-5 text-slate-900">
                <div className="text-sm font-semibold text-slate-500">{t("home:progressCard.label")}</div>
                <div className="mt-3 h-3 rounded-full bg-slate-200">
                  <div className="h-3 w-full rounded-full bg-emerald-600" />
                </div>
                <div className="mt-2 text-sm font-bold text-emerald-700">{t("home:progressCard.value")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RoleWorkspace role={role} user={user} isEnglish={isEnglish} label={label} />

      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-white shadow-xl shadow-emerald-100/50">
          <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1fr_390px] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-black text-emerald-700 ring-1 ring-emerald-100">
                <BadgeCheck size={16} />
                {t("home:pythonFoundation.badge")}
              </div>

              <h2 className="text-3xl font-black text-slate-950 md:text-4xl">
                {t("home:pythonFoundation.title")}
              </h2>

              <p className="mt-4 max-w-3xl leading-8 text-slate-600">
                {t("home:pythonFoundation.desc")}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {pythonHighlights.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold leading-6 text-slate-700">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={18} />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link to="/course/python-foundation" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-3 font-black text-white transition hover:bg-indigo-700">
                  {t("home:pythonFoundation.openCourse")}
                  <ArrowRight size={18} />
                </Link>
                <Link to="/lessons/pyf-001" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 font-black text-slate-700 transition hover:bg-slate-50">
                  {t("home:pythonFoundation.startLesson")}
                  <PlayCircle size={18} />
                </Link>
                {isStaff ? (
                  <Link to="/teacher/course/python-foundation" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-indigo-100 bg-indigo-50 px-6 py-3 font-black text-indigo-700 transition hover:bg-indigo-100">
                    {t("home:pythonFoundation.teacherGuide")}
                    <BookOpen size={18} />
                  </Link>
                ) : (
                  <Link to={isAuthenticated ? "/roadmap" : "/placement"} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-indigo-100 bg-indigo-50 px-6 py-3 font-black text-indigo-700 transition hover:bg-indigo-100">
                    {isAuthenticated ? label("home:pythonFoundation.viewRoadmap", "Xem lộ trình", "View roadmap") : label("home:pythonFoundation.takePlacement", "Làm test đầu vào", "Take placement")}
                    <ClipboardCheck size={18} />
                  </Link>
                )}
              </div>
            </div>

            <div className="rounded-[2rem] bg-slate-950 p-5 text-white">
              <div className="grid grid-cols-2 gap-3">
                <StatCard tone="dark" value={pythonStats.totalLessons || 24} label={t("home:pythonFoundation.stats.lessons")} />
                <StatCard tone="dark" value={pythonCourse?.durationSessions || 24} label={t("home:pythonFoundation.stats.sessions")} />
                <StatCard tone="dark" value={pythonStats.quizQuestions || 178} label={t("home:pythonFoundation.stats.quiz")} />
                <StatCard tone="dark" value={pythonStats.codeExercises || 22} label={t("home:pythonFoundation.stats.code")} />
              </div>

              <div className="mt-4 rounded-3xl bg-white p-5 text-slate-950">
                <h3 className="font-black">{t("home:pythonFoundation.includesTitle")}</h3>
                <div className="mt-3 grid gap-2">
                  {pythonIncludes.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <CheckCircle2 size={16} className="text-emerald-600" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-bold text-indigo-700">
            <Users size={16} />
            {t("home:audienceSection.badge")}
          </div>

          <h2 className="text-3xl font-black md:text-4xl">{t("home:audienceSection.title")}</h2>
          <p className="mt-4 text-slate-600">{t("home:audienceSection.desc")}</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {audiences.map((item) => (
            <div key={item.title} className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-5 flex items-center justify-between">
                <div className="inline-flex rounded-2xl bg-indigo-50 p-3 text-indigo-700">{item.icon}</div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">{item.tag}</span>
              </div>
              <h3 className="text-xl font-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sm font-bold text-sky-700">
              <Layers3 size={16} />
              {t("home:pathSection.badge")}
            </div>

            <h2 className="text-3xl font-black md:text-4xl">{t("home:pathSection.title")}</h2>
            <p className="mt-4 leading-7 text-slate-600">{t("home:pathSection.desc")}</p>

            <div className="mt-8 grid gap-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-600" size={20} />
                  <span className="font-medium text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {learningPaths.map((path) => (
              <Link key={path.title} to={path.href || "/roadmap"} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-50/40 hover:shadow-lg">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-black">{path.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{path.desc}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-white px-3 py-1 text-xs font-bold text-indigo-700 ring-1 ring-indigo-100">
                    {path.status}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-bold text-amber-700">
            <Lightbulb size={16} />
            {t("home:methodSection.badge")}
          </div>

          <h2 className="text-3xl font-black md:text-4xl">{t("home:methodSection.title")}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">{t("home:methodSection.desc")}</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-lg font-black text-white">
                {index + 1}
              </div>
              <h3 className="text-lg font-black">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-600 to-sky-500 p-8 text-white shadow-xl md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur">
                <TerminalSquare size={16} />
                {isAdmin
                  ? label("home:ctaRole.admin.badge", "Quản trị", "Admin")
                  : isTeacher
                    ? label("home:ctaRole.teacher.badge", "Giáo viên", "Teacher")
                    : isStudent
                      ? label("home:ctaRole.student.badge", "Học viên", "Student")
                      : t("home:cta.badge")}
              </div>

              <h2 className="text-3xl font-black md:text-4xl">
                {isAdmin
                  ? label("home:ctaRole.admin.title", "Sẵn sàng vận hành lớp học", "Ready to operate classes")
                  : isTeacher
                    ? label("home:ctaRole.teacher.title", "Chuẩn bị buổi học tiếp theo", "Prepare the next class")
                    : isStudent
                      ? label("home:ctaRole.student.title", "Tiếp tục luyện tập hôm nay", "Continue practicing today")
                      : t("home:cta.title")}
              </h2>

              <p className="mt-4 text-white/85">
                {isAdmin
                  ? label("home:ctaRole.admin.desc", "Kiểm tra tài khoản giáo viên và giáo án trước khi mở lớp.", "Check teacher accounts and guides before opening classes.")
                  : isTeacher
                    ? label("home:ctaRole.teacher.desc", "Mở giáo án, chuẩn bị câu hỏi trên lớp và bài tập về nhà.", "Open the guide, prepare class questions and homework.")
                    : isStudent
                      ? label("home:ctaRole.student.desc", "Vào khóa học, chạy code và hoàn thành quiz để giữ nhịp học.", "Open the course, run code, and finish quizzes to keep momentum.")
                      : t("home:cta.desc")}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <Link
                to={isAdmin ? "/admin/teachers" : isTeacher ? "/teacher/course/python-foundation" : "/course/python-foundation"}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 font-bold text-indigo-700 shadow transition hover:bg-slate-100"
              >
                {isAdmin
                  ? label("home:ctaRole.admin.primary", "Quản lý giáo viên", "Manage teachers")
                  : isTeacher
                    ? label("home:ctaRole.teacher.primary", "Mở giáo án", "Open guide")
                    : t("home:cta.openCourse")}
                <ArrowRight size={18} />
              </Link>

              <Link
                to={isAdmin ? "/teacher/course/python-foundation" : isTeacher ? "/placement" : isStudent ? "/lessons/pyf-001" : "/test"}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                {isAdmin
                  ? label("home:ctaRole.admin.secondary", "Kiểm tra giáo án", "Review guides")
                  : isTeacher
                    ? label("home:ctaRole.teacher.secondary", "Dùng placement", "Use placement")
                    : isStudent
                      ? label("home:ctaRole.student.secondary", "Bài 1", "Lesson 1")
                      : t("home:cta.takeThinking")}
                <Sparkles size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
