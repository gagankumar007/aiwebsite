import React, { useState } from 'react'; // Import useState for toggle functionality

function App() {
    const [showMore, setShowMore] = useState(false); // State to toggle read more

    const toggleReadMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="app-container">
            {/* Hero Section */}
            <div className="hero-section">
                <div>
                    <h1>Welcome To Pulseinnovas</h1>
                    <p>Democratizing Healthcare with the Power of Artificial Intelligence</p>
                </div>
            </div>

            {/* About Us Section */}
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

            {/* Services Section */}
            <div className="content-section" id="services">
                <h2>Our Services</h2>
                <div className="services-columns">
                    <div className="services-column">
                        <h3>For Hospitals</h3>
                        <p>At PulseInnovas, we specialize in transforming traditional hospitals into AI-assisted healthcare environments by seamlessly integrating advanced technologies across OPD, IPD, ICUs, and Operating Theaters. Our intelligent solutions streamline workflows, automate documentation, and employ predictive analytics to help clinicians make data-driven decisions </p>
                    </div>
                    <div className="services-column">
                        <h3>For Space Companies</h3>
                        <p>We loan out our AI medical care API to customers on a contract basis. Our AI is trained in space medical data to handle medical conditions in space and deep space (Moon and Mars).</p>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="content-section" id="contact">
                <h2>Contact Us</h2>
                <p>Interested in our services or have questions? Contact us at <a href="mailto:info@pulseinnovas.com">info@pulseinnovas.com</a> to learn more.</p>
            </div>

            {/* Footer Section */}
            <div className="footer">
                <div className="flex justify-center">
                    <p className="text-blue-500">Pulseinnovas &copy; 2024. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default App; // Exporting the single combined component
