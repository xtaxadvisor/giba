import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";

import { useAuth } from '../../contexts/AuthContext';
import { FileText, Video, Calendar, TrendingUp, BookOpen, Users, Settings, BarChart, Layout, Shield } from 'lucide-react';
export function PersonalizedTabs() {
    const { user } = useAuth();
    const [activeTab, setActiveTab] = React.useState('');
    const getTabs = () => {
        switch (user?.role) {
            case 'client':
                return [
                    { id: 'tax-services', label: 'Tax Services', icon: FileText, count: 3 },
                    { id: 'video-classes', label: 'Video Classes', icon: Video, count: 5 },
                    { id: 'consultations', label: 'Consultations', icon: Calendar, badge: '2 Upcoming' }
                ];
            case 'investor':
                return [
                    { id: 'financial-advisory', label: 'Financial Advisory', icon: TrendingUp },
                    { id: 'portfolio-tools', label: 'Portfolio Tools', icon: BarChart },
                    { id: 'video-classes', label: 'Video Classes', icon: Video, count: 8 }
                ];
            case 'professional':
                return [
                    { id: 'training', label: 'Training & Compliance', icon: Shield },
                    { id: 'resources', label: 'Resources & Templates', icon: BookOpen },
                    { id: 'consultations', label: 'Consultations', icon: Calendar, badge: '5 Scheduled' }
                ];
            case 'admin':
                return [
                    { id: 'user-management', label: 'User Management', icon: Users },
                    { id: 'service-monitoring', label: 'Service Monitoring', icon: Layout },
                    { id: 'content-management', label: 'Content Management', icon: Settings },
                    { id: 'analytics', label: 'Analytics & Insights', icon: BarChart }
                ];
            default:
                return [];
        }
    };
    const tabs = getTabs();
    React.useEffect(() => {
        if (tabs.length > 0 && !activeTab) {
            setActiveTab(tabs[0].id);
        }
    }, [tabs, activeTab]);
    if (!user)
        return null;
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white", children: [_jsxs("h2", { className: "text-2xl font-bold", children: ["Welcome back, ", user.name, "!"] }), _jsxs("p", { className: "mt-1 text-blue-100", children: [user.role ? (user.role.charAt(0).toUpperCase() + user.role.slice(1)) : 'Unknown', " Account"] })] }), _jsx("div", { className: "border-b border-gray-200", children: _jsx("nav", { className: "-mb-px flex space-x-8", children: tabs.map((tab) => (_jsxs("button", { onClick: () => setActiveTab(tab.id), className: `
                group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm
                ${activeTab === tab.id
                            ? 'border-blue-500 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
              `, children: [React.createElement(tab.icon, {
                                className: `
                  mr-2 h-5 w-5
                  ${activeTab === tab.id ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'}
                `
                            }), _jsx("span", { children: tab.label }), tab.count !== undefined && (_jsx("span", { className: `
                  ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium
                  ${activeTab === tab.id
                                    ? 'bg-blue-100 text-blue-600'
                                    : 'bg-gray-100 text-gray-900'}
                `, children: tab.count })), tab.badge && (_jsx("span", { className: "ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium bg-green-100 text-green-800", children: tab.badge }))] }, tab.id))) }) }), _jsx("div", { className: "mt-6", children: activeTab === 'tax-services' && (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: _jsx("div", { className: "bg-white rounded-lg shadow p-6", children: _jsx("h3", { className: "text-lg font-medium text-gray-900", children: "Recent Tax Filings" }) }) })) })] }));
}
