import React from "react";

import { TeamMemberCard } from './TeamMemberCard.js';
import { teamMembers } from '../../data/teamData.js';
import { useMediaQuery } from '../../utils/hooks/index.js';

export function TeamGrid() {
  const isMobile = useMediaQuery('(max-width: 640px)');
  const isTablet = useMediaQuery('(min-width: 641px) and (max-width: 1024px)');

  return (
    <div className={`grid gap-8 ${
      isMobile ? 'grid-cols-1' : 
      isTablet ? 'grid-cols-2' : 
      'grid-cols-3'
    }`}>
      {teamMembers.map((member) => (
        <TeamMemberCard
          key={member.id}
          {...member}
        />
      ))}
    </div>
  );
}