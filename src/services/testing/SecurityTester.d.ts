export declare class SecurityTester {
    private static instance;
    private constructor();
    static getInstance(): SecurityTester;
    testAuthenticationFlow(): Promise<{
        success: boolean;
        issues: string[];
    }>;
    testRLS(): Promise<{
        success: boolean;
        issues: string[];
    }>;
    testAPIEndpointSecurity(): Promise<{
        success: boolean;
        issues: string[];
    }>;
}
export declare const securityTester: SecurityTester;
