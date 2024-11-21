import React, { useState } from "react";
import "./Filter.css"; // Add your styles

const Filter = ({ onFilterChange }) => {
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const handleFilterChange = () => {
    onFilterChange({ category, price });
  };

  return (
    <div className="filter">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="filter-dropdown"
      >
        <option value="">All Categories</option>
        <option value="interior">Interior Paint</option>
        <option value="exterior">Exterior Paint</option>
        <option value="primer">Primer</option>
      </select>
      <select
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="filter-dropdown"
      >
        <option value="">All Prices</option>
        <option value="0-50">Under $50</option>
        <option value="50-100">$50 - $100</option>
        <option value="100-200">$100 - $200</option>
      </select>
      <button onClick={handleFilterChange} className="filter-btn">
        Apply Filters
      </button>
    </div>
  );
};

export default Filter;
