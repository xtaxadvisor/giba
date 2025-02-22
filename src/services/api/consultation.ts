import { api } from '../api';
import { ReactNode } from 'react';
// import type { Consultation } from '../../types';

export interface Consultation {
  [x: string]: any;
  status: string;
  type: ReactNode;
  startTime: string | number | Date;
  // Define the properties of the Consultation interface here
}
export interface ScheduleConsultationDTO {
  date: string;
  time: string;
  clientId: string;
  consultantId: string;
}

export const consultationService = {
  getAll: () => 
    api.get<Consultation[]>('/consultations'),

  getById: (id: string) => 
    api.get<Consultation>(`/consultations/${id}`),

  create: (data: any) => 
    api.post<Consultation>('/consultations', data),

  update: (id: string, data: any) => 
    api.put<Consultation>(`/consultations/${id}`, data),

  delete: (id: string) => 
    api.delete<void>(`/consultations/${id}`),

  // Add specific handler for the "Get Started" button in Same Day Services
  initiateConsultation: async (serviceType: string) => {
    try {
      const response = await api.post<{ redirectUrl: string }>('/consultations/initiate', {
        serviceType
      });
      return response.redirectUrl;
    } catch (error) {
      console.error('Failed to initiate consultation:', error);
      throw error;
    }
  }
};