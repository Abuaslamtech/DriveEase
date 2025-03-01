import React, { useContext, useEffect } from "react";
import CarCard from "./CarCard";
import { ArrowRight } from "lucide-react";
import { CarContext } from "../contexts/CarContext";

const PopularCars = ({ limit = 8 }) => {
  const { cars, loading, setLimit } = useContext(CarContext);

  useEffect(() => {
    setLimit(limit);
  }, [limit, setLimit]);

  if (loading) return <p className="text-center py-8">Loading cars...</p>;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4 sm:mb-0">
            Popular Cars
          </h2>
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 flex items-center text-lg font-medium transition-colors duration-200"
          >
            View all cars
            <ArrowRight size={20} className="ml-2" />
          </a>
        </div>

        {/* Car Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCars;
