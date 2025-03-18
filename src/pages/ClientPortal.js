import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx(ClientLayout, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(ProtectedRoute, { children: _jsx(ClientDashboard, {}) }) }), _jsx(Route, { path: "/client-documents", element: _jsx(ProtectedRoute, { children: _jsx(ClientDocuments, {}) }) }), _jsx(Route, { path: "/documents", element: _jsx(ProtectedRoute, { children: _jsx(Documents, {}) }) }), _jsx(Route, { path: "/messages", element: _jsx(ProtectedRoute, { children: _jsx(Messages, {}) }) }), _jsx(Route, { path: "/appointments", element: _jsx(ProtectedRoute, { children: _jsx(Calendar, {}) }) }), _jsx(Route, { path: "/settings", element: _jsx(ProtectedRoute, { children: _jsx(Settings, {}) }) })] }) }));
}
