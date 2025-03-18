import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { Button } from '../../ui/Button';
export function LoginPrompt({ onClose, feature }) {
    const navigate = useNavigate();
    return (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: _jsxs("div", { className: "bg-white rounded-lg p-6 max-w-md w-full mx-4", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100", children: _jsx(Lock, { className: "h-6 w-6 text-blue-600" }) }), _jsx("h3", { className: "mt-4 text-lg font-medium text-gray-900", children: "Login Required" }), _jsxs("p", { className: "mt-2 text-sm text-gray-500", children: ["Please log in or create an account to ", feature, "."] })] }), _jsxs("div", { className: "mt-6 space-y-3", children: [_jsx(Button, { variant: "primary", className: "w-full", onClick: () => navigate('/login'), children: "Log In" }), _jsx(Button, { variant: "outline", className: "w-full", onClick: () => navigate('/register'), children: "Create Account" }), _jsx(Button, { variant: "ghost", className: "w-full", onClick: onClose, children: "Continue as Guest" })] })] }) }));
}
