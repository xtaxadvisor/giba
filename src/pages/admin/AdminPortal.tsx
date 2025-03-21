import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import { AdminLayout } from '../../components/admin/layout/AdminLayout.js';
import AdminDashboard from '../../components/admin/dashboard/AdminDashboard.js';
import { TeamManagement } from '../../components/admin/team/TeamManagement.js';
import { UserManagement } from '../../components/admin/users/UserManagement.js';
import { AdminSettings } from '../../components/admin/settings/AdminSettings.js';
import { NotFoundPage } from '../../components/shared/NotFoundPage.js';
import { AdminProtectedRoute } from '../../components/admin/auth/AdminProtectedRoute.js';
// Removed incorrect alias import
// Corrected export without re-importing the same file
export default function AdminPortal() {
  return (
    <AdminProtectedRoute>
      <AdminLayout>
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/team" element={<TeamManagement />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/settings" element={<AdminSettings />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/admin/404" replace />} />
        </Routes>
      </AdminLayout>
    </AdminProtectedRoute>
  );
}