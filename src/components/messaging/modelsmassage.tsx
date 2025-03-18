// modelsMessage.tsx - Defines message-related TypeScript models

export interface Message {
    id: string;
    senderId: string;
    recipientId: string;
    content: string;
    isRead: boolean;
    timestamp: string;
    attachments?: string[]; // Optional array of file URLs
}
  export interface modelsMessage {
    id: string;
    senderId: string;
    recipientId: string;
    content: string;
    isRead: boolean;
    timestamp: string;
    attachments?: string[]; // Optional array of file URLs
  }
  
  export interface Conversation {
    id: string;
    participants: string[]; // User IDs of participants
    lastMessage?: Message;  // Optional last message in conversation
    unreadCount: number;    // Number of unread messages
  }
  
  export interface SendMessagePayload {
    recipientId: string;
    content: string;
    attachments?: string[]; // Optional attachments
  }
  
  export interface MessageResponse {
    success: boolean;
    message: string;
    data?: Message; // If successful, contains the sent message
  }