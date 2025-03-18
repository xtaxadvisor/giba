import { useState, useEffect } from 'react';
import { api } from '../api';
interface GeneralSettings {
  siteName: string;
  supportEmail: string;
  defaultLanguage: string;
}

interface SecuritySettings {
  twoFactorAuth: boolean;
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

export function useSettings() {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch settings from API or other source
    const fetchSettings = async (): Promise<Settings> => {
      const response = await api.get<{ data: Settings }>('/settings');
      return response.data;
    };

    fetchSettings().then((data: Settings) => {
      setSettings(data);
      setIsLoading(false);
    });
  }, []);

  return { settings, isLoading };
}
export interface Settings {
  profile: {
    name: string;
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

export const settingsService = {
  getSettings: () => 
    api.get<Settings>('/settings'),

  updateSettings: ({ section, data }: UpdateSettingsDTO) => 
    api.put<Settings>(`/settings/${section}`, data),

  exportSettings: () => 
    api.get<Blob>('/settings/export', {
      headers: { Accept: 'application/json' }
    }),

  importSettings: (data: any) => 
    api.post<Settings>('/settings/import', data),
};