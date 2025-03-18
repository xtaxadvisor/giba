import React, { useState } from 'react';
import { Bell, Users, CreditCard, Lock, Building } from 'lucide-react';
import { useSettings } from '../../../hooks/useSettings';
import ProfileSettings from "./ProfileSettings";
import BillingSettings from "./BillingSettings";
import { NotificationSettings } from "./NotificationSettings";
import TeamSettings from "./TeamSettings";
import SecuritySettings from "./SecuritySettings";

export function ProfessionalSettings() {
  const [activeSection, setActiveSection] = useState('profile');
  const { settings, isLoading, updateSettings } = useSettings();

  const sections = [
    { id: 'profile', label: 'Profile Settings', icon: Building },
    { id: 'billing', label: 'Billing Settings', icon: CreditCard },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'team', label: 'Team Management', icon: Users },
    { id: 'security', label: 'Security', icon: Lock },
  ];

  const handleSave = async (sectionData: any) => {
    await updateSettings({ section: activeSection, data: sectionData });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Settings</h1>

      <div className="flex gap-6">
        <nav className="w-64 space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                activeSection === section.id
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <section.icon className="mr-3 h-5 w-5 text-gray-400" />
              {section.label}
            </button>
          ))}
        </nav>

        <div className="flex-1 bg-white rounded-lg shadow p-6">
          {activeSection === 'profile' && <ProfileSettings settings={settings?.profile ? { ...settings.profile, name: settings.profile.name || '' } : undefined} onSave={handleSave} isLoading={isLoading} />}
          {activeSection === 'billing' && <BillingSettings settings={settings?.billing} onSave={handleSave} isLoading={isLoading} />}
          {activeSection === 'notifications' && <NotificationSettings settings={settings?.notifications} onSave={handleSave} isLoading={isLoading} />}
          {activeSection === 'team' && <TeamSettings settings={settings?.team} onSave={handleSave} isLoading={isLoading} />}
          {activeSection === 'security' && <SecuritySettings settings={settings?.security ? { twoFactorAuth: settings.security.twoFactorAuth } : { twoFactorAuth: false }} onSave={handleSave} isLoading={isLoading} />}
        </div>
      </div>
    </div>
  );
}