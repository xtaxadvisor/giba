export declare class SyncManager {
    private static instance;
    private subscriptions;
    private constructor();
    static getInstance(): SyncManager;
    private setupRealtime;
    private handleBookingChange;
    private handlePaymentChange;
    private syncNewBooking;
    private syncBookingUpdate;
    private syncBookingDeletion;
    private syncPaymentConfirmation;
    private syncWithCalendar;
    private updateCalendarEvent;
    private removeFromCalendar;
    private sendBookingNotifications;
    private sendUpdateNotifications;
    private sendCancellationNotifications;
    private sendPaymentConfirmation;
    private updateBookingStatus;
    cleanup(): void;
}
export declare const syncManager: SyncManager;
