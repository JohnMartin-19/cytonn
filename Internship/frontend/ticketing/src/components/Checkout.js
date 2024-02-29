import React, { useState} from 'react';

import { useNavigate } from 'react-router-dom';
import ConfirmationModal from './ConfirmationModal';
import './Checkout.css';

const Checkout = ( {clearCart} ) => {
  
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const navigate = useNavigate();

 
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowConfirmationModal(true)
    clearCart();
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data); // Handle response from Django backend
    } catch (error) {
      console.error('Error:', error);
    }
  };
  /*
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  */
  const closeConfirmationModal = () => {
    setShowConfirmationModal(false);
    navigate('/');
  };
  return (
    <div className="CheckoutContainer">
      <div className="Checkout">
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>

        <label htmlFor="Name">Name</label>
          <input 
            type="text" 
            name="Name" 
            id="Name"
            value={formData.Name} 
            onChange={handleChange}
          />

          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email"
            value={formData.email} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="phone_number">Phone</label>
          <input 
            type="text" 
            name="phone_number" 
            id="phone_number"
            value={formData.address} 
            onChange={handleChange} 
            required 
          />

          <button type="submit" className="ContinueButton">Submit Order</button>
        </form>
      </div>
      {showConfirmationModal && (
        <ConfirmationModal closeModal={closeConfirmationModal} />
      )}
    </div>
  );
};

export default Checkout;