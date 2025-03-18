import { DatabaseService } from './index';
import { supabase } from '@/lib/supabase/client';
class ConsultationService extends DatabaseService {
    constructor() {
        super('consultations');
    }
    async getUpcoming(userId) {
        const { data, error } = await supabase
            .from(this.table)
            .select(`
        *,
        clients (
          id,
          user_id,
          status
        ),
        professionals (
          id,
          user_id,
          title
        )
      `)
            .or(`clients.user_id.eq.${userId},professionals.user_id.eq.${userId}`)
            .gte('start_time', new Date().toISOString())
            .order('start_time', { ascending: true });
        if (error)
            throw error;
        return data;
    }
    async updateStatus(consultationId, status) {
        return this.update(consultationId, {
            status,
            updated_at: new Date().toISOString()
        });
    }
}
export const consultationService = new ConsultationService();
