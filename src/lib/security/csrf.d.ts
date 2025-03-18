export declare class CSRFProtection {
    private static instance;
    private token;
    private constructor();
    static getInstance(): CSRFProtection;
    private setupCSRFToken;
    private generateToken;
    getToken(): string;
    validateToken(token: string): boolean;
    getRequestHeaders(): Record<string, string>;
}
export declare const csrfProtection: CSRFProtection;
