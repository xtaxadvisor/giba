interface GeneralSettings {
    siteName: string;
    supportEmail: string;
    defaultLanguage: string;
}
interface SecuritySettings {
    require2FA: boolean;
    sessionTimeout: number;
}
interface NotificationSettings {
    userRegistration: boolean;
    systemAlerts: boolean;
    securityAlerts: boolean;
}
interface DatabaseSettings {
    backupSchedule: string;
    retentionPeriod: number;
}
export interface Settings {
    general: GeneralSettings;
    security: SecuritySettings;
    notifications: NotificationSettings;
    database: DatabaseSettings;
}
export declare function useSettings(): {
    settings: any;
    isLoading: any;
};
export interface Settings {
    profile: {
        companyName: string;
        website: string;
        address: string;
        phone: string;
        email: string;
    };
    billing: {
        defaultCurrency: string;
        taxRate: number;
        paymentTerms: number;
        invoicePrefix: string;
        defaultNotes: string;
    };
    notifications: NotificationSettings;
    team: {
        members: Array<{
            id: string;
            name: string;
            email: string;
            role: string;
            status: string;
        }>;
    };
    security: SecuritySettings;
}
export interface UpdateSettingsDTO {
    section: string;
    data: any;
}
export declare const settingsService: {
    getSettings: () => Promise<Settings>;
    updateSettings: ({ section, data }: UpdateSettingsDTO) => Promise<Settings>;
    exportSettings: () => Promise<Blob>;
    importSettings: (data: any) => Promise<Settings>;
};
export {};
