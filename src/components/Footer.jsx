import { Car } from 'lucide-react';
import React from 'react'

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Car className="text-blue-400" size={24} />
                <span className="text-xl font-bold text-white">DriveEase</span>
              </div>
              <p className="mb-4">Making car rental easy and affordable since 2010.</p>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cars</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Locations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
              <p className="mb-2">1234 Rental Street, NY 10001</p>
              <p className="mb-2">info@driveease.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
  
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} DriveEase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };

export default Footer