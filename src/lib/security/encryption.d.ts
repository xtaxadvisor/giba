export declare class Encryption {
    private static instance;
    private encoder;
    private decoder;
    private constructor();
    static getInstance(): Encryption;
    encrypt(data: string, key: CryptoKey): Promise<string>;
    decrypt(encryptedData: string, key: CryptoKey): Promise<string>;
    generateKey(): Promise<CryptoKey>;
}
export declare const encryption: Encryption;
