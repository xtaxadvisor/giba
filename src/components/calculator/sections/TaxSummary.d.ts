interface TaxSummaryProps {
    income: number;
    deductions: number;
    taxableIncome: number;
    effectiveRate: number;
}
export declare function TaxSummary({ income, deductions, taxableIncome, effectiveRate }: TaxSummaryProps): any;
export {};
