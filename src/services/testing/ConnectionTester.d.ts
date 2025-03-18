export declare class ConnectionTester {
    private static instance;
    private constructor();
    static getInstance(): ConnectionTester;
    testSupabaseConnection(): Promise<{
        success: boolean;
        error?: string;
    }>;
    testAll(): Promise<Record<string, {
        success: boolean;
        error?: string;
    }>>;
}
export declare const connectionTester: ConnectionTester;
