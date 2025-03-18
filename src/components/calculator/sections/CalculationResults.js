import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowUp, ArrowDown } from 'lucide-react';
import { formatCurrency } from '../../../utils/format';
export function CalculationResults({ results }) {
    const isRefund = results.refund > 0;
    return (_jsxs("div", { className: "bg-gray-50 rounded-xl p-6 mt-8", children: [_jsx("h2", { className: "text-xl font-semibold text-gray-900 mb-6", children: "Calculation Results" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsxs("div", { className: `rounded-lg p-4 ${isRefund ? 'bg-green-100' : 'bg-red-100'}`, children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-sm font-medium text-gray-600", children: isRefund ? 'Expected Refund' : 'Taxes Owed' }), isRefund ? (_jsx(ArrowUp, { className: "h-5 w-5 text-green-600" })) : (_jsx(ArrowDown, { className: "h-5 w-5 text-red-600" }))] }), _jsx("div", { className: `text-2xl font-bold mt-2 ${isRefund ? 'text-green-700' : 'text-red-700'}`, children: formatCurrency(isRefund ? results.refund : results.taxesOwed) })] }), _jsxs("div", { className: "bg-blue-100 rounded-lg p-4", children: [_jsx("span", { className: "text-sm font-medium text-gray-600", children: "Effective Tax Rate" }), _jsxs("div", { className: "text-2xl font-bold text-blue-700 mt-2", children: [results.effectiveTaxRate.toFixed(1), "%"] })] }), _jsxs("div", { className: "bg-purple-100 rounded-lg p-4", children: [_jsx("span", { className: "text-sm font-medium text-gray-600", children: "Total Tax Liability" }), _jsx("div", { className: "text-2xl font-bold text-purple-700 mt-2", children: formatCurrency(results.taxesOwed) })] })] }), _jsx("div", { className: "mt-6 text-sm text-gray-500", children: "* These calculations are estimates based on the information provided and current tax rates. For a detailed analysis, please consult with our tax professionals." })] }));
}
