import React, { useState } from 'react';
import { Car, Calendar, CreditCard, User, ArrowLeft, Check, X, Shield, Menu, ChevronDown, ChevronUp, Clock, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // Form states
  const [rentalDetails, setRentalDetails] = useState({
    pickupDate: "Feb 25, 2025",
    pickupTime: "10:00 AM",
    returnDate: "Feb 28, 2025",
    returnTime: "10:00 AM",
    pickupLocation: "San Francisco Airport",
    returnLocation: "San Francisco Airport",
    extras: []
  });

  const [driverInfo, setDriverInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    country: "United States",
    licenseNumber: "",
    licenseExpiry: ""
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    nameOnCard: "",
    expiryDate: "",
    cvv: "",
    saveCard: false
  });

  const handleRentalDetailsSubmit = (e) => {
    e.preventDefault();
    setCurrentStep(2);
  };

  const handleDriverInfoSubmit = (e) => {
    e.preventDefault();
    setCurrentStep(3);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setCurrentStep(4);
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <button
            onClick={() => window.history.back()}
            className="flex items-center text-gray-600 hover:text-blue-600 mb-6"
          >
            <ArrowLeft size={18} className="mr-1" />
            <span>Back to car details</span>
          </button>

          <h1 className="text-2xl font-bold mb-6">Complete Your Reservation</h1>

          {/* Checkout Steps */}
          <CheckoutSteps currentStep={currentStep} />

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Form Section */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-md p-6">
                {currentStep === 1 && (
                  <form onSubmit={handleRentalDetailsSubmit}>
                    <h2 className="text-xl font-semibold mb-4">Rental Details</h2>

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Date</label>
                          <input
                            type="date"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            value={rentalDetails.pickupDate}
                            onChange={(e) => setRentalDetails({...rentalDetails, pickupDate: e.target.value})}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Time</label>
                          <select
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            value={rentalDetails.pickupTime}
                            onChange={(e) => setRentalDetails({...rentalDetails, pickupTime: e.target.value})}
                            required
                          >
                            <option>8:00 AM</option>
                            <option>9:00 AM</option>
                            <option>10:00 AM</option>
                            <option>11:00 AM</option>
                            <option>12:00 PM</option>
                            <option>1:00 PM</option>
                            <option>2:00 PM</option>
                            <option>3:00 PM</option>
                            <option>4:00 PM</option>
                            <option>5:00 PM</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Return Date</label>
                          <input
                            type="date"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            value={rentalDetails.returnDate}
                            onChange={(e) => setRentalDetails({...rentalDetails, returnDate: e.target.value})}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Return Time</label>
                          <select
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            value={rentalDetails.returnTime}
                            onChange={(e) => setRentalDetails({...rentalDetails, returnTime: e.target.value})}
                            required
                          >
                            <option>8:00 AM</option>
                            <option>9:00 AM</option>
                            <option>10:00 AM</option>
                            <option>11:00 AM</option>
                            <option>12:00 PM</option>
                            <option>1:00 PM</option>
                            <option>2:00 PM</option>
                            <option>3:00 PM</option>
                            <option>4:00 PM</option>
                            <option>5:00 PM</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Location</label>
                        <select
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          value={rentalDetails.pickupLocation}
                          onChange={(e) => setRentalDetails({...rentalDetails, pickupLocation: e.target.value})}
                          required
                        >
                          <option>San Francisco Airport</option>
                          <option>San Francisco Downtown</option>
                          <option>Oakland Airport</option>
                          <option>San Jose Airport</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Return Location</label>
                        <select
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          value={rentalDetails.returnLocation}
                          onChange={(e) => setRentalDetails({...rentalDetails, returnLocation: e.target.value})}
                          required
                        >
                          <option>San Francisco Airport</option>
                          <option>San Francisco Downtown</option>
                          <option>Oakland Airport</option>
                          <option>San Jose Airport</option>
                        </select>
                      </div>

                      <div>
                        <h3 className="text-md font-medium mb-2">Additional Options</h3>
                        <div className="space-y-2">
                          <label className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              className="h-4 w-4 text-blue-600"
                              checked={rentalDetails.extras.includes('gps')}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setRentalDetails({
                                    ...rentalDetails,
                                    extras: [...rentalDetails.extras, 'gps']
                                  });
                                } else {
                                  setRentalDetails({
                                    ...rentalDetails,
                                    extras: rentalDetails.extras.filter(item => item !== 'gps')
                                  });
                                }
                              }}
                            />
                            <span>GPS Navigation (+$10/day)</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              className="h-4 w-4 text-blue-600"
                              checked={rentalDetails.extras.includes('childSeat')}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setRentalDetails({
                                    ...rentalDetails,
                                    extras: [...rentalDetails.extras, 'childSeat']
                                  });
                                } else {
                                  setRentalDetails({
                                    ...rentalDetails,
                                    extras: rentalDetails.extras.filter(item => item !== 'childSeat')
                                  });
                                }
                              }}
                            />
                            <span>Child Seat (+$15/day)</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              className="h-4 w-4 text-blue-600"
                              checked={rentalDetails.extras.includes('additionalDriver')}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setRentalDetails({
                                    ...rentalDetails,
                                    extras: [...rentalDetails.extras, 'additionalDriver']
                                  });
                                } else {
                                  setRentalDetails({
                                    ...rentalDetails,
                                    extras: rentalDetails.extras.filter(item => item !== 'additionalDriver')
                                  });
                                }
                              }}
                            />
                            <span>Additional Driver (+$20/day)</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
                      >
                        Continue to Driver Information
                      </button>
                    </div>
                  </form>
                )}

                {currentStep === 2 && (
                  <form onSubmit={handleDriverInfoSubmit}>
                    <h2 className="text-xl font-semibold mb-4">Driver Information</h2>

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            value={driverInfo.firstName}
                            onChange={(e) => setDriverInfo({...driverInfo, firstName: e.target.value})}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            value={driverInfo.lastName}
                            onChange={(e) => setDriverInfo({...driverInfo, lastName: e.target.value})}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                          <input
                            type="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            value={driverInfo.email}
                            onChange={(e) => setDriverInfo({...driverInfo, email: e.target.value})}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                          <input
                            type="tel"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            value={driverInfo.phone}
                            onChange={(e) => setDriverInfo({...driverInfo, phone: e.target.value})}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          value={driverInfo.address}
                          onChange={(e) => setDriverInfo({...driverInfo, address: e.target.value})}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            value={driverInfo.city}
                            onChange={(e) => setDriverInfo({...driverInfo, city: e.target.value})}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            value={driverInfo.zipCode}
                            onChange={(e) => setDriverInfo({...driverInfo, zipCode: e.target.value})}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                          <select
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            value={driverInfo.country}
                            onChange={(e) => setDriverInfo({...driverInfo, country: e.target.value})}
                            required
                          >
                            <option>United States</option>
                            <option>Canada</option>
                            <option>United Kingdom</option>
                            <option>Australia</option>
                            <option>Germany</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Driver's License Number</label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            value={driverInfo.licenseNumber}
                            onChange={(e) => setDriverInfo({...driverInfo, licenseNumber: e.target.value})}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">License Expiry Date</label>
                          <input
                            type="date"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            value={driverInfo.licenseExpiry}
                            onChange={(e) => setDriverInfo({...driverInfo, licenseExpiry: e.target.value})}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex space-x-4">
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="w-1/3 bg-gray-200 text-gray-800 py-3 px-4 rounded-md hover:bg-gray-300 transition-colors"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="w-2/3 bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
                      >
                        Continue to Payment
                      </button>
                    </div>
                  </form>
                )}

                {currentStep === 3 && (
                  <form onSubmit={handlePaymentSubmit}>
                    <h2 className="text-xl font-semibold mb-4">Payment Information</h2>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                        <div className="relative">
                          <input
                            type="text"
                            className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-md"
                            placeholder="1234 5678 9012 3456"
                            value={paymentInfo.cardNumber}
                            onChange={(e) => setPaymentInfo({...paymentInfo, cardNumber: e.target.value})}
                            required
                          />
                          <CreditCard size={18} className="absolute left-3 top-3 text-gray-400" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name on Card</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          value={paymentInfo.nameOnCard}
                          onChange={(e) => setPaymentInfo({...paymentInfo, nameOnCard: e.target.value})}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="MM/YY"
                            value={paymentInfo.expiryDate}
                            onChange={(e) => setPaymentInfo({...paymentInfo, expiryDate: e.target.value})}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="123"
                            value={paymentInfo.cvv}
                            onChange={(e) => setPaymentInfo({...paymentInfo, cvv: e.target.value})}
                            required
                          />
                        </div>
                      </div>

                      <div className="flex items-center mt-4">
                        <input
                          type="checkbox"
                          id="saveCard"
                          className="h-4 w-4 text-blue-600"
                          checked={paymentInfo.saveCard}
                          onChange={(e) => setPaymentInfo({...paymentInfo, saveCard: e.target.checked})}
                        />
                        <label htmlFor="saveCard" className="ml-2 text-sm text-gray-700">
                          Save this card for future rentals
                        </label>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mt-4">
                        <div className="flex items-center">
                          <Shield size={20} className="text-green-600 mr-2" />
                          <p className="text-sm text-gray-700">Your payment information is secure and encrypted</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex space-x-4">
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="w-1/3 bg-gray-200 text-gray-800 py-3 px-4 rounded-md hover:bg-gray-300 transition-colors"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="w-2/3 bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
                      >
                        Complete Reservation
                      </button>
                    </div>
                  </form>
                )}

                {currentStep === 4 && (
                  <div className="text-center py-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <Check size={30} className="text-green-600" />
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Reservation Confirmed!</h2>
                    <p className="text-gray-600 mb-6">Your booking has been successfully completed. A confirmation email has been sent to your email address.</p>

                    <div className="bg-gray-50 p-4 rounded-md border border-gray-200 text-left mb-6">
                      <h3 className="font-medium text-gray-800 mb-2">Reservation Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                        <div>
                          <p className="text-gray-600">Confirmation Number:</p>
                          <p className="font-medium">DE-78542-25F</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Reserved Vehicle:</p>
                          <p className="font-medium">Tesla Model 3</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Pickup Date:</p>
                          <p className="font-medium">{rentalDetails.pickupDate}, {rentalDetails.pickupTime}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Return Date:</p>
                          <p className="font-medium">{rentalDetails.returnDate}, {rentalDetails.returnTime}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Pickup Location:</p>
                          <p className="font-medium">{rentalDetails.pickupLocation}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Return Location:</p>
                          <p className="font-medium">{rentalDetails.returnLocation}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 justify-center">
                      <a
                        href="/reservations"
                        className="bg-white border border-blue-600 text-blue-600 py-2 px-6 rounded-md hover:bg-blue-50 transition-colors"
                      >
                        View My Reservations
                      </a>
                      <a
                        href="/"
                        className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
                      >
                        Back to Home
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Summary Section */}
            <div className="lg:w-1/3">
              <RentalSummary />

              {currentStep < 4 && (
                <div className="bg-white rounded-lg shadow-md p-4 mt-4">
                  <h3 className="font-semibold mb-3">Need Help?</h3>
                  <p className="text-sm text-gray-600 mb-3">Our customer support team is available 24/7 to assist you with your booking.</p>
                  <a href="/contact" className="text-blue-600 text-sm font-medium hover:underline">Contact Us</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const CheckoutSteps = ({ currentStep }) => {
  const steps = [
    { id: 1, name: "Rental Details" },
    { id: 2, name: "Driver Info" },
    { id: 3, name: "Payment" },
    { id: 4, name: "Confirmation" }
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between relative">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center relative z-10">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              step.id === currentStep
                ? "bg-blue-600 text-white"
                : step.id < currentStep
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-500"
            }`}>
              {step.id < currentStep ? (
                <Check size={20} />
              ) : (
                <span>{step.id}</span>
              )}
            </div>
            <span className={`mt-2 text-sm ${
              step.id === currentStep
                ? "font-medium text-blue-600"
                : step.id < currentStep
                ? "font-medium text-green-500"
                : "text-gray-500"
            }`}>
              {step.name}
            </span>
          </div>
        ))}

        <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>
        <div
          className="absolute top-5 left-0 h-0.5 bg-green-500 -z-5 transition-all"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

const RentalSummary = () => {
  const [detailsOpen, setDetailsOpen] = useState(true);

  const carDetails = {
    name: "Tesla Model 3",
    image: "/api/placeholder/400/240",
    pickupDate: "Feb 25, 2025",
    returnDate: "Feb 28, 2025",
    pickupLocation: "San Francisco Airport",
    rentalDays: 3,
    pricePerDay: 110,
    insurance: 45,
    serviceFee: 25
  };

  const totalPrice = carDetails.pricePerDay * carDetails.rentalDays + carDetails.insurance + carDetails.serviceFee;

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-4 border-b border-gray-100">
        <button
          className="flex justify-between items-center w-full"
          onClick={() => setDetailsOpen(!detailsOpen)}
        >
          <h3 className="font-semibold text-lg">Rental Summary</h3>
          {detailsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {detailsOpen && (
        <div className="p-4">
          <div className="flex items-center space-x-4 pb-4 border-b border-gray-100">
            <img
              src={carDetails.image}
              alt={carDetails.name}
              className="w-20 h-12 rounded object-cover"
            />
            <div>
              <h4 className="font-medium">{carDetails.name}</h4>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar size={14} className="mr-1" />
                <span>{carDetails.rentalDays} days rental</span>
              </div>
            </div>
          </div>

          <div className="py-4 space-y-2 border-b border-gray-100">
            <div className="flex items-start space-x-2">
              <MapPin size={16} className="text-gray-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">Pickup Location</p>
                <p className="text-sm text-gray-600">{carDetails.pickupLocation}</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Clock size={16} className="text-gray-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">Pickup & Return</p>
                <p className="text-sm text-gray-600">{carDetails.pickupDate} - {carDetails.returnDate}</p>
              </div>
            </div>
            </div>
      

          <div className="py-4 border-b border-gray-100">
            <h4 className="font-medium mb-3">Price Details</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Car Rental ({carDetails.rentalDays} days × ${carDetails.pricePerDay})</span>
                <span>${carDetails.pricePerDay * carDetails.rentalDays}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Insurance</span>
                <span>${carDetails.insurance}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Service Fee</span>
                <span>${carDetails.serviceFee}</span>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>${totalPrice}</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Includes taxes and fees</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;