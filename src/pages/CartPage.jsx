import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import Navbar from '../components/Navbar';
import './CartPage.css';
const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  // Add a check to ensure the cart exists and is an array
  if (!cart || !Array.isArray(cart)) {
    return <div>Your cart is empty!</div>;
  }

  return (
    <div className="cart-page">
      <Navbar />
      <h1 className="cart-header">Your Cart</h1>
      {cart.length === 0 ? (
        <div className="empty-cart-message">
          <p>Your cart is currently empty. Start adding products!</p>
        </div>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
              <div className="cart-item-price">Rs.{item.price}    </div>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                   Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="cart-footer">
        <div className="total-price">
          Total: Rs.{cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
        </div>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
