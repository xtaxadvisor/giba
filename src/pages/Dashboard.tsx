import React from "react";
import { Routes, Route } from "react-router-dom";
import { DashboardHome } from "../components/dashboard/DashboardHome";
import { Messages } from "../components/dashboard/Messages";
import Documents from "../components/dashboard/Documents";
import { Calendar } from "../components/dashboard/Calendar";
import { Settings } from "../components/dashboard/Settings";
import { DashboardLayout } from "../components/dashboard/DashboardLayout";
import { RevenueChart } from "@/components/professional/charts/RevenueChart";
import { ConsultationList } from "@/components/consultation/ConsultationList";

// ✅ Revenue data for the chart
const revenueData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Revenue",
      data: [65000, 59000, 80000, 81000, 86000, 95000, 89000, 90000, 92000, 96000, 98000, 105000],
      fill: true,
      borderColor: "rgb(59, 130, 246)",
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      tension: 0.4,
    },
    {
      label: "Target",
      data: [70000, 72000, 75000, 78000, 82000, 85000, 88000, 90000, 93000, 95000, 98000, 100000],
      borderColor: "rgba(107, 114, 128, 0.5)",
      borderDash: [5, 5],
      fill: false,
      tension: 0.4,
    },
  ],
};

// ✅ Dashboard Component
export default function Dashboard() {
  return (
    <DashboardLayout>
      {/* Dashboard Home with RevenueChart */}
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Dashboard Overview</h1>
        <RevenueChart data={revenueData} />
      </div>

      {/* Routes for different dashboard sections */}
      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="/consultations" element={<ConsultationList />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </DashboardLayout>
  );
}