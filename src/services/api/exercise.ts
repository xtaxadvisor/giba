import { api } from '../api.js';
import type { Exercise as StudentExercise } from '../../types/student.js';
export type Exercise = {
  difficulty: string;
  duration: number;
  description: string;
  title: string;
  points: number;
  id: string;
  name: string;
  // other fields
};

// Ensure the local Exercise type is distinct from the imported StudentExercise type

export const exerciseService = {
  getExercises: () => 
    api.get<Exercise[]>('/exercises'),

  getExerciseById: (id: string) => 
    api.get<Exercise>(`/exercises/${id}`),

  startExercise: (id: string) => 
    api.post<{ sessionId: string }>(`/exercises/${id}/start`),

  submitExercise: (id: string, answers: Record<string, any>) => 
    api.post<{ score: number; feedback: string[] }>(`/exercises/${id}/submit`, answers),

  getProgress: () => 
    api.get<{
      completed: number;
      total: number;
      points: number;
      recentScores: Array<{ date: string; score: number }>;
    }>('/exercises/progress')
};