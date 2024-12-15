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
                <a href="/booking" className="button">Book Now</a>
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
                Artificial intelligence (AI) has become a ubiquitous presence streamlining tasks across various sectors including the medical field. Leveraging the comprehensive medical knowledge typically encountered during both undergraduate and some postgraduate medical education, this AI has been meticulously trained. It utilizes Python, a versatile programming language, to adeptly conduct medical histories mirroring the nuances of patient interactions. The AI’s capabilities are further refined through reinforcement learning, a process bolstered by human feedback. During this training, the AI is presented with simulated patient histories, tasked with diagnosing conditions and recommending treatments. This AI only deals with medical elective services (OPD services).
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
                        <li>Suggesting medical tests that align with the patient’s history.</li>
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
            <p>Interested in our services or have questions? Contact us at <a href="mailto:info@aihealthcare.com">info@aihealthcare.com</a> to learn more.</p>
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

function Login() {
    return (
        <div className="content-section">
            <h2>Login / Sign Up</h2>
            <div className="services-columns">
                <div className="services-column">
                    <h3>For Individuals</h3>
                    <form>
                        <label>Name:</label>
                        <input type="text" required /><br /><br />
                        <label>Age:</label>
                        <input type="number" required /><br /><br />
                        <label>Sex:</label>
                        <select required>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select><br /><br />
                        <label>Address:</label>
                        <input type="text" required /><br /><br />
                        <label>Date of Birth:</label>
                        <input type="date" required /><br /><br />
                        <label>Email ID:</label>
                        <input type="email" required /><br /><br />
                        <label>Phone Number:</label>
                        <input type="tel" required /><br /><br />
                        <label>Password:</label>
                        <input type="password" required /><br /><br />
                        <label>Confirm Password:</label>
                        <input type="password" required /><br /><br />
                        <button type="submit">Register</button>
                    </form>
                </div>
                <div className="services-column">
                    <h3>For Businesses</h3>
                    <form>
                        <label>Company Name:</label>
                        <input type="text" required /><br /><br />
                        <label>Organisation ID:</label>
                        <input type="text" required /><br /><br />
                        <label>Password:</label>
                        <input type="password" required /><br /><br />
                        <label>Confirm Password:</label>
                        <input type="password" required /><br /><br />
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

function Booking() {
    return (
        <div className="content-section">
            <h2>Book a Consultation</h2>
            <form>
                <label>Name:</label>
                <input type="text" required /><br /><br />
                <label>Age:</label>
                <input type="number" required /><br /><br />
                <label>Sex:</label>
                <select required>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select><br /><br />
                <label>Address:</label>
                <input type="text" required /><br /><br />
                <label>Date of Birth:</label>
                <input type="date" required /><br /><br />
                <button type="submit">Pay Now</button>
            </form>
        </div>
    );
}

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
