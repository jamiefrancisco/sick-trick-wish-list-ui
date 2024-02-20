import './App.css';
import React, { useState, useEffect } from 'react';
import Tricks from '../Tricks/Tricks.jsx'



function App() {

const [tricks, setTricks] = useState([]);

useEffect(() => {
  fetch('http://localhost:3001/api/v1/tricks')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => setTricks(data))
    .catch(error => console.error("Failed to load data:", error));
}, []);


  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Tricks tricks={tricks} />
    </div>
  );
}

export default App; 
