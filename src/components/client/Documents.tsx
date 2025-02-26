
interface ClientDocumentsProps {
  clientId: string;
}

export function ClientDocuments({ clientId }: ClientDocumentsProps) {
  return (
    <div>
      <h2>Client Documents for {clientId}</h2>
      {/* Add your document display logic here */}
    </div>
  );
}