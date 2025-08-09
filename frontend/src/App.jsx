
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Pages/Login';
import Dashboard from './Components/Pages/Dashboard';
import Profile from './Components/Pages/Profile';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import MoodCalendar from './Components/Pages/MoodCalender';
import Settings from './Components/Pages/Settings';
import ActivityBox from "./Components/Pages/ActivityBox";
import ActivityDetail from "./Components/Pages/ActivityDetail";
import DailyLog from "./Components/Pages/DailyLog";
import QuickNotePhoto from "./Components/Pages/QuickNotePhoto";



function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/mood-calendar" element={<MoodCalendar />} />
     <Route path = "/settings" element = {<Settings/>}/>
      <Route path="/activities" element={<ActivityBox />} />
        <Route path="/activity/:activityName" element={<ActivityDetail />} /> 
        <Route path = "/dailylog" element = {<DailyLog/>} />
        <Route path = "/quicknotephoto" element = {<QuickNotePhoto/>} />




      </Routes>
    </Router>
  );
}

export default App;

