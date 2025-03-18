import { SECURITY_CONFIG } from './config';
export class CSRFProtection {
    static instance;
    token = null;
    constructor() {
        this.setupCSRFToken();
    }
    static getInstance() {
        if (!CSRFProtection.instance) {
            CSRFProtection.instance = new CSRFProtection();
        }
        return CSRFProtection.instance;
    }
    setupCSRFToken() {
        this.token = this.generateToken();
        document.cookie = `${SECURITY_CONFIG.csrf.cookieName}=${this.token}; path=/; SameSite=Strict`;
    }
    generateToken() {
        const array = new Uint8Array(32);
        crypto.getRandomValues(array);
        return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    }
    getToken() {
        if (!this.token) {
            this.setupCSRFToken();
        }
        return this.token;
    }
    validateToken(token) {
        return token === this.token;
    }
    getRequestHeaders() {
        return {
            [SECURITY_CONFIG.csrf.headerName]: this.getToken()
        };
    }
}
export const csrfProtection = CSRFProtection.getInstance();
