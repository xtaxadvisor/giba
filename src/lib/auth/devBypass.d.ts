// import { User } from '../types/UserProfile'; // Removed as User is already declared below
export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}
export declare function isDevAuthEnabled(): boolean;
export declare function getDevUser(role?: string): User | null;
export declare function injectDevSession(role?: string): void;
export declare function clearDevSession(): void;
export declare function getDevSession(): {
    user: User | null;
    role: string | null;
};
