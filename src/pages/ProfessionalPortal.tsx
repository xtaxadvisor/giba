import React from "react";
import { Routes, Route } from 'react-router-dom';
import { ProfessionalDashboard } from '../components/professional/ProfessionalDashboard.js';
import { ClientList } from '../components/professional/ClientList.js';
import { Analytics } from '../components/professional/Analytics.js';
import { TaskManager } from '../components/professional/TaskManager.js';
import { Reports } from '../components/professional/Reports.js';
import { Billing } from '../components/professional/Billing.js';
import { Messages } from '../components/dashboard/Messages.js';
import Documents from '../components/dashboard/Documents.js';
import { Calendar } from '../components/dashboard/Calendar.js';
import { Settings } from '../components/dashboard/Settings.js';
import { ProfessionalLayout } from '../components/professional/ProfessionalLayout.js';

export default function ProfessionalPortal() {
  return (
    <ProfessionalLayout>
      <Routes>
        <Route path="/" element={<ProfessionalDashboard />} />
        <Route path="/clients" element={<ClientList />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/tasks" element={<TaskManager />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </ProfessionalLayout>
  );
}