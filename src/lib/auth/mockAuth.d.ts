import type { AuthCredentials, RegisterData } from './types';
export interface LocalUser {
    id: string;
    email: string;
    role: 'user' | 'admin';
    isAdmin: boolean;
}
export declare function mockLogin(credentials: AuthCredentials): Promise<LocalUser>;
export declare function mockLogout(): Promise<void>;
export declare function mockRegister(data: RegisterData): Promise<void>;
