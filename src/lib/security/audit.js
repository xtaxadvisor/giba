export class AuditLogger {
    static instance;
    logs = [];
    constructor() { }
    static getInstance() {
        if (!AuditLogger.instance) {
            AuditLogger.instance = new AuditLogger();
        }
        return AuditLogger.instance;
    }
    log(log) {
        const fullLog = {
            ...log,
            timestamp: new Date()
        };
        // Store locally
        this.logs.push(fullLog);
        // Send to server
        this.sendToServer(fullLog).catch(console.error);
    }
    async sendToServer(log) {
        try {
            await fetch('/.netlify/functions/audit-log', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(log)
            });
        }
        catch (error) {
            console.error('Failed to send audit log:', error);
        }
    }
    getLogs(filters) {
        let filteredLogs = [...this.logs];
        if (filters) {
            if (filters.userId) {
                filteredLogs = filteredLogs.filter(log => log.userId === filters.userId);
            }
            if (filters.action) {
                filteredLogs = filteredLogs.filter(log => log.action === filters.action);
            }
            if (filters.resource) {
                filteredLogs = filteredLogs.filter(log => log.resource === filters.resource);
            }
            if (filters.startDate) {
                filteredLogs = filteredLogs.filter(log => log.timestamp >= filters.startDate);
            }
            if (filters.endDate) {
                filteredLogs = filteredLogs.filter(log => log.timestamp <= filters.endDate);
            }
        }
        return filteredLogs;
    }
}
export const auditLogger = AuditLogger.getInstance();
