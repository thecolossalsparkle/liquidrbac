import React from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth } from 'date-fns';

const Calendar = ({ selectedDate, onDateSelect, currentMonth, currentYear }) => {
  const firstDayOfMonth = startOfMonth(new Date(currentYear, currentMonth - 1));
  const lastDayOfMonth = endOfMonth(new Date(currentYear, currentMonth - 1));
  
  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth
  });

  const startingDayIndex = firstDayOfMonth.getDay();
  const blanks = Array(startingDayIndex).fill(null);

  return (
    <div className="p-4">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">
        {format(firstDayOfMonth, 'MMMM yyyy')}
      </h2>
      
      {/* Calendar Grid */}
      <div className="max-w-sm mx-auto">
        {/* Day Headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div 
              key={day} 
              className="text-center text-sm font-medium text-gray-600"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-1">
          {blanks.map((_, index) => (
            <div key={`blank-${index}`} className="aspect-square" />
          ))}
          
          {daysInMonth.map(date => {
            const isCurrentDate = format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd');
            const isThisMonth = isSameMonth(date, firstDayOfMonth);
            
            return (
              <button
                key={date.toString()}
                onClick={() => onDateSelect(date)}
                className={`
                  aspect-square flex items-center justify-center
                  text-sm sm:text-base rounded-full transition-all
                  ${isCurrentDate 
                    ? 'bg-blue-500 text-white hover:bg-blue-600' 
                    : 'hover:bg-blue-50'
                  }
                  ${isThisMonth 
                    ? 'text-gray-700' 
                    : 'text-gray-300'
                  }
                `}
              >
                {format(date, 'd')}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar; 