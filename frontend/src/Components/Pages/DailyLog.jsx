// src/Pages/DailyLog.jsx
// import React, { useState } from 'react';
// import '../../Styles/DailyLog.css';

// const DailyLog = () => {
//   const [log, setLog] = useState('');
//   const [savedLog, setSavedLog] = useState('');

//   const handleSave = () => {
//     if (log.trim()) {
//       setSavedLog(log);
//       setLog('');
//       alert("Daily log saved!");
//     }
//   };

//   return (
//     <div className="daily-log-container">
//       <h2>📝 Daily Log</h2>

//       <textarea
//         value={log}
//         onChange={(e) => setLog(e.target.value)}
//         placeholder="Write your thoughts, feelings, or daily reflection here..."
//         className="log-textarea"
//       ></textarea>

//       <button className="save-button" onClick={handleSave}>Save Log</button>

//       {savedLog && (
//         <div className="saved-log">
//           <h3>🧠 Last Saved Entry:</h3>
//           <p>{savedLog}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DailyLog;
import React, { useState, useEffect } from "react";
import "../../Styles/DailyLog.css";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";


const DailyLog = () => {
  const [log, setLog] = useState("");
  const [savedMessage, setSavedMessage] = useState("");

  const handleSave = () => {
    const currentDate = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
    localStorage.setItem(`dailyLog-${currentDate}`, log);
    setSavedMessage("✔️ Log saved successfully!");
    setTimeout(() => setSavedMessage(""), 3000);
  };

  useEffect(() => {
    const currentDate = new Date().toISOString().split("T")[0];
    const savedLog = localStorage.getItem(`dailyLog-${currentDate}`);
    if (savedLog) {
      setLog(savedLog);
    }
  }, []);

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

