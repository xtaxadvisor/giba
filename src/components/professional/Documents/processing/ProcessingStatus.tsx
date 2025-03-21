import React from "react";
import { Clock, CheckCircle, XCircle } from 'lucide-react';
import { formatTimeAgo } from '../../../../utils/date.js';
import { calculateProcessingTime } from '../../../../utils/documents/processing.js';
import type { ProcessingStep } from '../../../../types/documents.js';

interface ProcessingStatusProps {
  steps: ProcessingStep[];
  startTime: string;
}

export function ProcessingStatus({ steps, startTime }: ProcessingStatusProps) {
  const processingTime = calculateProcessingTime(startTime);

  return (
    <div className="space-y-4">
      <div>
        <span className="text-sm font-medium text-gray-500">Processing Time</span>
        <span className="text-sm text-gray-900">{processingTime}</span>
      </div>

      <div className="relative">
        {steps.map((step) => (
          <div key={step.id} className="flex items-center mb-4">
            <div className={`p-2 rounded-full ${
              step.status === 'completed' ? 'bg-green-100' :
              step.status === 'processing' ? 'bg-blue-100' :
              step.status === 'error' ? 'bg-red-100' : 'bg-gray-100'
            }`}>
              {step.status === 'completed' ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
              ) : step.status === 'processing' ? (
                <Clock className="h-5 w-5 text-blue-600" />
              ) : step.status === 'error' ? (
                <XCircle className="h-5 w-5 text-red-600" />
              ) : (
                <Clock className="h-5 w-5 text-gray-400" />
              )}
            </div>
            <div className="ml-4 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">{step.name}</span>
                {step.completedAt && (
                  <span className="text-xs text-gray-500">
                    {formatTimeAgo(step.completedAt)}
                  </span>
                )}
              </div>
              {step.error && (
                <p className="mt-1 text-sm text-red-600">{step.error}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}