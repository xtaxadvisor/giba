import React from "react";
interface ClientCommunicationProps {
  clientId: string;
}

export function ClientCommunication({ clientId }: ClientCommunicationProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">Client Communication</h1>
      <p className="text-gray-600">Communication history for Client ID: {clientId}</p>
      <div className="mt-4 p-3 border rounded-md shadow-md bg-gray-50">
        <p className="font-medium">No messages available.</p>
      </div>
    </div>
  );
}

export default ClientCommunication;