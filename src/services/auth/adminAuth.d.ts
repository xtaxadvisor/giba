export declare class AdminAuthService {
    private static instance;
    private readonly API_URL;
    private constructor();
    static getInstance(): AdminAuthService;
    login(credentials: {
        username: string;
        password: string;
        totpCode?: string;
    }): Promise<boolean>;
    private getAuthToken;
    private retrieveToken;
}
export declare const adminAuthService: AdminAuthService;
