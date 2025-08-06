
import React from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import '../../Styles/Dashboard.css';
import { useLocation } from 'react-router-dom';
import MoodInput from '../Ui/MoodInput';


function Dashboard() {
      const location = useLocation();
  const username = location.state?.username || 'User';
  const email= location.state?.email || 'user@example.com' ;
   
   
    return (
        <div className="dashboard-container">
            <Header  username={username} email= { email }/>

            <main className="dashboard-grid">
        
                <div className="activity box">Activity</div>
                <div className="chart box">Chart</div>
            <MoodInput />
                <div className="quicknote box">Quick Note<br />+ Photo + Voice</div>
                <div className="dailylog box">Daily Log</div>
                <div className="convo box">Conversations or Weekly Challenges</div>
            </main>

            <Footer />
        </div>
    );
}

export default Dashboard;
