export interface PaymentIntent {
    id: string;
    amount: number;
    currency: string;
    status: 'pending' | 'processing' | 'succeeded' | 'failed';
    clientSecret: string;
}
export interface CreatePaymentDTO {
    amount: number;
    currency: string;
    description: string;
    metadata?: Record<string, string>;
}
export declare const paymentService: {
    createPaymentIntent: (data: CreatePaymentDTO) => Promise<PaymentIntent>;
    confirmPayment: (paymentIntentId: string) => Promise<PaymentIntent>;
    getPaymentStatus: (paymentIntentId: string) => Promise<PaymentIntent>;
    refundPayment: (paymentIntentId: string, amount?: number) => Promise<PaymentIntent>;
    getPaymentMethods: () => Promise<{
        id: string;
        type: string;
        last4: string;
        expiryMonth: number;
        expiryYear: number;
    }[]>;
    attachPaymentMethod: (paymentMethodId: string) => Promise<void>;
    detachPaymentMethod: (paymentMethodId: string) => Promise<void>;
};
