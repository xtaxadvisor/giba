import React from "react";

const Messages: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">Messages</h1>
      <p className="text-gray-600">No new messages.</p>
    </div>
  );
};

export default Messages; // ✅ Ensure default export exists