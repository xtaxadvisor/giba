import { supabase } from '../../lib/supabase/client';
import { useNotificationStore } from '../../lib/store';
class DatabaseConnectionManager {
    static instance;
    retryCount = 0;
    MAX_RETRIES = 3;
    RETRY_DELAY = 1000;
    constructor() { }
    static getInstance() {
        if (!DatabaseConnectionManager.instance) {
            DatabaseConnectionManager.instance = new DatabaseConnectionManager();
        }
        return DatabaseConnectionManager.instance;
    }
    async executeQuery(queryFn) {
        try {
            const { data, error } = await queryFn();
            if (error) {
                if (this.retryCount < this.MAX_RETRIES) {
                    this.retryCount++;
                    await new Promise(resolve => setTimeout(resolve, this.RETRY_DELAY * this.retryCount));
                    return this.executeQuery(queryFn);
                }
                throw error;
            }
            this.retryCount = 0;
            return data;
        }
        catch (error) {
            console.error('Database query error:', error);
            useNotificationStore.getState().addNotification('Failed to fetch data. Please try again.', 'error');
            throw error;
        }
    }
    async healthCheck() {
        try {
            const { error } = await supabase.from('users').select('count').single();
            return !error;
        }
        catch {
            return false;
        }
    }
}
export const dbConnectionManager = DatabaseConnectionManager.getInstance();
