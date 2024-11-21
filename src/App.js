import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProductsPage from "./pages/ProductsPage";
import ServicesPage from "./pages/ServicesPage";
import InteriorPaintingPage from "./pages/InteriorPaintingPage";
import ExteriorPaintingPage from "./pages/ExteriorPaintingPage";
import ColorConsultationPage from "./pages/ColorConsultationPage";
import CustomFinishesPage from "./pages/CustomFinishesPage";
import AuthPage from "./pages/AuthPage";
import CartPage from './pages/CartPage';
import { CartProvider } from "./contexts/CartContext"; // Import CartProvider

const App = () => {
  return (
    // Wrap the entire app in CartProvider so cart context is available to all components
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/interior-painting" element={<InteriorPaintingPage />} />
          <Route path="/services/exterior-painting" element={<ExteriorPaintingPage />} />
          <Route path="/services/color-consultation" element={<ColorConsultationPage />} />
          <Route path="/services/custom-finishes" element={<CustomFinishesPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
