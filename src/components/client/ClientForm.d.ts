interface ClientFormProps {
    initialData?: ClientFormData;
    onSubmit: (data: ClientFormData) => Promise<void>;
    onCancel: () => void;
}
interface ClientFormData {
    name: string;
    email: string;
    phone: string;
}
export declare function ClientForm({ initialData, onSubmit, onCancel }: ClientFormProps): any;
export default ClientForm;
