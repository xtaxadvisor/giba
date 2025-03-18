export declare function PerformanceMetrics(): Record<string, number>;
export declare function calculateGrowthRate(current: number, previous: number): number;
export declare function formatPercentage(value: number): string;
export declare function calculateHealthScore(metrics: number[]): number;
export declare function getMetricThresholds(): Record<string, {
    critical: number;
    warning: number;
}>;
export interface MetricComparison {
    current: number;
    previous: number;
    absoluteChange: number;
    percentageChange: number;
    trend: 'up' | 'down' | 'stable';
}
