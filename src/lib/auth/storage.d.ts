export declare function storeUser(user: LocalUser): void;
export interface LocalUser {
    id: string;
    email: string;
    isAdmin: boolean;
    role?: string;
}
export declare function getStoredUser(): LocalUser | null;
export declare function clearStoredUser(): void;
export declare function isValidStoredUser(user: LocalUser): boolean;
