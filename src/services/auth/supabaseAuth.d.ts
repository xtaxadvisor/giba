import type { AuthError, User } from '@supabase/supabase-js';
export declare const supabaseAuth: {
    signUp(email: string, password: string, userData: {
        name: string;
        role: string;
    }): Promise<any>;
    signIn(email: string, password: string): Promise<any>;
    signOut(): Promise<void>;
    getCurrentUser(): Promise<any>;
    resetPassword(email: string): Promise<void>;
    updatePassword(newPassword: string): Promise<void>;
    onAuthStateChange(callback: (user: User | null, error?: AuthError) => void): any;
};
