declare class EmailService {
    private static instance;
    private transporter;
    private constructor();
    static getInstance(): EmailService;
    sendEmail(to: string, subject: string, body: string, options?: {
        html?: string;
        replyTo?: string;
        attachments?: Array<{
            filename: string;
            content: Buffer;
        }>;
    }): Promise<boolean>;
    sendTestEmail(): Promise<boolean>;
}
export declare const emailService: EmailService;
export {};
