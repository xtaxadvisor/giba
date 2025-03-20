import React from 'react';
import { ProgressHeader } from './ProgressHeader.js';
import { ProgressMetrics } from './ProgressMetrics.js';
import { ProgressChart } from './ProgressChart.js';
import { AchievementList } from './AchievementList.js';

export function ProgressTracking() {
  return (
    <div className="space-y-6">
      <ProgressHeader />
      <ProgressMetrics />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProgressChart />
        <AchievementList />
      </div>
    </div>
  );
}