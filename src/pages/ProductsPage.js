import React from "react";
import { useCart } from "../contexts/CartContext"; // Import the CartContext
import "./ProductsPage.css";
import Navbar from "../components/Navbar";
const products = [
  {
    id: 1,
    name: "Premium Interior Paint",
    price: 300,
    image: "/images/interior-paint.jpg",
    description: "High-quality interior paint for beautiful walls."
  },
  {
    id: 2,
    name: "Exterior Wall Paint",
    price: 380,
    image: "/images/exterior-paint.jpg",
    description: "Weather-resistant paint for exterior walls."
  },
  {
    id: 3,
    name: "Eco-Friendly Primer",
    price: 700,
    image: "/images/primer.jpg",
    description: "Eco-friendly primer for a perfect base coat."
  },
  {
    id: 4,
    name: "Glossy Finish Paint",
    price: 450,
    image: "/images/glossy-paint.jpg",
    description: "Glossy finish paint for a luxurious look."
  },
  {
    id: 5,
    name: "Matte Finish Paint",
    price: 500,
    image: "/images/matte-paint.png",
    description: "Matte finish paint for a sophisticated appearance.",
  },
  {
    id: 6,
    name: "Hammer",
    price: 300,
    image: "/images/hammer.png",
    description: "Durable and ergonomic hammer for all your DIY projects.",
  },
  {
    id: 7,
    name: "Screwdriver Set",
    price: 550,
    image: "/images/screwdriver-set.jpg",
    description: "Complete set of screwdrivers for versatile use.",
  },
  {
    id: 8,
    name: "Paint Brush Kit",
    price: 500,
    image: "/images/paint-brush-kit.jpg",
    description: "Set of brushes for precision painting and detailing.",
  },
  {
    id: 9,
    name: "Utility Knife",
    price: 1100,
    image: "/images/utility-knife.jpg",
    description: "Sharp and safe utility knife for cutting and trimming.",
  },
];

const ProductsPage = () => {
  const { addToCart } = useCart(); // Access addToCart from the CartContext

  const handleAddToCart = (product) => {
    addToCart(product); // Add the clicked product to the cart
    alert(`${product.name} has been added to your cart!`); // Alert message
  };

  return (
    <div className="products-page">
      <Navbar />
      <h1>Our Products</h1>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: Rs.{product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
