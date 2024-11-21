import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"; // Reuse the Navbar component
import "./ServicesPage.css";

const services = [
  {
    id: 1,
    title: "Interior Painting",
    description: "Professional interior painting for a fresh look.",
    icon: "🎨",
    link: "/services/interior-painting",
  },
  {
    id: 2,
    title: "Exterior Painting",
    description: "Durable and weather-resistant painting solutions.",
    icon: "🏠",
    link: "/services/exterior-painting",
  },
  {
    id: 3,
    title: "Color Consultation",
    description: "Expert advice to choose the perfect color palette.",
    icon: "🖌️",
    link: "/services/color-consultation",
  },
  {
    id: 4,
    title: "Custom Finishes",
    description: "Unique and decorative finishes for your spaces.",
    icon: "✨",
    link: "/services/custom-finishes",
  },
];

const ServicesPage = () => {
  return (
    <div className="services-page">
      <Navbar />
      <h1 className="page-title">Services we offer</h1>
      <div className="services-container">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <span className="service-icon">{service.icon}</span>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <Link to={service.link} className="service-link">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
