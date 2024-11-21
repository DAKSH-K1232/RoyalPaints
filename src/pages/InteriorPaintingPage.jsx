import React from "react";
import Navbar from "../components/Navbar";
import "./ServiceDetail.css";

const InteriorPaintingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="service-detail">
        <h1>Interior Painting</h1>
        <p>
          Transform your interiors with our professional painting services. We
          use premium-quality paints and techniques to give your walls a
          flawless finish that lasts for years.
        </p>
      </div>
    </div>
  );
};

export default InteriorPaintingPage;
