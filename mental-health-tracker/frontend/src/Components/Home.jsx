
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../Styles/Home.css';


function Home() {
    const location = useLocation();
    const username = location.state?.username || 'User';

    return (
        <div className="container">
            {/* Sidebar */}
            <div className="sidebar">
                <ul>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/mood-calendar">Mood Calendar📅</Link></li>
                    <li><Link to="/level">Level</Link></li>
                    <li><Link to="/progress">Progress</Link></li>
                    <li><Link to="/avatar">Avatar Upgrade🐨</Link></li>
                      <li><Link to="/habitTracking">Habit Tracking</Link></li>
                    <li><Link to="/about">About Us🍀</Link></li>
                    <li><Link to="/logout">Log Out ➡️</Link></li>
                </ul>
            </div>

            {/* Main Area */}
            <div className="main">
                {/* Top Welcome Section */}
                <div className="top-header">
                    <span className="login-avatar">
                       <img src="C:\Users\akshi\my-app\public\assets\panda.png" alt="Koala" />
                    </span>
                    <span className="welcome">Welcome back, {username}!🌿</span>
                </div>

                {/* Grid content */}
                <div className="grid">
                    <div className="box mood">
                        <h2>How was your mood today?</h2>
                        <center>
                            <div className="emojis">
                                <button><span>😠</span></button>
                                <div>Angry</div>
                                <button><span>😞</span></button>
                                <div>Sad</div>
                                <button><span>🙂</span></button>
                                <div>Calm</div>
                                <button><span>😊</span></button>
                                <div>Happy</div>
                                <button><span>😁</span></button>
                                <div>Delighted</div>
                            </div>
                        </center>
                    </div>

                    <div className="box journal">
                        <h2>Wanna write a journal?</h2>
                        <textarea placeholder="Write here..."></textarea>
                    </div>

                    <div className="box daily-log">
                        <h2>Daily Log</h2>
                        <textarea placeholder="Write here..."></textarea>
                    </div>

                    <div className="box challenges">
                        <p>Complete goals and track progress!</p>
                        <br />
                        <h2>Weekly Challenges</h2>
                    </div>

                    <div className="box communication">
                        <h3>Number of Conversations?</h3>
                        <input type="number" placeholder="Input number" />
                    </div>

                    <div className="box communication">
                        <h3>How many hours of sleep did you get?</h3>
                        <input type="number" placeholder="Input number" />
                    </div>
                    <div className='boxCongo'>
                        <h3>Congratulations!🎉</h3>
                        <br />
                        <br />
                        <h3>You are on level 1!!</h3>
                       
                    </div>

                    <div className="box meditate">
                        <h3>Wanna Meditate for 7 mins?</h3>
                        <br />
                        <br />
                         <center>
                    <Link to="/yes">YES</Link>
                    </center>
                    </div>

                    <div className="box read">
                        <h3>Wanna Read ?</h3>
                        <br />
                         <br /> 
                         
                          <center>
                    <Link to="/yes">YES</Link>
                    </center>


                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
