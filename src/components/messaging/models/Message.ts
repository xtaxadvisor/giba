export interface Message {
    id: string;
    senderId: string;
    recipientId: string;
    content: string;
    isRead: boolean;
    timestamp: string;
    attachments?: string[];
  }