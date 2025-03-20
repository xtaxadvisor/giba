// ✅ Exporting the Client Interface
export interface Client {
    email: string;
    phone: string;
    company?: string;
    address?: string;
    website?: string;
    createdAt: string;
    status: 'active' | 'inactive';
    notes?: string;
    recentActivity?: { icon: React.ComponentType; description: string; timestamp: string }[];
  }
  
  // existing exports

export interface MenuItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}
  
  // ✅ Export Other Common Types
  export interface TimeSlot {
    startTime: string;
    endTime: string;
    available: boolean;
  }
  
  export type User = {
    id: string;
    email: string;
    displayName?: string;
    avatarUrl?: string;
  };
  
  export type ApiResponse<T> = {
    success: boolean;
    data: T;
    error?: string;
  };
  
  // ✅ Export Everything from This File
  export * from "./client.js"; // If you have client-specific types
  //   export * from "./auth.js"; // If you have authentication-related types