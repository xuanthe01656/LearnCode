import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CodeBlock({ code = "", language = "python", title = "" }) {
  const { t } = useTranslation("lessons");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  };

  if (!code) return null;

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-xl">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div>
          <div className="text-xs font-black uppercase tracking-wide text-slate-400">{language}</div>
          {title && <div className="text-sm font-bold text-slate-200">{title}</div>}
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-xs font-black text-white hover:bg-white/15"
        >
          {copied ? <Check size={15} /> : <Copy size={15} />}
          {copied ? t("ui.copied") : t("ui.copy")}
        </button>
      </div>
      <pre className="max-h-[520px] overflow-auto p-4 text-sm leading-7 text-slate-100"><code>{code}</code></pre>
    </div>
  );
}
