import { ReactNode } from 'react';
export interface Consultation {
    [x: string]: any;
    status: string;
    type: ReactNode;
    startTime: string | number | Date;
}
export interface ScheduleConsultationDTO {
    date: string;
    time: string;
    clientId: string;
    consultantId: string;
}
export declare const consultationService: {
    getAll: () => Promise<Consultation[]>;
    getById: (id: string) => Promise<Consultation>;
    create: (data: any) => Promise<Consultation>;
    update: (id: string, data: any) => Promise<Consultation>;
    delete: (id: string) => Promise<void>;
    initiateConsultation: (serviceType: string) => Promise<string>;
};
