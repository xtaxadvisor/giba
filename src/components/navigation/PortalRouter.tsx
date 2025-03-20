import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext.js";

interface PortalRouterProps {
  children: ReactNode; // ✅ Ensure `children` is properly typed
  requiredRole?: string[];
}

const PortalRouter: React.FC<PortalRouterProps> = ({ children, requiredRole }) => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && (!user?.role || !requiredRole.includes(user.role))) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>; // ✅ Ensure `children` is rendered correctly
};

export default PortalRouter;