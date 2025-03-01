import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import CarDetail from "../src/pages/CarDetail";
import Catalog from "../src/pages/Catalog";
import Auth from "../src/pages/Auth";
import {CarProvider} from "./contexts/CarContext";


function App() {
  return (
    <CarProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/car-detail" element={<CarDetail />} />
        <Route path="/car-page" element={<Catalog />} />
      </Routes>
    </CarProvider>
  );
}

export default App;
