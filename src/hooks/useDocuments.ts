import { useState, useEffect } from "react";

interface Document {
  id: string;
  name: string;
  type: string;
  size: string;
  uploadedAt: string;
  status: "pending" | "approved" | "rejected";
}

export function useDocuments() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDocuments() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("/api/documents");
        if (!response.ok) throw new Error("Failed to fetch documents");
        const data = await response.json();
        setDocuments(data);
      } catch (err) {
        setError("Could not load documents.");
      } finally {
        setLoading(false);
      }
    }

    fetchDocuments();
  }, []);

  const filteredDocuments = documents.filter((doc) =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterStatus === "all" || doc.status === filterStatus)
  );

  return {
    documents: filteredDocuments,
    searchTerm,
    setSearchTerm,
    filterStatus,
    setFilterStatus,
    loading,
    error,
  };
}