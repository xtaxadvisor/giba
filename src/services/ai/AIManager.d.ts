import type { AIAnalysis, AIMessage } from '../../types/ai';
interface AIManagerConfig {
    debug?: boolean;
}
declare class AIManager {
    private static instance;
    private debug;
    private metrics;
    private history;
    private cache;
    private constructor();
    static getInstance(config?: AIManagerConfig): AIManager;
    processMessage(content: string, context?: string): Promise<{
        response: string;
        analysis?: AIAnalysis;
    }>;
    getMetrics(): {
        totalRequests: number;
        averageResponseTime: number;
        errorRate: number;
    };
    getHistory(): AIMessage[];
    clearHistory(): void;
    setDebug(enabled: boolean): void;
}
export declare const aiManager: AIManager;
export {};
