import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { useSupabase } from '../../contexts/SupabaseContext';
import { useNotificationStore } from '../../lib/store';
import { validatePassword } from '../../utils/validation';
export function ResetPasswordForm() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { supabase } = useSupabase();
    const { addNotification } = useNotificationStore();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            addNotification('Passwords do not match', 'error');
            return;
        }
        const validation = validatePassword(password);
        if (!validation.isValid) {
            addNotification(validation.errors[0], 'error');
            return;
        }
        setLoading(true);
        try {
            const { error } = await supabase.auth.updateUser({
                password: password
            });
            if (error)
                throw error;
            addNotification('Password has been reset successfully', 'success');
            navigate('/login');
        }
        catch (error) {
            console.error('Password reset error:', error);
            addNotification('Failed to reset password. Please try again.', 'error');
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "max-w-md w-full space-y-8", children: [_jsxs("div", { children: [_jsx("h2", { className: "mt-6 text-center text-3xl font-bold text-gray-900", children: "Reset Your Password" }), _jsx("p", { className: "mt-2 text-center text-sm text-gray-600", children: "Please enter your new password" })] }), _jsxs("form", { className: "mt-8 space-y-6", onSubmit: handleSubmit, children: [_jsx(Input, { id: "password", name: "password", type: "password", label: "New Password", icon: Lock, value: password, onChange: (e) => setPassword(e.target.value), required: true, autoComplete: "new-password", placeholder: "Enter new password", "aria-label": "New password" }), _jsx(Input, { id: "confirmPassword", name: "confirmPassword", type: "password", label: "Confirm Password", icon: Lock, value: confirmPassword, onChange: (e) => setConfirmPassword(e.target.value), required: true, autoComplete: "new-password", placeholder: "Confirm new password", "aria-label": "Confirm new password" }), _jsx(Button, { type: "submit", variant: "primary", className: "w-full", disabled: loading, children: loading ? 'Resetting Password...' : 'Reset Password' })] })] }) }));
}
