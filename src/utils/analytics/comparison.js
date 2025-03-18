export function calculateYearOverYear(current, previous) {
    const change = ((current - previous) / previous) * 100;
    return {
        current,
        previous,
        absoluteChange: current - previous,
        percentageChange: change,
        trend: change > 0 ? 'up' : change < 0 ? 'down' : 'stable'
    };
}
const sampleMetrics = [
    { name: 'totalUsers', value: 1000 },
    { name: 'newUsers', value: 500 },
    { name: 'activeUsers', value: 750 }
];
// Define the rankMetrics function
function rankMetrics(metrics) {
    return metrics.sort((a, b) => b.value - a.value);
}
console.log(rankMetrics(sampleMetrics));
export function AnalyticsMetrics() {
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
