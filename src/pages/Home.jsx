import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-4 text-4xl font-bold">
        Code Explorer Academy
      </h1>

      <p className="mb-8 text-slate-600">
        Nền tảng học lập trình dành cho học sinh từ lớp 6-12 và người mới bắt đầu.
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        <Link
          to="/test"
          className="rounded-xl border bg-white p-6 shadow-sm hover:shadow"
        >
          <h2 className="text-xl font-bold">
            Test tư duy
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Đánh giá khả năng học lập trình.
          </p>
        </Link>

        <Link
          to="/languages"
          className="rounded-xl border bg-white p-6 shadow-sm hover:shadow"
        >
          <h2 className="text-xl font-bold">
            Khóa học
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Bắt đầu hành trình học lập trình.
          </p>
        </Link>

        <Link
          to="/progress"
          className="rounded-xl border bg-white p-6 shadow-sm hover:shadow"
        >
          <h2 className="text-xl font-bold">
            Tiến độ
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Theo dõi quá trình học.
          </p>
        </Link>
      </div>
    </div>
  );
}