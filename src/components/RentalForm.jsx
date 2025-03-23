import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, CreditCard, Loader, X, CheckCircle, Check } from "lucide-react";

const RentalForm = ({ car, onClose }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    cardNumber: "4242 4242 4242 4242", // Demo card
    cardExpiry: "12/25",
    cardCvc: "123"
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  // Calculate days difference between two dates
  const calculateDaysDiff = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diffTime = Math.abs(endDate - startDate);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    if (!formData.startDate || !formData.endDate) return 0;
    
    const days = calculateDaysDiff(formData.startDate, formData.endDate);
    return days * car.price;
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Recalculate total price if dates change
    if (name === "startDate" || name === "endDate") {
      if (formData.startDate && formData.endDate) {
        setTotalPrice(calculateTotalPrice());
      }
    }
  };

  // Handle date selection
  const handleDateChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Validate dates
    if (name === "endDate" && formData.startDate) {
      const start = new Date(formData.startDate);
      const end = new Date(value);
      
      if (end <= start) {
        setError("End date must be after start date");
      } else {
        setError("");
        const days = calculateDaysDiff(formData.startDate, value);
        setTotalPrice(days * car.price);
      }
    }
    
    if (name === "startDate" && formData.endDate) {
      const start = new Date(value);
      const end = new Date(formData.endDate);
      
      if (end <= start) {
        setError("End date must be after start date");
      } else {
        setError("");
        const days = calculateDaysDiff(value, formData.endDate);
        setTotalPrice(days * car.price);
      }
    }
  };

  // Handle continue to next step
  const handleContinue = () => {
    // Validate date selection
    if (!formData.startDate || !formData.endDate) {
      setError("Please select both start and end dates");
      return;
    }
    
    const startDate = new Date(formData.startDate);
    const endDate = new Date(formData.endDate);
    const today = new Date();
    
    // Reset time part for comparison
    today.setHours(0, 0, 0, 0);
    
    if (startDate < today) {
      setError("Start date cannot be in the past");
      return;
    }
    
    if (endDate <= startDate) {
      setError("End date must be after start date");
      return;
    }
    
    setError("");
    setStep(2);
  };

  // Handle previous step
  const handleBack = () => {
    setStep(prev => prev - 1);
    setError("");
  };

  // Handle form submission
  const handleSubmit = async () => {
    // Validate payment info (simplified for demo)
    if (!formData.cardNumber || !formData.cardExpiry || !formData.cardCvc) {
      setError("Please fill in all payment details");
      return;
    }
    
    setError("");
    setIsLoading(true);
    
    try {
      // Demo payment processing (simulated)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Prepare rental object
      const rentalData = {
        car: {
          id: car.id,
          make: car.make,
          model: car.model,
          year: car.year,
          price: car.price,
          image: car.image
        },
        rentalDetails: {
          startDate: formData.startDate,
          endDate: formData.endDate,
          totalCost: totalPrice,
          status: "pending"
        },
        paymentInfo: {
          paymentId: "demo_" + Date.now(),
          paymentDate: new Date().toISOString(),
          paymentMethod: "Credit Card"
        }
        // No userId - the server will determine the user from the JWT token
      };
      
      // Send to backend API
      const token = localStorage.getItem("token");
      if (!token) {
        // Redirect to login if no token found
        navigate("/login", { state: { from: window.location.pathname } });
        return;
      }
      
      const response = await fetch("http://localhost:3000/api/rentals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(rentalData)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || "Failed to create rental");
      }
      
      // Success! Show confirmation
      setStep(3);
    } catch (error) {
      console.error("Rental error:", error);
      setError(error.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  // Get today's date in YYYY-MM-DD format for min date attribute
  const today = new Date().toISOString().split("T")[0];

  // Render different steps
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h2 className="text-xl font-bold mb-4">Select Rental Dates</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Pick-up Date*
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar size={16} className="text-gray-500" />
                  </div>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleDateChange}
                    min={today}
                    className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Drop-off Date*
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar size={16} className="text-gray-500" />
                  </div>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleDateChange}
                    min={formData.startDate || today}
                    className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              
              {formData.startDate && formData.endDate && !error && (
                <div className="mt-4 p-3 bg-blue-50 rounded-md">
                  <h3 className="font-medium">Rental Summary</h3>
                  <p className="text-sm text-gray-600">
                    {calculateDaysDiff(formData.startDate, formData.endDate)} days x ${car.price}/day
                  </p>
                  <p className="font-bold mt-1">
                    Total: ${totalPrice.toLocaleString()}
                  </p>
                </div>
              )}
            </div>
          </>
        );
      
      case 2:
        return (
          <>
            <h2 className="text-xl font-bold mb-4">Payment Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Card Number*
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <CreditCard size={16} className="text-gray-500" />
                  </div>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="0000 0000 0000 0000"
                    className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Demo card: 4242 4242 4242 4242
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Expiry Date*
                  </label>
                  <input
                    type="text"
                    name="cardExpiry"
                    value={formData.cardExpiry}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    CVC*
                  </label>
                  <input
                    type="text"
                    name="cardCvc"
                    value={formData.cardCvc}
                    onChange={handleChange}
                    placeholder="123"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-blue-50 rounded-md">
                <h3 className="font-medium">Order Summary</h3>
                <div className="mt-2">
                  <div className="flex justify-between text-sm">
                    <span>{calculateDaysDiff(formData.startDate, formData.endDate)} days rental</span>
                    <span>${totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Insurance</span>
                    <span>Included</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Taxes</span>
                    <span>Included</span>
                  </div>
                  <div className="border-t border-gray-300 my-2"></div>
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${totalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      
      case 3:
        return (
          <div className="text-center py-6">
            <div className="flex justify-center mb-4">
              <CheckCircle size={60} className="text-green-500" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
            <p className="text-gray-600 mb-6">
              Your {car.make} {car.model} is reserved from {formData.startDate} to {formData.endDate}.
            </p>
            <div className="bg-gray-50 p-4 rounded-md text-left mb-6">
              <h3 className="font-medium mb-2">Booking Details</h3>
              <p className="text-sm">
                <span className="font-medium">Car:</span> {car.year} {car.make} {car.model}
              </p>
              <p className="text-sm">
                <span className="font-medium">Pickup:</span> {formData.startDate}
              </p>
              <p className="text-sm">
                <span className="font-medium">Return:</span> {formData.endDate}
              </p>
              <p className="text-sm">
                <span className="font-medium">Total Cost:</span> ${totalPrice.toLocaleString()}
              </p>
            </div>
            <div className="space-y-3">
              <button
                onClick={() => navigate("/my-rentals")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors font-medium"
              >
                View My Rentals
              </button>
              <button
                onClick={() => navigate("/")}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-md transition-colors font-medium"
              >
                Back to Home
              </button>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="relative">
      <button
        onClick={onClose}
        className="absolute right-0 top-0 p-1 text-gray-500 hover:text-gray-700"
        aria-label="Close"
      >
        <X size={20} />
      </button>
      
      {/* Progress indicator */}
      {step < 3 && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            {[1, 2].map(i => (
              <div 
                key={i}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  i === step 
                    ? "bg-blue-600 text-white" 
                    : i < step 
                      ? "bg-green-500 text-white" 
                      : "bg-gray-200 text-gray-500"
                }`}
              >
                {i < step ? <Check size={16} /> : i}
              </div>
            ))}
          </div>
          <div className="relative h-1 bg-gray-200 rounded-full">
            <div 
              className="absolute h-1 bg-blue-600 rounded-full"
              style={{ width: `${(step - 1) * 100}%` }}
            ></div>
          </div>
        </div>
      )}
      
      {/* Form content */}
      <div className="mb-6">
        {renderStep()}
      </div>
      
      {/* Error message */}
      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md text-sm">
          {error}
        </div>
      )}
      
      {/* Action buttons */}
      {step < 3 && (
        <div className={`flex ${step > 1 ? 'justify-between' : 'justify-end'}`}>
          {step > 1 && (
            <button
              onClick={handleBack}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              disabled={isLoading}
            >
              Back
            </button>
          )}
          
          {step === 1 ? (
            <button
              onClick={handleContinue}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Continue
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader size={16} className="animate-spin mr-2" />
                  Processing...
                </>
              ) : (
                "Complete Booking"
              )}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default RentalForm;