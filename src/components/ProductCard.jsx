import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate("/products"); // Navigate to the Products page
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="product-price">Rs.{product.price}</p>
      <button className="buy-now-button" onClick={handleBuyNow}>
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
