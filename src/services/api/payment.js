import { api } from '../api';
export const paymentService = {
    createPaymentIntent: (data) => api.post('/payments/create-intent', data),
    confirmPayment: (paymentIntentId) => api.post(`/payments/${paymentIntentId}/confirm`),
    getPaymentStatus: (paymentIntentId) => api.get(`/payments/${paymentIntentId}`),
    refundPayment: (paymentIntentId, amount) => api.post(`/payments/${paymentIntentId}/refund`, { amount }),
    getPaymentMethods: () => api.get('/payments/methods'),
    attachPaymentMethod: (paymentMethodId) => api.post('/payments/methods', { paymentMethodId }),
    detachPaymentMethod: (paymentMethodId) => api.delete(`/payments/methods/${paymentMethodId}`)
};
