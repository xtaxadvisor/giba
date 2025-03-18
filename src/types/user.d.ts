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
export interface UserProfile extends User {
    threadCount: number;
    replyCount: number;
    joinedAt: string;
    lastActive: string;
}
export interface SomeOtherType {
}
