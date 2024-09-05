import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen bg-orange-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl text-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-center">Hi, This is our Contact Page</h1>
        
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="mb-6 text-lg">
          We'd love to hear from you! Whether you have a question about our menu, want to provide feedback, or need assistance with your order, we’re here to help.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Customer Support</h2>
        <p className="mb-6 text-lg">
          For any inquiries or issues with your order, please contact our customer support team at <span className="font-semibold">[Customer Support Email]</span> or call us at <span className="font-semibold">[Customer Support Phone Number]</span>. 
          Our team is available <span className="font-semibold">[Hours of Operation]</span> to assist you.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
        <p className="mb-6 text-lg">
          Stay connected with us on social media! Follow us on <span className="font-semibold">[Social Media Handles]</span> to stay updated on the latest promotions, new menu items, and more.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Location</h2>
        <p className="text-lg">
          Visit us at <span className="font-semibold">[Physical Address]</span> if you’d like to experience our pizzas in person or for any other inquiries. We look forward to serving you!
        </p>
      </div>
    </div>
  );
}

export default Contact;
