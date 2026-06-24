import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import Home from "./pages/Home.jsx";
import LanguageSelect from "./pages/LanguageSelect.jsx";
import CourseList from "./pages/CourseList.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";
import Roadmap from "./pages/Roadmap.jsx";
import TeacherDashboard from "./pages/teacher/TeacherDashboard.jsx";
import TeacherCourseGuide from "./pages/teacher/TeacherCourseGuide.jsx";
import TeacherLessonGuide from "./pages/teacher/TeacherLessonGuide.jsx";
import LessonDetail from "./pages/LessonDetail.jsx";
import ThinkingTest from "./pages/ThinkingTest.jsx";
import Placement from "./pages/PlacementTest.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Profile from "./pages/Profile.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="min-h-screen bg-slate-50 text-slate-900">
          <Header />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/languages" element={<LanguageSelect />} />
              <Route path="/courses" element={<CourseList />} />
              <Route path="/courses/:languageId" element={<CourseList />} />
              <Route path="/course/:courseId" element={<CourseDetail />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/lessons/:lessonId" element={<LessonDetail />} />
              <Route path="/test" element={<ThinkingTest />} />
              <Route path="/placement" element={<Placement />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/teacher"
                element={
                  <ProtectedRoute>
                    <TeacherDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/teacher/course/:courseId"
                element={
                  <ProtectedRoute>
                    <TeacherCourseGuide />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/teacher/lessons/:lessonId"
                element={
                  <ProtectedRoute>
                    <TeacherLessonGuide />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}
