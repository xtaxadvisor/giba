export type MetricThreshold = {
  warning: number;
  critical: number;
};
import { predictTrend } from './trends';

export function checkThresholdViolation(
  value: number,
  threshold: MetricThreshold
): 'normal' | 'warning' | 'critical' {
  if (value >= threshold.critical) return 'critical';
  if (value >= threshold.warning) return 'warning';
  return 'normal';
}

export function getThresholdColor(status: 'normal' | 'warning' | 'critical'): string {
  switch (status) {
    case 'critical':
      return 'text-red-600';
    case 'warning':
      return 'text-yellow-600';
    default:
      return 'text-green-600';
  }
}
export { predictTrend };

export function calculateMetricStatus(
  metrics: PerformanceEntry
): Record<string, 'normal' | 'warning' | 'critical'> {
  return Object.entries(metrics).reduce((acc, [key, metric]) => ({
    ...acc,
    [key]: checkThresholdViolation((metric as { current: number }).current, (metric as PerformanceEntry).thresholds)
  }), {});
}