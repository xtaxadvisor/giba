import React from 'react';
import { ExerciseHeader } from './ExerciseHeader.js';
import { ExerciseList } from './ExerciseList.js';

export function PracticeExercises() {
  return (
    <div className="space-y-6">
      <ExerciseHeader />
      <ExerciseList />
    </div>
  );
}