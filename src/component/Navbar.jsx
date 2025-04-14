import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <div>
                <Link to="/#home">Home</Link>
                <Link to="/#about">About</Link>
                <Link to="/#services">Services</Link>
                <Link to="/#contact">Contact</Link>
                <Link to="/privacy-policy">Privacy policy</Link>
                <Link to="/chat">chat hai ya</Link>
            </div>
        </div>
    );
}

export default Navbar;
