
import React from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import '../../Styles/Dashboard.css';
import { useLocation, useNavigate } from 'react-router-dom';
import MoodInput from '../Ui/MoodInput';
import ActivityBox from "./ActivityBox";
import { Link } from 'react-router-dom';
import QuickNotePhoto from "../Pages/QuickNotePhoto";
import WeeklyMoodChart from "../Ui/WeeklyMoodChart";


function Dashboard() {
    const location = useLocation();
    const username = location.state?.username || 'User';
    const email = location.state?.email || 'user@example.com';
    const navigate = useNavigate();



    return (
        <div className="dashboard-container">
            <Header username={username} email={email} />

            <main className="dashboard-grid">

                <div className="activity box">
                    <ActivityBox />
                </div>
                  <WeeklyMoodChart />

                <MoodInput />
                {/* <div className="card">
                    <h3>Quick Photo & Note</h3>
                    <QuickNotePhoto />
                </div> */}
                <div
                    onClick={() => navigate("/quicknotephoto")}
                    className="card quick-note-photo"
                    style={{ cursor: "pointer" }}
                >
                    <h3>Quick Photo & Note</h3>
                </div>

                <div onClick={() => navigate("/dailylog")} className="box dailylog">
                    <b>
                        DAILY LOG</b>
                    {/* <img src="/assets/log.jpg" alt="log" /> */}
                </div>
                <div className="convo box">Conversations or Weekly Challenges</div>
            </main>

            <Footer />
        </div>
    );
}

export default Dashboard;
