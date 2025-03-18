type MetricComparison = {
    current: number;
    previous: number;
    absoluteChange: number;
    percentageChange: number;
    trend: 'up' | 'down' | 'stable';
};
export declare function calculateYearOverYear(current: number, previous: number): MetricComparison;
export {};
