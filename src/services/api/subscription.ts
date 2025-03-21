import { api } from '../api.js';
export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
}

export interface Subscription {
  id: string;
  plan: SubscriptionPlan;
  status: string;
};

export const subscriptionService = {
  getPlans: () => 
    api.get<SubscriptionPlan[]>('/subscriptions/plans'),

  getCurrentSubscription: () => 
    api.get<Subscription>('/subscriptions/current'),

  subscribe: (planId: string, paymentMethodId: string) => 
    api.post<Subscription>('/subscriptions', { planId, paymentMethodId }),

  cancelSubscription: (subscriptionId: string) => 
    api.post<void>(`/subscriptions/${subscriptionId}/cancel`),

  updateSubscription: (subscriptionId: string, planId: string) => 
    api.put<Subscription>(`/subscriptions/${subscriptionId}`, { planId }),

  resumeSubscription: (subscriptionId: string) => 
    api.post<Subscription>(`/subscriptions/${subscriptionId}/resume`)
};