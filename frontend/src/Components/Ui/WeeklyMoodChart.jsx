import React, { useEffect, useState } from "react";
import {BarChart,Bar,XAxis,YAxis, Tooltip,CartesianGrid,ResponsiveContainer} from "recharts";
import api from "../../ServicesJS/api"; // same axios instance

export default function WeeklyMoodChart() {
  const [chartData, setChartData] = useState([]);

  const moodValues = {
    delighted: 5,
    happy: 4,
    calm: 3,
    sad: 2,
    angry: 1
  };

  useEffect(() => {
    const fetchMoods = async () => {
      try {
        const { data } = await api.get("/moods/week"); // endpoint should return last 7 days
        // Example expected data: [{ date: "2025-08-05", mood: "happy" }, ...]

        const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const now = new Date();
        const dayIndex = now.getDay();
        const sunday = new Date(now);
        sunday.setDate(now.getDate() - dayIndex);

        const formattedData = weekDays.map((day, i) => {
          const dateObj = new Date(sunday);
          dateObj.setDate(sunday.getDate() + i);
          const dateKey = dateObj.toISOString().split("T")[0];

          const entry = data.find((item) => item.date === dateKey);
          return {
            day,
            moodValue: entry ? moodValues[entry.mood] || 0 : 0
          };
        });

        setChartData(formattedData);
      } catch (err) {
        console.error("Failed to fetch moods:", err);
      }
    };

    fetchMoods();
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
