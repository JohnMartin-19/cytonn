import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Modal.css';

const Modal = ({ addToCart,closeModal }) => {
  const navigate = useNavigate();
/*
  const goToCart = () => {
    closeModal();
    navigate('/cart');
  };

*/
  const [tickets,setTicket] = useState([])
  useEffect(()=>{
    fetch("http://127.0.0.1:8000/api/v1/tickets/1")
      .then(function(response){response.json()
      .then(function(data) {
          console.log(data);
          setTicket(data)
      });
    })
      .catch(function(error) {
        console.log('Fetch Error:', error);
      });
    },[setTicket])
  return (
    <div className="ModalOverlay">
      <div className="Modal">
      {tickets.map((ticket) => (
        <div key={ticket.id} className="TicketItem">
          <h2>{ticket.title}</h2>
          <p>{ticket.ticket_type}</p>
          <p>KSH{ticket.price}</p>
          <button onClick={addToCart}>Go to Cart</button>
          <button onClick={closeModal}>Continue Shopping</button>
        </div>
      ))}
        
        
      </div>
    </div>
  );
};

export default Modal;