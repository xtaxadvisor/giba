import React from 'react';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Users, UserPlus, Activity } from 'lucide-react';
import { Card } from '../../ui/Card';
import { LineChart } from '../charts/LineChart';
import { useAnalytics } from '../../../hooks/useAnalytics';
export function UserAnalytics() {
    const { metrics } = useAnalytics('month');
    const stats = [
        {
            title: 'Total Users',
            value: metrics?.totalUsers || 0,
            change: '+12%',
            icon: Users
        },
        {
            title: 'New Users',
            value: metrics?.newUsers || 0,
            change: '+5%',
            icon: UserPlus
        },
        {
            title: 'Active Users',
            value: metrics?.activeUsers || 0,
            change: '+8%',
            icon: Activity
        },
    ];
    return (_jsxs("div", { className: "space-y-6", children: [_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: stats.map((stat) => (_jsx(Card, { title: stat.title, value: stat.value, description: stat.change, icon: stat.icon }, stat.title))) }), _jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "User Growth" }), _jsx(LineChart, {})] })] }));
}
