export declare const ALLOWED_FILE_TYPES: string[];
export declare const MAX_FILE_SIZE: number;
export declare class SecureFileHandler {
    private static instance;
    private constructor();
    static getInstance(): SecureFileHandler;
    validateFile(file: File): {
        isValid: boolean;
        error?: string;
    };
    scanFile(file: File): Promise<boolean>;
    hashFile(file: File): Promise<string>;
}
export declare const secureFileHandler: SecureFileHandler;
