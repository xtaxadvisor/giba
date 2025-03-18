import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()], // ✅ Only one "plugins" entry

  resolve: {  // ✅ Merged resolve objects
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".tsx", ".ts", ".js", ".jsx"], // ✅ Ensure all file types are recognized
  },

  server: {
    port: 3001,
    strictPort: false,
    host: true,
    mimeTypes: {
      "font/woff2": [".woff2"], // ✅ Ensure correct MIME type for WOFF2
    }
  },

  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "terser",
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-query": ["@tanstack/react-query"],
          "vendor-ui": ["lucide-react"],
          "vendor-charts": ["chart.js", "react-chartjs-2"],
          "vendor-ai": ["openai"],
          "vendor-security": ["dompurify", "zod"],
          "vendor-supabase": ["@supabase/supabase-js"],
        },
      },
    },
  },
});