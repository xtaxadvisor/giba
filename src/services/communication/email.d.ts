declare class EmailService {
    private static instance;
    private readonly defaultFrom;
    private constructor();
    static getInstance(): EmailService;
    sendEmail(to: string, subject: string, body: string, options?: {
        html?: string;
        attachments?: Array<{
            filename: string;
            content: Buffer;
        }>;
        from?: string;
    }): Promise<any>;
    sendTemplate(to: string, templateId: string, templateData: Record<string, any>, options?: {
        from?: string;
    }): Promise<any>;
}
export declare const emailService: EmailService;
export {};
