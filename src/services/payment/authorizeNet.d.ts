export declare class AuthorizeNetService {
    private static instance;
    private readonly loginId;
    private readonly apiEndpoint;
    private constructor();
    static getInstance(): AuthorizeNetService;
    processPayment(paymentData: {
        amount: number;
        cardNumber: string;
        expirationDate: string;
        cardCode: string;
        billingInfo?: {
            firstName: string;
            lastName: string;
            address: string;
            city: string;
            state: string;
            zip: string;
        };
    }): Promise<any>;
    validateCard(cardNumber: string): Promise<boolean>;
}
export declare const authorizeNetService: AuthorizeNetService;
