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
export declare function calculateProcessingTime(startTime: string): string;
/**
 * ⏳ Estimate Remaining Time Based on Progress
 * @param {number} completedSteps - Number of completed steps
 * @param {number} totalSteps - Total steps
 * @param {string} startTime - The start time of the process
 * @returns {string} - Estimated time remaining
 */
export declare function estimateRemainingTime(completedSteps: number, totalSteps: number, startTime: string): string;
/**
 * ✅ Calculate the Percentage of Steps Completed
 * @param {ProcessingStep[]} steps - Array of processing steps
 * @returns {number} - Percentage of completed steps
 */
export declare function calculateStepProgress(steps: ProcessingStep[]): number;
/**
 * ✅ Export Default Function
 */
export default calculateProcessingTime;
