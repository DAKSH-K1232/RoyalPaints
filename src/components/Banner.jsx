import React from "react";
import { useNavigate } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate("/products");
  };

  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Transform Your Home with Royal Paints</h1> {/* Banner Title */}
        <p>Discover our premium range of paints for every need and style.</p>
        <button className="shop-now-btn" onClick={handleShopNowClick}>
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
