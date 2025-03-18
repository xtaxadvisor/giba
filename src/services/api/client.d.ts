import { AxiosRequestConfig } from 'axios';
export declare class APIClient {
    private static instance;
    private client;
    private constructor();
    private setupInterceptors;
    static getInstance(): APIClient;
    get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
    post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    delete<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
}
export declare const apiClient: APIClient;
export declare function getById(clientId: string): any;
export declare function update(clientId: string, data: any): Promise<unknown>;
export declare function deleteClient(clientId: string): Promise<unknown>;
export declare function deleteClientById(clientId: string): Promise<unknown>;
export declare function deleteClientByIdV2(): Promise<unknown>;
export declare function deleteClientByIdV3(): Promise<unknown>;
export declare const clientService: {
    getById: (clientId: string) => Promise<any>;
    update: (clientId: string, data: any) => Promise<any>;
    delete: (clientId: string) => Promise<any>;
};
export declare function deleteClientByIdV4(): Promise<unknown>;
export declare function deleteClientByIdV5(clientId: string): Promise<unknown>;
