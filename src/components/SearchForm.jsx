import { Calendar, ChevronDown, MapPin, Search } from 'lucide-react';
import React from 'react'

const SearchForm = () => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
              <select className="pl-10 pr-10 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none">
                <option>New York, NY</option>
                <option>Los Angeles, CA</option>
                <option>Chicago, IL</option>
                <option>Houston, TX</option>
              </select>
              <ChevronDown className="absolute right-3 top-3 text-gray-400" size={18} />
            </div>
          </div>
  
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Pick-up Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="date"
                className="pl-10 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
  
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Return Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="date"
                className="pl-10 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
  
          <div className="flex items-end">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors flex items-center justify-center space-x-1">
              <Search size={18} />
              <span>Search Cars</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

export default SearchForm