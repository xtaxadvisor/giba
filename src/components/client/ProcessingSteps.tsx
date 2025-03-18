import React from "react";

const ProcessingSteps: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">Processing Steps</h1>
      <p className="text-gray-600">No processing steps available.</p>
    </div>
  );
};

export default ProcessingSteps; // ✅ Moved to a separate file