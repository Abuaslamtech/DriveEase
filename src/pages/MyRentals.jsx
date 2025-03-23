import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Navbar from "../components/Navbar";
import { Car, Calendar, CheckCircle, AlertCircle, Clock, X } from "lucide-react";

const MyRentals = () => {
  const navigate = useNavigate();
  const { isAuthenticated, loading: authLoading } = useContext(AuthContext);
  const [rentals, setRentals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Redirect if not authenticated
    if (!authLoading && !isAuthenticated) {
      navigate("/login?redirect=/my-rentals");
      return;
    }

    // Fetch user rentals when authenticated
    if (isAuthenticated) {
      fetchRentals();
    }
  }, [isAuthenticated, authLoading, navigate]);

  const fetchRentals = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:3000/api/rentals/user", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch rentals");
      }
      
      setRentals(data.rentals || []);
    } catch (error) {
      console.error("Fetch rentals error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelRental = async (rentalId) => {
    if (!confirm("Are you sure you want to cancel this rental?")) {
      return;
    }
    
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:3000/api/rentals/${rentalId}/cancel`, {
        method: "PATCH",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || "Failed to cancel rental");
      }
      
      // Update the rental in the list
      setRentals(prev => 
        prev.map(rental => 
          rental._id === rentalId 
            ? { ...rental, rentalDetails: { ...rental.rentalDetails, status: "cancelled" } } 
            : rental
        )
      );
      
    } catch (error) {
      console.error("Cancel rental error:", error);
      alert("Failed to cancel rental: " + error.message);
    }
  };

  // Helper function to format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Helper function to get status badge color
  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-blue-100 text-blue-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Helper function to get status icon
  const getStatusIcon = (status) => {
    switch (status) {
      case "active":
        return <CheckCircle size={16} className="text-green-600" />;
      case "pending":
        return <Clock size={16} className="text-yellow-600" />;
      case "completed":
        return <CheckCircle size={16} className="text-blue-600" />;
      case "cancelled":
        return <X size={16} className="text-red-600" />;
      default:
        return <AlertCircle size={16} className="text-gray-600" />;
    }
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 bg-gray-50 py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-center items-center h-64">
              <p>Loading rental history...</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 bg-gray-50 py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-red-50 p-4 rounded-md text-red-700 mb-6">
              <p>Error: {error}</p>
              <button 
                onClick={fetchRentals}
                className="mt-2 text-sm underline"
              >
                Try Again
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-2xl font-bold mb-6">My Rental History</h1>
          
          {rentals.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <p className="text-gray-500 mb-4">You haven't rented any cars yet.</p>
              <button
                onClick={() => navigate("/")}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
              >
                Browse Cars
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {rentals.map((rental) => (
                <div 
                  key={rental._id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div className="flex items-center mb-4 md:mb-0">
                        <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center mr-4">
                          <Car size={32} className="text-gray-400" />
                        </div>
                        <div>
                          <h2 className="font-bold text-lg">
                            {rental.car.year} {rental.car.make} {rental.car.model}
                          </h2>
                          <p className="text-gray-500 text-sm flex items-center">
                            <Calendar size={14} className="mr-1" />
                            {formatDate(rental.rentalDetails.startDate)} - {formatDate(rental.rentalDetails.endDate)}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <span className={`flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(rental.rentalDetails.status)}`}>
                          {getStatusIcon(rental.rentalDetails.status)}
                          <span className="ml-1 capitalize">{rental.rentalDetails.status}</span>
                        </span>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-100 pt-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Booking Date</p>
                          <p className="font-medium">{formatDate(rental.createdAt)}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Booking ID</p>
                          <p className="font-medium">{rental._id.substring(0, 8).toUpperCase()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Total Cost</p>
                          <p className="font-medium">${rental.rentalDetails.totalCost.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end mt-6">
                      <button
                        onClick={() => navigate(`/car-detail?id=${rental.car.id}`)}
                        className="text-blue-600 hover:text-blue-800 text-sm mr-4"
                      >
                        View Car
                      </button>
                      
                      {rental.rentalDetails.status === "pending" && (
                        <button
                          onClick={() => handleCancelRental(rental._id)}
                          className="text-red-600 hover:text-red-800 text-sm"
                        >
                          Cancel Rental
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default MyRentals;