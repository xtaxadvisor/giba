import type { Exercise } from '../../types/student';
export declare const exerciseService: {
    getExercises: () => Promise<Exercise[]>;
    getExerciseById: (id: string) => Promise<Exercise>;
    startExercise: (id: string) => Promise<{
        sessionId: string;
    }>;
    submitExercise: (id: string, answers: Record<string, any>) => Promise<{
        score: number;
        feedback: string[];
    }>;
    getProgress: () => Promise<{
        completed: number;
        total: number;
        points: number;
        recentScores: Array<{
            date: string;
            score: number;
        }>;
    }>;
};
