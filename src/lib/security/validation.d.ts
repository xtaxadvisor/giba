export declare const inputSchemas: {
    email: any;
    password: any;
    name: any;
    phone: any;
    url: any;
};
export declare function sanitizeInput(input: string): string;
export declare function sanitizeObject<T extends Record<string, unknown>>(obj: T): T;
export declare function escapeSQLString(value: string): string;
export declare function validateFileUpload(file: File): {
    isValid: boolean;
    error?: string;
};
