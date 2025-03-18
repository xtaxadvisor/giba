import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { LoadingSpinner } from '../../ui/LoadingSpinner';

export function AdminProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const location = useLocation();
  const AdminProtectedRoute = () => {
    // Component implementation
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user?.role?.toLowerCase() !== 'admin') {
    return <Navigate to="/" replace />;
  }

    return <>{children}</>;
  }

export default AdminProtectedRoute;