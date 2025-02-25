import { useState, useEffect } from 'react';
import { AlertCircle, Calendar, FileText } from 'lucide-react';
import { Card } from '../../ui/Card';

export function ClientDashboard() {
  const [documents, setDocuments] = useState<{ title: string; type: string; date: string; status: string }[]>([]);

  useEffect(() => {
    async function fetchDocuments() {
      try {
        const response = await fetch('/api/documents'); // Ensure this API exists
        const data = await response.json();
        setDocuments(data);
      } catch (error) {
        console.error("Failed to fetch documents:", error);
      }
    }
    fetchDocuments();
  }, []);

  return (
    <div className="space-y-6">
      {/* Financial Health Score */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Financial Health Score</h3>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="h-4 bg-gray-200 rounded-full">
              <div className="h-4 bg-green-500 rounded-full" style={{ width: '85%' }} />
            </div>
          </div>
          <span className="ml-4 text-2xl font-bold text-green-500">85/100</span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-sm font-medium text-gray-500">Savings</div>
            <div className="text-lg font-semibold text-gray-900">92/100</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-medium text-gray-500">Investments</div>
            <div className="text-lg font-semibold text-gray-900">78/100</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-medium text-gray-500">Tax Planning</div>
            <div className="text-lg font-semibold text-gray-900">85/100</div>
          </div>
        </div>
      </div>

      {/* Action Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card icon={AlertCircle} title="Required Actions" value="3" description="Tasks needing attention" />
        <Card icon={Calendar} title="Upcoming Deadlines" value="2" description="In the next 30 days" />
      </div>

      {/* Document Timeline */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Documents</h3>
        <div className="space-y-4">
          {documents.length > 0 ? (
            documents.map((doc, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">{doc.title}</p>
                    <p className="text-sm text-gray-500">{doc.type} • {doc.date}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  doc.status === 'approved' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {doc.status}
                </span>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No documents available.</p>
          )}
        </div>
      </div>
    </div>
  );
}