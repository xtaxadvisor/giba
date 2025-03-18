interface FormSearchProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
    selectedCategory: string;
    onCategoryChange: (value: string) => void;
    selectedYear: string;
    onYearChange: (value: string) => void;
}
export declare function FormSearch({ searchTerm, onSearchChange, selectedCategory, onCategoryChange, selectedYear, onYearChange }: FormSearchProps): any;
export {};
