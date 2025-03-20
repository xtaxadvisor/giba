// Define the Message interface within this file
import { api } from '../api.js';


export interface SendMessageDTO {
  recipientId: string;
  content: string;
  attachments?: string[];
}
// file: src/api/message.ts

// Import any types or utilities needed (e.g., if Message was defined elsewhere).
// For example, if api/services/message.ts already exports a Message type, use:
// import { Message as MessageService } from './services/message';
export interface Message {
  id: string;
  content: string;
  status: string;
  senderId: string;
  timestamp: string;
}

export interface MessageThread {
  messages: any;
  id: string;
  participants: string[];
  lastMessage: Message;
  unreadCount: number;
}

export const messageService = {
  getThreads: () => api.get<MessageThread[]>('/messages/threads'),
  getThread: (threadId: string) => api.get<Message[]>(`/messages/threads/${threadId}`),
  send: (data: SendMessageDTO) => api.post<Message>('/messages', data),
  markAsRead: (messageId: string) => api.put<void>(`/messages/${messageId}/read`),
  delete: (messageId: string) => api.delete<void>(`/messages/${messageId}`),
};

// Removed the circular re-export to avoid circular dependency errors
