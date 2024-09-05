import React, { useState } from 'react';
import '../App.css';

function LandingPage() {
  const [email, setEmail] = useState("");
  return (
    <div className='bg-orange-200 h-screen w-max-xl overflow-x-hidden'>
      <div className='max-w-screen-lg mx-auto p-4'>
        <h1 className='text-4xl font-bold mb-4'>Delivery to The Doorstep</h1>
        <h3 className='text-xl mb-2'>✓ Choose Your Ingredients</h3>
        <h3 className='text-xl mb-2'>✓ Get Free Delivery 24/7</h3>
        <h3 className='text-xl mb-4'>✓ Special Gift Coupons</h3>
        <input
          type='text'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='border border-gray-300 rounded p-2 mb-4 w-full max-w-md'
        />
        <button
          style={{
            backgroundColor: 'red',
            color: 'white'
          }}
          className='px-4 py-2 rounded'
        >
          Subscribe
        </button>
        <div className='relative mt-4'>
          <img
            src="https://images7.alphacoders.com/596/596343.jpg"
            alt="Pizza"
            className='w-full max-w-xs h-auto mx-auto'
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
