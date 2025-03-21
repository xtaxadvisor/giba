import react from 'react';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
export function SplashScreen() {
    const [isVisible, setIsVisible] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);
    useEffect(() => {
        // Start fade out after 3 seconds
        const timer = setTimeout(() => {
            setIsAnimating(true);
        }, 3000);
        // Remove component after animation completes (4 seconds total)
        const removeTimer = setTimeout(() => {
            setIsVisible(false);
        }, 4000);
        return () => {
            clearTimeout(timer);
            clearTimeout(removeTimer);
        };
    }, []);
    if (!isVisible)
        return null;
    return (_jsxs("div", { className: `fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-1000 ${isAnimating ? 'opacity-0 pointer-events-none' : 'opacity-100'}`, children: [_jsx("button", { onClick: () => setIsVisible(false), className: "absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 transition-colors", children: _jsx(X, { className: "h-6 w-6" }) }), _jsx("div", { className: "flex flex-col items-center space-y-6", children: _jsxs("div", { className: "text-center", children: [_jsxs("h1", { className: "text-7xl font-bold", children: [_jsx("span", { className: "text-blue-600 text-8xl", children: "PRo" }), _jsx("span", { className: "text-gray-900", children: "Ta" }), _jsx("span", { className: "text-blue-600 text-8xl", children: "X" }), _jsx("span", { className: "text-gray-900", children: "Advisors" })] }), _jsx("p", { className: "mt-4 text-2xl text-gray-600", children: "Your Financial Success Partner" })] }) })] }));
}
