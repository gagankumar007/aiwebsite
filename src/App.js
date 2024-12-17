import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import About from './components/About';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <About />
            <Services />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
