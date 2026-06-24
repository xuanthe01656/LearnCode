function sendJson(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(body));
}

async function readRawBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => resolve(data));
    req.on("error", reject);
  });
}

async function parseBody(req) {
  if (typeof req.body === "object" && req.body !== null) return req.body;

  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }

  const rawBody = await readRawBody(req).catch(() => "");
  if (!rawBody) return {};

  try {
    return JSON.parse(rawBody);
  } catch {
    return {};
  }
}

function toNumber(value, fallback) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getJudge0BaseUrl() {
  const baseUrl = process.env.JUDGE0_API_URL || "http://127.0.0.1:2358";
  return baseUrl
    .replace(/\/+$/, "")
    .replace(/\/submissions\/?$/, "");
}

function getJudge0Headers() {
  const headers = {
    "Content-Type": "application/json",
  };

  // Judge0 self-host normally uses X-Auth-Token when authentication is enabled.
  // You can override the header name if your Judge0 instance uses a custom one.
  const authToken = process.env.JUDGE0_AUTH_TOKEN || process.env.JUDGE0_API_KEY;
  const authHeader = process.env.JUDGE0_AUTH_HEADER || "X-Auth-Token";

  if (authToken) {
    headers[authHeader] = authToken;
  }

  // Optional authorization header for admin-only endpoints or custom deployments.
  const authzToken = process.env.JUDGE0_AUTHZ_TOKEN;
  const authzHeader = process.env.JUDGE0_AUTHZ_HEADER || "X-Auth-User";

  if (authzToken) {
    headers[authzHeader] = authzToken;
  }

  return headers;
}

function getHttpTimeoutMs() {
  return toNumber(process.env.CODE_RUNNER_HTTP_TIMEOUT_MS, 10000);
}

