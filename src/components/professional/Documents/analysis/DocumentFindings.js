import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CheckCircle, AlertTriangle } from 'lucide-react';
export function DocumentFindings({ findings }) {
    if (!findings || findings.length === 0) {
        return null; // ✅ Prevents rendering an empty container if no findings exist
    }
    return (_jsxs("div", { className: "border rounded-lg p-4", children: [_jsx("h4", { className: "font-medium text-gray-900", children: "Key Findings" }), _jsx("div", { className: "mt-2 space-y-2", children: findings.map(({ type, message }, index) => (_jsxs("div", { className: "flex items-start space-x-2", children: [type === 'success' ? (_jsx(CheckCircle, { className: "h-5 w-5 text-green-500 mt-0.5" })) : (_jsx(AlertTriangle, { className: "h-5 w-5 text-yellow-500 mt-0.5" })), _jsx("span", { className: "text-gray-600", children: message })] }, index))) })] }));
}
