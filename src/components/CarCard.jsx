import { ArrowRight } from 'lucide-react';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CarContext } from '../contexts/CarContext';

const CarCard = ({ car }) => {
  const navigate = useNavigate();
  
  const handleViewDetails = () => {
    // Navigate to car detail page with car id as query parameter
    navigate(`/car-detail?id=${car.id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:border border-blue-600 transition-all">
      <div className="relative h-48 overflow-hidden">
        <img
          src={car.image}
          alt={`${car.make} ${car.model}`}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{car.model}</h3>
          <span className="text-blue-600 font-bold">${car.price.toLocaleString()}</span>
        </div>
        
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <span>{car.make}</span>
          <span className="mx-2">•</span>
          <span>{car.year}</span>
          <span className="mx-2">•</span>
          <span>{car.transmission}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-sm">
            <span className="text-gray-500">Mileage:</span>
            <span className="ml-1 font-medium">{car.mileage.toLocaleString()} mi</span>
          </div>
          <button 
            onClick={handleViewDetails}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm flex items-center"
          >
            <span>View details</span>
            <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;