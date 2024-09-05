import React from 'react';
import '../App.css'; // Make sure the path is correct
import { Link } from 'react-router-dom';

function SideNav() {
  return (
    <div className= 'bg-gray-800 text-white h-screen fixed top-0 left-0 w-36' >
      <h2>Sidebar</h2>
      <ul className=' relative top-20'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/Fetch">Fetch</Link></li>
        <li>Pages</li>
        <li>Events</li>
        <li>Landing</li>
      </ul>

      <div className='relative top-80 '>
       <a href='https://www.instagram.com/ranvirsorrot/'><img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" className=' relative size-6 top-2 h-7 '/></a> 
       <a href='https://www.linkedin.com/in/ranvir-sorrot-956239220/'><img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" className='relative size-6 h-18 bottom-5 left-9' /></a> 
       <a><img src="https://tse3.mm.bing.net/th?id=OIP.ZweGejPwbT5wwshQ2-8qUQHaHa&pid=Api&P=0&h=220" className=' relative size-6 top-1'/></a>
       <a href='https://www.facebook.com/ranvirsorrot3005/'><img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" className=' relative size-6 bottom-5 left-9'/></a>
      </div>

      <button className='absolute bottom-0 w-full p-4 bg-gray-700 hover:bg-gray-600 left-0'>
        Order Online
      </button>
    </div>
  );
}




export default SideNav;