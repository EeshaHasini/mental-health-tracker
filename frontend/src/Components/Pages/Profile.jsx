import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../Styles/Profile.css';
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

function Profile() {
  const location = useLocation();
  const navigate = useNavigate();
  const username = location.state?.username || 'User';
  const email = location.state?.email || 'user@example.com';

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <>
    <Header/>
    <div className="profile-container">
      <h2>Your Profile</h2>
      <div className="profile-card">
        <img src="/assets/panda.png" alt="Avatar" className="profile-avatar" />
        <p><strong>Name:</strong> {username}</p>
        <p><strong>Email:</strong> {email}</p>

        <button className="profile-button">Upgrade Avatar </button>
        <button className="profile-button">View Photo Collection 📸</button>
        <button className="profile-button" onClick={handleLogout}>Log Out</button>
        <button className="profile-button">Tell Your Friends 💌</button>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Profile;
