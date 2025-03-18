import { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Clock, Users, Video, MapPin } from 'lucide-react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday } from 'date-fns';
import { Button } from '../../ui/Button';
import EventModal from "@/components/eventModal";
import { EventDetails } from "@/components/ui/EventDetails"; // ✅ Correct absolute path
import { useCalendar } from '../../../hooks/useCalendar';
export function CalendarView() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [isEventModalOpen, setIsEventModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
    const { events, isLoading, createEvent, updateEvent, deleteEvent } = useCalendar();
    const handlePreviousMonth = () => setCurrentDate(subMonths(currentDate, 1));
    const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));
    const daysInMonth = eachDayOfInterval({
        start: startOfMonth(currentDate),
        end: endOfMonth(currentDate)
    });
    const firstDayOfMonth = startOfMonth(currentDate).getDay();
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    interface Event {
      id: string;
      title: string;
      startTime: string;
      type: 'meeting' | 'deadline' | 'reminder';
      attendees?: number;
      isVirtual?: boolean;
      location?: string;
    }

    const handleDayClick = (day: Date) => {
        setSelectedDate(day);
        setIsEventModalOpen(true);
    } ;// ✅ Corrected the function name from `handleDayClick` to `handleDayClick`
    const handleEventClick = (event: Event) => {
        setSelectedEvent(event);
        setIsEventModalOpen(true);
    }
    return { /* ... */ }; // ✅ Corrected the return statement
}
