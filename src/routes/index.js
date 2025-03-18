import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { ProtectedRoute } from '../components/auth/ProtectedRoute';
// Eagerly load critical components
import Home from '../pages/Home';
import { ForgotPasswordForm } from '../components/auth/ForgotPasswordForm';
import { ResetPasswordForm } from '../components/auth/ResetPasswordForm';
// Lazy load other components
const LoginPage = React.lazy(() => import('../pages/LoginPage'));
const RegisterPage = React.lazy(() => import('../pages/RegisterPage'));
const ServiceCatalog = React.lazy(() => import('../pages/services/ServiceCatalog'));
const SameDayServices = React.lazy(() => import('../pages/services/SameDayServices'));
const VideoLibrary = React.lazy(() => import('../pages/videos/VideoLibrary'));
const VideoDetail = React.lazy(() => import('../pages/videos/VideoDetail'));
const AdminPortal = React.lazy(() => import('../pages/admin/AdminPortal'));
const ClientPortal = React.lazy(() => import('../pages/ClientPortal')); // Ensure this path is correct or create the missing module
const InvestorPortal = React.lazy(() => import('../pages/investor/InvestorPortal'));
const StudentPortal = React.lazy(() => import('../pages/student/StudentPortal'));
const ProfessionalPortal = React.lazy(() => import('../pages/ProfessionalPortal'));
const TaxCalculator = React.lazy(() => import('../pages/calculator/TaxCalculator'));
const TaxForms = React.lazy(() => import('../pages/forms/TaxForms'));
const TermsAndConditions = React.lazy(() => import('../pages/legal/TermsAndConditions'));
export function AppRoutes() {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/terms-and-conditions", element: _jsx(Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(TermsAndConditions, {}) }) }), _jsx(Route, { path: "/forgot-password", element: _jsx(ForgotPasswordForm, {}) }), _jsx(Route, { path: "/reset-password", element: _jsx(ResetPasswordForm, {}) }), _jsx(Route, { path: "/services", element: _jsx(Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(ServiceCatalog, {}) }) }), _jsx(Route, { path: "/same-day-services", element: _jsx(Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(SameDayServices, {}) }) }), _jsx(Route, { path: "/calculator", element: _jsx(Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(TaxCalculator, {}) }) }), _jsx(Route, { path: "/tax-forms", element: _jsx(Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(TaxForms, {}) }) }), _jsx(Route, { path: "/browse-videos", element: _jsx(Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(VideoLibrary, {}) }) }), _jsx(Route, { path: "/browse-videos/:videoId", element: _jsx(Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(VideoDetail, {}) }) }), _jsx(Route, { path: "/login", element: _jsx(Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(LoginPage, {}) }) }), _jsx(Route, { path: "/register", element: _jsx(Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(RegisterPage, {}) }) }), _jsx(Route, { path: "/admin/*", element: _jsx(Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(ProtectedRoute, { requiredRole: ['admin'], children: _jsx(AdminPortal, {}) }) }) }), _jsx(Route, { path: "/client/*", element: _jsx(Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(ProtectedRoute, { requiredRole: ['client'], children: _jsx(ClientPortal, {}) }) }) }), _jsx(Route, { path: "/investor/*", element: _jsx(Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(ProtectedRoute, { requiredRole: ['investor'], children: _jsx(InvestorPortal, {}) }) }) }), _jsx(Route, { path: "/student/*", element: _jsx(Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(ProtectedRoute, { requiredRole: ['student'], children: _jsx(StudentPortal, {}) }) }) }), _jsx(Route, { path: "/professional/*", element: _jsx(Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(ProtectedRoute, { requiredRole: ['professional'], children: _jsx(ProfessionalPortal, {}) }) }) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/not-found", replace: true }) })] }));
}
