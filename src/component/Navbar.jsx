import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/service", label: "Services" },
        { to: "/contact", label: "Contact" },
        { to: "/privacy-policy", label: "Privacy Policy" },
        { to: "/terms-and-condition", label: "Terms & Conditions" },
        { to: "/cancel-and-refund", label: "Cancel & Refund" }
    ];

    return (
        <nav className="w-full bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Desktop Navigation */}
                <div className="hidden lg:flex justify-center items-center py-4">
                    <div className="flex space-x-8 items-center">
                        {navLinks.map((link, index) => (
                            <Link 
                                key={index}
                                to={link.to} 
                                className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className="lg:hidden">
                    <div className="flex justify-between items-center py-4">
                        <div className="text-xl font-bold text-gray-800">
                            Fitxi
                        </div>
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors duration-300"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="border-t border-gray-200 py-4">
                            <div className="flex flex-col space-y-2">
                                {navLinks.map((link, index) => (
                                    <Link 
                                        key={index}
                                        to={link.to} 
                                        className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-4 py-3 rounded-lg font-medium transition-all duration-300 text-center"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Tablet Navigation */}
                <div className="hidden md:flex lg:hidden justify-center items-center py-4">
                    <div className="grid grid-cols-3 gap-4 w-full max-w-2xl">
                        {navLinks.map((link, index) => (
                            <Link 
                                key={index}
                                to={link.to} 
                                className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-lg font-medium transition-all duration-300 text-center text-sm"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;