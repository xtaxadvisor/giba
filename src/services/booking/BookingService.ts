import { supabase } from '../../lib/supabase.js';
import { awsEmailService } from '../email/awsEmail.js';
import { authorizeNetService } from '../payment/authorizeNet.js';
import { useNotificationStore } from '../../lib/store.js';
import type { TimeSlot } from "@/types/supabaseTypes.js";

export class BookingService {
  private static instance: BookingService;

  private constructor() {}

  public static getInstance(): BookingService {
    if (!BookingService.instance) {
      BookingService.instance = new BookingService();
    }
    return BookingService.instance;
  }

  async getAvailability(date: string, professionalId: string): Promise<TimeSlot[]> {
    try {
      const { data, error } = await supabase
        .from('consultations')
        .select('start_time, end_time')
        .eq('professional_id', professionalId)
        .gte('start_time', `${date}T00:00:00`)
        .lte('start_time', `${date}T23:59:59`);

      if (error) throw error;

      const slots: TimeSlot[] = [];
      const startHour = 9; // 9 AM
      const endHour = 17; // 5 PM
      const slotDuration = 30; // 30 minutes

      for (let hour = startHour; hour < endHour; hour++) {
        for (let minute = 0; minute < 60; minute += slotDuration) {
          const startTime = new Date(`${date}T${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:00Z`);
          const endTime = new Date(startTime.getTime() + slotDuration * 60000);

          const isBooked = data?.some(booking => {
            const bookingStart = new Date(booking.start_time);
            const bookingEnd = new Date(booking.end_time);
            return startTime < bookingEnd && endTime > bookingStart; // ✅ Improved overlap detection
          });
          

          slots.push({
            startTime: startTime.toISOString(),
            endTime: endTime.toISOString(),
            available: !isBooked
          });
        }
      }

      return slots;
    } catch (error) {
      console.error('Error fetching availability:', error);
      throw error;
    }
  }

  async createBooking(bookingData: {
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
  }) {
    try {
      // ✅ Step 1: Check if the slot is still available before processing payment
      const availability = await this.getAvailability(bookingData.date, bookingData.professionalId);
      const selectedSlot = availability.find(slot => slot.startTime.includes(bookingData.time));

      if (!selectedSlot || !selectedSlot.available) {
        throw new Error('Selected time slot is no longer available.');
      }

      // ✅ Step 2: Process Payment
      const paymentResult = await authorizeNetService.processPayment({
        amount: bookingData.paymentDetails.amount,
        cardNumber: bookingData.paymentDetails.cardNumber,
        expirationDate: bookingData.paymentDetails.expirationDate,
        cardCode: bookingData.paymentDetails.cardCode
      });

      if (!paymentResult.success) {
        throw new Error('Payment failed');
      }

      // ✅ Step 3: Create Booking
      const { data: booking, error: bookingError } = await supabase
        .from('consultations')
        .insert({
          client_id: bookingData.clientId,
          professional_id: bookingData.professionalId,
          type: bookingData.service,
          start_time: `${bookingData.date}T${bookingData.time}:00Z`,
          end_time: new Date(
            new Date(`${bookingData.date}T${bookingData.time}:00Z`).getTime() + 60 * 60 * 1000
          ).toISOString(),
          status: 'scheduled',
          payment_id: paymentResult.transactionId
        })
        .select()
        .single();

      if (bookingError) {
        throw bookingError;
      }

      // ✅ Step 4: Get Client Email and Send Confirmation
      const { data: client, error: clientError } = await supabase
        .from('users')
        .select('email')
        .eq('id', bookingData.clientId)
        .single();

      if (clientError) {
        console.error("Could not retrieve client email:", clientError);
      } else if (client?.email) {
        await awsEmailService.sendBookingConfirmation(client.email, {
          service: bookingData.service,
          date: bookingData.date,
          time: bookingData.time,
          professional: 'Your Tax Professional',
          price: bookingData.paymentDetails.amount
        });
      }

      // ✅ Step 5: Notify User in UI
      useNotificationStore.getState().addNotification(
        'Booking confirmed! Check your email for details.',
        'success'
      );

      return booking;
    } catch (error) {
      console.error('Booking error:', error);

      useNotificationStore.getState().addNotification(
        'Booking failed. Please try again.',
        'error'
      );

      throw error;
    }
  }
}

export const bookingService = BookingService.getInstance();