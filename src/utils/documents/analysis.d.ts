import Finding from '../documents/processing';
export declare function analyzeTaxForms(forms: any[]): typeof Finding[];
export declare function generateRecommendations(findings: typeof Finding[]): Recommendation[];

export interface Recommendation {
  id: string;
  description: string;
  priority: number;
}
export declare function validateDocumentCompleteness(document: any): boolean;
