export type UserRole = "user" | "moderator" | "admin";

export interface User {
  id: string;
  email: string;
  displayName: string;
  avatarUrl?: string;
  role: UserRole;
  createdAt: string;
  location?: string;
  bio?: string;
}

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