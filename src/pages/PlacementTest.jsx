import React, { useEffect, useMemo, useState } from "react";
import {
  ClipboardCheck,
  RotateCcw,
  Trophy,
  BookOpen,
  Target,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  LEARNER_GROUPS,
  PLACEMENT_TEST_QUESTIONS,
} from "../data/questions.js";

const TEST_DURATION_SECONDS = 10 * 60;

const COURSE_OPTIONS = [
  {
    id: "python-foundation",
    i18nKey: "courses.pythonFoundation",
  },
];

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

function getResultKey(percent) {
  if (percent >= 80) return "ready";
  if (percent >= 50) return "foundation";
  return "preparation";
}

function selectPlacementQuestions(questions, courseId, learnerGroup) {
  const matched = questions.filter(
    (q) => q.courseId === courseId && q.targetGroups.includes(learnerGroup)
  );

  const easy = matched.filter((q) => q.difficulty <= 1);
  const medium = matched.filter((q) => q.difficulty === 2);
  const hard = matched.filter((q) => q.difficulty >= 3);

  const selected = [
    ...shuffle(easy).slice(0, 4),
    ...shuffle(medium).slice(0, 4),
    ...shuffle(hard).slice(0, 2),
  ];

  const ids = selected.map((q) => q.id);

  if (selected.length < Math.min(10, matched.length)) {
    const fallback = shuffle(matched.filter((q) => !ids.includes(q.id))).slice(
      0,
      Math.min(10, matched.length) - selected.length
    );

    return shuffle([...selected, ...fallback]);
  }

  return shuffle(selected).slice(0, 10);
}

function getQuestionContent(t, question) {
  const baseKey = `placement:${question.i18nKey}`;

  const options = t(`${baseKey}.options`, {
    returnObjects: true,
  });

  return {
    level: t(`${baseKey}.level`),
    type: t(`${baseKey}.type`),
    questionText: t(`${baseKey}.question`),
    options: options && typeof options === "object" ? options : {},
    explain: t(`${baseKey}.explain`),
  };
}

function getCategorySummary(testQuestions, answers) {
  return testQuestions.reduce((summary, question) => {
    if (!summary[question.category]) {
      summary[question.category] = {
        total: 0,
        correct: 0,
      };
    }

    summary[question.category].total += 1;

    if (answers[question.id] === question.answerKey) {
      summary[question.category].correct += 1;
    }

    return summary;
  }, {});
}

