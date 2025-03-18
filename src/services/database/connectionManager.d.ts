declare class DatabaseConnectionManager {
    private static instance;
    private retryCount;
    private readonly MAX_RETRIES;
    private readonly RETRY_DELAY;
    private constructor();
    static getInstance(): DatabaseConnectionManager;
    executeQuery<T>(queryFn: () => Promise<{
        data: T | null;
        error: any;
    }>): Promise<T>;
    healthCheck(): Promise<boolean>;
}
export declare const dbConnectionManager: DatabaseConnectionManager;
export {};
