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
export type MetricData = {
  label: string;
  current: number;
  previous: number;
  target: number;
};

export type AnalyticsInsight = {
  type: 'positive' | 'negative' | 'warning';
  metric: string;
  message: string;
  priority: 'high' | 'medium' | 'low';
};
export interface TimeSeriesData {
  color: any;
  data: any;
  label: any;
  date: string;
  value: number;
}

// existing code in analytics.d.ts

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

// ✅ Function to calculate growth rate (avoids division by zero)
export function calculateGrowthRate(current: number, previous: number): number {
  return previous === 0 ? 0 : ((current - previous) / previous) * 100;
}

// ✅ Function to format a number as a percentage string
export function formatPercentage(value: number): string {
  return `${value.toFixed(1)}%`;
}

// ✅ Function to calculate the overall health score (average of metrics)
export function calculateHealthScore(metrics: number[]): number {
  return metrics.length === 0 ? 0 : Math.round(metrics.reduce((sum, value) => sum + value, 0) / metrics.length);
}

// ✅ Function to get predefined metric thresholds
export function getMetricThresholds(): Record<keyof PerformanceMetricsData, MetricThresholds> {
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
  const trend: "up" | "down" | "stable" =
    absoluteChange > 0 ? "up" : absoluteChange < 0 ? "down" : "stable";

  return { current, previous, absoluteChange, percentageChange, trend };
}

// ✅ Define the structure of Analytics Metrics
export interface AnalyticsMetrics {
  revenue: { change: number };
  clients: { change: number };
  responseTime: { change: number };
  satisfaction: { change: number };
}

// ✅ Function to retrieve analytics data with a time range
export function useAnalytics(timeRange: string): {
  metrics: AnalyticsMetrics;
  revenueData: number[];
  clientGrowth: number[];
  performanceMetrics: PerformanceMetricsData;
  isLoading: boolean;
  exportAnalytics: (format: "pdf" | "csv" | "excel") => Promise<void>;
} {
  // Simulated API delay
  const isLoading = false;

  // Example: Generate mock data based on the time range
  const revenueData = timeRange === "Last 7 days" ? [100, 200, 250, 300, 400, 500, 600] : [1000, 1200, 1300, 1400];
  const clientGrowth = timeRange === "Last 7 days" ? [5, 10, 15, 20, 25, 30, 35] : [50, 60, 70, 80];

  // Example metrics
  const metrics: AnalyticsMetrics = {
    revenue: { change: 10 },
    clients: { change: 5 },
    responseTime: { change: -2 },
    satisfaction: { change: 3 },
  };

  // Function to export analytics data in different formats
  async function exportAnalytics(format: "pdf" | "csv" | "excel"): Promise<void> {
    console.log(`Exporting analytics data as ${format}`);
    // Simulate export functionality
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }

  return {
    metrics,
    revenueData,
    clientGrowth,
    performanceMetrics: getPerformanceMetrics(),
    isLoading,
    exportAnalytics,
  };
}