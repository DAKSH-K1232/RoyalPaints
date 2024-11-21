import React from "react";
import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Premium Interior Paint",
    price: 300,
    image: "/images/interior-paint.jpg",
    description: "High-quality interior paint for beautiful walls."
  },
  {
    id: 2,
    name: "Exterior Wall Paint",
    price: 380,
    image: "/images/exterior-paint.jpg",
    description: "Weather-resistant paint for exterior walls."
  },
  {
    id: 3,
    name: "Eco-Friendly Primer",
    price: 700,
    image: "/images/primer.jpg",
    description: "Eco-friendly primer for a perfect base coat."
  },
  {
    id: 4,
    name: "Glossy Finish Paint",
    price: 450,
    image: "/images/glossy-paint.jpg",
    description: "Glossy finish paint for a luxurious look."
  },
  {
    id: 5,
    name: "Matte Finish Paint",
    price: 500,
    image: "/images/matte-paint.png",
    description: "Matte finish paint for a sophisticated appearance.",
  },
];

const ProductDetailsPage = () => {
  const { productId } = useParams(); // Get the product ID from the URL
  const product = products.find((item) => item.id === parseInt(productId)); // Find product by ID

  if (!product) {
    return <h1>Product Not Found</h1>; // Handle invalid product ID
  }

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "300px", margin: "20px 0" }}
      />
      <p>{product.description}</p>
      <h2>Rs.{product.price}</h2>
    </div>
  );
};

export default ProductDetailsPage;
