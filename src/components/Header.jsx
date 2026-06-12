import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link
          to="/"
          className="text-xl font-bold"
        >
          Code Explorer
        </Link>

        <nav className="flex gap-5">
          <Link to="/">Trang chủ</Link>
          <Link to="/test">Test</Link>
          <Link to="/languages">Khóa học</Link>
        </nav>
      </div>
    </header>
  );
}