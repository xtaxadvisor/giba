import { AnalyticsMetrics } from '../components/admin/analytics/UserAnalytics';
export declare function useAnalytics(timeRange: string): {
    metrics: AnalyticsMetrics;
    revenueData: any;
    clientGrowth: any;
    performanceMetrics: any;
    isLoading: boolean;
    exportAnalytics: (format: 'pdf' | 'csv' | 'excel') => Promise<void>;
};
