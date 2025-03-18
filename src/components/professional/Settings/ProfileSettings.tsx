// src/components/professional/settings/ProfileSettings.tsx


interface ProfileSettingsProps {
  settings?: { name: string; email: string; companyName: string; website: string; address: string; phone: string };
  onSave: (sectionData: any) => Promise<void>;
  isLoading: boolean;
}

const ProfileSettings: React.FC<ProfileSettingsProps> = ({ settings, onSave, isLoading }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Profile Settings</h2>
      
      {isLoading ? <p>Loading profile...</p> : (
        <div>
          <p>Name: {settings?.name || "N/A"}</p>
          <p>Email: {settings?.email || "N/A"}</p>
        </div>
      )}

      <div className="mt-4">
        <button
          onClick={() => onSave(settings)}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Save Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileSettings;