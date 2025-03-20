import React from 'react';
import { ExerciseCard } from './ExerciseCard.js';
import { useExercises } from '../../../hooks/useExercises.js';
import type { Exercise } from '../../../services/api/exercise.js';
import { LoadingSpinner } from '../../ui/LoadingSpinner.js';
import { UseMutateFunction } from '@tanstack/react-query';

export function ExerciseList() {
  const { exercises, isLoading, startExercise: rawStartExercise } = useExercises() as { exercises: Exercise[]; isLoading: boolean; startExercise: UseMutateFunction<unknown, Error, void, unknown> };

  const startExercise = (id: string) => {
    rawStartExercise();
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {exercises.map((exercise: Exercise) => (
      <ExerciseCard
        key={exercise.id}
        exercise={exercise}
        onStart={startExercise}
      />
      ))}
    </div>
  );
}