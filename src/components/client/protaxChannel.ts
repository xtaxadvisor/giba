import { createClient } from "@supabase/supabase-js";
import { RealtimeChannel } from '@supabase/supabase-js';
// import { supabase } from '../lib/supabase/client';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://your-project.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "your-anon-key";

// Initialize Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// export const protaxChannel: RealtimeChannel = supabase.channel('protax');

// Create a real-time channel for ProTax events
export const protaxChannel = supabase
  .channel("protax-updates")
  .on("postgres_changes", { event: "*", schema: "public" }, (payload) => {
    console.log("🔔 ProTax Change Detected:", payload);
  })
  .subscribe();

// Function to send messages/events
export const sendProtaxUpdate = async (message: string) => {
  try {
    const { error } = await supabase
      .from("protax_updates") // Ensure this table exists in Supabase
      .insert([{ message }]);

    if (error) throw error;
    console.log("✅ ProTax update sent successfully.");
  } catch (err) {
    console.error("❌ Error sending ProTax update:", err);
  }
};