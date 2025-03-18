import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export function Settings() {
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    return (_jsxs("div", { className: "p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto", children: [_jsx("h1", { className: "text-2xl font-semibold text-gray-900 mb-4", children: "Settings" }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex justify-between items-center p-3 border rounded-md shadow-md bg-gray-50", children: [_jsx("span", { className: "text-lg font-medium", children: "Enable Notifications" }), _jsx("input", { type: "checkbox", checked: notificationsEnabled, onChange: () => setNotificationsEnabled(!notificationsEnabled), className: "form-checkbox h-5 w-5 text-blue-600" })] }), _jsxs("div", { className: "flex justify-between items-center p-3 border rounded-md shadow-md bg-gray-50", children: [_jsx("span", { className: "text-lg font-medium", children: "Dark Mode" }), _jsx("input", { type: "checkbox", checked: darkMode, onChange: () => setDarkMode(!darkMode), className: "form-checkbox h-5 w-5 text-blue-600" })] }), _jsx("button", { className: "w-full mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition", children: "Save Settings" })] })] }));
}
export default Settings;
