import React from 'react';

function HeroSection() {
    return (
        <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center py-20 px-8 relative">
            {/* Background image overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

            {/* Content */}
            <div className="relative z-10">
                <h1 className="text-5xl font-extrabold mb-6 leading-tight">
                    Welcome To Pulseinnovas
                </h1>
                <p className="text-xl max-w-3xl mx-auto mb-6">
                    Democratizing Healthcare with the Power of Artificial Intelligence.
                    We bring cutting-edge solutions to transform healthcare, making it more accessible and affordable for everyone.
                </p>
                
            </div>
        </section>
    );
}

export default HeroSection;
