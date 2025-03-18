import { useState, useCallback } from 'react';
import { useNotificationStore } from '../lib/store';
import { grakonAI } from '../services/ai/client';
export function useAI() {
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { addNotification } = useNotificationStore();
    const sendMessage = useCallback(async (content) => {
        if (!content.trim()) {
            addNotification('Please enter a message', 'error');
            return;
        }
        try {
            setIsLoading(true);
            // Add user message immediately
            const userMessage = { role: 'user', content };
            setMessages(prev => [...prev, userMessage]);
            // Get response from OpenAI
            const response = await grakonAI.getResponse(content);
            // Add AI response
            const assistantMessage = {
                role: 'assistant',
                content: response
            };
            setMessages(prev => [...prev, assistantMessage]);
            return response;
        }
        catch (error) {
            console.error('AI error:', error);
            addNotification(error instanceof Error ? error.message : 'Unable to get a response. Please try again.', 'error');
            throw error;
        }
        finally {
            setIsLoading(false);
        }
    }, [addNotification]);
    return {
        messages,
        sendMessage,
        isLoading
    };
}
