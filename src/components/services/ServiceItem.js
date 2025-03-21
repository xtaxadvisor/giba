import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Note: Service Item Component
import { useNavigate } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { Button } from '../ui/Button';
import { useAuth } from '../../contexts/AuthContext';
import { consultationService } from '../../services/api/consultation';
import { useNotificationStore } from '../../lib/store';
export function ServiceItem({ title, description, price, features }) {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();
    const { addNotification } = useNotificationStore();
    const handleGetStarted = async () => {
        try {
            if (!isAuthenticated) {
                navigate('/login', {
                    state: {
                        from: location.pathname,
                        service: title
                    }
                });
                return;
            }
            const redirectUrl = await consultationService.initiateConsultation(title.toLowerCase().replace(/\s+/g, '-'));
            if (redirectUrl) {
                navigate(redirectUrl);
            }
            else {
                navigate('/consultation/book', {
                    state: { serviceType: title.toLowerCase().replace(/\s+/g, '-') }
                });
            }
        }
        catch (error) {
            console.error('Failed to initiate service:', error);
            addNotification('Failed to initiate service. Please try again.', 'error');
        }
    };
    return (_jsxs("div", { className: "bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900", children: title }), _jsx("p", { className: "mt-2 text-gray-600 text-sm min-h-[48px]", children: description }), _jsx("div", { className: "mt-4 text-2xl font-bold text-blue-600", children: price }), _jsx("div", { className: "my-6 border-t border-gray-100 pt-4", children: _jsx("ul", { className: "space-y-3", children: features.map((feature, index) => (_jsxs("li", { className: "flex items-start text-sm", children: [_jsx("div", { className: "h-1.5 w-1.5 bg-blue-600 rounded-full mr-2 mt-1.5" }), _jsx("span", { className: "text-gray-600", children: feature })] }, index))) }) }), _jsx("div", { className: "space-y-3", children: _jsx(Button, { variant: "primary", className: "w-full", icon: Calendar, onClick: handleGetStarted, children: "Get Started" }) })] }));
}
