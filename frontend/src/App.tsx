// frontend/src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignUp from './pages/Auth/SignUp'; 
import Login from './pages/Auth/Login';
import DashboardPage from './pages/Dashboard/DashboardPage'; 
import SettingsPage from './pages/Dashboard/SettingsPage';
import HelpPage from './pages/Dashboard/HelpPage';
import UploadPage from './pages/Dashboard/UploadPage';
import CleanPage from './pages/Dashboard/CleanPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/settings" element={<SettingsPage />} />
        <Route path="/dashboard/help" element={<HelpPage />} />
        <Route path="/dashboard/upload" element={<UploadPage />} />
        <Route path="/dashboard/clean" element={<CleanPage />} />
      </Routes>
    </Router>
  );
}

export default App;