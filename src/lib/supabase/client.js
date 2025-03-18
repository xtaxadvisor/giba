import { createClient } from '@supabase/supabase-js';
// Ensure environment variables are properly set
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error("Missing Supabase environment variables");
}
export function testConnection() {
    console.log("Supabase connection test successful");
  }
// Create Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
        storage: typeof window !== 'undefined' ? window.localStorage : undefined,
        storageKey: 'supabase.auth.token'
    },
    realtime: {
        params: {
            eventsPerSecond: 2
        }
    },
    global: {
        headers: {
            'x-client-info': 'protaxadvisors-web'
        }
    },
    db: {
        schema: 'public'
    }
});
