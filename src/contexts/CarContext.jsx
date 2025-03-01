import React, { createContext, useState, useEffect } from "react";

// Image generation function
export const createCarImage = (car, angle = "front") => {
  if (!car || !car.make || !car.model || !car.year) {
    console.warn("Invalid car data:", car);
    return "https://via.placeholder.com/400x240?text=No+Image"; // Fallback placeholder
  }
  const url = new URL("https://cdn.imagin.studio/getimage");
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("paintdescription", encodeURIComponent(car.color || "Silver"));
  url.searchParams.append("modelFamily", encodeURIComponent(car.model.split(" ")[0] || car.model));
  url.searchParams.append("make", encodeURIComponent(car.make));
  url.searchParams.append("modelYear", encodeURIComponent(`${car.year}`));
  url.searchParams.append("angle", encodeURIComponent(angle));
  return url.toString();
};

// Create the context
const CarContext = createContext();

// Provider component
const CarProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(null);

  // Fetch data from API and override the image property using createCarImage()
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const url = `https://www.freetestapi.com/api/v1/cars${limit ? `?limit=${limit}` : ""}`;
        console.log("Fetching from", url);
        const response = await fetch(url);
        const data = await response.json();
        
        // Generate image URL for each car using createCarImage()
        const modifiedData = data.map((car) => ({
          ...car,
          image: createCarImage(car, "front"), // default angle is "front"
        }));
        
        console.log("Modified car data:", modifiedData);
        setCars(modifiedData);
      } catch (error) {
        console.error("Error fetching car data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchCars();
  }, [limit]);

  return (
    <CarContext.Provider value={{ cars, loading, setLimit, createCarImage }}>
      {children}
    </CarContext.Provider>
  );
};

export { CarContext, CarProvider };