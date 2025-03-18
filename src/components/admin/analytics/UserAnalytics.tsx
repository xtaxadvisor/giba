import React from "react";
import { Users, UserPlus, Activity } from 'lucide-react';
import { Card } from '../../ui/Card';
import { LineChart } from '../charts/LineChart';
import { useAnalytics } from '../../../hooks/useAnalytics';

export interface AnalyticsMetrics {
  satisfaction: any;
  responseTime: any;
  revenue: any;
  clients: any;
  totalUsers: number;
  newUsers: number;
  activeUsers: number;
  totalRevenue: number;
  avgTransaction: number;
  growthRate: number;
  pendingTransactions: number;
  // Add other properties here
}
export function UserAnalytics() {
  const { metrics } = useAnalytics('month');

  const stats = [
    {
      title: 'Total Users',
      value: metrics?.totalUsers || 0,
      change: '+12%',
      icon: Users
    },
    {
      title: 'New Users',
      value: metrics?.newUsers || 0,
      change: '+5%',
      icon: UserPlus
    },
    {
      title: 'Active Users',
      value: metrics?.activeUsers || 0,
      change: '+8%',
      icon: Activity
    },
  ];


  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card
            key={stat.title}
            title={stat.title}
            value={stat.value}
            description={stat.change}
            icon={stat.icon}
          />
        ))}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">User Growth</h3>
        <LineChart />
      </div>
    </div>
  );
}