import React, { useState } from 'react';
import { TrendingUp, Users, DollarSign, Clock, Filter, Download, Calendar } from 'lucide-react';
import { Button } from '../../ui/Button.js';
import { Select } from '../../ui/Select.js';
import { MetricsGrid } from './MetricsGrid.js';
import { RevenueChart } from '../charts/RevenueChart.js';
import { PerformanceMetrics } from './PerformanceMetrics.js';
import { useAnalytics } from '../../../hooks/useAnalytics.js';
import { LoadingSpinner } from '../../ui/LoadingSpinner.js';

export function AnalyticsDashboard() {
  const [timeRange, setTimeRange] = useState('month');
  const { 
    metrics, 
    revenueData, 
    clientGrowth, 
    performanceMetrics,
    isLoading, 
    exportAnalytics 
  } = useAnalytics(timeRange);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-gray-400" />
            <Select
              options={[
                { value: 'week', label: 'This Week' },
                { value: 'month', label: 'This Month' },
                { value: 'quarter', label: 'This Quarter' },
                { value: 'year', label: 'This Year' }
              ]}
              value={timeRange}
              onChange={setTimeRange}
            />
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              icon={Download}
              onClick={() => exportAnalytics('pdf')}
            >
              PDF
            </Button>
            <Button
              variant="outline"
              size="sm"
              icon={Download}
              onClick={() => exportAnalytics('csv')}
            >
              CSV
            </Button>
            <Button
              variant="outline"
              size="sm"
              icon={Download}
              onClick={() => exportAnalytics('excel')}
            >
              Excel
            </Button>
          </div>
        </div>
      </div>

      <MetricsGrid metrics={metrics} isLoading={false} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Revenue Trends</h3>
          <RevenueChart data={revenueData} />
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Client Growth</h3>
          <RevenueChart data={clientGrowth} />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Performance Metrics</h3>
        <PerformanceMetrics data={performanceMetrics} />
      </div>
    </div>
  );
}