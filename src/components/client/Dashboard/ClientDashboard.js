import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { AlertCircle, Calendar, FileText } from 'lucide-react';
import Card from "@/components/ui/Card.js"; 
export function ClientDashboard() {
    const [documents, setDocuments] = useState([]);
    useEffect(() => {
        async function fetchDocuments() {
            try {
                const response = await fetch('/api/documents'); // Ensure this API exists
                const data = await response.json();
                setDocuments(data);
            }
            catch (error) {
                console.error("Failed to fetch documents:", error);
            }
        }
        fetchDocuments();
    }, []);
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Financial Health Score" }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("div", { className: "flex-1", children: _jsx("div", { className: "h-4 bg-gray-200 rounded-full", children: _jsx("div", { className: "h-4 bg-green-500 rounded-full", style: { width: '85%' } }) }) }), _jsx("span", { className: "ml-4 text-2xl font-bold text-green-500", children: "85/100" })] }), _jsxs("div", { className: "mt-4 grid grid-cols-3 gap-4", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-sm font-medium text-gray-500", children: "Savings" }), _jsx("div", { className: "text-lg font-semibold text-gray-900", children: "92/100" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-sm font-medium text-gray-500", children: "Investments" }), _jsx("div", { className: "text-lg font-semibold text-gray-900", children: "78/100" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-sm font-medium text-gray-500", children: "Tax Planning" }), _jsx("div", { className: "text-lg font-semibold text-gray-900", children: "85/100" })] })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsx(Card, { icon: AlertCircle, title: "Required Actions", value: "3", description: "Tasks needing attention" }), _jsx(Card, { icon: Calendar, title: "Upcoming Deadlines", value: "2", description: "In the next 30 days" })] }), _jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Recent Documents" }), _jsx("div", { className: "space-y-4", children: documents.length > 0 ? (documents.map((doc, index) => (_jsxs("div", { className: "flex items-center justify-between p-4 bg-gray-50 rounded-lg", children: [_jsxs("div", { className: "flex items-center", children: [_jsx(FileText, { className: "h-5 w-5 text-gray-400 mr-3" }), _jsxs("div", { children: [_jsx("p", { className: "font-medium text-gray-900", children: doc.title }), _jsxs("p", { className: "text-sm text-gray-500", children: [doc.type, " \u2022 ", doc.date] })] })] }), _jsx("span", { className: `px-2 py-1 text-xs font-medium rounded-full ${doc.status === 'approved'
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-yellow-100 text-yellow-800'}`, children: doc.status })] }, index)))) : (_jsx("p", { className: "text-gray-500 text-sm", children: "No documents available." })) })] })] }));
}
