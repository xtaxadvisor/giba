// src/components/professional/settings/TeamSettings.tsx


// ✅ Define the expected props for TeamSettings
interface TeamSettingsProps {
  settings?: { 
    members: { 
      id: string; 
      name: string; 
      email: string; 
      role: string; 
      status: string; 
    }[] 
  }; 
  onSave: (sectionData: any) => Promise<void>;
  isLoading: boolean;
}

const TeamSettings: React.FC<TeamSettingsProps> = ({ settings, onSave, isLoading }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Team Management</h2>
      
      {isLoading ? (
        <p>Loading team members...</p>
      ) : (
        <ul className="list-disc pl-5 space-y-2">
          {settings?.members?.map((member) => (
            <li key={member.id} className="text-gray-700">
              {member.name} ({member.role}) - {member.email}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4">
        <button
          onClick={() => onSave(settings)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Save Team Settings
        </button>
      </div>
    </div>
  );
};

export default TeamSettings;