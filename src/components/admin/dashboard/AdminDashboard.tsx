import React from "react";
import { Users, FileText, Clock, TrendingUp } from "lucide-react";
import Card from "@/components/ui/Card.js"; // Ensure this is the correct component that supports 'title', 'value', and 'description' props.
import { AdminMetrics } from "./AdminMetrics.js";
import { RecentActivity } from "./RecentActivity.js";
import { SystemStatus } from "./SystemStatus.js";
// Removed redundant declaration of AdminDashboard
const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Dashboard Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
      </div>

      {/* Dashboard Summary Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Total Users"
          value="1,234"
          description="24 new this week"
        />
        <Card
          title="Total Documents"
          value="5,678"
          description="142 pending review"
        />
        <Card
          title="System Health"
          value="98.5%"
          description="All systems operational"
        />
      </div>

      {/* Metrics & Activity Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AdminMetrics />
        <RecentActivity />
      </div>

      {/* System Status Section */}
      <SystemStatus />
    </div>
  );
};

export default AdminDashboard;