import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, ArrowLeft } from 'lucide-react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { supabase } from '../../lib/supabase/client';
import { useNotificationStore } from '../../lib/store';
export function ForgotPasswordForm() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { addNotification } = useNotificationStore();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
                redirectTo: `${window.location.origin}/reset-password`
            });
            if (error)
                throw error;
            addNotification('Password reset instructions have been sent to your email', 'success');
            navigate('/login');
        }
        catch (error) {
            console.error('Password reset error:', error);
            addNotification('Failed to send reset instructions. Please try again.', 'error');
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "max-w-md w-full space-y-8", children: [_jsxs("div", { children: [_jsx(Button, { variant: "ghost", className: "mb-4", onClick: () => navigate('/login'), icon: ArrowLeft, children: "Back to Login" }), _jsx("h2", { className: "mt-6 text-center text-3xl font-bold text-gray-900", children: "Reset Your Password" }), _jsx("p", { className: "mt-2 text-center text-sm text-gray-600", children: "Enter your email address and we'll send you instructions to reset your password." })] }), _jsxs("form", { className: "mt-8 space-y-6", onSubmit: handleSubmit, children: [_jsx(Input, { id: "email", name: "email", type: "email", label: "Email address", icon: Mail, value: email, onChange: (e) => setEmail(e.target.value), required: true, autoComplete: "email", placeholder: "Enter your email", "aria-label": "Email address" }), _jsx(Button, { type: "submit", variant: "primary", className: "w-full", disabled: loading, children: loading ? 'Sending Instructions...' : 'Send Reset Instructions' }), _jsx("div", { className: "text-center", children: _jsx(Link, { to: "/login", className: "font-medium text-blue-600 hover:text-blue-500", children: "Return to login" }) })] })] }) }));
}
