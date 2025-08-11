// src/Pages/DailyLog.jsx

import React, { useState, useEffect } from "react";
import "../../Styles/DailyLog.css";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import api from "../../ServicesJS/api"; // Axios instance with baseURL + auth token

const DailyLog = () => {
  const [log, setLog] = useState("");
  const [savedMessage, setSavedMessage] = useState("");
  const [todayEntryId, setTodayEntryId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Helper to get just date in YYYY-MM-DD format from a date string
  const getDateOnly = (dateStr) => new Date(dateStr).toISOString().split("T")[0];

  useEffect(() => {
    // Fetch all journal entries, then find if today's entry exists
    const fetchTodayEntry = async () => {
      try {
        const res = await api.get("/journals");
        // find today's entry if any
        const todayDate = new Date().toISOString().split("T")[0];
        const todayEntry = res.data.find(
          (entry) => getDateOnly(entry.createdAt) === todayDate
        );
        if (todayEntry) {
          setLog(todayEntry.content);
          setTodayEntryId(todayEntry._id);
        }
      } catch (err) {
        console.error("Failed to fetch journals", err);
      }
    };
    fetchTodayEntry();
  }, []);

  const handleSave = async () => {
    if (!log.trim()) {
      alert("Please write something before saving.");
      return;
    }
    setLoading(true);
    try {
      if (todayEntryId) {
        // Optionally: if you want to support updating today's entry,
        // you can add a PUT /journals/:id route on backend
        // For now, just alert user that only one entry per day is allowed.
        alert("You have already saved today's log.");
      } else {
        await api.post("/journals", { content: log });
        setSavedMessage("✔️ Log saved successfully!");
        setTimeout(() => setSavedMessage(""), 3000);
        // Refetch to update today's entry ID
        const res = await api.get("/journals");
        const todayDate = new Date().toISOString().split("T")[0];
        const todayEntry = res.data.find(
          (entry) => getDateOnly(entry.createdAt) === todayDate
        );
        if (todayEntry) setTodayEntryId(todayEntry._id);
      }
    } catch (err) {
      console.error("Error saving journal", err);
      alert("Failed to save log. Try again.");
    }
    setLoading(false);
  };

  return (
    <>
    <Header/>
    <div className="dailylog-page">
      <h2 className="dailylog-heading">📝 Daily Reflection</h2>
      <textarea
        value={log}
        onChange={(e) => setLog(e.target.value)}
        placeholder="Write your thoughts, feelings, or reflections here..."
        className="dailylog-textarea"
      />
      <button className="dailylog-save-btn" onClick={handleSave}>
        Save Log
      </button>
      {savedMessage && <p className="saved-message">{savedMessage}</p>}
    </div>
    <Footer/>
    </>
  );
};

export default DailyLog;

