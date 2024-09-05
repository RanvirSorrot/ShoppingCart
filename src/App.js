import React from 'react';
import './App.css';
import Home from './Components/Home';
import SideNav from './Components/SideNav';
import ViewItem from './Components/ViewItem';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import AddToCart from './Components/AddToCart';
import OrderComplete from './Components/OrderComplete';
import FetchPizzaList from './Components/FetchPizzaList';
import LandingPage from './Components/LandingPage';
import About from './Components/About';
import Contact from './Components/Contact';


function App() {
  
  return (
    <>
        <div className="App">
  
  <BrowserRouter>
  <SideNav/>
 <Routes>
   <Route path='/' element = {<Home/>}  />
   </Routes>
   <Routes>
   <Route path="/view/:id" element = {<ViewItem/>} /> 
   <Route path="/Fetch" element = {<FetchPizzaList/>} />   
   <Route path='/AddToCart' element = {<AddToCart/>} />
   <Route path='/OrderComplete' element = {<OrderComplete/>}/>
   <Route path="/About" element = {<About/>} />
   <Route path="/Contact" element = {<Contact/>} />
   </Routes>  
 </BrowserRouter>
 
</div>

    </>

  );
}

export default App;


