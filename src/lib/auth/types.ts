export interface AuthCredentials {
  email: string;
  password: string;
}

export interface RegisterData extends AuthCredentials {
  name: string;
  role: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}


  // other type definitions
export interface User {
  id: string;
  email: string;
  // add other fields as necessary
}
// Ensure MetricComparison is defined and exported
export interface MetricComparison {
  current: number;
  previous: number;
  absoluteChange: number;
  percentageChange: number;
  trend: 'up' | 'down' | 'stable';
}
// other type definitions
export interface User {
  displayName?: string;
  // other properties
}
interface AppUser {
  name: string;
  role: string;
}

declare function useAuth(): { user: AppUser | null };
export interface MenuItem {
  title: string;
  href: string;
  icon: React.ComponentType;
}
export type SomeOtherType = {
  // other type definitions
};

export interface Document {
  id: string;
  name: string;
  type: string;
  size: string;
  uploadedAt: string;
  status: 'pending' | 'approved' | 'rejected';
}
export type UserRole = 'client' | 'student' | 'investor' | 'professional' | 'admin';