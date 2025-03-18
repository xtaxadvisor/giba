export interface Thread {
    id: string; // ✅ Ensure ID is always a string for consistency
    title: string;
    content: string;
    isPinned: boolean;
    createdAt: string; // ✅ Keep as a string to match database format
    replies: number;
    likes: number;
    tags: string[];
    author: {
      avatarUrl: string;
      displayName: string;
      location?: string;
    };
  }
  