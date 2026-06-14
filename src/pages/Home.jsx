import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  Layers3,
  Lightbulb,
  PlayCircle,
  Rocket,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation(["common", "home"]);

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

  const features = t("home:features", { returnObjects: true });
  const learningPaths = t("home:learningPaths", { returnObjects: true });
  const steps = t("home:steps", { returnObjects: true });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#4f46e5,transparent_35%),radial-gradient(circle_at_bottom_right,#0ea5e9,transparent_35%)] opacity-80" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(2,6,23,0.95))]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur">
              <Sparkles size={16} />
              {t("home:badge")}
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
              {t("home:title")}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {t("home:subtitle")}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/test"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 font-bold text-slate-950 shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                {t("common:startTest")}
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/languages"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                {t("common:viewCourses")}
                <PlayCircle size={18} />
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <div className="text-2xl font-black">50+</div>
                <div className="mt-1 text-sm text-slate-300">
                  {t("home:stats.questions")}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <div className="text-2xl font-black">0→1</div>
                <div className="mt-1 text-sm text-slate-300">
                  {t("home:stats.roadmap")}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <div className="text-2xl font-black">4+</div>
                <div className="mt-1 text-sm text-slate-300">
                  {t("home:stats.audiences")}
                </div>
              </div>
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
                <span className="text-green-300">
                  "{t("home:codeCard.message")}"
                </span>
                <span>)</span>
              </p>

              <div className="mt-6 rounded-2xl bg-slate-900 p-4">
                <p className="text-slate-400">
                  {t("home:codeCard.resultLabel")}
                </p>
                <p className="mt-2 text-green-300">
                  {t("home:codeCard.message")}
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-5 text-slate-900">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                  <Trophy size={16} />
                  {t("home:badgeCard.label")}
                </div>
                <div className="mt-2 text-lg font-black">
                  {t("home:badgeCard.title")}
                </div>
                <p className="mt-1 text-sm text-slate-500">
                  {t("home:badgeCard.desc")}
                </p>
              </div>

              <div className="rounded-3xl bg-white p-5 text-slate-900">
                <div className="text-sm font-semibold text-slate-500">
                  {t("home:progressCard.label")}
                </div>
                <div className="mt-3 h-3 rounded-full bg-slate-200">
                  <div className="h-3 w-2/3 rounded-full bg-indigo-600" />
                </div>
                <div className="mt-2 text-sm font-bold">
                  {t("home:progressCard.value")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-bold text-indigo-700">
            <Users size={16} />
            {t("home:audienceSection.badge")}
          </div>

          <h2 className="text-3xl font-black md:text-4xl">
            {t("home:audienceSection.title")}
          </h2>

          <p className="mt-4 text-slate-600">
            {t("home:audienceSection.desc")}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="inline-flex rounded-2xl bg-indigo-50 p-3 text-indigo-700">
                  {item.icon}
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
                  {item.tag}
                </span>
              </div>

              <h3 className="text-xl font-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.desc}
              </p>
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

            <h2 className="text-3xl font-black md:text-4xl">
              {t("home:pathSection.title")}
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              {t("home:pathSection.desc")}
            </p>

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
              <div
                key={path.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:border-indigo-200 hover:bg-indigo-50/40"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-black">{path.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {path.desc}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-white px-3 py-1 text-xs font-bold text-indigo-700 ring-1 ring-indigo-100">
                    {path.status}
                  </span>
                </div>
              </div>
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

          <h2 className="text-3xl font-black md:text-4xl">
            {t("home:methodSection.title")}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            {t("home:methodSection.desc")}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-lg font-black text-white">
                {index + 1}
              </div>
              <h3 className="text-lg font-black">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-600 to-sky-500 p-8 text-white shadow-xl md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur">
                <BadgeCheck size={16} />
                {t("home:cta.badge")}
              </div>

              <h2 className="text-3xl font-black md:text-4xl">
                {t("home:cta.title")}
              </h2>

              <p className="mt-4 text-white/85">{t("home:cta.desc")}</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <Link
                to="/test"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 font-bold text-indigo-700 shadow transition hover:bg-slate-100"
              >
                {t("common:startTest")}
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/languages"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                {t("common:viewCourses")}
                <BookOpen size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}