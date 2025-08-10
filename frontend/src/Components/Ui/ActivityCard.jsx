
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/ActivityCard.css";

export default function ActivityCard({ name, icon }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/activity/${name.toLowerCase()}`);
  };

  return (
    <div className="activity-card" onClick={handleClick}>
      <img src={icon} alt={name} className="activity-icon" />
      <p className="activity-name">{name}</p>
    </div>
  );
}
