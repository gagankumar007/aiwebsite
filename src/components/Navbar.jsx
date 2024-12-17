const Navbar = () => {
    return (
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
        <div className="text-2xl font-bold">
        Pulseinnovas
        </div>
        <nav className="flex space-x-6">
          <a href="#home" className="text-gray-700 hover:underline">
            Home
          </a>
          <a href="#about" className="text-gray-700 hover:underline">
            About
          </a>
          <a href="#services" className="text-gray-700 hover:underline">
            Services
          </a>
          <a href="#contact" className="text-gray-700 hover:underline">
            Contact
          </a>
        </nav>
      </header>
    );
  };
  
  export default Navbar;
  