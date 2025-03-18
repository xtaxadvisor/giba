import type { User } from '../../types';
export declare const authService: {
    signIn(email: string, password: string): Promise<any>;
    signUp(email: string, password: string, userData: {
        name: string;
        role: string;
    }): Promise<void>;
    signOut(): Promise<void>;
    getCurrentUser(): Promise<User | null>;
};
