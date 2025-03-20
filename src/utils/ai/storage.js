class AIStorage {
  static instance;
  storage;
  DEFAULT_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours

  constructor() {
    this.storage = new Map();
  }

  static getInstance() {
    if (!AIStorage.instance) {
      AIStorage.instance = new AIStorage();
    }
    return AIStorage.instance;
  }

  set(key, value, expiry) {
    this.storage.set(key, {
      value,
      timestamp: Date.now(),
      expiry: expiry || this.DEFAULT_EXPIRY
    });
  }

  get(key) {
    const item = this.storage.get(key);
    
    if (!item) return null;
    
    if (Date.now() - item.timestamp > (item.expiry || this.DEFAULT_EXPIRY)) {
      this.storage.delete(key);
      return null;
    }
    
    return item.value;
  }

  delete(key) {
    this.storage.delete(key);
  }

  clear() {
    this.storage.clear();
  }

  cleanup() {
    const now = Date.now();
    for (const [key, item] of this.storage.entries()) {
      if (now - item.timestamp > (item.expiry || this.DEFAULT_EXPIRY)) {
        this.storage.delete(key);
      }
    }
  }
}

export const aiStorage = AIStorage.getInstance();
