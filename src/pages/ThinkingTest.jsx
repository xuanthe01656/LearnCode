import React, { useEffect, useMemo, useState } from "react";
import { Brain, RotateCcw, Trophy } from "lucide-react";
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

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

function getGradeNumber(gradeText) {
  const match = gradeText.match(/\d+/);
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

  const selectedBase = shuffle(baseQuestions).slice(0, 7);
  const selectedBaseIds = selectedBase.map((question) => question.id);

  const selectedChallenge = shuffle(
    challengeQuestions.filter(
      (question) => !selectedBaseIds.includes(question.id)
    )
  ).slice(0, 3);

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
  };
}

export default function ThinkingTest() {
  const { t, i18n } = useTranslation(["common", "test"]);

  const [learnerName, setLearnerName] = useState("");
  const [learnerGroup, setLearnerGroup] = useState("student");
  const [grade, setGrade] = useState("Lớp 8");
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
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="mb-6 rounded-3xl bg-gradient-to-br from-indigo-600 to-sky-500 p-6 text-white shadow-lg">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm">
                <Brain size={16} />
                {t("test:thinking.badge")}
              </div>

              <h1 className="text-3xl font-bold md:text-4xl">
                {t("test:thinking.title")}
              </h1>

              <p className="mt-2 max-w-2xl text-white/90">
                {t("test:thinking.subtitle")}
              </p>
            </div>

            <div className="rounded-2xl bg-white/15 p-4 text-center backdrop-blur">
              <div className="text-4xl font-bold">{TOTAL_QUESTIONS}</div>
              <div className="text-sm text-white/80">
                {t("test:thinking.questionsPerRound")}
              </div>
            </div>
          </div>
        </div>

        {formError && (
          <div className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {formError}
          </div>
        )}

        {!started ? (
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-bold">
              {t("test:thinking.learnerInfo")}
            </h2>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-slate-700">
                  {t("test:thinking.learnerName")}
                </span>

                <input
                  value={learnerName}
                  onChange={(event) => setLearnerName(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  placeholder={t("test:thinking.learnerNamePlaceholder")}
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">
                  {t("test:thinking.learnerGroup")}
                </span>

                <select
                  value={learnerGroup}
                  onChange={(event) => setLearnerGroup(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
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
                  <span className="text-sm font-medium text-slate-700">
                    {t("test:thinking.grade")}
                  </span>

                  <select
                    value={grade}
                    onChange={(event) => setGrade(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  >
                    {Array.from({ length: 7 }, (_, index) => `Lớp ${index + 6}`).map(
                      (item) => (
                        <option key={item}>{item}</option>
                      )
                    )}
                  </select>
                </label>
              )}
            </div>

            <button
              type="button"
              onClick={handleStart}
              className="mt-6 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow hover:bg-indigo-700"
            >
              {t("test:thinking.start")}
            </button>
          </div>
        ) : (
          <>
            <div className="mb-4 flex flex-col gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="font-semibold">
                  {learnerName || t("test:thinking.learner")} ·{" "}
                  {selectedGroup ? t(`test:${selectedGroup.i18nKey}`) : ""}
                  {selectedGroup?.gradeRequired ? ` · ${grade}` : ""}
                </div>

                <div className="text-sm text-slate-500">
                  {t("test:thinking.answered", {
                    answered: answeredCount,
                    total: TOTAL_QUESTIONS,
                  })}
                </div>

                <div
                  className={`text-sm font-semibold ${
                    timeLeft <= 60 ? "text-red-600" : "text-indigo-600"
                  }`}
                >
                  {t("test:thinking.timeLeft", {
                    time: formatTime(timeLeft),
                  })}
                </div>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-200 md:w-72">
                <div
                  className="h-full rounded-full bg-indigo-600 transition-all"
                  style={{
                    width: `${(answeredCount / TOTAL_QUESTIONS) * 100}%`,
                  }}
                />
              </div>
            </div>

            <div className="space-y-4">
              {testQuestions.map((question, index) => {
                const content = getQuestionContent(t, question);
                const selectedAnswer = answers[question.id];
                const isCorrect = selectedAnswer === question.answerKey;

                return (
                  <div
                    key={question.id}
                    className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
                  >
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold">
                        {t("test:thinking.question", { index: index + 1 })}
                      </span>

                      <span className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">
                        {content.level}
                      </span>

                      <span className="rounded-full bg-amber-50 px-3 py-1 text-sm text-amber-700">
                        {content.type}
                      </span>

                      <span className="rounded-full bg-violet-50 px-3 py-1 text-sm text-violet-700">
                        {t("test:thinking.difficulty", {
                          level: question.difficulty,
                        })}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold">
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
                                ? "border-indigo-500 bg-indigo-50"
                                : "border-slate-200 hover:border-indigo-300 hover:bg-slate-50"
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
                  </div>
                );
              })}
            </div>

            {!submitted ? (
              <button
                type="button"
                disabled={answeredCount < TOTAL_QUESTIONS}
                onClick={() => setSubmitted(true)}
                className="mt-6 w-full rounded-2xl bg-indigo-600 px-6 py-4 font-bold text-white shadow hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                {t("test:thinking.submit")}
              </button>
            ) : (
              <div className="mt-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="print-card">
                    <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-700">
                      <Trophy size={16} />
                      {t(`test:results.${resultKey}.badge`)}
                    </div>

                    <h2 className="text-2xl font-bold">
                      {t("test:thinking.resultSheet")}
                    </h2>

                    <div className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
                      <div>
                        <b>{t("test:thinking.learner")}:</b> {learnerName}
                      </div>

                      <div>
                        <b>{t("test:thinking.group")}:</b>{" "}
                        {selectedGroup ? t(`test:${selectedGroup.i18nKey}`) : ""}
                      </div>

                      {selectedGroup?.gradeRequired && (
                        <div>
                          <b>{t("test:thinking.gradeLabel")}:</b> {grade}
                        </div>
                      )}

                      <div>
                        <b>{t("test:thinking.totalQuestions")}:</b>{" "}
                        {TOTAL_QUESTIONS}
                      </div>

                      <div>
                        <b>{t("test:thinking.score")}:</b> {score}/
                        {TOTAL_QUESTIONS}
                      </div>

                      <div>
                        <b>{t("test:thinking.duration")}:</b>{" "}
                        {formatTime(TEST_DURATION_SECONDS - timeLeft)}
                      </div>

                      <div>
                        <b>{t("test:thinking.printDate")}:</b>{" "}
                        {new Date().toLocaleDateString(
                          i18n.resolvedLanguage === "en" ? "en-US" : "vi-VN"
                        )}
                      </div>
                    </div>

                    <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                      <h3 className="font-bold">
                        {t(`test:results.${resultKey}.title`)}
                      </h3>
                      <p className="mt-2 text-slate-600">
                        {t(`test:results.${resultKey}.desc`)}
                      </p>
                    </div>

                    <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                      <h3 className="font-bold">
                        {t("test:thinking.skillAnalysis")}
                      </h3>

                      <div className="mt-3 grid gap-2 text-sm">
                        {Object.entries(categorySummary).map(([key, value]) => (
                          <div
                            key={key}
                            className="flex items-center justify-between rounded-xl bg-white px-3 py-2"
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

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={restart}
                      className="no-print inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-semibold hover:bg-slate-50"
                    >
                      <RotateCcw size={18} />
                      {t("test:thinking.restart")}
                    </button>

                    <button
                      type="button"
                      onClick={handlePrintResult}
                      className="no-print inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700"
                    >
                      {t("test:thinking.print")}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}