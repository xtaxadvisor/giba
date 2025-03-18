import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { ServiceCategory } from './ServiceCategory';
import { WhyChooseUs } from './WhyChooseUs';
import { ServiceCalculator } from './ServiceCalculator';
import { Calculator, ArrowLeft } from 'lucide-react';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';
export default function ServiceCatalog() {
    const navigate = useNavigate();
    const [showCalculator, setShowCalculator] = useState(false);
    // ... rest of the existing categories code ...
    return (_jsx("div", { className: "min-h-screen bg-gray-50", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20", children: [_jsxs("div", { className: "mb-8", children: [_jsx(Button, { variant: "ghost", icon: ArrowLeft, onClick: () => navigate('/'), className: "mb-6", children: "Back to Home" }), _jsxs("div", { className: "text-center mb-16", children: [_jsx("h1", { className: "text-4xl font-bold text-gray-900", children: "Our Services" }), _jsx("p", { className: "mt-4 text-xl text-gray-600", children: "Comprehensive financial and business solutions tailored to your needs" }), _jsx(Button, { variant: "primary", icon: Calculator, onClick: () => setShowCalculator(true), className: "mt-6", children: "Calculate Service Cost" })] })] }), showCalculator ? (_jsxs("div", { className: "mb-16", children: [_jsx(ServiceCalculator, {}), _jsx("div", { className: "text-center mt-8", children: _jsx(Button, { variant: "outline", onClick: () => setShowCalculator(false), children: "Back to Services" }) })] })) : (_jsx("div", { className: "space-y-16", children: categories.map((category, index) => (_jsx(ServiceCategory, { title: category.title, icon: category.icon, services: category.services }, index))) })), _jsx(WhyChooseUs, {})] }) }));
}
