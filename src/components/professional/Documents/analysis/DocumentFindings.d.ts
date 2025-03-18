interface Finding {
    type: 'success' | 'warning';
    message: string;
}
interface DocumentFindingsProps {
    findings: Finding[];
}
export declare function DocumentFindings({ findings }: DocumentFindingsProps): any;
export {};
