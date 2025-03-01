import { Car, LogIn, Menu, User, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Car className="text-blue-600" size={28} />
          <span className="text-xl font-bold text-gray-800">DriveEase</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link to="/car-page" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Cars
          </Link>
          <Link to="/" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Locations
          </Link>
          <Link to="/" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
            About
          </Link>
          <Link to="/" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/Auth"
            className="flex items-center space-x-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <LogIn size={20} />
            <span>Login</span>
          </Link>
          <Link
            to="/Auth"
            className="flex items-center space-x-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <User size={20} />
            <span>Register</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 px-6 py-4 bg-gray-50 rounded-md">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/car-page" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Cars
            </Link>
            <Link to="/" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Locations
            </Link>
            <Link to="/" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link to="/" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
              <Link
                to="/Auth"
                className="flex items-center justify-center space-x-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <LogIn size={20} />
                <span>Login</span>
              </Link>
              <Link
                to="/Auth"
                className="flex items-center justify-center space-x-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <User size={20} />
                <span>Register</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
