import React, { useEffect } from 'react';
import './ProductDisplay.css';

const ProductDisplay = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Hoodie', price: 10, imageUrl: 'hoodie.png' },
    { id: 2, name: 'T-Shirt', price: 15, imageUrl: 'tee.png' },
    //added an item
    { id: 3, name: 'Jeans', price: 30, imageUrl: 'jeans.jpg' },
  ];
  useEffect(()=> {
      fetch('http://127.0.0.1:8000/api/v1/events/')
        .then()
  })
  return (
    <div className="ProductDisplay">
      {products.map((product) => (
        <div key={product.id} className="ProductItem">
          <img src={product.imageUrl} alt={product.name} />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
      );
};

export default ProductDisplay;
