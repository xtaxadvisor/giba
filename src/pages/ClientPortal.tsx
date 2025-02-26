import { ProtectedRoute } from '../../components/ProtectedRoute';
import { Routes, Route } from 'react-router-dom';
import { ClientLayout } from '../../components/client/Dashboard/ClientLayout'; // ✅ Fixed path
import { ClientDashboard } from '../../components/client/Dashboard/ClientDashboard'; // ✅ Fixed path
import { ClientDocuments } from '../../components/client/ClientDocuments'; // ✅ Uses correct file
import { Documents } from '../../components/client/Documents'; // ✅ Uses correct file
import { Messages } from '../../components/client/Messages'; // ✅ Fixed path
import { Calendar } from '../../components/client/Calendar'; // ✅ Fixed path
import { Settings } from '../../components/client/Settings'; // ✅ Fixed path

export default function ClientPortal() {
  return (
    <ClientLayout>
      <Routes>
        <Route path="/" element={<ProtectedRoute><ClientDashboard /></ProtectedRoute>} />
        <Route path="/client-documents" element={<ProtectedRoute><ClientDocuments /></ProtectedRoute>} />
        <Route path="/documents" element={<ProtectedRoute><Documents /></ProtectedRoute>} />
        <Route path="/messages" element={<ProtectedRoute><Messages /></ProtectedRoute>} />
        <Route path="/appointments" element={<ProtectedRoute><Calendar /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
      </Routes>
    </ClientLayout>
  );
}