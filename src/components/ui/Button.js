import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Removed duplicate Button component definition
export function Button({ children, variant = 'primary', size = 'md', icon: Icon, iconPosition = 'left', className = '', ...props }) {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-colors duration-300';
    const variants = {
        primary: 'bg-blue-800 text-white hover:bg-blue-900 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700',
        secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500',
        outline: 'border-2 border-gray-700 text-gray-800 hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-gray-600',
        ghost: 'text-gray-800 hover:text-gray-900 hover:bg-gray-100'
    };
    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg'
    };
    return (_jsxs("button", { className: `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`, ...props, children: [Icon && iconPosition === 'left' && (_jsx(Icon, { className: "mr-2 h-5 w-5", "aria-hidden": "true" })), _jsx("span", { children: children }), Icon && iconPosition === 'right' && (_jsx(Icon, { className: "ml-2 h-5 w-5", "aria-hidden": "true" }))] }));
}
