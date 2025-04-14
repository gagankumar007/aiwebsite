import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import HeroSection from './component/HeroSection';
import PrivacyPolicy from './pages/PrivacyPolicy';
import About from './pages/About';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Contact from './pages/Contact';
import Services from './pages/Services';

function App() {
    return (
        <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Services />} />
        </Routes>
    </Router>
    );
}

export default App;

