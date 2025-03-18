import { supabase } from './client';
import { useNotificationStore } from '../store';
class DatabaseConnectionManager {
    static instance;
    retryCount = 0;
    MAX_RETRIES = 3;
    RETRY_DELAY = 1000;
    isConnected = false;
    checkInterval = null;
    constructor() {
        this.initializeConnection();
    }
    static getInstance() {
        if (!DatabaseConnectionManager.instance) {
            DatabaseConnectionManager.instance = new DatabaseConnectionManager();
        }
        return DatabaseConnectionManager.instance;
    }
    async initializeConnection() {
        try {
            await this.checkConnection();
            // Set up periodic connection checks
            if (!this.checkInterval) {
                this.checkInterval = setInterval(() => {
                    if (!this.isConnected) {
                        this.checkConnection().catch(console.error);
                    }
                }, 30000); // Check every 30 seconds if disconnected
            }
        }
        catch (error) {
            console.error('Failed to initialize connection:', error);
        }
    }
    async checkConnection() {
        try {
            // Test connection with public data
            const { error } = await supabase
                .from('public_data')
                .select('count')
                .limit(1)
                .single();
            if (error) {
                throw error;
            }
            this.isConnected = true;
            this.retryCount = 0;
            return true;
        }
        catch (error) {
            this.isConnected = false;
            if (this.retryCount < this.MAX_RETRIES) {
                this.retryCount++;
                await new Promise(resolve => setTimeout(resolve, this.RETRY_DELAY * this.retryCount));
                return this.checkConnection();
            }
            useNotificationStore.getState().addNotification('Database connection error. Please try again later.', 'error');
            return false;
        }
    }
    getConnectionStatus() {
        return this.isConnected;
    }
    resetRetryCount() {
        this.retryCount = 0;
    }
    cleanup() {
        if (this.checkInterval) {
            clearInterval(this.checkInterval);
            this.checkInterval = null;
        }
    }
}
export const supabaseConnectionManager = DatabaseConnectionManager.getInstance();
