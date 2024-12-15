import React, { useState } from 'react';
import './App.css';

function Navbar() {
    return (
        <div className="navbar">
            <div>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="buttons">
                {/* Changed to a button or add a real href if needed */}
                <button onClick={() => window.location.href='/booking'} className="button">Book Now</button>
            </div>
        </div>
    );
}

function HeroSection() {
    return (
        <div className="hero-section">
            <div>
                <h1>Welcome To Pulseinnovas</h1>
                <p>Transforming Healthcare with the Power of Artificial Intelligence</p>
            </div>
        </div>
    );
}

function About() {
    const [showMore, setShowMore] = useState(false);

    const toggleReadMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="content-section" id="about">
            <h2>About Us</h2>
            <p>
                Artificial intelligence (AI) has become a ubiquitous presence streamlining tasks across various sectors including the medical field. Leveraging the comprehensive medical knowledge typically encountered during both undergraduate and some postgraduate medical education, this AI has been meticulously trained. It utilizes Python, a versatile programming language, to adeptly conduct medical histories mirroring the nuances of patient interactions. The AI's capabilities are further refined through reinforcement learning, a process bolstered by human feedback. During this training, the AI is presented with simulated patient histories, tasked with diagnosing conditions and recommending treatments. This AI only deals with medical elective services (OPD services).
            </p>
            <div className="read-more">
                <button onClick={toggleReadMore}>{showMore ? 'Read Less' : 'Read More'}</button>
            </div>
            {showMore && (
                <div>
                    <p>Key capabilities of this AI include:</p>
                    <ul>
                        <li>Conducting detailed medical histories through conversations in Hindi, Punjabi, and English.</li>
                        <li>Diagnosing medical conditions and proposing appropriate treatment plans.</li>
                        <li>Suggesting medical tests that align with the patient's history.</li>
                        <li>Analyzing medical test results to confirm diagnoses, ensuring a comprehensive and reliable medical evaluation.</li>
                        <li>After consultation, the AI generates a PDF file of the full prescription encompassing patient details, diagnosis, medical test, and treatment plans which is downloaded by the patient.</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

function Services() {
    return (
        <div className="content-section" id="services">
            <h2>Our Services</h2>
            <div className="services-columns">
                <div className="services-column">
                    <h3>For Individual Customers</h3>
                    <p>We provide medical elective consultation services at home through our AI for a nominal fee. We give our patients a downloadable prescription PDF at the end of the consultation and also analyze medical reports for a better understanding of your disease diagnosis and treatment.</p>
                </div>
                <div className="services-column">
                    <h3>For Space Companies</h3>
                    <p>We loan out our AI medical care API to customers on a contract basis. Our AI is trained in space medical data to handle medical conditions in space and deep space (Moon and Mars).</p>
                </div>
            </div>
        </div>
    );
}

function Contact() {
    return (
        <div className="content-section" id="contact">
            <h2>Contact Us</h2>
            <p>Interested in our services or have questions? Contact us at <a href="mailto:info@xyz.com">info@aihealthcare.com</a> to learn more.</p>
        </div>
    );
}

function Footer() {
    return (
        <div className="footer">
            <p>AI Healthcare &copy; 2024. All rights reserved.</p>
        </div>
    );
}

// If you want to use these components, import them in App or remove them
// function Login() { ... }
// function Booking() { ... }

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