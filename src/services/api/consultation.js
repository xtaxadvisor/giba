import { api } from '../api';
export const consultationService = {
    getAll: () => api.get('/consultations'),
    getById: (id) => api.get(`/consultations/${id}`),
    create: (data) => api.post('/consultations', data),
    update: (id, data) => api.put(`/consultations/${id}`, data),
    delete: (id) => api.delete(`/consultations/${id}`),
    // Add specific handler for the "Get Started" button in Same Day Services
    initiateConsultation: async (serviceType) => {
        try {
            const response = await api.post('/consultations/initiate', {
                serviceType
            });
            return response.redirectUrl;
        }
        catch (error) {
            console.error('Failed to initiate consultation:', error);
            throw error;
        }
    }
};
