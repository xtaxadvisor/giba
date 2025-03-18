export interface Message {
    senderId: string;
    timestamp: string | Date;
    content: string;
    attachments?: string[];
}
