import { CheckCircle, AlertTriangle } from 'lucide-react';
import type { Finding } from '../../../../types/documents';

interface DocumentFindingsProps {
  findings: Finding[];
}

export function DocumentFindings({ findings }: DocumentFindingsProps) {
  if (!findings || findings.length === 0) {
    return null; // ✅ Prevents rendering an empty container if no findings exist
  }

  return (
    <div className="border rounded-lg p-4">
      <h4 className="font-medium text-gray-900">Key Findings</h4>
      <div className="mt-2 space-y-2">
        {findings.map(({ type, message }, index) => (
          <div key={index} className="flex items-start space-x-2">
            {type === 'success' ? (
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
            ) : (
              <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
            )}
            <span className="text-gray-600">{message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}