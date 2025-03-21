/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';

// Example usage of axios to avoid the unused import error
const api = axios.create({ baseURL: 'https://api.example.com' });
import { setupCache } from 'axios-cache-interceptor';

// Configure caching for the axios instance
setupCache(api, { ttl: 1000 * 60 * 5 }); // Example: Cache for 5 minutes

// Removed unused CacheStorage interface to resolve the error



  // Ensure 'methods' is part of a valid configuration object or remove it if unnecessary

