import { api } from '../api.js';

export interface AnalyticsMetrics {
  revenue: { value: number; change: number };
  clients: { value: number; change: number };
  responseTime: { value: number; change: number };
  satisfaction: { value: number; change: number };
}
export const analyticsService = {
  getAnalytics: (timeRange: string) => {
    // Use the timeRange parameter in the implementation
    console.log(`Fetching analytics for time range: ${timeRange}`);
    // Add actual implementation here
  },
  exportAnalytics: ({ timeRange, format }: { timeRange: string, format: 'pdf' | 'csv' | 'excel' }) =>
    api.get<Blob>(`/analytics/export?timeRange=${timeRange}&format=${format}`, {
      headers: { Accept: format === 'pdf' ? 'application/pdf' : format === 'excel' ? 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' : 'text/csv' }
    }),
  getRevenueData: (timeRange: string) =>
    api.get<Array<{ date: string; value: number }>>(`/analytics/revenue?timeRange=${timeRange}`),
  getClientGrowth: (timeRange: string) =>
    api.get<Array<{ date: string; value: number }>>(`/analytics/clients?timeRange=${timeRange}`)
};
   