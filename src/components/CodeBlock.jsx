import React, { useState } from "react";
import { Check, Clipboard } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CodeBlock({ code = "", language = "python", title }) {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation("lessons");

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-xl">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
          <span className="ml-2 text-xs font-bold uppercase tracking-wide text-slate-400">
            {title || language}
          </span>
        </div>

        <button
          type="button"
          onClick={copyCode}
          className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-1.5 text-xs font-bold text-white hover:bg-white/15"
        >
          {copied ? <Check size={14} /> : <Clipboard size={14} />}
          {copied ? t("ui.copied") : t("ui.copy")}
        </button>
      </div>

      <pre className="overflow-x-auto p-5 text-sm leading-7 text-slate-100">
        <code>{code}</code>
      </pre>
    </div>
  );
}
