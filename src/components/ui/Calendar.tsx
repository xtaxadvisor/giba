import React, { useState } from 'react';

interface DateRange {
  start: Date;
  end: Date;
}


// Add the 'icon' prop to the Card component
function Card({ icon: Icon, title, value, description }: { icon?: React.ComponentType; title: string; value: string; description: string }) {
  return (
    <div>
      {Icon && <Icon />}
      <h2>{title}</h2>
      <p>{value}</p>
      <p>{description}</p>
    </div>
  );
}interface CalendarProps {
  /** Selection mode: "single" (one date) or "range" (start + end) */
  mode?: 'single' | 'range';
  /** Initially selected date (for single mode) */
  defaultSelectedDate?: Date;
  /** Initially selected date range (for range mode) */
  defaultSelectedRange?: DateRange;
  /** Callback when a date is selected (single mode) */
  onDateSelect?: (date: Date) => void;
  /** Callback when a date range is selected (range mode, called when both start & end chosen) */
  onRangeSelect?: (range: DateRange) => void;
  /** Dates to disable (user cannot select these) */
  disabledDates?: Date[];
  /** Additional CSS classes for the calendar container */
  className?: string;
}

const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const weekDays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

const Calendar: React.FC<CalendarProps> = ({
  mode = 'single',
  defaultSelectedDate,
  defaultSelectedRange,
  onDateSelect,
  onRangeSelect,
  disabledDates = [],
  className = ''
}) => {
  // State for the currently visible month/year
  const [viewDate, setViewDate] = useState<Date>(defaultSelectedDate ?? defaultSelectedRange?.start ?? new Date());
  const currentMonth = viewDate.getMonth();
  const currentYear = viewDate.getFullYear();

  // State for selected date(s)
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    defaultSelectedDate ?? null
  );
  const [rangeStart, setRangeStart] = useState<Date | null>(
    defaultSelectedRange?.start ?? null
  );
  const [rangeEnd, setRangeEnd] = useState<Date | null>(
    defaultSelectedRange?.end ?? null
  );

  // Helper to move calendar view to previous/next month
  const prevMonth = () => {
    setViewDate(new Date(currentYear, currentMonth - 1, 1));
  };
  const nextMonth = () => {
    setViewDate(new Date(currentYear, currentMonth + 1, 1));
  };

  // Determine number of days in current month and leading/trailing blanks
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); // 0=Sun...6=Sat
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const blankDaysBefore = firstDayOfMonth;       // how many empty cells at start
  const totalCells = blankDaysBefore + daysInMonth;
  const blankDaysAfter = totalCells % 7 === 0 ? 0 : (7 - (totalCells % 7));

  // Utility to compare two dates (year-month-day) for equality
  const isSameDay = (d1: Date, d2: Date) => 
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();

  // Handle a day cell click
  const handleDayClick = (date: Date) => {
    // ignore if disabled
    const isDisabled = disabledDates.some(dis => isSameDay(dis, date));
    if (isDisabled) return;

    if (mode === 'single') {
      setSelectedDate(date);
      onDateSelect && onDateSelect(date);  // callback to parent
    } else if (mode === 'range') {
      if (!rangeStart || (rangeStart && rangeEnd)) {
        // no range start set, or a full range already selected – start new range
        setRangeStart(date);
        setRangeEnd(null);
      } else if (rangeStart && !rangeEnd) {
        // one end set (start), selecting the other end
        if (date < rangeStart) {
          // if second date is before start, treat this as new start
          setRangeStart(date);
        } else if (date >= rangeStart) {
          setRangeEnd(date);
          onRangeSelect && onRangeSelect({ start: rangeStart, end: date });
        }
      }
    }
  };

  // Generate an array of day cells (including blanks)
  const days: Array<null | Date> = [];
  for (let i = 0; i < blankDaysBefore; i++) {
    days.push(null);  // push blank for days from previous month
  }
  for (let d = 1; d <= daysInMonth; d++) {
    days.push(new Date(currentYear, currentMonth, d));
  }
  for (let i = 0; i < blankDaysAfter; i++) {
    days.push(null);
  }

  return (
    <div className={`max-w-xs p-4 bg-white rounded shadow ${className}`}>
      {/* Header: Month navigation */}
      <div className="flex items-center justify-between mb-2">
        <button onClick={prevMonth} className="text-xl px-2">&#10094;</button>
        <span className="font-medium">{monthNames[currentMonth]} {currentYear}</span>
        <button onClick={nextMonth} className="text-xl px-2">&#10095;</button>
      </div>

      {/* Weekday labels */}
      <div className="grid grid-cols-7 text-center text-sm font-semibold text-gray-700 mb-1">
        {weekDays.map(day => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Days grid */}
      <div className="grid grid-cols-7 text-center">
        {days.map((date, idx) => {
          if (date === null) {
            // empty cell (prev/next month)
            return <div key={idx} className="text-transparent">0</div>;
          }

          const dayNum = date.getDate();
          const isDisabled = disabledDates.some(dis => isSameDay(dis, date));
          // Determine selection status for styling
          let isSelected = false, isStart = false, isEnd = false, isInRange = false;
          if (mode === 'single') {
            isSelected = selectedDate !== null && isSameDay(date, selectedDate);
          } else if (mode === 'range') {
            if (rangeStart && isSameDay(date, rangeStart)) {
              isStart = true;
              isSelected = true;
            }
            if (rangeEnd && isSameDay(date, rangeEnd)) {
              isEnd = true;
              isSelected = true;
            }
            if (rangeStart && rangeEnd && date > rangeStart && date < rangeEnd) {
              isInRange = true;
            }
          }

          // Tailwind classes for different states
          const baseClasses = "w-8 h-8 mx-auto flex items-center justify-center rounded-full";
          const textClasses = isDisabled ? "text-gray-400" : "";
          let bgClasses = "";
          if (isSelected) {
            bgClasses = "bg-blue-500 text-white";  // selected start/end
          } else if (isInRange) {
            bgClasses = "bg-blue-100 text-blue-600";  // between start and end
          } else if (!isDisabled) {
            bgClasses = "hover:bg-gray-200 cursor-pointer";
          }

          return (
            <div 
              key={idx} 
              onClick={() => handleDayClick(date)} 
              className={`${baseClasses} ${bgClasses} ${textClasses}`}
            >
              {dayNum}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;