import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import { AdminProtectedRoute } from '../components/admin/auth/AdminProtectedRoute.js';
import AdminDashboard from '../components/admin/AdminDashboard.js';
import { AdminLayout } from '../components/admin/AdminLayout.js';
import AdminLoginForm from '../components/admin/auth/AdminLoginForm.js';
import { TeamManagement } from '../components/admin/team/TeamManagement.js';
import AIMonitoringDashboard from '../pages/admin/AIMonitoringDashboard.js';
import { Breadcrumbs } from '../components/ui/Breadcrumbs.js';

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<AdminLoginForm />} />
      
      <Route
        path="/*"
        element={
          <AdminProtectedRoute>
            <AdminLayout>
              <Breadcrumbs />
              <Routes>
                <Route path="/" element={<AdminDashboard />} />
                <Route path="/team" element={<TeamManagement />} />
                <Route path="/ai-monitor" element={<AIMonitoringDashboard />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </AdminLayout>
          </AdminProtectedRoute>
        }
      />
    </Routes>
  );
}