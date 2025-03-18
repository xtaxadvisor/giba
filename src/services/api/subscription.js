import { api } from '../api';
;
export const subscriptionService = {
    getPlans: () => api.get('/subscriptions/plans'),
    getCurrentSubscription: () => api.get('/subscriptions/current'),
    subscribe: (planId, paymentMethodId) => api.post('/subscriptions', { planId, paymentMethodId }),
    cancelSubscription: (subscriptionId) => api.post(`/subscriptions/${subscriptionId}/cancel`),
    updateSubscription: (subscriptionId, planId) => api.put(`/subscriptions/${subscriptionId}`, { planId }),
    resumeSubscription: (subscriptionId) => api.post(`/subscriptions/${subscriptionId}/resume`)
};
