import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
export default function TaxForms() {
    const navigate = useNavigate();
    const forms = [
        {
            id: 'form-1040',
            name: 'Form 1040',
            description: 'U.S. Individual Income Tax Return',
            year: '2023',
            category: 'Individual'
        },
        {
            id: 'form-1120',
            name: 'Form 1120',
            description: 'U.S. Corporation Income Tax Return',
            year: '2023',
            category: 'Business'
        },
        {
            id: 'form-1065',
            name: 'Form 1065',
            description: 'U.S. Return of Partnership Income',
            year: '2023',
            category: 'Business'
        }
    ];
    return (_jsx("div", { className: "min-h-screen bg-gray-50 py-12", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsx(Button, { variant: "ghost", onClick: () => navigate('/'), icon: ArrowLeft, className: "mb-8", children: "Back to Home" }), _jsxs("div", { className: "text-center mb-12", children: [_jsx("h1", { className: "text-4xl font-bold text-gray-900", children: "Tax Forms" }), _jsx("p", { className: "mt-4 text-xl text-gray-600", children: "Access and download the tax forms you need" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: forms.map((form) => (_jsxs("div", { className: "bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900", children: form.name }), _jsx("p", { className: "text-gray-600 mt-2", children: form.description }), _jsxs("div", { className: "mt-4 flex items-center justify-between", children: [_jsxs("span", { className: "text-sm text-gray-500", children: ["Tax Year: ", form.year] }), _jsx("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800", children: form.category })] }), _jsxs("div", { className: "mt-6 flex justify-end space-x-3", children: [_jsx(Button, { variant: "outline", size: "sm", children: "Preview" }), _jsx(Button, { variant: "primary", size: "sm", children: "Download" })] })] }, form.id))) })] }) }));
}
