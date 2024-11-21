import React from "react";
import Navbar from "../components/Navbar"; // Navbar with logo
import Banner from "../components/Banner"; // Banner without "Royal Paints" heading
import ProductCard from "../components/ProductCard";
import "./HomePage.css";

const products = [
  {
    id: 1,
    name: "Premium Interior Paint",
    price: 50,
    image: "/images/interior-paint.jpg",
    description: "High-quality interior paint for beautiful walls."
  },
  {
    id: 2,
    name: "Exterior Wall Paint",
    price: 65,
    image: "/images/exterior-paint.jpg",
    description: "Weather-resistant paint for exterior walls."
  },
  {
    id: 3,
    name: "Eco-Friendly Primer",
    price: 30,
    image: "/images/primer.jpg",
    description: "Eco-friendly primer for a perfect base coat."
  },
  {
    id: 4,
    name: "Glossy Finish Paint",
    price: 75,
    image: "/images/glossy-paint.jpg",
    description: "Glossy finish paint for a luxurious look."
  },
  {
    id: 5,
    name: "Matte Finish Paint",
    price: 70,
    image: "/images/matte-paint.png",
    description: "Matte finish paint for a sophisticated appearance."
  },
];

const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar /> {/* Navbar includes logo */}
      <Banner /> {/* Banner updated without duplicate text */}
      <h1 style={{ color: "black" }}>Featured Products</h1>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
