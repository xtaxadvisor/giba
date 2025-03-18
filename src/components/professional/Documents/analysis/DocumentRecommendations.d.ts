interface DocumentRecommendationsProps {
    recommendations: Recommendation[];
}
export interface Finding {
    type: 'success' | 'warning';
    message: string;
}
export interface Recommendation {
    message: string;
}
export declare function DocumentRecommendations({ recommendations }: DocumentRecommendationsProps): any;
export {};
