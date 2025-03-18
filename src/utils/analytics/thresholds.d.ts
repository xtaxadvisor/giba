export type MetricThreshold = {
    warning: number;
    critical: number;
};
import { predictTrend } from './trends';
export declare function checkThresholdViolation(value: number, threshold: MetricThreshold): 'normal' | 'warning' | 'critical';
export declare function getThresholdColor(status: 'normal' | 'warning' | 'critical'): string;
export { predictTrend };
export declare function calculateMetricStatus(metrics: PerformanceEntry): Record<string, 'normal' | 'warning' | 'critical'>;
