import { useState } from "react";
import {
  Car,
  User,
  LogIn,
  Search,
  Calendar,
  MapPin,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import FeatureSection from "../components/FeatureSection";
import PopularCars from "../components/PopularCars";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <PopularCars />
      <FeatureSection />
      <Footer />
    </div>
  );
};

export default HomePage;
