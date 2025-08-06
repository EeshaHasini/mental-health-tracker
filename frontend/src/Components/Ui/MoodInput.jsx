import React from 'react';
// import '../../Styles/MoodInput.css';

function MoodInput() {
  const handleMoodClick = (moodEmoji) => {
    const today = new Date().toISOString().split('T')[0];
    const storedMoods = JSON.parse(localStorage.getItem('moodLogs')) || {};
    storedMoods[today] = moodEmoji;
    localStorage.setItem('moodLogs', JSON.stringify(storedMoods));
    alert(`Mood saved for today: ${moodEmoji}`);
  };

  return (
    <div className="box mood">
      <h2>How was your mood today?</h2>
      <div className="emojis">
        <button onClick={() => handleMoodClick('😠')}>😠<div>Angry</div></button>
        <button onClick={() => handleMoodClick('😞')}>😞<div>Sad</div></button>
        <button onClick={() => handleMoodClick('🙂')}>🙂<div>Calm</div></button>
        <button onClick={() => handleMoodClick('😊')}>😊<div>Happy</div></button>
        <button onClick={() => handleMoodClick('😁')}>😁<div>Delighted</div></button>
      </div>
    </div>
  );
}

export default MoodInput;
