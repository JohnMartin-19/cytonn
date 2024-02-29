import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cartItems }) => {
  const navigate = useNavigate();

  const getTotalPrice = () => {
    return cartItems.reduce((total, ticket) => total + ticket.quantity * ticket.price, 0);
  };

  const goToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="Cart">
      <table>
        <thead>
          <tr>
            <th>Ticket Number</th>
            <th>Ticket_Type</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length === 0 ? (
            <tr>
              <td colSpan="4">Your cart is empty.</td>
            </tr>
          ) : (
            cartItems.map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.title}</td>
                <td>{ticket.quantity}</td>
                <td>${ticket.price}</td>
              </tr>
            ))
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">Total</td>
            <td>${getTotalPrice()}</td>
          </tr>
        </tfoot>
      </table>
      <button onClick={goToCheckout} disabled={cartItems.length === 0}>Go to Checkout</button>
    </div>
  );
};

export default Cart;