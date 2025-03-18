interface DeductionBreakdownProps {
    deductions: {
        standard: number;
        itemized: {
            mortgage: number;
            studentLoan: number;
            charitable: number;
            other: number;
        };
    };
    selectedType: 'standard' | 'itemized';
}
export declare function DeductionBreakdown({ deductions, selectedType }: DeductionBreakdownProps): any;
export {};
