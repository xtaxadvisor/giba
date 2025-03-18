import { SECURITY_CONFIG } from './config';
export class RateLimiter {
    static instance;
    requests = new Map();
    constructor() { }
    static getInstance() {
        if (!RateLimiter.instance) {
            RateLimiter.instance = new RateLimiter();
        }
        return RateLimiter.instance;
    }
    checkLimit(key) {
        const now = Date.now();
        const windowStart = now - SECURITY_CONFIG.rateLimit.windowMs;
        // Get existing requests
        let requestTimestamps = this.requests.get(key) || [];
        // Remove old requests
        requestTimestamps = requestTimestamps.filter(timestamp => timestamp > windowStart);
        // Check if limit exceeded
        if (requestTimestamps.length >= SECURITY_CONFIG.rateLimit.maxRequests) {
            return false;
        }
        // Add new request
        requestTimestamps.push(now);
        this.requests.set(key, requestTimestamps);
        return true;
    }
    getRemainingRequests(key) {
        const requestTimestamps = this.requests.get(key) || [];
        return Math.max(0, SECURITY_CONFIG.rateLimit.maxRequests - requestTimestamps.length);
    }
    clearRequests(key) {
        this.requests.delete(key);
    }
}
export const rateLimiter = RateLimiter.getInstance();
