import React from "react"
import { TrendingUp, CreditCard, AlertCircle } from 'lucide-react';
import Card from "@/components/ui/Card.js"; // ✅ Absolute Import
import { BarChart } from '../charts/BarChart.js';
import { formatCurrency } from '../../../utils/format.js';
import { useAnalytics } from '../../../hooks/useAnalytics.js';


export function RevenueAnalytics() {
  const { metrics } = useAnalytics('month');

  const stats = [
    {
      title: 'Average Transaction',
      value: formatCurrency(metrics?.avgTransaction || 0),
      change: '+3%',
      icon: CreditCard
    },
    {
      title: 'Growth Rate',
      value: `${metrics?.growthRate || 0}%`,
      change: '+5%',
      icon: TrendingUp
    },
    {
      title: 'Pending Transactions',
      value: metrics?.pendingTransactions || 0,
      change: '-8%',
      icon: AlertCircle
    }
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
        <h3 className="text-lg font-medium text-gray-900 mb-4">Monthly Revenue</h3>
        <BarChart />
      </div>
    </div>
  );
}