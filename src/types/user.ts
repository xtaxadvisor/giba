export type UserRole = "user" | "moderator" | "admin";

export interface User {
  name: string;
  id: string;
  email: string;
  displayName: string;
  avatarUrl?: string;
  role: string;
  createdAt: string;
  location?: string;
  bio?: string;
}

declare function useAuth(): { user: User | null };
export interface UserProfile extends User {
  threadCount: number;
  replyCount: number;
  joinedAt: string;
  lastActive: string;
}
// Removed duplicate User interface declaration

export interface SomeOtherType {
  // other properties
}