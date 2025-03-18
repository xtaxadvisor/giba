import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function ClientHistory({ clientId }) {
    // Simulated client history data (Replace with API call if needed)
    const history = [
        { id: 1, action: "Signed Lease Agreement", date: "2024-01-15" },
        { id: 2, action: "Uploaded Tax Documents", date: "2024-02-10" },
        { id: 3, action: "Scheduled Consultation", date: "2024-03-01" },
    ];
    return (_jsxs("div", { className: "p-6 bg-white rounded-lg shadow max-w-2xl mx-auto", children: [_jsx("h1", { className: "text-2xl font-semibold text-gray-900 mb-4", children: "Client History" }), _jsxs("p", { className: "text-gray-600", children: ["History for Client ID: ", clientId] }), _jsx("ul", { className: "divide-y divide-gray-200 mt-4", children: history.map((entry) => (_jsxs("li", { className: "py-3", children: [_jsx("p", { className: "font-medium text-gray-900", children: entry.action }), _jsx("p", { className: "text-sm text-gray-600", children: entry.date })] }, entry.id))) })] }));
}
export default ClientHistory;
