export declare const ServiceTypes: {
    readonly TAX_PLANNING: "tax-planning";
    readonly FINANCIAL_REVIEW: "financial-review";
    readonly INVESTMENT_ADVISORY: "investment-advisory";
    readonly BUSINESS_CONSULTING: "business-consulting";
    readonly TAX_PREPARATION: "tax-preparation";
};
export type ServiceType = typeof ServiceTypes[keyof typeof ServiceTypes];
export interface ServiceRequest {
    type: ServiceType;
    hours?: number;
    quantity?: number;
    addons?: ServiceAddon[];
}
export interface ServiceAddon {
    name: string;
    price: number;
    quantity?: number;
}
interface CostBreakdown {
    subtotal: number;
    addons: number;
    discount: number;
    total: number;
    details: {
        basePrice: number;
        hourlyCharges: number;
        addonBreakdown: Array<{
            name: string;
            quantity: number;
            price: number;
            total: number;
        }>;
        appliedDiscount: {
            percentage: number;
            amount: number;
        };
    };
}
export declare function calculateServicesCost(services: ServiceRequest[]): CostBreakdown;
export {};
