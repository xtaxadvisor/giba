export declare class RateLimiter {
    private static instance;
    private requests;
    private constructor();
    static getInstance(): RateLimiter;
    checkLimit(key: string): boolean;
    getRemainingRequests(key: string): number;
    clearRequests(key: string): void;
}
export declare const rateLimiter: RateLimiter;
