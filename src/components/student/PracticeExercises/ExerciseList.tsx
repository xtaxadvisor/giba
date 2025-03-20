import React from 'react';
import { ExerciseCard } from './ExerciseCard.js';
import { useExercises } from '../../../hooks/useExercises.js';
import { LoadingSpinner } from '../../ui/LoadingSpinner.js';

/**
 * @typedef {Object} Exercise
 * @property {string} id - The unique identifier for the exercise.
 * @property {string} [title] - The title of the exercise.
 * @property {string} [description] - The description of the exercise.
 * @property {number} [duration] - The duration of the exercise in minutes.
 * @property {string} [difficulty] - The difficulty level of the exercise.
 */

/**
 * @typedef {Object} UseExercisesReturn
 * @property {Exercise[]} exercises - The list of exercises.
 * @property {boolean} isLoading - Whether the exercises are still loading.
 * @property {(id: string) => void} startExercise - Function to start an exercise.
 */

/**
 * @returns {JSX.Element}
 */
export function ExerciseList() {
  const { exercises, isLoading, startExercise: rawStartExercise } =
    /** @type {UseExercisesReturn} */ (useExercises());

  const startExercise = (id: string) => {
    rawStartExercise(id);
    // You can handle points logic here if needed, e.g., console.log or state update
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {exercises.map((exercise) => {
        const exerciseProps = {
          id: exercise.id,
          title: exercise.title || 'Untitled',
          description: exercise.description || 'No description available',
          duration: exercise.duration?.toString() || '0',
          difficulty: (['beginner', 'intermediate', 'advanced'].includes(exercise.difficulty)
            ? exercise.difficulty
            : 'beginner') as 'beginner' | 'intermediate' | 'advanced', // Cast to the expected type
          points: exercise.points || 0, // Default to 0 if points are not provided
        };
        return (
          <ExerciseCard
            key={exercise.id}
            exercise={{ ...exerciseProps }} // Spread the exercise props to avoid mutation issues in the child component
            onStart={startExercise} // Pass the startExercise function as a prop to the child component for handling exercise start logic  
          />
        );
      })}
    </div>
  );
}