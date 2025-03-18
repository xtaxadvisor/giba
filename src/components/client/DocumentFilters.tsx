import React from "react";

type DocumentFiltersProps = {
  filters: {
    status?: string;
    type?: string;
    searchQuery?: string;
  };
  onFilterChange: (filters: any) => void;
};

export const DocumentFilters: React.FC<DocumentFiltersProps> = ({ filters, onFilterChange }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Filter Documents</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by name..."
          value={filters.searchQuery || ""}
          onChange={(e) => onFilterChange({ ...filters, searchQuery: e.target.value })}
          className="p-2 border rounded w-full"
        />

        {/* Status Filter */}
        <select
          value={filters.status || ""}
          onChange={(e) => onFilterChange({ ...filters, status: e.target.value })}
          className="p-2 border rounded w-full"
        >
          <option value="">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>

        {/* Type Filter */}
        <select
          value={filters.type || ""}
          onChange={(e) => onFilterChange({ ...filters, type: e.target.value })}
          className="p-2 border rounded w-full"
        >
          <option value="">All Types</option>
          <option value="pdf">PDF</option>
          <option value="word">Word Document</option>
          <option value="excel">Excel</option>
        </select>
      </div>
    </div>
  );
};