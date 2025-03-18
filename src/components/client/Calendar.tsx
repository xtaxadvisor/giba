import React from "react";
import { useState } from "react";
import { Calendar as CalendarIcon } from "lucide-react";

interface Event {
  id: number;
  title: string;
  date: string;
}

export function Calendar() {
  // Example events
  const [events] = useState<Event[]>([
    { id: 1, title: "Tax Filing Deadline", date: "2024-03-15" },
    { id: 2, title: "Consultation with Advisor", date: "2024-03-20" },
  ]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
        <CalendarIcon className="h-6 w-6 mr-2" /> Upcoming Events
      </h1>
      <div className="space-y-4">
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event.id} className="p-3 border rounded-md shadow-md bg-gray-50">
              <h2 className="font-medium text-lg">{event.title}</h2>
              <p className="text-gray-600">{event.date}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No upcoming events.</p>
        )}
      </div>
    </div>
  );
}

export default Calendar;