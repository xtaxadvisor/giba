// ==============================
// ✅ Authentication Types
// ==============================

export interface AuthCredentials {
  email: string;
  password: string;
}
export { AdminLayout } from './layout/AdminLayout';
export { default as AdminLoginForm } from './auth/AdminLoginForm';
export { AdminProtectedRoute } from './auth/AdminProtectedRoute';
export { default as AdminDashboard } from './dashboard/AdminDashboard';
export { TeamManagement } from './team/TeamManagement';


export interface RegisterData extends AuthCredentials {
  name: string;
  role: UserRole;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export function useAuth(): { user: AppUser | null } {
  return { user: null }; // Placeholder function, replace with actual implementation
}

// ==============================
// ✅ User Types
// ==============================

export interface User {
  id: string;
  email: string;
  displayName?: string;  // Optional user display name
  role: UserRole;
  createdAt?: string;
  updatedAt?: string;
}

// ✅ User Role Types
export type UserRole = "client" | "student" | "investor" | "professional" | "admin";

export interface AppUser {
  name: string;
  role: UserRole;
}

// ==============================
// ✅ Navigation / Menu Types
// ==============================

import React from "react";
import { AdminLayout } from "./layout/AdminLayout";

export interface MenuItem {
  id: string;                   // Unique identifier
  title: string;                 // Display title
  path: string;                  // URL or route path
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children?: MenuItem[];         // Nested menu items (optional)
}

export const menuItems: MenuItem[] = [
  {
    id: "1",
    title: "Dashboard",
    path: "/dashboard",
    href: "#",
    icon: () => <svg></svg>, // Placeholder icon, replace with actual component
    children: []
  }
];

// ==============================
// ✅ Metric & Analytics Types
// ==============================

export interface MetricComparison {
  current: number;
  previous: number;
  absoluteChange: number;
  percentageChange: number;
  trend: "up" | "down" | "stable";
}

export interface AnalyticsMetrics {
  revenue: { change: number };
  clients: { change: number };
  responseTime: { change: number };
  satisfaction: { change: number };
}

export function useAnalytics(timeRange: string): {
  metrics: AnalyticsMetrics;
  revenueData: any;
  clientGrowth: any;
  performanceMetrics: any;
  isLoading: boolean;
  exportAnalytics: (format: "pdf" | "csv" | "excel") => Promise<void>;
} {
  return {
    metrics: {
      revenue: { change: 0 },
      clients: { change: 0 },
      responseTime: { change: 0 },
      satisfaction: { change: 0 }
    },
    revenueData: null,
    clientGrowth: null,
    performanceMetrics: null,
    isLoading: false,
    exportAnalytics: async (format: "pdf" | "csv" | "excel") => {
      // Dummy export function
    }
  };
}

export interface Recommendation {
  recommendationField: string;
}

// ==============================
// ✅ Document Types
// ==============================

export interface Document {
  id: string;
  name: string;
  type: string;
  size?: string;         // Optional, if applicable
  uploadedAt: string;
  status: "pending" | "approved" | "rejected";
  tags?: string[];
}

// ==============================
// ✅ Utility Types
// ==============================

export type SomeOtherType = {
  // Define other types as necessary
};
