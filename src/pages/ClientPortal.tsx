import React, { Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { ClientLayout } from "@/components/client/Dashboard/ClientLayout"; 
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";

// ✅ Lazy load components properly
const ClientDashboard = React.lazy(() =>
  import("@/components/client/Dashboard/ClientDashboard").then((m) => ({ default: m.default }))
);
const ClientDocuments = React.lazy(() =>
  import("@/components/client/Documents").then((m) => ({ default: m.default }))
);
const Documents = React.lazy(() =>
  import("@/components/client/Documents").then((m) => ({ default: m.default }))
);
const Messages = React.lazy(() =>
  import("@/components/client/Messages").then((m) => ({ default: m.default }))
);
const Calendar = React.lazy(() =>
  import("@/components/client/Calendar").then((m) => ({ default: m.default }))
);
const Settings = React.lazy(() =>
  import("@/components/client/Settings").then((m) => ({ default: m.default }))
);

export default function ClientPortal() {
  // ✅ Correctly placing useState inside the component
  const [dashboardData, setDashboardData] = useState<{ id: string; name: string }[]>([]);

  return (
    <ClientLayout>
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