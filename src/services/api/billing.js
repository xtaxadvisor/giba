import { api } from '../api';
export const billingService = {
    getInvoices: async (params) => {
        let url = '/api/invoices';
        if (params) {
            const queryParams = new URLSearchParams(params).toString();
            url += `?${queryParams}`;
        }
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.json();
    },
    getInvoiceById: (id) => api.get(`/invoices/${id}`),
    getInvoiceStats: () => api.get('/invoices/stats'),
    createInvoice: (data) => api.post('/invoices', data),
    updateInvoice: ({ id, ...data }) => api.put(`/invoices/${id}`, data),
    deleteInvoice: (id) => api.delete(`/invoices/${id}`),
    markAsPaid: (id) => api.put(`/invoices/${id}/paid`),
    downloadInvoice: (id, format = 'pdf') => api.get(`/invoices/${id}/download?format=${format}`, {
        headers: { Accept: 'application/octet-stream' }
    }),
    sendInvoice: (id) => api.post(`/invoices/${id}/send`),
    getPaymentHistory: (clientId) => api.get(`/clients/${clientId}/payments`),
    processPayment: async (paymentDetails) => {
        const response = await fetch('/api/payments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(paymentDetails),
        });
        return response.json();
    },
    refundPayment: async (paymentId) => {
        const response = await fetch(`/api/payments/${paymentId}/refund`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.json();
    },
};
