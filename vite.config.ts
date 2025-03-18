import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-query': ['@tanstack/react-query'],
          'vendor-ui': ['lucide-react'],
          'vendor-charts': ['chart.js', 'react-chartjs-2'],
          'vendor-ai': ['openai'],
          'vendor-security': ['dompurify', 'zod'],
          'vendor-supabase': ['@supabase/supabase-js']
        }
      }
    }
  },
    server: {
      hmr: {
        clientPort: 3001 // Ensure this matches the client-side connection port
      }
    }
  });