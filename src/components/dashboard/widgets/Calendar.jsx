import React, { useState } from 'react';
import '../../../styles/dashboard/components/Calendar.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 0, 9)); // January 9, 2026
  const [viewMode, setViewMode] = useState('Month');

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1; // Monday as first day

    const days = [];
    
    // Previous month days
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startDay - 1; i >= 0; i--) {
      days.push({ day: prevMonthLastDay - i, isCurrentMonth: false });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, isCurrentMonth: true });
    }

    // Next month days
    const remainingDays = 42 - days.length; // 6 rows * 7 days
    for (let i = 1; i <= remainingDays; i++) {
      days.push({ day: i, isCurrentMonth: false });
    }

    return days;
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleToday = () => {
    setCurrentDate(new Date(2026, 0, 9));
  };

  const days = getDaysInMonth(currentDate);
  const selectedDay = 9;

  return (
    <div className="calendar-widget">
      {/* Calendar Header */}
      <div className="calendar-header">
        <h2 className="calendar-month">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <div className="calendar-header-right">
          <button className="today-btn" onClick={handleToday}>
            Today
          </button>
          <div className="calendar-nav">
            <button className="nav-btn" onClick={handlePrevMonth}>
              ‹
            </button>
            <button className="nav-btn" onClick={handleNextMonth}>
              ›
            </button>
          </div>
        </div>
      </div>

      {/* View Mode Tabs */}
      <div className="calendar-tabs">
        {['Day', 'Week', 'Month'].map((mode) => (
          <button
            key={mode}
            className={`tab-btn ${viewMode === mode ? 'active' : ''}`}
            onClick={() => setViewMode(mode)}
          >
            {mode}
          </button>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="calendar-grid-container">
        {/* Days of Week */}
        <div className="calendar-weekdays">
          {daysOfWeek.map((day) => (
            <div key={day} className="weekday">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="calendar-days">
          {days.map((dayObj, index) => (
            <div
              key={index}
              className={`calendar-day ${!dayObj.isCurrentMonth ? 'other-month' : ''} ${
                dayObj.day === selectedDay && dayObj.isCurrentMonth ? 'selected' : ''
              }`}
            >
              {dayObj.day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;