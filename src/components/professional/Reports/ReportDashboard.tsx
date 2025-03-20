import React, { useState } from 'react';
import { Download, Filter, Calendar } from 'lucide-react';
import { Button } from '../../ui/Button.js';
import { Select } from '../../ui/Select.js';
import { FinancialReport } from './FinancialReport.js';
import { ClientReport } from './ClientReport.js';
import { PerformanceReport } from '../../client/PerformanceReport.js';
import { useReports } from '../../../hooks/useReports.js';
import { ReportFilters } from './ReportFilters.js';
import { ReportExport } from './ReportExport.js';

export function ReportDashboard() {
  const {
    dateRange,
    setDateRange,
    reportType,
    setReportType,
    metrics,
    isLoading,
    exportReport
  } = useReports();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
        <div className="flex items-center space-x-4">
          <ReportFilters
            dateRange={dateRange}
            setDateRange={setDateRange}
            reportType={reportType}
            setReportType={setReportType}
          />
          <ReportExport onExport={exportReport} />
        </div>
      </div>

      {reportType === 'financial' && (
        <FinancialReport dateRange={dateRange} isLoading={isLoading} />
      )}
      
      {reportType === 'client' && (
        <ClientReport dateRange={dateRange} isLoading={isLoading} />
      )}
      
      {reportType === 'performance' && (
        <PerformanceReport dateRange={dateRange} isLoading={isLoading} />
      )}
    </div>
  );
}