import { useState } from 'react';

function About() {
    const [showMore, setShowMore] = useState(false);

    const toggleReadMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="bg-gray-50 p-8 rounded-lg shadow-md max-w-4xl mx-auto my-8" id="about">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">About Us</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Artificial intelligence (AI) has become a ubiquitous presence streamlining tasks across various sectors including the medical field. Leveraging the comprehensive medical knowledge typically encountered during both undergraduate and some postgraduate medical education, this AI has been meticulously trained. It utilizes Python, a versatile programming language, to adeptly conduct medical histories mirroring the nuances of patient interactions. The AI's capabilities are further refined through reinforcement learning, a process bolstered by human feedback. During this training, the AI is presented with simulated patient histories, tasked with diagnosing conditions and recommending treatments. This AI only deals with medical elective services (OPD services).
            </p>
            <div className="text-center mb-4">
                <button
                    onClick={toggleReadMore}
                    className="px-6 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    {showMore ? 'Read Less' : 'Read More'}
                </button>
            </div>
            {showMore && (
                <div className="mt-6">
                    <p className="text-xl font-semibold text-gray-800 mb-4">Key capabilities of this AI include:</p>
                    <ul className="list-disc pl-6 text-gray-700 text-lg space-y-3">
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

export default About;
