export interface HealthMetric {
  name: string;
  score: number;
  trend?: 'up' | 'down' | 'stable';
}

export interface FinancialHealth {
  score: number;
  metrics: HealthMetric[];
  lastUpdated: string;
}
export interface Client {
  email: string;
  phone: string;
  company?: string;
  address?: string;
  website?: string;
  createdAt: string;
  status: 'active' | 'inactive';
  notes?: string;
  recentActivity?: {
    icon: React.ComponentType;
    description: string;
    timestamp: string;
  }[];
}