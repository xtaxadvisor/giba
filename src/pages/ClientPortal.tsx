import { Routes, Route } from 'react-router-dom';
import { ClientLayout } from '../../components/client/ClientLayout'; // ✅ Fixed import path
import { ClientDashboard } from '../../components/client/Dashboard/ClientDashboard'; // ✅ Fixed import path
import { Documents } from '../../components/client/Documents'; // Ensure this path is correct and the file exists
import { Messages } from '../../components/client/Messages'; // ✅ Moved from dashboard/
import { Calendar } from '../../components/client/Calendar'; // ✅ Moved from dashboard/
import { Settings } from '../../components/client/Settings'; // ✅ Moved from dashboard/

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