async function fetchJson(url, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), getHttpTimeoutMs());

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });

    const text = await response.text();
    let data = {};

    try {
      data = text ? JSON.parse(text) : {};
    } catch {
      data = { raw: text };
    }

    if (!response.ok) {
      const message =
        data?.message ||
        data?.error ||
        data?.raw ||
        response.statusText ||
        "Judge0 request failed";

      throw new Error(`Judge0 HTTP ${response.status}: ${message}`);
    }

    return data;
  } catch (error) {
    if (error?.name === "AbortError") {
      throw new Error(`Judge0 request timed out after ${getHttpTimeoutMs()}ms`);
    }

    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

let cachedLanguages = null;
let cachedLanguagesAt = 0;

function parseVersionFromName(name) {
  const match = String(name || "").match(/(\d+)\.(\d+)(?:\.(\d+))?/);
  if (!match) return [0, 0, 0];
  return [Number(match[1] || 0), Number(match[2] || 0), Number(match[3] || 0)];
}

function compareVersionDesc(a, b) {
  const av = parseVersionFromName(a?.name);
  const bv = parseVersionFromName(b?.name);

  for (let i = 0; i < Math.max(av.length, bv.length); i += 1) {
    const diff = (bv[i] || 0) - (av[i] || 0);
    if (diff !== 0) return diff;
  }

  return 0;
}

async function getJudge0Languages(baseUrl, headers) {
  const cacheTtlMs = toNumber(process.env.JUDGE0_LANGUAGE_CACHE_TTL_MS, 10 * 60 * 1000);
  const now = Date.now();

  if (cachedLanguages && now - cachedLanguagesAt < cacheTtlMs) {
    return cachedLanguages;
  }

  const languages = await fetchJson(`${baseUrl}/languages`, {
    method: "GET",
    headers,
  });

  cachedLanguages = Array.isArray(languages) ? languages : [];
  cachedLanguagesAt = now;

  return cachedLanguages;
}

async function resolveJudge0LanguageId({ language, version, baseUrl, headers }) {
  const normalized = String(language || "python").toLowerCase();

  const explicitMap = {
    python: process.env.JUDGE0_PYTHON_LANGUAGE_ID,
    py: process.env.JUDGE0_PYTHON_LANGUAGE_ID,
    javascript: process.env.JUDGE0_JAVASCRIPT_LANGUAGE_ID,
    js: process.env.JUDGE0_JAVASCRIPT_LANGUAGE_ID,
    cpp: process.env.JUDGE0_CPP_LANGUAGE_ID,
    cplusplus: process.env.JUDGE0_CPP_LANGUAGE_ID,
    c: process.env.JUDGE0_C_LANGUAGE_ID,
    java: process.env.JUDGE0_JAVA_LANGUAGE_ID,
  };

  const explicitId = explicitMap[normalized];
  if (explicitId) return Number(explicitId);

  if (process.env.JUDGE0_AUTO_DETECT_LANGUAGE_ID === "false") {
    return 71;
  }

  const languages = await getJudge0Languages(baseUrl, headers);
  const requestedVersion = String(version || "").trim();

  if (normalized === "python" || normalized === "py") {
    const pythonCandidates = languages
      .filter((item) => /python/i.test(item?.name || ""))
      .filter((item) => !/python\s*\(2\./i.test(item?.name || ""));

    const exact = pythonCandidates.find((item) =>
      requestedVersion ? String(item?.name || "").includes(requestedVersion) : false
    );

    if (exact?.id) return Number(exact.id);

    const latestPython3 = [...pythonCandidates].sort(compareVersionDesc)[0];
    if (latestPython3?.id) return Number(latestPython3.id);
  }

  if (normalized === "javascript" || normalized === "js") {
    const candidate = [...languages]
      .filter((item) => /javascript|node\.js/i.test(item?.name || ""))
      .sort(compareVersionDesc)[0];
    if (candidate?.id) return Number(candidate.id);
  }

  if (normalized === "cpp" || normalized === "cplusplus") {
    const candidate = [...languages]
      .filter((item) => /c\+\+/i.test(item?.name || ""))
      .sort(compareVersionDesc)[0];
    if (candidate?.id) return Number(candidate.id);
  }

  if (normalized === "c") {
    const candidate = [...languages]
      .filter((item) => /^c\s*\(/i.test(item?.name || ""))
      .sort(compareVersionDesc)[0];
    if (candidate?.id) return Number(candidate.id);
  }

  if (normalized === "java") {
    const candidate = [...languages]
      .filter((item) => /java\s*\(/i.test(item?.name || ""))
      .sort(compareVersionDesc)[0];
    if (candidate?.id) return Number(candidate.id);
  }

  return 71;
}

function isJudge0Pending(data) {
  const statusId = Number(data?.status?.id || 0);

  // Judge0 status 1 = In Queue, 2 = Processing.
  if (statusId === 1 || statusId === 2) return true;

  // wait=false returns only a token at first.
  const keys = Object.keys(data || {});
  return Boolean(data?.token && keys.length <= 1);
}

function normalizeJudge0Output(data) {
  const statusId = data?.status?.id ?? null;
  const statusDescription = data?.status?.description || "finished";
  let stderr = data?.stderr || data?.compile_output || data?.message || "";

  if (statusId && Number(statusId) !== 3 && !stderr) {
    stderr = statusDescription;
  }

  return {
    provider: "judge0-self-host",
    status: statusDescription,
    statusId,
    stdout: data?.stdout || "",
    stderr,
    output: data?.stdout || stderr || "",
    exitCode: data?.exit_code ?? null,
    exitSignal: data?.exit_signal ?? null,
    time: data?.time ?? null,
    wallTime: data?.wall_time ?? null,
    memory: data?.memory ?? null,
    token: data?.token || null,
    rawStatus: data?.status || null,
  };
}

async function pollJudge0Submission({ baseUrl, headers, token }) {
  const startedAt = Date.now();
  const timeoutMs = toNumber(process.env.JUDGE0_POLL_TIMEOUT_MS, 10000);
  const intervalMs = toNumber(process.env.JUDGE0_POLL_INTERVAL_MS, 300);
  const fields = [
    "stdout",
    "stderr",
    "compile_output",
    "message",
    "status",
    "exit_code",
    "exit_signal",
    "time",
    "wall_time",
    "memory",
    "token",
  ].join(",");

  while (Date.now() - startedAt < timeoutMs) {
    const data = await fetchJson(
      `${baseUrl}/submissions/${encodeURIComponent(token)}?base64_encoded=false&fields=${fields}`,
      {
        method: "GET",
        headers,
      }
    );

    if (!isJudge0Pending(data)) return data;
    await sleep(intervalMs);
  }

  throw new Error(`Judge0 execution timeout while waiting for token ${token}`);
}

async function runWithJudge0({ language, version, sourceCode, stdin }) {
  const baseUrl = getJudge0BaseUrl();
  const headers = getJudge0Headers();
  const languageId = await resolveJudge0LanguageId({
    language,
    version,
    baseUrl,
    headers,
  });

  const wait = process.env.JUDGE0_WAIT === "false" ? "false" : "true";
  const endpoint = `${baseUrl}/submissions?base64_encoded=false&wait=${wait}`;

  const submission = await fetchJson(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify({
      language_id: languageId,
      source_code: sourceCode,
      stdin: stdin || "",
      cpu_time_limit: toNumber(process.env.JUDGE0_CPU_TIME_LIMIT, 3),
      cpu_extra_time: toNumber(process.env.JUDGE0_CPU_EXTRA_TIME, 1),
      wall_time_limit: toNumber(process.env.JUDGE0_WALL_TIME_LIMIT, 10),
      memory_limit: toNumber(process.env.JUDGE0_MEMORY_LIMIT, 128000),
      stack_limit: toNumber(process.env.JUDGE0_STACK_LIMIT, 64000),
      max_file_size: toNumber(process.env.JUDGE0_MAX_FILE_SIZE, 1024),
    }),
  });

  const finalSubmission = isJudge0Pending(submission)
    ? await pollJudge0Submission({
        baseUrl,
        headers,
        token: submission.token,
      })
    : submission;

  return normalizeJudge0Output(finalSubmission);
}

module.exports = async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Allow", "POST, OPTIONS");
    return sendJson(res, 204, {});
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return sendJson(res, 405, { error: "Method not allowed" });
  }

  const body = await parseBody(req);
  const sourceCode = String(body.sourceCode || "");

  if (!sourceCode.trim()) {
    return sendJson(res, 400, { error: "sourceCode is required" });
  }

  if (sourceCode.length > toNumber(process.env.CODE_RUNNER_MAX_CHARS, 20000)) {
    return sendJson(res, 413, { error: "Source code is too large" });
  }

  try {
    const result = await runWithJudge0({
      language: body.language || "python",
      version: body.version || "3.10.0",
      sourceCode,
      stdin: String(body.stdin || ""),
    });

    return sendJson(res, 200, result);
  } catch (error) {
    console.error("Judge0 self-host execution error:", error);

    return sendJson(res, 500, {
      error: error?.message || "Judge0 execution failed",
      provider: "judge0-self-host",
      hint: "Check JUDGE0_API_URL, Judge0 auth token, /languages endpoint, and whether your backend can reach the self-hosted Judge0 server.",
    });
  }
};
