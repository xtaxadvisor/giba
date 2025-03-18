export interface PerformanceData {
    // define the structure of PerformanceData here
    metric: string;
    value: number;
}
interface PerformanceIndicatorProps {
    data: PerformanceData;
    threshold: number;
}
export declare function PerformanceIndicator({ data, threshold }: PerformanceIndicatorProps): any;
export {};
