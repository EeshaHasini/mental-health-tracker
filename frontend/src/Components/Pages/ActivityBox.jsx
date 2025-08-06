// Pages/ActivityBox.jsx
import React from "react";
import ActivityCard from "../Ui/ActivityCard";
import "../../Styles/ActivityBox.css";



const activities = [
  { name: "Meditation", icon: "/assets/meditate.jpg" },
  { name: "Reading", icon: "/assets/read.jpg" },
  { name: "Dance", icon: "/assets/dance.jpg" },

];

export default function ActivityBox() {
  return (
    <div className="activity-box">
      <h2 className="activity-title">Today's Activities</h2>
      <div className="activity-grid">
        {activities.map((activity) => (
          <ActivityCard
            key={activity.name}
            icon={activity.icon}
            name={activity.name}
          />
        ))}
      </div>
    </div>
  );
}
