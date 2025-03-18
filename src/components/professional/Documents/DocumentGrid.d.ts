interface Document {
    id: string;
    title: string;
    type: string;
    uploadedAt: string | Date;
    status: string;
    tags?: string[];
}
interface DocumentGridProps {
    documents: Document[];
    isLoading: boolean;
    onDelete: (id: string) => void;
    onShare: (id: string) => void;
}
export declare function DocumentGrid({ documents, isLoading, onDelete, onShare }: DocumentGridProps): any;
export {};
