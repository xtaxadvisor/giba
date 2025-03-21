import React from 'react';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SupabaseProvider } from './contexts/SupabaseContext.js';
import { AuthProvider } from './contexts/AuthContext.js';
import { AppRoutes } from './routes.js';
import { Notifications } from './components/ui/Notifications.js';
import { ErrorBoundary } from './components/ui/ErrorBoundary.js';
import { ConnectionStatus } from './components/testing/ConnectionStatus.js';
import { AdminProtectedRoute } from './components/admin/auth/AdminProtectedRoute.js'; // ✅ Fixed Path
import Dashboard from './pages/Dashboard.js'; // ✅ Fixed Path
// Create a React Query client
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            staleTime: 5 * 60 * 1000, // 5 minutes
            refetchOnWindowFocus: false
        },
    },
});
const App = () => {
    return (_jsx(ErrorBoundary, { children: _jsx(Router, { children: _jsx(QueryClientProvider, { client: queryClient, children: _jsx(SupabaseProvider, { children: _jsx(AuthProvider, { children: _jsxs("div", { className: "min-h-screen bg-gray-50", children: [_jsx(ConnectionStatus, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/admin", element: _jsxs(AdminProtectedRoute, { children: [_jsx(Dashboard, {}), "  "] }) }), _jsx(Route, { path: "/*", element: _jsx(AppRoutes, {}) })] }), _jsx(Notifications, {})] }) }) }) }) }) }));
};
export default App;
