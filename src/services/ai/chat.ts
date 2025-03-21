export interface ChatMessage {
  id: string;
  consultationId: string;
  sender: string;
  content: string;
  timestamp: string;
  status: 'sent' | 'delivered' | 'failed';
}

export interface SendMessageDTO {
  consultationId: string;
  content: string;
  sender: string;
}

export const chatService = {
  getMessages: () => 
    Promise.resolve([]), // Implement actual API call

  sendMessage: () => 
    Promise.resolve({} as ChatMessage), // Implement actual API call

  deleteMessage: () => 
    Promise.resolve(), // Implement actual API call

  retryMessage: () =>
    Promise.resolve({} as ChatMessage), // Implement actual API call

  markAsDelivered: () =>
    Promise.resolve() // Implement actual API call
};