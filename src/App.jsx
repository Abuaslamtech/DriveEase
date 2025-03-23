import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import CarDetail from "../src/pages/CarDetail";
import Catalog from "../src/pages/Catalog";
import Auth from "../src/pages/Auth";
import { CarProvider } from "./contexts/CarContext";
import { AuthProvider } from "./contexts/AuthContext";
import MyRentals from "./pages/MyRentals";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <AuthProvider>
      <CarProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/car-detail" element={<CarDetail />} />
          <Route path="/car-page" element={<Catalog />} />
          <Route path="/my-rentals" element={<MyRentals />} />
          <Route path="/about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </CarProvider>
    </AuthProvider>
  );
}

export default App;
