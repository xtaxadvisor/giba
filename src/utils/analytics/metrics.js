export function PerformanceMetrics() {
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
export function calculateGrowthRate(current, previous) {
    return ((current - previous) / previous) * 100;
}
export function formatPercentage(value) {
    return `${value.toFixed(1)}%`;
}
export function calculateHealthScore(metrics) {
    return Math.round(metrics.reduce((sum, value) => sum + value, 0) / metrics.length);
}
export function getMetricThresholds() {
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
