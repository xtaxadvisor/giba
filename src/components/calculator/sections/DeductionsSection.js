import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DollarSign } from 'lucide-react';
import { Input } from '../../ui/Input';
import { formatCurrency } from '../../../utils/format';
export function DeductionsSection({ values, onChange }) {
    const handleChange = (field, value) => {
        const numericValue = value.replace(/[^0-9]/g, '');
        const amount = numericValue ? parseInt(numericValue, 10) : 0;
        onChange({ ...values, [field]: amount });
    };
    return (_jsxs("div", { className: "space-y-6", children: [_jsx("h2", { className: "text-lg font-semibold text-gray-900", children: "Deductions & Credits" }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center space-x-4", children: [_jsxs("label", { className: "flex items-center", children: [_jsx("input", { type: "radio", checked: values.type === 'standard', onChange: () => onChange({ ...values, type: 'standard' }), className: "h-4 w-4 text-blue-600 focus:ring-blue-500" }), _jsx("span", { className: "ml-2 text-sm text-gray-700", children: "Standard Deduction" })] }), _jsxs("label", { className: "flex items-center", children: [_jsx("input", { type: "radio", checked: values.type === 'itemized', onChange: () => onChange({ ...values, type: 'itemized' }), className: "h-4 w-4 text-blue-600 focus:ring-blue-500" }), _jsx("span", { className: "ml-2 text-sm text-gray-700", children: "Itemized Deduction" })] })] }), _jsx(Input, { label: "Child Tax Credit", icon: DollarSign, value: formatCurrency(values.childTaxCredit), onChange: (e) => handleChange('childTaxCredit', e.target.value), placeholder: "0.00" }), _jsx(Input, { label: "Student Loan Interest", icon: DollarSign, value: formatCurrency(values.studentLoanInterest), onChange: (e) => handleChange('studentLoanInterest', e.target.value), placeholder: "0.00" }), _jsx(Input, { label: "Mortgage Interest", icon: DollarSign, value: formatCurrency(values.mortgageInterest), onChange: (e) => handleChange('mortgageInterest', e.target.value), placeholder: "0.00" })] })] }));
}
