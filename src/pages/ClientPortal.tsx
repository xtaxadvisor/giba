import React, { lazy, Suspense, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from 'src/components/auth/ProtectedRoute';
import { LoadingSpinner } from 'src/components/ui/LoadingSpinner';

// Lazy-load the ClientDashboard component
const ClientDashboard = lazy(() => import('src/components/client/Dashboard/ClientDashboard'));

const ClientPortal = () => {
  // Example state (ensure useState is inside the component)
  const [portalState, setPortalState] = useState(null);
  
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <ClientDashboard />
            </ProtectedRoute>
          } 
        />
        {/* Add other client routes here, each wrapped with ProtectedRoute if needed */}
      </Routes>
    </Suspense>
  );
};

export default ClientPortal;