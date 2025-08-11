// Pages/ActivityDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../Styles/ActivityDetail.css";

export default function ActivityDetail() {
  const { activityName } = useParams();
  const [duration, setDuration] = useState(null);
  const [timeLeft, setTimeLeft] = useState(null);
  const [timerActive, setTimerActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handleDurationSelect = (minutes) => {
    setDuration(minutes);
    setTimeLeft(minutes * 60);
    setTimerActive(true);
    setIsPaused(false);
  };

  useEffect(() => {
    let timer;
    if (timerActive && !isPaused && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setTimerActive(false);
      alert(`${activityName} session complete! 🎉`);
    }
    return () => clearInterval(timer);
  }, [timeLeft, timerActive, isPaused, activityName]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="activity-detail-container">
      <h1>{activityName}</h1>

      {!duration && (
        <div className="duration-selector">
          <p>Select a duration:</p>
          <button onClick={() => handleDurationSelect(10)}>10 mins</button>
          <button onClick={() => handleDurationSelect(20)}>20 mins</button>
          <button onClick={() => handleDurationSelect(30)}>30 mins</button>
        </div>
      )}

      {duration && (
        <div className="timer-section center-timer">
          <h2>Time Remaining</h2>
          <div className="timer-display">{formatTime(timeLeft)}</div>
          <button
            className="pause-button"
            onClick={() => setIsPaused((prev) => !prev)}
          >
            {isPaused ? "Resume" : "Pause"}
          </button>
        </div>
      )}
    </div>
  );
}