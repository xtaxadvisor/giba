import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { FileText, Upload, Download, Trash2, Search, Filter, Eye } from 'lucide-react';
import { Button } from '../ui/Button';
const Documents = () => {
    const [documents] = useState([
        {
            id: '1',
            name: 'Tax_Return_2023.pdf',
            type: 'PDF',
            size: '2.4 MB',
            uploadedAt: '2024-03-15',
            status: 'approved'
        },
        {
            id: '2',
            name: 'Business_Expenses_Q1.xlsx',
            type: 'Excel',
            size: '1.8 MB',
            uploadedAt: '2024-03-14',
            status: 'pending'
        },
        {
            id: '3',
            name: 'Investment_Portfolio.pdf',
            type: 'PDF',
            size: '3.2 MB',
            uploadedAt: '2024-03-13',
            status: 'rejected'
        }
    ]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const filteredDocuments = documents.filter(doc => {
        const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterStatus === 'all' || doc.status === filterStatus;
        return matchesSearch && matchesFilter;
    });
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Documents" }), _jsx(Button, { variant: "primary", icon: Upload, children: "Upload New Document" })] }), _jsx("div", { className: "bg-white rounded-lg shadow", children: _jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "flex justify-between items-center mb-6", children: [_jsxs("div", { className: "relative flex-1 max-w-md", children: [_jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" }), _jsx("input", { type: "text", placeholder: "Search documents...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" })] }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx(Filter, { className: "h-5 w-5 text-gray-400" }), _jsxs("select", { value: filterStatus, onChange: (e) => setFilterStatus(e.target.value), className: "border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500", children: [_jsx("option", { value: "all", children: "All Status" }), _jsx("option", { value: "pending", children: "Pending" }), _jsx("option", { value: "approved", children: "Approved" }), _jsx("option", { value: "rejected", children: "Rejected" })] })] })] }), _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-200", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Name" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Type" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Size" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Uploaded" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Status" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Actions" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: filteredDocuments.map((doc) => (_jsxs("tr", { className: "hover:bg-gray-50", children: [_jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsxs("div", { className: "flex items-center", children: [_jsx(FileText, { className: "h-5 w-5 text-gray-400 mr-2" }), _jsx("span", { className: "text-sm font-medium text-gray-900", children: doc.name })] }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: doc.type }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: doc.size }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: doc.uploadedAt }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsx("span", { className: `px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${doc.status === 'approved' ? 'bg-green-100 text-green-800' :
                                                            doc.status === 'rejected' ? 'bg-red-100 text-red-800' :
                                                                'bg-yellow-100 text-yellow-800'}`, children: doc.status.charAt(0).toUpperCase() + doc.status.slice(1) }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium", children: _jsxs("div", { className: "flex space-x-3", children: [_jsx(Button, { variant: "ghost", size: "sm", icon: Eye, children: "View" }), _jsx(Button, { variant: "ghost", size: "sm", icon: Download, children: undefined }), _jsx(Button, { variant: "ghost", size: "sm", icon: Trash2, className: "text-red-600 hover:text-red-700", children: "Delete" })] }) })] }, doc.id))) })] }) })] }) })] }));
};
export default Documents;
