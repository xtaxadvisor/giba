import React from "react";
import { PersonalizedTabs } from './PersonalizedTabs.js';
import { useAuth } from '../../contexts/AuthContext.js';

export function DashboardHome() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="space-y-8">
      <PersonalizedTabs />
    </div>
  );
}