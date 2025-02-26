
interface ClientDocumentsProps {
  clientId: string;
}

export function ClientDocuments({ clientId }: ClientDocumentsProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">Client Documents</h1>
      <p className="text-gray-600">Documents for Client ID: {clientId}</p>
      <div className="mt-4 p-3 border rounded-md shadow-md bg-gray-50">
        <p className="font-medium">No documents available.</p>
      </div>
    </div>
  );
}

export default ClientDocuments;