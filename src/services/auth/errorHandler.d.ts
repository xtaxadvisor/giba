import type { AuthError } from '@supabase/supabase-js';
export declare function handleAuthError(error: AuthError): string;
export declare function isAuthError(error: any): error is AuthError;
