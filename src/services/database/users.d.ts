export interface User {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'user' | 'guest';
    isAdmin?: boolean;
}
declare class UserService {
    getByAuthId(authId: string): Promise<any>;
    updateProfile(userId: string, profile: Partial<User>): Promise<any>;
}
export declare const userService: UserService;
export {};
