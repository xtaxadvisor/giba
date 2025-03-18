export interface CreateEventDTO {
    id: string;
    title: string;
    start: Date;
    end: Date;
}
export interface UpdateEventDTO {
    id: string;
    title?: string;
    start?: Date;
    end?: Date;
}