export default function PlacementTest() {
  const { t, i18n } = useTranslation(["common", "test", "placement"]);

  const [learnerName, setLearnerName] = useState("");
  const [learnerGroup, setLearnerGroup] = useState("beginner");
  const [courseId, setCourseId] = useState("python-foundation");
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState({});
  const [testId, setTestId] = useState(1);
  const [timeLeft, setTimeLeft] = useState(TEST_DURATION_SECONDS);
  const [formError, setFormError] = useState("");

  const selectedCourse = COURSE_OPTIONS.find((course) => course.id === courseId);
  const selectedGroup = LEARNER_GROUPS.find((group) => group.id === learnerGroup);

  const testQuestions = useMemo(() => {
    return selectPlacementQuestions(
      PLACEMENT_TEST_QUESTIONS,
      courseId,
      learnerGroup,
      testId
    );
  }, [courseId, learnerGroup, testId]);

  const totalQuestions = testQuestions.length;
  const answeredCount = Object.keys(answers).length;

  const score = testQuestions.reduce((total, question) => {
    return total + (answers[question.id] === question.answerKey ? 1 : 0);
  }, 0);

  const percent =
    totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  const resultKey = getResultKey(percent);
  const categorySummary = getCategorySummary(testQuestions, answers);

  const handleStart = () => {
    if (!learnerName.trim()) {
      setFormError(t("placement:ui.requiredName"));
      return;
    }

    if (totalQuestions === 0) {
      setFormError(t("placement:ui.noQuestions"));
      return;
    }

    setFormError("");
    setAnswers({});
    setSubmitted(false);
    setTimeLeft(TEST_DURATION_SECONDS);
    setTestId((value) => value + 1);
    setStarted(true);
  };

  useEffect(() => {
    if (!started || submitted) return;

    if (timeLeft <= 0) {
      setSubmitted(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [started, submitted, timeLeft]);

  const restart = () => {
    setAnswers({});
    setSubmitted(false);
    setStarted(false);
    setTimeLeft(TEST_DURATION_SECONDS);
    setFormError("");
    setTestId((value) => value + 1);
  };

  const handlePrintResult = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#e0e7ff,transparent_32%),radial-gradient(circle_at_top_right,#cffafe,transparent_28%),linear-gradient(to_bottom,#f8fafc,#eef2ff)] text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-10">
        <section className="relative mb-8 overflow-hidden rounded-[2rem] border border-white/20 bg-gradient-to-br from-slate-950 via-indigo-950 to-sky-900 p-6 text-white shadow-2xl shadow-indigo-950/20 md:p-8">
          <div className="relative z-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
                <ClipboardCheck size={16} />
                {t("placement:ui.badge")}
              </div>

              <h1 className="max-w-3xl text-3xl font-black leading-tight tracking-tight md:text-5xl">
                {t("placement:ui.title")}
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
                {t("placement:ui.subtitle")}
              </p>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/10 p-5 text-center shadow-xl backdrop-blur">
              <div className="text-4xl font-black">{totalQuestions}</div>
              <div className="text-sm text-white/70">
                {t("placement:ui.questionsPerRound")}
              </div>
            </div>
          </div>
        </section>

        {formError && (
          <div className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
            {formError}
          </div>
        )}

        {!started ? (
          <section className="rounded-[2rem] border border-white bg-white/85 p-6 shadow-xl shadow-slate-200/70 ring-1 ring-slate-200/70 backdrop-blur md:p-8">
            <h2 className="text-xl font-bold">
              {t("placement:ui.learnerInfo")}
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-slate-700">
                  {t("placement:ui.learnerName")}
                </span>

                <input
                  value={learnerName}
                  onChange={(event) => setLearnerName(event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  placeholder={t("placement:ui.learnerNamePlaceholder")}
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">
                  {t("placement:ui.learnerGroup")}
                </span>

                <select
                  value={learnerGroup}
                  onChange={(event) => setLearnerGroup(event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                >
                  {LEARNER_GROUPS.map((group) => (
                    <option key={group.id} value={group.id}>
                      {t(`test:${group.i18nKey}`)}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block md:col-span-2">
                <span className="text-sm font-medium text-slate-700">
                  {t("placement:ui.course")}
                </span>

                <select
                  value={courseId}
                  onChange={(event) => setCourseId(event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                >
                  {COURSE_OPTIONS.map((course) => (
                    <option key={course.id} value={course.id}>
                      {t(`placement:${course.i18nKey}.title`)}
                    </option>
                  ))}
                </select>

                <p className="mt-2 text-sm text-slate-500">
                  {t(`placement:${selectedCourse?.i18nKey}.desc`)}
                </p>
              </label>
            </div>

            <button
              type="button"
              onClick={handleStart}
              className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-sky-500 px-6 py-3 font-bold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:from-indigo-700 hover:to-sky-600"
            >
              <Target size={18} />
              {t("placement:ui.start")}
            </button>
          </section>
        ) : (
          <>
            <section className="sticky top-20 z-20 mb-5 flex flex-col gap-4 rounded-[1.5rem] border border-white bg-white/90 p-4 shadow-lg shadow-slate-200/70 ring-1 ring-slate-200/70 backdrop-blur md:flex-row md:items-center md:justify-between">
              <div>
                <div className="font-semibold">
                  {learnerName} ·{" "}
                  {selectedGroup ? t(`test:${selectedGroup.i18nKey}`) : ""} ·{" "}
                  {t(`placement:${selectedCourse?.i18nKey}.title`)}
                </div>

                <div className="text-sm text-slate-500">
                  {t("placement:ui.answered", {
                    answered: answeredCount,
                    total: totalQuestions,
                  })}
                </div>

                <div
                  className={`text-sm font-semibold ${
                    timeLeft <= 60 ? "text-red-600" : "text-indigo-600"
                  }`}
                >
                  {t("placement:ui.timeLeft", {
                    time: formatTime(timeLeft),
                  })}
                </div>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-200 shadow-inner md:w-80">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 transition-all"
                  style={{
                    width: `${(answeredCount / totalQuestions) * 100}%`,
                  }}
                />
              </div>
            </section>

            <div className="space-y-4">
              {testQuestions.map((question, index) => {
                const content = getQuestionContent(t, question);
                const selectedAnswer = answers[question.id];
                const isCorrect = selectedAnswer === question.answerKey;

                return (
                  <article
                    key={question.id}
                    className="rounded-[1.75rem] border border-white bg-white/90 p-5 shadow-lg shadow-slate-200/60 ring-1 ring-slate-200/70 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-xl md:p-6"
                  >
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold">
                        {t("placement:ui.question", { index: index + 1 })}
                      </span>

                      <span className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">
                        {content.level}
                      </span>

                      <span className="rounded-full bg-amber-50 px-3 py-1 text-sm text-amber-700">
                        {content.type}
                      </span>

                      <span className="rounded-full bg-violet-50 px-3 py-1 text-sm text-violet-700">
                        {t("placement:ui.difficulty", {
                          level: question.difficulty,
                        })}
                      </span>
                    </div>

                    <h3 className="text-lg font-black leading-7 text-slate-900 md:text-xl">
                      {content.questionText}
                    </h3>

                    <div className="mt-4 grid gap-3 md:grid-cols-2">
                      {Object.entries(content.options).map(([key, value]) => {
                        const selected = selectedAnswer === key;
                        const showCorrect =
                          submitted && key === question.answerKey;
                        const showWrong =
                          submitted && selected && key !== question.answerKey;

                        return (
                          <button
                            key={key}
                            type="button"
                            disabled={submitted}
                            onClick={() =>
                              setAnswers({
                                ...answers,
                                [question.id]: key,
                              })
                            }
                            className={`rounded-2xl border px-4 py-3 text-left transition ${
                              selected
                                ? "border-indigo-500 bg-indigo-50 shadow-sm ring-2 ring-indigo-100"
                                : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50/50 hover:shadow-md"
                            } ${showCorrect ? "border-green-500 bg-green-50" : ""} ${
                              showWrong ? "border-red-500 bg-red-50" : ""
                            }`}
                          >
                            <span className="mr-2 font-bold">{key}.</span>
                            {value}
                          </button>
                        );
                      })}
                    </div>

                    {submitted && (
                      <div
                        className={`mt-4 rounded-2xl p-4 text-sm ${
                          isCorrect
                            ? "bg-green-50 text-green-800"
                            : "bg-red-50 text-red-800"
                        }`}
                      >
                        <b>
                          {isCorrect
                            ? t("test:thinking.correct")
                            : t("test:thinking.wrong")}
                        </b>{" "}
                        {content.explain}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>

            {!submitted ? (
              <button
                type="button"
                disabled={answeredCount < totalQuestions}
                onClick={() => setSubmitted(true)}
                className="mt-7 w-full rounded-2xl bg-gradient-to-r from-indigo-600 to-sky-500 px-6 py-4 font-black text-white shadow-xl shadow-indigo-200 transition hover:-translate-y-0.5 hover:from-indigo-700 hover:to-sky-600 disabled:cursor-not-allowed disabled:from-slate-300 disabled:to-slate-300 disabled:shadow-none"
              >
                {t("placement:ui.submit")}
              </button>
            ) : (
              <section className="mt-7 rounded-[2rem] border border-white bg-white/95 p-6 shadow-2xl shadow-slate-200/80 ring-1 ring-slate-200/70 backdrop-blur md:p-8">
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div className="print-card flex-1">
                    <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-700">
                      <Trophy size={16} />
                      {t(`placement:results.${resultKey}.badge`)}
                    </div>

                    <h2 className="text-2xl font-black">
                      {t("placement:ui.resultSheet")}
                    </h2>

                    <div className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
                      <div>
                        <b>{t("placement:ui.learner")}:</b> {learnerName}
                      </div>

                      <div>
                        <b>{t("placement:ui.group")}:</b>{" "}
                        {selectedGroup ? t(`test:${selectedGroup.i18nKey}`) : ""}
                      </div>

                      <div>
                        <b>{t("placement:ui.course")}:</b>{" "}
                        {t(`placement:${selectedCourse?.i18nKey}.title`)}
                      </div>

                      <div>
                        <b>{t("placement:ui.score")}:</b> {score}/{totalQuestions}{" "}
                        ({percent}%)
                      </div>

                      <div>
                        <b>{t("placement:ui.duration")}:</b>{" "}
                        {formatTime(TEST_DURATION_SECONDS - timeLeft)}
                      </div>

                      <div>
                        <b>{t("placement:ui.printDate")}:</b>{" "}
                        {new Date().toLocaleDateString(
                          i18n.resolvedLanguage === "en" ? "en-US" : "vi-VN"
                        )}
                      </div>
                    </div>

                    <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                      <h3 className="font-bold">
                        {t(`placement:results.${resultKey}.title`)}
                      </h3>

                      <p className="mt-2 text-slate-600">
                        {t(`placement:results.${resultKey}.desc`)}
                      </p>
                    </div>

                    <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                      <h3 className="font-bold">
                        {t("placement:ui.skillAnalysis")}
                      </h3>

                      <div className="mt-3 grid gap-2 text-sm">
                        {Object.entries(categorySummary).map(([key, value]) => (
                          <div
                            key={key}
                            className="flex items-center justify-between rounded-xl bg-white px-3 py-2"
                          >
                            <span>{t(`placement:categories.${key}`)}</span>
                            <b>
                              {value.correct}/{value.total}
                            </b>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 rounded-2xl border border-indigo-100 bg-indigo-50 p-4">
                      <div className="flex items-start gap-3">
                        <BookOpen className="mt-0.5 text-indigo-700" size={20} />
                        <div>
                          <h3 className="font-bold text-indigo-900">
                            {t("placement:ui.nextStep")}
                          </h3>
                          <p className="mt-1 text-sm text-indigo-800">
                            {t(`placement:results.${resultKey}.nextStep`)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={restart}
                      className="no-print inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50"
                    >
                      <RotateCcw size={18} />
                      {t("placement:ui.restart")}
                    </button>

                    <button
                      type="button"
                      onClick={handlePrintResult}
                      className="no-print rounded-2xl bg-emerald-600 px-5 py-3 font-bold text-white shadow-lg shadow-emerald-100 transition hover:-translate-y-0.5 hover:bg-emerald-700"
                    >
                      {t("placement:ui.print")}
                    </button>
                  </div>
                </div>
              </section>
            )}
          </>
        )}
      </div>
    </div>
  );
}