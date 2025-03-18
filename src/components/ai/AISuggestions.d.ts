interface AISuggestionsProps {
    suggestions: string[];
    onSelect: (suggestion: string) => void;
}
export declare function AISuggestions({ suggestions, onSelect }: AISuggestionsProps): any;
export {};
