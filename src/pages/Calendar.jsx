import React, { useState } from 'react';
import Calendar from '../components/calendar/Calendar';
import MonthYearPicker from '../components/calendar/MonthYearPicker';
import InstallmentTable from '../components/calendar/InstallmentTable';
import Card from '../components/common/Card';

const Installments = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [installments, setInstallments] = useState([]); // This would be populated from your API

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    // Here you would typically fetch installments for the selected date
    // fetchInstallments(date);
  };

  const handleMonthChange = (month) => {
    setCurrentMonth(parseInt(month));
  };

  const handleYearChange = (year) => {
    setCurrentYear(parseInt(year));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-900">
          INSTALLMENTS
        </h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Calendar Section */}
        <div className="lg:col-span-5">
          <Card className="h-full">
            <Calendar
              selectedDate={selectedDate}
              onDateSelect={handleDateSelect}
              currentMonth={currentMonth}
              currentYear={currentYear}
            />
            
            <MonthYearPicker
              month={currentMonth}
              year={currentYear}
              onMonthChange={handleMonthChange}
              onYearChange={handleYearChange}
            />

            <div className="mt-6 px-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <span className="font-medium whitespace-nowrap">SELECTED DATE:</span>
                <input
                  type="text"
                  value={selectedDate.toLocaleDateString()}
                  readOnly
                  className="w-full sm:w-auto border rounded px-3 py-1.5 bg-gray-50"
                />
              </div>
            </div>
          </Card>
        </div>

        {/* Table Section */}
        <div className="lg:col-span-7">
          <Card className="h-full overflow-hidden">
            <InstallmentTable installments={installments} />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Installments; 