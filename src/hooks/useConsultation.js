import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { consultationService } from '../services/api/consultation';
import { useNotificationStore } from '../lib/store';
import { useAuth } from '../contexts/AuthContext';
export function useConsultation(consultationId) {
    const queryClient = useQueryClient();
    const { addNotification } = useNotificationStore();
    const { user } = useAuth();
    const { data: consultation, isLoading } = useQuery({
        queryKey: ['consultation', consultationId],
        queryFn: async () => {
            try {
                return await consultationService.getById(consultationId);
            }
            catch (error) {
                addNotification('Failed to load consultation details', 'error');
                throw error;
            }
        },
        enabled: !!consultationId
    });
    const scheduleMutation = useMutation({
        mutationFn: (data) => consultationService.create(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['consultations'] });
            addNotification('Consultation scheduled successfully', 'success');
        },
        onError: () => {
            addNotification('Failed to schedule consultation', 'error');
        }
    });
    const updateMutation = useMutation({
        mutationFn: (data) => consultationService.update(consultationId, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['consultations'] });
            queryClient.invalidateQueries({ queryKey: ['consultation', consultationId] });
            addNotification('Consultation updated successfully', 'success');
        },
        onError: () => {
            addNotification('Failed to update consultation', 'error');
        }
    });
    // Check if user has access to this consultation
    const hasAccess = consultation && user && (user.role === 'professional' ||
        consultation.userId === user.id ||
        consultation.professionalId === user.id);
    return {
        consultation: hasAccess ? consultation : null,
        isLoading,
        scheduleConsultation: scheduleMutation.mutate,
        updateConsultation: updateMutation.mutate,
        isScheduling: scheduleMutation.status === 'pending',
        isUpdating: updateMutation.status === 'pending',
        hasAccess
    };
}
