import type { AIContext } from '../../types/ai';
export declare function formatResponse(response: string): string;
export declare function extractActionItems(response: string): string[];
export declare function generateFollowUpQuestions(context: AIContext): string[];
