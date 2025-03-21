const API_URL = import.meta.env["VITE_API_URL"] || '/.netlify/functions';

export async function fetchApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
}

export const api = {
  get: <T>(endpoint: string, options?: RequestInit) => 
    fetchApi<T>(endpoint, { ...options, method: 'GET' }),
    
  post: <T>(endpoint: string, data?: unknown, options?: RequestInit) =>
    fetchApi<T>(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data),
    }),

  put: <T, U = unknown>(endpoint: string, data?: U, options?: RequestInit) =>
    fetchApi<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data),
    }),

  delete: <T>(endpoint: string, options?: RequestInit) =>
    fetchApi<T>(endpoint, { ...options, method: 'DELETE' }),
};