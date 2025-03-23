import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { CarContext, createCarImage } from "../contexts/CarContext";
import { AuthContext } from "../contexts/AuthContext"; // You'll need to create this
import Navbar from "../components/Navbar";
import RentalForm from "../components/RentalForm"; // We'll create this component
import {
  Car,
  Calendar,
  Users,
  Gauge,
  Star,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  Check,
  MapPin,
  Clock,
  CalendarIcon,
} from "lucide-react";

const CarDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cars } = useContext(CarContext);
  const { isAuthenticated } = useContext(AuthContext); // Authentication state
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageAngles] = useState(["front", "side", "back", "aerial"]);
  const [showRentalForm, setShowRentalForm] = useState(false);

  useEffect(() => {
    // Get car ID from URL params
    const params = new URLSearchParams(location.search);
    const carId = params.get("id");

    if (!carId || !cars || cars.length === 0) {
      // If no ID is provided or cars aren't loaded yet, redirect to catalog
      if (!cars || cars.length === 0) {
        console.log("Cars data not available");
      }
      return;
    }

    // Find car in context
    const foundCar = cars.find((c) => c.id === parseInt(carId));

    if (foundCar) {
      setCar(foundCar);
    } else {
      console.log("Car not found with ID:", carId);
      // You could navigate to a 404 page here
    }

    setLoading(false);
  }, [location.search, cars]);

  if (loading || !car) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 bg-gray-50 py-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-center items-center h-64">
              <p>Loading car details...</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Generate images using the existing createCarImage function from context
  const images = imageAngles.map((angle) => createCarImage(car, angle));

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Find related cars (same make or similar price range)
  const relatedCars = cars
    .filter(
      (c) =>
        c.id !== car.id &&
        (c.make === car.make || Math.abs(c.price - car.price) < 5000)
    )
    .slice(0, 3);

  // Handle image error
  const handleImageError = (e) => {
    console.error("Image failed to load");
    e.target.src = "https://via.placeholder.com/400x240?text=No+Image";
    e.target.onerror = null; // Prevent infinite error loop
  };

  // Function to handle rent button click
  const handleRentClick = () => {
    if (!isAuthenticated) {
      // Redirect to login if user is not authenticated
      navigate(
        "/login?redirect=" + encodeURIComponent(`/car-detail?id=${car.id}`)
      );
      return;
    }

    // Show rental form
    setShowRentalForm(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-6">
            <Link
              to="/"
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft size={16} className="mr-1" />
              <span>Back to Cars</span>
            </Link>
          </div>

          {/* Car Gallery */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <div className="relative">
              <img
                src={images[currentImageIndex]}
                alt={`${car.make} ${car.model} view ${imageAngles[currentImageIndex]}`}
                className="w-full rounded-lg h-64 md:h-96 object-contain"
                onError={handleImageError}
              />
              <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                onClick={handlePrev}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                onClick={handleNext}
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="flex mt-4 space-x-2 overflow-x-auto">
              {images.map((image, index) => (
                <button
                  key={index}
                  className={`flex-shrink-0 w-20 h-16 rounded-md overflow-hidden border-2 ${
                    index === currentImageIndex
                      ? "border-blue-600"
                      : "border-transparent"
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img
                    src={image}
                    alt={`${car.make} ${car.model} thumbnail ${imageAngles[index]}`}
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Car Details section remains the same */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h1 className="text-2xl font-bold">
                      {car.make} {car.model}
                    </h1>
                    <p className="text-gray-600">
                      {car.year} {car.fuelType}
                    </p>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    ${car.price.toLocaleString()}
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg">
                    <Gauge size={20} className="text-blue-600 mb-1" />
                    <p className="text-sm text-gray-600">Mileage</p>
                    <p className="font-medium">
                      {car.mileage.toLocaleString()} mi
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg">
                    <Car size={20} className="text-blue-600 mb-1" />
                    <p className="text-sm text-gray-600">Transmission</p>
                    <p className="font-medium">{car.transmission}</p>
                  </div>
                  <div className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg">
                    <Calendar size={20} className="text-blue-600 mb-1" />
                    <p className="text-sm text-gray-600">Year</p>
                    <p className="font-medium">{car.year}</p>
                  </div>
                  <div className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg">
                    <Users size={20} className="text-blue-600 mb-1" />
                    <p className="text-sm text-gray-600">Owners</p>
                    <p className="font-medium">{car.owners}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h2 className="text-lg font-bold mb-4">Specifications</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Engine</span>
                      <span className="font-medium">{car.engine}</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Horsepower</span>
                      <span className="font-medium">{car.horsepower} HP</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Fuel Type</span>
                      <span className="font-medium">{car.fuelType}</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Color</span>
                      <span className="font-medium">{car.color}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h2 className="text-lg font-bold mb-4">Features</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {car.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Check size={16} className="text-green-500 mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
                {showRentalForm ? (
                  <RentalForm
                    car={car}
                    onClose={() => setShowRentalForm(false)}
                  />
                ) : (
                  <div className="mb-6">
                    <h2 className="text-lg font-bold mb-3">Rent This Car</h2>
                    <p className="text-gray-700 mb-4">
                      Daily rate:{" "}
                      <span className="font-bold text-blue-600">
                        ${car.price.toLocaleString()}
                      </span>
                    </p>
                    <button
                      onClick={handleRentClick}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-colors font-medium mb-4"
                    >
                      Rent Now
                    </button>
                    <p className="text-sm text-gray-500">
                      Rent this {car.make} {car.model} now. Secure payment and
                      easy cancellation.
                    </p>

                    <hr className="my-6" />

                    <h3 className="font-bold text-md mb-2">Contact Us</h3>
                    <p className="text-gray-700 mb-4">
                      Have questions about this {car.make} {car.model}?
                    </p>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">
                          Message
                        </label>
                        <textarea
                          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          rows="3"
                          placeholder="I have a question about this car..."
                        ></textarea>
                      </div>
                      <button
                        type="button"
                        className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-md transition-colors font-medium"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
                <div className="mb-6">
                  <h2 className="text-lg font-bold mb-3">Contact Information</h2>
                  <p className="text-gray-700 mb-4">
                    Interested in this {car.make} {car.model}? Fill out the form below and our team will get back to you as soon as possible.
                  </p>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">
                        Message
                      </label>
                      <textarea
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="3"
                        placeholder="I'm interested in this car..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors font-medium"
                    >
                      Submit Inquiry
                    </button>
                  </form>
                </div>
              </div>
            </div> */}

          {/* Related Cars */}
          {relatedCars.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-6">
                Similar Cars You Might Like
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedCars.map((relatedCar) => (
                  <div
                    key={relatedCar.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={relatedCar.image}
                      alt={`${relatedCar.make} ${relatedCar.model}`}
                      className="w-full h-40 object-contain"
                      onError={handleImageError}
                    />
                    <div className="p-4">
                      <h3 className="font-bold">
                        {relatedCar.make} {relatedCar.model}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {relatedCar.year} • {relatedCar.transmission}
                      </p>
                      <div className="flex justify-between items-center mt-3">
                        <span className="font-bold text-blue-600">
                          ${relatedCar.price.toLocaleString()}
                        </span>
                        <button
                          onClick={() =>
                            navigate(`/car-detail?id=${relatedCar.id}`)
                          }
                          className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CarDetail;
