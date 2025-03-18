export declare const SECURITY_CONFIG: {
    auth: {
        maxLoginAttempts: number;
        lockoutDuration: number;
        sessionTimeout: number;
        passwordMinLength: number;
        requireMFA: boolean;
    };
    rateLimit: {
        windowMs: number;
        maxRequests: number;
    };
    csrf: {
        cookieName: string;
        headerName: string;
    };
    headers: {
        'Content-Security-Policy': string;
        'X-Frame-Options': string;
        'X-Content-Type-Options': string;
        'X-XSS-Protection': string;
        'Referrer-Policy': string;
    };
};
