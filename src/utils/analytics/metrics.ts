// ✅ Define the structure of performance metrics
export interface PerformanceMetricsData {
  totalUsers: number;
  newUsers: number;
  activeUsers: number;
  totalRevenue: number;
  avgTransaction: number;
  growthRate: number;
  pendingTransactions: number;
}

export interface AnalyticsMetrics {
  revenue: { change: number };
  clients: { change: number };
  responseTime: { change: number };
  satisfaction: { change: number };
}

// ✅ Define the structure of metric thresholds
export interface MetricThresholds {
  critical: number;
  warning: number;
}

// ✅ Define the structure of metric comparisons
export interface MetricComparison {
  current: number;
  previous: number;
  absoluteChange: number;
  percentageChange: number;
  trend: "up" | "down" | "stable";
}

// ✅ Function to retrieve the latest performance metrics
export function getPerformanceMetrics(): PerformanceMetricsData {
  return {
    totalUsers: 1000,
    newUsers: 500,
    activeUsers: 750,
    totalRevenue: 10000,
    avgTransaction: 100,
    growthRate: 10,
    pendingTransactions: 50,
  };
}
export interface AnalyticsMetrics {
  revenue: { change: number };
  clients: { change: number };
  responseTime: { change: number };
  satisfaction: { change: number };
}

// ✅ Function to calculate growth rate (avoids division by zero)
export function calculateGrowthRate(current: number, previous: number): number {
  if (previous === 0) return 0; // Prevents division by zero
  return ((current - previous) / previous) * 100;
}

// ✅ Function to format a number as a percentage string
export function formatPercentage(value: number): string {
  return `${value.toFixed(1)}%`;
}

// ✅ Function to calculate the overall health score (average of metrics)
export function calculateHealthScore(metrics: number[]): number {
  if (metrics.length === 0) return 0; // Prevents division by zero
  return Math.round(metrics.reduce((sum, value) => sum + value, 0) / metrics.length);
}

// ✅ Function to get predefined metric thresholds
export function getMetricThresholds(): Record<string, MetricThresholds> {
  return {
    totalUsers: { critical: 1000, warning: 500 },
    newUsers: { critical: 500, warning: 250 },
    activeUsers: { critical: 750, warning: 500 },
    totalRevenue: { critical: 10000, warning: 5000 },
    avgTransaction: { critical: 100, warning: 50 },
    growthRate: { critical: 10, warning: 5 },
    pendingTransactions: { critical: 50, warning: 25 },
  };
}

// ✅ Function to compare two metric values
export function compareMetrics(current: number, previous: number): MetricComparison {
  const absoluteChange = current - previous;
  const percentageChange = previous === 0 ? 0 : (absoluteChange / previous) * 100;
  const trend = absoluteChange > 0 ? "up" : absoluteChange < 0 ? "down" : "stable";

  return { current, previous, absoluteChange, percentageChange, trend };
}