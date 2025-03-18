import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Navigate } from 'react-router-dom';
export const ProtectedRoute = ({ children }) => {
    // Replace with your actual authentication check
    const isAuthenticated = localStorage.getItem('authToken') !== null;
    if (!isAuthenticated) {
        return _jsx(Navigate, { to: "/login", replace: true });
    }
    return _jsx(_Fragment, { children: children });
};
