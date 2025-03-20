import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
// Updated Calendar.js code to include the 'icon' prop
// Add the 'icon' prop to the CalendarProps type
/**
 * @typedef {Object} CalendarProps
 * @property {React.ComponentType} icon - The icon component.
 * @property {string} title - The title of the calendar.
 * @property {string} value - The value of the calendar.
 * @property {string} description - The description of the calendar.
 */
  export function Calendar() {
    // Example events
    const [events] = useState([
        { id: 1, title: "Tax Filing Deadline", date: "2024-03-15" },
        { id: 2, title: "Consultation with Advisor", date: "2024-03-20" },
    ]);
    return (_jsxs("div", { className: "p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto", children: [_jsxs("h1", { className: "text-2xl font-semibold text-gray-900 mb-4 flex items-center", children: [_jsx(CalendarIcon, { className: "h-6 w-6 mr-2" }), " Upcoming Events"] }), _jsx("div", { className: "space-y-4", children: events.length > 0 ? (events.map((event) => (_jsxs("div", { className: "p-3 border rounded-md shadow-md bg-gray-50", children: [_jsx("h2", { className: "font-medium text-lg", children: event.title }), _jsx("p", { className: "text-gray-600", children: event.date })] }, event.id)))) : (_jsx("p", { className: "text-gray-500", children: "No upcoming events." })) })] }));
}
export default Calendar;
