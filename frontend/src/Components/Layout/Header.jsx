
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../Styles/Header.css';
import { useLocation } from 'react-router-dom';

function Header({ username , email}) {
    const navigate = useNavigate();
    const handleProfileClick= () => {
        navigate('/profile' , {state:{username,email}});
    };
     
  
  return (
    <header className="app-header">
      <div className="left-section" onClick={handleProfileClick} style={{ cursor: 'pointer' }}>
        <img src="/assets/panda.png" alt="Profile" className="profile-icon" />
        <span className="greeting">{ username}</span>
      </div>

      <nav className="nav-links">
        <Link to="/mood-calendar">Mood Calendar</Link>
        <Link to="/progress">Progress</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </header>
  );
}

export default Header;

