import type { TimeSlot } from '../../types';
export declare class BookingService {
    private static instance;
    private constructor();
    static getInstance(): BookingService;
    getAvailability(date: string, professionalId: string): Promise<TimeSlot[]>;
    createBooking(bookingData: {
        service: string;
        date: string;
        time: string;
        professionalId: string;
        clientId: string;
        paymentDetails: {
            cardNumber: string;
            expirationDate: string;
            cardCode: string;
            amount: number;
        };
    }): Promise<any>;
}
export declare const bookingService: BookingService;
