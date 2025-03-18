export interface SubscriptionPlan {
    id: string;
    name: string;
    price: number;
}
export interface Subscription {
    id: string;
    plan: SubscriptionPlan;
    status: string;
}
export declare const subscriptionService: {
    getPlans: () => Promise<SubscriptionPlan[]>;
    getCurrentSubscription: () => Promise<Subscription>;
    subscribe: (planId: string, paymentMethodId: string) => Promise<Subscription>;
    cancelSubscription: (subscriptionId: string) => Promise<void>;
    updateSubscription: (subscriptionId: string, planId: string) => Promise<Subscription>;
    resumeSubscription: (subscriptionId: string) => Promise<Subscription>;
};
