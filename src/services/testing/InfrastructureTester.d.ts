export declare class InfrastructureTester {
    private static instance;
    private constructor();
    static getInstance(): InfrastructureTester;
    testAll(): Promise<{
        database: {
            success: boolean;
            error: any;
            details: {
                timestamp: string;
            };
        } | {
            success: boolean;
            error: string;
            details?: undefined;
        };
        rls: {
            success: boolean;
            error: any;
            details: {
                timestamp: string;
            };
        } | {
            success: boolean;
            error: string;
            details?: undefined;
        };
        auth: {
            success: boolean;
            details: {
                hasSession: boolean;
                timestamp: string;
            };
            error?: undefined;
        } | {
            success: boolean;
            error: string;
            details?: undefined;
        };
    } | {
        success: boolean;
        error: string;
    }>;
    private testDatabaseConnection;
    private testRLSPolicies;
    private testAuthService;
}
export declare const infrastructureTester: InfrastructureTester;
