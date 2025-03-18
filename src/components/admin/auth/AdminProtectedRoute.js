import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { LoadingSpinner } from '../../ui/LoadingSpinner';
export function AdminProtectedRoute({ children }) {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) {
        return _jsx(LoadingSpinner, {});
    }
    if (!user) {
        return _jsx(Navigate, { to: "/login", state: { from: location }, replace: true });
    }
    if (user?.role?.toLowerCase() !== 'admin') {
        return _jsx(Navigate, { to: "/", replace: true });
    }
    return _jsx(_Fragment, { children: children });
}
