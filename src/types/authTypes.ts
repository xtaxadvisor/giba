
// ==============================
// ✅ Authentication Types
// ==============================

import { AppUser } from "@/components/admin/AdminLayout";

export interface AuthCredentials {
  email: string;
  password: string;
}
interface AnalyticsMetrics {
  revenue: { change: number };
  clients: { change: number };
  responseTime: { change: number };
  satisfaction: { change: number };
}
export interface TimeSlot {
  startTime: string;
  endTime: string;
  available: boolean;
}

export function useAnalytics(timeRange: string): { metrics: AnalyticsMetrics, revenueData: any, clientGrowth: any, performanceMetrics: any, isLoading: boolean, exportAnalytics: (format: 'pdf' | 'csv' | 'excel') => Promise<void> } {
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
    exportAnalytics: async (format: 'pdf' | 'csv' | 'excel') => {
      // Dummy export function
    }
  };
}

interface RegisterData extends AuthCredentials {
  name: string;
  role: UserRole;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export { RegisterData, UserRole };
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
type UserRole = "client" | "student" | "investor" | "professional" | "admin";

export interface LocalAppUser {
  name: string;
  role: UserRole;
}

// ==============================
// ✅ Navigation / Menu Types
// ==============================

export interface MenuItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

// ✅ Ensure `MenuItem` is exported

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
export interface Recommendation {
  // existing properties
  recommendationField: string; // add this property
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
export interface AuthResponse {
  token: string;
  user: User;
}

export interface AuthError {
  message: string;
  code: number;
}

// ==============================
// ✅ Utility Types
// ==============================

export type SomeOtherType = {
  // Define the properties of SomeOtherType here
};

// Define other types as necessary

// ✅ Declare function for useAuth Hook (if applicable)
declare function useAuth(): { user: LocalAppUser | null };