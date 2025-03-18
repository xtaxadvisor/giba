import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../../components/ui/Button';
export default function TermsAndConditions() {
    const navigate = useNavigate();
    return (_jsx("div", { className: "min-h-screen bg-gray-50 py-12", children: _jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsx(Button, { variant: "ghost", onClick: () => navigate('/'), icon: ArrowLeft, className: "mb-8", children: "Back to Home" }), _jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8", children: [_jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-6", children: "Terms and Conditions" }), _jsxs("div", { className: "prose max-w-none", children: [_jsx("h2", { children: "1. Introduction" }), _jsx("p", { children: "Welcome to ProTaXAdvisors. By using our services, you agree to these terms and conditions." }), _jsx("h2", { children: "2. Services" }), _jsx("p", { children: "We provide tax advisory, financial planning, and related professional services. Our services are subject to professional standards and regulations." }), _jsx("h2", { children: "3. Client Responsibilities" }), _jsx("p", { children: "Clients must provide accurate and complete information. We rely on the information you provide to deliver our services." }), _jsx("h2", { children: "4. Confidentiality" }), _jsx("p", { children: "We maintain strict confidentiality of all client information in accordance with professional standards and applicable laws." }), _jsx("h2", { children: "5. Payment Terms" }), _jsx("p", { children: "Payment is required according to the agreed terms. Late payments may incur additional charges." }), _jsx("h2", { children: "6. Communication" }), _jsx("p", { children: "We may contact you via email, phone, or SMS. By using our services, you consent to receive communications from us." }), _jsx("h2", { children: "7. Online Services" }), _jsx("p", { children: "Our online platform is provided \"as is.\" We strive to maintain availability but cannot guarantee uninterrupted access." }), _jsx("h2", { children: "8. Liability" }), _jsx("p", { children: "Our liability is limited to the extent permitted by law and our professional obligations." }), _jsx("h2", { children: "9. Termination" }), _jsx("p", { children: "Either party may terminate services with written notice, subject to completion of ongoing matters." }), _jsx("h2", { children: "10. Updates" }), _jsx("p", { children: "These terms may be updated. Continued use of our services constitutes acceptance of updated terms." }), _jsx("h2", { children: "11. Contact" }), _jsx("p", { children: "For questions about these terms, please contact us at:" }), _jsxs("ul", { children: [_jsx("li", { children: "Email: info@protaxadvisors.tax" }), _jsx("li", { children: "Phone: (833) 854-5020" }), _jsx("li", { children: "Address: 7575 Kingspointe Pkwy Suite 20, Orlando, Florida 32819" })] })] })] })] }) }));
}
