import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function FetchPizzaList() {
  const [pizza, setPizza] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setPizza(response.data);
      })
      .catch(error => {
        setError("Error fetching pizzas.");
      });
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-5 '>
      {pizza.map(product => (
        <div
          key={product.id}
          className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
        >
          <img 
            src={product.image} 
            alt={product.title} 
            className="h-48 object-cover rounded-md mb-4" 
          />
          <h4 className="text-lg font-semibold mb-2">{product.title}</h4>
          <p className="text-gray-600 mb-2"><strong>Description:</strong> {product.description}</p>
          <p className="text-gray-600 mb-2"><strong>Price:</strong> ${product.price}</p>
          <p className="text-gray-600 mb-4"><strong>Rating:</strong> {product.rating.rate} ({product.rating.count} reviews)</p>
          <Link to={`/view/${product.id}`}>
            <button className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-2">
              View Details
            </button>
          </Link>
          <Link to={'/AddToCart'}>
            <button className="bg-green-300 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default FetchPizzaList;
