import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext.jsx";
import { hasAnyRole } from "./constants/roles.js";

export default function ProtectedRoute({ children, allowedRoles = [] }) {
  const { t } = useTranslation("auth");
  const { user, loading, isAuthenticated } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex min-h-[55vh] items-center justify-center bg-slate-50 px-4">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 text-center shadow-sm">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-indigo-100 border-t-indigo-600" />
          <p className="font-bold text-slate-700">{t("loading")}</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (allowedRoles.length > 0 && !hasAnyRole(user, allowedRoles)) {
    return <Navigate to="/unauthorized" replace state={{ from: location }} />;
  }

  return children;
}
