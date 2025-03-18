import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function Input({ label, error, icon: Icon, helperText, className = '', multiline = false, rows = 4, id, name, 'aria-label': ariaLabel, ...props }) {
    // Generate a unique ID if none provided
    const inputId = id || name || `input-${Math.random().toString(36).substr(2, 9)}`;
    const labelText = label || ariaLabel;
    const baseClasses = `
    block w-full rounded-md shadow-sm
    ${Icon ? 'pl-10' : 'pl-3'} pr-3 py-2
    ${error
        ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500'
        : 'border-gray-600 focus:border-blue-600 focus:ring-blue-600 text-gray-900'}
    ${className}
  `;
    return (_jsxs("div", { className: "w-full", children: [labelText && (_jsx("label", { htmlFor: inputId, className: "block text-sm font-medium text-gray-900 mb-1", children: labelText })), _jsxs("div", { className: "relative", children: [Icon && (_jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: _jsx(Icon, { className: "h-5 w-5 text-gray-500", "aria-hidden": "true" }) })), multiline ? (_jsx("textarea", { id: inputId, name: name, rows: rows, className: baseClasses, "aria-invalid": error ? 'true' : 'false', "aria-describedby": error ? `${inputId}-error` : undefined, ...props })) : (_jsx("input", { id: inputId, name: name, className: baseClasses, "aria-invalid": error ? 'true' : 'false', "aria-describedby": error ? `${inputId}-error` : undefined, ...props }))] }), (error || helperText) && (_jsx("p", { className: `mt-1 text-sm ${error ? 'text-red-700' : 'text-gray-700'}`, id: error ? `${inputId}-error` : undefined, children: error || helperText }))] }));
}
