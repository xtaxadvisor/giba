import Finding from '../documents/processing';
export declare function analyzeTaxForms(forms: Array<{ id: string; data: Record<string, unknown> }>): typeof Finding[];
export declare function generateRecommendations(findings: typeof Finding[]): Recommendation[];

export interface Recommendation {
  id: string;
  description: string;
  priority: number;
}
export declare function validateDocumentCompleteness(document: { [key: string]: unknown }): boolean;
