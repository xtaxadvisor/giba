import { LucideIcon } from 'lucide-react';
interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    error?: string;
    icon?: LucideIcon;
    helperText?: string;
    multiline?: boolean;
    rows?: number;
}
export declare function Input({ label, error, icon: Icon, helperText, className, multiline, rows, id, name, 'aria-label': ariaLabel, ...props }: InputProps): any;
export {};
