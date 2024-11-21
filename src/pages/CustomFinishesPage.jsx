import React from "react";
import Navbar from "../components/Navbar";
import "./ServiceDetail.css";

const CustomFinishesPage = () => {
  return (
    <div>
      <Navbar />
      <div className="service-detail">
        <h1>Custom Finishes</h1>
        <p>
          Add a touch of uniqueness with our custom finishes. From decorative
          textures to glossy effects, we bring your vision to life with
          precision.
        </p>
      </div>
    </div>
  );
};

export default CustomFinishesPage;
