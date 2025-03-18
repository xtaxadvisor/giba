declare class DatabaseConnectionManager {
    private static instance;
    private retryCount;
    private readonly MAX_RETRIES;
    private readonly RETRY_DELAY;
    private isConnected;
    private checkInterval;
    private constructor();
    static getInstance(): DatabaseConnectionManager;
    private initializeConnection;
    checkConnection(): Promise<boolean>;
    getConnectionStatus(): boolean;
    resetRetryCount(): void;
    cleanup(): void;
}
export declare const supabaseConnectionManager: DatabaseConnectionManager;
export {};
