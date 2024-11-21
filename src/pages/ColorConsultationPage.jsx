import React from "react";
import Navbar from "../components/Navbar";
import "./ServiceDetail.css";

const ColorConsultationPage = () => {
  return (
    <div>
      <Navbar />
      <div className="service-detail">
        <h1>Color Consultation</h1>
        <p>
          Not sure which color to choose? Our experts provide personalized color
          consultations to help you create the perfect ambiance for your
          spaces.
        </p>
      </div>
    </div>
  );
};

export default ColorConsultationPage;
