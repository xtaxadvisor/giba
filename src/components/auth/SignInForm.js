import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, ArrowLeft } from 'lucide-react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { AuthService } from '../../services/auth/authService';
export function SignInForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const user = await AuthService.signIn(formData.email, formData.password);
            if (user) {
                // Navigate based on user role
                const roleRoutes = {
                    admin: '/admin',
                    professional: '/professional',
                    investor: '/investor',
                    student: '/student',
                    client: '/dashboard'
                };
                navigate(roleRoutes[user.role] || '/dashboard');
            }
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "max-w-md w-full space-y-8", children: [_jsxs("div", { children: [_jsx(Button, { variant: "ghost", className: "mb-4", onClick: () => navigate('/'), icon: ArrowLeft, children: "Back to Home" }), _jsx("h1", { className: "mt-6 text-center text-3xl font-bold text-gray-900", children: "Sign in to your account" }), _jsxs("p", { className: "mt-2 text-center text-sm text-gray-700", children: ["Or", ' ', _jsx(Link, { to: "/register", className: "font-medium text-blue-800 hover:text-blue-900", children: "create a new account" })] })] }), _jsxs("form", { className: "mt-8 space-y-6", onSubmit: handleSubmit, children: [_jsx(Input, { id: "email", name: "email", type: "email", label: "Email address", icon: Mail, value: formData.email, onChange: (e) => setFormData({ ...formData, email: e.target.value }), required: true, autoComplete: "email", placeholder: "Enter your email", "aria-label": "Email address" }), _jsx(Input, { id: "password", name: "password", type: "password", label: "Password", icon: Lock, value: formData.password, onChange: (e) => setFormData({ ...formData, password: e.target.value }), required: true, autoComplete: "current-password", placeholder: "Enter your password", "aria-label": "Password" }), _jsx("div", { className: "flex items-center justify-between", children: _jsx("div", { className: "text-sm", children: _jsx(Link, { to: "/forgot-password", className: "font-medium text-blue-800 hover:text-blue-900", children: "Forgot your password?" }) }) }), _jsx(Button, { type: "submit", variant: "primary", className: "w-full", disabled: loading, children: loading ? 'Signing in...' : 'Sign in' }), process.env.NODE_ENV === 'development' && (_jsxs("div", { className: "mt-4 p-4 bg-gray-100 rounded-lg", children: [_jsx("p", { className: "text-sm text-gray-600 mb-2", children: "Development Login Credentials:" }), _jsxs("ul", { className: "text-xs text-gray-500 space-y-1", children: [_jsx("li", { children: "Admin: admin@protaxadvisors.tax / Admin123!@#" }), _jsx("li", { children: "Client: client@example.com / Client123!@#" }), _jsx("li", { children: "Professional: professional@example.com / Professional123!@#" }), _jsx("li", { children: "Investor: investor@example.com / Investor123!@#" }), _jsx("li", { children: "Student: student@example.com / Student123!@#" })] })] }))] })] }) }));
}
