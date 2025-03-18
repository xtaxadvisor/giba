export declare class APIError extends Error {
    status: number;
    code: string;
    data?: any | undefined;
    constructor(status: number, code: string, message: string, data?: any | undefined);
    static fromResponse(error: any): APIError;
}
export declare function isAPIError(error: any): error is APIError;
