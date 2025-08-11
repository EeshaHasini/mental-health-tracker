import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function WeeklyMoodChart() {
  const [chartData, setChartData] = useState([]);

  const moodValues = {
    "😁": 5,
    "😊": 4,
    "🙂": 3,
    "😞": 2,
    "😠": 1
  };

  useEffect(() => {
    const logs = JSON.parse(localStorage.getItem("moodLogs")) || {};
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const now = new Date();
    const dayIndex = now.getDay();
    const sunday = new Date(now);
    sunday.setDate(now.getDate() - dayIndex);

    const data = weekDays.map((day, i) => {
      const dateObj = new Date(sunday);
      dateObj.setDate(sunday.getDate() + i);
      const dateKey = dateObj.toISOString().split("T")[0];

      const mood = logs[dateKey];
      return {
        day,
        moodValue: mood ? moodValues[mood] || 0 : 0
      };
    });

    setChartData(data);
  }, []);

  return (
    <div style={{ width: "100%", height: 300 }}>
      <h2>Weekly Mood Chart</h2>
      <ResponsiveContainer>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis domain={[0, 5]} />
          <Tooltip />
          <Bar dataKey="moodValue" fill="#4f46e5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
