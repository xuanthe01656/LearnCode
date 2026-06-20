import React, { useMemo, useState } from "react";
import { CheckCircle2, Code2, Play, RotateCcw, TerminalSquare, XCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { runCodeTests } from "../services/codeRunner/codeRunnerService.js";

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

export default function CodeRunner({ exercise, lessonId }) {
  const { t } = useTranslation("lessons");
  const starterCode = exercise?.starterCode || "";
  const testCases = asArray(exercise?.testCases);
  const [code, setCode] = useState(starterCode);
  const [running, setRunning] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const passedCount = useMemo(() => results.filter((item) => item.passed).length, [results]);
  const allPassed = results.length > 0 && passedCount === results.length;

  if (!exercise?.enabled) return null;

  const handleRun = async () => {
    setRunning(true);
    setError("");
    setResults([]);

    try {
      const output = await runCodeTests({
        language: exercise.language || "python",
        version: exercise.version || "3.10.0",
        sourceCode: code,
        testCases,
      });
      setResults(output);
    } catch (err) {
      setError(err?.message || t("ui.apiNotReady"));
    } finally {
      setRunning(false);
    }
  };

  return (
    <section className="overflow-hidden rounded-[2rem] border border-sky-100 bg-sky-50 shadow-sm">
      <div className="bg-gradient-to-r from-slate-950 to-sky-900 p-6 text-white">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-black">
          <TerminalSquare size={16} />
          {t("ui.codePractice")}
        </div>
        <h2 className="text-2xl font-black">{exercise.title}</h2>
        <p className="mt-2 max-w-3xl text-white/80">{exercise.description}</p>
      </div>

      <div className="grid gap-5 p-5 lg:grid-cols-[1fr_360px]">
        <div>
          <div className="mb-3 flex items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 text-sm font-black text-slate-700">
              <Code2 size={17} />
              {t("ui.codeEditor")}
            </div>
            <button
              type="button"
              onClick={() => {
                setCode(starterCode);
                setResults([]);
                setError("");
              }}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-black text-slate-700 hover:bg-slate-50"
            >
              <RotateCcw size={14} />
              {t("ui.resetCode")}
            </button>
          </div>

          <textarea
            value={code}
            onChange={(event) => setCode(event.target.value)}
            spellCheck="false"
            className="min-h-[360px] w-full rounded-3xl border border-slate-800 bg-slate-950 p-4 font-mono text-sm leading-7 text-slate-100 outline-none ring-sky-200 transition focus:ring-4"
            aria-label={`${t("ui.codeEditor")} ${lessonId || ""}`}
          />

          <button
            type="button"
            onClick={handleRun}
            disabled={running || !code.trim() || testCases.length === 0}
            className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-sky-600 px-5 py-3 font-black text-white shadow-lg shadow-sky-100 hover:bg-sky-700 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
          >
            <Play size={18} />
            {running ? t("ui.running") : t("ui.runCode")}
          </button>

          {error && (
            <div className="mt-4 rounded-2xl border border-red-100 bg-red-50 p-4 text-sm font-semibold text-red-700">
              {error || t("ui.apiNotReady")}
            </div>
          )}

          {allPassed && exercise.successMessage && (
            <div className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm font-bold text-emerald-800">
              {exercise.successMessage}
            </div>
          )}
        </div>

        <aside className="space-y-4">
          {asArray(exercise.instructions).length > 0 && (
            <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-sky-100">
              <h3 className="font-black text-slate-950">{t("ui.teacherGuide")}</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                {exercise.instructions.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-sky-100">
            <h3 className="font-black text-slate-950">{t("ui.testCases")}</h3>
            <div className="mt-3 space-y-3">
              {testCases.map((testCase, index) => {
                const result = results[index];
                return (
                  <div key={`${testCase.name}-${index}`} className="rounded-2xl border border-slate-100 bg-slate-50 p-3 text-sm">
                    <div className="mb-2 flex items-center justify-between gap-2 font-black text-slate-800">
                      <span>{testCase.name}</span>
                      {result && (
                        <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs ${result.passed ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}>
                          {result.passed ? <CheckCircle2 size={14} /> : <XCircle size={14} />}
                          {result.passed ? t("ui.passed") : t("ui.failed")}
                        </span>
                      )}
                    </div>
                    <div className="space-y-2 text-xs text-slate-600">
                      <div>
                        <b>{t("ui.stdin")}:</b>
                        <pre className="mt-1 whitespace-pre-wrap rounded-xl bg-white p-2">{testCase.stdin || "-"}</pre>
                      </div>
                      <div>
                        <b>{t("ui.expectedOutput")}:</b>
                        <pre className="mt-1 whitespace-pre-wrap rounded-xl bg-white p-2">{testCase.expectedOutput || ""}</pre>
                      </div>
                      {result && (
                        <div>
                          <b>{t("ui.actualOutput")}:</b>
                          <pre className="mt-1 whitespace-pre-wrap rounded-xl bg-white p-2">{result.stderr || result.actualOutput || ""}</pre>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
