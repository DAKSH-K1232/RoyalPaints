import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"; // Reuse Navbar
import "./AuthPage.css";

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(false); // Toggle between Signup and Login
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate(); // Hook for navigation

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      console.log("Signup Data:", formData);
      alert("Signup successful! Welcome to Royal Paints and Hardware.");
    } else {
      console.log("Login Data:", { email: formData.email, password: formData.password });
      alert("Login successful! Welcome back to Royal Paints and Hardware.");
    }

    // Reset the form
    setFormData({ name: "", email: "", password: "" });

    // Redirect to the homepage
    navigate("/");
  };

  return (
    <div className="auth-page">
      <Navbar />
      <div className="auth-container">
        <h1>{isSignup ? "Sign Up" : "Login"}</h1>
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="auth-button">
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>
        <p className="toggle-auth">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            type="button"
            className="toggle-button"
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
