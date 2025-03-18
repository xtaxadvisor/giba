import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { LoadingSpinner } from '../ui/LoadingSpinner';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: string[];
}

export function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const { user, isAuthenticated } = useAuth();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (user !== undefined) {
      setLoading(false);
    }
  }, [user]);
  const location = useLocation();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requiredRole && (!user?.role || !requiredRole.includes(user.role))) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
}