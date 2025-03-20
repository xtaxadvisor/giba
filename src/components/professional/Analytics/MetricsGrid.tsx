import React from "react";
import { TrendingUp, Users, DollarSign, Clock } from 'lucide-react';
import Card from "@/components/ui/Card.js"; // ✅ Absolute Import
import ReactDOMServer from 'react-dom/server';
import { LoadingSpinner } from '../../ui/LoadingSpinner.js';
interface MetricProps {
  title: string;
  value: number;
  description: React.ReactNode; // Expects a React node
}

interface MetricsGridProps {
  metrics: {
    revenue: { change: number };
    clients: { change: number };
    responseTime: { change: number };
    satisfaction: { change: number };
  };
  isLoading: boolean;
}

const Metric: React.FC<MetricProps> = ({ title, value, description }) => (
  <div>
    <h2>{title}</h2>
    <p>{value}</p>
    <p>{description}</p> {/* Expects a string */}
  </div>
);

export function MetricsGrid({ metrics, isLoading }: MetricsGridProps) {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!metrics) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Card
        icon={DollarSign}
        title="Revenue"
        description={ReactDOMServer.renderToStaticMarkup(
          <span className={`flex items-center ${metrics.revenue.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            <TrendingUp className="h-4 w-4 mr-1" />
            {Math.abs(metrics.revenue.change)}% {metrics.revenue.change >= 0 ? 'increase' : 'decrease'}
          </span>
        )} value={''}      />
      <Card
        icon={Users}
        title="Active Clients"
        description={ReactDOMServer.renderToStaticMarkup(
          <span className={`flex items-center ${metrics.clients.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            <TrendingUp className="h-4 w-4 mr-1" />
            {Math.abs(metrics.clients.change)}% {metrics.clients.change >= 0 ? 'increase' : 'decrease'}
          </span>
        )} value={''}      />
      <Card
        icon={Clock}
        title="Avg. Response Time"
        description={ReactDOMServer.renderToStaticMarkup(
          <span className={`flex items-center ${metrics.responseTime.change <= 0 ? 'text-green-600' : 'text-red-600'}`}>
            <TrendingUp className="h-4 w-4 mr-1" />
            {Math.abs(metrics.responseTime.change)}% {metrics.responseTime.change <= 0 ? 'improvement' : 'increase'}
          </span>
        )} value={''}      />
      <Card
        icon={TrendingUp}
        title="Satisfaction"
        description={ReactDOMServer.renderToStaticMarkup(
          <span className={`flex items-center ${metrics.satisfaction.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            <TrendingUp className="h-4 w-4 mr-1" />
            {Math.abs(metrics.satisfaction.change)}% {metrics.satisfaction.change >= 0 ? 'increase' : 'decrease'}
          </span>
        )} value={''}      />
    </div>
  );
}
