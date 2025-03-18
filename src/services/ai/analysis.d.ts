import type { AIAnalysis } from '../../types/ai';
export declare function analyzeText(text: string): Promise<AIAnalysis>;
export declare function extractKeyInsights(text: string): string[];
export declare function generateSummary(text: string, maxLength?: number): string;
