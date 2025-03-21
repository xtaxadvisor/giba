import { api } from '../api.js';

export interface InvoiceItem {
  id?: string;
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

export interface Invoice {
  id: string;
  clientId: string;
  clientName: string;
  number: string;
  issueDate: string;
  dueDate: string;
  items: InvoiceItem[];
  subtotal: number;
  tax: number;
  total: number;
  status: 'draft' | 'pending' | 'paid' | 'overdue';
  notes?: string;
}

export interface CreateInvoiceDTO {
  clientId: string;
  dueDate: string;
  items: Omit<InvoiceItem, 'id'>[];
  notes?: string;
}

export interface UpdateInvoiceDTO extends Partial<CreateInvoiceDTO> {
  id: string;
  status?: Invoice['status'];
}

export interface InvoiceStats {
  totalRevenue: number;
  pendingAmount: number;
  overdueAmount: number;
  invoiceCount: number;
  paidCount: number;
  overdueCount: number;
}

export const billingService = {
  getInvoices: async (params?: { status?: string; clientId?: string }) => {
    let url = '/api/invoices';
    if (params) {
      const queryParams = new URLSearchParams(params as any).toString();
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

  getInvoiceById: (id: string) => 
    api.get<Invoice>(`/invoices/${id}`),

  getInvoiceStats: () => 
    api.get<InvoiceStats>('/invoices/stats'),

  createInvoice: (data: CreateInvoiceDTO) => 
    api.post<Invoice>('/invoices', data),

  updateInvoice: ({ id, ...data }: UpdateInvoiceDTO) => 
    api.put<Invoice>(`/invoices/${id}`, data),

  deleteInvoice: (id: string) => 
    api.delete<void>(`/invoices/${id}`),

  markAsPaid: (id: string) => 
    api.put<Invoice>(`/invoices/${id}/paid`),

  downloadInvoice: (id: string, format: 'pdf' | 'csv' = 'pdf') => 
    api.get<Blob>(`/invoices/${id}/download?format=${format}`, {
      headers: { Accept: 'application/octet-stream' }
    }),

  sendInvoice: (id: string) => 
    api.post<void>(`/invoices/${id}/send`),

  getPaymentHistory: (clientId: string) => 
    api.get<Array<{
      id: string;
      invoiceId: string;
      amount: number;
      date: string;
      method: string;
    }>>(`/clients/${clientId}/payments`),

  processPayment: async (paymentDetails: any) => {
    const response = await fetch('/api/payments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentDetails),
    });
    return response.json();
  },

  refundPayment: async (paymentId: string) => {
    const response = await fetch(`/api/payments/${paymentId}/refund`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  },
};