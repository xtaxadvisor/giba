declare module "messaging/models/Message" {
  export interface Message {
    id: string;
    senderId: string;
    recipientId: string;
    content: string;
    isRead: boolean;
    createdAt: Date;
    attachments?: string[];
    
    // Define the properties of the Message interface
  }
}