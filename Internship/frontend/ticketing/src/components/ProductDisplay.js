import React, { useEffect, useState } from 'react';
import './ProductDisplay.css';
import { useNavigate } from 'react-router-dom';
const ProductDisplay = () => {
  const navigate = useNavigate()
  const goToTicket = () => {
    
    navigate('/ticket');
  };
    const [events,setEvent] = useState([])
    useEffect(()=>{
      fetch("http://127.0.0.1:8000/api/v1/events/")
        .then(function(response){response.json()
        .then(function(data) {
            console.log(data);
            setEvent(data)
        });
      })
        .catch(function(error) {
          console.log('Fetch Error:', error);
        });
      },[setEvent])
  return (
    <div className="EventDisplay">
      {events.map((event) => (
        <div key={event.id} className="EventItem">
          <img src={event.image} alt={event.name} />
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          <p>Location:{event.location}</p>
          <p>Starting:{event.start_date}</p>
          <p>Ending:{event.end_date}</p>
          <p>Attendees:{event.attendees}</p>
          <button onClick={goToTicket}>Book Ticket</button>
        </div>
      ))}
    </div>
      );
};

export default ProductDisplay;
