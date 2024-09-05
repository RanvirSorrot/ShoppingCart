import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-orange-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl text-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>

        <p className="text-lg mb-6">
          Welcome to <span className="font-semibold">[Your Pizza Delivery Brand Name]</span>!
        </p>

        <p className="mb-4">
          At <span className="font-semibold">[Your Pizza Delivery Brand Name]</span>, we believe that a great pizza is more than just a meal—it's an experience. 
          Founded on the love for authentic, mouth-watering pizzas, our mission is to bring the joy of freshly baked pizza straight to your door.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>

        <p className="mb-4">
          Our journey began with a simple idea: to create the best pizza delivery experience for our community. 
          What started as a small neighborhood pizzeria has grown into a beloved pizza delivery service known for quality, taste, and exceptional customer service.
        </p>

        <h2 className="text-2xl font-semibold mb-4">What Makes Us Different</h2>

        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><span className="font-semibold">Quality Ingredients:</span> We source the finest ingredients to ensure that every pizza we make is bursting with flavor. From farm-fresh vegetables to premium cheeses and hand-tossed dough, we never compromise on quality.</li>
          <li><span className="font-semibold">Passionate Craftsmanship:</span> Our skilled chefs are passionate about creating pizzas that not only taste amazing but also bring people together. Every pizza is crafted with care, from the first sprinkle of seasoning to the final touch of your favorite toppings.</li>
          <li><span className="font-semibold">Fast and Reliable Delivery:</span> We understand that when you’re craving pizza, you want it fast. Our dedicated delivery team ensures that your order arrives hot and fresh, right when you need it.</li>
        </ul>

      </div>
    </div>
  );
}

export default About;
