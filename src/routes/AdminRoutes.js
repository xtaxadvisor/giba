import react from 'react';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route, Navigate } from 'react-router-dom';
import { AdminProtectedRoute } from '../components/admin/auth/AdminProtectedRoute.js';
import { AdminDashboard } from '../components/admin/AdminDashboard.js';
import { AdminLayout } from '../components/admin/AdminLayout.js';
import { AdminLoginForm } from '../components/admin/auth/AdminLoginFormjs';
import { TeamManagement } from '../components/admin/team/TeamManagement.js';
import AIMonitoringDashboard from '../pages/admin/AIMonitoringDashboard.js';
import { Breadcrumbs } from '../components/ui/Breadcrumbs.js';
export function AdminRoutes() {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/login", element: _jsx(AdminLoginForm, {}) }), _jsx(Route, { path: "/*", element: _jsx(AdminProtectedRoute, { children: _jsxs(AdminLayout, { children: [_jsx(Breadcrumbs, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(AdminDashboard, {}) }), _jsx(Route, { path: "/team", element: _jsx(TeamManagement, {}) }), _jsx(Route, { path: "/ai-monitor", element: _jsx(AIMonitoringDashboard, {}) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/", replace: true }) })] })] }) }) })] }));
}
