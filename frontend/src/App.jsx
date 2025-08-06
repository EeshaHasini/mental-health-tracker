
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
     




      </Routes>
    </Router>
  );
}

export default App;

