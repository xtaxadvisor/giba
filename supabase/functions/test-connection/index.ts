import express from "express";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "authorization, x-client-info, apikey, content-type"
  );
  next();
});

// Supabase Client Setup
const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY as string;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// API Route to Test Supabase Connection
app.get("/test-connection", async (_, res) => {
  try {
    const { data, error } = await supabase.rpc("test_connection");

    if (error) throw error;

    res.json({ success: true, data });
  } catch (error) {
    console.error("Connection test error:", error);
    res.status(500).json({ success: false, error: (error as Error).message });
  }
});

// Start Server (for local development)
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});