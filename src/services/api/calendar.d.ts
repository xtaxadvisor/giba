import type { CreateEventDTO, UpdateEventDTO } from '../../types/index/dto';
export interface CalendarEvent {
    id: string;
    title: string;
    start: Date;
    end: Date;
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
        time: number;
    }>;
}
export declare const fetchEvents: (searchParams?: {
    [key: string]: string;
}) => Promise<any>;
export declare const calendarService: {
    getEvents: () => Promise<Event[]>;
    getEventById: (id: string) => Promise<Event>;
    createEvent: (data: CreateEventDTO) => Promise<Event>;
    updateEvent: ({ id, ...data }: UpdateEventDTO) => Promise<Event>;
    deleteEvent: (id: string) => Promise<void>;
    getAvailability: (date: string, professionalId: string) => Promise<{
        startTime: string;
        endTime: string;
    }[]>;
    syncCalendar: (provider: string) => Promise<void>;
    sendBookingConfirmation: (eventId: string) => Promise<void>;
    checkAvailability: (startTime: string, endTime: string, professionalId: string) => Promise<{
        available: boolean;
    }>;
};
