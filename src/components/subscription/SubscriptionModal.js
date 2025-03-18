import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { useNotificationStore } from '../../lib/store';
export function SubscriptionModal({ isOpen, onClose, plan, onSubscribe }) {
    const [loading, setLoading] = useState(false);
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvc, setCvc] = useState('');
    const { addNotification } = useNotificationStore();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // In a real implementation, you would tokenize the card details
            // and only send the token to your server
            const mockPaymentMethodId = 'pm_' + Date.now();
            await onSubscribe(mockPaymentMethodId);
            onClose();
            addNotification('Subscription successful!', 'success');
        }
        catch (error) {
            addNotification(error instanceof Error ? error.message : 'Subscription failed', 'error');
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsx(Modal, { isOpen: isOpen, onClose: onClose, title: `Subscribe to ${plan.name}`, children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-lg font-medium text-gray-900", children: "Payment Details" }), _jsxs("p", { className: "mt-1 text-sm text-gray-500", children: ["You will be charged $", plan.price, " per ", plan.interval] })] }), _jsx(Input, { label: "Card Number", value: cardNumber, onChange: (e) => setCardNumber(e.target.value.replace(/\D/g, '')), maxLength: 16, placeholder: "1234 5678 9012 3456", required: true }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsx(Input, { label: "Expiry Date", value: expiryDate, onChange: (e) => setExpiryDate(e.target.value), placeholder: "MM/YY", maxLength: 5, required: true }), _jsx(Input, { label: "CVC", value: cvc, onChange: (e) => setCvc(e.target.value.replace(/\D/g, '')), maxLength: 4, type: "password", required: true })] }), _jsxs("div", { className: "flex justify-end space-x-3", children: [_jsx(Button, { type: "button", variant: "outline", onClick: onClose, disabled: loading, children: "Cancel" }), _jsx(Button, { type: "submit", variant: "primary", disabled: loading, children: loading ? 'Processing...' : 'Subscribe' })] })] }) }));
}
