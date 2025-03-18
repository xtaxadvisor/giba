import { DatabaseService } from './index';
import type { Database } from '../../lib/supabase/types';
type Consultation = Database['public']['Tables']['consultations']['Row'];
declare class ConsultationService extends DatabaseService<'consultations'> {
    constructor();
    getUpcoming(userId: string): Promise<any>;
    updateStatus(consultationId: string, status: Consultation['status']): Promise<any>;
}
export declare const consultationService: ConsultationService;
export {};
