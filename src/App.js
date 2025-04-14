import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import HeroSection from './component/HeroSection';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Chat from './pages/chat';

function App() {
    return (
        <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/chat" element={<Chat/> } /> 
        </Routes>
    </Router>
    );
}

export default App;

