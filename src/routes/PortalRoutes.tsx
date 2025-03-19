import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";

// ✅ Lazy load portal components
const AdminPortal = React.lazy(() => import("@/pages/admin/AdminPortal"));
const InvestorPortal = React.lazy(() => import("@/pages/investor/InvestorPortal"));
const StudentPortal = React.lazy(() => import("@/pages/student/StudentPortal"));
const ProfessionalPortal = React.lazy(() => import("@/pages/ProfessionalPortal"));

export function PortalRoutes() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute requiredRole={["admin"]}>
              <AdminPortal />
            </ProtectedRoute>
          }
        />
        <Route
          path="/investor/*"
          element={
            <ProtectedRoute requiredRole={["investor"]}>
              <InvestorPortal />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/*"
          element={
            <ProtectedRoute requiredRole={["student"]}>
              <StudentPortal />
            </ProtectedRoute>
          }
        />
        <Route
          path="/professional/*"
          element={
            <ProtectedRoute requiredRole={["professional"]}>
              <ProfessionalPortal />
            </ProtectedRoute>
          }
        />
        
        {/* Fallback for invalid portal routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

export default PortalRoutes;