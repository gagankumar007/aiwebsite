import React, { useState } from 'react'; 

const About = () => {

      const [showMore, setShowMore] = useState(false); // State to toggle read more
    
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
  )
}

export default About