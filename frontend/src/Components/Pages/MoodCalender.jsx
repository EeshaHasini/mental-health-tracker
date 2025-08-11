import React, { useEffect, useState } from 'react';
import '../../Styles/MoodCalendar.css';
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import api from "../../ServicesJS/api"; // axios instance

function MoodCalendar() {
  const [moodData, setMoodData] = useState({});

  // Fetch moods from backend
  useEffect(() => {
    const fetchMoods = async () => {
      try {
        const res = await api.get("/moods"); // GET from backend
        const moods = res.data;

        // Group moods by date
        const moodScore = { delighted: 5, happy: 4, calm: 3, sad: 2, angry: 1 };
        const dateMap = {};

        moods.forEach(m => {
          const dateStr = new Date(m.timestamp).toISOString().split('T')[0];
          if (!dateMap[dateStr]) dateMap[dateStr] = [];
          dateMap[dateStr].push(moodScore[m.mood]);
        });

        // Convert average scores back to moods
        const scoreMood = Object.entries(moodScore).reduce((acc, [mood, score]) => {
          acc[score] = mood;
          return acc;
        }, {});

        const averagedData = {};
        Object.keys(dateMap).forEach(date => {
          const avgScore = Math.round(
            dateMap[date].reduce((a, b) => a + b, 0) / dateMap[date].length
          );
          averagedData[date] = scoreMood[avgScore];
        });

        setMoodData(averagedData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMoods();
  }, []);

  const getEmoji = (date) => {
    const moodEmoji = {
      delighted: "🤩",
      happy: "😊",
      calm: "😌",
      sad: "😢",
      angry: "😠",
    };
    return moodEmoji[moodData[date]] || '⬜';
  };

  const generateCalendar = () => {
    const days = [];
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth(); // 0-indexed

    const firstDay = new Date(year, month, 1).getDay();
    const numDays = new Date(year, month + 1, 0).getDate();

    // Empty slots
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="day empty"></div>);
    }

    // Actual days
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
    <>
      <Header/>
      <div className="mood-calendar">
        <h2>🗓️ Your Mood Calendar</h2>
        <div className="calendar-grid">
          {generateCalendar()}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default MoodCalendar;
