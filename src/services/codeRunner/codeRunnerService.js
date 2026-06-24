const DEFAULT_CODE_RUNNER_ENDPOINT = "/api/code/execute";

function getEndpoint() {
  return import.meta.env?.VITE_CODE_RUNNER_ENDPOINT || DEFAULT_CODE_RUNNER_ENDPOINT;
}

export function normalizeOutput(value = "") {
  return String(value)
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n")
    .trim();
}

export async function executeCode({ language = "python", version = "3.10.0", sourceCode, stdin = "" }) {
  const response = await fetch(getEndpoint(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ language, version, sourceCode, stdin }),
  });

  let payload;
  try {
    payload = await response.json();
  } catch {
    payload = { error: "Invalid code runner response" };
  }

  if (!response.ok) {
    const message = payload?.error || payload?.message || "Code runner request failed";
    const error = new Error(message);
    error.payload = payload;
    throw error;
  }

  return payload;
}

export async function runCodeTests({ language = "python", version = "3.10.0", sourceCode, testCases = [] }) {
  const results = [];

  for (const testCase of testCases) {
    const startedAt = Date.now();
    const run = await executeCode({
      language,
      version,
      sourceCode,
      stdin: testCase.stdin || "",
    });

    const actual = normalizeOutput(run.stdout || run.output || "");
    const expected = normalizeOutput(testCase.expectedOutput || "");
    const stderr = run.stderr || "";
    const passed = !stderr && actual === expected;

    results.push({
      ...testCase,
      actualOutput: actual,
      expectedOutput: expected,
      stderr,
      status: run.status || "finished",
      statusId: run.statusId ?? null,
      exitCode: run.exitCode,
      durationMs: Date.now() - startedAt,
      passed,
      raw: run,
    });
  }

  return results;
}
