
import React from "react";
import ActivityCard from "../Ui/ActivityCard";
import "../../Styles/ActivityBox.css";
import { Link } from "react-router-dom";

const activities = [
  { name: "Meditation", icon: "/assets/meditate.jpg" },
  { name: "Reading", icon: "/assets/read.jpg" },
  { name: "Dance", icon: "/assets/dance.jpg" },
  { name: "Exercise", icon: "/assets/exercise.jpg" },
];

export default function ActivityBox() {
  return (
   
    <div className="activity-box">
      <h2 className="activity-title">Activities</h2>
      <div className="activity-grid">
        {activities.map((activity) => (
          <Link
            key={activity.name}
            to={`/activity/${activity.name.toLowerCase()}`} // ✅ dynamic routing
            style={{ textDecoration: 'none', color: 'inherit' }} // optional, to remove link styles
          >
            <ActivityCard
              icon={activity.icon}
              name={activity.name}
            />
          </Link>
        ))}
      </div>
    </div>
   
  
  );
}
