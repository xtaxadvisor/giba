export interface CreateEventDTO {
  id: string;
  title: string;
  start: Date;
  end: Date;
  // Other properties...
}

export interface UpdateEventDTO {
  id: string;
  title?: string;
  start?: Date;
  end?: Date;
  // Other properties...
}