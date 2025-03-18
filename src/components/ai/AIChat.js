import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { AIMessageList } from './AIMessageList';
import { AIMessageInput } from './AIMessageInput';
import { AIWelcomeMessage } from './AIWelcomeMessage';
import { AISuggestions } from './AISuggestions';
import { AIHeader } from './AIHeader';
export function AIChat({ messages, onSendMessage, isLoading, error, onClose }) {
    const suggestions = [
        'What tax deductions can I claim?',
        'How do I calculate my estimated taxes?',
        'What documents do I need for tax filing?',
        'Can you explain business tax obligations?'
    ];
    return (_jsxs("div", { className: "flex flex-col h-[500px]", children: [_jsx(AIHeader, { onClose: onClose, title: "GRAKON AI" }), _jsx("div", { className: "flex-1 overflow-y-auto", children: messages.length === 0 ? (_jsxs(_Fragment, { children: [_jsx(AIWelcomeMessage, {}), _jsx(AISuggestions, { suggestions: suggestions, onSelect: onSendMessage })] })) : (_jsx(AIMessageList, { messages: messages, isTyping: isLoading })) }), _jsx(AIMessageInput, { onSend: onSendMessage, isDisabled: isLoading, placeholder: "Ask me anything about taxes or finance..." }), error && (_jsx("div", { className: "p-4 bg-red-50 text-red-600 text-sm border-t border-red-100", children: error.message }))] }));
}
