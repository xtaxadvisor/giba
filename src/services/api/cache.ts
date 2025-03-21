/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { NotEmptyStorageValue, setupCache } from 'axios-cache-interceptor';

interface CacheStorage {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}


interface CacheKeyFunction {
  (req: { params?: Record<string, unknown>; url: string; method: string }): string;
}

interface CacheInvalidateFunction {
  (config: { invalidate?: string[] }): Promise<void>;
}
const get = async (key: string): Promise<NotEmptyStorageValue | null> => {
  const value = await someAsyncOperation(key); // Returns NotEmptyStorageValue | null
  return value as NotEmptyStorageValue | null; // Ensure the value matches the expected type
};
  // Ensure 'methods' is part of a valid configuration object or remove it if unnecessary
  const cacheOptions = {
    methods: ['get'], // Specify cacheable methods explicitly
  };
  const generateKey: CacheKeyFunction = ((req: { params?: Record<string, unknown>; url: string; method: string }): string => {
    const serialized = req.params ? `${req.url}?${JSON.stringify(req.params)}` : req.url;
    return `${req.method}:${serialized}`;
  });
  async function someAsyncOperation(key: string): Promise<string | null> {
    // Simulate an asynchronous operation, such as fetching from an IndexedDB or API
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }
