export interface User {
    displayName?: string;
}
export declare function useClient(clientId: string): {
    client: any;
    isLoading: any;
    updateClient: any;
    deleteClient: any;
};
export declare function deleteClient(clientId: string): Promise<void>;
export declare function deleteClientById(clientId: string): Promise<void>;
