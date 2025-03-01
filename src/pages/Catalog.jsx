import React, { useState } from "react";
import {
  Car,
  Calendar,
  Users,
  Gauge,
  Filter,
  ChevronDown,
  ChevronUp,
  Search,
  ArrowRight,
  Menu,
  X,
  Sliders,
  MapPin,
} from "lucide-react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Car className="text-blue-600" size={28} />
          <span className="text-xl font-bold">DriveEase</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="font-medium hover:text-blue-600 transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="font-medium text-blue-600 border-b-2 border-blue-600 pb-1"
          >
            Cars
          </a>
          <a
            href="#"
            className="font-medium hover:text-blue-600 transition-colors"
          >
            Locations
          </a>
          <a
            href="#"
            className="font-medium hover:text-blue-600 transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="font-medium hover:text-blue-600 transition-colors"
          >
            Contact
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button className="flex items-center space-x-1 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
            <span>John Doe</span>
            <img
              src="/api/placeholder/32/32"
              alt="User"
              className="w-8 h-8 rounded-full ml-2"
            />
          </button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 px-6 py-4 bg-gray-50 rounded-md">
          <div className="flex flex-col space-y-4">
            <a
              href="#"
              className="font-medium hover:text-blue-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="font-medium text-blue-600 border-b-2 border-blue-600 pb-1"
            >
              Cars
            </a>
            <a
              href="#"
              className="font-medium hover:text-blue-600 transition-colors"
            >
              Locations
            </a>
            <a
              href="#"
              className="font-medium hover:text-blue-600 transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="font-medium hover:text-blue-600 transition-colors"
            >
              Contact
            </a>

            <div className="flex pt-4 border-t border-gray-200">
              <button className="flex items-center justify-center space-x-1">
                <span>John Doe</span>
                <img
                  src="/api/placeholder/32/32"
                  alt="User"
                  className="w-8 h-8 rounded-full ml-2"
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const SearchBar = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <div className="relative">
              <MapPin
                className="absolute left-3 top-3 text-gray-400"
                size={18}
              />
              <select className="pl-10 pr-10 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none">
                <option>New York, NY</option>
                <option>Los Angeles, CA</option>
                <option>Chicago, IL</option>
                <option>Houston, TX</option>
              </select>
              <ChevronDown
                className="absolute right-3 top-3 text-gray-400"
                size={18}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Pick-up Date
            </label>
            <div className="relative">
              <Calendar
                className="absolute left-3 top-3 text-gray-400"
                size={18}
              />
              <input
                type="date"
                className="pl-10 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Return Date
            </label>
            <div className="relative">
              <Calendar
                className="absolute left-3 top-3 text-gray-400"
                size={18}
              />
              <input
                type="date"
                className="pl-10 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="flex items-end">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors flex items-center justify-center space-x-1">
            <Search size={18} />
            <span>Update Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const FilterSection = () => {
  const [filtersOpen, setFiltersOpen] = useState(true);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Filter size={20} className="text-blue-600 mr-2" />
          <h3 className="font-semibold text-lg">Filters</h3>
        </div>
        <button
          onClick={() => setFiltersOpen(!filtersOpen)}
          className="text-gray-500 hover:text-gray-700"
        >
          {filtersOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {filtersOpen && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h4 className="font-medium mb-3">Car Type</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="sedan"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="sedan" className="ml-2 text-gray-700">
                  Sedan
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="suv"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="suv" className="ml-2 text-gray-700">
                  SUV
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="luxury"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="luxury" className="ml-2 text-gray-700">
                  Luxury
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="sports"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="sports" className="ml-2 text-gray-700">
                  Sports
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="convertible"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="convertible" className="ml-2 text-gray-700">
                  Convertible
                </label>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">Price Range</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="price1"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="price1" className="ml-2 text-gray-700">
                  $0 - $50 per day
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="price2"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="price2" className="ml-2 text-gray-700">
                  $50 - $100 per day
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="price3"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="price3" className="ml-2 text-gray-700">
                  $100 - $150 per day
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="price4"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="price4" className="ml-2 text-gray-700">
                  $150+ per day
                </label>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">Features</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="gps"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="gps" className="ml-2 text-gray-700">
                  GPS Navigation
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="bluetooth"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="bluetooth" className="ml-2 text-gray-700">
                  Bluetooth
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="auto"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="auto" className="ml-2 text-gray-700">
                  Automatic Transmission
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="sunroof"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="sunroof" className="ml-2 text-gray-700">
                  Sunroof
                </label>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">Seating Capacity</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="seats2"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="seats2" className="ml-2 text-gray-700">
                  2 Seats
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="seats4"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="seats4" className="ml-2 text-gray-700">
                  4 Seats
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="seats5"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="seats5" className="ml-2 text-gray-700">
                  5 Seats
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="seats7"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="seats7" className="ml-2 text-gray-700">
                  7+ Seats
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      {filtersOpen && (
        <div className="flex justify-end mt-6">
          <button className="text-gray-600 hover:text-gray-800 mr-4">
            Clear All
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center">
            <Sliders size={16} className="mr-2" />
            Apply Filters
          </button>
        </div>
      )}
    </div>
  );
};

const CarCard = ({ car }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-48 object-cover"
        />
        {car.recommended && (
          <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
            Recommended
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{car.name}</h3>
          <div>
            <span className="text-blue-600 font-bold">${car.price}/day</span>
          </div>
        </div>
        <div className="border-t border-b border-gray-100 py-2 my-2">
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
            <div className="flex items-center">
              <Car size={16} className="mr-2 text-gray-500" />
              {car.category}
            </div>
            <div className="flex items-center">
              <Users size={16} className="mr-2 text-gray-500" />
              {car.seats} People
            </div>
            <div className="flex items-center">
              <Gauge size={16} className="mr-2 text-gray-500" />
              {car.mileage} MPG
            </div>
            <div className="flex items-center">
              <MapPin size={16} className="mr-2 text-gray-500" />
              {car.location}
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center text-sm">
            <span className="text-gray-500 mr-1">Features:</span>
            <span className="font-medium">{car.features.join(", ")}</span>
          </div>
        </div>
        <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md flex items-center justify-center">
          <span>Rent Now</span>
          <ArrowRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
};

const CarListing = () => {
  const cars = [
    {
      id: 1,
      name: "Toyota Camry",
      category: "Sedan",
      price: 45,
      seats: 5,
      mileage: 35,
      features: ["Bluetooth", "Navigation", "Backup Camera"],
      location: "New York",
      image: "/api/placeholder/400/240",
      recommended: true,
    },
    {
      id: 2,
      name: "Honda CR-V",
      category: "SUV",
      price: 65,
      seats: 5,
      mileage: 28,
      features: ["Bluetooth", "Sunroof", "AWD"],
      location: "Los Angeles",
      image: "/api/placeholder/400/240",
    },
    {
      id: 3,
      name: "BMW 3 Series",
      category: "Luxury",
      price: 95,
      seats: 5,
      mileage: 32,
      features: ["Leather Seats", "Premium Sound", "Navigation"],
      location: "Chicago",
      image: "/api/placeholder/400/240",
    },
    {
      id: 4,
      name: "Ford Mustang",
      category: "Sports",
      price: 85,
      seats: 4,
      mileage: 25,
      features: ["Convertible", "Bluetooth", "Backup Camera"],
      location: "Miami",
      image: "/api/placeholder/400/240",
    },
    {
      id: 5,
      name: "Tesla Model 3",
      category: "Electric",
      price: 110,
      seats: 5,
      mileage: 0,
      features: ["Autopilot", "Electric", "Premium Sound"],
      location: "San Francisco",
      image: "/api/placeholder/400/240",
      recommended: true,
    },
    {
      id: 6,
      name: "Jeep Wrangler",
      category: "SUV",
      price: 75,
      seats: 5,
      mileage: 22,
      features: ["4x4", "Removable Top", "Off-Road"],
      location: "Denver",
      image: "/api/placeholder/400/240",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

const Pagination = () => {
  return (
    <div className="flex justify-center mt-8">
      <div className="flex items-center space-x-1">
        <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
          Previous
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-md bg-blue-600 text-white">
          1
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
          2
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
          3
        </button>
        <span className="px-4 py-2 text-gray-600">...</span>
        <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
          10
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
          Next
        </button>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="text-blue-400" size={24} />
              <span className="text-xl font-bold text-white">DriveEase</span>
            </div>
            <p className="mb-4">
              Making car rental easy and affordable since 2010.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cars
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Locations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <p className="mb-2">1234 Rental Street, NY 10001</p>
            <p className="mb-2">info@driveease.com</p>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} DriveEase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const CarsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Available Cars</h1>
            <p className="text-gray-600">
              Find the perfect car for your journey from our wide selection
            </p>
          </div>

          <SearchBar />
          <FilterSection />

          <CarListing />
          <Pagination />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CarsPage;
