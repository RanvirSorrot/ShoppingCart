import React from 'react';
import LandingPage from './LandingPage';
import FetchPizzaList from './FetchPizzaList';
import '../App.css';

function Home() {
  return (
    <div className='relative left-48 max-w-screen-xl'>
      <LandingPage/>
      <FetchPizzaList />
    </div>
  );
}

export default Home;
