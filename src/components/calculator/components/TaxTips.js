import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Lightbulb } from 'lucide-react';
export function TaxTips({ income, filingStatus }) {
    const getTips = () => {
        const tips = [];
        // Add general tips
        tips.push({
            title: 'Keep Good Records',
            description: 'Maintain detailed records of all income, expenses, and deductions throughout the year.'
        });
        // Add income-based tips
        if (income > 100000) {
            tips.push({
                title: 'Consider Retirement Contributions',
                description: 'Maximize your 401(k) or IRA contributions to reduce taxable income.'
            });
        }
        // Add filing status tips
        if (filingStatus === 'married_joint') {
            tips.push({
                title: 'Review Both Incomes',
                description: 'Consider tax implications of combined income and explore deductions available to married couples.'
            });
        }
        return tips;
    };
    const tips = getTips();
    return (_jsxs("div", { className: "bg-blue-50 rounded-lg p-6", children: [_jsxs("h3", { className: "flex items-center text-lg font-medium text-blue-900 mb-4", children: [_jsx(Lightbulb, { className: "h-5 w-5 mr-2" }), "Tax Saving Tips"] }), _jsx("div", { className: "space-y-4", children: tips.map((tip, index) => (_jsxs("div", { className: "bg-white rounded-lg p-4 shadow-sm", children: [_jsx("h4", { className: "text-sm font-medium text-gray-900", children: tip.title }), _jsx("p", { className: "mt-1 text-sm text-gray-600", children: tip.description })] }, index))) })] }));
}
