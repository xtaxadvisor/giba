export declare class AICacheManager {
    private cache;
    private readonly TTL;
    set(key: string, value: string): void;
    get(key: string): string | null;
    clear(): void;
    cleanup(): void;
}
