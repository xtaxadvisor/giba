import React from "react";
import { Button } from "../components/ui/Button.js";
import { Download, Eye, Trash2 } from "lucide-react";

const Documents: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">Documents</h1>
      <p className="text-gray-600">No documents available.</p>

      {/* Sample Actions for Future Implementation */}
      <div className="flex space-x-3 mt-4">
        <Button variant="ghost" size="sm" icon={Eye}>View</Button>
        <Button variant="ghost" size="sm" icon={Download}>Download</Button>
        <Button variant="ghost" size="sm" icon={Trash2} className="text-red-600 hover:text-red-700">Delete</Button>
      </div>
    </div>
  );
};

export default Documents; // ✅ Ensures a valid default export