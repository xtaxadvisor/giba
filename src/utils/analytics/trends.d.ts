export type AnalyticsTrend = {
    value: number;
    change: number;
    direction: 'up' | 'down' | 'stable';
    strength: 'strong' | 'moderate' | 'weak';
};
export declare function calculateTrend(history: Array<{
    date: string;
    value: number;
}>): number;
export declare function analyzeTrend(current: number, previous: number, threshold?: number): AnalyticsTrend;
export declare function predictTrend(history: Array<{
    date: string;
    value: number;
}>): number;
