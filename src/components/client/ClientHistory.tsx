interface ClientHistoryProps {
    clientId: string;
  }
  
  export function ClientHistory({ clientId }: ClientHistoryProps) {
    // Simulated client history data (Replace with API call if needed)
    const history = [
      { id: 1, action: "Signed Lease Agreement", date: "2024-01-15" },
      { id: 2, action: "Uploaded Tax Documents", date: "2024-02-10" },
      { id: 3, action: "Scheduled Consultation", date: "2024-03-01" },
    ];
  
    return (
      <div className="p-6 bg-white rounded-lg shadow max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">Client History</h1>
        <p className="text-gray-600">History for Client ID: {clientId}</p>
        <ul className="divide-y divide-gray-200 mt-4">
          {history.map((entry) => (
            <li key={entry.id} className="py-3">
              <p className="font-medium text-gray-900">{entry.action}</p>
              <p className="text-sm text-gray-600">{entry.date}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ClientHistory;