import type { LucideIcon } from 'lucide-react';
export declare const USER_ROLES: {
    ADMIN: string;
    STUDENT: string;
    INVESTOR: string;
    CLIENT: string;
    PROFESSIONAL: string;
    SUPPORT: string;
};
export interface PortalConfig {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    path: string;
    requiredRole?: string[];
    features: string[];
    notifications?: boolean;
    messaging?: boolean;
    documents?: boolean;
}
export declare const PORTAL_CONFIGS: Record<string, PortalConfig>;
export declare function getPortalConfig(portalId: string): PortalConfig;
export declare function getAvailablePortals(userRole?: string): PortalConfig[];
