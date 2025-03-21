import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner.js";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute.js";
import "@/index.css"; // 👈 Import global styles

// Eagerly load critical components
import Home from "@/pages/Home.js";
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm.js";
import { ResetPasswordForm } from "@/components/auth/ResetPasswordForm.js";

// Lazy load other components
const LoginPage = React.lazy(() => import("@/pages/LoginPage.js"));
const RegisterPage = React.lazy(() => import("@/pages/RegisterPage.js"));
const ServiceCatalog = React.lazy(() => import("@/pages/services/ServiceCatalog.js"));
const SameDayServices = React.lazy(() => import("@/pages/services/SameDayServices.js"));
const VideoLibrary = React.lazy(() => import("@/pages/videos/VideoLibrary.js"));
const VideoDetail = React.lazy(() => import("@/pages/videos/VideoDetail.js"));
const AdminPortal = React.lazy(() => import("@/pages/admin/AdminPortal.js"));
const ClientPortal = React.lazy(() => import("@/pages/ClientPortal.js"));
const InvestorPortal = React.lazy(() => import("@/pages/investor/InvestorPortal.js"));
const StudentPortal = React.lazy(() => import("@/pages/student/StudentPortal.js"));
const ProfessionalPortal = React.lazy(() => import("@/pages/ProfessionalPortal.js"));
const TaxCalculator = React.lazy(() => import("@/pages/calculator/TaxCalculator.js"));
const TaxForms = React.lazy(() => import("@/pages/forms/TaxForms.js"));
const TermsAndConditions = React.lazy(() => import("@/pages/legal/TermsAndConditions.js"));

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/forgot-password" element={<ForgotPasswordForm />} />
        <Route path="/reset-password" element={<ResetPasswordForm />} />
        <Route path="/services" element={<ServiceCatalog />} />
        <Route path="/same-day-services" element={<SameDayServices />} />
        <Route path="/calculator" element={<TaxCalculator />} />
        <Route path="/tax-forms" element={<TaxForms />} />
        <Route path="/browse-videos" element={<VideoLibrary />} />
        <Route path="/browse-videos/:videoId" element={<VideoDetail />} />

        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected Routes */}
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
              <ClientPortal>
                <div>Welcome to the Client Portal</div>
              </ClientPortal>
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

        {/* Error Routes */}
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;