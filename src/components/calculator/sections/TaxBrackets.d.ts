interface TaxBracket {
    rate: number;
    min: number;
    max?: number;
    tax: number;
}
interface TaxBracketsProps {
    brackets: TaxBracket[];
    income: number;
}
export declare function TaxBrackets({ brackets, income }: TaxBracketsProps): any;
export {};
