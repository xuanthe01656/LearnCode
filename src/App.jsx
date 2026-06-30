import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Header from "./components/Header.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { USER_ROLES } from "./constants/roles.js";

import Home from "./pages/Home.jsx";
import LanguageSelect from "./pages/LanguageSelect.jsx";
import CourseList from "./pages/CourseList.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";
import Roadmap from "./pages/Roadmap.jsx";
import LessonDetail from "./pages/LessonDetail.jsx";
import ThinkingTest from "./pages/ThinkingTest.jsx";
import Placement from "./pages/PlacementTest.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Profile from "./pages/Profile.jsx";
import Unauthorized from "./pages/Unauthorized.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import AdminTeachers from "./pages/admin/AdminTeachers.jsx";
import TeacherDashboard from "./pages/teacher/TeacherDashboard.jsx";
import TeacherCourseGuide from "./pages/teacher/TeacherCourseGuide.jsx";
import TeacherLessonGuide from "./pages/teacher/TeacherLessonGuide.jsx";

const STAFF_ROLES = [USER_ROLES.admin, USER_ROLES.teacher];

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
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
              <Route path="/unauthorized" element={<Unauthorized />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/admin"
                element={
                  <ProtectedRoute allowedRoles={[USER_ROLES.admin]}>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/teachers"
                element={
                  <ProtectedRoute allowedRoles={[USER_ROLES.admin]}>
                    <AdminTeachers />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/teacher"
                element={
                  <ProtectedRoute allowedRoles={STAFF_ROLES}>
                    <TeacherDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/teacher/course/:courseId"
                element={
                  <ProtectedRoute allowedRoles={STAFF_ROLES}>
                    <TeacherCourseGuide />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/teacher/lessons/:lessonId"
                element={
                  <ProtectedRoute allowedRoles={STAFF_ROLES}>
                    <TeacherLessonGuide />
                  </ProtectedRoute>
                }
              />

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}
