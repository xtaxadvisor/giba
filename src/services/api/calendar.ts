import { api } from '../api.js'
import type { TimeSlot } from '../../types/index.js';
import type { CreateEventDTO, UpdateEventDTO } from '../../types/index/dto.js';
export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  // Other properties...
}

export interface Event {
  id: string;
  title: string;
  description?: string;
  startTime: string;
  endTime: string;
  type: 'meeting' | 'deadline' | 'reminder';
  location?: string;
  isVirtual?: boolean;
  meetingLink?: string;
  attendees?: Array<{
    id: string;
    name: string;
    email: string;
    status: 'pending' | 'accepted' | 'declined';
  }>;
  reminders?: Array<{
    type: 'email' | 'notification';
    time: number; // minutes before event
  }>;
}

export const fetchEvents = async (searchParams?: { [key: string]: string }) => {
  let url = '/api/events';
  if (searchParams) {
    const queryParams = new URLSearchParams(searchParams).toString();
    url += `?${queryParams}`;
  }

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

export const calendarService = {
  getEvents: () => 
    api.get<Event[]>('/calendar/events'),

  getEventById: (id: string) => 
    api.get<Event>(`/calendar/events/${id}`),

  createEvent: (data: CreateEventDTO) => 
    api.post<Event>('/calendar/events', data),

  updateEvent: ({ id, ...data }: UpdateEventDTO) => 
    api.put<Event>(`/calendar/events/${id}`, data),

  deleteEvent: (id: string) => 
    api.delete<void>(`/calendar/events/${id}`),

  getAvailability: async (date: string, professionalId: string) => {
    const url = `/calendar/availability?date=${date}&professionalId=${professionalId}`;
    const response = await api.get<TimeSlot[]>(url);

    return response.map((slot: TimeSlot) => ({
      ...slot,
      startTime: new Date(slot.startTime).toISOString(),
      endTime: new Date(slot.endTime).toISOString()
    }));
  },

  syncCalendar: (provider: string) => 
    api.post<void>('/calendar/sync', { provider }),

  sendBookingConfirmation: async (eventId: string) => {
    return api.post<void>(`/calendar/events/${eventId}/confirm`);
  },

  checkAvailability: async (startTime: string, endTime: string, professionalId: string) => {
    const url = `/calendar/check-availability?startTime=${startTime}&endTime=${endTime}&professionalId=${professionalId}`;
    return api.get<{ available: boolean }>(url);
  }
};