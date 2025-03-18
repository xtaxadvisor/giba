import type { AIMessage } from '../../../types/ai';
export declare class AIHistoryManager {
    private history;
    private readonly MAX_HISTORY;
    addMessages(...messages: AIMessage[]): void;
    getHistory(): AIMessage[];
    clearHistory(): void;
}
