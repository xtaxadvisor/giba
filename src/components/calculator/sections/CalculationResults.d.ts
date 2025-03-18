interface CalculationResultsProps {
    results: {
        refund: number;
        taxesOwed: number;
        effectiveTaxRate: number;
    };
}
export declare function CalculationResults({ results }: CalculationResultsProps): any;
export {};
