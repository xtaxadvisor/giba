import React from "react";
import { FileText, Download, Eye, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface Document {
  id: string;
  name: string;
  type: string;
  size: string;
  uploadedAt: string;
  status: "pending" | "approved" | "rejected";
}

interface DocumentListProps {
  documents: Document[];
  onView: (document: Document) => void;
  onDownload: (document: Document) => void;
  onDelete: (document: Document) => void;
}
interface DocumentListProps {
  documents: Document[];
  onView: (document: Document) => void;
  onDownload: (document: Document) => void;
  onDelete: (document: Document) => void;
}

export const DocumentList: React.FC<DocumentListProps> = ({ documents, onView, onDownload, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Documents</h2>
      {documents.length > 0 ? (
        <ul className="space-y-4">
          {documents.map((doc) => (
            <li key={doc.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm">
              {/* Document Details */}
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-gray-400 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">{doc.name}</p>
                  <p className="text-sm text-gray-500">{doc.type} • {doc.size} • {doc.uploadedAt}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm" icon={Eye} onClick={() => onView(doc)}>View</Button>
                <Button variant="ghost" size="sm" icon={Download} onClick={() => onDownload(doc)}>Download</Button>
                <Button variant="ghost" size="sm" icon={Trash2} className="text-red-600 hover:text-red-700" onClick={() => onDelete(doc)}>Delete</Button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 text-sm">No documents available.</p>
      )}
    </div>
  );
};