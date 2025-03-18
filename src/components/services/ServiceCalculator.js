import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Calculator, Clock, Plus, Trash2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { calculateServicesCost, ServiceTypes } from '../../utils/serviceCalculator';
import { formatCurrency } from '../../utils/format';
import { useNotificationStore } from '../../lib/store';
export function ServiceCalculator() {
    const [services, setServices] = useState([{
            type: ServiceTypes.TAX_PLANNING,
            hours: 1
        }]);
    const [result, setResult] = useState(null);
    const { addNotification } = useNotificationStore();
    const handleAddService = () => {
        setServices([...services, { type: ServiceTypes.TAX_PLANNING, hours: 1 }]);
    };
    const handleRemoveService = (index) => {
        setServices(services.filter((_, i) => i !== index));
    };
    const handleServiceChange = (index, field, value) => {
        const updatedServices = [...services];
        updatedServices[index] = { ...updatedServices[index], [field]: value };
        setServices(updatedServices);
    };
    const handleCalculate = () => {
        try {
            // Validate inputs
            const invalidService = services.find(s => !s.hours || s.hours < 0);
            if (invalidService) {
                addNotification('Please enter valid hours for all services', 'error');
                return;
            }
            const cost = calculateServicesCost(services);
            setResult(cost);
            addNotification('Cost calculation completed', 'success');
        }
        catch (error) {
            console.error('Calculation error:', error);
            addNotification(error instanceof Error ? error.message : 'Failed to calculate cost', 'error');
        }
    };
    return (_jsxs("div", { className: "bg-white rounded-lg shadow-lg p-6", children: [_jsxs("div", { className: "flex items-center justify-between mb-6", children: [_jsxs("div", { className: "flex items-center", children: [_jsx(Calculator, { className: "h-6 w-6 text-blue-800 mr-2" }), _jsx("h2", { className: "text-xl font-semibold text-gray-900", children: "Service Cost Calculator" })] }), _jsx(Button, { variant: "outline", size: "sm", icon: Plus, onClick: handleAddService, children: "Add Service" })] }), _jsxs("div", { className: "space-y-6", children: [services.map((service, index) => (_jsxs("div", { className: "p-4 bg-gray-50 rounded-lg", children: [_jsxs("div", { className: "flex justify-between items-start mb-4", children: [_jsxs("h3", { className: "text-lg font-medium text-gray-900", children: ["Service ", index + 1] }), services.length > 1 && (_jsx(Button, { variant: "ghost", size: "sm", icon: Trash2, onClick: () => handleRemoveService(index), className: "text-red-600 hover:text-red-700", "aria-label": `Remove service ${index + 1}` }))] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsx(Select, { label: "Service Type", value: service.type, onChange: (value) => handleServiceChange(index, 'type', value), options: [
                                            { value: ServiceTypes.TAX_PLANNING, label: 'Tax Planning' },
                                            { value: ServiceTypes.FINANCIAL_REVIEW, label: 'Financial Review' },
                                            { value: ServiceTypes.INVESTMENT_ADVISORY, label: 'Investment Advisory' },
                                            { value: ServiceTypes.BUSINESS_CONSULTING, label: 'Business Consulting' },
                                            { value: ServiceTypes.TAX_PREPARATION, label: 'Tax Preparation' }
                                        ] }), _jsx(Input, { type: "number", label: "Hours", icon: Clock, value: service.hours, onChange: (e) => handleServiceChange(index, 'hours', Number(e.target.value)), min: "1", step: "0.5", required: true, "aria-label": "Service hours" })] })] }, index))), _jsx("div", { className: "flex justify-end", children: _jsx(Button, { variant: "primary", icon: Calculator, onClick: handleCalculate, children: "Calculate Cost" }) }), result && (_jsxs("div", { className: "mt-6 p-4 bg-blue-50 rounded-lg", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Cost Breakdown" }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-gray-700", children: "Base Price:" }), _jsx("span", { className: "font-medium", children: formatCurrency(result.details.basePrice) })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-gray-700", children: "Hourly Charges:" }), _jsx("span", { className: "font-medium", children: formatCurrency(result.details.hourlyCharges) })] }), result.addons > 0 && (_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-gray-700", children: "Addons:" }), _jsx("span", { className: "font-medium", children: formatCurrency(result.addons) })] })), _jsx("div", { className: "border-t border-gray-200 my-2 pt-2", children: _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-gray-700", children: "Subtotal:" }), _jsx("span", { className: "font-medium", children: formatCurrency(result.subtotal) })] }) }), result.discount > 0 && (_jsxs("div", { className: "flex justify-between text-green-700", children: [_jsxs("span", { children: ["Discount (", result.details.appliedDiscount.percentage, "%):"] }), _jsxs("span", { className: "font-medium", children: ["-", formatCurrency(result.discount)] })] })), _jsx("div", { className: "border-t border-gray-200 my-2 pt-2", children: _jsxs("div", { className: "flex justify-between text-lg font-bold", children: [_jsx("span", { children: "Total:" }), _jsx("span", { children: formatCurrency(result.total) })] }) })] })] }))] })] }));
}
