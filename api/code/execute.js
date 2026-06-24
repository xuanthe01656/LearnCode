const DEFAULT_WANDBOX_API_URL = "https://wandbox.org";
const DEFAULT_MAX_SOURCE_CHARS = 20000;
const DEFAULT_HTTP_TIMEOUT_MS = 15000;
const DEFAULT_COMPILER_CACHE_TTL_MS = 60 * 60 * 1000;

const compilerListCache = new Map();

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

function normalizeBaseUrl(value) {
  return String(value || DEFAULT_WANDBOX_API_URL).replace(/\/+$/, "");
}

function parseNumber(value, fallback) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function safeString(value, fallback = "") {
  if (value === undefined || value === null) return fallback;
  return String(value);
}

function parseMaybeJson(text) {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function createAbortSignal(timeoutMs) {
  if (typeof AbortSignal !== "undefined" && typeof AbortSignal.timeout === "function") {
    return AbortSignal.timeout(timeoutMs);
  }

  const controller = new AbortController();
  setTimeout(() => controller.abort(), timeoutMs);
  return controller.signal;
}

function getVersionParts(value) {
  const match = String(value || "").match(/(\d+)\.(\d+)(?:\.(\d+))?/);
  if (!match) return [0, 0, 0];

  return [Number(match[1] || 0), Number(match[2] || 0), Number(match[3] || 0)];
}

function compareVersionDesc(a, b) {
  const left = getVersionParts(a?.version || a?.name || a?.["display-name"] || "");
  const right = getVersionParts(b?.version || b?.name || b?.["display-name"] || "");

  for (let index = 0; index < Math.max(left.length, right.length); index += 1) {
    if ((right[index] || 0) !== (left[index] || 0)) {
      return (right[index] || 0) - (left[index] || 0);
    }
  }

  return String(a?.name || "").localeCompare(String(b?.name || ""));
}

function getLanguageNeedle(language) {
  const normalized = String(language || "python").toLowerCase();

  if (normalized.includes("python")) return "python";
  if (normalized.includes("javascript") || normalized === "js") return "javascript";
  if (normalized.includes("typescript") || normalized === "ts") return "typescript";
  if (normalized.includes("cpp") || normalized.includes("c++")) return "c++";
  if (normalized === "c") return "c";

  return normalized;
}

function isCompilerForLanguage(item, language) {
  const needle = getLanguageNeedle(language);
  const languageName = String(item?.language || "").toLowerCase();
  const compilerName = String(item?.name || "").toLowerCase();
  const displayName = String(item?.["display-name"] || "").toLowerCase();

  if (needle === "python") {
    return (
      languageName.includes("python") ||
      compilerName.includes("python") ||
      compilerName.includes("cpython") ||
      compilerName.includes("pypy") ||
      displayName.includes("python") ||
      displayName.includes("cpython") ||
      displayName.includes("pypy")
    );
  }

  if (needle === "javascript") {
    return languageName.includes("javascript") || compilerName.includes("node") || compilerName.includes("javascript");
  }

  if (needle === "typescript") {
    return languageName.includes("typescript") || compilerName.includes("typescript") || compilerName.includes("tsc");
  }

  if (needle === "c++") {
    return languageName === "c++" || compilerName.includes("clang") || compilerName.includes("gcc");
  }

  return languageName.includes(needle) || compilerName.includes(needle) || displayName.includes(needle);
}

function scoreCompiler(item, language, version) {
  const needle = getLanguageNeedle(language);
  const desiredVersion = String(version || "").trim();
  const desiredMajorMinor = desiredVersion.split(".").slice(0, 2).join(".");
  const languageName = String(item?.language || "").toLowerCase();
  const compilerName = String(item?.name || "").toLowerCase();
  const displayName = String(item?.["display-name"] || "").toLowerCase();
  const versionText = String(item?.version || "").toLowerCase();
  const combined = `${compilerName} ${displayName} ${versionText}`;

  let score = 0;

  if (languageName.includes(needle)) score += 100;
  if (compilerName.includes(needle) || displayName.includes(needle)) score += 40;

  if (needle === "python") {
    if (compilerName.includes("cpython") || displayName.includes("cpython")) score += 70;
    if (compilerName.includes("python") || displayName.includes("python")) score += 50;
    if (compilerName.includes("pypy") || displayName.includes("pypy")) score -= 20;
  }

  if (desiredVersion && combined.includes(desiredVersion.toLowerCase())) score += 120;
  if (desiredMajorMinor && combined.includes(desiredMajorMinor.toLowerCase())) score += 80;
  if (combined.includes("head")) score -= 10;
  if (combined.includes("experimental")) score -= 15;

  return score;
}

async function fetchCompilerList(baseUrl, timeoutMs) {
  const cacheTtlMs = parseNumber(process.env.WANDBOX_COMPILER_CACHE_TTL_MS, DEFAULT_COMPILER_CACHE_TTL_MS);
  const cacheKey = baseUrl;
  const now = Date.now();
  const cached = compilerListCache.get(cacheKey);

  if (cached && cached.expiresAt > now) {
    return cached.items;
  }

  const endpoint = `${baseUrl}/api/list.json`;
  const response = await fetch(endpoint, {
    method: "GET",
    headers: { Accept: "application/json" },
    signal: createAbortSignal(timeoutMs),
  });

  const text = await response.text();
  const data = parseMaybeJson(text);

  if (!response.ok || !Array.isArray(data)) {
    throw new Error(
      `Wandbox compiler list failed with HTTP ${response.status}. ${text.slice(0, 300)}`.trim()
    );
  }

  compilerListCache.set(cacheKey, {
    expiresAt: now + cacheTtlMs,
    items: data,
  });

  return data;
}

async function resolveWandboxCompiler({ baseUrl, language, version, timeoutMs }) {
  const explicitCompiler = safeString(process.env.WANDBOX_COMPILER || "").trim();
  if (explicitCompiler) return explicitCompiler;

  const compilerList = await fetchCompilerList(baseUrl, timeoutMs);
  const candidates = compilerList.filter((item) => isCompilerForLanguage(item, language));

  if (candidates.length === 0) {
    throw new Error(`No Wandbox compiler found for language: ${language || "python"}`);
  }

  return [...candidates]
    .sort((a, b) => {
      const scoreDiff = scoreCompiler(b, language, version) - scoreCompiler(a, language, version);
      if (scoreDiff !== 0) return scoreDiff;
      return compareVersionDesc(a, b);
    })[0].name;
}

function normalizeWandboxOutput(data, compiler) {
  const rawStatus = data?.status ?? null;
  const parsedExitCode = Number(rawStatus);
  const exitCode = Number.isFinite(parsedExitCode) ? parsedExitCode : null;
  const success = exitCode === 0 || rawStatus === "0";

  const programOutput = safeString(data?.program_output);
  const programMessage = safeString(data?.program_message);
  const compilerError = safeString(data?.compiler_error);
  const compilerMessage = safeString(data?.compiler_message);
  const programError = safeString(data?.program_error);

  const stdout = programOutput || (success ? programMessage : "");
  let stderr = programError || compilerError;

  if (!success && !stderr) {
    stderr = programMessage || compilerMessage || safeString(data?.message);
  }

  return {
    provider: "wandbox",
    compiler,
    status: success ? "success" : "failed",
    stdout,
    stderr,
    output: stdout || stderr || programMessage || compilerMessage,
    exitCode,
    rawStatus,
    compilerMessage,
    programMessage,
    permalink: data?.permlink || null,
  };
}

async function runWithWandbox({ language, version, sourceCode, stdin, compiler }) {
  const baseUrl = normalizeBaseUrl(process.env.WANDBOX_API_URL);
  const timeoutMs = parseNumber(process.env.WANDBOX_HTTP_TIMEOUT_MS, DEFAULT_HTTP_TIMEOUT_MS);
  const endpoint = `${baseUrl}/api/compile.json`;
  const selectedCompiler =
    safeString(compiler).trim() ||
    (await resolveWandboxCompiler({
      baseUrl,
      language: language || "python",
      version: version || "3.10.0",
      timeoutMs,
    }));

  const body = {
    compiler: selectedCompiler,
    code: sourceCode,
    stdin: stdin || "",
    options: safeString(process.env.WANDBOX_OPTIONS),
    "compiler-option-raw": safeString(process.env.WANDBOX_COMPILER_OPTION_RAW),
    "runtime-option-raw": safeString(process.env.WANDBOX_RUNTIME_OPTION_RAW),
    save: false,
  };

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    signal: createAbortSignal(timeoutMs),
  });

  const text = await response.text();
  const data = parseMaybeJson(text) || {};

  if (!response.ok) {
    throw new Error(
      (data?.message || data?.error || `Wandbox execution failed with HTTP ${response.status}. ${text.slice(0, 300)}`).trim()
    );
  }

  return normalizeWandboxOutput(data, selectedCompiler);
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return sendJson(res, 405, { error: "Method not allowed" });
  }

  const body = parseBody(req);
  const sourceCode = safeString(body.sourceCode);
  const maxSourceChars = parseNumber(process.env.CODE_RUNNER_MAX_CHARS, DEFAULT_MAX_SOURCE_CHARS);

  if (!sourceCode.trim()) {
    return sendJson(res, 400, { error: "sourceCode is required" });
  }

  if (sourceCode.length > maxSourceChars) {
    return sendJson(res, 413, { error: `Source code is too large. Max ${maxSourceChars} characters.` });
  }

  try {
    const result = await runWithWandbox({
      language: body.language || "python",
      version: body.version || "3.10.0",
      compiler: body.compiler,
      sourceCode,
      stdin: safeString(body.stdin),
    });

    return sendJson(res, 200, result);
  } catch (error) {
    const message = error?.name === "AbortError" ? "Wandbox request timed out" : error?.message;

    return sendJson(res, 500, {
      error: message || "Code execution failed",
      provider: "wandbox",
      hint: "Check WANDBOX_API_URL, WANDBOX_COMPILER, network access from the server, and Wandbox rate limits.",
    });
  }
};
