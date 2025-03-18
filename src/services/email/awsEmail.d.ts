export declare class AWSEmailService {
    private static instance;
    private readonly sesClient;
    private readonly defaultSender;
    private constructor();
    static getInstance(): AWSEmailService;
    sendEmail(to: string, subject: string, body: string, options?: {
        html?: string;
        replyTo?: string;
        attachments?: Array<{
            filename: string;
            content: Buffer;
        }>;
    }): Promise<boolean>;
    sendBookingConfirmation(to: string, bookingDetails: {
        service: string;
        date: string;
        time: string;
        professional: string;
        price: number;
    }): Promise<boolean>;
}
export declare const awsEmailService: AWSEmailService;
