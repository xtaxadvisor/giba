import { differenceInSeconds, formatDuration, intervalToDuration } from 'date-fns';

/**
 * Type for Analytics Metrics
 */
export type AnalyticsMetrics = {
  totalRevenue: number;
  avgTransaction: number;
  growth: number;
  pendingTransactions: number;
};

/**
 * Type for Findings Data
 */
export type FindingsData = {
  id: string;
  message: string;
  severity: 'low' | 'medium' | 'high';
};

/**
 * Type for Processing Step
 */
export interface ProcessingStep {
  id: string;
  status: 'pending' | 'completed' | 'failed';
}

/**
 * ⏳ Calculate Processing Time
 * @param {string} startTime - The start time of the process
 * @returns {string} - Formatted duration since start time
 */
export function calculateProcessingTime(startTime: string): string {
  const seconds = differenceInSeconds(new Date(), new Date(startTime));

  return (
    formatDuration(
      intervalToDuration({
        start: 0,
        end: seconds * 1000, // Convert seconds to milliseconds
      }),
      { format: ['minutes', 'seconds'] }
    ) || '0 seconds' // Prevents returning an empty string
  );
}

/**
 * ⏳ Estimate Remaining Time Based on Progress
 * @param {number} completedSteps - Number of completed steps
 * @param {number} totalSteps - Total steps
 * @param {string} startTime - The start time of the process
 * @returns {string} - Estimated time remaining
 */
export function estimateRemainingTime(
  completedSteps: number,
  totalSteps: number,
  startTime: string
): string {
  if (completedSteps === 0) return 'Calculating...';

  const elapsedSeconds = differenceInSeconds(new Date(), new Date(startTime));
  const secondsPerStep = elapsedSeconds / completedSteps;
  const remainingSteps = totalSteps - completedSteps;
  const remainingSeconds = remainingSteps * secondsPerStep;

  return (
    formatDuration(
      intervalToDuration({
        start: 0,
        end: remainingSeconds * 1000, // Convert to milliseconds
      }),
      { format: ['minutes', 'seconds'] }
    ) || '0 seconds' // Ensures valid return
  );
}

/**
 * ✅ Calculate the Percentage of Steps Completed
 * @param {ProcessingStep[]} steps - Array of processing steps
 * @returns {number} - Percentage of completed steps
 */
export function calculateStepProgress(steps: ProcessingStep[]): number {
  if (!steps.length) return 0; // Avoid division by zero

  const completedSteps = steps.filter((s) => s.status === 'completed').length;
  return Math.round((completedSteps / steps.length) * 100);
}

/**
 * ✅ Export Default Function
 */
export default calculateProcessingTime;