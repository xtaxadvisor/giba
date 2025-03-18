import { useState, useEffect } from 'react';
import { api } from '../api';
export function useSettings() {
    const [settings, setSettings] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Fetch settings from API or other source
        const fetchSettings = async () => {
            const response = await api.get('/settings');
            return response.data;
        };
        fetchSettings().then((data) => {
            setSettings(data);
            setIsLoading(false);
        });
    }, []);
    return { settings, isLoading };
}
export const settingsService = {
    getSettings: () => api.get('/settings'),
    updateSettings: ({ section, data }) => api.put(`/settings/${section}`, data),
    exportSettings: () => api.get('/settings/export', {
        headers: { Accept: 'application/json' }
    }),
    importSettings: (data) => api.post('/settings/import', data),
};
