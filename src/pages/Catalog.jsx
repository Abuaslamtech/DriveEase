import React, { useState, useContext } from "react";
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
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CarContext } from "../contexts/CarContext";

const SearchBar = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for make, model..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div>
          <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center justify-center">
            <Search size={20} className="mr-2" />
            Search
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
            <h4 className="font-medium mb-3">Car Make</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="toyota"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="toyota" className="ml-2 text-gray-700">
                  Toyota
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="honda"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="honda" className="ml-2 text-gray-700">
                  Honda
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="bmw"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="bmw" className="ml-2 text-gray-700">
                  BMW
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="ford"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="ford" className="ml-2 text-gray-700">
                  Ford
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
                  $0 - $15,000
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="price2"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="price2" className="ml-2 text-gray-700">
                  $15,000 - $25,000
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="price3"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="price3" className="ml-2 text-gray-700">
                  $25,000 - $35,000
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="price4"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="price4" className="ml-2 text-gray-700">
                  $35,000+
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
                  id="backupCamera"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="backupCamera" className="ml-2 text-gray-700">
                  Backup Camera
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="keylessEntry"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="keylessEntry" className="ml-2 text-gray-700">
                  Keyless Entry
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="navigation"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="navigation" className="ml-2 text-gray-700">
                  Navigation
                </label>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">Fuel Type</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="gasoline"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="gasoline" className="ml-2 text-gray-700">
                  Gasoline
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="diesel"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="diesel" className="ml-2 text-gray-700">
                  Diesel
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="hybrid"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="hybrid" className="ml-2 text-gray-700">
                  Hybrid
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="electric"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="electric" className="ml-2 text-gray-700">
                  Electric
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
    <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
      {car.recommended && (
        <div className="absolute top-0 right-0 bg-green-500 text-white py-1 px-3 text-sm">
          Recommended
        </div>
      )}
      <img
        src={car.image}
        alt={`${car.make} ${car.model}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between mb-2">
          <h3 className="font-bold text-xl">{`${car.make} ${car.model}`}</h3>
          <div className="text-xl font-bold text-blue-600">${car.price.toLocaleString()}</div>
        </div>
        <div className="flex items-center mb-4">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
            {car.year}
          </span>
          <span className="mx-2 text-gray-300">|</span>
          <span className="text-gray-600 flex items-center">
            <MapPin size={16} className="mr-1" />
            {car.location || "Not specified"}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center text-gray-600">
            <Gauge size={18} className="mr-2" />
            <span>{car.mileage.toLocaleString()} miles</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users size={18} className="mr-2" />
            <span>Owners: {car.owners}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Car size={18} className="mr-2" />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar size={18} className="mr-2" />
            <span>{car.fuelType}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {car.features && car.features.map((feature, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs"
            >
              {feature}
            </span>
          ))}
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded flex items-center justify-center">
          View Details
          <ArrowRight size={18} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

const CarListing = () => {
  // Use the context to get the car data
  const { cars, loading } = useContext(CarContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-lg text-gray-600">Loading cars...</p>
      </div>
    );
  }

  if (!cars || cars.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-lg text-gray-600">No cars available</p>
      </div>
    );
  }

  // Add a random location to each car since it's not in the API data
  const locations = ["New York", "Los Angeles", "Chicago", "Miami", "Denver", "San Francisco"];
  const carsWithLocation = cars.map(car => ({
    ...car,
    location: locations[Math.floor(Math.random() * locations.length)],
    recommended: Math.random() > 0.8 // Randomly mark some as recommended
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {carsWithLocation.map((car) => (
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