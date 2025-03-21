import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Plus, Clock, Users, Video, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';

// Updated Calendar.js code to include the 'icon' prop
export default function Card({ icon: Icon, title, value, description }) {
    return (
      <div>
        {Icon && <Icon />}
        <h2>{title}</h2>
        <p>{value}</p>
        <p>{description}</p>
      </div>
    );
  }
export function Calendar() {
    const [currentDate] = useState(new Date());
    const [events, setEvents] = useState([]);
    useEffect(() => {
        const loadEvents = async () => {
            try {
                const events = await fetchEvents();
                setEvents(events);
            }
            catch (error) {
                console.error('Error fetching events:', error);
            }
        };
        loadEvents();
    }, []);
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const generateCalendarDays = () => {
        const days = [];
        const previousMonthDays = firstDayOfMonth;
        // Previous month days
        for (let i = previousMonthDays - 1; i >= 0; i--) {
            days.push({ day: 0, isCurrentMonth: false });
        }
        // Current month days
        for (let i = 1; i <= daysInMonth; i++) {
            days.push({ day: i, isCurrentMonth: true });
        }
        return days;
    };
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const calendarDays = generateCalendarDays();
    const getEventsForDate = (day) => {
        const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        return events.filter(event => event.date === dateStr);
    };
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsxs("div", { className: "flex items-center space-x-4", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Calendar" }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Button, { variant: "outline", icon: ChevronLeft, children: undefined }), _jsx("span", { className: "text-lg font-medium", children: currentDate.toLocaleString('default', { month: 'long', year: 'numeric' }) }), _jsx(Button, { variant: "outline", icon: ChevronRight, children: "Next" })] })] }), _jsx(Button, { variant: "primary", icon: Plus, children: "New Event" })] }), _jsxs("div", { className: "flex gap-6", children: [_jsx("div", { className: "flex-1", children: _jsx("div", { className: "bg-white rounded-lg shadow", children: _jsxs("div", { className: "grid grid-cols-7 gap-px bg-gray-200", children: [weekDays.map(day => (_jsx("div", { className: "bg-gray-50 p-2 text-center text-sm font-medium text-gray-500", children: day }, day))), calendarDays.map((day, index) => (_jsxs("div", { className: `bg-white p-2 min-h-[100px] ${day.isCurrentMonth ? 'text-gray-900' : 'text-gray-400'}`, children: [_jsx("div", { className: "font-medium mb-1", children: day.day || '' }), day.isCurrentMonth && day.day > 0 && getEventsForDate(day.day).map(event => (_jsx("div", { className: `text-xs p-1 mb-1 rounded ${event.type === 'meeting'
                                                    ? 'bg-blue-100 text-blue-800'
                                                    : event.type === 'deadline'
                                                        ? 'bg-red-100 text-red-800'
                                                        : 'bg-yellow-100 text-yellow-800'}`, children: event.title }, event.id)))] }, index)))] }) }) }), _jsx("div", { className: "w-80", children: _jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [_jsx("h2", { className: "text-lg font-medium text-gray-900 mb-4", children: "Upcoming Events" }), _jsx("div", { className: "space-y-4", children: events.map(event => (_jsxs("div", { className: "border-l-4 border-blue-500 pl-4 py-2", children: [_jsx("h3", { className: "font-medium text-gray-900", children: event.title }), _jsxs("div", { className: "mt-1 space-y-1", children: [_jsxs("div", { className: "flex items-center text-sm text-gray-500", children: [_jsx(Clock, { className: "h-4 w-4 mr-1" }), event.time] }), event.participants && (_jsxs("div", { className: "flex items-center text-sm text-gray-500", children: [_jsx(Users, { className: "h-4 w-4 mr-1" }), event.participants.join(', ')] })), event.isVirtual && (_jsxs("div", { className: "flex items-center text-sm text-gray-500", children: [_jsx(Video, { className: "h-4 w-4 mr-1" }), "Virtual Meeting"] })), event.location && (_jsxs("div", { className: "flex items-center text-sm text-gray-500", children: [_jsx(MapPin, { className: "h-4 w-4 mr-1" }), event.location] }))] })] }, event.id))) })] }) })] })] }));
}
// Import the fetchEvents function from the calendar service
import { fetchEvents } from '../../services/api/calendar';
