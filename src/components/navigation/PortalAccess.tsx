import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext.js';
import { useNotificationStore } from '../../lib/store.js';
import { Button } from '../../components/ui/Button.js';
import { PORTAL_CONFIGS } from '../../services/navigation/portalConfig.js';
import type { LucideIcon } from 'lucide-react';

// ✅ Define Props Interface for PortalButton
interface PortalButtonProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  requiredRole?: string[];
}

const PortalButton: React.FC<PortalButtonProps> = ({ title, description, icon: Icon, path, requiredRole = [] }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const { addNotification } = useNotificationStore();

  const handleAccess = () => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: path } });
      return;
    }

    if (requiredRole && (!user?.role || !requiredRole.includes(user.role))) {
      addNotification('You do not have permission to access this portal. Please contact support for assistance.', 'error');
      return;
    }

    navigate(path);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-blue-50 rounded-lg">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="ml-3 text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <Button
        variant="primary"
        onClick={handleAccess}
        className="w-full"
        aria-label={`Access ${title}`}
      >
        Access Portal
      </Button>
    </div>
  );
};

// ✅ Dynamically Generates Portal Buttons
export const PortalAccess: React.FC = () => {
  const { user } = useAuth();
  
  // ✅ Filter only the portals the user can access
  const availablePortals = Object.values(PORTAL_CONFIGS).filter((portal: any) => 
    !portal.requiredRole || portal.requiredRole.includes(user?.role ?? "")
  ) as { id: any; title: any; description: any; icon: any; path: any; requiredRole?: string[] }[];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {availablePortals.map((portal: { id: any; title: any; description: any; icon: any; path: any; requiredRole?: string[] }) => (
        <PortalButton
          key={portal.id}
          title={portal.title}
          description={portal.description}
          icon={portal.icon}
          path={portal.path}
          requiredRole={portal.requiredRole}
        />
      ))}
    </div>
  );
};