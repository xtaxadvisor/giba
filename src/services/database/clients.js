import { DatabaseService } from './index';
import { supabase } from '../../lib/supabase'; // Adjust the import path as necessary
class ClientService extends DatabaseService {
    constructor() {
        super('clients');
    }
    async getByUserId(userId) {
        const { data, error } = await supabase
            .from(this.table)
            .select('*')
            .eq('user_id', userId)
            .single();
        if (error)
            throw error;
        return data;
    }
    async updateStatus(clientId, status) {
        return this.update(clientId, {
            status,
            updated_at: new Date().toISOString()
        });
    }
}
export const clientService = new ClientService();
