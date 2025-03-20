import { createClient } from "@supabase/supabase-js";
import type { Database as ExternalDatabase } from "./types.js";
import { useNotificationStore } from "../store.js";
import { useQuery } from "react-query";

// Ensure environment variables are properly set
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error("❌ Missing Supabase environment variables. Check .env file.");
}
export const useSupabase = () => { return supabase; }; // Create a custom hook to access the Supabase client instance in components 

// Export the Database type or interface
export type Database = {
  public: {
      Tables: {
          [key: string]: {
              Insert: any;
              Update: any;
          };
      };
  };
};
// Create and export the Supabase client
export const supabase = createClient<LocalDatabase>(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    storage: typeof window !== "undefined" ? window.localStorage : undefined,
    storageKey: "supabase.auth.token",
  },
  realtime: {
    params: {
      eventsPerSecond: 2,
    },
  },
  global: {
    headers: {
      "x-client-info": "protaxadvisors-web",
    },
  },
});
// Ensure this is the declaration of Database
export type LocalDatabase = { test_table: { id: number; name: string }[] }; // Define the LocalDatabase type to include the test_table table with id and name fields 
// Define the useSupabase hook to return the Supabase client instance 
// Export the Database type
export type LocalDatabaseType = {
  // Define the structure of the Database type here
  public: {
      Tables: {
          [key: string]: {
              Insert: any;
              Update: any;
          };
      };
  };
};
// Function to test the Supabase connection
export const testConnection = async () => {
  try {
    const { data, error } = await supabase.from("test_table").select("*").limit(1);
    if (error) throw error;
    console.log("✅ Supabase connection successful:", data);
  } catch (err) {
    console.error("❌ Supabase connection failed:", err);
  }
// Function to test the Supabase connection
// export const testConnection = async () => {
  try {
    const { data, error } = await supabase.from("test_table").select("*").limit(1);
    if (error) throw error;
    console.log("✅ Supabase connection successful:", data);
  } catch (err) {
    console.error("❌ Supabase connection failed:", err);
  }
};
