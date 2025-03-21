/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// Removed unused and non-existent 'Database' import
import { supabase } from '@/lib/supabase/client.js';
import { SupabaseClient } from '@supabase/supabase-js';

class RealtimeService {
  private supabase: SupabaseClient;

  constructor(supabase: SupabaseClient) {
    this.supabase = supabase;
  }
  async sendMessage(message: string, data: any = {}) {
    // implementation
  }

  async updatePresence(data: any) {
    // implementation
  }

  removeAllSubscriptions() {
    const subscriptions = this.supabase.getChannels();
    subscriptions.forEach((subscription) => {
      this.supabase.removeChannel(subscription);
    });
  }
}

// Usage example
const realtimeService = new RealtimeService(supabase);
realtimeService.removeAllSubscriptions();

export { realtimeService };
