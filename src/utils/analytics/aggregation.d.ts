import type { TimeSeriesData } from '../../types/analytics';
export declare function aggregateTimeSeries(data: Array<{
    date: string;
    value: number;
}>): TimeSeriesData;
export declare function calculateMovingAverage(data: number[], windowSize?: number): number[];
