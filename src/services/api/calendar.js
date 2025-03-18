import { api } from '../api';
export const fetchEvents = async (searchParams) => {
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
    getEvents: () => api.get('/calendar/events'),
    getEventById: (id) => api.get(`/calendar/events/${id}`),
    createEvent: (data) => api.post('/calendar/events', data),
    updateEvent: ({ id, ...data }) => api.put(`/calendar/events/${id}`, data),
    deleteEvent: (id) => api.delete(`/calendar/events/${id}`),
    getAvailability: async (date, professionalId) => {
        const url = `/calendar/availability?date=${date}&professionalId=${professionalId}`;
        const response = await api.get(url);
        return response.map((slot) => ({
            ...slot,
            startTime: new Date(slot.startTime).toISOString(),
            endTime: new Date(slot.endTime).toISOString()
        }));
    },
    syncCalendar: (provider) => api.post('/calendar/sync', { provider }),
    sendBookingConfirmation: async (eventId) => {
        return api.post(`/calendar/events/${eventId}/confirm`);
    },
    checkAvailability: async (startTime, endTime, professionalId) => {
        const url = `/calendar/check-availability?startTime=${startTime}&endTime=${endTime}&professionalId=${professionalId}`;
        return api.get(url);
    }
};
