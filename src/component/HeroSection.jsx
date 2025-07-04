import React, { useState } from 'react';
import { Activity, Mail } from 'lucide-react';

function App() {
    const [showMore, setShowMore] = useState(false);

    const toggleReadMore = () => {
        setShowMore(!showMore);
    };
    const handleCardClick = () => {
        window.location.href = "/AppPage";
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">
                            WELCOME TO THE HOUSE OF INNOVATIONS
                        </h1>
                    </div>
                    
                    {/* Company Logo/Brand */}
                    <div className="flex items-center justify-center mb-8">
                        <Activity className="h-12 w-12 mr-4 text-blue-200" />
                        <h2 className="text-3xl md:text-4xl font-bold tracking-wider">
                            PULSEINNOVAS PVT LTD
                        </h2>
                    </div>
                    
                    <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
                        Democratizing Healthcare with the Power of Artificial Intelligence
                    </p>
                </div>
            </div>

            {/* Main Services Cards */}
            <div className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {/* Medical Model Card */}
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <div className="text-center">
                                <Activity className="h-16 w-16 mx-auto mb-6 text-blue-100" />
                                <h3 className="text-2xl font-bold mb-4">
                                    PulseInnovas Medical Model
                                </h3>
                                <p className="text-blue-100 text-lg">
                                    AI-powered medical diagnosis and treatment recommendations
                                </p>
                            </div>
                        </div>

                        {/* FiTXi Card */}
                        <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                         onClick={handleCardClick}>
                            <div className="text-center">
                                <div className="text-6xl font-bold mb-6 text-indigo-100">
                                    FiTXi
                                </div>
                                <p className="text-indigo-100 text-lg">
                                    Advanced healthcare intelligence platform
                                </p>
                            </div>
                        </div>

                        {/* Foundational Model Card */}
                        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-6 text-blue-100">
                                    🧠
                                </div>
                                <h3 className="text-2xl font-bold mb-4">
                                    Foundational Model
                                </h3>
                                <p className="text-blue-100 text-lg">
                                    Core AI infrastructure for medical applications
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Company Branding Footer */}
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center mb-4">
                            <Activity className="h-8 w-8 mr-3 text-blue-600" />
                            <h2 className="text-2xl font-bold text-blue-800 tracking-wider">
                                PULSEINNOVAS PVT LTD
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Us Section */}
            <div className="bg-white py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">About Us</h2>
                    <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Artificial intelligence (AI) has become a ubiquitous presence streamlining tasks across various sectors including the medical field. Leveraging the comprehensive medical knowledge typically encountered during both undergraduate and some postgraduate medical education, this AI has been meticulously trained. It utilizes Python, a versatile programming language, to adeptly conduct medical histories mirroring the nuances of patient interactions. The AI's capabilities are further refined through reinforcement learning, a process bolstered by human feedback. During this training, the AI is presented with simulated patient histories, tasked with diagnosing conditions and recommending treatments. This AI only deals with medical elective services (OPD services).
                        </p>
                        
                        <div className="text-center mb-4">
                            <button 
                                onClick={toggleReadMore}
                                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                            >
                                {showMore ? 'Read Less' : 'Read More'}
                            </button>
                        </div>
                        
                        {showMore && (
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <p className="text-gray-700 mb-4 font-medium">Key capabilities of this AI include:</p>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-2">•</span>
                                        Conducting detailed medical histories through conversations in Hindi, Punjabi, and English.
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-2">•</span>
                                        Diagnosing medical conditions and proposing appropriate treatment plans.
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-2">•</span>
                                        Suggesting medical tests that align with the patient's history.
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-2">•</span>
                                        Analyzing medical test results to confirm diagnoses, ensuring a comprehensive and reliable medical evaluation.
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-2">•</span>
                                        After consultation, the AI generates a PDF file of the full prescription encompassing patient details, diagnosis, medical test, and treatment plans which is downloaded by the patient.
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="bg-gray-50 py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-2xl font-bold mb-4 text-blue-600">For Hospitals</h3>
                            <p className="text-gray-700 leading-relaxed">
                                At PulseInnovas, we specialize in transforming traditional hospitals into AI-assisted healthcare environments by seamlessly integrating advanced technologies across OPD, IPD, ICUs, and Operating Theaters. Our intelligent solutions streamline workflows, automate documentation, and employ predictive analytics to help clinicians make data-driven decisions.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-2xl font-bold mb-4 text-indigo-600">For Space Companies</h3>
                            <p className="text-gray-700 leading-relaxed">
                                We loan out our AI medical care API to customers on a contract basis. Our AI is trained in space medical data to handle medical conditions in space and deep space (Moon and Mars).
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="bg-blue-600 text-white py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
                    <div className="bg-blue-700 p-8 rounded-2xl shadow-lg">
                        <p className="text-blue-100 mb-6 text-lg">
                            Interested in our services or have questions? We'd love to hear from you.
                        </p>
                        <div className="flex items-center justify-center">
                            <Mail className="h-6 w-6 mr-3 text-blue-200" />
                            <a 
                                href="mailto:info@pulseinnovas.com" 
                                className="text-white hover:text-blue-200 transition-colors duration-200 text-lg font-medium"
                            >
                                info@pulseinnovas.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-800 text-white py-8 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="flex items-center justify-center mb-4">
                        <Activity className="h-6 w-6 mr-2 text-blue-400" />
                        <p className="text-blue-400 font-medium">
                            Pulseinnovas &copy; 2024. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;