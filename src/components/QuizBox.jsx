import React, { useMemo, useState } from "react";
import { CheckCircle2, HelpCircle, RotateCcw, XCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function QuizBox({ quiz = [], minimumScorePercent = 70, quizMinutes = 0 }) {
  const { t } = useTranslation("lessons");
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [attempt, setAttempt] = useState(1);

  const total = Array.isArray(quiz) ? quiz.length : 0;
  const answeredCount = Object.keys(answers).length;

  const score = useMemo(() => {
    if (!Array.isArray(quiz)) return 0;
    return quiz.reduce((sum, item, index) => sum + (answers[index] === item.answerKey ? 1 : 0), 0);
  }, [answers, quiz]);

  const percent = total > 0 ? Math.round((score / total) * 100) : 0;
  const passed = percent >= minimumScorePercent;

  if (!Array.isArray(quiz) || quiz.length === 0) return null;

  const reset = () => {
    setAnswers({});
    setSubmitted(false);
    setAttempt((value) => value + 1);
  };

  return (
    <section className="rounded-[2rem] border border-indigo-100 bg-indigo-50/70 p-5 md:p-6">
      <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 text-white">
            <HelpCircle size={21} />
          </div>
          <div>
            <h2 className="text-xl font-black text-indigo-950">{t("ui.quickQuiz")}</h2>
            <p className="text-sm leading-6 text-indigo-900/70">{t("ui.quickQuizDesc")}</p>
            <div className="mt-2 flex flex-wrap gap-2 text-xs font-black">
              <span className="rounded-full bg-white px-3 py-1 text-indigo-700 ring-1 ring-indigo-100">
                {t("ui.quizCount", { count: total })}
              </span>
              {quizMinutes > 0 && (
                <span className="rounded-full bg-white px-3 py-1 text-indigo-700 ring-1 ring-indigo-100">
                  {t("ui.quizMinutes", { count: quizMinutes })}
                </span>
              )}
              <span className="rounded-full bg-white px-3 py-1 text-indigo-700 ring-1 ring-indigo-100">
                {t("ui.minimumScore", { score: minimumScorePercent })}
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white px-4 py-3 text-sm font-black text-indigo-800 shadow-sm ring-1 ring-indigo-100">
          {t("ui.quizProgress", { answered: answeredCount, total })}
        </div>
      </div>

      <div className="space-y-5" key={attempt}>
        {quiz.map((item, index) => {
          const selected = answers[index];
          const isCorrect = selected === item.answerKey;

          return (
            <article key={`${item.question}-${index}`} className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-indigo-100">
              <h3 className="font-black leading-7 text-slate-950">
                {t("ui.quizQuestion", { index: index + 1 })}: {item.question}
              </h3>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {Object.entries(item.options || {}).map(([key, value]) => {
                  const active = selected === key;
                  const correct = submitted && key === item.answerKey;
                  const wrong = submitted && active && key !== item.answerKey;

                  return (
                    <button
                      key={key}
                      type="button"
                      disabled={submitted}
                      onClick={() => setAnswers((current) => ({ ...current, [index]: key }))}
                      className={`rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${
                        active ? "border-indigo-500 bg-indigo-50" : "border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50"
                      } ${correct ? "border-emerald-500 bg-emerald-50 text-emerald-800" : ""} ${
                        wrong ? "border-red-500 bg-red-50 text-red-800" : ""
                      }`}
                    >
                      <span className="mr-2 font-black">{key}.</span>
                      {value}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div className={`mt-4 flex items-start gap-3 rounded-2xl p-4 text-sm ${isCorrect ? "bg-emerald-50 text-emerald-800" : "bg-red-50 text-red-800"}`}>
                  {isCorrect ? <CheckCircle2 size={20} /> : <XCircle size={20} />}
                  <div>
                    <b>{isCorrect ? t("ui.correct") : t("ui.incorrect")}</b> {item.explain}
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>

      <div className="mt-6 flex flex-col gap-3 rounded-3xl bg-white p-4 shadow-sm ring-1 ring-indigo-100 md:flex-row md:items-center md:justify-between">
        <div className="text-sm font-bold text-slate-700">
          {submitted ? (
            <>
              <div>{t("ui.quizScore", { score, total, percent })}</div>
              <div className={passed ? "text-emerald-700" : "text-red-700"}>
                {passed ? t("ui.quizPassed") : t("ui.quizNotPassed")}
              </div>
            </>
          ) : (
            t("ui.quizProgress", { answered: answeredCount, total })
          )}
        </div>

        {!submitted ? (
          <button
            type="button"
            disabled={answeredCount < total}
            onClick={() => setSubmitted(true)}
            className="rounded-2xl bg-indigo-600 px-5 py-3 font-black text-white shadow-lg shadow-indigo-100 hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
          >
            {t("ui.submitQuiz")}
          </button>
        ) : (
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-5 py-3 font-black text-slate-700 hover:bg-slate-50"
          >
            <RotateCcw size={17} />
            {t("ui.retakeQuiz")}
          </button>
        )}
      </div>
    </section>
  );
}
