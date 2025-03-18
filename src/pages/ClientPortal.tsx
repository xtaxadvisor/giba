import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { ClientLayout } from "@/components/client/Dashboard/ClientLayout"; 
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";

// ✅ Corrected Import Paths Based on Actual File Locations
const ClientDashboard = React.lazy(() => import("@/components/client/Dashboard/ClientDashboard"));
const ClientDocuments = React.lazy(() => import("@/components/client/Documents"));
const Documents = React.lazy(() => import("@/components/client/Documents")); // No need for `/Documents/Documents`
const Messages = React.lazy(() => import("@/components/client/Messages"));
const Calendar = React.lazy(() => import("@/components/client/Calendar"));
const Settings = React.lazy(() => import("@/components/client/Settings"));

export default function ClientPortal() {
  return (
    <ClientLayout>
      {/* ✅ Protecting the entire portal instead of wrapping each route */}
      <ProtectedRoute>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<ClientDashboard />} />
            <Route path="/client-documents" element={<ClientDocuments />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/appointments" element={<Calendar />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Suspense>
      </ProtectedRoute>
    </ClientLayout>
  );
}