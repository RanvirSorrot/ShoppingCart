import React from 'react';
import { Link } from 'react-router-dom';

function AddToCart() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
        
        {/* Form Section */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-semibold mb-6 text-gray-800">Welcome to Pizza Delivery</h1>
          <form className="space-y-4">
            
            <div className="flex flex-col">
              <label className="text-gray-700">Name</label>
              <input type="text" className="border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            
            <div className="flex flex-col">
              <label className="text-gray-700">Email</label>
              <input type="email" className="border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            
            <div className="flex flex-col">
              <label className="text-gray-700">Phone</label>
              <div className="flex space-x-2">
                <input type="number" placeholder="Pin" className="border border-gray-300 rounded-md p-2 mt-1 w-1/3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                <input type="number" placeholder="Contact Number" className="border border-gray-300 rounded-md p-2 mt-1 w-2/3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
            </div>
            
            <div className="flex flex-col">
              <label className="text-gray-700">Pizza Size</label>
              <div className="flex space-x-4 mt-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                  <span>8 inch</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                  <span>16 inch</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                  <span>24 inch</span>
                </label>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="terms" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
              <label htmlFor="terms" className="text-gray-700">
                I agree to <a className="text-indigo-500 hover:underline">TERMS and CONDITIONS</a>
              </label>
            </div>

            <Link to="/OrderComplete">
              <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Order Now
              </button>
            </Link>
          </form>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src="https://images7.alphacoders.com/596/596343.jpg" alt="Pizza" className="rounded-lg object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default AddToCart;