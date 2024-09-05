import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ViewItem() {
  const { id } = useParams(); 
  const [pizza, setPizza] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => setPizza(response.data))
      .catch(error => {
        setError("Error fetching pizza details.");
        console.error(error);
      });
  }, [id]);

  if (error) return <div className="text-red-600 text-center mt-4">{error}</div>;
  if (!pizza) return <div className="text-gray-500 text-center mt-4">Loading...</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10">
      {pizza.image && <img src={pizza.image} alt={pizza.title} className="w-full h-64 object-cover rounded-lg mb-4" />}
      <h4 className="text-2xl font-bold mb-2">{pizza.title}</h4>
      <p className="text-lg text-gray-700 mb-2"><strong>Description:</strong> {pizza.description}</p>
      <p className="text-lg text-gray-700 mb-2"><strong>Price:</strong> ${pizza.price}</p>
      <p className="text-lg text-gray-700"><strong>Rating:</strong> {pizza.rating.rate} ({pizza.rating.count} reviews)</p>
      <Link to={'/AddToCart'}>
  <button className="bg-red-400 hover:bg-red-700 text-white font-bold p-1 rounded mt-2">
    Add to Cart
  </button>
</Link>
    </div>
  );
}

export default ViewItem;
