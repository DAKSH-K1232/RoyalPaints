import React from "react";
import Navbar from "../components/Navbar";
import "./ServiceDetail.css";

const ExteriorPaintingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="service-detail">
        <h1>Exterior Painting</h1>
        <p>
          Protect and beautify your exteriors with our weather-resistant
          painting solutions. Our team ensures durable and stunning results for
          your building.
        </p>
      </div>
    </div>
  );
};

export default ExteriorPaintingPage;
