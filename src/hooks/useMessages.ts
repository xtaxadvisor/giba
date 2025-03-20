import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { messageService } from '../services/api/message.js';
import { useNotificationStore } from '../lib/store.js';
// import { Button } from '@chakra-ui/react'; // Removed as it is not exported or used

export function useMessages() {
  const queryClient = useQueryClient();
  const { addNotification } = useNotificationStore();

  const { data: messages, isLoading } = useQuery({
    queryKey: ['messages'],
    queryFn: messageService.getThreads
  });

  const sendMessageMutation = useMutation({
    mutationFn: messageService.send,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['messages'] });
      addNotification('Message sent successfully', 'success');
    },
    onError: () => {
      addNotification('Failed to send message', 'error');
    }
  });

  const markAsReadMutation = useMutation({
    mutationFn: messageService.markAsRead,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['messages'] });
    }
  });

  return {
    messages,
    isLoading,
    sendMessage: sendMessageMutation.mutate,
    markAsRead: markAsReadMutation.mutate,
    isSendingMessage: sendMessageMutation.status === 'pending',
    isLoadingMarkAsRead: markAsReadMutation.status === 'pending'
  };
}