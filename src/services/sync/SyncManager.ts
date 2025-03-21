import supabase from '../../lib/supabase/client.js';
import { useNotificationStore } from '../../lib/store.js';

export class SyncManager {
  private static instance: SyncManager;
  private subscriptions: Array<{ unsubscribe: () => void }> = [];

  private constructor() {
    this.setupRealtime();
  }

  public static getInstance(): SyncManager {
    if (!SyncManager.instance) {
      SyncManager.instance = new SyncManager();
    }
    return SyncManager.instance;
  }

  private setupRealtime() {
    // Subscribe to bookings changes
    const bookingSubscription = supabase
      .channel('bookings')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'consultations'
      }, payload => {
        this.handleBookingChange(payload as unknown as { eventType: string; new?: { id: string; date: string; customerName: string }; old?: { id: string; date: string; customerName: string } });
      })
      .subscribe();

    // Subscribe to payments changes
    const paymentSubscription = supabase
      .channel('payments')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'payments'
      }, payload => {
        return this.handlePaymentChange(payload as unknown as { eventType: string; new?: { id: string; status: string; bookingId: string } });
      })
      .subscribe();

    this.subscriptions.push(bookingSubscription, paymentSubscription);
  }

  private handleBookingChange(payload: { eventType: string; new?: { id: string; date: string; customerName: string }; old?: { id: string; date: string; customerName: string } }) {
    const { eventType, new: newRecord, old: oldRecord } = payload;
    
    switch (eventType) {
      case 'INSERT':
        if (newRecord) {
          this.syncNewBooking(newRecord);
        }
        break;
      case 'UPDATE':
        this.syncBookingUpdate(newRecord, oldRecord);
        break;
      case 'DELETE':
        this.syncBookingDeletion(oldRecord);
        break;
    }
  }

  private handlePaymentChange(payload: { eventType: string; new?: { id: string; status: string; bookingId: string } }) {
    const { eventType, new: newRecord } = payload;
    
    if (eventType === 'UPDATE' && newRecord?.status === 'succeeded') {
      this.syncPaymentConfirmation(newRecord);
    }
  }

  private async syncNewBooking(booking: { id: string; date: string; customerName: string }) {
    try {
      // Sync with calendar
      await this.syncWithCalendar(booking);
      
      // Send notifications
      await this.sendBookingNotifications(booking);
      
      useNotificationStore.getState().addNotification(
        'Booking synchronized successfully',
        'success'
      );
    } catch (error) {
      console.error('Booking sync failed:', error);
      useNotificationStore.getState().addNotification(
        'Failed to synchronize booking',
        'error'
      );
    }
  }

  private async syncBookingUpdate(newBooking: unknown, oldBooking: unknown) {
    try {
      // Update calendar event
      await this.updateCalendarEvent(newBooking);
      
      // Send update notifications
      await this.sendUpdateNotifications(newBooking, oldBooking);
    } catch (error) {
      console.error('Booking update sync failed:', error);
    }
  }

  private async syncBookingDeletion(booking: unknown) {
    try {
      // Remove from calendar
      await this.removeFromCalendar(booking);
      
      // Send cancellation notifications
      await this.sendCancellationNotifications();
    } catch (error) {
      console.error('Booking deletion sync failed:', error);
    }
  }

  private async syncPaymentConfirmation(payment: unknown) {
    try {
      // Update booking status
      const typedPayment = payment as { id: string; status: string; bookingId: string };
      await this.updateBookingStatus(typedPayment.bookingId, 'confirmed');
      
      // Send payment confirmation
      await this.sendPaymentConfirmation(payment as { id: string; status: string; bookingId: string });
    } catch (error) {
      console.error('Payment sync failed:', error);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private async syncWithCalendar(_booking: { id: string; date: string; customerName: string; }) { // eslint-disable-line @typescript-eslint/no-empty-function 
    try { // eslint-disable-line @typescript-eslint/no-empty-function  
      // Implementation for calendar sync
    } catch (error) {
      console.error('Calendar sync failed:', error);
    }
  }

  private async updateCalendarEvent(newBooking: unknown) {
    // Implementation for calendar event update
    console.log('Updating calendar event for:', newBooking);
  }

  private async removeFromCalendar(booking: unknown) {
    // Implementation for calendar event removal
    console.log('Removing booking from calendar:', booking);
  }

  private async sendBookingNotifications(booking: { id: string; date: string; customerName: string }) {
    console.log('Sending booking notifications for:', booking);
    // Add actual implementation for booking notifications here
  }

  private async sendUpdateNotifications(newBooking: unknown, oldBooking: unknown) {
    console.log('Sending update notifications for:', newBooking, 'Previous booking:', oldBooking);
    // Add actual implementation for update notifications here
  }

  private async sendCancellationNotifications() {
    // Implementation for cancellation notifications
  }

  private async sendPaymentConfirmation(payment: { id: string; status: string; bookingId: string }) {
    console.log(`Sending payment confirmation for payment ID: ${payment.id}`);
    // Add actual implementation for payment confirmation here
  }

  private async updateBookingStatus(bookingId: string, status: string) {
    // Implementation for booking status update
    console.log(`Updating booking ${bookingId} to status ${status}`);
  }

  public cleanup() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}

export const syncManager = SyncManager.getInstance();