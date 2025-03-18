import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function ClientDocuments({ clientId }) {
    return (_jsxs("div", { className: "p-6 bg-white rounded-lg shadow max-w-2xl mx-auto", children: [_jsx("h1", { className: "text-2xl font-semibold text-gray-900 mb-4", children: "Client Documents" }), _jsxs("p", { className: "text-gray-600", children: ["Documents for Client ID: ", clientId] }), _jsx("div", { className: "mt-4 p-3 border rounded-md shadow-md bg-gray-50", children: _jsx("p", { className: "font-medium", children: "No documents available." }) })] }));
}
export default ClientDocuments;
