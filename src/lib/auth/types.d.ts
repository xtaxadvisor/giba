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
export interface User {
    id: string;
    email: string;
}
export interface MetricComparison {
    current: number;
    previous: number;
    absoluteChange: number;
    percentageChange: number;
    trend: 'up' | 'down' | 'stable';
}
export interface User {
    displayName?: string;
}
export interface Document {
    id: string;
    title: string;
    type: string;
    uploadedAt: string;
    status: 'pending' | 'approved' | 'rejected';
    tags?: string[];
}
export interface MenuItem {
    title: string;
    href: string;
    icon: React.ComponentType;
}
export type SomeOtherType = {};
export interface Document {
    id: string;
    name: string;
    type: string;
    size: string;
    uploadedAt: string;
    status: 'pending' | 'approved' | 'rejected';
}
export type UserRole = 'client' | 'student' | 'investor' | 'professional' | 'admin';

declare module 'some-library';
