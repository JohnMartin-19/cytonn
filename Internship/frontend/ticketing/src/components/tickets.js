import React,{useEffect,useState} from "react";
import "./ticket.css"
function Ticket({addToCart}){
    const [tickets,setTicket] = useState([])
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/v1/tickets/")
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
    <div className="TicketDisplay">
      {tickets.map((ticket) => (
        <div key={ticket.id} className="TicketItem">
          <h2>{ticket.title}</h2>
          <p>{ticket.ticket_type}</p>
          <p>KSH{ticket.price}</p>
          <button onClick={addToCart}>Reserve Ticket </button>
        </div>
      ))}
        
        
      
    </div>
)}
export default Ticket