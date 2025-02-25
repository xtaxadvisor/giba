import { setupCache } from 'axios-cache-adapter';


export const cache = setupCache({
  maxAge: 15 * 60 * 1000, // Cache for 15 minutes
  store: {
    getItem: (key: string) => {
      // Use the key parameter to retrieve the item from the store
      return Promise.resolve(localStorage.getItem(key));
    },
    setItem: (key: string, value: string) => {
      // Use the key and value parameters to store the item in the store
      localStorage.setItem(key, value);
    },
    removeItem: (key: string) => {
      // Use the key parameter to remove the item from the store
      localStorage.removeItem(key);
    }
  },
  exclude: {
    query: false,
    methods: ['post', 'put', 'delete']
  },
  key: req => {
    const serialized = req.params ? `${req.url}?${JSON.stringify(req.params)}` : req.url;
    return `${req.method}:${serialized}`;
  },
  invalidate: async (config) => {
    // Invalidate cache on mutations
    const invalidatePatterns = config.invalidate as unknown as string[];
    if (invalidatePatterns) {
      await Promise.all(
        invalidatePatterns.map(pattern => cache.store.removeItem(pattern))
      );
    }
  }
});