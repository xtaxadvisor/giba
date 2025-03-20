import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { clientService } from '../services/api/client.js';


const queryClient = useQueryClient();

export interface User {
  displayName?: string;
  // other properties
}
export function useClient(clientId: string) {

  const { data: client, isLoading } = useQuery({
    queryKey: ['client', clientId],
    queryFn: () => clientService.getById(clientId),
  });

  if (isLoading) {
    console.log('Loading client data...');
  }

  if (client) {
    console.log('Client data:', client);
  }

const updateClientMutation = useMutation({
  mutationFn: (data) => clientService.update(clientId, data),
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['client', clientId] });
    new Notification('Client updated successfully', { body: 'success' });
  },
  onError: () => {
    new Notification('Failed to update client', { body: 'error' });
  },
});

  const deleteClientMutation = useMutation({
    mutationFn: () => clientService.delete(clientId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clients'] });
      new Notification('Client deleted successfully', { body: 'success' });
    },
    onError: () => {
      new Notification('Failed to delete client', { body: 'error' });
    },
  });

  return {
    client,
    isLoading,
    updateClient: updateClientMutation.mutate,
    deleteClient: deleteClientMutation.mutate,
  };
}

export async function deleteClient(clientId: string): Promise<void> {
  try {
    await clientService.delete(clientId);
    console.log(`Client with ID ${clientId} deleted successfully.`);
  } catch (error) {
    console.error(`Failed to delete client with ID ${clientId}:`, error);
    throw error;
  }
}
export async function deleteClientById(clientId: string): Promise<void> {
  try {
    await clientService.delete(clientId);
    console.log(`Client with ID ${clientId} deleted successfully.`);
  } catch (error) {
    console.error(`Failed to delete client with ID ${clientId}:`, error);
    throw error;
  }
}