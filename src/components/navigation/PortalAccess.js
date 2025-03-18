import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useNotificationStore } from '../../lib/store';
import { Button } from '../../components/ui/Button';
import { PORTAL_CONFIGS } from '../../services/navigation/portalConfig';
const PortalButton = ({ title, description, icon: Icon, path, requiredRole = [] }) => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const isAuthenticated = !!user;
    const { addNotification } = useNotificationStore();
    const handleAccess = () => {
        if (!isAuthenticated) {
            navigate('/login', { state: { from: path } });
            return;
        }
        if (requiredRole && (!user?.role || !requiredRole.includes(user.role))) {
            addNotification('You do not have permission to access this portal. Please contact support for assistance.', 'error');
            return;
        }
        navigate(path);
    };
    return (_jsxs("div", { className: "bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1", children: [_jsxs("div", { className: "flex items-center mb-4", children: [_jsx("div", { className: "p-2 bg-blue-50 rounded-lg", children: _jsx(Icon, { className: "h-6 w-6 text-blue-600" }) }), _jsx("h3", { className: "ml-3 text-xl font-semibold text-gray-900", children: title })] }), _jsx("p", { className: "text-gray-600 mb-6", children: description }), _jsx(Button, { variant: "primary", onClick: handleAccess, className: "w-full", "aria-label": `Access ${title}`, children: "Access Portal" })] }));
};
// ✅ Dynamically Generates Portal Buttons
export const PortalAccess = () => {
    const { user } = useAuth();
    // ✅ Filter only the portals the user can access
    const availablePortals = Object.values(PORTAL_CONFIGS).filter((portal) => !portal.requiredRole || portal.requiredRole.includes(user?.role ?? ""));
    return (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: availablePortals.map((portal) => (_jsx(PortalButton, { title: portal.title, description: portal.description, icon: portal.icon, path: portal.path, requiredRole: portal.requiredRole }, portal.id))) }));
};
