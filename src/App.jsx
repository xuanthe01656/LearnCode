import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import LanguageSelect from "./pages/LanguageSelect.jsx";
import CourseList from "./pages/CourseList.jsx";
import LessonDetail from "./pages/LessonDetail.jsx";
import ThinkingTest from "./pages/ThinkingTest.jsx";
import Placement from "./pages/PlacementTest.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/languages" element={<LanguageSelect />} />
            <Route path="/courses" element={<CourseList />} />
            <Route path="/courses/:languageId" element={<CourseList />} />
            <Route path="/lessons/:lessonId" element={<LessonDetail />} />
            <Route path="/test" element={<ThinkingTest />} />
            <Route path="/placement" element={<Placement />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}