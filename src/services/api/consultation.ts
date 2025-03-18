import { api } from '../api';
import { ReactNode } from 'react';

export interface Consultation {
  id?: string;
  status: string;
  type: ReactNode;
  startTime: string | number | Date;
  [key: string]: any; // Allows for additional properties
}

export interface ScheduleConsultationDTO {
  date: string;
  time: string;
  clientId: string;
  consultantId: string;
}

export const consultationService = {
  // ✅ Get all consultations
  getAll: async (): Promise<Consultation[]> => {
    try {
      const response = await api.get<Consultation[]>('/consultations');
      return response;
    } catch (error) {
      console.error('Error fetching consultations:', error);
      throw error;
    }
  },

  // ✅ Get a consultation by ID
  getById: async (id: string): Promise<Consultation> => {
    try {
      const response = await api.get<Consultation>(`/consultations/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching consultation ${id}:`, error);
      throw error;
    }
  },

  // ✅ Create a new consultation
  create: async (data: Omit<Consultation, 'id'>): Promise<Consultation> => {
    try {
      const response = await api.post<Consultation>('/consultations', data);
      return response.data;
    } catch (error) {
      console.error('Error creating consultation:', error);
      throw error;
    }
  },

  // ✅ Update an existing consultation
  update: async (id: string, data: Partial<Consultation>): Promise<Consultation> => {
    try {
      const response = await api.put<Consultation>(`/consultations/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(`Error updating consultation ${id}:`, error);
      throw error;
    }
  },

  // ✅ Delete a consultation
  delete: async (id: string): Promise<void> => {
    try {
      await api.delete<void>(`/consultations/${id}`);
    } catch (error) {
      console.error(`Error deleting consultation ${id}:`, error);
      throw error;
    }
  },

  // ✅ Initiate a new consultation session
  initiateConsultation: async (serviceType: string): Promise<string> => {
    try {
      const response = await api.post<{
        data: any; redirectUrl: string 
}>('/consultations/initiate', {
        serviceType
      });
      return response.data.redirectUrl;
    } catch (error) {
      console.error('Failed to initiate consultation:', error);
      throw error;
    }
  },

  // ✅ Get availability for a professional
  getAvailability: async (date: string, professionalId: string): Promise<any[]> => {
      try {
        const response = await api.get<AvailabilityResponse>(`/consultations/availability?date=${date}&professionalId=${professionalId}`);
        return response.data || [];
      } catch (error) {
        console.error('Error fetching availability:', error);
        throw error;
      }
    },
  };

// Interface declaration should be outside of the consultationService object

interface AvailabilityResponse {
  data: any[];
}