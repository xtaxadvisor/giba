import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { useAuth } from '../../contexts/AuthContext';
const plans = [
    {
        id: 'basic',
        name: 'Basic Plan',
        description: 'Essential tax and financial services',
        price: 29.99,
        interval: 'month',
        features: [
            'Basic Tax Consultation',
            'Document Storage',
            'Email Support',
            'Basic Tax Calculator'
        ]
    },
    {
        id: 'professional',
        name: 'Professional Plan',
        description: 'Advanced features for growing needs',
        price: 49.99,
        interval: 'month',
        features: [
            'Everything in Basic',
            'Priority Support',
            'Advanced Tax Planning',
            'Video Consultations',
            'Advanced Analytics'
        ],
        isPopular: true
    },
    {
        id: 'enterprise',
        name: 'Enterprise Plan',
        description: 'Complete solution for businesses',
        price: 99.99,
        interval: 'month',
        features: [
            'Everything in Professional',
            'Dedicated Account Manager',
            'Custom Integrations',
            'Team Access',
            'API Access',
            'Custom Reports'
        ]
    }
];
export function Subscriptions() {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();
    const handleSelectPlan = (planId) => {
        if (!isAuthenticated) {
            navigate('/login', { state: { from: '/#pricing' } });
            return;
        }
        navigate('/dashboard/billing');
    };
    return (_jsx("section", { id: "pricing", className: "py-20 bg-gray-50", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center", children: [_jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "Simple, Transparent Pricing" }), _jsx("p", { className: "mt-4 text-xl text-gray-600", children: "Choose the perfect plan for your needs" })] }), _jsx("div", { className: "mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3", children: plans.map((plan) => (_jsxs("div", { className: `relative bg-white rounded-2xl shadow-xl ${plan.isPopular ? 'border-2 border-blue-500 scale-105' : ''}`, children: [plan.isPopular && (_jsx("div", { className: "absolute top-0 right-0 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium", children: "Most Popular" })), _jsxs("div", { className: "p-8", children: [_jsx("h3", { className: "text-xl font-semibold text-gray-900", children: plan.name }), _jsx("p", { className: "mt-2 text-gray-500", children: plan.description }), _jsxs("div", { className: "mt-4 flex items-baseline", children: [_jsxs("span", { className: "text-3xl font-bold text-gray-900", children: ["$", plan.price] }), _jsxs("span", { className: "ml-1 text-gray-500", children: ["/", plan.interval] })] }), _jsx("ul", { className: "mt-6 space-y-4", children: plan.features.map((feature, index) => (_jsxs("li", { className: "flex items-start", children: [_jsx(Check, { className: "h-5 w-5 text-green-500 flex-shrink-0 mr-2" }), _jsx("span", { className: "text-gray-600", children: feature })] }, index))) }), _jsx(Button, { variant: "primary", className: "w-full mt-8", icon: ArrowRight, iconPosition: "right", onClick: () => handleSelectPlan(plan.id), children: "Get Started" })] })] }, plan.id))) })] }) }));
}
// Export as both named and default export
export default Subscriptions;
