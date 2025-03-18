import { infrastructureTester } from './InfrastructureTester';
import { loadTester } from './LoadTester';
import { securityTester } from './SecurityTester';
export declare function runAllTests(): Promise<{
    infrastructure: {
        database: {
            success: boolean;
            error: any;
            details: {
                timestamp: string;
            };
        } | {
            success: boolean;
            error: string;
            details?: undefined;
        };
        rls: {
            success: boolean;
            error: any;
            details: {
                timestamp: string;
            };
        } | {
            success: boolean;
            error: string;
            details?: undefined;
        };
        auth: {
            success: boolean;
            details: {
                hasSession: boolean;
                timestamp: string;
            };
            error?: undefined;
        } | {
            success: boolean;
            error: string;
            details?: undefined;
        };
    } | {
        success: boolean;
        error: string;
    };
    load: {
        database: {
            averageResponseTime: number;
            maxResponseTime: number;
            minResponseTime: number;
            successRate: number;
        };
        api: Record<string, {
            averageResponseTime: number;
            successRate: number;
            errors: string[];
        }>;
    };
    security: {
        auth: {
            success: boolean;
            issues: string[];
        };
        rls: {
            success: boolean;
            issues: string[];
        };
        api: {
            success: boolean;
            issues: string[];
        };
    };
}>;
export { infrastructureTester, loadTester, securityTester };
