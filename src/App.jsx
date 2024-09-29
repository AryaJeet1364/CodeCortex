// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from './components/MainPage';
import Demo from './components/Demo.jsx';
import Navbar from "./components/Navbar";
import Loader from './components/Loader'; // Import the Loader

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Change duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader /> // Show loader while loading
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/demo" element={<Demo />} />
          </Routes>
        </>
      )}
    </Router>
  );
};

export default App;
