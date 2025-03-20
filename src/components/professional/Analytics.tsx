import React from "react";
import {
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import Card from "@/components/ui/Card.js"; // ✅ Absolute Import
import { LineChart } from "./charts/LineChart.js";
import { BarChart } from "./charts/BarChart.js";
import { useAnalytics } from "../../hooks/useAnalytics.js";
import { LucideIcon } from "lucide-react";

// Corrected: Single definition for `CardProps`
export interface CardProps {
  icon?: LucideIcon;
  title: string;
  value: string | number;
  description?: React.ReactNode; // Allows strings & JSX elements
  className?: string;
}

// Reusable Metric Card Component
interface MetricCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  change: number;
}

const MetricCard: React.FC<MetricCardProps> = ({ icon: Icon, title, value, change }) => {
  const isPositive = change >= 0;
  return (
    <Card
      icon={Icon}
      title={title}
      value={value}
      description={
        <span className={`flex items-center ${isPositive ? "text-green-600" : "text-red-600"}`}>
          {isPositive ? <ArrowUpRight className="h-4 w-4 mr-1" /> : <ArrowDownRight className="h-4 w-4 mr-1" />}
          {Math.abs(change)}% {isPositive ? "increase" : "decrease"}
        </span>
      }
    />
  );
};

export const Analytics: React.FC = () => {
  const { metrics } = useAnalytics("last-30-days"); // Ensure correct destructuring

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <select className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 3 months</option>
          <option>Last year</option>
        </select>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard icon={DollarSign} title="Revenue" value="$24,500" change={metrics.revenue.change} />
        <MetricCard icon={Users} title="Active Clients" value="156" change={metrics.clients.change} />
        <MetricCard icon={Clock} title="Avg. Response Time" value="2.5h" change={metrics.responseTime.change} />
        <MetricCard icon={TrendingUp} title="Client Satisfaction" value="96%" change={metrics.satisfaction.change} />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Revenue Overview</h3>
          <LineChart />
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Client Growth</h3>
          <BarChart />
        </div>
      </div>
    </div>
  );
};