import { useState } from "react";

export function Settings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">Settings</h1>
      
      <div className="space-y-4">
        {/* Notifications Toggle */}
        <div className="flex justify-between items-center p-3 border rounded-md shadow-md bg-gray-50">
          <span className="text-lg font-medium">Enable Notifications</span>
          <input 
            type="checkbox" 
            checked={notificationsEnabled} 
            onChange={() => setNotificationsEnabled(!notificationsEnabled)}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
        </div>

        {/* Dark Mode Toggle */}
        <div className="flex justify-between items-center p-3 border rounded-md shadow-md bg-gray-50">
          <span className="text-lg font-medium">Dark Mode</span>
          <input 
            type="checkbox" 
            checked={darkMode} 
            onChange={() => setDarkMode(!darkMode)}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
        </div>

        {/* Save Button */}
        <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
          Save Settings
        </button>
      </div>
    </div>
  );
}

export default Settings;