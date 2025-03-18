import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DollarSign } from 'lucide-react';
import { Input } from '../../ui/Input';
import { formatCurrency } from '../../../utils/format';
export function IncomeSection({ values, onChange }) {
    const handleChange = (field, value) => {
        const numericValue = value.replace(/[^0-9]/g, '');
        const amount = numericValue ? parseInt(numericValue, 10) : 0;
        onChange({ ...values, [field]: amount });
    };
    return (_jsxs("div", { className: "space-y-6", children: [_jsx("h2", { className: "text-lg font-semibold text-gray-900", children: "Income Information" }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Annual Gross Income" }), _jsx("input", { type: "range", min: "0", max: "1000000", step: "1000", value: values.gross, onChange: (e) => handleChange('gross', e.target.value), className: "w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer" }), _jsx("div", { className: "mt-2 text-sm font-medium text-gray-900", children: formatCurrency(values.gross) })] }), _jsx(Input, { label: "W-2 Employment Income", icon: DollarSign, value: formatCurrency(values.w2), onChange: (e) => handleChange('w2', e.target.value), placeholder: "0.00" }), _jsx(Input, { label: "Self-Employment Income", icon: DollarSign, value: formatCurrency(values.selfEmployment), onChange: (e) => handleChange('selfEmployment', e.target.value), placeholder: "0.00" }), _jsx(Input, { label: "Investment Income", icon: DollarSign, value: formatCurrency(values.investment), onChange: (e) => handleChange('investment', e.target.value), placeholder: "0.00" })] })] }));
}
