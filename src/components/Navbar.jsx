import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      <div className="text-2xl font-bold">Pulseinnovas</div>

      {/* Hamburger Icon */}
      <button
        className="block md:hidden text-gray-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </button>

      {/* Navigation Links */}
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } absolute md:static top-16 left-0 w-full md:w-auto md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 bg-white md:bg-transparent shadow-md md:shadow-none z-10`}
      >
        <a href="#home" className="text-gray-700 hover:underline px-4 md:px-0">
          Home
        </a>
        <a href="#about" className="text-gray-700 hover:underline px-4 md:px-0">
          About
        </a>
        <a
          href="#services"
          className="text-gray-700 hover:underline px-4 md:px-0"
        >
          Services
        </a>
        <a
          href="#contact"
          className="text-gray-700 hover:underline px-4 md:px-0"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
