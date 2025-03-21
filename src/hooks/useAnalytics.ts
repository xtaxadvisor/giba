import { useQuery } from '@tanstack/react-query';
import { analyticsService } from '../services/api/analytics.js';
import { useNotificationStore } from '../lib/store.js';
import { AnalyticsMetrics } from '../components/admin/analytics/UserAnalytics.js';

export function useAnalytics(timeRange: string): {
  satisfaction: number | null; // Replace with the appropriate type based on your data
  responseTime: number | null; // Replace with the appropriate type based on your data
  clients: Record<string, unknown>; // Replace with the appropriate type based on your data
  revenue: number | null; metrics: AnalyticsMetrics, revenueData: Record<string, unknown> | null, clientGrowth: Record<string, unknown> | null, performanceMetrics: Record<string, unknown> | null, isLoading: boolean, exportAnalytics: (format: 'pdf' | 'csv' | 'excel') => Promise<void> 
} {
  const { addNotification } = useNotificationStore();


  const { data: metrics = {} as AnalyticsMetrics, isLoading: metricsLoading } = useQuery({
    queryKey: ['analytics-metrics', timeRange],
    queryFn: () => analyticsService.getAnalytics(timeRange)
  });

  const { data: revenueData, isLoading: revenueLoading } = useQuery({
    queryKey: ['revenue-data', timeRange],
    queryFn: () => analyticsService.getRevenueData(timeRange)
  });

  const { data: clientGrowth, isLoading: clientGrowthLoading } = useQuery({
    queryKey: ['client-growth', timeRange],
    queryFn: () => analyticsService.getClientGrowth(timeRange)
  });

  const performanceMetrics = null;
  const performanceLoading = false;

  const exportAnalytics = async (format: 'pdf' | 'csv' | 'excel') => {
    try {
      const data = await analyticsService.exportAnalytics({ timeRange, format });
      const blob = new Blob([data], { 
        type: format === 'csv' ? 'text/csv' : 
              format === 'excel' ? 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' : 
              'application/pdf' 
      });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `analytics-report-${timeRange}.${format}`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      addNotification('Analytics data exported successfully', 'success');
    } catch {
      addNotification('Failed to export analytics data', 'error');
    }
  };

  return {
  metrics,
  revenueData: revenueData ? Object.fromEntries(revenueData.map(item => [item.date, item.value])) : null,
  clientGrowth: clientGrowth ? Object.fromEntries(clientGrowth.map(item => [item.date, item.value])) : null,
  performanceMetrics,
  isLoading: metricsLoading || revenueLoading || clientGrowthLoading || performanceLoading,
  exportAnalytics,
  satisfaction: null,
  responseTime: null,
  clients: {},
  revenue: null
};
}

export type { AnalyticsMetrics };
