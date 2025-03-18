import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Info } from 'lucide-react';
import { formatCurrency } from '../../../utils/format';
export function TaxBrackets({ brackets, income }) {
    return (_jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900", children: "Tax Brackets" }), _jsxs("div", { className: "flex items-center text-sm text-gray-500", children: [_jsx(Info, { className: "h-4 w-4 mr-1" }), "Your Income: ", formatCurrency(income)] })] }), _jsx("div", { className: "space-y-4", children: brackets.map((bracket, index) => {
                    const isInBracket = income > bracket.min && (!bracket.max || income <= bracket.max);
                    const width = Math.min(100, (income / (bracket.max || income) * 100));
                    return (_jsxs("div", { className: "relative", children: [_jsxs("div", { className: "flex justify-between text-sm mb-1", children: [_jsxs("span", { className: "font-medium text-gray-900", children: [bracket.rate, "%"] }), _jsxs("span", { className: "text-gray-500", children: [formatCurrency(bracket.min), " - ", bracket.max ? formatCurrency(bracket.max) : 'Above'] })] }), _jsx("div", { className: "h-2 bg-gray-200 rounded-full overflow-hidden", children: _jsx("div", { className: `h-full rounded-full transition-all duration-500 ${isInBracket ? 'bg-blue-500' : 'bg-gray-400'}`, style: { width: `${isInBracket ? width : 0}%` } }) }), isInBracket && (_jsxs("div", { className: "mt-1 text-sm text-blue-600", children: ["Tax in this bracket: ", formatCurrency(bracket.tax)] }))] }, index));
                }) })] }));
}
