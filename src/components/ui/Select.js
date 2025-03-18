import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function Select({ label, options, error, icon: Icon, onChange, className = '', id, name, ...props }) {
    // Generate a unique ID if none provided
    const selectId = id || name || `select-${Math.random().toString(36).substr(2, 9)}`;
    return (_jsxs("div", { className: "w-full", children: [label && (_jsx("label", { htmlFor: selectId, className: "block text-sm font-medium text-gray-700 mb-1", children: label })), _jsxs("div", { className: "relative", children: [Icon && (_jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: _jsx(Icon, { className: "h-5 w-5 text-gray-400", "aria-hidden": "true" }) })), _jsx("select", { id: selectId, name: name, className: `
            block w-full rounded-md shadow-sm
            ${Icon ? 'pl-10' : 'pl-3'} pr-10 py-2
            ${error
                            ? 'border-red-300 text-red-900 focus:border-red-500 focus:ring-red-500'
                            : 'border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500'}
            ${className}
          `, onChange: (e) => onChange?.(e.target.value), "aria-invalid": error ? 'true' : 'false', "aria-describedby": error ? `${selectId}-error` : undefined, ...props, children: options.map((option) => (_jsx("option", { value: option.value, children: option.label }, option.value))) })] }), error && (_jsx("p", { className: "mt-1 text-sm text-red-600", id: `${selectId}-error`, children: error }))] }));
}
