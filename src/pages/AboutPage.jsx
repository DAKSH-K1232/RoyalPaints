import React from "react";
import Navbar from "../components/Navbar"; // Import Navbar
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div>
      <Navbar /> {/* Add Navbar here */}
      <div className="about-content">
        <h1>About Us</h1>
        <p>Welcome to Royal Paints and Hardware, owned and managed by Mr. Sumit, your trusted destination for all things related to paints, tools, and painting services. At Royal Paints and Hardware, we take pride in offering a wide range of high-quality paints for both interior and exterior applications, catering to every aesthetic and functional need. Alongside our diverse paint collection, we provide a variety of tools and accessories to help you achieve professional-grade results. Our expert services include color consultations, paint application, and surface preparation to ensure your spaces look flawless. Whether you're renovating your home, starting a new project, or simply exploring ideas, we’re here to support you every step of the way. Visit us and experience unparalleled quality, service, and expertise!</p>
      </div>
    </div>
  );
};

export default AboutPage;
