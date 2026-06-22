function sendJson(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(body));
}

function parseBody(req) {
  if (typeof req.body === "object" && req.body !== null) return req.body;
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }
  return {};
}

function normalizeProviderOutput(data, provider) {
  if (provider === "judge0") {
    return {
      provider,
      status: data?.status?.description || "finished",
      stdout: data?.stdout || "",
      stderr: data?.stderr || data?.compile_output || data?.message || "",
      output: data?.stdout || data?.stderr || data?.compile_output || data?.message || "",
      exitCode: data?.exit_code ?? null,
      rawStatus: data?.status || null,
    };
  }

  const run = data?.run || {};
  const compile = data?.compile || {};
  return {
    provider,
    status: run.code === 0 ? "success" : "finished",
    stdout: run.stdout || "",
    stderr: run.stderr || compile.stderr || "",
    output: run.output || compile.output || "",
    exitCode: run.code ?? null,
    signal: run.signal || null,
  };
}

async function runWithPiston({ language, version, sourceCode, stdin }) {
  const endpoint =
    process.env.PISTON_API_URL || "https://emkc.org/api/v2/piston/execute";

  const headers = {
    "Content-Type": "application/json",
  };

  if (process.env.PISTON_AUTH_TOKEN) {
    headers.Authorization = `Bearer ${process.env.PISTON_AUTH_TOKEN}`;
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify({
      language: language || "python",
      version: version || process.env.PISTON_PYTHON_VERSION || "3.10.0",
      files: [{ name: "main.py", content: sourceCode }],
      stdin: stdin || "",
      run_timeout: Number(process.env.CODE_RUNNER_TIMEOUT_MS || 3000),
      compile_timeout: Number(process.env.CODE_RUNNER_TIMEOUT_MS || 3000),
    }),
  });

  const text = await response.text();

  let data = {};
  try {
    data = JSON.parse(text);
  } catch {
    data = {};
  }

  if (!response.ok) {
    console.error("Piston API error:", {
      status: response.status,
      endpoint,
      body: text,
    });

    throw new Error(
      data?.message ||
        data?.error ||
        `Piston execution failed with status ${response.status}`
    );
  }

  return normalizeProviderOutput(data, "piston");
}

async function runWithJudge0({ language, sourceCode, stdin }) {
  const baseUrl = process.env.JUDGE0_API_URL;
  if (!baseUrl) throw new Error("JUDGE0_API_URL is not configured");

  const languageId = Number(process.env.JUDGE0_PYTHON_LANGUAGE_ID || 71);
  const endpoint = `${baseUrl.replace(/\/+$/, "")}/submissions?base64_encoded=false&wait=true`;
  const headers = { "Content-Type": "application/json" };

  if (process.env.JUDGE0_API_KEY) headers["X-RapidAPI-Key"] = process.env.JUDGE0_API_KEY;
  if (process.env.JUDGE0_API_HOST) headers["X-RapidAPI-Host"] = process.env.JUDGE0_API_HOST;
  if (process.env.JUDGE0_AUTH_TOKEN) headers.Authorization = `Bearer ${process.env.JUDGE0_AUTH_TOKEN}`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify({
      language_id: language === "python" ? languageId : languageId,
      source_code: sourceCode,
      stdin: stdin || "",
    }),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data?.message || "Judge0 execution failed");
  }
  return normalizeProviderOutput(data, "judge0");
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return sendJson(res, 405, { error: "Method not allowed" });
  }

  const body = parseBody(req);
  const sourceCode = String(body.sourceCode || "");

  if (!sourceCode.trim()) {
    return sendJson(res, 400, { error: "sourceCode is required" });
  }

  if (sourceCode.length > Number(process.env.CODE_RUNNER_MAX_CHARS || 20000)) {
    return sendJson(res, 413, { error: "Source code is too large" });
  }

  try {
    const provider = (process.env.CODE_RUNNER_PROVIDER || "piston").toLowerCase();
    const payload = {
      language: body.language || "python",
      version: body.version || "3.10.0",
      sourceCode,
      stdin: String(body.stdin || ""),
    };

    const result = provider === "judge0" ? await runWithJudge0(payload) : await runWithPiston(payload);
    return sendJson(res, 200, result);
  } catch (error) {
    return sendJson(res, 500, { error: error?.message || "Code execution failed" });
  }
};
