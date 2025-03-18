export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}
export declare function useUsers(): {
    users: any;
    isLoading: any;
    createUser: any;
    updateUser: any;
    deleteUser: any;
    isCreating: boolean;
    isUpdating: boolean;
    isDeleting: boolean;
};
