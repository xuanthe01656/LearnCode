import React, { useMemo, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Code2,
  Copy,
  ListChecks,
  Play,
  RotateCcw,
  TerminalSquare,
  XCircle,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { executeCode, normalizeOutput, runCodeTests } from "../services/codeRunner/codeRunnerService.js";

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function hasInputCall(source = "") {
  return /(^|[^A-Za-z0-9_])input\s*\(/.test(String(source));
}

function firstNonEmptyInput(testCases) {
  const sample = testCases.find((item) => String(item?.stdin || "").length > 0);
  return sample?.stdin || "";
}

function valueOrDash(value = "") {
  const text = String(value ?? "");
  return text.length > 0 ? text : "-";
}

function ResultBox({ title, value, tone = "slate" }) {
  const toneClass =
    tone === "red"
      ? "border-red-100 bg-red-50 text-red-900"
      : tone === "green"
        ? "border-emerald-100 bg-emerald-50 text-emerald-900"
        : "border-slate-200 bg-slate-50 text-slate-800";

  return (
    <div className={`rounded-2xl border p-3 text-xs ${toneClass}`}>
      <div className="mb-1 font-black uppercase tracking-wide opacity-70">{title}</div>
      <pre className="max-h-56 overflow-auto whitespace-pre-wrap break-words rounded-xl bg-white/70 p-3 font-mono leading-6 text-slate-900">{valueOrDash(value)}</pre>
    </div>
  );
}

export default function CodeRunner({ exercise, lessonId }) {
  const { t } = useTranslation("lessons");
  const tx = (key, fallback, options = {}) => t(key, { defaultValue: fallback, ...options });

  const starterCode = exercise?.starterCode || "";
  const testCases = asArray(exercise?.testCases);
  const sampleInput = firstNonEmptyInput(testCases);

  const [code, setCode] = useState(starterCode);
  const [customInput, setCustomInput] = useState(sampleInput);
  const [activePanel, setActivePanel] = useState(sampleInput ? "manual" : "tests");
  const [runningMode, setRunningMode] = useState("");
  const [manualResult, setManualResult] = useState(null);
  const [testResults, setTestResults] = useState([]);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const running = Boolean(runningMode);
  const passedCount = useMemo(() => testResults.filter((item) => item.passed).length, [testResults]);
  const allPassed = testResults.length > 0 && passedCount === testResults.length;
  const codeUsesInput = hasInputCall(code) || testCases.some((item) => String(item?.stdin || "").length > 0);

  if (!exercise?.enabled) return null;

  const language = exercise.language || "python";
  const version = exercise.version || "3.10.0";
  const compiler = exercise.compiler || "";

  const clearRunState = () => {
    setManualResult(null);
    setTestResults([]);
    setError("");
  };

  const resetAll = () => {
    setCode(starterCode);
    setCustomInput(sampleInput);
    setManualResult(null);
    setTestResults([]);
    setError("");
    setCopied(false);
  };

  const handleCopyStarter = async () => {
    try {
      await navigator.clipboard.writeText(starterCode);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  };

  const handleRunManual = async () => {
    setRunningMode("manual");
    setError("");
    setManualResult(null);

    try {
      const startedAt = Date.now();
      const run = await executeCode({ language, version, compiler, sourceCode: code, stdin: customInput });
      const stdout = run.stdout || run.output || "";
      const stderr = run.stderr || "";

      setManualResult({
        ...run,
        stdout,
        stderr,
        normalizedOutput: normalizeOutput(stdout),
        durationMs: Date.now() - startedAt,
      });
    } catch (err) {
      setError(err?.message || tx("ui.apiNotReady", "Code execution is not ready."));
    } finally {
      setRunningMode("");
    }
  };

  const handleRunTests = async () => {
    setRunningMode("tests");
    setError("");
    setTestResults([]);
    setActivePanel("tests");

    try {
      const output = await runCodeTests({ language, version, compiler, sourceCode: code, testCases });
      setTestResults(output);
    } catch (err) {
      setError(err?.message || tx("ui.apiNotReady", "Code execution is not ready."));
    } finally {
      setRunningMode("");
    }
  };

  return (
    <section className="overflow-hidden rounded-[2rem] border border-sky-100 bg-sky-50 shadow-sm">
      <div className="bg-gradient-to-r from-slate-950 to-sky-900 p-6 text-white">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-black">
          <TerminalSquare size={16} />
          {tx("ui.codePractice", "Live code practice")}
        </div>
        <h2 className="text-2xl font-black">{exercise.title}</h2>
        <p className="mt-2 max-w-3xl text-white/80">{exercise.description}</p>
      </div>

      <div className="grid gap-5 p-5 xl:grid-cols-[1fr_420px]">
        <div>
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 text-sm font-black text-slate-700">
              <Code2 size={17} />
              {tx("ui.codeEditor", "Code editor")}
            </div>

            <div className="flex flex-wrap gap-2">
              {starterCode && (
                <button
                  type="button"
                  onClick={handleCopyStarter}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-black text-slate-700 hover:bg-slate-50"
                >
                  <Copy size={14} />
                  {copied ? tx("ui.copied", "Copied") : tx("ui.copyStarter", "Copy starter code")}
                </button>
              )}

              <button
                type="button"
                onClick={resetAll}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-black text-slate-700 hover:bg-slate-50"
              >
                <RotateCcw size={14} />
                {tx("ui.resetCode", "Reset starter code")}
              </button>
            </div>
          </div>

          <textarea
            value={code}
            onChange={(event) => {
              setCode(event.target.value);
              clearRunState();
            }}
            spellCheck="false"
            className="min-h-[420px] w-full rounded-3xl border border-slate-800 bg-slate-950 p-4 font-mono text-sm leading-7 text-slate-100 outline-none ring-sky-200 transition focus:ring-4"
            aria-label={`${tx("ui.codeEditor", "Code editor")} ${lessonId || ""}`}
          />

          <div className="mt-4 flex flex-col gap-3 rounded-3xl border border-sky-100 bg-white p-4 text-sm text-slate-700 md:flex-row md:items-start">
            <AlertTriangle className="mt-0.5 shrink-0 text-amber-600" size={20} />
            <div className="leading-6">
              <b>{tx("ui.inputNoteTitle", "How input() is handled:")}</b>{" "}
              {tx("ui.inputNoteBody", "Type all input lines before running. Each line in the Standard input box will be read by one input() call in order.")}
            </div>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-3xl bg-white p-2 shadow-sm ring-1 ring-sky-100">
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setActivePanel("manual")}
                className={`rounded-2xl px-4 py-3 text-sm font-black transition ${activePanel === "manual" ? "bg-sky-600 text-white" : "text-slate-600 hover:bg-slate-50"}`}
              >
                {tx("ui.runWithInput", "Run with input")}
              </button>
              <button
                type="button"
                onClick={() => setActivePanel("tests")}
                className={`rounded-2xl px-4 py-3 text-sm font-black transition ${activePanel === "tests" ? "bg-sky-600 text-white" : "text-slate-600 hover:bg-slate-50"}`}
              >
                {tx("ui.runTests", "Run tests")}
              </button>
            </div>
          </div>

          {activePanel === "manual" && (
            <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-sky-100">
              <div className="mb-3 flex items-center justify-between gap-3">
                <h3 className="font-black text-slate-950">{tx("ui.standardInput", "Standard input")}</h3>
                <span className={`rounded-full px-3 py-1 text-xs font-black ${codeUsesInput ? "bg-amber-50 text-amber-700" : "bg-slate-100 text-slate-500"}`}>
                  {codeUsesInput ? tx("ui.inputRequired", "Input expected") : tx("ui.inputOptional", "Input optional")}
                </span>
              </div>

              <textarea
                value={customInput}
                onChange={(event) => {
                  setCustomInput(event.target.value);
                  setManualResult(null);
                  setError("");
                }}
                spellCheck="false"
                placeholder={sampleInput ? tx("ui.stdinPlaceholderWithSample", "Example input from a test case will be placed here. Edit it and run again.") : tx("ui.stdinPlaceholder", "Leave empty if the program does not use input().")}
                className="min-h-[140px] w-full rounded-2xl border border-slate-200 bg-slate-50 p-3 font-mono text-sm leading-6 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                aria-label={tx("ui.standardInput", "Standard input")}
              />

              {testCases.some((item) => String(item?.stdin || "").length > 0) && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {testCases.map((testCase, index) => (
                    <button
                      key={`${testCase.name || "case"}-${index}`}
                      type="button"
                      onClick={() => setCustomInput(testCase.stdin || "")}
                      className="rounded-xl border border-sky-100 bg-sky-50 px-3 py-2 text-xs font-black text-sky-700 hover:bg-sky-100"
                    >
                      {tx("ui.useSampleInput", "Use sample {{index}}", { index: index + 1 })}
                    </button>
                  ))}
                </div>
              )}

              <button
                type="button"
                onClick={handleRunManual}
                disabled={running || !code.trim()}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-sky-600 px-5 py-3 font-black text-white shadow-lg shadow-sky-100 hover:bg-sky-700 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
              >
                <Play size={18} />
                {runningMode === "manual" ? tx("ui.running", "Running...") : tx("ui.runThisInput", "Run this input")}
              </button>

              {manualResult && (
                <div className="mt-4 space-y-3">
                  <div className={`rounded-2xl border p-3 text-sm font-bold ${manualResult.stderr ? "border-red-100 bg-red-50 text-red-800" : "border-emerald-100 bg-emerald-50 text-emerald-800"}`}>
                    {manualResult.stderr ? tx("ui.runFinishedWithError", "Run finished with an error") : tx("ui.runFinished", "Run finished")}
                    <div className="mt-1 text-xs font-semibold opacity-75">
                      {manualResult.provider || "wandbox"} {manualResult.compiler ? `- ${manualResult.compiler}` : ""}
                    </div>
                  </div>
                  <ResultBox title={tx("ui.stdin", "Input")} value={customInput} />
                  <ResultBox title={tx("ui.actualOutput", "Actual output")} value={manualResult.stdout} tone={manualResult.stderr ? "red" : "green"} />
                  {manualResult.stderr && <ResultBox title="stderr" value={manualResult.stderr} tone="red" />}
                </div>
              )}
            </div>
          )}

          {activePanel === "tests" && (
            <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-sky-100">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-black text-slate-950">{tx("ui.testCases", "Test cases")}</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {tx("ui.testCasesDesc", "The system runs your code once per test case and sends each case's input through stdin.")}
                  </p>
                </div>
                {testResults.length > 0 && (
                  <span className={`rounded-full px-3 py-1 text-xs font-black ${allPassed ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}>
                    {passedCount}/{testResults.length}
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={handleRunTests}
                disabled={running || !code.trim() || testCases.length === 0}
                className="mb-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 font-black text-white shadow-lg shadow-indigo-100 hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
              >
                <ListChecks size={18} />
                {runningMode === "tests" ? tx("ui.running", "Running...") : tx("ui.runCode", "Run code tests")}
              </button>

              {testCases.length === 0 && (
                <div className="rounded-2xl border border-amber-100 bg-amber-50 p-4 text-sm font-semibold text-amber-800">
                  {tx("ui.noTestCases", "This exercise has no automatic test cases yet. Use manual input to run code.")}
                </div>
              )}

              <div className="space-y-3">
                {testCases.map((testCase, index) => {
                  const result = testResults[index];
                  return (
                    <div key={`${testCase.name || "case"}-${index}`} className="rounded-2xl border border-slate-100 bg-slate-50 p-3 text-sm">
                      <div className="mb-2 flex items-center justify-between gap-2 font-black text-slate-800">
                        <span>{testCase.name || tx("ui.testCase", "Test case {{index}}", { index: index + 1 })}</span>
                        {result && (
                          <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs ${result.passed ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}>
                            {result.passed ? <CheckCircle2 size={14} /> : <XCircle size={14} />}
                            {result.passed ? tx("ui.passed", "Passed") : tx("ui.failed", "Failed")}
                          </span>
                        )}
                      </div>

                      <div className="space-y-2 text-xs text-slate-600">
                        <div>
                          <b>{tx("ui.stdin", "Input")}:</b>
                          <pre className="mt-1 whitespace-pre-wrap rounded-xl bg-white p-2 font-mono">{valueOrDash(testCase.stdin)}</pre>
                        </div>
                        <div>
                          <b>{tx("ui.expectedOutput", "Expected output")}:</b>
                          <pre className="mt-1 whitespace-pre-wrap rounded-xl bg-white p-2 font-mono">{valueOrDash(testCase.expectedOutput)}</pre>
                        </div>
                        {result && (
                          <>
                            <div>
                              <b>{tx("ui.actualOutput", "Actual output")}:</b>
                              <pre className="mt-1 whitespace-pre-wrap rounded-xl bg-white p-2 font-mono">{valueOrDash(result.stderr || result.actualOutput)}</pre>
                            </div>
                            {result.hint && !result.passed && (
                              <div className="rounded-xl bg-amber-50 p-2 font-semibold text-amber-800">{result.hint}</div>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {allPassed && exercise.successMessage && (
                <div className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm font-bold text-emerald-800">
                  {exercise.successMessage}
                </div>
              )}
            </div>
          )}

          {asArray(exercise.instructions).length > 0 && (
            <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-sky-100">
              <h3 className="font-black text-slate-950">{tx("ui.practiceInstructions", "Practice instructions")}</h3>
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

          {error && (
            <div className="rounded-2xl border border-red-100 bg-red-50 p-4 text-sm font-semibold text-red-700">
              {error || tx("ui.apiNotReady", "Code execution is not ready.")}
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}
