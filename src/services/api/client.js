import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';
import { retryAdapterEnhancer } from 'axios-extensions';
export class APIClient {
    static instance;
    client;
    constructor() {
        const cache = setupCache({
            maxAge: 15 * 60 * 1000, // Cache for 15 minutes
            exclude: { query: false }
        });
        this.client = axios.create({
            baseURL: import.meta.env.VITE_API_URL,
            timeout: 10000,
            adapter: retryAdapterEnhancer(cache.adapter, {})
        });
        this.setupInterceptors();
    }
    setupInterceptors() {
        this.client.interceptors.request.use((config) => {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        }, (error) => Promise.reject(error));
        this.client.interceptors.response.use((response) => response, (error) => {
            if (error.response?.status === 401) {
                // Handle token refresh or logout
            }
            return Promise.reject(error);
        });
    }
    static getInstance() {
        if (!APIClient.instance) {
            APIClient.instance = new APIClient();
        }
        return APIClient.instance;
    }
    async get(url, config) {
        const response = await this.client.get(url, config);
        return response.data;
    }
    async post(url, data, config) {
        const response = await this.client.post(url, data, config);
        return response.data;
    }
    async put(url, data, config) {
        const response = await this.client.put(url, data, config);
        return response.data;
    }
    async delete(url, config) {
        const response = await this.client.delete(url, config);
        return response.data;
    }
}
export const apiClient = APIClient.getInstance();
export function getById(clientId) {
    // Implement the function using clientId
    return apiClient.get(`/clients/${clientId}`);
}
export function update(clientId, data) {
    return apiClient.put(`/clients/${clientId}`, data);
}
export function deleteClient(clientId) {
    return apiClient.delete(`/clients/${clientId}`);
}
export function deleteClientById(clientId) {
    return apiClient.delete(`/clients/${clientId}`);
}
// Removed duplicate clientService function
export function deleteClientByIdV2() {
    throw new Error('Function not implemented.');
}
export function deleteClientByIdV3() {
    throw new Error('Function not implemented.');
}
export const clientService = {
    getById: async (clientId) => {
        const response = await fetch(`/api/clients/${clientId}`);
        return response.json();
    },
    update: async (clientId, data) => {
        const response = await fetch(`/api/clients/${clientId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return response.json();
    },
    delete: async (clientId) => {
        const response = await fetch(`/api/clients/${clientId}`, {
            method: 'DELETE',
        });
        return response.json();
    },
};
export function deleteClientByIdV4() {
    throw new Error('Function not implemented.');
}
export function deleteClientByIdV5(clientId) {
    return apiClient.delete(`/clients/${clientId}`);
}
