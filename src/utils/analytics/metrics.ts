
export function PerformanceMetrics(): Record<string, number> {
  return {
    totalUsers: 1000,
    newUsers: 500,
    activeUsers: 750,
    totalRevenue: 10000,
    avgTransaction: 100,
    growthRate: 10,
    pendingTransactions: 50
  };
}
export function calculateGrowthRate(current: number, previous: number): number {
  return ((current - previous) / previous) * 100;
}

export function formatPercentage(value: number): string {
  return `${value.toFixed(1)}%`;
}

export function calculateHealthScore(metrics: number[]): number {
    return Math.round(metrics.reduce((sum, value) => sum + value, 0) / metrics.length);
  }

export function getMetricThresholds(): Record<string, { critical: number; warning: number }> {
  return {
    totalUsers: {
      critical: 1000,
      warning: 500
    },
    newUsers: {
      critical: 500,
      warning: 250
    },
    activeUsers: {
      critical: 750,
      warning: 500
    },
    totalRevenue: {
      critical: 10000,
      warning: 5000
    },
    avgTransaction: {
      critical: 100,
      warning: 50
    },
    growthRate: {
      critical: 10,
      warning: 5
    },
    pendingTransactions: {
      critical: 50,
      warning: 25
    }
  };
}

// Add the MetricComparison interface here if it doesn't exist
export interface MetricComparison {
  current: number;
  previous: number;
  absoluteChange: number;
  percentageChange: number;
  trend: 'up' | 'down' | 'stable';
}