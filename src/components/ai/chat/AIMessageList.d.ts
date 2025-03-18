import type { AIMessage as AIMessageType } from '../../../types/ai';
interface AIMessageListProps {
    messages: AIMessageType[];
    isTyping?: boolean;
}
export declare function AIMessageList({ messages, isTyping }: AIMessageListProps): any;
export {};
