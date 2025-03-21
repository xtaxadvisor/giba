import { useQuery } from '@tanstack/react-query';
import { analyticsService } from '../../../services/api/analytics.js';

export function useRecentActivity() {
  const { data: activities, isLoading } = useQuery({
    queryKey: ['recent-activity'],
    queryFn: ({ queryKey }) => analyticsService.getAnalytics(queryKey[1]),
    refetchInterval: 30000 // Refresh every 30 seconds
  });

  return {
    activities,
    isLoading
  };
}