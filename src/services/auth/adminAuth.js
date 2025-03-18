import { z } from 'zod';
import { useNotificationStore } from '../../lib/store';
import { adminSessionManager } from './adminSession';
import { createSecureHash } from '../../utils/crypto';
const adminCredentialsSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(12)
        .regex(/[A-Z]/, 'Must contain uppercase letter')
        .regex(/[a-z]/, 'Must contain lowercase letter')
        .regex(/[0-9]/, 'Must contain number')
        .regex(/[^A-Za-z0-9]/, 'Must contain special character'),
    totpCode: z.string().length(6).optional()
});
export class AdminAuthService {
    static instance;
    API_URL = import.meta.env.VITE_API_URL || '/.netlify/functions';
    constructor() { }
    static getInstance() {
        if (!AdminAuthService.instance) {
            AdminAuthService.instance = new AdminAuthService();
        }
        return AdminAuthService.instance;
    }
    async login(credentials) {
        try {
            const validated = adminCredentialsSchema.parse(credentials);
            const response = await fetch(`${this.API_URL}/admin-auth`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${await this.getAuthToken()}`
                },
                body: JSON.stringify({
                    username: validated.username,
                    password: await createSecureHash(validated.password),
                    totpCode: validated.totpCode
                })
            });
            if (!response.ok) {
                throw new Error(`Admin auth failed: ${response.statusText}`);
            }
            const data = await response.json();
            await adminSessionManager.createSession(data.user.id, data.user.permissions);
            return true;
        }
        catch (error) {
            console.error('Admin login error:', error);
            useNotificationStore.getState().addNotification('Invalid admin credentials', 'error');
            return false;
        }
    }
    async getAuthToken() {
        const session = await adminSessionManager.validateSession();
        // Assuming the token is stored in a different way, e.g., in session storage
        return session ? await this.retrieveToken() : '';
    }
    async retrieveToken() {
        // Implement the logic to retrieve the token based on session ID
        // For example, it could be stored in session storage or fetched from an API
        return 'your-token-retrieval-logic';
    }
}
export const adminAuthService = AdminAuthService.getInstance();
