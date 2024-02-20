import './App.css';
import React, { useState, useEffect } from 'react';
import Tricks from '../Tricks/Tricks.jsx';
import TrickForm from '../TrickForm/TrickForm.jsx';



function App() {

const [tricks, setTricks] = useState([]);
const [newTrick, setNewTrick] = useState({
  stance: '',
  name: '',
  obstacle: '',
  tutorial: ''
});

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


const handleNewTrickChange = (event) => {
  const { name, value } = event.target;
  setNewTrick(prevState => ({
    ...prevState,
    [name]: value
  }));
};

const addTrick = (event) => {
  event.preventDefault();
  const trickToAdd = { ...newTrick, id: Date.now() };
  setTricks(prevTricks => [...prevTricks, trickToAdd]);
  setNewTrick({ stance: '', name: '', obstacle: '', tutorial: '' });
};


return (
  <div className="App">
    <h1>Sick Trick Wish List</h1>
    <TrickForm newTrick={newTrick} onNewTrickChange={handleNewTrickChange} onAddTrick={addTrick} />
    <Tricks tricks={tricks} />
  </div>
);
}


export default App; 
