export declare const TWILIO_CONFIG: {
    accountSid: string;
    authToken: string;
    phoneNumber: string;
    whatsappNumber: string;
};
declare class TwilioService {
    private static instance;
    private constructor();
    static getInstance(): TwilioService;
    sendSMS(to: string, message: string): Promise<any>;
    sendWhatsApp(to: string, message: string): Promise<any>;
}
export declare const twilioService: TwilioService;
export {};
