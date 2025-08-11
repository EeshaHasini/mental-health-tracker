//MoodInput.jsx
import React, { useState } from "react";
import api from "../../ServicesJS/api"; // Your Axios instance with baseURL + token

function MoodInput({ onMoodSaved }) {
  const [loading, setLoading] = useState(false);

  const handleMoodClick = async (mood) => {
    try {
      setLoading(true);
      await api.post("/moods", { mood }); // POST to backend
      alert(`Mood saved: ${mood}`);
      if (onMoodSaved) onMoodSaved(); // Tell parent to refresh chart
    } catch (error) {
      console.error(error);
      alert("Failed to save mood. Please try again.");
    } finally {
      setLoading(false);
    }
  };
 
  return (
    <div className="box mood">
      <h2>How was your mood today?</h2>
      <div className="emojis">
        <button onClick={() => handleMoodClick("angry")} disabled={loading}>😠<div>Angry</div></button>
        <button onClick={() => handleMoodClick("sad")} disabled={loading}>😞<div>Sad</div></button>
        <button onClick={() => handleMoodClick("calm")} disabled={loading}>🙂<div>Calm</div></button>
        <button onClick={() => handleMoodClick("happy")} disabled={loading}>😊<div>Happy</div></button>
        <button onClick={() => handleMoodClick("delighted")} disabled={loading}>😁<div>Delighted</div></button>
      </div>
    </div>
  );
}

export default MoodInput;
