import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import HeroSection from './component/HeroSection';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {
    return (
        <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
    </Router>
    );
}

export default App;

