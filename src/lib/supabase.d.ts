declare module '@supabase/supabase-js' {
    export interface SupabaseClient {
      auth: {
        signIn: (credentials: { email: string; password: string }) => Promise<any>;
        signOut: () => Promise<void>;
      };
    }
  }