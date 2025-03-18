import React from 'react';

interface PerformanceReportProps {
  dateRange: string;
  isLoading: boolean;
}

export function PerformanceReport({ dateRange, isLoading }: PerformanceReportProps) {
  return (
    <div>
      <h2>Performance Report</h2>
      {isLoading ? <p>Loading...</p> : <p>Data for {dateRange}</p>}
    </div>
  );
}