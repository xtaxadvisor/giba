import { api } from '../api';
export const analyticsService = {
    getAnalytics: (timeRange) => {
        // Use the timeRange parameter in the implementation
        console.log(`Fetching analytics for time range: ${timeRange}`);
        // Add actual implementation here
    },
    exportAnalytics: ({ timeRange, format }) => api.get(`/analytics/export?timeRange=${timeRange}&format=${format}`, {
        headers: { Accept: format === 'pdf' ? 'application/pdf' : format === 'excel' ? 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' : 'text/csv' }
    }),
    getRevenueData: (timeRange) => api.get(`/analytics/revenue?timeRange=${timeRange}`),
    getClientGrowth: (timeRange) => api.get(`/analytics/clients?timeRange=${timeRange}`)
};
