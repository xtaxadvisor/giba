import type { AIMessage } from '../../types/ai';
interface AIChatProps {
    messages: AIMessage[];
    onSendMessage: (message: string) => void;
    isLoading: boolean;
    error?: Error;
    onClose: () => void;
}
export declare function AIChat({ messages, onSendMessage, isLoading, error, onClose }: AIChatProps): any;
export {};
