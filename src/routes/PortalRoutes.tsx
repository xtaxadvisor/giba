import React, { Suspense } from "react.js";
import { Routes, Route, Navigate } from "react-router-dom.js";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute.js";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner.js";

// ✅ Lazy-load portal components properly
const AdminPortal = React.lazy(() => import("@/pages/admin/AdminPortal"));
const ClientPortal = React.lazy(() => import("@/pages/ClientPortal"));
const ProfessionalPortal = React.lazy(() => import("@/pages/ProfessionalPortal"));
const InvestorPortal = React.lazy(() => import("@/pages/investor/InvestorPortal"));
const StudentPortal = React.lazy(() => import("@/pages/student/StudentPortal"));
const MessagingPortal = React.lazy(() => import("@/components/messaging/MessagingCenter"));

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
          path="/client/*"
          element={
            <ProtectedRoute requiredRole={["client"]}>
              <ClientPortal children={undefined} />
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
          path="/messages/*"
          element={
            <ProtectedRoute>
              <MessagingPortal />
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