import { Routes, Route } from 'react-router-dom';
import { ClientLayout } from '../../components/layouts/ClientLayout'; // Update the path to the correct location
import { ClientDashboard } from '../../components/ClientDashboard'; // Update the path to the correct location
import { Documents } from '../../components/dashboard/Documents'; 
import { Messages } from '../../components/dashboard/Messages'; // Update the path to the correct location
import { Calendar } from '../../components/dashboard/Calendar';
import { Settings } from '../../components/dashboard/Settings'; // Update the path to the correct location

export default function ClientPortal() {
  return (
    <ClientLayout>
      <Routes>
        <Route path="/" element={<ClientDashboard />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/appointments" element={<Calendar />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </ClientLayout>
  );
}