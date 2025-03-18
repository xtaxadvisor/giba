import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Download, Eye, Trash2, Upload } from "lucide-react";

interface Document {
  id: string;
  name: string;
  type: string;
  size: string;
  uploadedAt: string;
  status: "pending" | "approved" | "rejected";
}

const Documents: React.FC = () => {
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: "1",
      name: "Tax_Return_2023.pdf",
      type: "PDF",
      size: "2.4 MB",
      uploadedAt: "2024-03-15",
      status: "approved",
    },
    {
      id: "2",
      name: "Business_Expenses_Q1.xlsx",
      type: "Excel",
      size: "1.8 MB",
      uploadedAt: "2024-03-14",
      status: "pending",
    },
    {
      id: "3",
      name: "Investment_Portfolio.pdf",
      type: "PDF",
      size: "3.2 MB",
      uploadedAt: "2024-03-13",
      status: "rejected",
    },
  ]);

  return (
    <div className="p-6 bg-white rounded-lg shadow max-w-3xl mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Documents</h1>
        <Button variant="primary" icon={Upload}>Upload New Document</Button>
      </div>

      {/* Documents List */}
      {documents.length > 0 ? (
        <div className="mt-4 space-y-4">
          {documents.map((doc) => (
            <div key={doc.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900">{doc.name}</span>
                <span className="text-xs text-gray-500">{doc.type} • {doc.size} • {doc.uploadedAt}</span>
              </div>
              <span className={`px-2 py-1 text-xs font-medium rounded-full 
                ${doc.status === "approved" ? "bg-green-100 text-green-800" : 
                  doc.status === "rejected" ? "bg-red-100 text-red-800" : 
                  "bg-yellow-100 text-yellow-800"}`}>
                {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
              </span>
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm" icon={Eye}>View</Button>
                <Button variant="ghost" size="sm" icon={Download}>Download</Button>
                <Button variant="ghost" size="sm" icon={Trash2} className="text-red-600 hover:text-red-700">Delete</Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-sm mt-4">No documents available.</p>
      )}
    </div>
  );
};

export default Documents; // ✅ Ensures a proper default export