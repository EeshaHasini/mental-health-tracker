import React, { useState, useEffect } from "react";
import "../../Styles/ActivityCard.css";

export default function ActivityCard({ icon, name }) {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [remainingTime, setRemainingTime] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  const handleIconClick = () => {
    setShowMenu(!showMenu);
  };

  const handleTimeSelect = (minutes) => {
    const durationInSeconds = minutes * 60;
    setSelectedTime(durationInSeconds);
    setRemainingTime(durationInSeconds);
    setTimerActive(true);
    setShowMenu(false);
  };

  useEffect(() => {
    let interval = null;
    if (timerActive && remainingTime > 0) {
      interval = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
    } else if (timerActive && remainingTime === 0) {
      clearInterval(interval);
      setTimerActive(false);
      alert(`Time's up for ${name}! 🌟 Great job!`);
    }
    return () => clearInterval(interval);
  }, [timerActive, remainingTime, name]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" + s : s}`;
  };

  return (
    <div className="activity-card" role="region" aria-label={`Activity: ${name}`}> 
      <button
        className="activity-button"
        onClick={handleIconClick}
        aria-haspopup="true"
        aria-expanded={showMenu}
        aria-label={`Select time for ${name}`}
      >
        <img src={icon} alt={name} className="activity-icon" />
        <p className="activity-name">{name}</p>
      </button>

      {showMenu && (
        <div className="dropdown" role="menu">
          {[5, 10, 20].map((min) => (
            <button
              key={min}
              className="dropdown-item"
              onClick={() => handleTimeSelect(min)}
              role="menuitem"
            >
              {min} minutes
            </button>
          ))}
        </div>
      )}

      {timerActive && (
        <div className="timer" aria-live="polite">
          Time Remaining: {formatTime(remainingTime)}
        </div>
      )}
    </div>
  );
}
