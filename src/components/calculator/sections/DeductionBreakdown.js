import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PieChart } from 'react-chartjs-2';
import { formatCurrency } from '../../../utils/format';
export function DeductionBreakdown({ deductions, selectedType }) {
    const itemizedTotal = Object.values(deductions.itemized).reduce((a, b) => a + b, 0);
    const data = {
        labels: ['Mortgage Interest', 'Student Loan Interest', 'Charitable Contributions', 'Other'],
        datasets: [{
                data: [
                    deductions.itemized.mortgage,
                    deductions.itemized.studentLoan,
                    deductions.itemized.charitable,
                    deductions.itemized.other
                ],
                backgroundColor: [
                    'rgba(59, 130, 246, 0.8)',
                    'rgba(16, 185, 129, 0.8)',
                    'rgba(251, 191, 36, 0.8)',
                    'rgba(107, 114, 128, 0.8)'
                ]
            }]
    };
    return (_jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Deduction Analysis" }), _jsxs("div", { className: "flex items-center justify-between mb-6", children: [_jsxs("div", { children: [_jsx("div", { className: "text-sm text-gray-500", children: "Standard Deduction" }), _jsx("div", { className: "text-lg font-medium text-gray-900", children: formatCurrency(deductions.standard) })] }), _jsxs("div", { children: [_jsx("div", { className: "text-sm text-gray-500", children: "Itemized Total" }), _jsx("div", { className: "text-lg font-medium text-gray-900", children: formatCurrency(itemizedTotal) })] })] }), _jsxs("div", { className: "mb-6", children: [_jsxs("div", { className: "text-sm font-medium text-gray-700 mb-2", children: ["Recommended Method: ", ' ', _jsx("span", { className: "text-blue-600", children: itemizedTotal > deductions.standard ? 'Itemized' : 'Standard' })] }), _jsx("div", { className: "text-sm text-gray-500", children: itemizedTotal > deductions.standard
                            ? `Itemizing saves you ${formatCurrency(itemizedTotal - deductions.standard)}`
                            : `Standard deduction saves you ${formatCurrency(deductions.standard - itemizedTotal)}` })] }), selectedType === 'itemized' && (_jsx("div", { className: "h-64", children: _jsx(PieChart, { data: data }) }))] }));
}
