export declare class AuthService {
    private static readonly MAX_RETRIES;
    static signIn(email: string, password: string): Promise<any>;
    static signUp(email: string, password: string, userData: {
        name: string;
        role: string;
    }): Promise<void>;
    static signOut(): Promise<void>;
    private static handleAuthError;
}
