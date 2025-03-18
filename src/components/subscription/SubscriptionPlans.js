import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
export function SubscriptionPlans({ plans, onSelectPlan, currentPlanId }) {
    return (_jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center", children: [_jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "Subscription Plans" }), _jsx("p", { className: "mt-4 text-xl text-gray-600", children: "Choose the perfect plan for your needs" })] }), _jsx("div", { className: "mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3", children: plans.map((plan) => (_jsxs("div", { className: `relative bg-white rounded-2xl shadow-xl ${plan.isPopular ? 'border-2 border-blue-500 scale-105' : ''}`, children: [plan.isPopular && (_jsx("div", { className: "absolute top-0 right-0 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium", children: "Most Popular" })), _jsxs("div", { className: "p-8", children: [_jsx("h3", { className: "text-xl font-semibold text-gray-900", children: plan.name }), _jsx("p", { className: "mt-2 text-gray-500", children: plan.description }), _jsxs("div", { className: "mt-4 flex items-baseline", children: [_jsxs("span", { className: "text-3xl font-bold text-gray-900", children: ["$", plan.price] }), _jsxs("span", { className: "ml-1 text-gray-500", children: ["/", plan.interval] })] }), _jsx("ul", { className: "mt-6 space-y-4", children: plan.features.map((feature, index) => (_jsxs("li", { className: "flex items-start", children: [_jsx(Check, { className: "h-5 w-5 text-green-500 flex-shrink-0 mr-2" }), _jsx("span", { className: "text-gray-600", children: feature })] }, index))) }), _jsx(Button, { variant: "primary", className: "w-full mt-8", icon: ArrowRight, iconPosition: "right", onClick: () => onSelectPlan(plan), disabled: plan.id === currentPlanId, children: plan.id === currentPlanId ? 'Current Plan' : 'Select Plan' })] })] }, plan.id))) })] }));
}
