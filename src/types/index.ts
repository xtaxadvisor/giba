export interface CreateEventDTO {
  id: string;
  title: string;
  start: Date;
  end: Date;
  // Other properties...
}// Add TimeSlot type to existing types
export interface TimeSlot {
  startTime: string;
  endTime: string;
  available: boolean;
}

// ... rest of the existing types