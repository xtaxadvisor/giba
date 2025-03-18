import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

import { useNavigate } from 'react-router-dom';
import { FileText, Stamp, FileCheck, ArrowLeft, Clock, ClipboardList, FileCode, Globe, } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { useNotificationStore } from '../../lib/store';
export default function SameDayServices() {
    const navigate = useNavigate();
    const { addNotification } = useNotificationStore();
    const services = [
        // Personal Document Services
        {
            title: 'Personal Document Preparation',
            description: 'Professional assistance with personal document preparation and processing.',
            price: '$99',
            duration: '2-3 hours',
            icon: FileText,
            features: [
                'ITIN/Tax ID Applications',
                'Virtual Notarization',
                'Online Document Certification',
                'Work Permit Applications',
                'Document Translation Services'
            ]
        },
        {
            title: 'ITIN/Tax ID Applications',
            description: 'Expert assistance with ITIN and Tax ID applications and submissions.',
            price: '$149',
            duration: '24 hours',
            icon: FileCode,
            features: [
                'Application Preparation',
                'Document Review',
                'IRS Submission',
                'Status Tracking',
                'Support Services'
            ]
        },
        {
            title: 'Virtual Notarization',
            description: 'Convenient online notarization services for your documents.',
            price: '$49',
            duration: '1 hour',
            icon: Stamp,
            features: [
                'Online Document Verification',
                'Digital Certification',
                'Secure Processing',
                'Electronic Delivery',
                '24/7 Availability'
            ]
        },
        {
            title: 'Work Permit Applications',
            description: 'Comprehensive assistance with work permit applications and processing.',
            price: '$199',
            duration: '24 hours',
            icon: ClipboardList,
            features: [
                'Application Review',
                'Document Preparation',
                'Submission Support',
                'Status Tracking',
                'Follow-up Assistance'
            ]
        },
        {
            title: 'Document Translation',
            description: 'Professional translation services for all types of documents.',
            price: '$79/page',
            duration: '24 hours',
            icon: Globe,
            features: [
                'Multiple Languages Available',
                'Certified Translations',
                'Legal Document Translation',
                'Technical Translation',
                'Rush Service Available'
            ]
        },
        // Existing Services...
        {
            title: 'Good Standing Certificates',
            description: 'Obtain official certificates verifying your LLC\'s compliance with state regulations.',
            price: '$149',
            duration: '24 hours',
            icon: FileCheck,
            features: [
                'State Compliance Check',
                'Document Preparation',
                'Rush Processing',
                'Digital Delivery'
            ]
        },
        // ... rest of existing services
    ];
    const handleGetStarted = (service) => {
        try {
            // Navigate to contact form with service details
            navigate('/contact', {
                state: {
                    service: service.title,
                    price: service.price,
                    duration: service.duration
                }
            });
        }
        catch (error) {
            console.error('Navigation error:', error);
            addNotification('Unable to process request. Please try again.', 'error');
        }
    };
    return (_jsx("div", { className: "min-h-screen bg-gradient-to-b from-blue-50 to-white py-12", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsx(Button, { variant: "ghost", icon: ArrowLeft, onClick: () => navigate('/'), className: "mb-8", children: "Back to Home" }), _jsxs("div", { className: "text-center mb-16", children: [_jsx("h1", { className: "text-4xl font-bold text-gray-900 mb-4", children: "Same Day Services" }), _jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Professional business and personal document services with rapid turnaround" }), _jsxs("div", { className: "mt-6 inline-flex items-center px-4 py-2 bg-blue-50 rounded-full", children: [_jsx(Clock, { className: "h-5 w-5 text-blue-600 mr-2" }), _jsx("span", { className: "text-blue-600 font-medium", children: "24-Hour Turnaround Available" })] })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: services.map((service, index) => (_jsx("div", { className: "bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl", children: _jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "flex items-center mb-4", children: [_jsx("div", { className: "p-2 bg-blue-50 rounded-lg", children: React.createElement(service.icon, { className: "h-6 w-6 text-blue-600" }) }), _jsx("h3", { className: "ml-3 text-xl font-semibold text-gray-900", children: service.title })] }), _jsx("p", { className: "text-gray-600 mb-4 min-h-[48px]", children: service.description }), _jsxs("div", { className: "flex items-center justify-between mb-6", children: [_jsx("span", { className: "text-2xl font-bold text-blue-600", children: service.price }), _jsxs("div", { className: "flex items-center text-gray-500", children: [_jsx(Clock, { className: "h-4 w-4 mr-1" }), _jsx("span", { children: service.duration })] })] }), _jsx("ul", { className: "space-y-2 mb-6", children: service.features.map((feature, idx) => (_jsxs("li", { className: "flex items-center text-gray-600", children: [_jsx("div", { className: "h-1.5 w-1.5 bg-blue-600 rounded-full mr-2" }), feature] }, idx))) }), _jsx(Button, { variant: "primary", className: "w-full", onClick: () => handleGetStarted(service), children: "Get Started" })] }) }, index))) })] }) }));
}
