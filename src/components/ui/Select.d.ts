import { LucideIcon } from 'lucide-react';
interface Option {
    value: string;
    label: string;
}
interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
    label?: string;
    options: Option[];
    error?: string;
    icon?: LucideIcon;
    onChange?: (value: string) => void;
}
export declare function Select({ label, options, error, icon: Icon, onChange, className, id, name, ...props }: SelectProps): any;
export {};
