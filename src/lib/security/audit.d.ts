export interface AuditLog {
    timestamp: Date;
    userId: string;
    action: string;
    resource: string;
    details: Record<string, any>;
    ipAddress: string;
    userAgent: string;
}
export declare class AuditLogger {
    private static instance;
    private logs;
    private constructor();
    static getInstance(): AuditLogger;
    log(log: Omit<AuditLog, 'timestamp'>): void;
    private sendToServer;
    getLogs(filters?: {
        userId?: string;
        action?: string;
        resource?: string;
        startDate?: Date;
        endDate?: Date;
    }): AuditLog[];
}
export declare const auditLogger: AuditLogger;
