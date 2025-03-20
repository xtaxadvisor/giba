import React, { useState } from "react";
import TeamSettings from "../professional/Settings/TeamSettings.js";
import SecuritySettings from "../professional/Settings/SecuritySettings.js";
import ProfileSettings from "../professional/Settings/ProfileSettings.js";

export default function SettingsPage() {
  // ✅ User settings states
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-3xl mx-auto space-y-6">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>

      {/* ✅ Notifications & Dark Mode Settings */}
      <div className="space-y-4">
        <div className="flex justify-between items-center p-3 border rounded-md shadow-md bg-gray-50">
          <span className="text-lg font-medium">Enable Notifications</span>
          <input
            type="checkbox"
            checked={notificationsEnabled}
            onChange={() => setNotificationsEnabled(!notificationsEnabled)}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
        </div>

        <div className="flex justify-between items-center p-3 border rounded-md shadow-md bg-gray-50">
          <span className="text-lg font-medium">Dark Mode</span>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
        </div>

        {/* ✅ Save Button */}
        <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
          Save Settings
        </button>
      </div>

      {/* ✅ Additional Settings Sections */}
      <div className="space-y-6">
        <ProfileSettings onSave={function (sectionData: any): Promise<void> {
          throw new Error("Function not implemented.");
        } } isLoading={false} />
        <TeamSettings onSave={function (sectionData: any): Promise<void> {
          throw new Error("Function not implemented.");
        } } isLoading={false} />
        <SecuritySettings onSave={function (sectionData: any): Promise<void> {
          throw new Error("Function not implemented.");
        } } isLoading={false} />
      </div>
    </div>
  );
}