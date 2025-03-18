import { useState, useEffect } from 'react';

export interface ProcessingStep {
    id: string;
    name: string;
    status: "pending" | "processing" | "completed" | "error";
    startedAt?: string;
    completedAt?: string;
    error?: string;
  }
  export interface QueuedDocument {
      id: string;
      steps: ProcessingStep[] | null;
      name: string;
      queuedAt: string;
      status: "pending" | "processing" | "completed" | "failed";
  }
  export interface Document {
      id: string;
      name: string;
      type: string;
      size: string;
      uploadedAt: string;
      status: "pending" | "approved" | "rejected";
  }
 
  export interface DocumentGridDocument {
    id: string;
    title: string;
    type: string;
    uploadedAt: string | Date;
    status: "pending" | "approved" | "rejected";
    tags?: string[];
  }

  
  function transformToDocument(doc: DocumentGridDocument): Document {
      return {
          id: doc.id,
          name: doc.title,
          type: doc.type,
          size: '', // Add appropriate logic to set the size
          uploadedAt: typeof doc.uploadedAt === 'string' ? doc.uploadedAt : doc.uploadedAt.toISOString(),
          status: doc.status
      };
  }

  const documentGridDocuments: DocumentGridDocument[] = []; // Replace with actual data
  export const documents: Document[] = documentGridDocuments.map(transformToDocument);
  export interface DocumentQueueProps {
      documents: QueuedDocument[];
      onProcessDocument: (id: string) => void;
  }
  export interface QueuedDocument {
    id: string;
    status: 'pending' | 'processing' | 'completed' | 'failed';
    startedAt?: string;
    completedAt?: string;
  }
  export function calculateQueueMetrics(documents: QueuedDocument[]): {
      totalDocuments: number;
      pending: number;
      processing: number;
      completed: number;
      failed: number;
      averageProcessingTime: number;
  } {
      const totalDocuments = documents.length;
      const pending = documents.filter(doc => doc.status === "pending").length;
      const processing = documents.filter(doc => doc.status === "processing").length;
      const completed = documents.filter(doc => doc.status === "completed").length;
      const failed = documents.filter(doc => doc.status === "failed").length;
      const averageProcessingTime = documents.reduce((acc, doc) => {
          if (doc.steps && doc.steps.length > 0) {
              const processingSteps = doc.steps.filter(step => step.status === "completed");
              const totalProcessingTime = processingSteps.reduce((stepAcc, step) => {
                  if (step.startedAt && step.completedAt) {
                      const start = new Date(step.startedAt).getTime();
                      const end = new Date(step.completedAt).getTime();
                      return stepAcc + (end - start);
                  }
                  return stepAcc;
              }, 0);
              return acc + (totalProcessingTime / processingSteps.length);
          }
          return acc;
      }, 0) / totalDocuments;

      return {
          totalDocuments,
          pending,
          processing,
          completed,
          failed,
          averageProcessingTime: isNaN(averageProcessingTime) ? 0 : averageProcessingTime
      };
  }
  export function useDocuments(): {
      documents: Document[];
      searchTerm: string;
      setSearchTerm: import("react").Dispatch<import("react").SetStateAction<string>>;
      filterStatus: string;
      setFilterStatus: import("react").Dispatch<import("react").SetStateAction<string>>;
      loading: boolean;
      error: string | null;
  } {
      const [documents, setDocuments] = useState<Document[]>([]);
      const [searchTerm, setSearchTerm] = useState<string>('');
      const [filterStatus, setFilterStatus] = useState<string>('');
      const [loading, setLoading] = useState<boolean>(false);
      const [error, setError] = useState<string | null>(null);

      useEffect(() => {
          setLoading(true);
          fetchDocuments()
              .then(docs => setDocuments(docs))
              .catch(err => setError(err.message))
              .finally(() => setLoading(false));
      }, []);

      const fetchDocuments = async (): Promise<Document[]> => {
          // Replace with actual data fetching logic
          return [];
      };

      return {
          documents,
          searchTerm,
          setSearchTerm,
          filterStatus,
          setFilterStatus,
          loading,
          error
      };
  }

  