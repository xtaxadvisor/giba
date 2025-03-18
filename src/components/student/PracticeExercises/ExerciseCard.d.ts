import type { Exercise } from '../../../types/student';
interface ExerciseCardProps {
    exercise: Exercise;
    onStart: (id: string) => void;
}
export declare function ExerciseCard({ exercise, onStart }: ExerciseCardProps): any;
export {};
