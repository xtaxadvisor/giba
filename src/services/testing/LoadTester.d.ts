export declare class LoadTester {
    private static instance;
    private constructor();
    static getInstance(): LoadTester;
    testDatabasePerformance(queries?: number): Promise<{
        averageResponseTime: number;
        maxResponseTime: number;
        minResponseTime: number;
        successRate: number;
    }>;
    testAPIEndpoints(endpoints: string[], requests?: number): Promise<Record<string, {
        averageResponseTime: number;
        successRate: number;
        errors: string[];
    }>>;
    testConcurrentConnections(connections?: number): Promise<{
        successfulConnections: number;
        failedConnections: number;
        averageConnectionTime: number;
    }>;
}
export declare const loadTester: LoadTester;
