import React, { useEffect, useMemo, useState } from "react";
import { Brain, RotateCcw, Trophy, Timer, UserRound, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  LEARNER_GROUPS,
  THINKING_TEST_QUESTIONS,
} from "../data/questions.js";

const TOTAL_QUESTIONS = 10;
const TEST_DURATION_SECONDS = 15 * 60;

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function pickDiverseQuestions(pool, count, excludedIds = []) {
  const excluded = new Set(excludedIds);
  const candidates = shuffle(pool.filter((question) => !excluded.has(question.id)));
  const selected = [];
  const usedCategories = new Set();

  candidates.forEach((question) => {
    if (selected.length >= count) return;

    if (!usedCategories.has(question.category)) {
      selected.push(question);
      usedCategories.add(question.category);
    }
  });

  if (selected.length < count) {
    const selectedIds = new Set(selected.map((question) => question.id));

    candidates.forEach((question) => {
      if (selected.length >= count) return;

      if (!selectedIds.has(question.id)) {
        selected.push(question);
        selectedIds.add(question.id);
      }
    });
  }

  return selected.slice(0, count);
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

function getGradeNumber(gradeText) {
  const match = String(gradeText).match(/\d+/);
  return match ? Number(match[0]) : 8;
}

function getResultKey(score) {
  if (score >= 8) return "groupA";
  if (score >= 5) return "groupB";
  return "groupC";
}

function getDifficultyRange(learnerGroup, grade) {
  if (learnerGroup === "career-switcher") return [3, 4, 5];
  if (learnerGroup === "working-adult") return [2, 3, 4];
  if (learnerGroup === "beginner") return [1, 2, 3];

  const selectedGrade = getGradeNumber(grade);

  if (selectedGrade <= 8) return [1, 2, 3];
  if (selectedGrade <= 10) return [2, 3, 4];

  return [3, 4, 5];
}

function selectThinkingQuestions(questions, learnerGroup, grade, testId) {
  const selectedGrade = getGradeNumber(grade);
  const allowedDifficulties = getDifficultyRange(learnerGroup, grade);

  const groupQuestions = questions.filter((question) => {
    const matchGroup = question.targetGroups.includes(learnerGroup);
    const matchDifficulty = allowedDifficulties.includes(question.difficulty);

    if (learnerGroup !== "student") {
      return matchGroup && matchDifficulty;
    }

    const matchGrade =
      question.levelMin <= selectedGrade + 1 &&
      question.levelMax >= selectedGrade - 1;

    return matchGroup && matchDifficulty && matchGrade;
  });

  const baseQuestions = groupQuestions.filter(
    (question) => question.difficulty <= allowedDifficulties[1]
  );

  const challengeQuestions = groupQuestions.filter(
    (question) => question.difficulty >= allowedDifficulties[1]
  );

  const selectedBase = pickDiverseQuestions(baseQuestions, 7);
  const selectedBaseIds = selectedBase.map((question) => question.id);

  const selectedChallenge = pickDiverseQuestions(
    challengeQuestions,
    3,
    selectedBaseIds
  );

  const selected = [...selectedBase, ...selectedChallenge];

  if (selected.length < TOTAL_QUESTIONS) {
    const selectedIds = selected.map((question) => question.id);

    const fallback = shuffle(
      questions.filter((question) => {
        const matchGroup = question.targetGroups.includes(learnerGroup);
        const notSelected = !selectedIds.includes(question.id);
        return matchGroup && notSelected;
      })
    ).slice(0, TOTAL_QUESTIONS - selected.length);

    return shuffle([...selected, ...fallback]);
  }

  return shuffle(selected).slice(0, TOTAL_QUESTIONS);
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

function getQuestionContent(t, question) {
  const baseKey = `test:${question.i18nKey}`;

  const options = t(`${baseKey}.options`, {
    returnObjects: true,
  });

  return {
    level: t(`${baseKey}.level`),
    type: t(`${baseKey}.type`),
    questionText: t(`${baseKey}.question`),
    options: options && typeof options === "object" ? options : {},
    explain: t(`${baseKey}.explain`),
    image: t(`${baseKey}.image`, { defaultValue: "" }),
    imageAlt: t(`${baseKey}.imageAlt`, { defaultValue: "" }),
    imageCaption: t(`${baseKey}.imageCaption`, { defaultValue: "" }),
  };
}

export default function ThinkingTest() {
  const { t, i18n } = useTranslation(["common", "test"]);

  const [learnerName, setLearnerName] = useState("");
  const [learnerGroup, setLearnerGroup] = useState("student");
  const [grade, setGrade] = useState("8");
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState({});
  const [testId, setTestId] = useState(1);
  const [timeLeft, setTimeLeft] = useState(TEST_DURATION_SECONDS);
  const [formError, setFormError] = useState("");

  const selectedGroup = LEARNER_GROUPS.find(
    (group) => group.id === learnerGroup
  );

  const testQuestions = useMemo(() => {
    return selectThinkingQuestions(
      THINKING_TEST_QUESTIONS,
      learnerGroup,
      grade,
      testId
    );
  }, [learnerGroup, grade, testId]);

  const answeredCount = Object.keys(answers).length;
  const progressPercent = (answeredCount / TOTAL_QUESTIONS) * 100;

  const score = testQuestions.reduce((total, question) => {
    return total + (answers[question.id] === question.answerKey ? 1 : 0);
  }, 0);

  const resultKey = getResultKey(score);
  const categorySummary = getCategorySummary(testQuestions, answers);

  const handleStart = () => {
    if (!learnerName.trim()) {
      setFormError(t("test:thinking.requiredName"));
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
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_30%),radial-gradient(circle_at_top_right,#e0e7ff,transparent_32%),linear-gradient(to_bottom,#f8fafc,#eef2ff)] text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-10">
        <section className="relative mb-8 overflow-hidden rounded-[2rem] border border-white/30 bg-gradient-to-br from-indigo-700 via-blue-700 to-sky-500 p-6 text-white shadow-2xl shadow-indigo-500/20 md:p-8">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />

          <div className="relative z-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
                <Brain size={16} />
                {t("test:thinking.badge")}
              </div>

              <h1 className="max-w-3xl text-3xl font-black leading-tight tracking-tight md:text-5xl">
                {t("test:thinking.title")}
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/90 md:text-lg">
                {t("test:thinking.subtitle")}
              </p>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/15 p-5 text-center shadow-xl backdrop-blur">
              <div className="text-4xl font-black">{TOTAL_QUESTIONS}</div>
              <div className="text-sm text-white/80">
                {t("test:thinking.questionsPerRound")}
              </div>
            </div>
          </div>
        </section>

        {formError && (
          <div className="mb-5 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700 shadow-sm">
            {formError}
          </div>
        )}

        {!started ? (
          <section className="rounded-[2rem] border border-white bg-white/85 p-6 shadow-xl shadow-slate-200/70 ring-1 ring-slate-200/70 backdrop-blur md:p-8">
            <div className="mb-6 flex items-start gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700">
                <UserRound size={22} />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  {t("test:thinking.learnerInfo")}
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  {t("test:thinking.subtitle")}
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-bold text-slate-700">
                  {t("test:thinking.learnerName")}
                </span>

                <input
                  value={learnerName}
                  onChange={(event) => setLearnerName(event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  placeholder={t("test:thinking.learnerNamePlaceholder")}
                />
              </label>

              <label className="block">
                <span className="text-sm font-bold text-slate-700">
                  {t("test:thinking.learnerGroup")}
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

              {selectedGroup?.gradeRequired && (
                <label className="block">
                  <span className="text-sm font-bold text-slate-700">
                    {t("test:thinking.grade")}
                  </span>

                  <select
                    value={grade}
                    onChange={(event) => setGrade(event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  >
                    {Array.from({ length: 7 }, (_, index) => String(index + 6)).map(
                      (item) => (
                        <option key={item} value={item}>
                          {t("test:thinking.gradeLabel")} {item}
                        </option>
                      )
                    )}
                  </select>
                </label>
              )}
            </div>

            <button
              type="button"
              onClick={handleStart}
              className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-sky-500 px-6 py-3 font-black text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:from-indigo-700 hover:to-sky-600"
            >
              <Sparkles size={18} />
              {t("test:thinking.start")}
            </button>
          </section>
        ) : (
          <>
            <section className="sticky top-20 z-20 mb-5 rounded-[1.5rem] border border-white bg-white/90 p-4 shadow-lg shadow-slate-200/70 ring-1 ring-slate-200/70 backdrop-blur">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="font-bold text-slate-900">
                    {learnerName || t("test:thinking.learner")} ·{" "}
                    {selectedGroup ? t(`test:${selectedGroup.i18nKey}`) : ""}
                    {selectedGroup?.gradeRequired
                      ? ` · ${t("test:thinking.gradeLabel")} ${grade}`
                      : ""}
                  </div>

                  <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                    <span>
                      {t("test:thinking.answered", {
                        answered: answeredCount,
                        total: TOTAL_QUESTIONS,
                      })}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 font-bold ${
                        timeLeft <= 60 ? "text-red-600" : "text-indigo-600"
                      }`}
                    >
                      <Timer size={15} />
                      {t("test:thinking.timeLeft", {
                        time: formatTime(timeLeft),
                      })}
                    </span>
                  </div>
                </div>

                <div className="w-full md:w-80">
                  <div className="mb-1 flex justify-between text-xs font-semibold text-slate-500">
                    <span>{answeredCount}/{TOTAL_QUESTIONS}</span>
                    <span>{Math.round(progressPercent)}%</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-slate-200 shadow-inner">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 transition-all"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>
              </div>
            </section>

            <div className="space-y-5">
              {testQuestions.map((question, index) => {
                const content = getQuestionContent(t, question);
                const selectedAnswer = answers[question.id];
                const isCorrect = selectedAnswer === question.answerKey;

                return (
                  <article
                    key={question.id}
                    className="rounded-[1.75rem] border border-white bg-white/90 p-5 shadow-lg shadow-slate-200/60 ring-1 ring-slate-200/70 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-xl md:p-6"
                  >
                    <div className="mb-4 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-slate-900 px-3 py-1 text-sm font-bold text-white">
                        {t("test:thinking.question", { index: index + 1 })}
                      </span>

                      <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                        {content.level}
                      </span>

                      <span className="rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700">
                        {content.type}
                      </span>

                      <span className="rounded-full bg-violet-50 px-3 py-1 text-sm font-semibold text-violet-700">
                        {t("test:thinking.difficulty", {
                          level: question.difficulty,
                        })}
                      </span>
                    </div>

                    <h3 className="text-lg font-black leading-7 text-slate-900 md:text-xl">
                      {content.questionText}
                    </h3>

                    {content.image && (
                      <figure className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-3">
                        <img
                          src={content.image}
                          alt={content.imageAlt || content.questionText}
                          loading="lazy"
                          className="mx-auto max-h-80 w-full object-contain"
                        />

                        {content.imageCaption && (
                          <figcaption className="mt-2 text-center text-sm text-slate-500">
                            {content.imageCaption}
                          </figcaption>
                        )}
                      </figure>
                    )}

                    <div className="mt-5 grid gap-3 md:grid-cols-2">
                      {Object.entries(content.options).map(([key, value]) => {
                        const selected = selectedAnswer === key;
                        const showCorrect = submitted && key === question.answerKey;
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
                            className={`group rounded-2xl border px-4 py-3 text-left transition ${
                              selected
                                ? "border-indigo-500 bg-indigo-50 shadow-sm ring-2 ring-indigo-100"
                                : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50/50 hover:shadow-md"
                            } ${showCorrect ? "border-green-500 bg-green-50" : ""} ${
                              showWrong ? "border-red-500 bg-red-50" : ""
                            }`}
                          >
                            <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-sm font-black text-slate-700 group-hover:bg-indigo-100 group-hover:text-indigo-700">
                              {key}
                            </span>
                            <span className="font-medium text-slate-800">{value}</span>
                          </button>
                        );
                      })}
                    </div>

                    {submitted && (
                      <div
                        className={`mt-4 rounded-2xl border p-4 text-sm ${
                          isCorrect
                            ? "border-green-100 bg-green-50 text-green-800"
                            : "border-red-100 bg-red-50 text-red-800"
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
                disabled={answeredCount < TOTAL_QUESTIONS}
                onClick={() => setSubmitted(true)}
                className="mt-7 w-full rounded-2xl bg-gradient-to-r from-indigo-600 to-sky-500 px-6 py-4 font-black text-white shadow-xl shadow-indigo-200 transition hover:-translate-y-0.5 hover:from-indigo-700 hover:to-sky-600 disabled:cursor-not-allowed disabled:from-slate-300 disabled:to-slate-300 disabled:shadow-none"
              >
                {t("test:thinking.submit")}
              </button>
            ) : (
              <section className="mt-7 rounded-[2rem] border border-white bg-white/95 p-6 shadow-2xl shadow-slate-200/80 ring-1 ring-slate-200/70 backdrop-blur md:p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="print-card flex-1">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-700">
                      <Trophy size={16} />
                      {t(`test:results.${resultKey}.badge`)}
                    </div>

                    <h2 className="text-3xl font-black text-slate-900">
                      {t("test:thinking.resultSheet")}
                    </h2>

                    <div className="mt-5 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
                      <div className="rounded-2xl bg-slate-50 p-3">
                        <b>{t("test:thinking.learner")}:</b> {learnerName}
                      </div>

                      <div className="rounded-2xl bg-slate-50 p-3">
                        <b>{t("test:thinking.group")}:</b>{" "}
                        {selectedGroup ? t(`test:${selectedGroup.i18nKey}`) : ""}
                      </div>

                      {selectedGroup?.gradeRequired && (
                        <div className="rounded-2xl bg-slate-50 p-3">
                          <b>{t("test:thinking.gradeLabel")}:</b> {grade}
                        </div>
                      )}

                      <div className="rounded-2xl bg-slate-50 p-3">
                        <b>{t("test:thinking.totalQuestions")}:</b>{" "}
                        {TOTAL_QUESTIONS}
                      </div>

                      <div className="rounded-2xl bg-slate-50 p-3">
                        <b>{t("test:thinking.score")}:</b> {score}/
                        {TOTAL_QUESTIONS}
                      </div>

                      <div className="rounded-2xl bg-slate-50 p-3">
                        <b>{t("test:thinking.duration")}:</b>{" "}
                        {formatTime(TEST_DURATION_SECONDS - timeLeft)}
                      </div>

                      <div className="rounded-2xl bg-slate-50 p-3">
                        <b>{t("test:thinking.printDate")}:</b>{" "}
                        {new Date().toLocaleDateString(
                          i18n.resolvedLanguage === "en" ? "en-US" : "vi-VN"
                        )}
                      </div>
                    </div>

                    <div className="mt-5 rounded-2xl border border-indigo-100 bg-indigo-50 p-4">
                      <h3 className="font-black text-indigo-950">
                        {t(`test:results.${resultKey}.title`)}
                      </h3>
                      <p className="mt-2 text-indigo-900/80">
                        {t(`test:results.${resultKey}.desc`)}
                      </p>
                    </div>

                    <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                      <h3 className="font-black">
                        {t("test:thinking.skillAnalysis")}
                      </h3>

                      <div className="mt-3 grid gap-2 text-sm">
                        {Object.entries(categorySummary).map(([key, value]) => (
                          <div
                            key={key}
                            className="flex items-center justify-between rounded-xl bg-white px-3 py-2 shadow-sm"
                          >
                            <span>{t(`test:categories.${key}`)}</span>
                            <b>
                              {value.correct}/{value.total}
                            </b>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-6 text-center text-sm">
                      <div className="border-t border-slate-300 pt-2">
                        {t("test:thinking.parent")}
                      </div>
                      <div className="border-t border-slate-300 pt-2">
                        {t("test:thinking.teacher")}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 md:flex-col">
                    <button
                      type="button"
                      onClick={restart}
                      className="no-print inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50"
                    >
                      <RotateCcw size={18} />
                      {t("test:thinking.restart")}
                    </button>

                    <button
                      type="button"
                      onClick={handlePrintResult}
                      className="no-print inline-flex items-center justify-center rounded-2xl bg-green-600 px-5 py-3 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-green-700"
                    >
                      {t("test:thinking.print")}
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
