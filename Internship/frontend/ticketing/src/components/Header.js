//import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import UserContext from '../contexts/UserContext';
import './Header.css';

const Header = () => 
{

  
  
  
    return (
      <header className="Header">
        <Link to="/">
          <h1>CYTONN TICKETS</h1>
        </Link>
        <nav>
          {}
          <Link to="/cart" className="CartIcon">
            <img src="/cart.png" alt="Cart"/>
          </Link>
        </nav>
      </header>
    );
  };
  
  export default Header;