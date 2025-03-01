import React from 'react';
import SearchForm from './SearchForm';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
            Find Your Perfect Drive
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl">
            Rent a car with ease and explore at your own pace. Best rates guaranteed with premium service.
          </p>
          <div className="w-full max-w-lg">
            <SearchForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
