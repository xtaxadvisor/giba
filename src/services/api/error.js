export class APIError extends Error {
    status;
    code;
    data;
    constructor(status, code, message, data) {
        super(message);
        this.status = status;
        this.code = code;
        this.data = data;
        this.name = 'APIError';
    }
    static fromResponse(error) {
        const status = error.response?.status || 500;
        const code = error.response?.data?.code || 'UNKNOWN_ERROR';
        const message = error.response?.data?.message || 'An unexpected error occurred';
        const data = error.response?.data;
        return new APIError(status, code, message, data);
    }
}
export function isAPIError(error) {
    return error instanceof APIError;
}
