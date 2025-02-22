import { Message } from '@aws-sdk/client-ses/dist-types/models/models_0';
import { api } from '../api';
// import type { Message } from '../../types'; // Ensure 'Message' is exported from '../../types' or remove this line if not needed.

export interface SendMessageDTO {
  recipientId: string;
  content: string;
  attachments?: string[];
}

export interface MessageThread {
  id: string;
  participants: string[];
  lastMessage: Message;
  unreadCount: number;
}

export const messageService = {
  getThreads: () => 
    api.get<MessageThread[]>('/messages/threads'),

  getThread: (threadId: string) => 
    api.get<Message[]>(`/messages/threads/${threadId}`),

  send: (data: SendMessageDTO) => 
    api.post<Message>('/messages', data),

  markAsRead: (messageId: string) => 
    api.put<void>(`/messages/${messageId}/read`),

  delete: (messageId: string) => 
    api.delete<void>(`/messages/${messageId}`),
};