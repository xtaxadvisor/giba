import React from "react";
import express from "express";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import { APIError } from "openai";
// Load environment variables
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
// Enable CORS
app.use((_, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "authorization, x-client-info, apikey, content-type");
    next();
});
// Supabase Client Setup
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);
// API Route to Test Supabase Connection
app.get("/test-connection", async (_, res) => {
    try {
        const { data, error } = await supabase.rpc("test_connection");
        if (error)
            throw error;
        res.json({ success: true, data });
    }
    catch (error) {
        console.error("Connection test error:", error);
        res.status(500).json({ success: false, error: error.message });
    }
});
APIError; // Suppress unused warning (for demonstration purposes) // Suppress unused warning (for demonstration purposes) // Suppress unused warning (for demonstration purposes) // Suppress unused warning (for demonstration purposes) 
// API Route to Test OpenAI Connection (for demonstration purposes)
app.get("/test-openai", async (_, res) => {
    try {
        const response = await fetch("https://api.openai.com/v1/engines/davinci/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                prompt: "Once upon a time",
                max_tokens: 5,
            }),
        });
        const data = await response.json();
        res.json({ success: true, data });
    }
    catch (error) {
        console.error("OpenAI test error:", error);
        res.status(500).json({ success: false, error: error.message });
    }
});
// Serve static files
app.listen(PORT, () => { console.log(`Server running on http://localhost:${PORT}`); } ); 
// Start Server (for local development)
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
