import { Calendar, Car, MapPin } from 'lucide-react';
import React from 'react';

const FeatureSection = () => {
  const features = [
    {
      title: "Wide Selection",
      description: "Choose from over 500 models across all categories",
      icon: <Car size={28} className="text-blue-600" />
    },
    {
      title: "Easy Booking",
      description: "Book your car in just a few clicks",
      icon: <Calendar size={28} className="text-blue-600" />
    },
    {
      title: "Multiple Locations",
      description: "Pick up and return at any of our 50+ locations",
      icon: <MapPin size={28} className="text-blue-600" />
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
            Why Choose DriveEase
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the best car rental service with affordable prices and premium cars.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 ease-in-out"
            >
              <div className="flex items-center justify-center bg-blue-50 rounded-full w-16 h-16 mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
