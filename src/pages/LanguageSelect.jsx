import React from "react";
import { languages } from "../data/languages";

export default function LanguageSelect() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold">
        Chọn ngôn ngữ lập trình
      </h1>

      <div className="grid gap-4 md:grid-cols-3">
        {languages.map((lang) => (
          <div
            key={lang.id}
            className="rounded-xl border bg-white p-5"
          >
            <div className="text-4xl">
              {lang.icon}
            </div>

            <h2 className="mt-3 text-xl font-bold">
              {lang.name}
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              {lang.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}