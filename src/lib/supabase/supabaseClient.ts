import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";
import { useNotificationStore } from "../store";
import { useQuery } from "react-query";

// Ensure environment variables are properly set
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error("❌ Missing Supabase environment variables. Check .env file.");
}

// Create and export the Supabase client
export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY, {
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
