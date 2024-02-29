import React, { useState} from 'react';

import { useNavigate } from 'react-router-dom';
import ConfirmationModal from './ConfirmationModal';
import './Checkout.css';

const Checkout = ( {clearCart} ) => {
  
    
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const navigate = useNavigate();

 
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    let formData = {
      name: document.getElementById('name').value,
      email:document.getElementById('email').value,
      number:document.getElementById('phone_number').value
    }
    const myHeaders = new Headers();
      myHeaders.append("Authorization", "App 87a0277c2f3378953877089eed496a54-7f4cda49-dbf7-4d6e-bef1-4c8f0b34a50c");
      myHeaders.append("Accept", "application/json");

    const formdata = new FormData();
      formdata.append("from", "johnnkonge2020@gmail.com");
      formdata.append("subject", "Free trial");
      formdata.append("to", formData.email);
      formdata.append("text", "Hi TestUser, this is a test message from Infobip. Have a nice day!");

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow"
    };
    fetch("https://e19152.api.infobip.com/email/3/send", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
    
    setShowConfirmationModal(true)
    clearCart();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/reserved/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      },[]);
      console.log(formData)
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
            name="name" 
            id="name"
             
          />

          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email"  
            required 
          />

          <label htmlFor="phone_number">Phone</label>
          <input 
            type="text" 
            name="phone_number" 
            id="phone_number" 
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