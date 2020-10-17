import React from 'react';
import './App.css';
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import Restaurants from './components/RestaurantProfile'

function App() {
  return (
    <div>
      <Navbar/>
      <br/>
      <br/>
      <br/>
      <br/>
      <HomePage/>
      <Restaurants/>
    </div>
  );
}

export default App;
