/* eslint-disable @typescript-eslint/no-explicit-any */
import { HealthMetric } from '../../../../types/client';
interface HealthScoreProps {
    score: number;
    metrics: HealthMetric[];
}
export declare function HealthScore({ score, metrics }: HealthScoreProps): any;
export {};
