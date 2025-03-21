import React from "react";
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from '../components/admin/AdminDashboard.js';
import { AdminLayout } from '../components/admin/AdminLayout.js';

export default function AdminPortal() {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        {/* Add more admin routes as needed */}
      </Routes>
    </AdminLayout>
  );
}