export declare class AIMetricsManager {
    private metrics;
    incrementRequests(): void;
    updateMetrics(duration: number, success: boolean): void;
    getMetrics(): {
        totalRequests: number;
        averageResponseTime: number;
        errorRate: number;
    };
}
