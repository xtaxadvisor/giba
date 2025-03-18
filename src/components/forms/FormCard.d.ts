interface FormCardProps {
    id: string;
    name: string;
    description: string;
    year: string;
    category: string;
    onPreview: (id: string) => void;
    onDownload: (id: string) => void;
}
export declare function FormCard({ id, name, description, year, category, onPreview, onDownload }: FormCardProps): any;
export {};
