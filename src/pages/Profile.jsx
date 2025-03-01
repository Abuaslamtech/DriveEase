import React, { useState } from "react";
import {
  User,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Edit,
  Clock,
  Car,
  CreditCard,
  ChevronRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold mb-8">My Account</h1>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar */}
            <div className="md:w-1/4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4 bg-blue-600 text-white">
                  <div className="flex items-center space-x-3">
                    <img
                      src="/api/placeholder/64/64"
                      alt="Profile"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h2 className="font-semibold">John Doe</h2>
                      <p className="text-sm text-blue-100">
                        Member since Jan 2023
                      </p>
                    </div>
                  </div>
                </div>

                <nav className="p-2">
                  <button
                    onClick={() => setActiveTab("profile")}
                    className={`flex items-center space-x-3 w-full p-3 rounded-md text-left ${
                      activeTab === "profile"
                        ? "bg-blue-50 text-blue-600"
                        : "hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    <User size={18} />
                    <span>My Profile</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("reservations")}
                    className={`flex items-center space-x-3 w-full p-3 rounded-md text-left ${
                      activeTab === "reservations"
                        ? "bg-blue-50 text-blue-600"
                        : "hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    <Calendar size={18} />
                    <span>My Reservations</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("payment")}
                    className={`flex items-center space-x-3 w-full p-3 rounded-md text-left ${
                      activeTab === "payment"
                        ? "bg-blue-50 text-blue-600"
                        : "hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    <CreditCard size={18} />
                    <span>Payment Methods</span>
                  </button>
                </nav>
              </div>
            </div>

            {/* Content */}
            <div className="md:w-3/4">
              {activeTab === "profile" && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">
                      Personal Information
                    </h2>
                    <button className="flex items-center text-blue-600 hover:text-blue-800">
                      <Edit size={16} className="mr-1" />
                      <span>Edit</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                    <div className="flex space-x-3">
                      <User size={18} className="text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">Full Name</p>
                        <p className="font-medium">John Doe</p>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <Mail size={18} className="text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">Email Address</p>
                        <p className="font-medium">john.doe@example.com</p>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <Phone size={18} className="text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">Phone Number</p>
                        <p className="font-medium">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <Calendar size={18} className="text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">Date of Birth</p>
                        <p className="font-medium">January 15, 1985</p>
                      </div>
                    </div>

                    <div className="flex space-x-3 md:col-span-2">
                      <MapPin size={18} className="text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">Address</p>
                        <p className="font-medium">123 Main Street, Apt 4B</p>
                        <p className="font-medium">San Francisco, CA 94103</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-semibold">
                        Driver's License
                      </h2>
                      <button className="flex items-center text-blue-600 hover:text-blue-800">
                        <Edit size={16} className="mr-1" />
                        <span>Edit</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                      <div>
                        <p className="text-sm text-gray-500">License Number</p>
                        <p className="font-medium">DL12345678</p>
                      </div>

                      <div>
                        <p className="text-sm text-gray-500">Expiration Date</p>
                        <p className="font-medium">January 15, 2028</p>
                      </div>

                      <div>
                        <p className="text-sm text-gray-500">State Issued</p>
                        <p className="font-medium">California</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "reservations" && (
                <div>
                  <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-semibold">
                        Upcoming Reservations
                      </h2>
                      <a
                        href="/reservations"
                        className="text-blue-600 hover:text-blue-800 text-sm"
                      >
                        View All
                      </a>
                    </div>

                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="p-4 border-b border-gray-200">
                        <div className="flex flex-col sm:flex-row justify-between">
                          <div className="flex space-x-4 mb-4 sm:mb-0">
                            <img
                              src="/api/placeholder/80/60"
                              alt="Car"
                              className="w-20 h-14 rounded object-cover"
                            />
                            <div>
                              <h3 className="font-semibold">Tesla Model 3</h3>
                              <div className="flex items-center text-sm text-gray-600">
                                <Calendar size={14} className="mr-1" />
                                <span>Feb 25 - Feb 28, 2025</span>
                              </div>
                              <div className="flex items-center text-sm text-gray-600 mt-1">
                                <MapPin size={14} className="mr-1" />
                                <span>San Francisco Airport</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="bg-blue-100 text-blue-800 text-sm py-1 px-3 rounded-full">
                              Confirmed
                            </div>
                            <ChevronRight
                              size={20}
                              className="ml-3 text-gray-400"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 text-center text-gray-500 text-sm">
                      <p>
                        You can modify or cancel your reservation up to 24 hours
                        before pickup time.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-semibold">Rental History</h2>
                    </div>

                    <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
                      <div className="p-4 border-b border-gray-200">
                        <div className="flex flex-col sm:flex-row justify-between">
                          <div className="flex space-x-4 mb-4 sm:mb-0">
                            <img
                              src="/api/placeholder/80/60"
                              alt="Car"
                              className="w-20 h-14 rounded object-cover"
                            />
                            <div>
                              <h3 className="font-semibold">BMW X5</h3>
                              <div className="flex items-center text-sm text-gray-600">
                                <Calendar size={14} className="mr-1" />
                                <span>Jan 10 - Jan 15, 2025</span>
                              </div>
                              <div className="flex items-center text-sm text-gray-600 mt-1">
                                <MapPin size={14} className="mr-1" />
                                <span>Los Angeles Downtown</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="bg-green-100 text-green-800 text-sm py-1 px-3 rounded-full">
                              Completed
                            </div>
                            <ChevronRight
                              size={20}
                              className="ml-3 text-gray-400"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="p-4 border-b border-gray-200">
                        <div className="flex flex-col sm:flex-row justify-between">
                          <div className="flex space-x-4 mb-4 sm:mb-0">
                            <img
                              src="/api/placeholder/80/60"
                              alt="Car"
                              className="w-20 h-14 rounded object-cover"
                            />
                            <div>
                              <h3 className="font-semibold">Toyota Camry</h3>
                              <div className="flex items-center text-sm text-gray-600">
                                <Calendar size={14} className="mr-1" />
                                <span>Dec 05 - Dec 07, 2024</span>
                              </div>
                              <div className="flex items-center text-sm text-gray-600 mt-1">
                                <MapPin size={14} className="mr-1" />
                                <span>San Francisco Downtown</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="bg-green-100 text-green-800 text-sm py-1 px-3 rounded-full">
                              Completed
                            </div>
                            <ChevronRight
                              size={20}
                              className="ml-3 text-gray-400"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "payment" && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Payment Methods</h2>
                    <button className="flex items-center text-blue-600 hover:text-blue-800">
                      <span>Add New Card</span>
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4 flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-100 p-2 rounded">
                          <CreditCard size={24} className="text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">Visa ending in 4567</p>
                          <p className="text-sm text-gray-500">Expires 04/27</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="bg-green-100 text-green-800 text-xs py-1 px-2 rounded-full">
                          Default
                        </span>
                        <button className="text-gray-500 hover:text-gray-700">
                          <Edit size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4 flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-100 p-2 rounded">
                          <CreditCard size={24} className="text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">
                            Mastercard ending in 8901
                          </p>
                          <p className="text-sm text-gray-500">Expires 09/26</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="text-gray-500 hover:text-gray-700">
                          <Edit size={16} />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <h3 className="font-semibold mb-4">Billing Address</h3>
                    <div className="flex space-x-3">
                      <MapPin size={18} className="text-gray-400 mt-0.5" />
                      <div>
                        <p className="font-medium">John Doe</p>
                        <p className="text-gray-600">123 Main Street, Apt 4B</p>
                        <p className="text-gray-600">San Francisco, CA 94103</p>
                        <p className="text-gray-600">United States</p>
                      </div>
                    </div>
                  </div>
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

export default ProfilePage;
