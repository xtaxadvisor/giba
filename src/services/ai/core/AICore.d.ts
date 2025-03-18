import type { AIMessage } from '../../../types/ai';
declare class AICore {
    private static instance;
    private constructor();
    static getInstance(): AICore;
    getCompletion(messages: AIMessage[]): Promise<string>;
    validateAPIKey(): Promise<boolean>;
}
export declare const aiCore: AICore;
export {};
