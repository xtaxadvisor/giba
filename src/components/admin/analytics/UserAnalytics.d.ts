export interface AnalyticsMetrics {
    totalUsers: number;
    newUsers: number;
    activeUsers: number;
    totalRevenue: number;
    avgTransaction: number;
    growthRate: number;
    pendingTransactions: number;
}
export declare function UserAnalytics(): any;
