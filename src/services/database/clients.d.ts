import { DatabaseService } from './index';
import type { Database } from '../../lib/supabase/types';
type Client = Database['public']['Tables']['clients']['Row'];
declare class ClientService extends DatabaseService<'clients'> {
    constructor();
    getByUserId(userId: string): Promise<any>;
    updateStatus(clientId: string, status: Client['status']): Promise<any>;
}
export declare const clientService: ClientService;
export {};
