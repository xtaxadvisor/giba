import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Bot, User } from 'lucide-react';
import { AIResponseActions } from './AIResponseActions';
export function AIMessage({ message, isLast }) {
    const isUser = message.role === 'user';
    const handleCopy = () => {
        navigator.clipboard.writeText(message.content);
    };
    const handleFeedback = (isPositive) => {
        console.log('Feedback:', isPositive);
    };
    return (_jsxs("div", { className: `flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`, children: [!isUser && (_jsx("div", { className: "flex-shrink-0 mr-3", children: _jsx("div", { className: "w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center", children: _jsx(Bot, { className: "h-5 w-5 text-blue-600" }) }) })), _jsxs("div", { className: `flex flex-col max-w-[80%] ${isUser ? 'items-end' : 'items-start'}`, children: [_jsx("div", { className: `rounded-lg px-4 py-2 ${isUser
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-900'}`, children: _jsx("p", { className: "text-sm whitespace-pre-wrap", children: message.content }) }), !isUser && isLast && (_jsx(AIResponseActions, { onCopy: handleCopy, onFeedback: handleFeedback }))] }), isUser && (_jsx("div", { className: "flex-shrink-0 ml-3", children: _jsx("div", { className: "w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center", children: _jsx(User, { className: "h-5 w-5 text-gray-600" }) }) }))] }));
}
