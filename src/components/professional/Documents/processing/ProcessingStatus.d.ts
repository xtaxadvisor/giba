import { ProcessingStep } from '../../../../types/documents';
interface ProcessingStatusProps {
    steps: ProcessingStep[];
    startTime: string;
}
export declare function ProcessingStatus({ steps, startTime }: ProcessingStatusProps): any;
export {};
