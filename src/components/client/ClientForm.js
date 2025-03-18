import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export function ClientForm({ initialData, onSubmit, onCancel }) {
    const [formData, setFormData] = useState(initialData || { name: "", email: "", phone: "" });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        await onSubmit(formData);
    };
    return (_jsxs("div", { className: "p-6 bg-white rounded-lg shadow max-w-md mx-auto", children: [_jsx("h1", { className: "text-2xl font-semibold text-gray-900 mb-4", children: "Client Information" }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsx("input", { type: "text", name: "name", placeholder: "Full Name", value: formData.name, onChange: handleChange, className: "w-full p-2 border rounded-md", required: true }), _jsx("input", { type: "email", name: "email", placeholder: "Email Address", value: formData.email, onChange: handleChange, className: "w-full p-2 border rounded-md", required: true }), _jsx("input", { type: "tel", name: "phone", placeholder: "Phone Number", value: formData.phone, onChange: handleChange, className: "w-full p-2 border rounded-md", required: true }), _jsxs("div", { className: "flex justify-between", children: [_jsx("button", { type: "button", onClick: onCancel, className: "bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition", children: "Cancel" }), _jsx("button", { type: "submit", className: "bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition", children: "Save" })] })] })] }));
}
export default ClientForm;
