import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function ProgressBar({ percentage }) {
    return (_jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { className: "text-sm font-medium text-gray-700", children: "Form Completion" }), _jsxs("span", { className: "text-sm font-medium text-blue-600", children: [Math.round(percentage), "%"] })] }), _jsx("div", { className: "h-2 bg-gray-200 rounded-full overflow-hidden", children: _jsx("div", { className: "h-full bg-blue-600 rounded-full transition-all duration-300", style: { width: `${percentage}%` } }) })] }));
}
