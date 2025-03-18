import { useNotificationStore } from '../../lib/store';
export class AuthorizeNetService {
    static instance;
    loginId = '5S35UDg3cec8';
    apiEndpoint = '/.netlify/functions/authorize-payment';
    constructor() { }
    static getInstance() {
        if (!AuthorizeNetService.instance) {
            AuthorizeNetService.instance = new AuthorizeNetService();
        }
        return AuthorizeNetService.instance;
    }
    async processPayment(paymentData) {
        try {
            const response = await fetch(this.apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    loginId: this.loginId,
                    ...paymentData
                })
            });
            if (!response.ok) {
                throw new Error('Payment processing failed');
            }
            const result = await response.json();
            return result;
        }
        catch (error) {
            console.error('Payment error:', error);
            useNotificationStore.getState().addNotification('Payment processing failed. Please try again.', 'error');
            throw error;
        }
    }
    async validateCard(cardNumber) {
        // Basic Luhn algorithm check
        let sum = 0;
        let isEven = false;
        for (let i = cardNumber.length - 1; i >= 0; i--) {
            let digit = parseInt(cardNumber[i]);
            if (isEven) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }
            sum += digit;
            isEven = !isEven;
        }
        return sum % 10 === 0;
    }
}
export const authorizeNetService = AuthorizeNetService.getInstance();
