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

export type UserRole = 'client' | 'student' | 'investor' | 'professional' | 'admin';