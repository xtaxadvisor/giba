import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { mockInvestmentForumService } from '../services/mockApi/investmentForum.js';
import { useNotificationStore } from '../lib/store.js';
import type { InvestmentThread } from '../services/api/investmentForum.js';

export function useInvestmentForum(category?: string) {
  const queryClient = useQueryClient();
  const { addNotification } = useNotificationStore();

  const { data: threads, isLoading } = useQuery({
    queryKey: ['investment-threads', category],
    queryFn: () => mockInvestmentForumService.getThreads(category)
  });

  const createThreadMutation = useMutation({
    mutationFn: mockInvestmentForumService.createThread,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['investment-threads'] });
      addNotification('Thread created successfully', 'success');
    },
    onError: () => {
      addNotification('Failed to create thread', 'error');
    }
  });

  const updateThreadMutation = useMutation({
    mutationFn: ({ id, ...data }: { id: string } & Partial<InvestmentThread>) =>
      mockInvestmentForumService.updateThread(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['investment-threads'] });
      addNotification('Thread updated successfully', 'success');
    },
    onError: () => {
      addNotification('Failed to update thread', 'error');
    }
  });

  const deleteThreadMutation = useMutation({
    mutationFn: mockInvestmentForumService.deleteThread,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['investment-threads'] });
      addNotification('Thread deleted successfully', 'success');
    },
    onError: () => {
      addNotification('Failed to delete thread', 'error');
    }
  });

  return {
    threads,
    isLoading,
    createThread: createThreadMutation.mutate,
    updateThread: updateThreadMutation.mutate,
    deleteThread: deleteThreadMutation.mutate,
    isLoadingCreate: createThreadMutation.status === 'pending',
    isLoadingUpdate: updateThreadMutation.status === 'pending',
    isLoadingDelete: deleteThreadMutation.status === 'pending'
  };
}