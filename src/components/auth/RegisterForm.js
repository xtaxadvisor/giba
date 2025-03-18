import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, User, Building, ArrowLeft } from 'lucide-react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Select } from '../ui/Select';
import { useSupabase } from '../../contexts/SupabaseContext';
import { useNotificationStore } from '../../lib/store';
import { validatePassword } from '../../utils/validation';
export function RegisterForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'client'
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { signUp } = useSupabase();
    const { addNotification } = useNotificationStore();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            addNotification('Passwords do not match', 'error');
            return;
        }
        const passwordValidation = validatePassword(formData.password);
        if (!passwordValidation.isValid) {
            addNotification(passwordValidation.errors[0], 'error');
            return;
        }
        setLoading(true);
        try {
            await signUp(formData.email, formData.password, {
                name: formData.name,
                role: formData.role
            });
            navigate('/login');
        }
        catch (error) {
            addNotification(error instanceof Error ? error.message : 'Registration failed', 'error');
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "max-w-md w-full space-y-8", children: [_jsxs("div", { children: [_jsx(Button, { variant: "ghost", className: "mb-4", onClick: () => navigate('/'), icon: ArrowLeft, children: "Back to Home" }), _jsx("h2", { className: "mt-6 text-center text-3xl font-extrabold text-gray-900", children: "Create your account" }), _jsxs("p", { className: "mt-2 text-center text-sm text-gray-600", children: ["Or", ' ', _jsx(Link, { to: "/login", className: "font-medium text-blue-600 hover:text-blue-500", children: "sign in to your existing account" })] })] }), _jsxs("form", { className: "mt-8 space-y-6", onSubmit: handleSubmit, children: [_jsx(Input, { id: "name", type: "text", label: "Full Name", icon: User, value: formData.name, onChange: (e) => setFormData({ ...formData, name: e.target.value }), required: true, autoComplete: "name", placeholder: "John Doe" }), _jsx(Input, { id: "email", type: "email", label: "Email address", icon: Mail, value: formData.email, onChange: (e) => setFormData({ ...formData, email: e.target.value }), required: true, autoComplete: "email", placeholder: "you@example.com" }), _jsx(Input, { id: "password", type: "password", label: "Password", icon: Lock, value: formData.password, onChange: (e) => setFormData({ ...formData, password: e.target.value }), required: true, autoComplete: "new-password", placeholder: "Password" }), _jsx(Input, { id: "confirmPassword", type: "password", label: "Confirm Password", icon: Lock, value: formData.confirmPassword, onChange: (e) => setFormData({ ...formData, confirmPassword: e.target.value }), required: true, autoComplete: "new-password", placeholder: "Confirm Password" }), _jsx(Select, { label: "Account Type", options: [
                                { value: 'client', label: 'Client' },
                                { value: 'professional', label: 'Professional' },
                                { value: 'investor', label: 'Investor' }
                            ], value: formData.role, onChange: (value) => setFormData({ ...formData, role: value }), required: true }), _jsx(Button, { type: "submit", variant: "primary", className: "w-full", icon: Building, disabled: loading, children: loading ? 'Creating Account...' : 'Create Account' })] })] }) }));
}
