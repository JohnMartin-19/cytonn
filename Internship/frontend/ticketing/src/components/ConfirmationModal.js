import React from 'react';
import './Modal.css';

const ConfirmationModal = ({ closeModal }) => {
  return (
    <div className="ModalOverlay">
      <div className="ConfirmationModal">
        <p>Order submitted. Your ticket has been reserved!</p>
        <button onClick={closeModal}>OK</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
