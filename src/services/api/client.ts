/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { setupCache } from'axios-cache-interceptor';
// Removed invalid import for retryAdapterEnhancer

export class APIClient {
  private static instance: APIClient;
  private client: AxiosInstance;
  
  private constructor() {
    this.client = setupCache(axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      timeout: 10000,
    }), {
      ttl: 15 * 60 * 1000, // Cache for 15 minutes
      // Removed invalid 'exclude' property
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.client.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          // Handle token refresh or logout
        }
        return Promise.reject(error);
      }
    );
  }

  public static getInstance(): APIClient {
    if (!APIClient.instance) {
      APIClient.instance = new APIClient();
    }
    return APIClient.instance;
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.get<T>(url, config);
    return response.data;
  }

  public async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.post<T>(url, data, config);
    return response.data;
  }

  public async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.put<T>(url, data, config);
    return response.data;
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.delete<T>(url, config);
    return response.data;
  }
}

export const apiClient = APIClient.getInstance();

export function getById(clientId: string): any {
  // Implement the function using clientId
  return apiClient.get(`/clients/${clientId}`);
}
export function update(clientId: string, data: any): Promise<unknown> {
  return apiClient.put(`/clients/${clientId}`, data);
}


export function deleteClient(clientId: string): Promise<unknown> {
  return apiClient.delete(`/clients/${clientId}`);
}

export function deleteClientById(clientId: string): Promise<unknown> {
  return apiClient.delete(`/clients/${clientId}`);
}

// Removed duplicate clientService function

export function deleteClientByIdV2(): Promise<unknown> {
  throw new Error('Function not implemented.');
}

export function deleteClientByIdV3(): Promise<unknown> {
  throw new Error('Function not implemented.');
}

export const clientService = {
  getById: async (clientId: string) => {
    const response = await fetch(`/api/clients/${clientId}`);
    return response.json();
  },
  update: async (clientId: string, data: any) => {
    const response = await fetch(`/api/clients/${clientId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },
  delete: async (clientId: string) => {
    const response = await fetch(`/api/clients/${clientId}`, {
      method: 'DELETE',
    });
    return response.json();
  },
};

export function deleteClientByIdV4(): Promise<unknown> {
  throw new Error('Function not implemented.');
}


export function deleteClientByIdV5(clientId: string): Promise<unknown> {
  return apiClient.delete(`/clients/${clientId}`);
}

