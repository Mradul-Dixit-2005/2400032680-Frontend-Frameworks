import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './Login.jsx';         // yahi sahi path hai
import Dashboard from './Dashboard.jsx';     // yahi sahi path hai

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
