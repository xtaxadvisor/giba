import React, { useState, useEffect } from "react";
import { FileText, AlertCircle } from "lucide-react";

interface ClientDocumentsProps {
  clientId?: string; // ✅ Made `clientId` optional
}

export function ClientDocuments({ clientId = "unknown" }: ClientDocumentsProps) {
  const [documents, setDocuments] = useState<{ title: string; type: string; date: string; status: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchClientDocuments() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/clients/${clientId}/documents`);
        if (!response.ok) throw new Error("Failed to fetch documents");
        const data = await response.json();
        setDocuments(data);
      } catch (err) {
        setError("Could not load client documents.");
      } finally {
        setLoading(false);
      }
    }
    fetchClientDocuments();
  }, [clientId]);

  return (
    <div className="p-6 bg-white rounded-lg shadow max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">Client Documents</h1>
      <p className="text-gray-600">Documents for Client ID: {clientId}</p>

      {loading ? (
        <p className="text-gray-500">Loading documents...</p>
      ) : error ? (
        <div className="flex items-center p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
          <AlertCircle className="h-5 w-5 mr-2" />
          <span>{error}</span>
        </div>
      ) : documents.length > 0 ? (
        <div className="mt-4 space-y-4">
          {documents.map((doc, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-gray-400 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">{doc.title}</p>
                  <p className="text-sm text-gray-500">{doc.type} • {doc.date}</p>
                </div>
              </div>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                doc.status === "approved" 
                  ? "bg-green-100 text-green-800"
                  : "bg-yellow-100 text-yellow-800"
              }`}>
                {doc.status}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-4 p-3 border rounded-md shadow-md bg-gray-50">
          <p className="font-medium">No documents available.</p>
        </div>
      )}
    </div>
  );
}

export default ClientDocuments;