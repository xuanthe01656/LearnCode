import React, { useState } from "react";
import { CheckCircle2, HelpCircle, XCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function QuizBox({ quiz = [] }) {
  const { t } = useTranslation("lessons");
  const [answers, setAnswers] = useState({});

  if (!Array.isArray(quiz) || quiz.length === 0) return null;

  return (
    <section className="rounded-[2rem] border border-indigo-100 bg-indigo-50/60 p-5 md:p-6">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 text-white">
          <HelpCircle size={21} />
        </div>
        <div>
          <h2 className="text-xl font-black text-indigo-950">{t("ui.quickQuiz")}</h2>
          <p className="text-sm text-indigo-900/70">{t("ui.quickQuizDesc")}</p>
        </div>
      </div>

      <div className="space-y-5">
        {quiz.map((item, index) => {
          const selected = answers[index];
          const checked = Boolean(selected);
          const isCorrect = selected === item.answerKey;

          return (
            <article key={`${item.question}-${index}`} className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-indigo-100">
              <h3 className="font-black text-slate-950">
                {t("ui.quizQuestion", { index: index + 1 })}: {item.question}
              </h3>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {Object.entries(item.options || {}).map(([key, value]) => {
                  const active = selected === key;
                  const correct = checked && key === item.answerKey;
                  const wrong = checked && active && key !== item.answerKey;

                  return (
                    <button
                      key={key}
                      type="button"
                      disabled={checked}
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

              {checked && (
                <div
                  className={`mt-4 flex items-start gap-3 rounded-2xl p-4 text-sm ${
                    isCorrect ? "bg-emerald-50 text-emerald-800" : "bg-red-50 text-red-800"
                  }`}
                >
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
    </section>
  );
}
