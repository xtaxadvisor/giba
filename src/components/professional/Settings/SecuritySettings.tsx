// src/components/professional/settings/SecuritySettings.tsx


interface SecuritySettingsProps {
  settings?: { twoFactorAuth: boolean };
  onSave: (sectionData: any) => Promise<void>;
  isLoading: boolean;
}

const SecuritySettings: React.FC<SecuritySettingsProps> = ({ settings, onSave, isLoading }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Security Settings</h2>

      {isLoading ? <p>Loading security settings...</p> : (
        <div>
          <p>Two-Factor Authentication: {settings?.twoFactorAuth ? "Enabled" : "Disabled"}</p>
        </div>
      )}

      <div className="mt-4">
        <button
          onClick={() => onSave(settings)}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Save Security Settings
        </button>
      </div>
    </div>
  );
};

export default SecuritySettings;