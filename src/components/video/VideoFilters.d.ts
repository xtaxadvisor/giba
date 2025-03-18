interface VideoFiltersProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
    selectedCategory: string;
    onCategoryChange: (value: string) => void;
}
export declare function VideoFilters({ searchTerm, onSearchChange, selectedCategory, onCategoryChange }: VideoFiltersProps): any;
export {};
