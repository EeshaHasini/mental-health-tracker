import React, { useEffect, useState } from 'react';
import '../../Styles/MoodCalendar.css';

function MoodCalendar() {
  const [moodData, setMoodData] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('moodLogs')) || {};
    setMoodData(data);
  }, []);

  const getEmoji = (date) => moodData[date] || '⬜';

  const generateCalendar = () => {
    const days = [];
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth(); // 0-indexed

    const firstDay = new Date(year, month, 1).getDay();
    const numDays = new Date(year, month + 1, 0).getDate();

    // Fill empty slots
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="day empty"></div>);
    }

    // Fill actual days
    for (let d = 1; d <= numDays; d++) {
      const date = `${year}-${(month + 1).toString().padStart(2, '0')}-${d.toString().padStart(2, '0')}`;
      days.push(
        <div key={date} className="day">
          <div className="date-label">{d}</div>
          <div className="mood-emoji">{getEmoji(date)}</div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="mood-calendar">
      <h2>🗓️ Your Mood Calendar</h2>
      <div className="calendar-grid">
        {generateCalendar()}
      </div>
    </div>
  );
}

export default MoodCalendar;
